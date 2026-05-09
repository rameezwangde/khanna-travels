import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "../animations/useLenis";
import CustomCursor from "./CustomCursor";
import FloatingCTA from "./FloatingCTA";
import Footer from "./Footer";
import Loader from "./Loader";
import Navbar from "./Navbar";
import SocialSidebar from "./SocialSidebar";

export default function Layout() {
  const location = useLocation();
  useLenis();

  return (
    <>
      <Loader />
      <CustomCursor />
      <Navbar />
      <SocialSidebar />
      <FloatingCTA />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
