import Image from "next/image";
import React from "react";

const PortfolioSection = () => {
  return (
    <section id="portfolio">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="font-bold text-white text-[48px] text-center mb-[32px] max-lg:text-4xl max-lg:leading-normal max-sm:text-3xl">
            Портфолио
          </h2>
          <div className="flex flex-wrap gap-[32px] justify-center relative">
            <div className="absolute bottom-0 left-0 w-[243px] h-[69px] bg-gradient-to-r from-[#9B51E0] to-[#3081ED] blur-[96px]"></div>
            <div className="absolute top-0 right-0 w-[243px] h-[69px] bg-gradient-to-r from-[#9B51E0] to-[#3081ED] blur-[96px]"></div>
            <div className="portfolio-gradient-border w-[623px] text-[24px] text-white font-bold max-lg:text-[20px] max-sm:text-[18px] max-sm:w-full">
              <h3>Лендинг diaz-art.com</h3>
              <div className="relative w-full h-[336px] max-sm:h-[200px]">
                <Image
                  src="/Безымянный-front.png"
                  width={516}
                  height={336}
                  className="absolute top-0 w-auto h-full object-cover"
                  alt=""
                />
                <Image
                  src="/Безымянный-portrait.png"
                  width={146}
                  height={289}
                  className="absolute bottom-0 right-0 h-[289px] max-sm:w-auto max-sm:h-full max-sm:object-cover"
                  alt=""
                />
              </div>
              <p className="text-[#E2E2E2] font-normal text-base mt-[24px]">
                Платформа для онлайн-бронирования песочных мастер-классов.
                Реализована адаптивная верстка, интерактивные формы,
                SEO-оптимизация.
              </p>
              <div className="flex gap-[16px] mt-[24px] text-[16px] font-semibold flex-wrap max-sm:text-[14px] max-sm:gap-[8px]">
                <span className="px-[16px] border border-[#D7D7D7] rounded-[16px]">
                  HTML
                </span>
                <span className="px-[16px] border border-[#D7D7D7] rounded-[16px]">
                  CSS
                </span>
                <span className="px-[16px] border border-[#D7D7D7] rounded-[16px]">
                  JS
                </span>
                <span className="px-[16px] border border-[#D7D7D7] rounded-[16px]">
                  WordPress
                </span>
              </div>
            </div>
            <div className="portfolio-gradient-border w-[623px] text-[24px] text-white font-bold max-lg:text-[20px] max-sm:text-[18px] max-sm:w-full">
              <h3>TypeWeather App</h3>
              <div className="relative w-full h-[336px] max-sm:h-[200px]">
                <Image
                  src="/Безымянный2-front.png"
                  width={516}
                  height={336}
                  className="absolute top-0 w-auto h-full object-cover"
                  alt=""
                />
                <Image
                  src="/Безымянный2-portrait.png"
                  width={146}
                  height={289}
                  className="absolute bottom-0 right-0 h-[289px] max-sm:w-auto max-sm:h-full max-sm:object-cover"
                  alt=""
                />
              </div>
              <p className="text-[#E2E2E2] font-normal text-base mt-[24px]">
                Платформа для отображения актуального прогноза погоды.
                Реализована адаптивная верстка, подключение внешнего API,
                динамическое обновление данных.
              </p>
              <div className="flex gap-[16px] mt-[24px] text-[16px] font-semibold flex-wrap max-sm:text-[14px] max-sm:gap-[8px]">
                <span className="px-[16px] border border-[#D7D7D7] rounded-[16px]">
                  React
                </span>
                <span className="px-[16px] border border-[#D7D7D7] rounded-[16px]">
                  CSS
                </span>
                <span className="px-[16px] border border-[#D7D7D7] rounded-[16px]">
                  OpenWeather API
                </span>
              </div>
            </div>
            <div className="portfolio-gradient-border w-[623px] text-[24px] text-white font-bold max-lg:text-[20px] max-sm:text-[18px] max-sm:w-full">
              <h3>Лендинг CarMusc</h3>
              <div className="relative w-full h-[336px] max-sm:h-[200px]">
                <Image
                  src="/Безымянный3-front.png"
                  width={516}
                  height={336}
                  className="absolute top-0 w-auto h-full object-cover"
                  alt=""
                />
                <Image
                  src="/Безымянный3-portrait.png"
                  width={146}
                  height={289}
                  className="absolute bottom-0 right-0 h-[289px] max-sm:w-auto max-sm:h-full max-sm:object-cover"
                  alt=""
                />
              </div>
              <p className="text-[#E2E2E2] font-normal text-base mt-[24px]">
                Лендинг для студии оклейки автомобилей. Реализована адаптивная
                верстка, формы захвата заявок, акцент на визуальный контент и
                SEO-оптимизация.
              </p>
              <div className="flex gap-[16px] mt-[24px] text-[16px] font-semibold flex-wrap max-sm:text-[14px] max-sm:gap-[8px]">
                <span className="px-[16px] border border-[#D7D7D7] rounded-[16px]">
                  HTML
                </span>
                <span className="px-[16px] border border-[#D7D7D7] rounded-[16px]">
                  CSS
                </span>
                <span className="px-[16px] border border-[#D7D7D7] rounded-[16px]">
                  JS
                </span>
              </div>
            </div>
            <div className="portfolio-gradient-border w-[623px] text-[24px] text-white font-bold max-lg:text-[20px] max-sm:text-[18px] max-sm:w-full">
              <h3>Лендинг TeaLuxe</h3>
              <div className="relative w-full h-[336px] max-sm:h-[200px]">
                <Image
                  src="/Безымянный4-front.png"
                  width={516}
                  height={336}
                  className="absolute top-0 w-auto h-full object-cover"
                  alt=""
                />
                <Image
                  src="/Безымянный4-portrait.png"
                  width={146}
                  height={289}
                  className="absolute bottom-0 right-0 h-[289px] max-sm:w-auto max-sm:h-full max-sm:object-cover"
                  alt=""
                />
              </div>
              <p className="text-[#E2E2E2] font-normal text-base mt-[24px]">
                Лендинг для бренда натуральных чаёв. Реализована адаптивная
                верстка, удобная структура для презентации продуктов, формы
                заказа и SEO-оптимизация.
              </p>
              <div className="flex gap-[16px] mt-[24px] text-[16px] font-semibold flex-wrap max-sm:text-[14px] max-sm:gap-[8px]">
                <span className="px-[16px] border border-[#D7D7D7] rounded-[16px]">
                  HTML
                </span>
                <span className="px-[16px] border border-[#D7D7D7] rounded-[16px]">
                  CSS
                </span>
                <span className="px-[16px] border border-[#D7D7D7] rounded-[16px]">
                  JS
                </span>
                <span className="px-[16px] border border-[#D7D7D7] rounded-[16px]">
                  WordPress
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PortfolioSection };
