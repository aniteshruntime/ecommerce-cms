import React, { useRef, useEffect } from 'react';

const features = [
    {
        id: 'api-manager',
        title: 'API Manager',
        description: 'Full featured GUI to manage the entire API lifecycle, including policies. Fully decoupled from request routing. Enables easier API Lifecycle Management without having to manually edit complex configuration files.',
        link: 'https://yappes.com/features-api-manager#features-tab',
        imagePosition: 'right',
        imageBg: 'linear-gradient(135deg, #e0f2f4 0%, #fcfce3 100%)',
        image: 'https://framerusercontent.com/images/xb6qKKA1vbBV9HsKy7EIF1gN7J4.png',
    },
    {
        id: 'api-lifecycle',
        title: 'API Lifecycle',
        description: 'Design, Test, Publish, Manage, Monetize your APIs. Manage your APIs from inception to decommission. Designed to work seamlessly.',
        link: 'https://yappes.com/features-api-life-cycle#features-tab',
        imagePosition: 'left',
        imageBg: 'linear-gradient(135deg, #fcfce3 0%, #e0f2f4 100%)',
        image: 'https://framerusercontent.com/images/S1HajUVfQb9QD69OcEaRkP0Oho.png',
    },
    {
        id: 'api-gateway',
        title: 'API Gateway',
        description: 'In-house, production-grade API Gateway for scalable performance. Enforce policies, control traffic, and secure endpoints with auth, IP filtering, SSL & HMAC.',
        link: 'https://yappes.com/features-api-gateway#features-tab',
        imagePosition: 'right',
        imageBg: 'linear-gradient(135deg, #d3ebf0 0%, #faf8c8 100%)',
        image: 'https://framerusercontent.com/images/8pQqkuHynaUPj2mktnRZmlu9BQ.png',
    },
    {
        id: 'api-marketplace',
        title: 'API Marketplace',
        description: 'Internal/External API Marketplace for monetized and free APIs. Flexible pricing plans. Track utilization against subscription. Auto publishing of APIs to the Portal.',
        link: 'https://yappes.com/features-developer-portal#features-tab',
        imagePosition: 'left',
        imageBg: 'linear-gradient(135deg, #faf8c8 0%, #d3ebf0 100%)',
        image: 'https://framerusercontent.com/images/j48dl9LYrg4r8KKzQM7Yw9wcu78.png',
    },
    {
        id: 'monitoring',
        title: 'Monitoring',
        description: 'Built in comprehensive observability, flexible and customisable analytics using best of breed technologies and escalation manager.',
        link: 'https://yappes.com/features-monitoring-and-analytics#features-tab',
        imagePosition: 'right',
        imageBg: 'linear-gradient(135deg, #e0f2f4 0%, #fcfce3 100%)',
        image: 'https://framerusercontent.com/images/EOWudoxwg803abwQoQufmqIOjg0.png',
    },
    {
        id: 'secure',
        title: 'Secure',
        description: 'Fully self contained product for ultimate privacy. Multiple authentication methods and protocols. RBAC and audit trail of activities. Tested and certified for security vulnerabilities.',
        link: 'https://yappes.com/features-security#features-tab',
        imagePosition: 'left',
        imageBg: 'linear-gradient(135deg, #fcfce3 0%, #e0f2f4 100%)',
        image: 'https://framerusercontent.com/images/caZmyiGQ9Low3tsVTTTvQApDPg.png',
    },
    {
        id: 'monetise',
        title: 'Monetise',
        description: 'Create flexible pricing plans for APIs and publish them to the Marketplace. Consumers can subscribe, track usage and make payments on the platform itself.',
        link: 'https://yappes.com/features-monetization#features-tab',
        imagePosition: 'right',
        imageBg: 'linear-gradient(135deg, #d3ebf0 0%, #faf8c8 100%)',
        image: 'https://framerusercontent.com/images/xb6qKKA1vbBV9HsKy7EIF1gN7J4.png',
    },
];

// px of scroll travel to fully transition one card into view
const SCROLL_PER_CARD = 500;
const CARD_H = 380;

