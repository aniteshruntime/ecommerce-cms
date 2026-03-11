import React, { useState, useEffect, useRef } from 'react';

const Features = () => {
    const terms = [
        'API Architect',
        'API Operations',
        'Product Developers',
        'API Consumers',
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animState, setAnimState] = useState('visible');

    // Scroll-driven tilt animation
    const cardRef = useRef(null);
    const [tilt, setTilt] = useState(28);

    useEffect(() => {
        const handleScroll = () => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // Wider range: starts when card enters viewport, ends when it's 50% up
            const start = windowHeight;
            const end = windowHeight * 0.0;
            const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
            // Ease out the progress for extra smoothness
            const eased = 1 - Math.pow(1 - progress, 3);
            setTilt(28 * (1 - eased));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Text cycling animation
    useEffect(() => {
        const interval = setInterval(() => {
            setAnimState('exit');
            setTimeout(() => {
                setCurrentIndex(prev => (prev + 1) % terms.length);
                setAnimState('enter');
                setTimeout(() => {
                    setAnimState('visible');
                }, 20);
            }, 200);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const getStyle = () => {
        if (animState === 'exit') return { opacity: 0, transform: 'translateY(-10px)' };
        if (animState === 'enter') return { opacity: 0, transform: 'translateY(12px)' };
        return { opacity: 1, transform: 'translateY(0px)' };
    };

    return (
        <section className="w-full font-['Poppins'] bg-white flex flex-col items-center pt-14 pb-0 md:pt-24 md:pb-0 px-5 md:px-6">

            {/* Pill label */}
            <span className="inline-block text-[#218CA1] text-[11px] md:text-[14px] border border-[#218CA1] rounded-full px-3 py-[5px] mb-5 md:mb-8 tracking-wide">
                Solution & Features
            </span>

            {/* Heading */}
            <h2 className="text-center font-medium leading-[1.4] tracking-[-0.02em] text-[#2D1206]">
                <span className="block text-[22px] md:text-[40px]">
                    Unified Ecommerce Platform built for
                </span>
                <span
                    className="block bg-linear-to-r from-[#218CA1] to-[#DEDB00] text-transparent bg-clip-text text-[22px] md:text-[40px] leading-normal"
                    style={{
                        transition: animState === 'enter' ? 'none' : 'opacity 0.2s cubic-bezier(0.4,0,0.2,1), transform 0.2s cubic-bezier(0.4,0,0.2,1)',
                        minHeight: '1.4em',
                        display: 'block',
                        ...getStyle(),
                    }}
                >
                    {terms[currentIndex]}
                </span>
            </h2>

            {/* Description */}
            <p className="text-center text-[#4C4C4C] mt-4 md:mt-6 max-w-80 md:max-w-lg text-[15px] md:text-xl leading-[1.65] md:px-0">
                Manage Ecommerces end-to-end design, publish, secure, monitor, and scale without cobbling together multiple tools.
            </p>

            {/* Dashboard Screenshot Card */}
            <div
                className="w-full max-w-6xl mt-6 md:mt-4 rounded-2xl overflow-hidden"
                style={{
                    backgroundImage: 'url("/back.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="px-2 pt-3 md:px-8 md:pt-10 pb-0">
                    {/* Only the screenshot image gets the tilt */}
                    <div
                        ref={cardRef}
                        className="w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20"
                        style={{
                            transform: `perspective(1400px) rotateX(${tilt}deg)`,
                            transformOrigin: 'bottom center',
                            transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                            willChange: 'transform',
                        }}
                    >
                        <img
                            src="/api_manager_screenshot2.jpg"
                            alt="Yappes API Manager Dashboard"
                            className="w-full h-auto block mb-7.5 rounded-b-2xl object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        {/* Fallback */}
                        <div
                            className="w-full bg-white rounded-t-xl md:rounded-t-2xl"
                            style={{ display: 'none', minHeight: '400px', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
                        >
                            <div className="w-full h-full p-4">
                                <div className="flex items-center gap-3 mb-4 border-b pb-3">
                                    <span className="text-[#FF4D00] font-bold text-lg">Yappes</span>
                                    <span className="text-gray-600 text-sm font-medium">API Manager</span>
                                    <div className="ml-auto flex gap-4 text-gray-500 text-sm">
                                        <span>Notification</span>
                                        <span>Docs</span>
                                        <span>User Name</span>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-40 bg-gray-900 rounded-lg p-3 text-white text-xs space-y-2 shrink-0">
                                        <div className="text-gray-400">Home</div>
                                        <div className="text-gray-400">Marketplace</div>
                                        <div className="bg-white/20 rounded px-2 py-1">API Listing</div>
                                        <div className="text-gray-400">Manage APIs</div>
                                    </div>
                                    <div className="flex-1 text-xs text-gray-600 space-y-2">
                                        <div className="font-semibold text-sm text-gray-800 mb-2">API Marketplace</div>
                                        <div className="grid grid-cols-3 gap-2">
                                            {['LI Data Scraper', 'Fresh LinkedIn Profile', 'Zillow.com', 'Skip Tracing API', 'Twittr API', 'The Old Bird'].map(name => (
                                                <div key={name} className="bg-gray-50 border rounded p-2">
                                                    <div className="font-medium text-gray-700 truncate">{name}</div>
                                                    <div className="flex gap-1 mt-1">
                                                        <span className="bg-blue-100 text-blue-600 text-[10px] px-1 rounded">REST</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
