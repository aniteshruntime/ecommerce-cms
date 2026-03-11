import FeatureCard from "@/components/sections/FeatureCard";
import React, { useRef, useState } from "react";
import { Tabs } from "@base-ui/react";
import { motion, AnimatePresence } from "motion/react";

const singleVendorFeatures = [
  {
    title: "Product Management",
    description:
      "Easily add, update, and organize products with detailed descriptions, images, pricing, categories, and variants. Manage your entire product catalog efficiently from an intuitive dashboard.",
    image: 'https://framerusercontent.com/images/S1HajUVfQb9QD69OcEaRkP0Oho.png',
  },
  {
    title: "Secure Payment Integration",
    description:
      "Accept payments securely through trusted payment gateways. Support multiple payment methods including credit cards, debit cards, UPI, and digital wallets to provide a smooth checkout experience.",
    image: 'https://framerusercontent.com/images/S1HajUVfQb9QD69OcEaRkP0Oho.png',
  },
  {
    title: "Order Management",
    description:
      "Track and manage orders from purchase to delivery. View order details, update order status, process refunds, and keep customers informed throughout the fulfillment process.",
    image: 'https://framerusercontent.com/images/S1HajUVfQb9QD69OcEaRkP0Oho.png',
  },
  {
    title: "Coupon System",
    description:
      "Create promotional campaigns using discount coupons, seasonal offers, and special deals to attract new customers and increase repeat purchases.",
    image: 'https://framerusercontent.com/images/S1HajUVfQb9QD69OcEaRkP0Oho.png',
  },
  {
    title: "Inventory Control",
    description:
      "Monitor stock levels in real time to prevent overselling. Automatically update inventory after each purchase and receive alerts when stock runs low.",
    image: 'https://framerusercontent.com/images/S1HajUVfQb9QD69OcEaRkP0Oho.png',
  },
  {
    title: "Shipping API Integration",
    description:
      "Integrate with leading shipping providers to automate order fulfillment. Generate shipping labels, calculate delivery costs, and track shipments directly from your dashboard.",
    image: 'https://framerusercontent.com/images/S1HajUVfQb9QD69OcEaRkP0Oho.png',
  },
];

export const multiVendorFeatures = [
  {
    title: "Vendor Onboarding",
    description:
      "Streamline the process of bringing new vendors onto your platform with a simple registration and approval workflow. Vendors can easily create accounts, submit business details, and start listing products quickly.",
    image: 'https://framerusercontent.com/images/S1HajUVfQb9QD69OcEaRkP0Oho.png',
  },
  {
    title: "KYC Verification",
    description:
      "Ensure trust and compliance with integrated KYC verification. Validate vendor identities and business credentials to maintain a secure and reliable marketplace ecosystem.",
    image: 'https://framerusercontent.com/images/S1HajUVfQb9QD69OcEaRkP0Oho.png',
  },
  {
    title: "Product Approval Workflow",
    description:
      "Maintain quality and compliance by reviewing vendor product listings before they go live. Admins can approve, reject, or request modifications to ensure marketplace standards.",
    image: 'https://framerusercontent.com/images/S1HajUVfQb9QD69OcEaRkP0Oho.png',
  },
  {
    title: "Admin Price Negotiation",
    description:
      "Enable administrators to collaborate with vendors on pricing strategies. Adjust pricing structures or negotiate deals to maintain competitive offerings across the marketplace.",
    image: 'https://framerusercontent.com/images/S1HajUVfQb9QD69OcEaRkP0Oho.png',
  },
  {
    title: "Commission Configuration",
    description:
      "Configure flexible commission structures for vendors based on categories, products, or vendors. Automatically calculate commissions and manage payouts efficiently.",
    image: 'https://framerusercontent.com/images/S1HajUVfQb9QD69OcEaRkP0Oho.png',
  },
  {
    title: "Vendor Dashboards",
    description:
      "Provide vendors with dedicated dashboards where they can manage products, track orders, monitor sales performance, and analyze business insights.",
    image: 'https://framerusercontent.com/images/S1HajUVfQb9QD69OcEaRkP0Oho.png',
  },
  {
    title: "ONDC-ready Architecture",
    description:
      "Built with support for ONDC standards, enabling seamless integration with the Open Network for Digital Commerce and expanding marketplace reach across the digital commerce ecosystem.",
    image: 'https://framerusercontent.com/images/S1HajUVfQb9QD69OcEaRkP0Oho.png',
  },
];

export default function EcommerceFeatures() {
  const sectionRef = useRef(null);
  const [tab, setTab] = useState("single-vendor");

  const handleTabChange = (value) => {
    setTab(value);

    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section ref={sectionRef} className="relative bg-[#F4F4F4] py-16 mt-20">
      <h1 className="bg-linear-to-r to-[#DEDB00] from-[#218CA1] bg-clip-text text-transparent text-center pb-8 font-medium text-5xl">
        Features
      </h1>

      <AnimatePresence mode="wait">
        {tab === "single-vendor" && (
          <motion.p
            key="single-overview"
            initial={{
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0,
              scale: 0
            }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
            className={
              "text-center max-w-80 md:max-w-3xl text-[15px] md:text-xl leading-[1.65] mx-auto pb-8"
            }
          >
            {"Launch a powerful online store designed for businesses that sell directly to customers. Our single-vendor e-commerce platform provides everything you need to manage products, process orders, accept secure" +
              " payments, and deliver a seamless shopping experience — all from one centralized system."}
          </motion.p>
        )}

        {tab === "multi-vendor" && (
          <motion.p
            key="multi-overview"
            initial={{
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0,
              scale: 0
            }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
            className={
              "text-center max-w-80 md:max-w-3xl text-[15px] md:text-xl leading-[1.65] mx-auto pb-8"
            }
          >
            {
              "Create a powerful online marketplace where multiple vendors can list and sell their products on a single platform. Our multi-vendor solution provides robust tools for vendor management, product approvals, commissions, and scalable infrastructure to support growing digital marketplaces."
            }
          </motion.p
           >
        )}
      </AnimatePresence>

      <Tabs.Root value={tab} onValueChange={handleTabChange}>
        <Tabs.List className="bg-[#DEDB00] w-max mx-auto flex rounded-full p-1 sticky top-20 z-10">
          <Tabs.Tab
            value="single-vendor"
            className="p-2 px-4 rounded-full text-white data-active:bg-white data-active:text-[#218CA1] data-active:shadow-lg transition-all duration-300 ease-in-out cursor-pointer font-semibold"
          >
            Single Vendor
          </Tabs.Tab>

          <Tabs.Tab
            value="multi-vendor"
            className="p-2 px-4 rounded-full text-white data-active:bg-white data-active:text-[#218CA1] data-active:shadow-lg transition-all duration-300 ease-in-out cursor-pointer font-semibold"
          >
            Multi Vendor
          </Tabs.Tab>
        </Tabs.List>

        <div className="container mx-auto py-16 relative">
          <AnimatePresence mode="wait">
            {tab === "single-vendor" && (
              <motion.div
                key="single"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col items-center gap-32"
              >
                {singleVendorFeatures.map((feature, index) => (
                  <div key={index} className="sticky top-40">
                    <FeatureCard
                      index={index}
                      title={feature.title}
                      description={feature.description}
                      image={feature.image}
                    />
                  </div>
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
                className="flex flex-col items-center gap-32"
              >
                {multiVendorFeatures.map((feature, index) => (
                  <div key={index} className="sticky top-40">
                    <FeatureCard
                      index={index}
                      title={feature.title}
                      description={feature.description}
                      image={feature.image}
                    />
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Tabs.Root>
    </section>
  );
}
