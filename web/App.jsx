import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MAX_LIMIT,
  playSound,
  increaseCount,
  decreaseCount,
  resetCount,
} from "../shared/counter";

export default function ClickCounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    const updated = increaseCount(count, MAX_LIMIT);
    if (updated !== count) {
      setCount(updated);
      playSound("increase");
    }
  };

  const handleDecrease = () => {
    const updated = decreaseCount(count);
    if (updated !== count) {
      setCount(updated);
      playSound("decrease");
    }
  };

  const handleReset = () => {
    setCount(resetCount());
    playSound("reset");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Click Counter App</h1>

      <AnimatePresence mode="wait">
        <motion.div
          key={count}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-6xl font-semibold text-blue-700 mb-4"
        >
          {count}
        </motion.div>
      </AnimatePresence>

      {count === MAX_LIMIT && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-red-600 mb-4 font-medium"
        >
          You've reached the limit!
        </motion.p>
      )}

      <div className="flex gap-4 mb-4">
        <button
          onClick={handleIncrease}
          disabled={count === MAX_LIMIT}
          className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition-transform transform hover:scale-105"
        >
          Increase
        </button>
        <button
          onClick={handleDecrease}
          disabled={count === 0}
          className="bg-red-500 text-white px-6 py-2 rounded-xl hover:bg-red-600 transition-transform transform hover:scale-105"
        >
          Decrease
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-500 text-white px-6 py-2 rounded-xl hover:bg-gray-600 transition-transform transform hover:scale-105"
        >
          Reset
        </button>
      </div>
    </div>
  );
}