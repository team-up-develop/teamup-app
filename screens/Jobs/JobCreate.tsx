import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import theme from '../../constants/Theme'
interface Props {
  
}

const JobCreate = () => {
  return (
    <ScrollView style={ styles.wrap }>
      
    </ScrollView>
  )
}

export default JobCreate;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.white
  },
})