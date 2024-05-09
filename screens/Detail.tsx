import {View, Text} from 'react-native';
import React from 'react';
import styles from '../styles/detailStyle';
import {Truck, Package, HandCoins} from 'phosphor-react-native';

const Detail = () => {
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
    </View>
  );
};

export default Detail;
