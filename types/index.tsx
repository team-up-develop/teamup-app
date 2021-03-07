export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

// * Bottomの型宣言
export type BottomTabParamList = {
  TabOne: undefined;
  開発一覧: undefined;
  アカウント: undefined;
  管理: undefined;
};

// * createStackNavigator に渡す 型宣言
export type TabOneParamList = {
  TabOneScreen: undefined;
};
export type JobsParamList = {
  JobsScreen: undefined;
  JobDetail: undefined;
};
export type UserParamsList = {
  ProfileScreen: undefined;
};
export type ManageParamsList = {
  ManageScreen: undefined;
};
export type JobCreateNavigatorType = {
  JobCreate: undefined;
};

// * Job
export type Job = {
  created_at: Date;
  deleted_at: null | Date;
  dev_end_date: Date;
  dev_start_date: Date;
  id: number;
  job_description: string | null;
  jobStatusId: 1;
  job_title: string;
  programing_frameworks: any;
  programing_languages: any;
  publicationPeriod: Date;
  recruitmentNumbers: number;
  skills: any;
  updatedAt: Date;
  user: any; //TODO: 仮で any
  userId: number;
};

// * 開発言語
export interface Language {
  id: number;
  updated_at: Date | null;
  name: string;
}

// * フレームワーク
export interface Framework {
  id: number;
  updated_at: Date | null;
  name: string;
}

// * その他スキル
export interface Skill {
  id: number;
  updated_at: Date | null;
  name: string;
}
