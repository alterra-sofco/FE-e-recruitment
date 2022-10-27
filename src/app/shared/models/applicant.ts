import {Education} from "./education"
import {Experience} from "./experience"
import {Skill} from "./skill"

export interface Applicant {
  address: string,
  avatarFileId: string,
  avatarURL: string,
  bio: string,
  cvFileId: string,
  cvURL: string,
  dob: Date,
  educations: Education[],
  email: string,
  experiences: Experience[],
  name: string,
  phoneNumber: string,
  skills: Skill[],
  userId: number
}

export interface UserProfile {
  address: string,
  bio: string,
  dob: any,
  name: string,
  phoneNumber: string,
}


