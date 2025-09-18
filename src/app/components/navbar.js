"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { User, Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/produk", label: "Produk" },
        { href: "/marketing-plan", label: "Marketing Plan" },
        { href: "/upgrade", label: "Upgrade" },
        { href: "/kontak", label: "Kontak" },
        { href: "/news", label: "News" },
        { href: "/daftar", label: "Daftar" },
    ];

    return (
        <nav
            className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 px-6 py-3 flex items-center justify-between
        ${scrolled ? "bg-gray-800 shadow-lg py-2" : "bg-gray-200 py-4"}
      `}
        >
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer transition-all duration-300">
                <img src="/images/logo_bas_transparent.png" alt="Logo" className="h-10 w-auto" />
                <span
                    className={`font-bold text-lg font-sans transition-colors duration-300 ${scrolled ? "text-gray-200 group-hover:text-emerald-400" : "text-gray-800 group-hover:text-emerald-400"
                        }`}
                >
                    AutoSukses2u
                </span>
            </div>

            {/* Menu desktop */}
            <ul className="hidden md:flex gap-6 font-medium">
                {navItems.map((item) => (
                    <li key={item.href} className="relative group">
                        <Link
                            href={item.href}
                            className={`transition-colors duration-300 font-semibold ${scrolled
                                ? "text-gray-200 group-hover:text-emerald-400"
                                : "text-gray-800 group-hover:text-emerald-400"
                                }`}
                        >
                            {item.label}
                        </Link>
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                ))}
            </ul>

            {/* Button desktop */}
            <div className="hidden md:flex items-center gap-4">
                <a href="daftar">
                    <button
                        className={`px-4 py-2 rounded-lg font-sans font-semibold transition-all duration-300 shadow-md hover:scale-105
            ${scrolled ? "bg-gray-200 text-gray-800 hover:bg-emerald-400 hover:text-gray-200" : "bg-emerald-400 text-gray-200 hover:bg-emerald-400"}
          `}
                    >
                        Daftar Sekarang
                    </button>
                </a>
            </div>


            {/* Hamburger menu mobile */}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                    <X size={28} className={scrolled ? "text-gray-200" : "text-gray-800"} />
                ) : (
                    <Menu size={28} className={scrolled ? "text-gray-200" : "text-gray-800"} />
                )}
            </button>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-gray-200 transform transition-transform duration-500 md:hidden z-40 ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header Mobile Menu */}
                <div className="flex items-center justify-between p-6 border-b border-gray-800">
                    <span className="font-bold text-lg">Menu</span>
                    <button onClick={() => setMenuOpen(false)}>
                        <X size={28} className="text-gray-200" />
                    </button>
                </div>

                {/* Isi Menu */}
                <div className="p-6 flex flex-col gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-lg font-semibold hover:text-emerald-400 transition-colors duration-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}

                    <button className="flex items-center gap-2 px-4 py-2 border-2 border-emerald-400 rounded-lg font-semibold hover:bg-emerald-400 transition-all duration-300">
                        <User size={20} /> Login Admin
                    </button>
                    <button className="bg-emerald-400 text-gray-200 px-4 py-2 rounded-lg font-semibold hover:bg-emerald-400 transition-all duration-300">
                        Daftar Sekarang
                    </button>
                </div>
            </div>

        </nav>
    );
}