// Cubic ease-in-out
function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        style={{ transition: 'transform 0.3s', flexShrink: 0 }}>
        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const FeaturesModule = () => {
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);
    const pillRef = useRef(null);

    const n = features.length;
    // Total height: SCROLL_PER_CARD per card transition + 800px so the last card
    // stays pinned on screen long enough before the section ends.
    // Static value — safe for SSR (no window reference).
    const sectionHeight = SCROLL_PER_CARD * (n - 1) + 800;

    useEffect(() => {
        // Pill entrance animation
        const pillObs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                if (pillRef.current) {
                    pillRef.current.style.opacity = '1';
                    pillRef.current.style.transform = 'translateY(0) scale(1)';
                }
                pillObs.disconnect();
            }
        }, { threshold: 0.5 });
        if (pillRef.current) pillObs.observe(pillRef.current);

        const handleScroll = () => {
            const section = sectionRef.current;
            if (!section) return;

            // How far the user has scrolled past the TOP of this section
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
            const scrolled = window.scrollY - sectionTop;

            cardRefs.current.forEach((card, i) => {
                if (!card) return;

                if (i === 0) {
                    // First card always fully in place
                    card.style.transform = 'translateY(0%)';
                    card.style.zIndex = '100';
                    return;
                }

                // This card starts sliding in after (i-1) * SCROLL_PER_CARD px of scroll
                const slideStart = (i - 1) * SCROLL_PER_CARD;
                const slideEnd = i * SCROLL_PER_CARD;

                if (scrolled <= slideStart) {
                    // Parked below. zIndex ensures next card (lowest i) is on top of the parked stack
                    card.style.transform = 'translateY(calc(100% + 40px))';
                    card.style.zIndex = (50 - i).toString();
                } else if (scrolled >= slideEnd) {
                    // Fully landed
                    card.style.transform = 'translateY(0%)';
                    card.style.zIndex = (100 + i).toString();
                } else {
                    // Mid-transition
                    const raw = (scrolled - slideStart) / (slideEnd - slideStart);
                    const t = easeInOutCubic(raw);
                    card.style.transform = `translateY(calc(${(1 - t) * 100}% + ${(1 - t) * 40}px))`;
                    card.style.zIndex = (100 + i).toString();
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // run once on mount

        return () => {
            pillObs.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <style>{`
                .fm-section {
                    font-family: 'Poppins', sans-serif;
                    background: #f4f4f4;
                    position: relative;
                    /* overflow:clip keeps page from horizontal-scrolling due to
                       translated cards, WITHOUT breaking position:sticky */
                    overflow: clip;
                }
                .fm-sticky {
                    position: sticky;
                    top: 0;
                    /* full viewport height so the card floats in the center screen */
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    /* NO overflow:hidden — cards must be visible as they rise */
                    overflow: visible;
                    gap: 0;
                }
                .fm-pill {
                    display: inline-block;
                    color: #218CA1;
                    font-size: 13px;
                    border: 1px solid rgba(33,140,161,0.4);
                    background: rgba(255,255,255,0.9);
                    border-radius: 100px;
                    padding: 6px 20px;
                    margin-bottom: 28px;
                    flex-shrink: 0;
                    opacity: 0;
                    transform: translateY(12px) scale(0.95);
                    transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1);
                }
                .fm-stack {
                    position: relative;
                    width: 1040px;
                    max-width: calc(100vw - 40px);
                    height: ${CARD_H}px;
                    /* overflow visible so cards rising from below are seen fully */
                    overflow: visible;
                }
                .fm-card {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 22px;
                    overflow: hidden;       /* clip content inside the card itself */
                    box-shadow: none;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    will-change: transform, opacity;
                }
                .fm-img-panel {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 28px;
                    height: ${CARD_H}px;
                }
                .fm-text-panel {
                    background: #fff;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 18px;
                    padding: 36px 48px;
                    height: ${CARD_H}px;
                    box-sizing: border-box;
                }
                .fm-title {
                    margin: 0;
                    font-weight: 500;
                    font-size: 30px;
                    line-height: 1.3;
                    color: #141414;
                }
                .fm-desc {
                    margin: 0;
                    font-size: 15px;
                    line-height: 1.75;
                    color: #2e2e2e;
                }
                .fm-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    width: fit-content;
                    padding: 9px 20px;
                    border-radius: 100px;
                    color: #a4a200;
                    font-size: 13px;
                    font-weight: 500;
                    font-family: 'Poppins', sans-serif;
                    text-decoration: none;
                    border: 1px solid #DEDB00;
                    background: #fff;
                    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                }
                .fm-btn:hover {
                    background: #fcfae3;
                    color: #a4a200;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(222, 219, 0, 0.2);
                }
                .fm-btn:hover svg {
                    transform: translateX(4px);
                }
                .fm-btn:active {
                    transform: translateY(0);
                    box-shadow: 0 2px 6px rgba(222, 219, 0, 0.1);
                }
                @media (max-width: 768px) {
                    .fm-stack {
                        height: 540px;
                    }
                    .fm-card {
                        grid-template-columns: 1fr;
                        grid-template-rows: 220px auto;
                    }
                    .fm-img-panel {
                        order: 1 !important;
                        height: 220px;
                        padding: 16px;
                    }
                    .fm-text-panel {
                        order: 2 !important;
                        height: 320px;
                        padding: 24px 20px;
                        gap: 12px;
                        justify-content: flex-start;
                    }
                    .fm-title {
                        font-size: 22px;
                    }
                    .fm-desc {
                        font-size: 14px;
                        line-height: 1.5;
                    }
                }
            `}</style>

            {/* Section tall enough for all card transitions */}
            <section
                ref={sectionRef}
                className="fm-section"
                style={{ height: `${sectionHeight}px`, marginBottom: "10px" }}
            >
                {/* Sticky frame — stays fixed to viewport while section scrolls beneath */}
                <div className="fm-sticky">

                    <span ref={pillRef} className="fm-pill">Features</span>

                    {/* Card stack — all cards share this same absolute space */}
                    <div className="fm-stack">
                        {features.map((f, i) => {
                            const isLeft = f.imagePosition === 'left';
                            return (
                                <div
                                    key={f.id}
                                    className="fm-card"
                                    ref={el => cardRefs.current[i] = el}
                                    style={{
                                        zIndex: i === 0 ? 100 : 50 - i,
                                        // Card 0: visible in place. Others: parked below.
                                        transform: i === 0 ? 'translateY(0%)' : 'translateY(calc(100% + 40px))',
                                        opacity: 1,
                                    }}
                                >
                                    {/* ── Image panel ── */}
                                    <div
                                        className="fm-img-panel"
                                        style={{
                                            background: f.imageBg,
                                            order: isLeft ? 1 : 2,
                                        }}
                                    >
                                        <img
                                            src={f.image}
                                            alt={f.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                maxWidth: '290px',
                                                maxHeight: '320px',
                                                objectFit: 'contain',
                                            }}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>

                                    {/* ── Text panel ── */}
                                    <div
                                        className="fm-text-panel"
                                        style={{ order: isLeft ? 2 : 1 }}
                                    >
                                        <h3 className="fm-title">{f.title}</h3>
                                        <p className="fm-desc text-[18px]">{f.description}</p>
                                        <a
                                            href={f.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="fm-btn"
                                        >
                                            Know more <ArrowIcon />
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeaturesModule;
