import { createContext, useReducer } from "react";

export const WorkoutReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return { workouts: action.payload };
    case "CREATE_WORKOUT":
      return {
        workouts: [...state.workouts, action.payload],
      };
    case "UPDATE_WORKOUT":
      return {
        workouts: [...state.workouts, action.payload],
      };
    case "DELETE_WORKOUT":
      return {
        workouts: [
          ...state.workouts.filter(
            (workout) => workout.id !== action.payload.id
          ),
        ],
      };
    default:
      return {
        workouts: state,
      };
  }
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
