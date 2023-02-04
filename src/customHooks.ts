import React, { useState, useEffect } from "react";

export const useStoredValue = (defaultValue: any, key: string) => {
  const [value, setValue] = useState(() => {
    const storedState = localStorage.getItem(key);
    console.log(
      `global state - ${key}`,
      storedState === null ? defaultValue : storedState
    );
    return storedState === null ? defaultValue : storedState;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);
  return [value, setValue];
};
