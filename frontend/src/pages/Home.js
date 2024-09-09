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
    <div className="h-full h-100vh bg-stone-500 pb-96">
      <div className="flex gap-8 flex-wrap mb-auto justify-center p-8">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};

export default Home;
