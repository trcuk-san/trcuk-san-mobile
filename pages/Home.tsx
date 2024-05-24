// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// import styles from '../styles/homeStyle';
// import {
//   NavigationProp,
//   RouteProp,
//   useNavigation,
//   useRoute,
// } from '@react-navigation/native';
// import {MyTask} from '../services/order';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// // import {HomeStackParamList} from '../stacks/HomeStack';
// // import {BottomTabParamList} from '../stacks/BottomTabStack';
// import {
//   AuthStackList,
//   HomeStackList,
//   RootStackList,
//   UpdateTrackingStackList,
// } from '../stacks';
// import {BottomTabStackList} from '../stacks';
// import {getProfile} from '../services/auth';

// export interface IProfile {
//   _id: string;
//   firstname: string;
//   lastname: string;
//   profile_picture: string;
// }

// interface IMyOrder {
//   _id: string;
//   datePickUp: string;
//   timePickUp: string;
//   dateDropOff: string;
//   timeDropOff: string;
//   vehicle: string;
//   driver: string;
//   pick_up: string;
//   drop_off: string[];
//   consumer: string;
//   income: number;
//   oilFee: number;
//   tollwayFee: number;
//   otherFee: number;
//   remark: string;
//   orderStatus: string;
// }

// const Home = () => {
//   const route = useRoute<RouteProp<HomeStackList, 'Home'>>();
//   // const {_id} = route.params;
//   const navigation = useNavigation<NativeStackNavigationProp<RootStackList>>();
//   const navigationBottom =
//     useNavigation<NativeStackNavigationProp<BottomTabStackList>>();
//   const navigationUpdate =
//     useNavigation<NativeStackNavigationProp<UpdateTrackingStackList>>();

//   const [profile, setProfile] = React.useState<IProfile>({
//     _id: '',
//     firstname: '',
//     lastname: '',
//     profile_picture:
//       'http://res.cloudinary.com/di71vwint/image/upload/v1674291349/images/nsopymczagslnr78yyv5.png',
//   });
//   const [myTask, setMyTask] = useState<IMyOrder[]>([]);
//   const [checkData, setCheckData] = useState('');
//   const [orderID, setOrderID] = useState('');

//   const getMyTask = async () => {
//     const {data} = await getProfile();
//     try {
//       console.log(data._id);
//       const myTask: any = await MyTask(data._id);
//       setMyTask(myTask.MyOrder);
//       setCheckData(myTask.message);
//       console.log(myTask);
//     } catch (err: any) {
//       setCheckData(err.message);
//       console.log(err.message);
//     }
//   };

//   useEffect(() => {
//     const unsubscribe = navigationBottom.addListener('focus', async () => {
//       getMyTask();
//     });
//     return unsubscribe;
//   }, [navigationBottom]);

//   const RenderMyTask = () => {
//     const navigate1 = useNavigation<NavigationProp<UpdateTrackingStackList>>();
//     if (checkData === 'success') {
//       return (
//         <>
//           {myTask.map((item: any, index) => {
//             const onClick = () => {
//               console.log('detail order', item);
//               if (item) {
//                 navigate1.navigate('UpdateTracking', {
//                   _id: item._id,
//                   datePickUp: item.datePickUp,
//                   timePickUp: item.timePickUp,
//                   dateDropOff: item.dateDropOff,
//                   timeDropOff: item.timeDropOff,
//                   vehicle: item.vehicleID,
//                   driver: item.driver,
//                   pick_up: item.pick_up,
//                   drop_off: item.drop_off,
//                   consumer: item.consumer,
//                   income: item.income,
//                   oilFee: item.oilFee,
//                   tollwayFee: item.tollwayFee,
//                   otherFee: item.otherFee,
//                   orderStatus: item.orderStatus,
//                   remark: item.remark,
//                   orderId: item.orderId,
//                 });
//               }
//             };
//             return (
//               <TouchableOpacity
//                 key={index}
//                 style={taskStyles.taskContainer}
//                 onPress={onClick}>
//                 <Text>orderId {item.orderId}</Text>
//                 <Text>consumer {item.consumer}</Text>
//                 <Text>
//                   date-time PickUp {item.datePickUp} {item.timePickUp}
//                 </Text>
//                 <Text>
//                   date-time DropOff {item.dateDropOff} {item.timeDropOff}
//                 </Text>
//                 <Text>vehicle {item.vehicleID}</Text>
//               </TouchableOpacity>
//             );
//           })}
//         </>
//       );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}> My Task</Text>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <RenderMyTask></RenderMyTask>
//       </ScrollView>
//     </View>
//   );
// };

