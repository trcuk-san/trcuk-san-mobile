import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from '../styles/homeStyle';

const Home = () => {
  const onClick = () => {
    console.log('onClick task');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}> My Task</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={onClick} style={styles.order_box}>
          <Text>Order No</Text>
          <Text>วันที่เวลา</Text>
          <Text>รับ</Text>
          <Text>ส่ง</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onClick} style={styles.order_box}>
          <Text>Order No</Text>
          <Text>วันที่เวลา</Text>
          <Text>รับ</Text>
          <Text>ส่ง</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onClick} style={styles.order_box}>
          <Text>Order No</Text>
          <Text>วันที่เวลา</Text>
          <Text>รับ</Text>
          <Text>ส่ง</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onClick} style={styles.order_box}>
          <Text>Order No</Text>
          <Text>วันที่เวลา</Text>
          <Text>รับ</Text>
          <Text>ส่ง</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Home;
