import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import theme from '../../constants/Theme'
import { Language } from '../../types/index';

type Props = {
  props: Language,
}

const LanguageLabel: FC<Props> = ({
  props
}) => {
  return (
    <View style={ styles.language }>
      <Text style={ styles.onText }>{ props.programingLanguageName }</Text>
    </View>
  )
}

export default LanguageLabel;


const styles = StyleSheet.create({
  onText:{
    fontSize: 14,
    color: theme.colors.white,
    fontWeight: "600",
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
});