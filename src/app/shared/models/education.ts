import { User } from "./applicant";

export interface Education{
    educationId: number,
    educationName: string,
    major: string,
    degree: any,
    startDate: Date,
    endDate: Date,
    description: string,
    ownedBy: User
}

export interface Degree{
    name: string
}