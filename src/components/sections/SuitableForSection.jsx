import { StripedBg } from "@/components/Benefits";
import BenefitCard from "@/components/sections/BenefitCard";
import { Tabs } from "@base-ui/react";
import { AnimatePresence, motion } from "motion/react";
import React, { useRef, useState } from "react";

export default function SuitableForSection() {
  const sectionRef = useRef(null);
  const [tab, setTab] = useState("single-vendor");

  const handleTabChange = (value) => {
    setTab(value);

    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const suitableFor = [
    {
      title: "D2C Brands",
      description:
        "Perfect for direct-to-consumer brands looking to build their own online storefront and strengthen their relationship with customers.",
    },
    {
      title: "Retail Businesses",
      description:
        "Ideal for retailers wanting to expand their physical store into the digital marketplace and reach a wider audience online.",
    },
    {
      title: "Manufacturers",
      description:
        "Enables manufacturers to sell directly to customers without intermediaries, increasing margins and improving customer engagement.",
    },
  ];

  const multiVendorSuitableFor = [
    {
      title: "B2B Marketplaces",
      description:
        "Perfect for platforms connecting businesses with suppliers, wholesalers, and service providers across various industries.",
    },
    {
      title: "Regional Commerce Platforms",
      description:
        "Ideal for regional marketplaces that bring together local vendors and sellers under one digital platform.",
    },
    {
      title: "Industry-specific Aggregators",
      description:
        "Designed for niche marketplaces focused on specific industries such as electronics, agriculture, fashion, healthcare, or other specialized sectors.",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <StripedBg />
      <div className="relative z-10 py-24">
        <Tabs.Root value={tab} onValueChange={handleTabChange}>
          <Tabs.List
            className={
              "w-fit mx-auto flex rounded-full p-1 sticky top-20 z-10 bg-[#218CA1]"
            }
          >
            <Tabs.Tab
              value="single-vendor"
              className="p-2 px-4 rounded-full text-white data-active:bg-[#DEDB00] data-active:text-white data-active:shadow-lg transition-all duration-300 ease-in-out cursor-pointer font-semibold"
            >
              Single Vendor
            </Tabs.Tab>
            <Tabs.Tab
              value="multi-vendor"
              className="p-2 px-4 rounded-full text-white data-active:bg-[#DEDB00] data-active:text-white data-active:shadow-lg transition-all duration-300 ease-in-out cursor-pointer font-semibold"
            >
              Multi Vendor
            </Tabs.Tab>
          </Tabs.List>

          <div className="container mx-auto py-8 relative">
            <h1 className="text-white text-4xl font-medium text-center pb-16">
              Benefits we offer
            </h1>
            <AnimatePresence mode="wait">
              {tab === "single-vendor" && (
                <motion.div
                  key="single"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -60 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex gap-6 justify-center"
                >
                  {suitableFor.map((feature, index) => (
                    <BenefitCard
                      key={index}
                      title={feature.title}
                      description={feature.description}
                    />
                  ))}
                </motion.div>
              )}

              {tab === "multi-vendor" && (
                <motion.div
                  key="multi"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -60 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex gap-6 justify-center"
                >
                  {multiVendorSuitableFor.map((feature, index) => (
                    <BenefitCard
                      key={index}
                      title={feature.title}
                      description={feature.description}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Tabs.Root>
      </div>
    </div>
  );
}
