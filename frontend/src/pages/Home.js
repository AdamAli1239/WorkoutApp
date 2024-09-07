import { useEffect } from "react";
import { useWorkoutHook } from "../hooks/useWorkoutContext";

const Home = () => {
  const { workouts, dispatch } = useWorkoutHook();
  useEffect(() => {
    const getWorkouts = async () => {
      const response = await fetch("/api/workouts/");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };
    getWorkouts();
  }, []);
  return (
    <div>
        {workouts && workouts.map}
    </div>
  );
};

export default Home;
