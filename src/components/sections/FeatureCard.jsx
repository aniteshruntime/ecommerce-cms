import React from "react";

export default function FeatureCard({
  title,
  description,
  image,
  imagePosition = "right",
  imageBg = "#e0f2f4",
  link,
  index
}) {
  const isLeft = imagePosition === "left";

  return (
    <div className="relative w-260 max-w-[calc(100vw-40px)] h-95 rounded-[22px] overflow-hidden grid grid-cols-2 bg-white">

      {/* Image Panel */}
      <div
        className="flex items-center justify-center p-7"
        style={{
          background: imageBg,
          order: index %2 === 0 ? 1 : 2,
        }}
      >
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-full max-w-72.5 max-h-80 object-contain"
            loading="lazy"
          />
        )}
      </div>

      {/* Text Panel */}
      <div
        className="flex flex-col justify-center gap-5 px-12"
        style={{
          order: isLeft ? 2 : 1,
        }}
      >
        <h3 className="text-[30px] font-medium text-[#141414] leading-[1.3]">
          {title}
        </h3>

        <p className="text-[16px] leading-[1.7] text-[#2e2e2e]">
          {description}
        </p>

        {link && (
          <a
            href={link}
            className="inline-flex items-center gap-2 w-fit px-5 py-2 rounded-full border border-[#DEDB00] text-[#a4a200] text-sm font-medium transition-all hover:bg-[#fcfae3] hover:-translate-y-0.5"
          >
            Know more →
          </a>
        )}
      </div>
    </div>
  );
}