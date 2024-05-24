import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Truck, Package, HandCoins} from 'phosphor-react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {BottomTabStackList, UpdateTrackingStackList} from '../stacks';
import {UpdateOrderStatus} from '../services/order';

const UpdateTracking = () => {
  const {params} =
    useRoute<RouteProp<UpdateTrackingStackList, 'UpdateTracking'>>();
  console.log(params);
  const navigation = useNavigation<NavigationProp<BottomTabStackList>>();

  const handleUpdateOrderStatus = async () => {
    console.log('handleUpdateOrderStatus');
    try {
      let nextOrderStatus = '';
      switch (params.orderStatus) {
        case 'Pending':
          nextOrderStatus = 'Picked Up';
          break;
        case 'Picked Up':
          nextOrderStatus = 'In Transit';
          break;
        case 'In Transit':
          nextOrderStatus = 'Delivered';
          break;
        case 'Delivered':
          nextOrderStatus = 'Finished';
          break;
        default:
          throw new Error('Invalid order status');
      }

      const response = await UpdateOrderStatus(params._id);
      console.log('Updated Order:', response.data);

      if (nextOrderStatus === 'Finished') {
        navigation.navigate('HomeStack', {
          screen: 'UpdateTrackingStack',
          params: {
            screen: 'UpdateFee',
            params: {
              _id: params._id,
            },
          },
        });
      } else {
        navigation.navigate('HomeStack', {screen: 'Home'});
      }
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Details</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.statusContainer}>
          <View style={styles.status}>
            <View style={styles.iconBorder}>
              <Package
                size={48}
                color={params.orderStatus === 'Pending' ? '#808080' : '#00AC7C'}
                weight={params.orderStatus === 'Pending' ? 'thin' : 'fill'}
              />
            </View>
            <Text style={styles.statusText}>Picked Up</Text>
          </View>
          <View style={styles.status}>
            <View style={styles.iconBorder}>
              <Truck
                size={48}
                color={
                  params.orderStatus === 'Pending' ||
                  params.orderStatus === 'Picked Up'
                    ? '#808080'
                    : '#00AC7C'
                }
                weight={
                  params.orderStatus === 'Pending' ||
                  params.orderStatus === 'Picked Up'
                    ? 'thin'
                    : 'fill'
                }
              />
            </View>
            <Text style={styles.statusText}>In Transit</Text>
          </View>
          <View style={styles.status}>
            <View style={styles.iconBorder}>
              <HandCoins
                size={48}
                color={
                  params.orderStatus === 'Pending' ||
                  params.orderStatus === 'Picked Up' ||
                  params.orderStatus === 'In Transit'
                    ? '#808080'
                    : '#00AC7C'
                }
                weight={
                  params.orderStatus === 'Pending' ||
                  params.orderStatus === 'Picked Up' ||
                  params.orderStatus === 'In Transit'
                    ? 'thin'
                    : 'fill'
                }
              />
            </View>
            <Text style={styles.statusText}>Delivered</Text>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.subtitle}>Update Tracking</Text>
          <Text style={styles.detailText}>
            <Text style={styles.boldText}>Order Status:</Text>{' '}
            {params.orderStatus}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.boldText}>Order ID:</Text> {params.orderId}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.boldText}>Date PickUp:</Text>{' '}
            {params.datePickUp}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.boldText}>Time PickUp:</Text>{' '}
            {params.timePickUp}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.boldText}>Date DropOff:</Text>{' '}
            {params.dateDropOff}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.boldText}>Time DropOff:</Text>{' '}
            {params.timeDropOff}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.boldText}>Vehicle:</Text> {params.vehicle}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.boldText}>Consumer:</Text> {params.consumer}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.boldText}>Pick Up:</Text> {params.pick_up}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.boldText}>Drop Off:</Text>{' '}
            {params.drop_off.join(', ')}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.boldText}>Remark:</Text> {params.remark}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleUpdateOrderStatus}>
            <Text style={styles.buttonText}>
              {params.orderStatus === 'Pending' && 'Update to Picked Up'}
              {params.orderStatus === 'Picked Up' && 'Update to In Transit'}
              {params.orderStatus === 'In Transit' && 'Update to Delivered'}
              {params.orderStatus === 'Delivered' && 'Update to Finished'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateTracking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
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
  },
  detailText: {
    fontSize: 16,
    marginBottom: 4,
  },
  boldText: {
    fontWeight: 'bold',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  status: {
    alignItems: 'center',
  },
  iconBorder: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: '#e0e0e0',
    marginBottom: 4,
  },
  statusText: {
    fontSize: 14,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
