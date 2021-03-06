import React, { FC } from "react";
import { StyleSheet, FlatList } from "react-native";
// import EditScreenInfo from '../components/EditScreenInfo';
import { View } from "../../components/Themed";
import JobList from "../../components/Organisms/Jobs/JobList";
import useQueryJobs from "../../hooks/useQueryJobs";

type Props = {
  navigation: any;
};

const JobsScreen: FC<Props> = ({ navigation }) => {
  const jobs = useQueryJobs();

  return (
    <View style={styles.container}>
      <FlatList
        data={jobs}
        renderItem={({ item }) => (
          <JobList
            props={item}
            jobTitle={item.job_title}
            jobDescription={item.job_description}
            user={item.user}
            devStartDate={item.dev_start_date}
            devEndDate={item.dev_end_date}
            programingLanguage={item.programing_languages}
            programingFramework={item.programing_frameworks}
            skill={item.skills}
            onPress={() => navigation.navigate("案件詳細", { jobs: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* <EditScreenInfo path="/screens/TabTwoScreen.js" /> */}
    </View>
  );
};

export default JobsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
