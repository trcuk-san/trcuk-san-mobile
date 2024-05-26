import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {BottomTabStackList, UpdateTrackingStackList} from '../stacks';
import {TextInput} from 'react-native-paper';
import {UpdateOrderFee} from '../services/order';

const UpdateFee = () => {
  const {params} = useRoute<RouteProp<UpdateTrackingStackList, 'UpdateFee'>>();
  console.log(params);

  const navigation = useNavigation<NavigationProp<BottomTabStackList>>();

  const [oilFee, setOilFee] = useState('');
  const [tollwayFee, setTollwayFee] = useState('');
  const [otherFee, setOtherFee] = useState('');
  const [errorsOilFee, setErrorsOilFee] = useState('');
  const [errorsTollwayFee, setErrorsTollwayFee] = useState('');
  const [errorsOtherFee, setErrorsOtherFee] = useState('');

  const validateFees = () => {
    let isValid = true;
    if (oilFee === '') {
      setErrorsOilFee('Oil fee is required');
      isValid = false;
    } else {
      setErrorsOilFee('');
    }
    if (tollwayFee === '') {
      setErrorsTollwayFee('Tollway fee is required');
      isValid = false;
    } else {
      setErrorsTollwayFee('');
    }
    if (otherFee === '') {
      setErrorsOtherFee('Other fee is required');
      isValid = false;
    } else {
      setErrorsOtherFee('');
    }
    return isValid;
  };

  const summitFee = async () => {
    if (!validateFees()) {
      return;
    }
    console.log('onClick Fee Summit');
    const UpdateOrderFees: any = await UpdateOrderFee({
      _id: params._id,
      oilFee: parseFloat(oilFee),
      tollwayFee: parseFloat(tollwayFee),
      otherFee: parseFloat(otherFee),
    });
    console.log('updateToilet', UpdateOrderFee);
    navigation.navigate('HomeStack', {screen: 'Home'});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fee</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            label="Oil"
            value={oilFee}
            keyboardType="numeric"
            mode="outlined"
            onChangeText={text => setOilFee(text)}
            style={styles.input}
            theme={inputTheme}
          />
          <Text style={styles.error}>{errorsOilFee}</Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            label="Tollway"
            value={tollwayFee}
            keyboardType="numeric"
            mode="outlined"
            onChangeText={text => setTollwayFee(text)}
            style={styles.input}
            theme={inputTheme}
          />
          <Text style={styles.error}>{errorsTollwayFee}</Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            label="Other"
            value={otherFee}
            keyboardType="numeric"
            mode="outlined"
            onChangeText={text => setOtherFee(text)}
            style={styles.input}
            theme={inputTheme}
          />
          <Text style={styles.error}>{errorsOtherFee}</Text>
        </View>
        <TouchableOpacity onPress={summitFee} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const inputTheme = {
  colors: {
    primary: '#405189',
    background: '#EAEEFF',
    text: '#405189',
    placeholder: '#7582BF',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#EAEEFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#405189',
    marginBottom: 16,
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: 8,
  },
  inputWrapper: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#fff',
    height: 50,
  },
  error: {
    color: 'red',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#D2A517',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UpdateFee;
