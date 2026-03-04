import React, { useRef, useEffect } from 'react';

// Shimmer raindrop streaks config
const shimmers = [
    { left: '5%', width: 3, height: 700, duration: 6.5, delay: -1.2, opacity: 0.15 },
    { left: '12%', width: 2, height: 500, duration: 8.2, delay: -4.8, opacity: 0.10 },
    { left: '20%', width: 4, height: 780, duration: 5.6, delay: -2.5, opacity: 0.17 },
    { left: '29%', width: 2, height: 560, duration: 9.4, delay: -7.1, opacity: 0.11 },
    { left: '38%', width: 3, height: 640, duration: 7.0, delay: -3.3, opacity: 0.14 },
    { left: '47%', width: 2, height: 500, duration: 6.2, delay: -5.9, opacity: 0.12 },
    { left: '56%', width: 4, height: 720, duration: 8.8, delay: -1.7, opacity: 0.16 },
    { left: '65%', width: 2, height: 600, duration: 5.8, delay: -6.4, opacity: 0.10 },
    { left: '74%', width: 3, height: 680, duration: 7.5, delay: -0.9, opacity: 0.13 },
    { left: '83%', width: 2, height: 520, duration: 9.0, delay: -3.8, opacity: 0.11 },
    { left: '91%', width: 3, height: 620, duration: 6.8, delay: -5.2, opacity: 0.14 },
];

const cardData = [
    {
        title: 'Security',
        description: 'Lack of centralized access control, weak authentication, and unmanaged endpoints leave APIs vulnerable to threats and breaches.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4 5.5V11C4 15.42 7.56 19.58 12 21C16.44 19.58 20 15.42 20 11V5.5L12 2Z" stroke="#218CA1" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M9 12L11 14L15 10" stroke="#218CA1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Scalable',
        description: 'Without a scalable framework, growing API usage leads to bottlenecks, degraded performance, and infrastructure overhead.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="14" height="17" rx="2" stroke="#218CA1" strokeWidth="1.6" />
                <path d="M14 4V8H18" stroke="#218CA1" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M14.5 13.5L16.5 11.5L18.5 13.5" stroke="#218CA1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.5 11.5V17.5" stroke="#218CA1" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'Governance',
        description: 'Fragmented API ownership causes inconsistent policies, limited visibility, and regulatory compliance risks across teams.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10H21M3 10L12 4L21 10M3 10V19H21V10" stroke="#218CA1" strokeWidth="1.6" strokeLinejoin="round" />
                <rect x="9" y="14" width="6" height="5" stroke="#218CA1" strokeWidth="1.4" />
            </svg>
        ),
    },
    {
        title: 'Life cycle Management',
        description: 'Without end-to-end lifecycle visibility, APIs are hard to version, deprecate, or monitor leading to shadow APIs and chaos.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12C4 7.58 7.58 4 12 4C14.76 4 17.21 5.38 18.72 7.5" stroke="#218CA1" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M20 12C20 16.42 16.42 20 12 20C9.24 20 6.79 18.62 5.28 16.5" stroke="#218CA1" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M17 5L19 7.5L21 5" stroke="#218CA1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 19L5 16.5L7 19" stroke="#218CA1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

const Risks = () => {
    const cardsRef = useRef(null);

    useEffect(() => {
        const cardEls = cardsRef.current?.querySelectorAll('.risk-card');
        if (!cardEls) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        cardEls.forEach((card, i) => {
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0px)';
                            }, i * 120);
                        });
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.15 }
        );

        if (cardsRef.current) observer.observe(cardsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{`
                @keyframes raindrop {
                    0%   { transform: translateY(-900px); opacity: 0; }
                    30%  { opacity: 1; }
                    80%  { opacity: 1; }
                    100% { transform: translateY(130vh); opacity: 0; }
                }
            `}</style>

            <section className="w-full font-['Poppins'] bg-white flex flex-col items-center pt-20 pb-0 md:pt-28 px-5 md:px-10 lg:px-20">

                {/* Pill label — no shimmer behind this */}
                <span className="inline-block text-[#218CA1] text-[11px] md:text-[13px] border border-[#218CA1] rounded-full px-3 py-[5px] mb-5 md:mb-6 tracking-wide">
                    Landscape
                </span>

                {/* Shimmer wrapper — starts from heading */}
                <div className="relative w-full flex flex-col items-center pb-16 md:pb-24 overflow-hidden">

                    {/* Raindrop shimmer streaks */}
                    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                        {shimmers.map((s, i) => (
                            <div
                                key={i}
                                style={{
                                    position: 'absolute',
                                    left: s.left,
                                    top: 0,
                                    width: `${s.width}px`,
                                    height: `${s.height}px`,
                                    borderRadius: '999px',
                                    background: `linear-gradient(to bottom, transparent 0%, rgba(33,140,161,${s.opacity * 0.2}) 20%, rgba(33,140,161,${s.opacity}) 55%, rgba(33,140,161,${s.opacity}) 70%, transparent 100%)`,
                                    animation: `raindrop ${s.duration}s linear ${s.delay}s infinite`,
                                    willChange: 'transform, opacity',
                                }}
                            />
                        ))}
                    </div>

                    {/* Heading */}
                    <h2 className="relative text-center font-medium text-[20px] md:text-[40px] leading-[1.25] tracking-[-0.02em] text-[#2D1206] max-w-[280px] md:max-w-3xl">
                        Risks of Disjointed API Infrastructure
                    </h2>

                    {/* Subtitle */}
                    <p className="relative text-center text-[#4C4C4C] mt-4 md:mt-5 text-[20px] md:text-[20px] leading-[1.6] max-w-[300px] md:max-w-lg">
                        APIs power modern digital ecosystems,
                        <br className="hidden md:block" />
                        but managing them remains a challenge.
                    </p>

                    {/* Cards grid */}
                    <div
                        ref={cardsRef}
                        className="relative w-full max-w-5xl mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-4"
                    >
                        {cardData.map((card, i) => (
                            <div
                                key={card.title}
                                className="risk-card flex flex-col gap-4 p-4 rounded-2xl bg-white md:w-[242px] md:h-[332px]"
                                style={{
                                    border: '1px solid #DEDB00',
                                    boxShadow: '0 0 0 1px rgba(222,219,0,0.15)',
                                    opacity: 0,
                                    transform: 'translateY(32px)',
                                    transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1)`,
                                }}
                            >
                                {/* Icon */}
                                <div className="w-10 h-10 flex items-center justify-center rounded-lg">
                                    {card.icon}
                                </div>

                                {/* Title */}
                                <h3 className="font-medium text-[16px] md:text-[24px] text-[#2D1206] leading-tight">
                                    {card.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[#5A5A5A] text-[12px] md:text-[16px]">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Risks;
