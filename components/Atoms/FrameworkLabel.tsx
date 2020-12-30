import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import theme from '../../constants/Theme'
import { Framework } from '../../types/index';

type Props = {
  props: Framework,
}

const FrameworkLabel: FC<Props> = ({
  props
}) => {
  return (
    <View style={ styles.language }>
      <Text style={ styles.onText }>{ props.programingFrameworkName }</Text>
    </View>
  )
}

export default FrameworkLabel;


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
    backgroundColor: theme.colors.blue,
    borderRadius: 10
  },
});