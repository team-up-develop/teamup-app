import * as React from 'react';
import { Avatar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const AvatarImage = () => (
  <Avatar.Image size={68} source={require('../../assets/images/favicon.png')} />
);
export default AvatarImage