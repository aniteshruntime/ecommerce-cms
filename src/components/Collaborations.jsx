'use client';
import React, { useRef, useEffect } from 'react';

/* ─────────────────────────────────────────────
   PARTNER LOGO SVGs
───────────────────────────────────────────── */

const LogoMSME = () => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="60" cy="36" r="14" fill="#1a237e" opacity="0.15" />
        <circle cx="60" cy="36" r="9" fill="#1a237e" opacity="0.3" />
        <path d="M56 26 L60 18 L64 26" stroke="#1a237e" strokeWidth="1.5" fill="none" />
        <rect x="53" y="42" width="14" height="2.5" rx="1" fill="#1a237e" />
        <text x="60" y="68" fontSize="16" fontWeight="800" fill="#1a237e" fontFamily="Arial, sans-serif" textAnchor="middle">MSME</text>
        <text x="60" y="84" fontSize="6.5" fill="#333" fontFamily="Arial, sans-serif" textAnchor="middle">Ministry of MSME, Govt. of India</text>
        <rect x="25" y="92" width="24" height="3" rx="1" fill="#FF9933" />
        <rect x="49" y="92" width="24" height="3" rx="1" fill="#138808" />
        <rect x="73" y="92" width="24" height="3" rx="1" fill="#000080" />
    </svg>
);

const LogoEnqura = () => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <text x="60" y="66" fontSize="26" fontWeight="700" fill="#1a1a1a" fontFamily="Georgia, serif"
            letterSpacing="0.5" textAnchor="middle">Enqura</text>
        <rect x="22" y="76" width="76" height="2.5" rx="1" fill="#2563eb" opacity="0.4" />
    </svg>
);

const LogoGroverConsult = () => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="12" y="22" width="96" height="76" rx="14" fill="#0d9488" />
        <text x="42" y="54" fontSize="15" fontWeight="800" fill="white" fontFamily="Arial, sans-serif">GROVER</text>
        <text x="38" y="74" fontSize="13" fontWeight="600" fill="white" fontFamily="Arial, sans-serif">CONSULT</text>
        <path d="M84 52 L94 60 L84 68" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M94 60 L102 52 L102 68 Z" fill="white" opacity="0.7" />
    </svg>
);

const LogoStartupIndia = () => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <text x="14" y="52" fontSize="11" fontWeight="700" fill="#333" fontFamily="Arial, sans-serif">#</text>
        <text x="24" y="52" fontSize="15" fontWeight="700" fill="#1a1a1a" fontFamily="Arial, sans-serif">startup</text>
        <text x="80" y="52" fontSize="15" fontWeight="700" fill="#FF6F00" fontFamily="Arial, sans-serif">india</text>
        <path d="M14 62 Q40 72 60 62 Q80 52 106 62" stroke="#FF6F00" strokeWidth="1.5" fill="none" opacity="0.5" />
        <text x="14" y="80" fontSize="6" fill="#666" fontFamily="Arial, sans-serif">STAND UP INDIA, START UP INDIA</text>
    </svg>
);

const LogoStartupKarnataka = () => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M46 28 Q38 40 34 50 Q32 54 36 56 Q42 56 48 50 L50 46" stroke="#e53935" strokeWidth="2.2" fill="none" />
        <path d="M50 46 Q56 34 64 30 Q68 28 70 32 Q70 38 64 44 L60 48" stroke="#1a237e" strokeWidth="2.2" fill="none" />
        <circle cx="40" cy="32" r="2.5" fill="#e53935" />
        <text x="17" y="76" fontSize="9" fontWeight="700" fill="#1a237e" fontFamily="Arial, sans-serif" letterSpacing="1">STARTUP</text>
        <text x="68" y="76" fontSize="9" fontWeight="700" fill="#e53935" fontFamily="Arial, sans-serif" letterSpacing="0.8">KARNATAKA</text>
        <text x="22" y="90" fontSize="5.5" fill="#666" fontFamily="Arial, sans-serif">Elevate · Empower · Excel</text>
    </svg>
);

