import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ProfileStackList} from '../stacks';

const Detail = () => {
  const {params} = useRoute<RouteProp<ProfileStackList, 'Detail'>>();
  console.log(params);

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.subtitle}>Update Tracking</Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Order Status: </Text>{' '}
          {params.orderStatus}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Order ID: </Text> {params.orderId}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Date PickUp: </Text> {params.datePickUp}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Time PickUp: </Text> {params.timePickUp}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Date DropOff: </Text>{' '}
          {params.dateDropOff}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Time DropOff: </Text>{' '}
          {params.timeDropOff}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Vehicle: </Text> {params.vehicle}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Consumer: </Text> {params.consumer}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Pick Up: </Text> {params.pick_up}
        </Text>
        {/* Map through drop_off array and display each location on a separate line */}
        {params.drop_off.map((location, index) => (
          <Text key={index} style={styles.detailText}>
            <Text style={styles.boldText}>Drop Off {index + 1}: </Text>
            {location}
          </Text>
        ))}
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Remark: </Text> {params.remark}
        </Text>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEEFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#405189',
  },
  detailText: {
    fontSize: 16,
    marginBottom: 4,
    color: '#7582BF',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#405189',
  },
});
