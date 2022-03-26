import { StateType } from "./AppProvider";

type DispatchType = {
  type: Actions;
  payload?: any;
};

type Actions = "ADD";

export interface ReturnType extends StateType {
  dispatch: React.Dispatch<DispatchType>;
}

export const reducer = (state: StateType, action: DispatchType): StateType => {
  switch (action.type) {
    case "ADD":
      return { ...state };

    default:
      return state;
  }
};
