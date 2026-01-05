import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "../styles/Certifications.css";
import softwareDevImg from "../assets/certifications/ITSoftwareDevelopment.png";
import azureAiImg from "../assets/certifications/Azure AI Fundamentals.png";
import awsArchitectImg from "../assets/certifications/AWS.png";
import streamlitImg from "../assets/certifications/Courseera.png";



export default function Certifications() {
  const certs = [
    {
      title: "IT Specialist - Software Development",
      year: "2022",
      link: "https://www.credly.com/badges/4167f973-87ff-4e70-a1d9-8c6e8c2b25be",
      img: softwareDevImg,
    },
    {
      title: "Microsoft Certified Azure AI Fundamentals",
      year: "2021",
      link: "https://www.credly.com/badges/34c4332d-4505-421b-b82b-cc2ff2d2a36e",
      img: azureAiImg,
    },
    {
      title: "AWS Academy Graduate Cloud Architecting",
      year: "2023",
      link: "https://www.credly.com/badges/355cd898-c924-481e-a481-4cccf3e29d8d",
      img: awsArchitectImg,
    },
    {
      title: "Build a ML App with Streamlit and Python",
      year: "2021",
      link: "https://www.coursera.org/account/accomplishments/certificate/CGKT83Z49U8B",
      img: streamlitImg,
    },
  ];

  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="certifications-section" id="certifications">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Certifications & Achievements
      </motion.h2>

      {/* Certification Cards */}
      <div className="cert-grid">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            className="cert-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(99,102,241,0.3)",
            }}
            onClick={() => setSelectedCert(cert)}
          >
            <h4>{cert.title}</h4>
            <p>{cert.year}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="cert-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCert.img}
                alt={selectedCert.title}
                className="cert-modal-img"
              />
              <h3>{selectedCert.title}</h3>
              <p>{selectedCert.year}</p>
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary"
              >
                View Credential
              </a>
              <button className="close-btn" onClick={() => setSelectedCert(null)}>
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
