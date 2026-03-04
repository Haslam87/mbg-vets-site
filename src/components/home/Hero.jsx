import { useEffect, useRef } from "react"
import { ArrowRight, Phone, MapPin, ShieldCheck, CalendarCheck, Award, PhoneCall } from "lucide-react"
import { useLocationContext } from "../../context/LocationContext"
import gsap from "gsap"

import heroImg from "../../assets/hero.png"

export default function Hero() {
    const heroRef = useRef(null)
    const { LOCATIONS, selectedLocationId, setSelectedLocationId, selectedLocation } = useLocationContext()

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".hero-element",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }
            )
        }, heroRef)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={heroRef} className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0 bg-mgb-primary overflow-hidden">
                <img
                    src={heroImg}
                    alt="Veterinary professional gently examining a dog"
                    className="w-full h-full object-cover object-[75%_top] md:object-[85%_top] opacity-30 blur-sm mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-mgb-primary/95 via-mgb-primary/80 to-mgb-primary/30" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mgb-primary/50 to-mgb-background" />
            </div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 mt-10 md:mt-20">
                <div className="max-w-4xl">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <div className="hero-element inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium tracking-wide">
                            <MapPin className="w-4 h-4 text-mgb-accent" />
                            4 Local Practices
                        </div>
                        <div className="hero-element inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium tracking-wide">
                            <ShieldCheck className="w-4 h-4 text-mgb-accent" />
                            Serving Worcestershire for over 60 years
                        </div>
                    </div>

                    <h1 className="hero-element text-5xl md:text-7xl lg:text-8xl font-heading font-medium text-white leading-[1.05] tracking-tight mb-8 text-balance">
                        Local veterinary care you can trust.
                    </h1>

                    <div className="hero-element h-px w-64 bg-mgb-accent mb-12" />

                    <h2 className="hero-element text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-light max-w-2xl text-balance">
                        Independent veterinary care for pets, farm animals and equine — delivered by experienced local teams across Worcestershire.
                    </h2>

                    {/* Direct Practice Selector */}
                    <div className="hero-element mb-3">
                        <span className="text-white/70 text-sm font-medium tracking-wide uppercase">Choose your nearest practice</span>
                    </div>
                    <div className="hero-element flex flex-wrap gap-3 mb-10">
                        {LOCATIONS.map(loc => (
                            <button
                                key={loc.id}
                                onClick={() => setSelectedLocationId(loc.id)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedLocationId === loc.id
                                    ? "bg-mgb-accent text-mgb-primary shadow-sm"
                                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                                    }`}
                            >
                                {loc.name}
                            </button>
                        ))}
                    </div>

                    <div className="hero-element flex flex-col sm:flex-row gap-4 transition-all duration-300">
                        {selectedLocation ? (
                            <>
                                <a href={`tel:${selectedLocation.phone}`} className="inline-flex items-center justify-center gap-2 bg-mgb-accent text-mgb-primary px-10 py-5 rounded-full font-medium hover:bg-white transition-colors group">
                                    Book an appointment
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a href={`/locations/${selectedLocation.id}`} className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-mgb-accent/50 px-10 py-5 rounded-full font-medium hover:bg-white/10 transition-colors">
                                    Contact {selectedLocation.name}
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </>
                        ) : (
                            <a href="#locations" className="inline-flex items-center justify-center gap-2 bg-mgb-accent text-mgb-primary px-10 py-5 rounded-full font-medium hover:bg-white transition-colors group">
                                Book an appointment
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Trust Signals Integrated Area */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 mt-32 md:mt-48 pb-0 md:pb-4">
                <div className="hero-element bg-mgb-primary rounded-3xl p-6 md:p-10 shadow-lg border border-mgb-primary/10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/20 text-mgb-surface text-center">

                        <div className="flex flex-col items-center justify-center p-4">
                            <Award className="w-8 h-8 text-mgb-accent mb-3" />
                            <span className="font-heading font-semibold text-lg mb-1 drop-shadow-sm">RCVS Accredited</span>
                            <span className="text-white/80 text-xs uppercase tracking-wider font-medium">Practice Standards</span>
                        </div>

                        <div className="flex flex-col items-center justify-center p-4">
                            <ShieldCheck className="w-8 h-8 text-mgb-accent mb-3" />
                            <span className="font-heading font-semibold text-lg mb-1 drop-shadow-sm">Local Continuity</span>
                            <span className="text-white/80 text-xs uppercase tracking-wider font-medium">Same Team, Every Visit</span>
                        </div>

                        <div className="flex flex-col items-center justify-center p-4">
                            <CalendarCheck className="w-8 h-8 text-mgb-accent mb-3" />
                            <span className="font-heading font-semibold text-lg mb-1 drop-shadow-sm">Book Today</span>
                            <span className="text-white/80 text-xs uppercase tracking-wider font-medium">Taking New Clients</span>
                        </div>

                        <div className="flex flex-col items-center justify-center p-4">
                            <PhoneCall className="w-8 h-8 text-mgb-accent mb-3" />
                            <a href="#emergencies" className="font-heading font-semibold text-lg mb-1 hover:text-white transition-colors drop-shadow-sm">24/7 Emergencies</a>
                            <span className="text-white/80 text-xs uppercase tracking-wider font-medium">Out-of-hours Support</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
