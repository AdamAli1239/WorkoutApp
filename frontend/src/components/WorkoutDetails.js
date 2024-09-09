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
    <div className="bg-stone-200 p-8 border-2  w-96 ">
      <div className="mb-5">
        <h3 className="font-bold  underline-offset-1 text-blue-500 font-serif">
          {workout.title}
        </h3>
        <p className="font-serif">Load(kg): {workout.reps}</p>
        <p className="font-serif">Reps: {workout.weight}</p>
      </div>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full font-serif"
      >
        Click to delete the workout
      </button>
    </div>
  );
};

export default WorkoutDetails;
