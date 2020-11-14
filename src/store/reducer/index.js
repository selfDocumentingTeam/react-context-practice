export const initialStore = {}

export const Context = createContext(initialStore);

export function appReducer(state, action) {
    switch(action.type) {
        case "GET_RESULTS": {
            return { results: action.payload }
        }
    }
}