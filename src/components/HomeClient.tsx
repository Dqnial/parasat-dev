"use client";

import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import { HeroSection } from "@/components/HeroSection";
import { Modal } from "@/components/Modal";
import { OurServices } from "@/components/OurServices";
import { PortfolioSection } from "@/components/PortfolioSection";
import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Toaster } from "react-hot-toast";

function HomeClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <Toaster position="top-center" />
        {/* Модальное окно */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        {/* HERO SECTION */}
        <HeroSection onOpenModal={() => setIsModalOpen(true)} />
        {/* НАШИ УСЛУГИ SECTION */}
        <OurServices onOpenModal={() => setIsModalOpen(true)} />
        {/* PORTFOLIO SECTION */}
        <PortfolioSection />
        {/* FAQ SECTION */}
        <FaqSection />
        {/* CTA SECTION */}
        <CtaSection onOpenModal={() => setIsModalOpen(true)} />
      </main>
      <Footer />
    </>
  );
}

export { HomeClient };