const LogoGeM = () => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <text x="60" y="58" fontSize="30" fontWeight="800" fill="#333" fontFamily="Arial, sans-serif" textAnchor="middle">
            <tspan fill="#2e7d32">G</tspan>
            <tspan fill="#333">e</tspan>
            <tspan fill="#f57c00">M</tspan>
        </text>
        <text x="88" y="35" fontSize="10" fill="#f57c00" fontFamily="Arial, sans-serif">®</text>
        <text x="60" y="78" fontSize="8" fill="#555" fontFamily="Arial, sans-serif" textAnchor="middle">e Marketplace</text>
        <rect x="25" y="86" width="70" height="2" rx="1" fill="#2e7d32" opacity="0.3" />
    </svg>
);

const LogoMSME2 = () => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="60" cy="36" r="13" fill="#1a237e" opacity="0.12" />
        <circle cx="60" cy="36" r="8" fill="#1a237e" opacity="0.25" />
        <path d="M57 27 L60 20 L63 27" stroke="#1a237e" strokeWidth="1.2" fill="none" />
        <rect x="55" y="42" width="10" height="2" rx="1" fill="#1a237e" />
        <text x="60" y="68" fontSize="14" fontWeight="800" fill="#1a237e" fontFamily="Arial, sans-serif" textAnchor="middle">MSME</text>
        <text x="60" y="82" fontSize="5.5" fill="#333" fontFamily="Arial, sans-serif" textAnchor="middle">Ministry of MSME, Govt. of India</text>
        <rect x="25" y="90" width="24" height="3" rx="1" fill="#FF9933" />
        <rect x="49" y="90" width="24" height="3" rx="1" fill="white" stroke="#ccc" strokeWidth="0.3" />
        <rect x="73" y="90" width="24" height="3" rx="1" fill="#138808" />
    </svg>
);

const LOGOS = [
    { id: 'msme-1', Logo: LogoMSME },
    { id: 'enqura', Logo: LogoEnqura },
    { id: 'grover', Logo: LogoGroverConsult },
    { id: 'startupindia', Logo: LogoStartupIndia },
    { id: 'startupkarnataka', Logo: LogoStartupKarnataka },
    { id: 'gem', Logo: LogoGeM },
    { id: 'msme-2', Logo: LogoMSME2 },
];

/* ─────────────────────────────────────────────
   BLUE STRIPED BACKGROUND
───────────────────────────────────────────── */
const BlueStripedBg = () => {
    const total = 24;
    return (
        <div
            className="absolute inset-0 z-0 flex flex-row"
            aria-hidden="true"
            style={{ backgroundColor: '#218CA1' }}
        >
            {Array.from({ length: total }).map((_, i) => (
                <div
                    key={i}
                    style={{
                        flex: '1 0 0px',
                        backgroundImage: 'linear-gradient(270deg, rgba(242, 240, 238, 0.2) 0%, rgba(242, 240, 238, 0) 100%)',
                    }}
                />
            ))}
            <div
                className="absolute inset-x-0 top-0 pointer-events-none"
                style={{
                    height: '80px',
                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(142, 142, 142, 0.2) 40%, transparent 100%)',
                }}
            />
            <div
                className="absolute inset-x-0 bottom-0 pointer-events-none"
                style={{
                    height: '120px',
                    background: 'linear-gradient(to top, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)',
                }}
            />
        </div>
    );
};

/* ─────────────────────────────────────────────
   MARQUEE KEYFRAMES
───────────────────────────────────────────── */
const marqueeStyleId = 'collaborations-marquee-style';

const injectMarqueeStyles = () => {
    if (typeof document === 'undefined') return;
    if (document.getElementById(marqueeStyleId)) return;
    const style = document.createElement('style');
    style.id = marqueeStyleId;
    style.textContent = `
        @keyframes marquee-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee-scroll 35s linear infinite;
        }
        .marquee-track:hover {
            animation-play-state: paused;
        }
    `;
    document.head.appendChild(style);
};

