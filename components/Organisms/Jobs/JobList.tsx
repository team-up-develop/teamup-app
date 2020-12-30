import React, { FC } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Job, Language, Framework, Skill } from '../../../types';
import dayjs from 'dayjs';
import theme from '../../../constants/Theme';
import LanguageLabel from '../../Atoms/LanguageLabel';
import FrameworkLabel from '../../Atoms/FrameworkLabel';
import SkillLabel from '../../Atoms/SkillLabel';

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
      return programingLanguage.map((value: Language) => <LanguageLabel props={value} key={value.id}/>)
    }
  }
  const ProgramingFramework: any = () => {
    for(let i = 0; i < programingFramework.length; i++) {
      return programingFramework.map((value: Framework) => <FrameworkLabel props={value} key={value.id} />)
    }
  }
  const Skill: any = () => {
    for(let i = 0; i < skill.length; i++) {
      return skill.map((value: Skill) => <SkillLabel props={value} key={value.id}/>)
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
  skillArea: {
    flexDirection: 'row',
    flexWrap: 'wrap'
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