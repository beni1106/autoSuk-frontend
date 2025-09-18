"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function MarketingPlan() {
    const images = [
        "/images-marketing/1.webp",
        "/images-marketing/2.webp",
        "/images-marketing/3.webp",
        "/images-marketing/4.webp",
        "/images-marketing/5.webp",
        "/images-marketing/6.webp",
        "/images-marketing/7.webp",
        "/images-marketing/8.webp",
        "/images-marketing/9.webp",
        "/images-marketing/10.webp",
        "/images-marketing/11.webp",
        "/images-marketing/12.webp",
        "/images-marketing/13.webp",
        "/images-marketing/14.webp",
        "/images-marketing/15.webp",
        "/images-marketing/16.webp",
        "/images-marketing/17.webp",
        "/images-marketing/18.webp",
        "/images-marketing/19.webp",

    ];

    return (
        <>
            <Navbar />
            <section className="w-full bg-white pt-16">
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        className="w-full"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.04 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src={src}
                            alt={`Marketing Plan ${index + 1}`}
                            width={1920}
                            height={1080}
                            className="w-full h-auto"
                            priority={index === 0}
                        />
                    </motion.div>
                ))}
            </section>
            <Footer />
        </>
    );
}
