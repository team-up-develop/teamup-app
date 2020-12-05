import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import JobsScreen from '../screens/Jobs/Jobs';
import ProfileScreen from '../screens/User/Profile';
import JobDetail from '../screens/Jobs/JobDetail'
import { 
  BottomTabParamList,
  TabOneParamList, 
  JobsParamList,
  UserParamsList 
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
        name="アカウント"
        component={UserNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="user-o" size={24} color={color} />
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
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
