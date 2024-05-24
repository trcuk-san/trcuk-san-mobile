import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabStackList, RootStackList} from '../stacks';
import {getProfile} from '../services/auth'; // Adjusted import
import {MyFinishTask} from '../services/order';

interface IProfile {
  _id: string;
  firstname: string;
  lastname: string;
  salary: number;
  profile_picture: string;
}

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

const Profile = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackList>>();
  const navigationBottom =
    useNavigation<NativeStackNavigationProp<BottomTabStackList>>();
  const [profile, setProfile] = useState<IProfile>({
    _id: '',
    firstname: '',
    lastname: '',
    salary: 0,
    profile_picture:
      'http://res.cloudinary.com/di71vwint/image/upload/v1674291349/images/nsopymczagslnr78yyv5.png',
  });
  const [Task, setTask] = useState<IMyOrder[]>([]);
  const [checkData, setCheckData] = useState('');

  const getTask = async () => {
    const {data} = await getProfile();
    setProfile(prevProfile => ({...prevProfile, ...data}));
    try {
      console.log(data._id);
      const myTask: any = await MyFinishTask(data._id);
      if (myTask.message === 'success') {
        setTask(myTask.MyOrder);
        setProfile(prevProfile => ({...prevProfile, salary: myTask.salary}));
        setCheckData('success');
        console.log(myTask);
      } else {
        setCheckData(myTask.message);
      }
    } catch (err: any) {
      setCheckData(err.message);
      console.log(err.message);
    }
  };

  useEffect(() => {
    const unsubscribe = navigationBottom.addListener('focus', async () => {
      getTask();
    });
    return unsubscribe;
  }, [navigationBottom]);

  const RenderMyTask = () => {
    if (checkData === 'success') {
      return (
        <>
          {Task.map((item: any, index) => {
            const onClick = () => {
              console.log('detail order', item);
              if (item) {
                navigation.navigate('BottomTabStack', {
                  screen: 'ProfileStack',
                  params: {
                    screen: 'Detail',
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
                });
              }
            };
            return (
              <TouchableOpacity
                key={index}
                style={styles.taskContainer}
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
    } else {
      return <Text>No data available</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.profileContainer}>
        <Image
          source={{uri: profile.profile_picture}}
          style={styles.profilePicture}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>
            {profile.firstname} {profile.lastname}
          </Text>
          <Text style={styles.profileSalary}>Salary: ${profile.salary}</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RenderMyTask />
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 20,
  },
  profileTextContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileSalary: {
    fontSize: 18,
    color: '#555',
  },
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
