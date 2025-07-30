import { useState } from "react";

export default function useToggle(
  initialValue: boolean,
): [state: boolean, toggle: (newState?: boolean) => void] {
  const [value, setValue] = useState(Boolean(initialValue));

  function toggle(newValue?: boolean): void {
    if (typeof newValue !== "boolean") {
      setValue((v) => !v);
    } else {
      setValue(Boolean(newValue));
    }
  }
  return [value, toggle];
}
