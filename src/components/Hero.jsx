import React from 'react';

const Hero = () => {
    return (
        <div className="w-full font-['Poppins'] bg-white flex flex-col items-center justify-center pt-16 pb-12 px-6 md:pt-32 md:pb-24">
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up { opacity: 0; animation: fadeInUp 0.8s ease-out forwards; }
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                .delay-400 { animation-delay: 0.4s; }
            `}</style>

            {/* Headings */}
            <h1 className="text-center mt-7.5 font-bold leading-[1.2] tracking-[-0.02em] text-[#2D1206] animate-fade-in-up delay-100">
                <span className="block bg-linear-to-r from-[#218CA1] to-[#DEDB00] text-transparent bg-clip-text mt-[30px] text-[40px] md:text-[64px] font-semibold mb-2 md:mb-0">
                    Unified Ecommerce<br className="md:hidden" /> Management
                </span>
                <span className="block text-[40px] md:text-[64px] font-semibold">
                    Secure<span className="md:hidden">,</span><span className="hidden md:inline"> &</span> <br className="md:hidden" /> Scalable <br className="md:hidden" /> Platform
                </span>
            </h1>

            {/* Description */}
            <p className="text-center text-[#474747] mt-6 md:mt-4 max-w-3xl text-base md:text-[20px] leading-[1.4] px-4 animate-fade-in-up delay-200">
                End-to-End Ecommerce management <br className="md:hidden" />
                solution that streamlines design, <br className="hidden md:inline" />
                security, publishing, monitoring, and <br className="md:hidden" />
                monetisation.
            </p>

            {/* Buttons */}
            <div className="flex flex-row items-center justify-center gap-4 md:gap-6 mt-10 md:mt-12 w-full md:w-auto px-4 md:px-0 animate-fade-in-up delay-300">
                <button
                    className="flex items-center cursor-pointer justify-center gap-2 text-white bg-[#218CA1] hover:text-black hover:bg-[#DEDB00] px-6 py-3 md:px-10 md:py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-sm text-[16px] md:text-[18px] whitespace-nowrap"
                >
                    Get a demo
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>

                <button className="text-[#a4a200] cursor-pointer bg-white border border-[#DEDB00] px-6 py-3 md:px-12 md:py-4 rounded-full font-semibold hover:bg-[#fcfae3] transition-colors text-[16px] md:text-[18px] whitespace-nowrap">
                    Know more
                </button>
            </div>

            {/* Scroll Down Arrow */}
            <div className="mt-10 md:mt-27 animate-fade-in-up delay-400">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#f0f9fa] rounded-full flex items-center justify-center animate-bounce mt-4 cursor-pointer hover:bg-[#e0f2f4] transition-colors">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#218CA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 5l-7 7-7-7m14 6l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Hero;
