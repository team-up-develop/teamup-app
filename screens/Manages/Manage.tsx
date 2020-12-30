import React, { FC, useState, useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import { View } from '../../components/Themed';
import JobList from '../../components/Organisms/Jobs/JobList';
import Master from '../../master'

type Props = { 
  navigation: any,
}

const ManageScreen: FC<Props> = ({ navigation }) => {

  const [manageJobs, setManageJobs] = useState<any[]>([]); 
  useEffect(() => { 
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const response = await axios.get(`${Master.API}/job/?user_id=1`);
      setManageJobs(response.data);
    } catch (error) {
      console.error(error);
    }
  }

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