import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import React, {useContext, useState} from 'react';
import {TextInput} from 'react-native-paper';
import {Eye, EyeSlash} from 'phosphor-react-native';
import LinearGradient from 'react-native-linear-gradient';
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
      if (res.message === 'Login successful') {
        AsyncStorage.setItem('token', res.token);
        setLoggedIn(true);
        console.log('token kkkkkkkkkk');
        navigation.replace('BottomTabStack', {
          state: undefined,
        });
      }
    } catch (error: any) {
      setErrorsEmail('');
      setErrorsPassword('');
      error.map((item: any) => {
        if (item.param === 'email') {
          setErrorsEmail(item.msg);
        } else if (item.param === 'password') {
          setErrorsPassword(item.msg);
        }
      });
    }
  };

  return (
    <LinearGradient colors={['#7582BF', '#EAEEFF']} style={styles.container}>
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
              style={styles.textInput}
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
              style={styles.textInput}
              right={
                <TextInput.Icon
                  icon={() =>
                    secureTextEntry ? (
                      <EyeSlash size={24} color="#2C2F4A" />
                    ) : (
                      <Eye size={24} color="#2C2F4A" />
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

const theme = {
  colors: {
    primary: '#405189',
    background: '#EAEEFF',
    surface: '#fff',
    text: '#405189',
    placeholder: '#7582BF',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EAEEFF',
  },
  centerContainer: {
    alignItems: 'center',
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#405189',
    marginBottom: 40,
  },
  formContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: '#EAEEFF',
  },
  error: {
    color: '#D2A517',
    marginTop: 5,
    marginLeft: 5,
  },
  btnSignIn: {
    backgroundColor: '#405189',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  textSignIn: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
