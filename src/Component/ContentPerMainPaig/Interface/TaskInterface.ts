export interface TaskInterface {
    InterfaceObj: {
        changeTaskName: ((newState: string) => void) | null
        changeUserName: ((newState: string) => void) | null
        changeUserEmail: ((newState: string) => void) | null
        changeTaskOrganization: ((newState: string) => void) | null
        changeTaskInfluence: ((newState: string) => void) | null
        changeTaskInfluenceDescr: ((newState: string) => void) | null
        changeTaskUrgency: ((newState: string) => void) | null
        changeTaskUrgencyDescr: ((newState: string) => void) | null
        changeTaskComment: ((newState: string) => void) | null
        taskName: string
        userName: string
        userEmail: string
        taskOrganization: string
        taskInfluence: string
        taskInfluenceDescr: string
        taskUrgency: string
        taskUrgencyDescr: string
        taskComment: string
    }
}