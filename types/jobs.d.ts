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
  user: User;
  userId: number;
}