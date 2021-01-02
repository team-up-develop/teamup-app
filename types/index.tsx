export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

// * Bottomの型宣言
export type BottomTabParamList = {
  TabOne: undefined;
  "開発一覧": undefined;
  "アカウント": undefined;
  "管理": undefined;
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
}
export type ManageParamsList = {
  ManageScreen: undefined;
}
export type JobCreateNavigatorType = {
  JobCreate: undefined;
}

// * Job
export type Job = {
  createdAt: Date;
  deletedAt: null | Date;
  devEndDate: Date;
  devStartDate: Date;
  id: number;
  jobDescription: string | null;
  jobStatusId: 1;
  jobTitle: string;
  programingFramework: any;
  programingLanguage: any;
  publicationPeriod: Date;
  recruitmentNumbers: number;
  skill: any;
  updatedAt: Date;
  useMenter?: boolean;
  user: any; //TODO: 仮で any
  userId: number;
}

// * 開発言語
export interface Language {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  programingLanguageName: string;
}

// * フレームワーク
export interface Framework {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  programingFrameworkName: string;
}

// * その他スキル
export interface Skill {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  skillName: string;
}