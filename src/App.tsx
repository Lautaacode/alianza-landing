import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { Home } from "./pages/Home";
import { FloatingWhatsAppButton } from "./components/branding/icons/whatsapp/FloatingWhatsAppButton";
import { HeroVisibilityProvider } from "./components/sections/hero/hero-visibility.context";

export default function App() {
  return (
    <BrowserRouter>
      <HeroVisibilityProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <FloatingWhatsAppButton />
        </MainLayout>
      </HeroVisibilityProvider>
    </BrowserRouter>
  )
}



