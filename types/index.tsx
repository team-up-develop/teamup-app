export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  "開発一覧": undefined;
  "アカウント": undefined;
};

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