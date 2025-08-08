"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  { name: "Snappfood", logo: "/snappfood-logo.svg" },
  { name: "Applyers", logo: "/ap-logo.png" },
  { name: "Shatel", logo: "/shatel-logo.svg" },
  { name: "Arvand Cloud", logo: "/arvand-logo.png" },
  { name: "Tehran Technical Complex", logo: "/mft-logo.png"},
  { name: "IR-tci", logo: "/tci-logo.jpg"}
  // اضافه کردن برندهای بیشتر...
];

const InfiniteScrollBrands = () => {
  // برای ایجاد اثر بی‌نهایت، آرایه را دو بار تکرار می‌کنیم
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <div className="relative w-full overflow-hidden py-8">
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
          },
        }}
      >
        {duplicatedBrands.map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="flex-shrink-0 px-8 opacity-80 hover:opacity-100 transition-opacity"
          >
            <div className="relative w-36 overflow-hidden bg-white p-16 aspect-square rounded-lg">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain h-11/12"
                sizes="(max-width: 768px) 100px, 150px"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollBrands;