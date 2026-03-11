'use client';
import React, { useRef, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

/* ─────────────────────────────────────────────
   SVG ILLUSTRATIONS
───────────────────────────────────────────── */

/** Card 1 – API Lifecycle Management
 *  Shows: laptop open, coloured vertical bar-chart pillars rising from it,
 *  a dashed curved arrow over the top, a small paper-plane icon.
 */
const IllustrationLifecycle = () => (
    <svg viewBox="0 0 520 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* ── Laptop body ── */}
        <rect x="10" y="60" width="195" height="140" rx="10" fill="#1e293b" />
        {/* screen bezel */}
        <rect x="18" y="68" width="179" height="115" rx="6" fill="#0f172a" />
        {/* traffic-light dots */}
        <circle cx="32" cy="76" r="4" fill="#ef4444" />
        <circle cx="46" cy="76" r="4" fill="#f59e0b" />
        <circle cx="60" cy="76" r="4" fill="#22c55e" />
        {/* screen content – mini bar chart */}
        <rect x="28" y="92" width="12" height="55" rx="2" fill="#218CA1" opacity="0.35" />
        <rect x="46" y="108" width="12" height="39" rx="2" fill="#218CA1" opacity="0.55" />
        <rect x="64" y="87" width="12" height="60" rx="2" fill="#218CA1" opacity="0.75" />
        <rect x="82" y="98" width="12" height="49" rx="2" fill="#218CA1" opacity="0.95" />
        <rect x="100" y="80" width="12" height="67" rx="2" fill="#3949AB" opacity="0.7" />
        <rect x="118" y="92" width="12" height="55" rx="2" fill="#218CA1" opacity="0.5" />
        {/* baseline */}
        <line x1="28" y1="150" x2="175" y2="150" stroke="#334155" strokeWidth="1.5" />
        {/* small text rows */}
        <rect x="28" y="157" width="80" height="4" rx="2" fill="#334155" />
        <rect x="28" y="165" width="60" height="4" rx="2" fill="#334155" />
        {/* laptop base / hinge */}
        <path d="M10 200 L0 220 L215 220 L205 200 Z" fill="#94a3b8" opacity="0.4" />
        <rect x="0" y="218" width="215" height="5" rx="2.5" fill="#64748b" opacity="0.6" />

        {/* ── Coloured pillars (right side, rising from a platform) ── */}
        {/* platform */}
        <rect x="220" y="195" width="290" height="6" rx="3" fill="#3949AB" opacity="0.8" />
        {/* pillars */}
        <rect x="234" y="135" width="32" height="60" rx="4" fill="#218CA1" opacity="0.95" />
        <rect x="276" y="115" width="32" height="80" rx="4" fill="#DEDB00" opacity="0.9" />
        <rect x="318" y="95" width="32" height="100" rx="4" fill="#1e293b" opacity="0.9" />
        <rect x="360" y="130" width="32" height="65" rx="4" fill="#218CA1" opacity="0.7" />
        <rect x="402" y="110" width="32" height="85" rx="4" fill="#7c3aed" opacity="0.65" />
        <rect x="444" y="145" width="32" height="50" rx="4" fill="#218CA1" opacity="0.5" />
        {/* pillar details */}
        <rect x="240" y="142" width="20" height="4" rx="2" fill="white" opacity="0.5" />
        <rect x="240" y="152" width="14" height="4" rx="2" fill="white" opacity="0.3" />
        <rect x="282" y="122" width="20" height="4" rx="2" fill="white" opacity="0.5" />
        <rect x="324" y="102" width="20" height="4" rx="2" fill="white" opacity="0.5" />

        {/* ── Connection lines from laptop to pillars ── */}
        <path d="M205 130 Q218 130 234 145" stroke="#218CA1" strokeWidth="1.8" strokeDasharray="5 4" opacity="0.55" fill="none" />
        <path d="M205 155 Q218 165 234 175" stroke="#218CA1" strokeWidth="1.8" strokeDasharray="5 4" opacity="0.4" fill="none" />

        {/* ── Dashed curved arc (top) ── */}
        <path d="M240 70 Q360 20 480 65" stroke="#218CA1" strokeWidth="2" strokeDasharray="8 6" opacity="0.45" fill="none" />

        {/* ── Paper-plane icon ── */}
        <path d="M455 50 L490 38 L478 72 L468 60 Z" fill="#218CA1" opacity="0.85" />
        <path d="M468 60 L478 72" stroke="#218CA1" strokeWidth="1.5" opacity="0.6" fill="none" />
        <path d="M455 50 L468 60" stroke="white" strokeWidth="1.2" opacity="0.7" fill="none" />

        {/* ── Pie / donut in laptop corner ── */}
        <circle cx="162" cy="108" r="18" fill="none" stroke="#218CA1" strokeWidth="9"
            strokeDasharray="25 88" strokeDashoffset="0" opacity="0.5" />
        <circle cx="162" cy="108" r="18" fill="none" stroke="#3949AB" strokeWidth="9"
            strokeDasharray="18 95" strokeDashoffset="-25" opacity="0.45" />
        <circle cx="162" cy="108" r="18" fill="none" stroke="#f59e0b" strokeWidth="9"
            strokeDasharray="10 103" strokeDashoffset="-43" opacity="0.4" />
    </svg>
);

/** Card 2 – Cloud Native
 *  Shows: bold orange cloud shape (layered), dashed orbit rings, phone silhouette on the right edge.
 */
const IllustrationCloud = () => (
    <svg viewBox="0 0 480 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* ── Dashed orbit arcs ── */}
        <ellipse cx="230" cy="130" rx="185" ry="115" stroke="#218CA1" strokeWidth="2"
            strokeDasharray="10 8" opacity="0.25" fill="none" />
        <ellipse cx="230" cy="130" rx="140" ry="88" stroke="#218CA1" strokeWidth="1.5"
            strokeDasharray="7 6" opacity="0.18" fill="none" />

        {/* ── Cloud layers (orange → white) ── */}
        {/* outermost glow */}
        <path d="M118 170 Q82 170 68 148 Q54 126 72 108 Q72 78 104 72
             Q118 52 144 58 Q162 40 188 46 Q214 28 238 36
             Q266 22 290 42 Q322 34 338 58 Q366 50 378 76
             Q398 88 386 112 Q402 136 378 152
             Q376 172 350 172 Z"
            fill="#218CA1" opacity="0.08" />
        {/* mid cloud */}
        <path d="M128 163 Q96 163 84 144 Q72 126 87 110 Q88 84 116 79
             Q128 62 152 67 Q168 51 191 56 Q215 40 237 48
             Q261 34 282 50 Q308 44 320 65 Q342 58 352 80
             Q368 90 358 112 Q372 132 352 146 Q350 163 328 164 Z"
            fill="#218CA1" opacity="0.18" />
        {/* inner cloud */}
        <path d="M140 156 Q112 156 102 140 Q92 124 104 112 Q105 90 128 86
             Q140 72 160 76 Q174 62 194 67 Q216 53 235 60
             Q256 48 272 62 Q294 57 302 76 Q316 85 308 104
             Q320 120 302 133 Q300 148 282 150 Z"
            fill="#218CA1" opacity="0.32" />
        {/* main white cloud */}
        <path d="M154 148 Q132 148 124 136 Q116 124 126 114 Q127 96 146 93
             Q156 82 172 85 Q184 73 200 77 Q218 66 232 73
             Q250 63 264 75 Q282 71 288 87 Q298 94 292 110
             Q302 124 286 133 Q284 145 268 146 Z"
            fill="white" opacity="0.96" />

        {/* ── Upload arrow inside cloud ── */}
        <path d="M202 104 L210 94 L218 104" stroke="#218CA1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="210" y1="94" x2="210" y2="122" stroke="#218CA1" strokeWidth="2.5" strokeLinecap="round" />

        {/* ── Small node circles ── */}
        <circle cx="72" cy="82" r="16" fill="white" opacity="0.95" />
        <rect x="62" y="75" width="20" height="14" rx="3" fill="#3949AB" opacity="0.55" />
        <circle cx="72" cy="82" r="16" fill="none" stroke="#3949AB" strokeWidth="1.5" opacity="0.4" />

        <circle cx="380" cy="88" r="16" fill="white" opacity="0.95" />
        <rect x="370" y="81" width="20" height="14" rx="3" fill="#3949AB" opacity="0.55" />
        <circle cx="380" cy="88" r="16" fill="none" stroke="#3949AB" strokeWidth="1.5" opacity="0.4" />

        <circle cx="100" cy="205" r="13" fill="white" opacity="0.9" />
        <rect x="92" y="199" width="16" height="12" rx="2" fill="#218CA1" opacity="0.5" />

        {/* ── Dashes from nodes to cloud ── */}
        <path d="M86 88  Q110 100 120 118" stroke="#218CA1" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.35" fill="none" />
        <path d="M365 95 Q340 108 310 120" stroke="#218CA1" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.35" fill="none" />
        <path d="M108 198 Q126 178 134 160" stroke="#218CA1" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.3" fill="none" />

        {/* ── Phone silhouette (right edge) ── */}
        <rect x="434" y="70" width="38" height="68" rx="7" fill="#1e293b" opacity="0.85" />
        <rect x="438" y="76" width="30" height="48" rx="4" fill="#0f172a" />
        <rect x="448" y="122" width="10" height="4" rx="2" fill="#334155" />
        <rect x="440" y="80" width="26" height="4" rx="2" fill="#218CA1" opacity="0.5" />
        <rect x="440" y="88" width="20" height="3" rx="1.5" fill="#334155" />
        <rect x="440" y="95" width="22" height="3" rx="1.5" fill="#334155" />
        <rect x="440" y="102" width="18" height="3" rx="1.5" fill="#334155" />
    </svg>
);

/** Card 3 – Built for scale & performance  (small card) */
const IllustrationScale = () => (
    <svg viewBox="0 0 140 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* bars */}
        <rect x="12" y="82" width="18" height="36" rx="3" fill="#218CA1" opacity="0.25" />
        <rect x="36" y="64" width="18" height="54" rx="3" fill="#218CA1" opacity="0.45" />
        <rect x="60" y="44" width="18" height="74" rx="3" fill="#218CA1" opacity="0.7" />
        <rect x="84" y="28" width="18" height="90" rx="3" fill="#218CA1" opacity="0.95" />
        <rect x="108" y="52" width="18" height="66" rx="3" fill="#3949AB" opacity="0.55" />
        {/* trend line */}
        <polyline points="21,92 45,72 69,52 93,36" stroke="#1e293b" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* arrow head */}
        <path d="M86 33 L95 30 L92 40" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* baseline */}
        <line x1="8" y1="122" x2="132" y2="122" stroke="#94a3b8" strokeWidth="1.5" opacity="0.5" />
    </svg>
);

/** Card 4 – Secure  (small card) */
const IllustrationSecure = () => (
    <svg viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* shield layers */}
        <path d="M65 10 L18 30 L18 65 Q18 98 65 115 Q112 98 112 65 L112 30 Z"
            fill="#218CA1" opacity="0.08" />
        <path d="M65 18 L26 35 L26 65 Q26 92 65 107 Q104 92 104 65 L104 35 Z"
            fill="#218CA1" opacity="0.18" />
        <path d="M65 28 L36 42 L36 65 Q36 87 65 100 Q94 87 94 65 L94 42 Z"
            fill="#218CA1" opacity="0.9" />
        {/* checkmark */}
        <path d="M50 64 L60 74 L82 52" stroke="white" strokeWidth="4.5"
            strokeLinecap="round" strokeLinejoin="round" />
        {/* lock shackle on shield */}
        <rect x="54" y="38" width="22" height="16" rx="4" fill="white" opacity="0.25" />
        <path d="M59 38 Q59 29 65 29 Q71 29 71 38" stroke="white" strokeWidth="2.2"
            fill="none" strokeLinecap="round" />
        {/* floating key card */}
        <rect x="4" y="85" width="50" height="28" rx="7" fill="white"
            style={{ filter: 'drop-shadow(0 3px 8px rgba(0,0,0,0.12))' }} />
        <circle cx="18" cy="99" r="6" fill="#218CA1" opacity="0.3" />
        <circle cx="18" cy="99" r="3.5" fill="#218CA1" />
        <line x1="21" y1="99" x2="36" y2="99" stroke="#218CA1" strokeWidth="2" strokeLinecap="round" />
        <line x1="33" y1="99" x2="33" y2="104" stroke="#218CA1" strokeWidth="2" strokeLinecap="round" />
        <line x1="29" y1="99" x2="29" y2="103" stroke="#218CA1" strokeWidth="2" strokeLinecap="round" />
        {/* RBAC tag */}
        <rect x="76" y="88" width="50" height="22" rx="11" fill="#218CA1" opacity="0.12" />
        <text x="85" y="103" fontSize="9" fill="#218CA1" fontWeight="600">RBAC</text>
    </svg>
);

