import { useState } from "react";

function Cart() {
  const [agree, setAgree] = useState(false);

  return (
    <div>
      <h3>Cart</h3>

      <p>Total Amount: ₹5000</p>

      <label>
        <input
          type="checkbox"
          checked={agree}
          onChange={() => setAgree(!agree)}
        />
        Confirm Payment
      </label>

      <button disabled={!agree}>Pay</button>
      <button>Cancel</button>
    </div>
  );
}

export default Cart;