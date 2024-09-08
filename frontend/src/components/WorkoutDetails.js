import { useWorkoutHook } from "../hooks/useWorkoutContext";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutHook();
  const handleClick = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };
  return (
    <div>
      <h3>{workout.title}</h3>
      <p>{workout.reps}</p>
      <p>{workout.weight}</p>

      <span onClick={handleClick} className="hover:red">
        Click to delete the workout
      </span>
    </div>
  );
};

export default WorkoutDetails;
