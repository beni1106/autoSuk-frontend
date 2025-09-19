"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function PageDaftar() {
    const [domain, setDomain] = useState(null);
    const [form, setForm] = useState({
        nama: "",
        email: "",
        kota: "",
        telp: "",
        username: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);

    // Ambil domain dari cookie
    useEffect(() => {
        const savedDomain = Cookies.get("domain");
        if (savedDomain) {
            setDomain(savedDomain);
        }
    }, []);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const queryParams = new URLSearchParams({ ...form, domain }).toString();

            const res = await fetch(`/api/daftar?${queryParams}`, {
                method: "GET",
            });

            if (!res.ok) throw new Error("Gagal fetch ke server");

            const data = await res.json();
            console.log("Respon server:", data);

            if (data?.[0]?.error === "true") {
                alert("Gagal daftar: " + data?.[0]?.message);
            } else {
                alert("Pendaftaran berhasil! Admin akan menerima notifikasi WA.");
            }
        } catch (error) {
            console.error(error);
            alert("Terjadi kesalahan, coba lagi.");
        } finally {
            setLoading(false);
        }
    };

    if (!domain) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-gray-700">Memuat...</p>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-emerald-400 pt-20">
            <div className="w-full max-w-lg bg-white shadow-md rounded-xl p-8">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    Form Pendaftaran ({domain})
                </h1>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nama"
                        value={form.nama}
                        onChange={handleChange}
                        placeholder="Nama Anda"
                        className="w-full border rounded-lg px-4 py-2"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email Aktif"
                        className="w-full border rounded-lg px-4 py-2"
                        required
                    />
                    <input
                        type="text"
                        name="kota"
                        value={form.kota}
                        onChange={handleChange}
                        placeholder="Kota"
                        className="w-full border rounded-lg px-4 py-2"
                    />
                    <input
                        type="text"
                        name="telp"
                        value={form.telp}
                        onChange={handleChange}
                        placeholder="No HP / WhatsApp"
                        className="w-full border rounded-lg px-4 py-2"
                    />
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        placeholder="Username"
                        className="w-full border rounded-lg px-4 py-2"
                    />
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="w-full border rounded-lg px-4 py-2"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full font-semibold py-2 rounded-lg transition ${loading
                            ? "bg-gray-400 text-white cursor-not-allowed"
                            : "bg-emerald-400 text-gray-200 hover:bg-gray-900"
                            }`}
                    >
                        {loading ? "Mengirim..." : "REGISTRASI"}
                    </button>
                </form>
            </div>
        </div>
    );
}
