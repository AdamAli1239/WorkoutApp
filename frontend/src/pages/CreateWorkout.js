import { useState } from "react";

const createWorkout = () => {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
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

export default createWorkout;
