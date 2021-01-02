import React, { FC } from 'react'
import { StyleSheet, FlatList } from 'react-native';
import { View } from '../../components/Themed';
import JobList from '../../components/Organisms/Jobs/JobList';
import useQueryManageJobs from '../../hooks/useQueryManageJobs';

type Props = { 
  navigation: any,
}

const ManageScreen: FC<Props> = ({ navigation }) => {
  const manageJobs = useQueryManageJobs();

  return (
    <View style={styles.container}>
      <FlatList
        data={ manageJobs }
        renderItem={({ item }) => (
          <JobList
            props={item}
            jobTitle={ item.jobTitle }
            jobDescription={ item.jobDescription }
            user={ item.user }
            devStartDate={ item.devStartDate }
            devEndDate={ item.devEndDate }
            programingLanguage={ item.programingLanguage }
            programingFramework={ item.programingFramework }
            skill={ item.skill }
            onPress={() => navigation.navigate("管理案件詳細", { jobs: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

export default ManageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});