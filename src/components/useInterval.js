import React, { useRef, useEffect } from "react";

export default (cb, delay) => {
  const savedCb = useRef();

  useEffect(() => {
    savedCb.current = cb;
  }, [cb]);

  useEffect(() => {
    if (delay !== null) {
      let id = setInterval(savedCb.current, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
