const { useContext } = require("react");
const { WorkoutContext } = require("../context/WorkoutContext");

export const useWorkoutHook = () => {
  const context = useContext(WorkoutContext);

  return context;
};
