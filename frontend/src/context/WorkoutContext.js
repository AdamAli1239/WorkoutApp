import { createContext, useReducer } from "react";

export const WorkoutReducer = (state,action) => {

};

export const WorkoutContext = createContext();

export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(WorkoutReducer, {
    workouts: null,
  });
  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};
