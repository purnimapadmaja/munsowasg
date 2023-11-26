import React, { useEffect, useState } from "react";

const Timer = ({ timeLimit, onTimeUp }) => {
  const [time, setTime] = useState(timeLimit);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime - 1;
        if (newTime <= 0) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeUp]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };
  const timeStyle = {
    color: time <= 60 ? "red" : "green",
  };

  return (
    <div className="text-center mt-2 text-xl">
      <span style={timeStyle}>{formatTime(time)}</span>
    </div>
  );
};

export default Timer;
