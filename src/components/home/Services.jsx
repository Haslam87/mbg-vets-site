import { ArrowRight, Cat, Tractor, TriangleRight } from "lucide-react"

import equineImg from "../../assets/equine.png"

const SERVICES = [
    {
        id: "small-animal",
        title: "Small Animal",
        audience: "For your pets",
        image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1470&auto=format&fit=crop",
        needs: ["Routine checks & vaccinations", "Complex diagnostics", "Preventative care plans"]
    },
    {
        id: "farm",
        title: "Farm",
        audience: "For agricultural needs",
        image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1473&auto=format&fit=crop",
        needs: ["Herd health planning", "Emergency call-outs", "Routine fertility work"]
    },
    {
        id: "equine",
        title: "Equine",
        audience: "For horses & donkeys",
        image: equineImg,
        needs: ["Vettings & pre-purchase", "Lameness investigations", "Routine dental care"]
    }
]

export default function Services() {
    return (
        <section id="services" className="py-24 bg-mgb-surface">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-heading text-mgb-primary mb-4 tracking-tight">
                            Comprehensive care.
                        </h2>
                        <p className="text-lg text-mgb-text/80 leading-relaxed font-light">
                            Clear, structured veterinary provision for all species across our local network.
                        </p>
                    </div>
                    <a href="/services" className="inline-flex items-center gap-2 text-mgb-accent font-medium hover:text-mgb-primary transition-colors whitespace-nowrap">
                        View all services
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SERVICES.map((srv) => (
                        <div key={srv.id} className="group relative rounded-3xl overflow-hidden bg-mgb-background flex flex-col h-full border border-black/5">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-mgb-primary/20 mix-blend-multiply z-10 transition-opacity group-hover:opacity-0" />
                                <img
                                    src={srv.image}
                                    alt={srv.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute top-4 left-4 z-20 bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                                    {srv.audience}
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-heading text-mgb-primary mb-6">{srv.title}</h3>

                                <ul className="space-y-4 flex-1 mb-8">
                                    {srv.needs.map((need, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-mgb-text/80 text-sm">
                                            <TriangleRight className="w-4 h-4 text-mgb-accent shrink-0 mt-0.5" />
                                            {need}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={`/services/${srv.id}`}
                                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border-2 border-mgb-primary text-mgb-primary font-medium hover:bg-mgb-primary hover:text-white transition-all group-hover:border-transparent group-hover:bg-mgb-primary group-hover:text-white"
                                >
                                    Explore {srv.title}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
