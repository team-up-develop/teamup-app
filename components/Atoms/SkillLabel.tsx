import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../../constants/Theme";
import { Skill } from "../../types/index";

type Props = {
  props: Skill;
};

const SkillLabel: FC<Props> = ({ props }) => {
  return (
    <View style={styles.language}>
      <Text style={styles.onText}>{props.name}</Text>
    </View>
  );
};

export default SkillLabel;

const styles = StyleSheet.create({
  onText: {
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
    backgroundColor: theme.colors.darkGreen,
    borderRadius: 10,
  },
});