/* ─────────────────────────────────────────────
   CONCENTRIC CIRCLES — matches the screenshot exactly
   Origin point: bottom-right corner of the right panel
───────────────────────────────────────────── */
const ConcentricCircles = () => {
    // Sizes in px — smallest to largest, centered at bottom-right
    const radii = [160, 260, 360, 460, 560, 660];
    const accent = '#F26522';

    return (
        <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ borderRadius: 'inherit' }}
            aria-hidden="true"
        >
            {/* Warm base fill — gives the peachy blush tone */}
            <div
                style={{
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    width: `${radii[radii.length - 1] * 2}px`,
                    height: `${radii[radii.length - 1] * 2}px`,
                    borderRadius: '50%',
                    // translate so only top-left quadrant arc is visible
                    transform: 'translate(50%, 50%)',
                    background: `radial-gradient(circle at center, rgba(242,101,34,0.22) 0%, rgba(242,101,34,0.08) 50%, transparent 70%)`,
                }}
            />

            {/* Rings — stroke only, centered at bottom-right corner */}
            {radii.map((r, i) => (
                <div
                    key={r}
                    style={{
                        position: 'absolute',
                        right: 0,
                        bottom: 0,
                        width: `${r * 2}px`,
                        height: `${r * 2}px`,
                        borderRadius: '50%',
                        // shift so circle center sits at bottom-right corner
                        transform: 'translate(50%, 50%)',
                        border: i === radii.length - 1
                            ? `1px dashed rgba(242,101,34,0.18)`
                            : `1.5px solid rgba(242,101,34,${0.38 - i * 0.05})`,
                        boxSizing: 'border-box',
                        pointerEvents: 'none',
                    }}
                />
            ))}
        </div>
    );
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const Collaborations = () => {
    const ctaRef = useRef(null);

    useEffect(() => {
        injectMarqueeStyles();
    }, []);

    useEffect(() => {
        const el = ctaRef.current;
        if (!el) return;

        const io = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                io.unobserve(el);
            },
            { threshold: 0.15 }
        );

        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section className="relative w-full font-['Poppins'] overflow-hidden">

            {/* Blue striped background */}
            <BlueStripedBg />

            {/* ── Collaborations & Accreditations ── */}
            <div className="relative z-10 flex flex-col items-center px-4"
                style={{ paddingTop: '60px', paddingBottom: '40px' }}>

                <div className="mb-10 md:mb-14">
                    <span
                        className="inline-block text-white text-[13px] md:text-[14px] font-medium
                           rounded-full px-[28px] py-[9px] tracking-wide"
                        style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.35)',
                            backdropFilter: 'blur(6px)',
                            WebkitBackdropFilter: 'blur(6px)',
                        }}
                    >
                        Collaborations and Accreditations
                    </span>
                </div>

                {/* Marquee */}
                <div className="w-full max-w-[1440px] overflow-hidden"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
                    }}>
                    <div className="marquee-track">
                        {[...LOGOS, ...LOGOS].map(({ id, Logo }, i) => (
                            <div key={`${id}-${i}`} className="flex-shrink-0 mx-3 md:mx-5">
                                <div
                                    className="bg-white flex items-center justify-center"
                                    style={{
                                        width: '109px',
                                        height: '102px',
                                        borderRadius: '8px',
                                        boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                                        padding: '12px',
                                    }}
                                >
                                    <Logo />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── CTA Card ── */}
            <div className="relative z-10 px-4 md:px-6 lg:px-8 pb-20 md:pb-28"
                style={{ marginTop: '20px' }}>
                <div
                    ref={ctaRef}
                    className="w-full max-w-[1240px] mx-auto overflow-hidden rounded-[20px] md:rounded-[36px]"
                    style={{
                        background: '#ffffff',
                        boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
                        opacity: 0,
                        transform: 'translateY(36px)',
                        transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)',
                    }}
                >
                    <div className="flex flex-col md:flex-row items-stretch h-full">

                        <img
                            src="/collabbanner.avif"
                            alt="Collaborations Banner"
                            className="w-full h-full min-h-[160px] sm:min-h-[220px] md:min-h-[320px] object-cover rounded-[20px] md:rounded-[36px] block"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collaborations;