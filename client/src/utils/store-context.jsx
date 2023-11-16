import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const StoreContext = createContext();

const INITIAL_STATE = {
  theme: {
    dark: false,
  },
  user: {
    profile: {},
  },
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

const useStoreContext = (key = null) => {
  if (!key) return useContext(StoreContext);

  const [state, dispatch] = useContext(StoreContext);
  return [state[key] ? state[key] : {}, dispatch];
};

export { StoreProvider, useStoreContext };
