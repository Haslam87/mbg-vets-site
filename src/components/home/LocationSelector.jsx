import { MapPin, Clock, ArrowRight, Check } from "lucide-react"
import { Link } from "react-router-dom"
import { useLocationContext } from "../../context/LocationContext"
import { cn } from "../../lib/utils"

export default function LocationSelector() {
    const { LOCATIONS, selectedLocationId, setSelectedLocationId } = useLocationContext()

    return (
        <section id="locations" className="pt-12 pb-24 md:pt-16 bg-mgb-background">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                <div className="mb-12 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-heading text-mgb-primary mb-4 tracking-tight">
                        Find your practice
                    </h2>
                    <p className="text-mgb-text/80 text-lg">
                        Select your preferred location to view contact details, opening hours, and dedicated practice information.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {LOCATIONS.map((loc) => {
                        const isSelected = selectedLocationId === loc.id
                        return (
                            <div
                                key={loc.id}
                                className={cn(
                                    "relative p-6 rounded-3xl text-left transition-all duration-300 border-2 overflow-hidden group focus-within:ring-2 focus-within:ring-mgb-primary focus-within:ring-offset-2",
                                    isSelected
                                        ? "border-mgb-primary bg-mgb-surface shadow-md scale-[1.02]"
                                        : "border-black/5 bg-white hover:border-mgb-accent/50 hover:shadow-sm hover:scale-[1.01]"
                                )}
                            >
                                {/* The main clickable overlay for the card */}
                                <Link
                                    to={`/locations/${loc.id}`}
                                    onClick={() => setSelectedLocationId(loc.id)}
                                    onKeyDown={(e) => {
                                        if (e.key === ' ' || e.key === 'Enter') {
                                            e.preventDefault()
                                            e.currentTarget.click()
                                        }
                                    }}
                                    aria-label={`View full details for ${loc.name} practice`}
                                    className="absolute inset-0 z-10 focus:outline-none"
                                />

                                <div className="relative z-0 pointer-events-none">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={cn(
                                            "p-3 rounded-2xl transition-colors",
                                            isSelected ? "bg-mgb-primary text-white" : "bg-mgb-background text-mgb-primary group-hover:bg-mgb-accent/20"
                                        )}>
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        {isSelected && (
                                            <div className="bg-mgb-primary text-white p-1 rounded-full animate-in fade-in zoom-in duration-300">
                                                <Check className="w-4 h-4" />
                                            </div>
                                        )}
                                    </div>

                                    <h3 className="text-2xl font-heading font-semibold text-mgb-primary mb-2">
                                        {loc.name}
                                    </h3>

                                    <p className="text-sm text-mgb-text/70 mb-4 h-10">
                                        {loc.address}
                                    </p>
                                </div>

                                <div className={cn(
                                    "relative z-20 pt-4 border-t transition-colors",
                                    isSelected ? "border-mgb-primary/10" : "border-black/5"
                                )}>
                                    <div className="flex items-center gap-2 text-sm text-mgb-text/80 font-medium font-mono mb-4 pointer-events-none">
                                        <Clock className="w-4 h-4 text-mgb-accent" />
                                        {loc.hours.split(" ")[1]} - {loc.hours.split(" ")[3]}
                                    </div>

                                    <div className="space-y-3">
                                        <a
                                            href={`tel:${loc.phone}`}
                                            className={cn(
                                                "flex items-center justify-center w-full py-2.5 rounded-xl font-medium transition-colors border focus:outline-none focus:ring-2 focus:ring-mgb-primary focus:ring-offset-2",
                                                isSelected
                                                    ? "bg-mgb-primary text-white border-transparent hover:bg-mgb-primary/90"
                                                    : "bg-transparent text-mgb-primary border-mgb-primary/20 hover:border-mgb-primary hover:bg-mgb-primary/5"
                                            )}
                                            aria-label={`Call ${loc.name} practice at ${loc.phone}`}
                                        >
                                            Call {loc.phone}
                                        </a>

                                        {isSelected && (
                                            <div className="flex items-center justify-center w-full py-2.5 rounded-xl font-medium text-mgb-primary transition-colors animate-in fade-in slide-in-from-bottom-2 duration-300 pointer-events-none">
                                                Contact this practice
                                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