// export default Home;

// const taskStyles = StyleSheet.create({
//   taskContainer: {
//     backgroundColor: '#fff',
//     padding: 15,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderRadius: 10,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   taskText: {
//     fontSize: 14,
//     color: '#333',
//     marginBottom: 5,
//   },
// });

import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../styles/homeStyle';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {MyTask} from '../services/order';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackList, RootStackList, BottomTabStackList} from '../stacks';
import {getProfile} from '../services/auth';

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
  const route = useRoute<RouteProp<HomeStackList, 'Home'>>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackList>>();
  const navigationBottom =
    useNavigation<NativeStackNavigationProp<BottomTabStackList>>();

  const [myTask, setMyTask] = useState<IMyOrder[]>([]);
  const [checkData, setCheckData] = useState('');

  const getMyTask = async () => {
    const {data} = await getProfile();
    try {
      console.log(data._id);
      const myTask: any = await MyTask(data._id);
      setMyTask(myTask.MyOrder);
      setCheckData(myTask.message);
      console.log(myTask);
    } catch (err: any) {
      setCheckData(err.message);
      console.log(err.message);
    }
  };

  useEffect(() => {
    const unsubscribe = navigationBottom.addListener('focus', async () => {
      getMyTask();
    });
    return unsubscribe;
  }, [navigationBottom]);

  const RenderMyTask = () => {
    if (checkData === 'success') {
      return (
        <>
          {myTask.map((item: any, index) => {
            const onClick = () => {
              console.log('detail order', item);
              if (item) {
                navigation.navigate('BottomTabStack', {
                  screen: 'HomeStack',
                  params: {
                    screen: 'UpdateTrackingStack',
                    params: {
                      screen: 'UpdateTracking',
                      params: {
                        _id: item._id,
                        datePickUp: item.datePickUp,
                        timePickUp: item.timePickUp,
                        dateDropOff: item.dateDropOff,
                        timeDropOff: item.timeDropOff,
                        vehicle: item.vehicleID,
                        driver: item.driver,
                        pick_up: item.pick_up,
                        drop_off: item.drop_off,
                        consumer: item.consumer,
                        income: item.income,
                        oilFee: item.oilFee,
                        tollwayFee: item.tollwayFee,
                        otherFee: item.otherFee,
                        orderStatus: item.orderStatus,
                        remark: item.remark,
                        orderId: item.orderId,
                      },
                    },
                  },
                });
              }
            };
            return (
              <TouchableOpacity
                key={index}
                style={taskStyles.taskContainer}
                onPress={onClick}>
                <Text>orderId {item.orderId}</Text>
                <Text>consumer {item.consumer}</Text>
                <Text>
                  date-time PickUp {item.datePickUp} {item.timePickUp}
                </Text>
                <Text>
                  date-time DropOff {item.dateDropOff} {item.timeDropOff}
                </Text>
                <Text>vehicle {item.vehicleID}</Text>
              </TouchableOpacity>
            );
          })}
        </>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> My Task</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RenderMyTask />
      </ScrollView>
    </View>
  );
};

export default Home;

const taskStyles = StyleSheet.create({
  taskContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  taskText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
});