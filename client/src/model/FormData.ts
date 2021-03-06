export interface ISinginFormData {
    firstName: string
    lastName: string
    email: string
    password: string
}

export interface ILoginFormData {
    email: string
    password: string
}

export interface ICreateProjectFormData {
    Title: string
    Description: string
    Name: string
    DevelopersIds: number[]
}

