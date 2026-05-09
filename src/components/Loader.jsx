import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[10000] grid place-items-center bg-navy"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.65, ease: "easeInOut" } }}
        >
          <motion.div
            className="text-center"
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mx-auto mb-5 h-px w-36 bg-gold-line" />
            <p className="font-serif text-4xl font-bold tracking-normal text-ivory md:text-6xl">Khanna Travels</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.36em] text-gold">Holidays Redefined</p>
            <div className="mx-auto mt-5 h-px w-36 bg-gold-line" />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
