import { useState, useEffect } from "react";
const TIMER = 3000;
export default function ProgressBar() {
  const [remaingTime, setRemaingingTime] = useState(TIMER);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemaingingTime((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress value={remaingTime} max={TIMER} />;
}
