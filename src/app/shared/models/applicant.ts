export interface Applicant{
    id: number,
    avatar: File,
    bio: string,
    portofolioUrl: string,
    cv: File,
    addess: string,
    dob: Date,
    ownedBy: User, //user
    skills: Set<SkillEntity>,
}

export interface User{
    id: number,
    name: string,
    email: string,
    phoneNumber: string,
    roleName: string,
}

export interface SkillEntity{

}