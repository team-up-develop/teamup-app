import React from 'react';
import { FC } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: "row" //*横並び  //*column 縦並び 
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

type HeaderProps = { jobTitle: any, jobDescription: any, user: any, devStartDate: any, devEndDate: any }

//* オブジェクトスプレッド演算子
// * props 親から子にデータを送る
const ListItem: FC<HeaderProps> = ({ jobTitle, jobDescription, user, devStartDate, devEndDate }) => {
  return (
    <View style={ styles.itemContainer }>
      <Text style={ styles.subText }>{ jobTitle }</Text>
      <Text style={ styles.subText }>{ jobDescription }</Text>
      {/* <Text style={ styles.subText }>{ user }</Text> */}
      <Text style={ styles.subText }>{ devStartDate }</Text>
      <Text style={ styles.subText }>{ devEndDate }</Text>
    </View>
  )
}

export default ListItem;