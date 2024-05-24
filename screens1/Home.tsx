import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../styles/homeStyle';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {MyTask} from '../services/order';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../stacks/HomeStack';
import {BottomTabParamList} from '../stacks/BottomTabStack';

interface IMyOrder {
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
}

const Home = () => {
  const {params} = useRoute<RouteProp<BottomTabParamList, 'HomeStack'>>();
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  const [driver, setdriver] = useState(params.driver);
  const [myTask, setMyTask] = useState<IMyOrder[]>([]);
  const [checkData, setCheckData] = useState('');
  const [modal, setModal] = useState(false);
  const [orderID, setOrderID] = useState('');
  const fetchData = async () => {
    try {
      const myTask: any = await MyTask(driver);
      // console.log(comments.data);
      setMyTask(myTask.MyOrder);
      setCheckData(myTask.message);
    } catch (err: any) {
      setCheckData(err.message);
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, [modal]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });
    return unsubscribe;
  }, [navigation]);

  const RenderMyTask = (): JSX.Element | null => {
    const navigation =
      useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
    if (checkData === 'success') {
      return (
        <>
          {myTask.map((item: any, index) => {
            const onClick = () => {
              console.log('call api detail toilet', item);
              if (item) {
                navigation.navigate('Detail', {
                  _id: item._id,
                  orderId: item.orderId,
                  datePickUp: item.datePickUp,
                  timePickUp: item.timePickUp,
                  orderStatus: item.orderStatus,
                  vehicle: item.vehicle,
                  pick_up: item.pick_up,
                  consumer: item.consumer,
                  remark: item.remark,
                });
              }
            };
            return (
              <TouchableOpacity key={index} onPress={onClick}>
                _id={item._id}
                latitude={item.latitude}
                longitude={item.longitude}
                title={item.title}
                contact={item.contact}
                cost={item.cost}
                handicap={item.handicap}
                free={item.free}
                type={item.type}
                timeOpen={item.timeOpen}
                timeClose={item.timeClose}
                toiletpicture={item.toiletpicture}
              </TouchableOpacity>
            );
          })}
        </>
      );
    } else {
      return <View style={styles.notToilet}>Not Order</View>;
    }
  };

  const onClick = () => {
    console.log('onClick task');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> My Task</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <TouchableOpacity onPress={onClick} style={styles.order_box}>
          <Text>Order No</Text>
          <Text>วันที่เวลา</Text>
          <Text>รับ</Text>
          <Text>ส่ง</Text>
        </TouchableOpacity> */}
        <RenderMyTask></RenderMyTask>
      </ScrollView>
    </View>
  );
};

export default Home;
