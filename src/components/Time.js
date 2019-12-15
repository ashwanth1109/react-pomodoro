import React, { useCallback } from "react";
import { Time } from "./styles";

export default ({ value }) => {
  const displayValue = useCallback(val => {
    if (val < 10) return `0${val}`;
    return val;
  }, []);
  return <Time>{displayValue(value)}</Time>;
};
