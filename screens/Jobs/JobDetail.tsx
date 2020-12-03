import React from 'react';
import { FC } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


//  TODO: Any 
const JobDetail: FC<any> = ({ route }) => {
  const job = route.params.jobs;

  console.log("aaaaaaaaaaaaaaaa")
  console.log(route.params)
  console.log("aaaaaaaaaaaaaaaa")

  return (
    <View>
      <Text>aaaaaaaa</Text>
      <Text>{ job.jobTitle }</Text>
      <Text>{ job.jobDescription }</Text>
      <Text>{ job.devStartDate }</Text>
      <Text>{ job.devEndDate }</Text>
    </View>
  )
}

export default JobDetail;
