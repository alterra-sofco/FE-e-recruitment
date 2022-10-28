export interface Job {
  jobPosition: string,
  jobPostingId: number,
  updatedAt: any,
  yearExperience: number
}

export interface JobDetails {
  JobDetail: string,
  isApplied: boolean,
  jobPosition: string,
  jobPostingId: number,
  updatedAt: any,
  yearExperience: number,
}

export interface MasterDataModel {
  next: boolean,
  previous: boolean,
  message?: string,
  currentPage: number,
  totalPages: number,
  pageSize: number,
  totalData: number,
  status: string,
  data: Job[]
}
