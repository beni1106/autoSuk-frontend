"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { use } from "react";


export default function DetailProduk({ params }) {
    const { slug } = use(params);

    // Data produk lengkap
    const produkData = {
        botani: {
            title: "Botani",
            image: "Produk_Botani.webp",
            description:
                "Botani adalah NUTRISI TAMANAN.",
            memiliki4jenis: [
                "SOIL TREATMENT(Olah Tanah)",
                "BOTANI(Nutrisi Tanaman)",
                "SUPER NPK(Natrium,Kalium,Pospat)",
                "PESTIDA NABATI(Pemberantas HAMA)"
            ],
            manfaat: [
                "Membantu menyuburkan tanah",
                "Mengembalikan unsur hara & struktural tanah",
                "Mengurangi ketergantungan pupuk kimia",
                "Meningkatkan berat panen & kualitas tanaman",
                "Tanaman lebih sehat, alami dan organic",
                "Tanaman lebih kuat, dan tahan hama",
            ],
            hargaKons: "Botani : Rp 300.000",
            hargaDist: "Botani : Rp 200.000",

        },
        eikana: {
            title: "Eikana",
            image: "Produk_Eikana.webp",
            description:
                "Eikana cara tepat DETOKS tubuh dan menurunkan Berat Badan.",
            kandungan:
                "Serat Jagung, manggis bubuk, psyllium husk, tomat bubuk, stroberi bubuk, oak bubuk, bit merah bubuk, anggur bubuk, antioksidan asam askorbat, ekstrak buah dan sayur, ekstrak tebu, kalsium dari ekstrak ganggang laut, sirsak bubuk, wortel bubuk, minyak ikan, apel bubuk, L-Glutation, Billberry bubuk, L-Arginin, pengatur keasaman asam sitrat, premiks vitamin dan mineral, pewarna alami beta-karoten dari blakesla trispora",
            manfaat: [
                "Memperbaiki sistem pencernaan dan penyerarapan nutrisi",
                "Mengontrol berat badan",
                "Membantu menurunkan tekanan darah",
                "Menurunkan kolestrol",
                "Menyehatkan kulit dan mengandung antioksidant tinggi",
                "Menyehatkan organ reproduksi dan seksual",
                "Mengurangi lemak pada liver",
                "Membantu menghambat pertumbuhan sel kanker",
                "Mencegah penyakit kardiovaskuler (stroke, hipertensi, penyakit jantung coroner, dsb)",
                "Membantu mengatasi alergi",
                "Membantu menormalkan kadar gula darah",
            ],
            hargaKons: " : Rp 700.000",
            hargaDist: " : Rp 600.000",
        },
        gilcampropolis: {
            title: "Gilcam Propolis",
            image: "Produk_Gilcam_Propolis.webp",
            description:
                "Propolis dengan rasa mint yang enak dengan banyak manfaat, propolis, asam amino sangat baik untuk menjaga kesehatan dan antibiotik alami. propolis dikenal mempunyai sifat anti bakteri, anti virus, anti jamur, dan anti radang, dalam herbal ini dapat membantu memberikan perlindungan tubuh terhadap berbagai macam penyakit yang AMAN untuk BUMIL dan BAYI.",
            kandungan:
                "Madu trigona,Propolis,Asam amino,Royal jelly,Daun mint",

            manfaat: [
                "Membantu Mengobati Thypus, Diare Dan Muntaber",
                "Membantu Mengobati Flu Dan Tbc",
                "Membantu Mengobati HIV/AIDS, Sipilis/ Rajasigna",
                "Darah Tinggi, Jantung, Stroke, Diabetes Melitus Dan Cangrene",
                "Membantu Mengobati Asam Urat, Kolestrol, Triggliserin",
                "Sebagai Anti Batu Ginjal, Gagal Ginjal Dan Hepatitis",
                "Meredakan Gejala Herpes Genital",
                "Meningkatkan Trombosit Dan Mengobati Demam Berdarah",
                "Berfungsi Untuk Membersihkan Pembuluh Darah",
                "Dan Detoksifikasi",
            ],
            hargaKons: " : Rp 700.000",
            hargaDist: " : Rp 600.000",
        },
        kopidongkrak: {
            title: "Kopi Dongkrak",
            image: "Produk_Kopi_Dongkrak.webp",
            description:
                "Kopi Dongkrak",
            kandungan: "Ekstrak Ginseng,L-Arginin,Gula Aren,Vitamin B1,Vitamin B3",
            manfaatPria: [
                "Meningkatkan stamina dan gairah seksual",
                "Membantu mengatasi ejakulasi dini (tahan lama)",
                "Membantu menyembuhkan diabetes",
                "Membantu mengatasi gangguan pencernaan dan jantung",
                "Membantu memperbaiki fungsi organ reproduksi pria",
                "Memperlancar peredaran darah",
                "Membantu menurunkan hipertensi dan kolesterol",
                "Membantu mengatasi gejala stres dan susah tidur",
                "Meningkatkan daya tahan tubuh",
            ],
            manfaatWanita: [
                "Membantu mencegah MENOPAUSE dini",
                "Membantu memperbaiki fungsi organ reproduksi",
                "Meningkatkan gairah seksual wanita",
                "Membantu melancarkan haid",
                "Menghilangkan rasa nyeri haid/menstruasi",
                "Meningkatkan sistem imun/ daya tahan tubuh",
            ],
            hargaKons: " : Rp 350.000",
            hargaDist: " : Rp 300.000",
        },
        ordinate: {
            title: "Ordinate",
            image: "Produk_Ordinate.webp",
            description:
                "ORDINATE STRAWBERRY merupakan minuman serbuk instan segar dengan ekstrabuah-buahan seperti Strawberry, Apel, Anggur di campur dengan kolagen ikan EROPA 4800 mg, L-Glutation 300mg yang diformulasikan secara khusus untuk ANTI AGING dan kecantikan kulit, Rambut, Gigi, Sendi, Tulang, Kuku dan Juga Regenerasi Sel.",
            kandungan:
                "L-Gluthatione / GSH (master antioxidant/ The Mother of All Antioxidants),Collagen, Strawberry, Apel, Anggur",
            manfaat: [
                "Mencukupi kebutuhan serat anda",
                "Menjaga dan meningkatkan kesehatan jantung anda",
                "Menjaga kesemutan, kolestrol dan asam urat",
                "Menstabilkan gula darah",
                "Mendetox hati",
                "Menghilangkan flek hitam",
                "Mengenyalkan dan menghaluskan kulit",
                "Mencerahkan kulit",
                "Mengurangi keriput dan selulit",
                "Mengecilkan pori-pori kulit wajah",
                "Menjadi sumber vitamin dan mineral",
                "Menyehatkan tulang, gigi, sendi, rambut, kuku dan kulit",
                "Sumber anti oksidan",
                "Anti aging",
                "Low GL",
            ],
            hargaKons: " : Rp 700.000",
            hargaDist: " : Rp 600.000",
        },
        bioLIFE: {
            title: "BioLIFE",
            image: "Produk_BioLIFE.webp",
            description:
                "Biowave Detox Patch diterapkan dengan teknologi Terahertz Quantum chip, yang membantu detoksifikasi menyeimbangkan energi dan memberikan rasa relaksasi.",
            manfaat: [
                "Memperlancar peredaran darah",
                "Meningkatkan metabolisme tubuh",
                "Memperbaiki dan mengaktifkan sel",
                "Obesitas (diet)",
                "Mengurangi ketegangan otot",
                "Membantu produksi kolagen",
                "Memperbaiki kerusakan limfa",
                "Menyeimbangkan fungsi organ tubuh",
                "Mengaktifkan bonad (kelenjar reproduksi)",
                "Mencegah peradangan",
                "Detoksifikasi",
                "Mencegah penuaan dini",
                "Mencegah dan mengurangi kerutan pada wajah",
                "Dll.",
            ],
        },
        bioVIT: {
            title: "BioVIT",
            image: "Produk_BioVIT.webp",
            description:
                "BioVit adalah produk herbal yang berbentuk tablet yang diramu secara tradisional dengan 100% berbahan alami dan halal. Ramuan berkhasiat ini telah ditemukan sejak puluhan tahun yang lalu dan terbukti dapat membantu menjaga kesehatan serta pemulihan berbagai macam keluhan penyakit ringan, sedang maupun berat, terutama penyakit yang berhubungan dengan Sendi dan Saraf. Membantu terapi dan pemulihan beberapa keluhan kesehatan.",
            kandungan: "Madu trigona,Propolis,Asam amino,Royal jelly,Daun mint",
            manfaat: [
                "Osteoporosis, sakit tulang, persendian dan syaraf",
                "Sakit punggung, sakit pinggang, dan sakit bahu",
                "Memperlancar peredaran darah",
                "Kebas kaki dan tangan",
                "Artritis, stroke, alzlaimer dan asam urat",
                "Gula darah, darah tinggi dan diabetes",
                "Asam lambung, asthma, sinusitis",
                "Batuk, radang tenggorokan",
                "Merawat & membersihkan paru-paru",
                "Nyeri haid kurang kesadaran",
                "Merawat masalah penglihatan",
                "Membersihkan toksin ginjal",
                "Meningkatkan sistem kekebalan tubuh",
            ],
            hargaKons: " : Rp 350.000",
            hargaDist: " : Rp 300.000",
        },
    };

    const produk = produkData[slug];

    // Jika slug tidak ada di data
    if (!produk) {
        return (
            <>

                <section className="w-full py-32 text-center">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Produk tidak ditemukan
                    </h1>
                </section>

            </>
        );
    }

    return (
        <>

            <section className="w-full bg-gray-200 pt-24 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto px-4 space-y-6 text-center"
                >
                    {/* Judul Produk */}
                    <h1 className="text-3xl font-bold text-gray-800">
                        {produk.title}
                    </h1>

                    {/* Gambar Produk */}
                    <div className="flex justify-center">
                        <Image
                            src={`/images/${produk.image}`}
                            alt={produk.title}
                            width={600}
                            height={600}
                            className="w-70 h-auto mx-auto object-contain"
                            priority
                        />
                    </div>

                    {/* Deskripsi singkat */}
                    <p className="text-gray-700 leading-relaxed px-13 font-medium">{produk.description}</p>

                    {/* Kandungan (jika ada) */}
                    {produk.kandungan && (
                        <div className="text-left">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                Kandungan {produk.title}:
                            </h2>
                            <p className="text-gray-700 leading-relaxed">{produk.kandungan}</p>
                        </div>
                    )}
                    {/* Memiliki 4 Jenis (jika ada) */}
                    {produk.memiliki4jenis && (
                        <div className="text-left">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                Memiliki 4 Jenis Pupuk {produk.title}:
                            </h2>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                {produk.memiliki4jenis.map((m, i) => (
                                    <li key={i}>{m}</li>
                                ))}
                            </ul>
                        </div>
                    )}


                    {/* Manfaat umum */}
                    {produk.manfaat && (
                        <div className="text-left">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                Manfaat {produk.title}:
                            </h2>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                {produk.manfaat.map((m, i) => (
                                    <li key={i}>{m}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Manfaat khusus pria */}
                    {produk.manfaatPria && (
                        <div className="text-left">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                Manfaat {produk.title} untuk Pria:
                            </h2>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                {produk.manfaatPria.map((m, i) => (
                                    <li key={i}>{m}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Manfaat khusus wanita */}
                    {produk.manfaatWanita && (
                        <div className="text-left">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                Manfaat {produk.title} untuk Wanita:
                            </h2>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                {produk.manfaatWanita.map((m, i) => (
                                    <li key={i}>{m}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {/* Harga Produk */}
                    <div className="flex flex-wrap justify-center gap-10 mt-6">
                        {produk.hargaDist && (
                            <p className="text-gray-700 font-bold">
                                Harga Distributor  {produk.hargaDist}
                            </p>
                        )}

                        {produk.hargaKons && (
                            <p className="text-gray-700 font-bold">
                                Harga Konsumen  {produk.hargaKons}
                            </p>
                        )}
                    </div>
                </motion.div>
            </section>

        </>
    );
}
