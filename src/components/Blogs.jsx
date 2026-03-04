'use client';
import React, { useState, useRef, useEffect } from 'react';

/* ─────────────────────────────────────────────
   BLOG DATA
───────────────────────────────────────────── */
const BLOGS = [
    {
        id: 'blog-1',
        title: 'Runtime Solutions kicks off the new month with a bang!',
        description:
            'Runtime Solutions, Mysore, was honored to extend a warm welcome to the esteemed delegation...',
        image: '/blog1.jpg',
        link: 'https://yappes.com/blog/yappes-kicks-off-the-new-month-with-a-bang',
    },
    {
        id: 'blog-2',
        title: 'BCIC Runtime Solutions Award',
        description:
            'Bolstered by government support in Karnataka, the startup ecosystem in the...',
        image: '/blog2.jpg',
        link: 'https://yappes.com/blog/bcic-yappes-award',
    },
    {
        id: 'blog-3',
        title: 'Embracing the Digital Era: Unveiling API Challenges...',
        description:
            'As the world digitizes and APIs further continue to cement their base at the core...',
        image: '/blog3.jpg',
        link: 'https://yappes.com/blog/embracing-the-digital-era',
    },
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const Blogs = () => {
    const cardRefs = useRef([]);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    /* Track global mouse position and handle cursor visibility */
    useEffect(() => {
        const handleGlobalMouseMove = (e) => {
            // We only need to update position if we are near the blogs section or if it is already visible
            setCursorPos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleGlobalMouseMove);
        return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
    }, []);

    /* Staggered reveal on scroll */
    useEffect(() => {
        const els = cardRefs.current.filter(Boolean);
        if (!els.length) return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const idx = els.indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, idx * 120);
                    io.unobserve(entry.target);
                });
            },
            { threshold: 0.1 }
        );

        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    return (
        <section className="relative w-full font-['Poppins'] bg-white"
            style={{ paddingTop: '70px', paddingBottom: '80px' }}>

            {/* ── "Blogs & Articles" pill label ── */}
            <div className="flex justify-center mb-10 md:mb-14">
                <span
                    className="inline-block text-[14px] md:text-[15px] font-normal tracking-wide
                       rounded-full px-[26px] py-[8px]"
                    style={{
                        color: '#218CA1',
                        border: '1.5px solid #218CA1',
                        background: 'transparent',
                    }}
                >
                    Blogs &amp; Articles
                </span>
            </div>

            {/* ── Blog cards grid ── */}
            <div className="max-w-[1455px] mx-auto px-4 md:px-8 lg:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {BLOGS.map(({ id, title, description, image, link }, i) => (
                        <a
                            key={id}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            ref={(el) => (cardRefs.current[i] = el)}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="group block rounded-[16px] overflow-hidden transition-all duration-300
                               hover:shadow-[0_8px_30px_rgba(33,140,161,0.12)] hover:scale-[1.02]"
                            style={{
                                background: '#f0f9fa',
                                border: '1.5px solid #218CA1',
                                padding: '16px',
                                opacity: 0,
                                transform: 'translateY(30px)',
                                cursor: 'none', // Always 'none' but we only show the custom cursor when isHovered is true
                                transition: 'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease, scale 0.3s ease',
                            }}
                        >
                            {/* Card image */}
                            <div className="w-full overflow-hidden rounded-[6px]"
                                style={{ aspectRatio: '11 / 7' }}>
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                                />
                            </div>

                            {/* Card content */}
                            <div style={{ marginTop: '14px' }}>
                                {/* Title – 1 line truncated */}
                                <h5
                                    className="font-medium text-[17px] md:text-[18px] leading-snug"
                                    style={{
                                        color: '#000',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {title}
                                </h5>

                                {/* Description – 2 lines clamped */}
                                <p
                                    className="mt-2 text-[14px] md:text-[15px] leading-[1.6] font-normal"
                                    style={{
                                        color: '#666',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                    }}
                                >
                                    {description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* ── Custom "Read" Cursor ── */}
            <div
                className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center
                   rounded-full bg-black text-white text-[14px] font-semibold"
                style={{
                    width: '64px',
                    height: '64px',
                    left: `${cursorPos.x}px`,
                    top: `${cursorPos.y}px`,
                    transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0})`,
                    opacity: isHovered ? 1 : 0,
                    transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.2s ease-out',
                    visibility: isHovered ? 'visible' : 'hidden',
                    background: '#DEDB00',
                    color: '#218CA1',
                }}
            >
                Read
            </div>
        </section>
    );
};

export default Blogs;
