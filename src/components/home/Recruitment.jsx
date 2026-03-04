import { ArrowUpRight } from "lucide-react"

export default function Recruitment() {
    return (
        <section id="careers" className="py-20 bg-mgb-background relative overflow-hidden">

            {/* Decorative Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-mgb-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-mgb-primary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-heading text-mgb-primary mb-6 tracking-tight">
                    Veterinary careers across Worcestershire
                </h2>

                <p className="text-mgb-text/80 text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                    View our current clinical and support vacancies across our four practices.
                </p>

                <a
                    href="/careers"
                    className="inline-flex items-center gap-2 border-b-2 border-mgb-accent pb-1 text-mgb-primary font-medium hover:text-mgb-accent hover:border-mgb-primary transition-colors group"
                >
                    View current opportunities
                    <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
            </div>
        </section>
    )
}
