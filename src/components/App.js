import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  AppContainer,
  Heading,
  MainContainer,
  TimeContainer,
  ButtonContainer
} from "./styles";
import Button from "./Button";
import Time from "./Time";
import useInterval from "./useInterval";

export default () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 25
  });

  const decrementTime = useCallback(() => {
    setTime(prev => {
      if (prev.seconds === 0) {
        return {
          seconds: 59,
          minutes: prev.minutes - 1
        };
      } else
        return {
          seconds: prev.seconds - 1,
          minutes: prev.minutes
        };
    });
  }, [time]);

  useInterval(decrementTime, isRunning ? 1000 : null);

  const { minutes, seconds } = time;

  const startCounter = useCallback(() => {
    if (!isRunning) setIsRunning(true);
  }, [isRunning]);

  const resetCounter = useCallback(() => {
    if (isRunning) {
      setTime({
        seconds: 0,
        minutes: 25
      });
      setIsRunning(false);
    }
  }, [isRunning]);

  return (
    <AppContainer>
      <Heading>Pomodoro Timer</Heading>
      <ButtonContainer>
        <Button handleClick={startCounter}>Start</Button>
        <Button handleClick={resetCounter}>Reset</Button>
      </ButtonContainer>
      <MainContainer>
        <TimeContainer>
          <Time value={minutes} />
          <Time value={seconds} />
        </TimeContainer>
      </MainContainer>
    </AppContainer>
  );
};
