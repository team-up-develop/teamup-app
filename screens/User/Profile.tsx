import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Menu } from 'react-native-paper';
import UserProfile from '../../components/Molecules/UserProfile'
import theme from '../../constants/Theme'
interface Props {
  
}

const ProfileScreen = () => {
  return (
    <ScrollView style={ styles.wrap }>
      <UserProfile />
      <Menu.Item icon="heart-multiple-outline" onPress={() => {}} title="お気に入りを見る" />
      <Menu.Item icon="undo" onPress={() => {}} title="Undo" />
      <Menu.Item icon="content-paste" onPress={() => {}} title="Paste" />
      <Menu.Item icon="redo" onPress={() => {}} title="Redo" />
      <Menu.Item icon="undo" onPress={() => {}} title="Undo" />
      <Menu.Item icon="content-paste" onPress={() => {}} title="Paste" />
      <Menu.Item icon="redo" onPress={() => {}} title="Redo" />
      <Menu.Item icon="undo" onPress={() => {}} title="Undo" />
      <Menu.Item icon="content-paste" onPress={() => {}} title="Paste" />
      <Menu.Item icon="redo" onPress={() => {}} title="Redo" />
      <Menu.Item icon="undo" onPress={() => {}} title="Undo" />
      <Menu.Item icon="content-paste" onPress={() => {}} title="Paste" />
      <Menu.Item icon="redo" onPress={() => {}} title="Redo" />
      <Menu.Item icon="undo" onPress={() => {}} title="Undo" />
      <Menu.Item icon="content-paste" onPress={() => {}} title="Paste" />
      <Menu.Item icon="redo" onPress={() => {}} title="Redo" />
      <Menu.Item icon="undo" onPress={() => {}} title="Undo" />
      <Menu.Item icon="content-paste" onPress={() => {}} title="Paste" />
    </ScrollView>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.white
  },
})