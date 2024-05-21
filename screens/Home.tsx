import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../styles/homeStyle';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {getMyTask} from '../services/order';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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
    useNavigation<NativeStackNavigationProp<ProfileParamList>>();
  const [driver, setdriver] = useState(params.driver);
  const [myList, setMyList] = useState<IMyOrder[]>([]);
  const [checkData, setCheckData] = useState('');
  const [modal, setModal] = useState(false);
  const [orderID, setOrderID] = useState('');
  const fetchData = async () => {
    try {
      const myList: any = await getMyTask(driver);
      // console.log(comments.data);
      setMyList(myList.MyOrder);
      setCheckData(myList.message);
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

  const RenderMytoilet = (): JSX.Element | null => {
    const navigation =
      useNavigation<NativeStackNavigationProp<HomeParamList>>();
    if (checkData === 'success') {
      return (
        <>
          {myList.map((item: any, index) => {
            const onClick = () => {
              console.log('call api detail toilet', item);
              if (item) {
                navigation.navigate('DetailToilet', {
                  _id: item._id,
                  latitude: item.latitude,
                  longitude: item.longitude,
                  title: item.title,
                  contact: item.contact,
                  cost: item.cost,
                  handicap: item.handicap,
                  free: item.free,
                  type: item.type,
                  timeOpen: item.timeOpen,
                  timeClose: item.timeClose,
                  toiletpicture: item.toiletpicture,
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
        <RenderMytoilet></RenderMytoilet>
      </ScrollView>
    </View>
  );
};

export default Home;
