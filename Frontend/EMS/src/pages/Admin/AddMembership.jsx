import { useState } from "react";

function AddMembership() {
  const [duration, setDuration] = useState("6 months");

  return (
    <form>
      <h4>Add Membership</h4>

      <input type="text" required placeholder="Membership Number" />

      <div>
        <label>
          <input
            type="radio"
            value="6 months"
            checked={duration === "6 months"}
            onChange={(e) => setDuration(e.target.value)}
          />
          6 Months
        </label>

        <label>
          <input
            type="radio"
            value="1 year"
            onChange={(e) => setDuration(e.target.value)}
          />
          1 Year
        </label>

        <label>
          <input
            type="radio"
            value="2 years"
            onChange={(e) => setDuration(e.target.value)}
          />
          2 Years
        </label>
      </div>

      <button>Add</button>
    </form>
  );
}

export default AddMembership;