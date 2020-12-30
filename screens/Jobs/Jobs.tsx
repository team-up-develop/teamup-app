import React, { FC, useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import JobList from '../../components/Organisms/Jobs/JobList';
import axios from 'axios';
import { Job } from '../../types';
import Master from '../../master'

type Props = { 
  navigation: any,
}

const JobsScreen: FC<Props> = ({ navigation }) => {

  const [jobs, setJobs] = useState<Job[]>([]); 
  useEffect(() => { 
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const response = await axios.get(`${Master.API}/job`);
      setJobs(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={ jobs }
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
            onPress={() => navigation.navigate("案件詳細", { jobs: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* <EditScreenInfo path="/screens/TabTwoScreen.js" /> */}
    </View>
  );
}

export default JobsScreen;

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
