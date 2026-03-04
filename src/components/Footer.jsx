'use client';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const iconStyles = "w-10 h-10 flex items-center justify-center rounded-full border border-[#DEDB00] hover:bg-[#218CA1] hover:border-[#218CA1] hover:text-white transition-all text-[#218CA1]";

    return (
        <footer className="w-full font-['Poppins'] bg-[#f0f9fa] py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-6">
                {/* Top Section: Links Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 mb-12">
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[#218CA1] text-[18px] font-semibold mb-6">Quick Links</h4>
                        <ul className="flex flex-col space-y-4">
                            <li><Link href="/" className="text-black hover:text-[#218CA1] transition-colors underline decoration-[#218CA1]/30 underline-offset-4 decoration-1">Home</Link></li>
                            <li><Link href="/features" className="text-black hover:text-[#218CA1] transition-colors underline decoration-[#218CA1]/30 underline-offset-4 decoration-1">Features</Link></li>
                            <li><Link href="/blog" className="text-black hover:text-[#218CA1] transition-colors underline decoration-[#218CA1]/30 underline-offset-4 decoration-1">Blog</Link></li>
                            <li><Link href="/docs" className="text-black hover:text-[#218CA1] transition-colors underline decoration-[#218CA1]/30 underline-offset-4 decoration-1">Docs</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-[#218CA1] text-[18px] font-semibold mb-6">Company</h4>
                        <ul className="flex flex-col space-y-4">
                            <li><Link href="/about" className="text-black hover:text-[#218CA1] transition-colors underline decoration-[#218CA1]/30 underline-offset-4 decoration-1">About Us</Link></li>
                            <li><Link href="/careers" className="text-black hover:text-[#218CA1] transition-colors underline decoration-[#218CA1]/30 underline-offset-4 decoration-1">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[#218CA1] text-[18px] font-semibold mb-6">Contact</h4>
                        <ul className="flex flex-col space-y-4">
                            <li><Link href="/contact" className="text-black hover:text-[#218CA1] transition-colors underline decoration-[#218CA1]/30 underline-offset-4 decoration-1">Contact & Location</Link></li>
                            <li><a href="tel:+918310972324" className="text-black hover:text-[#218CA1] transition-colors underline decoration-[#218CA1]/30 underline-offset-4 decoration-1">+91 83109 72324</a></li>
                            <li><a href="mailto:talktous@yappes.com" className="text-black hover:text-[#218CA1] transition-colors underline decoration-[#218CA1]/30 underline-offset-4 decoration-1">talktous@yappes.com</a></li>
                        </ul>
                    </div>

                    {/* Stay Connected */}
                    <div>
                        <h4 className="text-[#218CA1] text-[18px] font-semibold mb-6">Stay Connected</h4>
                        <div className="flex space-x-4">
                            <a href="#" className={iconStyles} aria-label="LinkedIn">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="#" className={iconStyles} aria-label="X (Twitter)">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.31 17.41z" />
                                </svg>
                            </a>
                            <a href="#" className={iconStyles} aria-label="Email">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a href="#" className={iconStyles} aria-label="Facebook">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[#DEDB00] opacity-30 my-10"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
                    <div className="flex flex-col items-start mb-8 md:mb-0">
                        <img
                            src="/runtime-solutions-logo.png"
                            alt="Runtime Solutions Logo"
                            className="h-[60px] md:h-[80px] w-auto object-contain mb-4"
                        />
                        <p className="text-black text-[14px] md:text-[15px] opacity-80">
                            # 2981/2A/13/A Gokulam, Main Road, V.V. Mohalla, Mysore - 570 002
                        </p>
                    </div>
                    <div className="text-black text-[14px] md:text-[15px] opacity-80 text-left md:text-right">
                        Copyright © 2025 Runtime Solutions. Made for the world with lots of ❤️ in India.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
