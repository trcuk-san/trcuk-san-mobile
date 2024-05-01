import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from '../styles/profileStyle';

const Profile = () => {
  const onClick = () => {
    console.log('onClick task');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.userContainer}>
        <Text>profile_picture</Text>
        <View>
          <Text>Name</Text>
          <Text>salary</Text>
        </View>
      </View>
      <View>
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
      </View>
    </View>
  );
};

export default Profile;
