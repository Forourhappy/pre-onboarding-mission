import { useEffect, useState } from "react";

export const useDebounce = (input: string, delay: number = 300) => {
  const [value, setValue] = useState(() => input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(input);
    }, delay);

    return () => clearTimeout(timeout);
  }, [input, delay]);

  return value;
};
