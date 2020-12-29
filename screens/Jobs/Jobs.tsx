import React, { FC, useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import JobList from '../../components/Jobs/JobList';
import axios from 'axios';
import { Job } from '../../types';
import { Card, Title, Paragraph } from 'react-native-paper';

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
      const response = await axios.get('http://localhost:8888/api/v1/job');
      const arrayJobs = response.data;
      setJobs(arrayJobs);
      // console.log(arrayJobs); //* dataの確認
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
            onPress={() => navigation.navigate("JobDetail", { jobs: item })}
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
