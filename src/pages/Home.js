import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p className="hero-kicker">Portfolio</p>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Ruheel Gonuguntla
          </motion.h1>

          <p className="hero-sub">AI Systems • Machine Learning • Automation</p>

          <div className="about">
            AI and Machine Learning enthusiast with hands-on experience in backend systems,
            automation pipelines, and LLM-based evaluation systems. Focused on scalable AI solutions.
          </div>
        </motion.div>

        <motion.div
          className="hero-photo-card"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <img
            className="hero-photo"
            src={`${process.env.PUBLIC_URL}/rusheel.jpeg`}
            alt="Ruheel Gonuguntla portrait"
          />
        </motion.div>
      </div>
    </div>
  );
}
