import React, { useState, useEffect } from "react";

export const useStoredValue = (defaultValue: any, key: string) => {
  const [value, setValue] = useState(() => {
    let storedState = localStorage.getItem(key);
    console.log(
      `global state - ${key}`,
      storedState === null ? defaultValue : JSON.parse(storedState)
    );
    return storedState === null ? defaultValue : storedState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};
