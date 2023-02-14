"use client";
import { motion } from "framer-motion";

import AboutFeaturesList from "../about/AboutFeaturesList";

export default function Pricing() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }} className="content">
            <div className="container">
                <div className="content__container">
                    <div className="page-title">
                        <h1>Our Pricing</h1>
                        <div className="page_title_bar"></div>
                    </div>
                    <div className="page-content">
                        <div className="pricing-page-list">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="pricing-item">
                                        <h4>
                                            <span>Basic</span>
                                            <span>Free</span>
                                        </h4>
                                        <ul>
                                            <li>7 days</li>
                                            <li>720p Resolution</li>
                                            <li>Limited Availability</li>
                                            <li>Desktop Only</li>
                                            <li>Limited Support</li>
                                        </ul>
                                        <button>Choose Plan</button>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="pricing-item center">
                                        <h4>
                                            <span>Premium</span>
                                            <span>$19.99</span>
                                        </h4>
                                        <ul>
                                            <li>1 Month</li>
                                            <li>Full HD</li>
                                            <li>Lifetime Availability</li>
                                            <li>TV & Desktop</li>
                                            <li>24/7 Support</li>
                                        </ul>
                                        <button>Choose Plan</button>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="pricing-item">
                                        <h4>
                                            <span>Cinematic</span>
                                            <span>$39.99</span>
                                        </h4>
                                        <ul>
                                            <li>2 Months</li>
                                            <li>Ultra HD</li>
                                            <li>Lifetime Availability</li>
                                            <li>Any Device</li>
                                            <li>24/7 Support</li>
                                        </ul>
                                        <button>Choose Plan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-page-content">
                            <h3>Our Features</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
                            <AboutFeaturesList />
                        </div>
                    </div>

                </div>
            </div>
        </motion.div >
    );
}