import { UserProfile } from "./applicant"


export interface Education{
    educationId: number,
    degree: any,
    description: string,
    educationName: string,
    endDate: any
    startDate: any,
    major: string,
    ownedBy: UserProfile
}

export interface Degree{
    name: string
}