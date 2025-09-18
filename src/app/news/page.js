"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function NewsPage() {
    const news = [
        {
            slug: "botani",
            img: "/images/Produk_Botani.webp",
            title: "MANTRA ALKABOOSTER",
            category: "Produk",
            desc: "Botani adalah suplemen alami berbahan dasar herbal yang bermanfaat...",
            author: "Admin",
            date: "2025-05-27",
        },
        {
            slug: "eikana",
            img: "/images/Produk_Eikana.webp",
            title: "Eikana",
            category: "Produk",
            desc: "Eikana merupakan produk perawatan kecantikan yang dirancang...",
            author: "Admin",
            date: "2025-05-27",
        },
        {
            slug: "gilcampropolis",
            img: "/images/Produk_Gilcam_Propolis.webp",
            title: "Gilcam Propolis",
            category: "Produk",
            desc: "Gilcam Propolis adalah produk kesehatan berbasis propolis yang dikenal...",
            author: "Admin",
            date: "2025-05-27",
        },
    ];

    // Variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.25, delayChildren: 0.1 },
        },
    };

    const card = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 70, damping: 18 },
        },
    };

    const imageAnim = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section id="news" className="py-30 px-4  sm:px-6 lg:px-8 bg-emerald-400">
            <header className="text-center mb-12">
                <motion.h1
                    className="text-3xl md:text-4xl font-bold text-gray-200"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    News & Produk
                </motion.h1>
                <motion.p
                    className="mt-2 text-gray-200 max-w-2xl font-medium mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Temukan berita terbaru, informasi produk, dan update seputar bisnis PT BASS & BASSPRENEUR.
                </motion.p>
            </header>

            {/* Grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {news.map((itemData, i) => (
                    <motion.div
                        key={i}
                        variants={card}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 120, damping: 12 }}
                    >
                        <Link href={`/produk/${itemData.slug}`}>
                            <article className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full cursor-pointer text-left hover:shadow-2xl transition">
                                <motion.div
                                    className="w-full h-48 bg-white flex items-center justify-center overflow-hidden rounded-lg"
                                    variants={imageAnim}
                                >
                                    <Image
                                        src={itemData.img}
                                        alt={`Produk ${itemData.title}`}
                                        width={400}
                                        height={300}
                                        className="h-full w-auto object-contain"
                                        loading="lazy"
                                    />
                                </motion.div>

                                <motion.h2
                                    className="mt-5 text-lg font-semibold text-gray-800"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    {itemData.title}
                                </motion.h2>
                                <p className="text-sm text-emerald-600 font-semibold">
                                    {itemData.category}
                                </p>
                                <p className="text-sm text-gray-800 mt-2 line-clamp-3">
                                    {itemData.desc}
                                </p>

                                <footer className="flex justify-between text-xs text-gray-500 border-t mt-auto pt-2">
                                    <span>✍️ {itemData.author}</span>
                                    <time dateTime={itemData.date}>
                                        {new Date(itemData.date).toLocaleDateString("id-ID", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </time>
                                </footer>
                            </article>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
