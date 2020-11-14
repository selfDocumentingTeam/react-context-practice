import React, {createContext, useReducer} from "react";

const initialStore = {
    results: {},
    search: "Initial Search",
    searchLocation: "37.790590,-122.403060",
    deviceLocation: ""
}

const appStore = createContext(initialStore);
const { Provider } = appStore;

function AppProvider({ children }) {
    const [state, dispatch] = useReducer((oldState, action) => {
        switch (action.type) {
            case "GET_RESULTS":
                return { ...oldState, results: action.payload }
            case "UPDATE_SEARCH":
                return { ...oldState, search: action.payload.search, searchLocation: action.payload.searchLocation, deviceLocation: action.payload.location}
            case "UPDATE_DEVICE_LOCATION":
                return {
                    ...oldState,
                    deviceLocation: action.payload
                }
            case "UPDATE_SEARCH_LOCATION":
                return {
                    ...oldState,
                    searchLocation: action.payload
                }
            default:
                return state;
        }
    }, initialStore)

    return (
        <Provider value={[state, dispatch]}>
            {children}
        </Provider>
    )
}

export { appStore, AppProvider };