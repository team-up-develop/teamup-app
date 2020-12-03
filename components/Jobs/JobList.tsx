import React from 'react';
import { FC } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { Job } from '../../types';

type Props = { 
  props: Job,
  jobTitle: string,
  jobDescription: string | null,
  user: any, 
  devStartDate: Date, 
  devEndDate: Date,
  onPress: any
}

//* オブジェクトスプレッド演算子
// * props 親から子にデータを送る
const ListItem: FC<Props> = ({ 
  props,
  jobTitle, 
  jobDescription, 
  user, 
  devStartDate, 
  devEndDate,
  onPress
}) => {

  return (
    <TouchableOpacity style={ styles.itemContainer } onPress={ onPress }>
      <Text style={ styles.subText }>{ jobTitle }</Text>
      <Text style={ styles.subText }>{ jobDescription }</Text>
      {/* <Text style={ styles.subText }>{ user }</Text> */}
      <Text style={ styles.subText }>{ devStartDate }</Text>
      <Text style={ styles.subText }>{ devEndDate }</Text>
    </TouchableOpacity>
  )
}

export default ListItem;

const styles = StyleSheet.create({
  itemContainer: {
    height: 350,
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: "column" //*横並び  //*column 縦並び 
  },
  leftContainer: {
    width: 100
  },
  rightContainer: {
    flex: 1, //* スペースを使い切る
    padding: 10, 
    justifyContent: "space-between", //* 間を開ける 
    borderColor: "blue"
  },
  text:{
    fontSize: 16
  },
  subText: {
    fontSize: 12,
    color: 'gray'
  }
});