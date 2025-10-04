"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import ProdukSection from "../produk/page";

export default function Hero() {
    const [domain, setDomain] = useState("default");

    useEffect(() => {
        // Ambil dari query param ?domain=
        const params = new URLSearchParams(window.location.search);
        const fromUrl = params.get("domain");

        if (fromUrl) {
            setDomain(fromUrl);
            document.cookie = `domain=${fromUrl}; path=/; SameSite=None; Secure`;
        } else {
            // fallback: coba ambil dari cookie
            const match = document.cookie.match(/(?:^|;\s*)domain=([^;]+)/);
            if (match) {
                setDomain(match[1]);
            }
        }
    }, []);
    return (
        <main className="w-full">

            {/* HERO SECTION */}
            <section className="relative bg-emerald-400 text-gray-200 min-h-screen flex items-center px-6 text-center">
                <motion.div
                    className="max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1>
                        Peluang Bisnis 2025
                        <br />
                        Raih Kebebasan Finansial
                        <br /> bersama AutoSukses2u
                    </h1>
                    <motion.p
                        className="mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Bangun bisnis online fleksibel tanpa pengalaman.{" "}
                        <strong>AutoSukses2u</strong> hadir dengan risiko minim, marketing plan sederhana,
                        dan produk unggulan.
                    </motion.p>

                    <motion.div
                        className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        <a
                            href="#daftar"
                            className="bg-gray-800 text-gray-200 font-bold px-10 py-3 rounded-full shadow-lg hover:scale-105 transform transition"
                        >
                            Lihat Selengkapnya
                        </a>
                    </motion.div>
                </motion.div>
            </section>

            <section id="daftar" className="py-20 bg-gray-200 text-gray-800">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <motion.h2
                        className="mb-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Apakah Anda Sedang Mencari Bisnis / Peluang Penghasilan Yang:
                    </motion.h2>

                    {/* List 2 kolom */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        {[
                            "Modalnya <strong>TERJANGKAU</strong>",
                            "Ada Sistem <strong>PEMBINAAN</strong>",
                            "Resikonya <strong>SANGAT Kecil</strong>",
                            "Waktu Kerjanya <strong>FLEKSIBEL</strong>",
                            "Pangsa Pasarnya <strong>LUAS</strong>",
                            "Dapat <strong>DIWARISKAN</strong> ke Anak / Istri",
                            "Potensi Income <strong>BESAR</strong>",
                            "Tanpa <strong>HUTANG</strong>, Tanpa Riba"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center justify-center gap-3 bg-emerald-400 text-gray-800 px-6 py-3 rounded-lg shadow-md"
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <div className="flex-shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-gray-800" />
                                </div>
                                <p dangerouslySetInnerHTML={{ __html: item }} className="items-center font-medium flex-1 " />
                            </motion.div>
                        ))}
                    </div>

                    {/* Sub text */}
                    <motion.p
                        className="mt-12 font-semibold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Semua Orang Ingin Kaya, Tapi Tidak Semua Orang Tau Bagaimana Caranya..!
                    </motion.p>

                    {/* Tombol CTA */}
                    <motion.div
                        className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <a
                            href="#detail"
                            className="bg-emerald-400 text-gray-800 font-bold px-10 py-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                        >
                            Lihat Profil Perusahaan
                        </a>
                    </motion.div>
                </div>
            </section>

            <section id="detail" className="py-20 px-6 bg-emerald-400">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    {/* Bagian Teks */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="mb-6 text-gray-200">
                            PT. BERKAH AUTO SUKSES SEJAHTERA ( PT. BASS )
                        </h2>
                        <p className="text-gray-200 mb-4">
                            Sebuah Perusahaan yang bergerak di bidang penjualan{" "}
                            <span className="font-semibold">langsung</span> dengan Market Plan
                            sederhana, <span className="font-semibold">mudah, aman</span> dan{" "}
                            <span className="font-semibold">saling menguntungkan</span> antara
                            member dan perusahaan.
                        </p>
                        <p className="text-gray-200 mb-6">
                            Manajemen PT. BASS adalah orang yang telah berpengalaman selama{" "}
                            <span className="font-semibold text-gray-200">
                                puluhan tahun
                            </span>{" "}
                            dan sukses di bidangnya, sehingga sangat tahu apa yang dibutuhkan
                            pelaku network marketing baik dari segi perusahaan, produk, marketing
                            plan dan support system. Dan akan selalu berinovasi untuk kepentingan
                            member dan perusahaan.
                        </p>

                        {/* Tombol */}
                        <Link
                            href="/detail"
                            className="inline-block border border-black text-gray-200 px-6 py-2 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-colors duration-200"
                        >
                            Lihat Lebih Detail →
                        </Link>
                    </motion.div>

                    {/* Bagian Gambar */}
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <img
                            src="/images/profile_perusahaan.jpg"
                            alt="Profil PT BASS"
                            className="rounded-lg shadow-lg w-full max-w-md"
                        />
                    </motion.div>
                </div>
            </section>

            {/* COMPANY INTRO SECTION */}
            <section id="company-intro" className="py-20 bg-gray-200 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Judul */}
                    <motion.h2
                        className="mb-4"
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        INILAH..! <br /> ERA BARU NETWORK MARKETING
                    </motion.h2>

                    {/* Logo */}
                    <motion.div
                        className="flex justify-center mb-6"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img
                            src="/images/logo_bas.jpg"
                            alt="Logo"
                            className="h-20 md:h-28"
                        />
                    </motion.div>

                    {/* Deskripsi */}
                    <motion.p
                        className="font-semibold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Perusahaan Penjualan Langsung Berjenjang Syariah (PLBS)
                    </motion.p>

                    <motion.p
                        className="mt-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Modal Kecil, Income Potensi Milyaran!
                    </motion.p>

                    {/* Tagline */}
                    <div className="mt-4 space-y-2 font-medium">
                        {["Makin Lama Makin Cuan", "Tiap Posisi Anda Cuan", "Potensi Terburuk Anda Tetap Cuan"].map(
                            (text, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
                                >
                                    {text}
                                </motion.p>
                            )
                        )}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <a
                            href="#produk"
                            className="bg-emerald-400 text-gray-800 font-bold px-10 py-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                        >
                            Produk Unggulan
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* PRODUK UNGGULAN */}
            <ProdukSection />
        </main >
    );
}