/** Card 5 – Developer Centric  (small card) */
const IllustrationDev = () => (
    <svg viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* code editor window */}
        <rect x="8" y="12" width="114" height="80" rx="9" fill="#1e293b" />
        <rect x="8" y="12" width="114" height="20" rx="9" fill="#0f172a" />
        {/* traffic dots */}
        <circle cx="22" cy="22" r="4" fill="#ef4444" />
        <circle cx="34" cy="22" r="4" fill="#f59e0b" />
        <circle cx="46" cy="22" r="4" fill="#22c55e" />
        {/* code lines */}
        <rect x="18" y="40" width="50" height="5" rx="2.5" fill="#218CA1" opacity="0.85" />
        <rect x="18" y="52" width="70" height="4" rx="2" fill="#334155" />
        <rect x="28" y="61" width="58" height="4" rx="2" fill="#334155" />
        <rect x="28" y="70" width="45" height="4" rx="2" fill="#334155" />
        <rect x="18" y="79" width="60" height="4" rx="2" fill="#334155" />
        {/* bracket watermark */}
        <text x="82" y="75" fontSize="32" fill="#218CA1" opacity="0.12" fontWeight="bold">{`</>`}</text>
        {/* person */}
        <circle cx="65" cy="108" r="10" fill="#218CA1" opacity="0.2" />
        <circle cx="65" cy="105" r="6" fill="#218CA1" opacity="0.65" />
        <path d="M52 120 Q65 112 78 120" stroke="#218CA1" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
);

