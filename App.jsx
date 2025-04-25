import React, { useState } from "react";
import ActionButton from "./components/ActionButton";
import CounterDisplay from "./components/CounterDisplay";
import { usePersistentState } from "./hooks/usePersistentState";

const soundMap = {
  increase: "/sounds/increase.mp3",
  decrease: "/sounds/decrease.mp3",
  reset: "/sounds/reset.mp3",
};

const MAX_LIMIT = 10;
const MIN_LIMIT = 0;

export default function App() {
  const [count, setCount] = usePersistentState("counter-value", 0);
  const [soundOn, setSoundOn] = useState(true);

  const playSound = (type) => {
    if (!soundOn) return;
    const audio = new Audio(soundMap[type]);
    audio.play();
  };

  const increase = () => {
    if (count < MAX_LIMIT) {
      setCount(prev => prev + 1);
      playSound("increase");
    }
  };

  const decrease = () => {
    if (count > MIN_LIMIT) {
      setCount(prev => prev - 1);
      playSound("decrease");
    }
  };

  const reset = () => {
    setCount(0);
    playSound("reset");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Click Counter App</h1>

      <CounterDisplay count={count} />

      {count === MAX_LIMIT && (
        <p className="text-red-600 mb-4 font-medium">You've reached the limit!</p>
      )}

      <div className="flex gap-4 mb-4">
        <ActionButton label="Increase" onClick={increase} disabled={count === MAX_LIMIT} bgColor="bg-green-500" />
        <ActionButton label="Decrease" onClick={decrease} disabled={count === MIN_LIMIT} bgColor="bg-red-500" />
        <ActionButton label="Reset" onClick={reset} bgColor="bg-gray-500" />
      </div>

      <div className="mt-2">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={soundOn} onChange={() => setSoundOn(!soundOn)} />
          Sound {soundOn ? "On" : "Off"}
        </label>
      </div>
    </div>
  );
}