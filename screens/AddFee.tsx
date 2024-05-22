import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import styles from '../styles/addFeeStyle';

const AddFee = () => {
  const [oilFee, setOilFee] = useState('');
  const [tollwayFee, setTollwayFee] = useState('');
  const [otherFee, setOtherFee] = useState('');
  const [errorsOilFee, setErrorsOilFee] = useState('');
  const [errorsTollwayFee, setErrorsTollwayFee] = useState('');
  const [errorsOtherFee, setErrorsOtherFee] = useState('');

  const summitFee = () => {
    console.log('onClick Fee Summit');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ค่าใช้จ่าย</Text>
      <View style={styles.insideContainer}>
        <View style={styles.input}>
          <TextInput
            label="Oil"
            value={oilFee}
            keyboardType="numeric"
            mode="outlined"
            onChangeText={text => setOilFee(text)}
            theme={theme}
          />
          <Text style={styles.error}>{errorsOilFee}</Text>
        </View>
        <View style={styles.input}>
          <TextInput
            label="Tollway"
            value={tollwayFee}
            keyboardType="numeric"
            mode="outlined"
            onChangeText={text => setTollwayFee(text)}
            theme={theme}
          />
          <Text style={styles.error}>{errorsTollwayFee}</Text>
        </View>
        <View style={styles.input}>
          <TextInput
            label="Other"
            value={otherFee}
            keyboardType="numeric"
            mode="outlined"
            onChangeText={text => setOtherFee(text)}
            theme={theme}
          />
          <Text style={styles.error}>{errorsOtherFee}</Text>
        </View>
        <TouchableOpacity style={styles.btnSignIn} onPress={summitFee}>
          <Text style={styles.textSignIn}>Summit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddFee;

const theme = {
  colors: {
    primary: '#6D7DD3',
  },
};
