import { Link } from "react-router-dom"
import { MapPin, Phone, Heart } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-mgb-primary text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                {/* Brand Column */}
                <div>
                    <h2 className="text-2xl font-heading font-semibold mb-6 flex items-baseline gap-1">
                        MGB<span className="text-mgb-accent">.</span>
                    </h2>
                    <p className="text-white/70 text-sm mb-6 max-w-xs leading-relaxed">
                        Independent veterinary care across Worcestershire. Four practices. One standard of care.
                    </p>

                    <div className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 rounded-full bg-mgb-accent animate-pulse"></span>
                        <span className="text-white/90 font-medium tracking-wide">Taking new registrations</span>
                    </div>
                </div>

                {/* Locations */}
                <div>
                    <h3 className="font-heading text-lg mb-6">Our Practices</h3>
                    <ul className="space-y-4">
                        {["Hartlebury", "Kidderminster", "Stourport", "Bewdley"].map((loc) => (
                            <li key={loc}>
                                <Link to={`/locations/${loc.toLowerCase()}`} className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                                    {loc}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="font-heading text-lg mb-6">Veterinary Services</h3>
                    <ul className="space-y-4">
                        {["Small Animal", "Farm", "Equine"].map((srv) => (
                            <li key={srv}>
                                <Link to={`/services/${srv.toLowerCase().replace(' ', '-')}`} className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                                    {srv}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="font-heading text-lg mb-6">Client Support</h3>
                    <ul className="space-y-4">
                        <li>
                            <Link to="/#emergencies" className="text-mgb-accent hover:text-white transition-colors text-sm flex items-center gap-2">
                                <Heart className="w-4 h-4" />
                                Out-of-hours Guidance
                            </Link>
                        </li>
                        <li>
                            <Link to="/#prescriptions" className="text-white/70 hover:text-white transition-colors text-sm">
                                Repeat Prescriptions
                            </Link>
                        </li>
                        <li>
                            <Link to="/#careers" className="text-white/70 hover:text-white transition-colors text-sm">
                                Careers & Recruitment
                            </Link>
                        </li>
                        <li>
                            <Link to="/#about" className="text-white/70 hover:text-white transition-colors text-sm">
                                About MGB
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
                <p>&copy; {new Date().getFullYear()} MGB Veterinary Group. All rights reserved.</p>
                <div className="flex items-center gap-6">
                    <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
                </div>
            </div>
        </footer>
    )
}
