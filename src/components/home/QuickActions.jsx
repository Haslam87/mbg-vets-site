import { useEffect, useRef } from "react"
import { CalendarCheck, AlertCircle, Pill, PawPrint, ArrowRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function QuickActions() {
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".action-card",
                { y: 30, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                    }
                }
            )
        }, containerRef)
        return () => ctx.revert()
    }, [])

    const actions = [
        {
            title: "Book an appointment",
            description: "Schedule a visit with your nearest practice.",
            cta: "Book now",
            icon: CalendarCheck,
            link: "#locations"
        },
        {
            title: "Emergency care",
            description: "If your pet needs urgent attention, view emergency guidance and contact your nearest practice.",
            cta: "Get emergency help",
            icon: AlertCircle,
            link: "#emergencies",
        },
        {
            title: "Repeat prescriptions",
            description: "Order repeat medication quickly and securely.",
            cta: "Order medication",
            icon: Pill,
            link: "#prescriptions"
        },
        {
            title: "Register as a client",
            description: "Join one of our practices and access trusted local veterinary care.",
            cta: "Register today",
            icon: PawPrint,
            link: "#register"
        }
    ]

    return (
        <section ref={containerRef} className="py-16 md:py-24 bg-mgb-background relative z-20">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading text-mgb-primary tracking-tight">
                        How can we help today?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {actions.map((action, i) => (
                        <a
                            key={action.title}
                            href={action.link}
                            className="action-card group flex flex-col bg-white p-8 rounded-2xl md:rounded-[1.5rem] shadow-sm hover:shadow-md transition-all duration-300 border border-black/5 hover:border-mgb-accent/40 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-mgb-primary focus:ring-offset-2 focus:ring-offset-mgb-background"
                        >
                            <div className="w-14 h-14 rounded-full bg-mgb-background flex items-center justify-center mb-6 text-mgb-primary group-hover:bg-mgb-accent group-hover:text-mgb-primary transition-colors">
                                <action.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-heading font-semibold text-mgb-primary mb-3">
                                {action.title}
                            </h3>
                            <p className="text-mgb-text/80 text-sm leading-relaxed mb-8 flex-grow">
                                {action.description}
                            </p>
                            <div className="flex items-center text-sm font-medium text-mgb-primary group-hover:text-mgb-accent transition-colors mt-auto">
                                {action.cta}
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
