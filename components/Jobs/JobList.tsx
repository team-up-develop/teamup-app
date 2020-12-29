import React from 'react';
import { FC } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { Card, Title, Paragraph, Chip } from 'react-native-paper';
import { Job, Language, Framework, Skill } from '../../types';

type Props = { 
  props: Job,
  jobTitle: string,
  jobDescription: string | null,
  user: any, 
  devStartDate: Date, 
  devEndDate: Date,
  onPress: any,
  programingLanguage: Language[],
  programingFramework: Framework[],
  skill: Skill[]
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
  onPress,
  programingLanguage,
  programingFramework,
  skill
}) => {

  const ProgramingLanguage: any = () => {
    for(let i = 0; i < programingLanguage.length; i++) {
      return programingLanguage.map((value: Language) => <View key={value.id} style={ styles.language }><Text style={ styles.onText }>{value.programingLanguageName}</Text></View>)
    }
  }
  const ProgramingFramework: any = () => {
    for(let i = 0; i < programingFramework.length; i++) {
      return programingFramework.map((value: Framework) => <View key={value.id} style={ styles.framework }><Text style={ styles.onText }>{value.programingFrameworkName}</Text></View>)
    }
  }
  const Skill: any = () => {
    for(let i = 0; i < skill.length; i++) {
      return skill.map((value: Skill) => <View key={value.id} style={ styles.skill }><Text style={ styles.onText }>{value.skillName}</Text></View>)
    }
  }

  return (
    <TouchableOpacity style={ styles.itemContainer } onPress={ onPress }>
      <Card>
        <Card.Content>
          <Title numberOfLines={1} ellipsizeMode={'tail'}>{ jobTitle }</Title>
          <Paragraph numberOfLines={4} ellipsizeMode={'tail'}>{ jobDescription }</Paragraph>
          <View style={ styles.skillArea }>
            <ProgramingLanguage /><ProgramingFramework /><Skill />
          </View>
        </Card.Content>
      </Card>
      {/* <Text style={ styles.subText }>{ jobDescription }</Text> */}
      {/* <Text style={ styles.subText }>{ user }</Text> */}
      {/* <Text style={ styles.subText }>{ devStartDate }</Text>
      <Text style={ styles.subText }>{ devEndDate }</Text> */}
    </TouchableOpacity>
  )
}

export default ListItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "column", //*横並び  //*column 縦並び 
    maxHeight: 300,
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
  onText:{
    fontSize: 14,
    color: 'white',
    fontWeight: "600",
  },
  skillArea: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  language: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 2,
    marginRight: 2,
    backgroundColor: '#651FFF',
    borderRadius: 10
  },
  framework: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 2,
    marginRight: 2,
    backgroundColor: '#2196F3',
    borderRadius: 10,
  },
  skill: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 2,
    marginRight: 2,
    backgroundColor: '#0097A7',
    borderRadius: 10,
  }
});