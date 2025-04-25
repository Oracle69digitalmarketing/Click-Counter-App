import { motion, AnimatePresence } from "framer-motion";

const CounterDisplay = ({ count }) => (
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
);

export default CounterDisplay;