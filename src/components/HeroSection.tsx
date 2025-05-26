import React from "react";

type HeroSectionProps = {
  onOpenModal: () => void;
};

const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  return (
    <section
      id="hero"
      className="flex h-screen flex-col justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center max-lg:flex-col">
          <div>
            <h1 className="font-semibold text-white leading-[82px] text-[72px] max-w-[880px] max-lg:text-[48px] max-lg:leading-normal max-lg:max-w-none max-sm:text-4xl">
              РАЗРАБОТКА САЙТОВ
            </h1>
            <p className="my-[24px] font-base text-[24px] text-[#E2E2E2] max-w-[637px] leading-[36px] max-lg:leading-normal max-lg:max-w-full max-lg:text-base">
              Разрабатываем сайты, которые работают на результат: привлекают
              клиентов, продают услуги, представляют ваш бизнес на высоте.
            </p>
            <div className="flex gap-[24px] max-sm:flex-col max-sm:text-center">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  onOpenModal();
                }}
                className="cursor-pointer py-[12px] px-[29px] rounded-[16px] leading-[36px] font-semibold text-white text-[24px]
             bg-gradient-to-r from-[#9B51E0] to-[#3081ED]
             hover:brightness-110 hover:shadow-lg transition-all duration-300 max-sm:text-xl max-sm:py-2"
              >
                Оставить заявку
              </a>

              <a
                href="#portfolio"
                className="py-[12px] px-[41px] rounded-[16px] leading-[36px] font-semibold text-[#D7D7D7] text-[24px]
             bg-transparent border border-[#D7D7D7]
             hover:bg-[#D7D7D7] hover:text-[#1F1D2B] transition-all duration-300 max-sm:text-xl max-sm:py-2"
              >
                Портфолио
              </a>
            </div>
          </div>
          <div className="relative max-lg:hidden">
            <img src="/image 2.png" alt="" className="relative z-10" />
            <div className="absolute inset-0 z-0 rounded-full bg-[#FB37FF] blur-[96px] opacity-60"></div>
          </div>
        </div>
      </div>
      <div className="absolute z-0 top-[38px] right-[-183px] w-[629px] h-[47px] rounded-full bg-[#18B2DE] blur-[96px]"></div>
      <div className="absolute z-0 left-[-65px] bottom-[251px] w-[629px] h-[47px] rounded-full bg-[#18B2DE] blur-[96px]"></div>
    </section>
  );
};

export { HeroSection };
