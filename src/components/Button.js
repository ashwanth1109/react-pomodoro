import React from "react";
import { Button } from "./styles";

export default ({ children, handleClick }) => {
  return <Button onClick={handleClick}>{children}</Button>;
};
