import { useState } from "react";

export default function useDefault<T>(
  initialValue: T,
  defaultValue: T,
): [state: T, setState: (state: T) => void] {
  const [state, setState] = useState(initialValue);

  if (state === undefined || state === null) {
    return [defaultValue, setState];
  }

  return [state, setState];
}
