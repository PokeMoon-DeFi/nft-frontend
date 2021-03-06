import { useState } from "react";

export const useInput = ({ type /*...*/ }) => {
  const [value, setValue] = useState("");
  const input = (
    <input
      placeholder="Pack ID"
      value={value}
      style={{ flex: 1 }}
      onChange={(e) => setValue(e.target.value)}
      type={type}
    />
  );
  return [value, input];
};
