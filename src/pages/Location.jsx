import { useParams, Link } from "react-router-dom"
import { useLocationContext } from "../context/LocationContext"
import { MapPin, Clock, Phone, ArrowLeft, Star, AlertCircle } from "lucide-react"
import { useEffect } from "react"

export default function LocationPage() {
    const { locationId } = useParams()
    const { LOCATIONS, setSelectedLocationId } = useLocationContext()

    const locationInfo = LOCATIONS.find(loc => loc.id === locationId)

    useEffect(() => {
        // Keep global context in sync if entering direct URL
        if (locationInfo) {
            setSelectedLocationId(locationInfo.id)
        }
        window.scrollTo(0, 0)
    }, [locationId, locationInfo, setSelectedLocationId])

    if (!locationInfo) {
        return (
            <div className="pt-32 pb-24 min-h-[60vh] flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-heading text-mgb-primary mb-4">Practice Not Found</h1>
                <Link to="/#locations" className="text-mgb-accent hover:text-mgb-primary transition-colors flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Return to Locations
                </Link>
            </div>
        )
    }

    return (
        <div className="pt-24 min-h-screen bg-mgb-background">

            {/* Location Header */}
            <div className="bg-mgb-primary text-white py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                    <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 text-sm uppercase tracking-wider">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-heading mb-4 tracking-tight">
                                {locationInfo.name} Practice
                            </h1>
                            <p className="text-white/80 text-lg md:text-xl font-light">
                                Committed to delivering exceptional veterinary care to the {locationInfo.town} community.
                            </p>
                        </div>
                        <a
                            href={`tel:${locationInfo.phone}`}
                            className="shrink-0 bg-mgb-accent text-mgb-primary px-8 py-4 rounded-full font-medium hover:bg-white transition-colors flex items-center gap-2"
                        >
                            <Phone className="w-5 h-5" />
                            Call Practice
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 max-w-5xl py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-12">
                        <section className="bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-mgb-accent/10 rounded-full blur-2xl" />
                            <h2 className="text-2xl font-heading text-mgb-primary mb-6">About {locationInfo.town}</h2>
                            <p className="text-mgb-text/80 leading-relaxed mb-6">
                                Our {locationInfo.name} branch stands as a cornerstone of the MBG Veterinary Group. Fully equipped with modern diagnostic suites, dedicated surgical theatres, and separate hospitalisation wards to minimize stress for your animals.
                            </p>
                            <p className="text-mgb-text/80 leading-relaxed">
                                Whether bringing a new puppy for their first health check or managing complex chronic conditions in older pets, our established clinical team guarantees continuity of care and familiar, reassuring faces upon every visit.
                            </p>
                        </section>

                        {/* Simulated Reviews Snippet */}
                        <section>
                            <h3 className="text-xl font-heading text-mgb-primary mb-6 flex items-center gap-2">
                                <Star className="w-5 h-5 text-mgb-accent fill-mgb-accent" />
                                Client Experiences
                            </h3>
                            <div className="bg-mgb-surface p-6 rounded-2xl border border-mgb-primary/10 italic text-mgb-text/80">
                                &quot;The continuity of care here is unmatched. It’s wonderful to see the same vet who knows my dog’s history inside and out. The team at {locationInfo.town} always go above and beyond.&quot;
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-mgb-primary text-white p-8 rounded-3xl sticky top-32">
                            <h3 className="text-xl font-heading mb-6 border-b border-white/20 pb-4">Contact Details</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-5 h-5 text-mgb-accent shrink-0 mt-1" />
                                    <p className="text-white/90 text-sm leading-relaxed">{locationInfo.address}</p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Clock className="w-5 h-5 text-mgb-accent shrink-0 mt-1" />
                                    <div className="text-sm text-white/90">
                                        <p className="font-medium mb-1">Standard Hours</p>
                                        <p className="text-white/70">{locationInfo.hours}</p>
                                        <p className="text-white/70 mt-1">Saturday: 9:00am - 12:30pm</p>
                                        <p className="text-white/70 mt-1">Sunday: Closed</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <AlertCircle className="w-5 h-5 text-mgb-accent shrink-0 mt-1" />
                                    <div className="text-sm text-white/90">
                                        <p className="font-medium mb-1">Out of Hours</p>
                                        <p className="text-white/70">In an emergency outside of these hours, please call our main line. You will be redirected to our dedicated out-of-hours provider.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-64 bg-gray-200 rounded-3xl overflow-hidden relative">
                            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1474&auto=format&fit=crop" alt="Map View" className="w-full h-full object-cover opacity-60 grayscale blur-sm" />
                            <div className="absolute inset-0 flex items-center justify-center bg-white/20 backdrop-blur-sm">
                                <span className="text-sm font-medium text-mgb-primary bg-white/80 px-4 py-2 rounded-full shadow-sm">Map Integration</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
