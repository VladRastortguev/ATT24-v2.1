export interface CreaetAccount1cInterface {
    InterfaceObj: {
        changeUserNameCreate1c: ((newState: string) => void) | null
        changeUserCompanyCreate1c: ((newState: string) => void) | null
        changeUserEmailCreate1c: ((newState: string) => void) | null
        changeUserJobtitelCreate1c: ((newState: string) => void) | null
        changeUserJobArrow: ((newState: string) => void) | null
        resetJobTitel: ((UserArrowJob: string) => void) | null
        userName: string
        userCompany: string
        userEmail: string
        userJobtitel: string
        userJobArrow: string
    }
}