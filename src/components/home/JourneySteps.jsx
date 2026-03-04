import { MousePointerClick, CalendarPlus, HeartHandshake } from "lucide-react"

export default function JourneySteps() {
    const steps = [
        {
            icon: <MousePointerClick className="w-6 h-6 text-mgb-accent" />,
            title: "Choose Practice",
            desc: "Select the specific clinic closest to your location for tailored contact details."
        },
        {
            icon: <CalendarPlus className="w-6 h-6 text-mgb-accent" />,
            title: "Contact & Register",
            desc: "Reach out via phone to speak directly with our reception team to book or register."
        },
        {
            icon: <HeartHandshake className="w-6 h-6 text-mgb-accent" />,
            title: "Visit with Confidence",
            desc: "Access clear location directions and dedicated out-of-hours guidance."
        }
    ]

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading text-mgb-primary mb-4 tracking-tight">
                        What to do next
                    </h2>
                    <p className="text-mgb-text/70 text-lg">
                        A simple process to access our veterinary services.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.25rem] left-[15%] right-[15%] h-px bg-mgb-accent/20 border-dashed border-t-2" />

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-full bg-mgb-background border border-mgb-secondary/10 flex items-center justify-center mb-6 relative z-10 group-hover:bg-mgb-surface transition-colors shadow-sm">
                                {step.icon}
                                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-mgb-primary text-white text-xs font-bold flex items-center justify-center">
                                    {idx + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-heading font-semibold text-mgb-primary mb-3">
                                {step.title}
                            </h3>
                            <p className="text-mgb-text/70 text-sm leading-relaxed max-w-xs">
                                {step.desc}
                            </p>
                        </div>
                    ))}

                </div>

                <div className="mt-16 text-center">
                    <a href="#locations" className="inline-block border-2 border-mgb-primary text-mgb-primary px-8 py-3 rounded-full font-medium hover:bg-mgb-primary hover:text-white transition-colors">
                        Start here
                    </a>
                </div>
            </div>
        </section>
    )
}
