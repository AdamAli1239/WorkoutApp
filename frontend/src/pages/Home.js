import { useEffect } from "react";
import { useWorkoutHook } from "../hooks/useWorkoutContext";
import WorkoutDetails from "../components/WorkoutDetails";

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
      {workouts &&
        workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
    </div>
  );
};

export default Home;
