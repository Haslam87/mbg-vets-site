import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import LocationPage from "./pages/Location"
import ServicePage from "./pages/Service"
import { LocationProvider } from "./context/LocationContext"

function App() {
  return (
    <LocationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="locations/:locationId" element={<LocationPage />} />
            <Route path="services/:serviceId" element={<ServicePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LocationProvider>
  )
}

export default App
