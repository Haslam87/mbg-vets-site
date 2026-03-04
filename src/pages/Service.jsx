import { useParams, Link } from "react-router-dom"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { useEffect } from "react"

const SERVICE_DETAILS = {
    "small-animal": {
        title: "Small Animal",
        subtitle: "Comprehensive care for your beloved family pets.",
        description: "From routine vaccinations and health checks to complex diagnostics and surgical procedures, our small animal team provides compassionate, evidence-based care tailored to dogs, cats, and smaller mammals.",
        img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1470&auto=format&fit=crop",
        features: [
            "Preventative healthcare and vaccination programs",
            "In-house laboratory for rapid diagnostics",
            "Digital radiography and ultrasonography",
            "Dedicated surgical suites and separate recovery wards",
            "Dental assessment and hygiene procedures",
            "Nutritional and behavioral advice"
        ]
    },
    "farm": {
        title: "Farm",
        subtitle: "Dedicated agricultural expertise across the county.",
        description: "Our experienced farm animal vets understand the commercial realities of modern agriculture. We provide proactive herd and flock health planning alongside responsive emergency care to safeguard your livestock and livelihood.",
        img: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1473&auto=format&fit=crop",
        features: [
            "Routine herd health and fertility visits",
            "24/7 emergency call-out service",
            "TB testing and export certification",
            "Mastitis and lameness investigations",
            "Youngstock management planning",
            "Flock health and parasite control strategies"
        ]
    },
    "equine": {
        title: "Equine",
        subtitle: "Specialist care for horses, ponies, and donkeys.",
        description: "Whether you own a high-performance competition horse, a riding club all-rounder, or a beloved companion pony, our equine veterinary team delivers expert veterinary care directly to your yard.",
        img: "https://images.unsplash.com/photo-1595085610896-bc3413eb4d8e?q=80&w=1470&auto=format&fit=crop",
        features: [
            "Routine vaccinations and biosecurity advice",
            "Pre-purchase examinations (vettings)",
            "Comprehensive lameness investigations",
            "Portable digital radiography and scanning",
            "Routine and advanced dental care",
            "Reproductive services and stud medicine"
        ]
    }
}

export default function ServicePage() {
    const { serviceId } = useParams()
    const service = SERVICE_DETAILS[serviceId]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [serviceId])

    if (!service) {
        return (
            <div className="pt-32 pb-24 min-h-[60vh] flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-heading text-mgb-primary mb-4">Service Not Found</h1>
                <Link to="/#services" className="text-mgb-accent hover:text-mgb-primary transition-colors flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Return to Services
                </Link>
            </div>
        )
    }

    return (
        <div className="pt-24 min-h-screen bg-mgb-background">

            {/* Hero Header */}
            <div className="bg-mgb-primary text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 mix-blend-multiply">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="container relative z-10 mx-auto px-6 md:px-12 max-w-4xl text-center">
                    <Link to="/#services" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 text-sm uppercase tracking-wider">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-heading mb-6 tracking-tight">
                        {service.title} Veterinary Services
                    </h1>
                    <p className="text-white/80 text-xl md:text-2xl font-light italic font-heading max-w-2xl mx-auto">
                        {service.subtitle}
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 max-w-5xl py-16 md:py-24">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-heading text-mgb-primary mb-6">Expertise built on experience.</h2>
                        <p className="text-lg text-mgb-text/80 leading-relaxed font-light mb-8">
                            {service.description}
                        </p>
                        <a href="#locations" className="inline-flex items-center gap-2 bg-mgb-accent text-mgb-primary px-8 py-4 rounded-full font-medium hover:bg-mgb-primary hover:text-white transition-colors">
                            Find your nearest practice
                        </a>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="relative rounded-3xl overflow-hidden border border-black/5 shadow-sm">
                            <img src={service.img} alt={service.title} className="w-full h-auto object-cover aspect-square md:aspect-[4/3]" />
                        </div>
                    </div>
                </div>

                {/* Core Provision Checklist */}
                <div className="bg-white p-10 md:p-16 rounded-3xl border border-black/5 shadow-sm">
                    <h3 className="text-2xl font-heading text-mgb-primary mb-8 border-b border-mgb-primary/10 pb-6 text-center">Core Clinical Provision</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-mgb-background transition-colors">
                                <CheckCircle2 className="w-6 h-6 text-mgb-accent shrink-0" />
                                <span className="text-mgb-text/80 pt-0.5">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