export const StripedBg = () => {
    // Replicate the yappes.com background exactly:
    // Base solid background with 24 stripes using a linear-gradient overlay
    const total = 24;
    return (
        <div
            className="absolute inset-0 z-0 flex flex-row"
            aria-hidden="true"
            style={{ backgroundColor: '#BAB70B' }}
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
            {/* White gradient fade at the very bottom */}
            <div
                className="absolute inset-x-0 bottom-0 pointer-events-none"
                style={{
                    height: '200px',
                    background: 'linear-gradient(to top, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)',
                }}
            />
        </div>
    );
};

/* ─────────────────────────────────────────────
   CARD DATA
───────────────────────────────────────────── */
const LARGE_CARDS = [
    {
        id: 'lifecycle',
        title: 'API Lifecycle Management',
        description:
            'Yappes supports the full API lifecycle, giving enterprises one platform to start, scale, and manage every stage of their API journey.',
        // Lottie animation — replaces the SVG illustration for this card
        lottieUrl: 'https://lottie.host/5c4f72d9-9a96-444e-b4d1-b6437989d5d1/QsUrKeZaFc.lottie',
        Illustration: IllustrationLifecycle, // fallback
    },
    {
        id: 'cloud',
        title: 'Cloud Native',
        description:
            'Built on a cloud‑native stack and fully cloud‑agnostic, it aligns seamlessly with diverse enterprise cloud strategies.',
        lottieUrl: 'https://lottie.host/a4bc684c-bf70-41e8-b72c-eba61db94c88/bJbzYF3JU5.lottie',
        Illustration: IllustrationCloud, // fallback
    },
];

