"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function DetailPage() {
    return (
        <>
            <section className="w-full bg-white pt-16">
                <div className="max-w-4xl mx-auto px-4 space-y-8">

                    {/* Headline SEO */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center space-y-4"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 pt-20">
                            Tentang AutoSukses2u
                        </h1>

                    </motion.div>

                    {/* Gambar Profile Perusahaan */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/images/profile_perusahaan.jpg"
                            alt="Profil Perusahaan AutoSukses2u"
                            width={1200}
                            height={800}
                            className="w-full h-auto rounded-lg shadow-lg"
                            priority
                        />
                    </motion.div>

                    {/* Gambar Sertifikat */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/images/sertifikat_ap2li_v2_berkah_auto.jpg"
                            alt="Sertifikat Resmi AP2LI AutoSukses2u"
                            width={1200}
                            height={800}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </motion.div>
                </div>
            </section>
        </>
    );
}
