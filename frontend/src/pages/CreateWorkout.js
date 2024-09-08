import { useState } from "react";
import { useWorkoutHook } from "../hooks/useWorkoutContext";
import { Navigate, useNavigate } from "react-router-dom";
const CreateWorkout = () => {
  const { dispatch } = useWorkoutHook();
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  console.log("IN THIS COMPONENT");
  const navigate = useNavigate();

  const handleSubmission = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/workouts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, reps, weight }),
    });

    const json = await response.json();
    if (response.ok) {
      console.log("we here");
      dispatch({ type: "CREATE_WORKOUT", payload: json });
      setTitle("");
      setReps("");
      setWeight("");
      navigate(-1);
    }
  };
  return (
    <form onSubmit={handleSubmission}>
      <h1>Create a workout!</h1>

      <label>Title:</label>
      <input
        required
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>

      <label>Reps:</label>
      <input
        required
        type="number"
        value={reps}
        min={0}
        onChange={(e) => setReps(e.target.value)}
      ></input>

      <label>Weight (kg):</label>
      <input
        required
        type="number"
        min={0}
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      ></input>
      <button>Click me to create your workout</button>
    </form>
  );
};

export default CreateWorkout;
