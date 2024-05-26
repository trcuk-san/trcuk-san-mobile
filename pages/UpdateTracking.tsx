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
import LaunchNavigator from 'react-native-launch-navigator';
import {Button} from 'react-native-paper';

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

  const navigatetomap = (latitude: any, longitude: any) => {
    LaunchNavigator.navigate([latitude, longitude]);
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
                color={params.orderStatus === 'Pending' ? '#808080' : '#6EFACC'}
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
                    : '#6EFACC'
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
                    : '#6EFACC'
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
          {params.drop_off.map((location, index) => {
            const parts = location.split(',');
            const address = parts.slice(0, -2).join(',');
            const latitude = parts.slice(-2, -1).join(',');
            const longitude = parts.slice(-1).join(',');
            return (
              <View key={index}>
                <Text style={styles.detailText}>
                  <Text style={styles.boldText}>Drop Off {index + 1}:</Text>{' '}
                  {address}
                </Text>
                <Button
                  mode="contained"
                  onPress={() => navigatetomap(latitude, longitude)}
                  style={styles.mapButton}>
                  Navigate to Drop Off {index + 1}
                </Button>
              </View>
            );
          })}
          <Text style={styles.detailText}>
            <Text style={styles.boldText}>Remark:</Text> {params.remark}
          </Text>
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
    backgroundColor: '#EAEEFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#405189',
    marginBottom: 16,
    textAlign: 'center',
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
    color: '#405189',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 4,
    color: '#405189',
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
    backgroundColor: '#7582BF',
    marginBottom: 4,
  },
  statusText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#405189',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#D2A517',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mapButton: {
    backgroundColor: '#405189',
    marginTop: 8,
  },
});
