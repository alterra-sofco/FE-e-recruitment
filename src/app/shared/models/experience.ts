import { User } from "./applicant";

export interface Experience{
    experienceId: number,
    corporateName: string,
    position: string,
    startDate: Date,
    endDate: Date,
    description: string,
    ownedBy: User
}