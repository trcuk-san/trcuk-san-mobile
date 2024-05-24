import {Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useContext, useState} from 'react';
import {TextInput} from 'react-native-paper';
import {Eye, EyeSlash} from 'phosphor-react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/loginStyle';
import {login} from '../services/auth';
import AuthContext from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackList} from '../stacks';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setLoggedIn} = useContext(AuthContext);
  const [errorsEmail, setErrorsEmail] = useState('');
  const [errorsPassword, setErrorsPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackList>>();

  const handleLogin = async () => {
    try {
      console.log('login working', email);
      const res: any = await login({
        email: email,
        password: password,
      });
      // console.log('res', res.data);
      if (res.message === 'Login successful') {
        AsyncStorage.setItem('token', res.token);
        setLoggedIn(true);
        console.log('token kkkkkkkkkk');
        navigation.replace('BottomTabStack', {
          state: undefined,
        });
      }
    } catch (error) {
      console.log('error:', error);
    }
  };

  return (
    <LinearGradient
      colors={['#00DDB3', '#00C4D8', '#2D82D6']}
      style={styles.container}>
      <View style={styles.centerContainer}>
        <Text style={styles.logoText}>Logo</Text>
        <View style={styles.formContainer}>
          <View style={styles.input}>
            <TextInput
              label="Email"
              value={email}
              mode="outlined"
              onChangeText={text => setEmail(text)}
              theme={theme}
            />
            <Text style={styles.error}>{errorsEmail}</Text>
          </View>
          <View style={styles.input}>
            <TextInput
              label="Password"
              value={password}
              mode="outlined"
              secureTextEntry={secureTextEntry}
              onChangeText={text => setPassword(text)}
              theme={theme}
              right={
                <TextInput.Icon
                  icon={() =>
                    secureTextEntry ? (
                      <EyeSlash size={28} color="#2C2F4A" />
                    ) : (
                      <Eye size={28} color="#2C2F4A" />
                    )
                  }
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                />
              }
            />
            <Text style={styles.error}>{errorsPassword}</Text>
          </View>

          <TouchableOpacity style={styles.btnSignIn} onPress={handleLogin}>
            <Text style={styles.textSignIn}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Login;

const theme = {
  colors: {
    primary: '#6D7DD3',
  },
};
