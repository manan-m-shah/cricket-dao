import React from "react";
import { createContext } from "react";

const Web3Context = createContext({} as any);
export const useWeb3Context = () => {
  return React.useContext(Web3Context);
};

export default Web3Context;
