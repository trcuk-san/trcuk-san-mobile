import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackList = {
  AuthStack: undefined;
  BottomTabStack: NavigatorScreenParams<BottomTabStackList>;
};

export type AuthStackList = {
  Login: undefined;
};

export type BottomTabStackList = {
  HomeStack: NavigatorScreenParams<HomeStackList>;
  ProfileStack: NavigatorScreenParams<ProfileStackList>;
};

export type ProfileStackList = {
  Profile: undefined;
  Detail: {
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
    orderId: string;
  }
};

export type HomeStackList = {
  Home:undefined;
  UpdateTrackingStack: NavigatorScreenParams<UpdateTrackingStackList>;
};

export type UpdateTrackingStackList = {
  UpdateTracking: {
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
    orderId: string;
}
  UpdateFee: {
    _id: string;
  }
};