import { useState } from "react";

export default function usePrevious<T>(newValue: T): T | null {
  const [previousValue, setPreviousValue] = useState<T | null>(null);
  const [currentValue, setCurrentValue] = useState<T>(newValue);

  if (newValue !== currentValue) {
    setPreviousValue(currentValue);
    setCurrentValue(newValue);
  }

  return previousValue;
}
