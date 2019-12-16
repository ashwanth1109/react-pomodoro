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
    minutes: 25,
    seconds: 0
  });

  const decrementTime = useCallback(() => {
    setTime(prev => {
      const { minutes, seconds } = prev;
      if (seconds === 0) {
        document.title = `${minutes < 11 ? `0${minutes - 1}` : minutes - 1}:59`;
        return {
          minutes: minutes - 1,
          seconds: 59
        };
      } else {
        document.title = `${minutes < 10 ? `0${minutes}` : minutes}:${
          seconds < 11 ? `0${seconds - 1}` : `${seconds - 1}`
        }`;
        if (minutes === 0 && seconds === 1) {
          setTimeout(() => {
            document.title = `Time's up`;
          }, 1000);
        }
        return {
          minutes,
          seconds: seconds - 1
        };
      }
    });
  }, [time]);

  useInterval(
    decrementTime,
    isRunning && (time.minutes !== 0 || time.seconds !== 0) ? 1000 : null
  );

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
