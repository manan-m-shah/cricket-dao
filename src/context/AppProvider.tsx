import React, { useReducer } from "react";
import { reducer, ReturnType } from "./reducer";

const AppContext = React.createContext<null | ReturnType>(null);

export type StateType = {

};

export const initialState: StateType = {

};

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return React.useContext(AppContext)!;
};

export { AppProvider, useGlobalContext };
