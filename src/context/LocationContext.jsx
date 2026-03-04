import { createContext, useContext, useState, useEffect } from "react"

const LocationContext = createContext()

export const LOCATIONS = [
    { id: "worcester", name: "Worcester", town: "Worcester", phone: "01905 123456", address: "Placeholder Address, Worcester, WR1 1AA", hours: "Mon-Fri 8:30am - 6:30pm" },
    { id: "droitwich-hanbury", name: "Droitwich (Hanbury Road)", town: "Droitwich", phone: "01905 234567", address: "Hanbury Road, Droitwich, WR9 1AA", hours: "Mon-Fri 8:30am - 6:30pm" },
    { id: "droitwich-dodderhill", name: "Droitwich (Dodderhill Court)", town: "Droitwich", phone: "01905 345678", address: "Dodderhill Court, Droitwich, WR9 2AA", hours: "Mon-Fri 8:30am - 6:00pm" },
    { id: "wychbold", name: "Wychbold", town: "Wychbold", phone: "01905 456789", address: "Placeholder Address, Wychbold, WR9 3AA", hours: "Mon-Fri 8:30am - 6:00pm" }
]

export function LocationProvider({ children }) {
    const [selectedLocationId, setSelectedLocationId] = useState(null)

    const selectedLocation = LOCATIONS.find(loc => loc.id === selectedLocationId) || null

    return (
        <LocationContext.Provider value={{ selectedLocation, selectedLocationId, setSelectedLocationId, LOCATIONS }}>
            {children}
        </LocationContext.Provider>
    )
}

export function useLocationContext() {
    return useContext(LocationContext)
}
