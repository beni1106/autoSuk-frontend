"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProdukSection() {
    const produkList = [
        { slug: "botani", webp: "/images/Produk_Botani.webp", title: "Botani" },
        { slug: "eikana", webp: "/images/Produk_Eikana.webp", title: "Eikana" },
        { slug: "gilcampropolis", webp: "/images/Produk_Gilcam_Propolis.webp", title: "Gilcam Propolis" },
        { slug: "kopidongkrak", webp: "/images/Produk_Kopi_Dongkrak.webp", title: "Kopi Dongkrak" },
        { slug: "ordinate", webp: "/images/Produk_Ordinate.webp", title: "Ordinate" },
        { slug: "bioLIFE", webp: "/images/Produk_BioLIFE.webp", title: "BioLIFE" },
        { slug: "bioVIT", webp: "/images/Produk_BioVIT.webp", title: "BioVIT" },
    ];

    return (
        <>

            <section
                id="produk"
                className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-400 text-center"
            >
                <motion.h2
                    className="text-white drop-shadow-lg pt-10"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Produk Unggulan Kami
                </motion.h2>

                <motion.p
                    className="mt-3 text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Pilihan terbaik untuk kesehatan, kecantikan, dan gaya hidup modern.
                </motion.p>

                <motion.div
                    className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.15 } },
                    }}
                >
                    {produkList.map((produk, i) => (
                        <motion.div
                            key={i}
                            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
                            }}
                        >
                            <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg">
                                <Image
                                    src={produk.webp}
                                    alt={produk.title}
                                    width={300}
                                    height={300}
                                    className="object-contain max-h-48"
                                />
                            </div>
                            <h3 className="mt-5 text-gray-800">
                                {produk.title}
                            </h3>
                            <Link
                                href={`/produk/${produk.slug}`}
                                className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition"
                            >
                                Lihat Detail
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

        </>
    );
}
