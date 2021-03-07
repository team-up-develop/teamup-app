import React, { FC } from "react";
import { StyleSheet, FlatList, Dimensions, Text } from "react-native";
import { TabView, SceneMap, ScrollPager, TabBar } from "react-native-tab-view";
import { View } from "../../components/Themed";
import JobList from "../../components/Organisms/Jobs/JobList";
import useQueryManageJobs from "../../hooks/useQueryManageJobs";
import theme from "../../constants/Theme";

type Props = {
  navigation: any;
};

const ManageScreen: FC<Props> = ({ navigation }) => {
  const manageJobs = useQueryManageJobs();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "manage", title: "管理案件 " },
    { key: "apply", title: " 応募案件" },
    { key: "favorite", title: "保存案件" },
  ]);

  const initialLayout = { width: Dimensions.get("window").width };

  const renderScene = SceneMap({
    manage: () => (
      <FlatList
        data={manageJobs}
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
            onPress={() => navigation.navigate("管理案件詳細", { jobs: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    ),
    apply: () => (
      <View>
        <Text>apply</Text>
      </View>
    ),
    favorite: () => (
      <View>
        <Text>favorite</Text>
      </View>
    ),
  });

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={(p) => (
          <TabBar
            {...p}
            renderLabel={({ route, focused }) => (
              <>
                {focused ? (
                  <Text style={styles.tabActiveText}>{route.title}</Text>
                ) : (
                  <Text style={styles.tabText}>{route.title}</Text>
                )}
              </>
            )}
            // scrollEnabled={true} //* 横にスクロールができる
            getLabelText={({ route: { title } }) => title}
            indicatorStyle={styles.indicator}
            tabStyle={styles.tabStyle}
            style={styles.tab}
          />
        )}
      />
    </View>
  );
};

export default ManageScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  containerDemo: {},
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  tabStyle: {
    borderWidth: 0,
    backgroundColor: theme.colors.white,
  },
  tab: {
    padding: 0,
    margin: 0,
  },
  indicator: {
    backgroundColor: theme.colors.blue,
    position: "absolute",
    bottom: 0,
    height: 3,
  },
  tabActiveText: {
    color: theme.colors.blue,
    fontWeight: "bold",
  },
  tabText: {
    color: theme.colors.textColor,
  },
});
