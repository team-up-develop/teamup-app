import React, { FC } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { Card, Title, Paragraph, Chip } from 'react-native-paper';
import { Job, Language, Framework, Skill } from '../../types';
import dayjs from 'dayjs';
import theme from '../../constants/Theme';

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
          <View style={ styles.dayArea }>
            <Text style={ styles.day }>{ dayjs(devStartDate).format('YYYY-MM-DD') }</Text>
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
  onText:{
    fontSize: 14,
    color: theme.colors.white,
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
    backgroundColor: theme.colors.purple,
    borderRadius: 10
  },
  framework: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 2,
    marginRight: 2,
    backgroundColor: theme.colors.blue,
    borderRadius: 10,
  },
  skill: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 2,
    marginRight: 2,
    backgroundColor: theme.colors.darkGreen,
    borderRadius: 10,
  },
  dayArea: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginBottom: 10,
    marginRight: 10,
  },
  day: {
    color: theme.colors.textSubColor
  }
});