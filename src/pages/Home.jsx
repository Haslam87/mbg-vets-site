import Hero from "../components/home/Hero"
import LocationSelector from "../components/home/LocationSelector"
import Services from "../components/home/Services"

import JourneySteps from "../components/home/JourneySteps"
import Recruitment from "../components/home/Recruitment"

export default function Home() {
    return (
        <>
            <Hero />
            <LocationSelector />
            <Services />

            <JourneySteps />
            <Recruitment />

            {/* Final Conversion Hub as Requested */}
            <section className="py-24 bg-mgb-surface border-t border-mgb-primary/10">
                <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-heading text-mgb-primary mb-6">
                        Ready to find your local practice?
                    </h2>
                    <p className="text-lg text-mgb-text/80 mb-12">
                        Use our location selector above or click below to view all contact routes.
                    </p>
                    <a
                        href="#locations"
                        className="inline-flex items-center justify-center gap-2 bg-mgb-accent text-mgb-primary px-8 py-4 rounded-full font-medium hover:bg-mgb-primary hover:text-white transition-all text-lg"
                    >
                        Select your practice
                    </a>
                </div>
            </section>
        </>
    )
}
