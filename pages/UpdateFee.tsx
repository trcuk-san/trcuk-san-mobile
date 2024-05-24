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

  const summitFee = async () => {
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
          />
          <Text style={styles.error}>{errorsOtherFee}</Text>
        </View>
        <TouchableOpacity onPress={summitFee} style={styles.button}>
          <Text style={styles.buttonText}>Summit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    marginTop: 8,
  },
  inputWrapper: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#f0f0f0',
    height: 40,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#007BFF',
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
