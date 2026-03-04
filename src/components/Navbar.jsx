import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Phone, ArrowRight } from "lucide-react"
import { cn } from "../lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLocationContext } from "../context/LocationContext"

gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
    const navRef = useRef(null)
    const { selectedLocation } = useLocationContext()

    const location = useLocation()
    const isLocationPage = location.pathname.startsWith('/locations')

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            ref={navRef}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex flex-col",
                isScrolled || isLocationPage ? "bg-mgb-primary shadow-md border-b border-white/10" : "bg-transparent border-b border-transparent"
            )}
        >
            {/* Integrated Emergency Strip */}
            <div className="bg-white/5 border-b border-white/10 py-1.5 px-6 md:px-12 text-center relative z-40 w-full transition-colors duration-300">
                <a href="#emergencies" className="inline-flex items-center justify-center gap-2 text-xs md:text-sm font-medium text-white/90 hover:text-white transition-colors">
                    Emergency? View out-of-hours guidance
                    <ArrowRight className="w-3 h-3" />
                </a>
            </div>

            {/* Main Nav Content */}
            <div className="px-6 md:px-12 py-4 grid grid-cols-3 items-center transition-all duration-300">
                {/* Brand */}
                <div className="flex justify-start">
                    <Link to="/" className="text-xl md:text-2xl font-heading font-semibold text-white tracking-tight">
                        MBG<span className="text-mgb-accent">.</span>
                    </Link>
                </div>

                {/* Desktop Links - Centered */}
                <nav className="hidden lg:flex items-center justify-center gap-8">
                    {[
                        ["Services", "/#services"],
                        ["Locations", "/#locations"],
                        ["About", "/#about"],
                        ["Careers", "/#careers"],
                    ].map(([label, path]) => (
                        <a key={label} href={path} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                            {label}
                        </a>
                    ))}
                </nav>

                {/* CTAs */}
                <div className="flex items-center justify-end gap-3 md:gap-4 col-span-2 lg:col-span-1">
                    {selectedLocation && (
                        <a
                            href={`tel:${selectedLocation.phone}`}
                            className="hidden xl:flex items-center gap-2 text-sm font-medium text-white hover:text-mgb-accent transition-colors whitespace-nowrap"
                        >
                            <Phone className="w-4 h-4" />
                            <span>Call {selectedLocation.name}</span>
                        </a>
                    )}
                    <a
                        href="#locations"
                        className="bg-mgb-accent text-mgb-primary px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-medium hover:bg-white hover:text-mgb-primary transition-all cursor-pointer shadow-sm whitespace-nowrap"
                    >
                        Book an appointment
                    </a>
                </div>
            </div>
        </header>
    )
}
