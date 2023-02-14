"use client";
import { motion } from "framer-motion";

import AboutFeaturesList from "./AboutFeaturesList";

export default function About() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }} className="content">
            <div className="container">
                <div className="content__container">
                    <div className="page-title">
                        <h1>About Us</h1>
                        <div className="page_title_bar"></div>
                    </div>
                    <div className="page-content">
                        <div className="about-page-content">
                            <h3><span>FLIXGO</span> - Best Place for Movies</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
                            <p>'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        </div>
                        <AboutFeaturesList />
                    </div>

                </div>
            </div>
        </motion.div>
    );
}