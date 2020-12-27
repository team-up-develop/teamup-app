import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

// * Navigatorに置いての Component の import
import TabOneScreen from '../screens/TabOneScreen';
import JobsScreen from '../screens/Jobs/Jobs';
import ProfileScreen from '../screens/User/Profile';
import JobDetail from '../screens/Jobs/JobDetail';
import ManageScreen from '../screens/Manages/Manage';

// * Navigator の 型宣言 を import
import { 
  BottomTabParamList,
  TabOneParamList, 
  JobsParamList,
  UserParamsList,
  ManageParamsList
} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="開発一覧"
        component={JobsNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome size={24}  name="list" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="管理"
        component={ManagerNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />
        }}
      />
      <BottomTab.Screen
        name="アカウント"
        component={UserNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="user-o" size={24} color={color} />
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}
// * 案件一覧 Navigator
const JobsStack = createStackNavigator<JobsParamList>();
const Stack = createStackNavigator();
function JobsNavigator() {
  return (
    <JobsStack.Navigator>
      <JobsStack.Screen
        name="JobsScreen"
        component={JobsScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
      <Stack.Screen name="JobDetail" component={ JobDetail }/> 
    </JobsStack.Navigator>
  );
}
// * 管理画面 Navigator
const ManageStack = createStackNavigator<ManageParamsList>();
function ManagerNavigator() {
  return (
    <ManageStack.Navigator>
      <ManageStack.Screen 
        name="ManageScreen"
        component={ManageScreen}
      />
    </ManageStack.Navigator>
  )
}
// * プロフィール Navigator
const UserStack = createStackNavigator<UserParamsList>();
function UserNavigator() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen 
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </UserStack.Navigator>
  )
}
