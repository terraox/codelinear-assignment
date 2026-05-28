import { motion } from 'framer-motion';
import './CtaSection.css';

const CtaSection = () => {
  return (
    <section className="cta-section">
      <motion.div 
        className="cta-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Left: Text Content */}
        <div className="cta-content">
          <h2 className="cta-title">
            Take the full advantage of<br />going paper-less now.
          </h2>
          <p className="cta-description">
            CB7 helps your financial institution improve the client experience,<br />
            automate and optimize procedures, simplify banking operations
          </p>
        </div>

        {/* Right: Buttons */}
        <div className="cta-actions">
          <button className="btn-contact-us">CONTACT US</button>
          <button className="btn-request-demo-cta">REQUEST DEMO</button>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;
