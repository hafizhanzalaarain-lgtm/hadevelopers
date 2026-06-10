import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ChatBot from "./components/ChatBot";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageLoader from "./components/PageLoader";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Blog = lazy(() => import("./pages/Blog"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

function AnimatedPage({ children }) {
  return (
    <motion.main initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }}>
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.dataset.theme = "dark";
    localStorage.removeItem("ha-theme");
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    function moveGlow(event) {
      const x = `${Math.round((event.clientX / window.innerWidth) * 100)}%`;
      const y = `${Math.round((event.clientY / window.innerHeight) * 100)}%`;
      document.documentElement.style.setProperty("--mx", x);
      document.documentElement.style.setProperty("--my", y);
    }

    window.addEventListener("pointermove", moveGlow);
    return () => window.removeEventListener("pointermove", moveGlow);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll(".hero, .page-hero, .section, .cta-band, .glass-card, .portfolio-card");
    targets.forEach((target) => target.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -7% 0px" }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Suspense fallback={<PageLoader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
            <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
            <Route path="/services" element={<AnimatedPage><Services /></AnimatedPage>} />
            <Route path="/services/:serviceId" element={<AnimatedPage><ServiceDetail /></AnimatedPage>} />
            <Route path="/portfolio" element={<AnimatedPage><Portfolio /></AnimatedPage>} />
            <Route path="/pricing" element={<AnimatedPage><Pricing /></AnimatedPage>} />
            <Route path="/blog" element={<AnimatedPage><Blog /></AnimatedPage>} />
            <Route path="/careers" element={<AnimatedPage><Careers /></AnimatedPage>} />
            <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
            <Route path="/privacy-policy" element={<AnimatedPage><PrivacyPolicy /></AnimatedPage>} />
            <Route path="*" element={<AnimatedPage><Home /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
      <ChatBot />
    </>
  );
}
