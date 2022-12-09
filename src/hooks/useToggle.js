import { useState } from "react";

export default function useToggle() {
  const [toggle, setToggle] = useState(false);

  function switchToggle() {
    setToggle(!toggle);
  }
  return [toggle, switchToggle];
}
