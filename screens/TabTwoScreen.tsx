import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import JobList from '../components/Jobs/JobList';
import axios from 'axios';
import { Job } from '../types';


export default function TabTwoScreen() {

  const [jobs, setJobs] = useState<Job[]>([]); 
  useEffect(() => { 
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const response = await axios.get('http://localhost:8888/api/v1/job');
      const arrayJobs = response.data;
      setJobs(arrayJobs);
      console.log(arrayJobs);  //dataの確認
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <FlatList
        data={ jobs }
        renderItem={({ item }) => (
          <JobList
            jobTitle={ item.jobTitle }
            jobDescription={ item.jobDescription }
            user={ item.user }
            devStartDate={ item.devStartDate }
            devEndDate={ item.devEndDate }
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <EditScreenInfo path="/screens/TabTwoScreen.js" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
