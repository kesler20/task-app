import React, { useState, useEffect } from "react";

export const useStoredValue = (defaultValue: any, key: string) => {
  const [value, setValue] = useState(() => {
    let storedState = localStorage.getItem(key);
    return storedState === null ? defaultValue : JSON.parse(storedState);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};
