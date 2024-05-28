export interface ModalInterface {
    InterfaceObj: {
        changeButtonEmpty: ((newState: boolean) => void) | null
        changeButtonSuccess: ((newState: boolean) => void) | null
    }
}