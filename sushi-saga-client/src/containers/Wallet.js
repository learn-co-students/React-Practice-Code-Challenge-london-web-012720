import React from "react";

export default function Wallet(props) {
  return (
    <div>
      <form onSubmit={props.handleWalletSubmit}>
        <input
          type="number"
          name="AddedMoney"
          placeholder="How much do you want to add?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
