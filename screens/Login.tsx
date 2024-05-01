import {Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {Eye, EyeSlash} from 'phosphor-react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/loginStyle';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorsUsername, setErrorsUsername] = useState('');
  const [errorsPassword, setErrorsPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const hardleLogin = async () => {
    console.log('Login ok!');
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
              label="Username"
              value={username}
              mode="outlined"
              onChangeText={text => setUsername(text)}
              theme={theme}
            />
            <Text style={styles.error}>{errorsUsername}</Text>
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

          <TouchableOpacity style={styles.btnSignIn} onPress={hardleLogin}>
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
