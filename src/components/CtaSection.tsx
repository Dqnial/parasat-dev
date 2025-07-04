import React from "react";

type CtaSectionProps = {
  onOpenModal: () => void;
};

const CtaSection = ({ onOpenModal }: CtaSectionProps) => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="px-[50px] py-[32px] bg-[#18171F] rounded-[32px] relative max-sm:flex max-sm:flex-col">
          <div className="absolute bottom-[86px] left-0 w-full h-[54px] bg-gradient-to-r from-[#9B51E0] to-[#3081ED] blur-[96px]"></div>
          <h2 className="text-white font-bold text-[48px] mb-[8px] max-lg:text-4xl max-lg:leading-normal max-sm:text-3xl">
            Сделаем сайт, который работает на ваш бизнес
          </h2>
          <p className="text-[#E2E2E2] mb-[24px] text-base">
            Оставьте заявку — обсудим вашу задачу, предложим лучшее решение и
            рассчитаем стоимость.
          </p>
          <a
            onClick={(e) => {
              e.preventDefault();
              if (
                typeof window !== "undefined" &&
                typeof window.gtagSendEvent === "function"
              ) {
                window.gtagSendEvent(null);
              }
              onOpenModal();
            }}
            className="cursor-pointer py-[12px] px-[72px] rounded-[16px] leading-[36px] font-semibold text-white text-xl
             bg-gradient-to-r from-[#9B51E0] to-[#3081ED]
             hover:brightness-110 hover:shadow-lg transition-all duration-300 max-sm:w-full max-sm:text-center max-sm:py-[6px]"
          >
            Заказать
          </a>
        </div>
      </div>
    </section>
  );
};

export { CtaSection };
