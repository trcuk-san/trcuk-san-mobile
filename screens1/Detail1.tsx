import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles/detailStyle';
import {Truck, Package, HandCoins} from 'phosphor-react-native';

interface IOrder {
  _id: string;
  datePickUp: string;
  timePickUp: string;
  dateDropOff: string;
  timeDropOff: string;
  vehicle: string;
  driver: string;
  pick_up: string;
  drop_off: string[];
  consumer: string;
  income: number;
  oilFee: number;
  tollwayFee: number;
  otherFee: number;
  remark: string;
  orderStatus: string;
  invoiced: boolean;
  orderId: string;
}

const Detail = () => {
  const handleUpdateOrderStatus = async () => {
    try {
      const response = await updateOrderStatus(orderId);
      if (response.status === 200) {
        console.log('Order status updated successfully:', response.data);
      } else {
        console.log('Failed to update order status:', response.data.message);
      }
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail</Text>
      <View>
        <View style={styles.status}>
          <View style={styles.iconBorder}>
            <Package size={48} />
          </View>
          <Text>รับของแล้ว</Text>
        </View>
        <View style={styles.status}>
          <View style={styles.iconBorder}>
            <Truck size={48} />
          </View>
          <Text>กำลังจัดสัง</Text>
        </View>
        <View style={styles.status}>
          <View style={styles.iconBorder}>
            <HandCoins size={48} />
          </View>
          <Text>จัดส่งเสร็จแล้ว</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={handleUpdateOrderStatus}>
          <Text>Update Order Status</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detail;