const SMALL_CARDS = [
    {
        id: 'scale',
        title: 'Built for scale & performance',
        description:
            'Tested for high API call volumes, its architecture is engineered for low latency, high throughput, and reliable performance.',
        Illustration: IllustrationScale,
    },
    {
        id: 'secure',
        title: 'Secure',
        description:
            'Zero Trust multi‑layered security protects APIs with keys, authN/Z, HMAC, key refresh, rate limits, quotas, IP control, RBAC, and audit trails.',
        Illustration: IllustrationSecure,
    },
    {
        id: 'dev',
        title: 'Developer Centric',
        description:
            'This developer‑centric platform streamlines the entire API lifecycle, from design to publishing and scaling, for a superior Developer Experience (DX).',
        Illustration: IllustrationDev,
    },
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const Benefits = () => {
    const cardRefs = useRef([]);

    /* Staggered slide-up reveal on scroll */
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
                    }, idx * 110);
                    io.unobserve(entry.target);
                });
            },
            { threshold: 0.1 }
        );

        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    const cardBase = {
        opacity: 0,
        transform: 'translateY(36px)',
        transition: 'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)',
    };

    return (
        <section className="relative w-full overflow-hidden font-['Poppins']">

            {/* ── striped orange background ── */}
            <StripedBg />

            {/* ── content ── */}
            <div className="relative z-10 flex flex-col items-center px-4 md:px-10 lg:px-16 pt-14 md:pt-24 pb-0">

                {/* ── "Benefit" pill ── */}
                <div className="mb-7 md:mb-10">
                    <span
                        className="inline-block bg-white text-[#218CA1] text-[13px] md:text-[14px] font-semibold
                       rounded-full px-5.5 py-1.5 tracking-wide"
                    >
                        Benefit
                    </span>
                </div>

                {/* ── heading ── */}
                <h2
                    className="text-center font-bold text-white leading-[1.25] tracking-tight
                     text-[34px] sm:text-[40px] md:text-[46px]
                     max-w-[320px] sm:max-w-[560px] md:max-w-[760px]"
                >
                    Accelerate Innovation with<br className="hidden md:block" /> Enterprise Grade API Management
                </h2>

                {/* ── subtitle ── */}
                <p
                    className="text-center text-white mt-4 md:mt-6
                     text-[15px] md:text-[17px] leading-[1.65] font-light
                     max-w-[300px] sm:max-w-[480px] md:max-w-[620px]"
                >
                    A powerful backend with a developer-first approach offering full lifecycle
                    control, seamless integrations, and modern cloud-native architecture.
                </p>

                {/* ── card grid ── */}
                <div className="w-full max-w-[1140px] mt-12 md:mt-20">

                    {/* top row – 2 large cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 mb-5 md:mb-7">
                        {LARGE_CARDS.map(({ id, title, description, Illustration, lottieUrl }, i) => (
                            <div
                                key={id}
                                ref={(el) => (cardRefs.current[i] = el)}
                                style={cardBase}
                                className="bg-white rounded-[24px] md:rounded-[32px] flex flex-col overflow-hidden
                           shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                            >
                                {/* text block */}
                                <div className="p-8 md:p-10 pb-4 md:pb-6">
                                    <h3 className="font-semibold text-[#1a1a1a] text-[19px] md:text-[24px] leading-snug mb-3">
                                        {title}
                                    </h3>
                                    <p className="text-[#555] text-[13.5px] md:text-[15px] leading-[1.7] max-w-[420px]">
                                        {description}
                                    </p>
                                </div>
                                {/* illustration block — Lottie if available, else SVG */}
                                <div className="flex-1 flex items-end justify-center px-4 md:px-8 pb-0" style={{ minHeight: 240 }}>
                                    {lottieUrl ? (
                                        <div className="w-full" style={{ height: 240 }}>
                                            <DotLottieReact
                                                src={lottieUrl}
                                                loop
                                                autoplay
                                                style={{ width: '100%', height: '100%' }}
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full" style={{ height: 240 }}>
                                            <Illustration />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* bottom row – 3 small cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7 pb-16 md:pb-32">
                        {SMALL_CARDS.map(({ id, title, description, Illustration }, i) => (
                            <div
                                key={id}
                                ref={(el) => (cardRefs.current[i + LARGE_CARDS.length] = el)}
                                style={cardBase}
                                className="bg-white rounded-[24px] md:rounded-[32px] flex flex-col overflow-hidden
                           shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                            >
                                {/* illustration */}
                                <div className="flex items-center justify-center pt-8 md:pt-12 px-4" style={{ minHeight: 160 }}>
                                    <div style={{ width: 140, height: 140 }}>
                                        <Illustration />
                                    </div>
                                </div>
                                {/* text block */}
                                <div className="flex-1 p-6 md:p-8 pt-4 md:pt-6">
                                    <h3 className="font-bold text-[#1a1a1a] text-[18px] md:text-[22px] leading-snug mb-3">
                                        {title}
                                    </h3>
                                    <p className="text-[#555] text-[14px] md:text-[15px] leading-[1.65]">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Benefits;
