import { ActionsType } from "../store";

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

const initialState = {
    dialogs: [
        {id: 1, name: "Name 1"},
        {id: 2, name: "Name 2"},
        {id: 3, name: "Name 3"},
        {id: 4, name: "Name 4"},
        {id: 5, name: "Name 5"},
        {id: 6, name: "Name 6"}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Hi world"},
        {id: 2, message: "How are you doing"},
        {id: 3, message: "Miss you"}
    ] as Array<MessageType>
}

type InitialStateType = typeof initialState;
type ActionType = ActionsType<typeof dialogsActions>;

export const dialogsReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case 'ADD_MESSAGE':
            const newPost = {
                id: state.messages.length + 1,
                message: action.payload
            }
            return {
                ...state,
                messages: [...state.messages, newPost],
            }
        default:
            return state;
    }
}

export const dialogsActions = {
    addMessage: (payload: string) => ({ type: 'ADD_MESSAGE', payload } as const)
}
