import { useEffect, useState } from "react";
import "../../styles/Main/Timer.css";

export const Timer = () => {
const [timeLeft, setTimeLeft] = useState({ minutes: 11, seconds: 45 })

// Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft((prev) => ({ ...prev, seconds: prev.seconds - 1 }))
      } else if (timeLeft.minutes > 0) {
        setTimeLeft({ minutes: timeLeft.minutes - 1, seconds: 59 })
      } else {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft]);

  return (
    <div className="countdown-timer">
        <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
        <span className="separator">:</span>
        <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
    </div>
  )
}
