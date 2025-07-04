import React from "react";

type OurServicesProps = {
  onOpenModal: () => void;
};

const OurServices = ({ onOpenModal }: OurServicesProps) => {
  return (
    <section id="services">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-white text-[48px] text-center max-lg:text-4xl max-lg:leading-normal max-sm:text-3xl">
          Наши услуги
        </h2>
        <div className="flex justify-between flex-wrap gap-[24px] mt-[14px]">
          <div className="bg-[#ffffff08] p-[30px] rounded-[32px] w-[47%] h-[320px] flex flex-col justify-between max-lg:w-full max-md:h-auto max-sm:p-[16px] max-sm:rounded-xl">
            <div>
              <h3 className="text-white font-bold text-[24px] max-lg:text-[18px]">
                Лендинг-пейдж
              </h3>
              <p className="mt-[15px] text-[#E2E2E2] text-[18px] max-lg:text-base">
                Одностраничный сайт для эффективного представления вашего
                продукта или услуги. Идеален для старта, даже без портфолио и
                отзывов он поможет привлечь первых клиентов.
              </p>
            </div>

            <div className="flex items-end justify-between max-md:mt-[24px] max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:gap-[8px]">
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
                className="cursor-pointer py-[12px] px-[52px] rounded-[16px] leading-[36px] font-semibold text-white text-xl
             bg-gradient-to-r from-[#9B51E0] to-[#3081ED]
             hover:brightness-110 hover:shadow-lg transition-all duration-300 max-lg:py-[6px] max-lg:px-[32px] max-sm:w-full"
              >
                Заказать
              </a>

              <span className="text-[#E2E2E2] text-[20px] max-lg:text-base">
                от 7 дней
              </span>
            </div>
          </div>
          <div className="bg-[#ffffff08] p-[30px] rounded-[32px] w-[47%] h-[320px] flex flex-col justify-between max-lg:w-full max-md:h-auto max-sm:p-[16px] max-sm:rounded-xl">
            <div>
              <h3 className="text-white font-bold text-[24px] max-lg:text-[18px]">
                Корпоративный сайт
              </h3>
              <p className="mt-[15px] text-[#E2E2E2] text-[18px] max-lg:text-base">
                Многостраничный сайт с продуманной структурой, который подробно
                рассказывает о вашей компании, демонстрирует услуги и формирует
                доверие к бренду.
              </p>
            </div>

            <div className="flex items-end justify-between max-md:mt-[24px] max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:gap-[8px]">
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
                className="cursor-pointer py-[12px] px-[52px] rounded-[16px] leading-[36px] font-semibold text-white text-xl
             bg-gradient-to-r from-[#9B51E0] to-[#3081ED]
             hover:brightness-110 hover:shadow-lg transition-all duration-300 max-lg:py-[6px] max-lg:px-[32px] max-sm:w-full"
              >
                Заказать
              </a>

              <span className="text-[#E2E2E2] text-[20px] max-lg:text-base">
                от 10 дней
              </span>
            </div>
          </div>
          <div className="bg-[#ffffff08] p-[30px] rounded-[32px] w-[47%] h-[320px] flex flex-col justify-between max-lg:w-full max-md:h-auto max-sm:p-[16px] max-sm:rounded-xl">
            <div>
              <h3 className="text-white font-bold text-[24px] max-lg:text-[18px]">
                Интернет-магазин
              </h3>
              <p className="mt-[15px] text-[#E2E2E2] text-[18px] max-lg:text-base">
                Полноценная система онлайн-продаж с удобным каталогом,
                фильтрами, оплатой и интеграцией нужных сервисов. Всё, чтобы ваш
                бизнес работал и продавал 24/7.
              </p>
            </div>

            <div className="flex items-end justify-between max-md:mt-[24px] max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:gap-[8px]">
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
                className="cursor-pointer py-[12px] px-[52px] rounded-[16px] leading-[36px] font-semibold text-white text-xl
             bg-gradient-to-r from-[#9B51E0] to-[#3081ED]
             hover:brightness-110 hover:shadow-lg transition-all duration-300 max-lg:py-[6px] max-lg:px-[32px] max-sm:w-full"
              >
                Заказать
              </a>

              <span className="text-[#E2E2E2] text-[20px] max-lg:text-base">
                от 20 дней
              </span>
            </div>
          </div>
          <div className="bg-[#ffffff08] p-[30px] rounded-[32px] w-[47%] h-[320px] flex flex-col justify-between max-lg:w-full max-md:h-auto max-sm:p-[16px] max-sm:rounded-xl">
            <div>
              <h3 className="text-white font-bold text-[24px] max-lg:text-[18px]">
                Сайт-портфолио
              </h3>
              <p className="mt-[15px] text-[#E2E2E2] text-[18px] max-lg:text-base">
                Персональный сайт для демонстрации ваших проектов, кейсов и
                достижений. Помогает заявить о себе и вызывать доверие у
                клиентов с первого экрана.
              </p>
            </div>

            <div className="flex items-end justify-between max-md:mt-[24px] max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:gap-[8px]">
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
                className="cursor-pointer py-[12px] px-[52px] rounded-[16px] leading-[36px] font-semibold text-white text-xl
             bg-gradient-to-r from-[#9B51E0] to-[#3081ED]
             hover:brightness-110 hover:shadow-lg transition-all duration-300 max-lg:py-[6px] max-lg:px-[32px] max-sm:w-full"
              >
                Заказать
              </a>

              <span className="text-[#E2E2E2] text-[20px] max-lg:text-base">
                от 7 дней
              </span>
            </div>
          </div>
        </div>
        <div className="pt-[64px] pb-[64px]">
          <h2 className="font-bold text-white text-[48px] text-center mb-[32px] max-lg:text-4xl max-lg:leading-normal max-sm:text-3xl">
            Что входит в наши услуги
          </h2>
          <div className="flex justify-center gap-[120px] flex-wrap relative max-sm:gap-[60px]">
            <div className="absolute bottom-0 w-full h-[53px] bg-gradient-to-r from-[#9B51E0] to-[#3081ED] blur-[96px] max-sm:w-[53px] max-sm:h-full"></div>
            <div>
              <div className="bg-[#ffffff18] w-[150px] h-[138px] mx-auto rounded-[26px] backdrop-blur-[70px] services-shadow flex items-center justify-center">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.9 25.7441L7.79298 35L18.9 44.2559C19.1271 44.4376 19.3156 44.6629 19.4546 44.9184C19.5936 45.1739 19.6802 45.4546 19.7094 45.744C19.7386 46.0334 19.7098 46.3257 19.6246 46.6039C19.5395 46.882 19.3997 47.1404 19.2135 47.3638C19.0273 47.5873 18.7985 47.7714 18.5403 47.9053C18.2821 48.0393 17.9997 48.1204 17.7098 48.1439C17.4199 48.1674 17.1282 48.1329 16.8518 48.0423C16.5754 47.9517 16.3198 47.8069 16.1 47.6164L2.97502 36.6789C2.72874 36.4736 2.5306 36.2167 2.39462 35.9263C2.25865 35.636 2.18817 35.3193 2.18817 34.9986C2.18817 34.678 2.25865 34.3613 2.39462 34.0709C2.5306 33.7806 2.72874 33.5237 2.97502 33.3184L16.1 22.3809C16.546 22.0096 17.1212 21.8306 17.6992 21.8834C18.2771 21.9363 18.8104 22.2165 19.1817 22.6625C19.553 23.1085 19.7319 23.6837 19.6791 24.2616C19.6262 24.8396 19.346 25.3728 18.9 25.7441ZM67.025 33.3184L53.9 22.3809C53.6792 22.197 53.4243 22.0585 53.1499 21.9731C52.8755 21.8878 52.587 21.8573 52.3009 21.8834C52.0147 21.9096 51.7365 21.9919 51.4821 22.1255C51.2278 22.2592 51.0022 22.4417 50.8184 22.6625C50.4471 23.1085 50.2681 23.6837 50.321 24.2616C50.3738 24.8396 50.654 25.3728 51.1 25.7441L62.207 35L51.1 44.2559C50.8729 44.4376 50.6844 44.6629 50.5454 44.9184C50.4064 45.1739 50.3198 45.4546 50.2906 45.744C50.2614 46.0334 50.2903 46.3257 50.3754 46.6039C50.4605 46.882 50.6003 47.1404 50.7865 47.3638C50.9727 47.5873 51.2016 47.7714 51.4598 47.9053C51.718 48.0393 52.0003 48.1204 52.2902 48.1439C52.5801 48.1674 52.8718 48.1329 53.1483 48.0423C53.4247 47.9517 53.6802 47.8069 53.9 47.6164L67.025 36.6789C67.2713 36.4736 67.4694 36.2167 67.6054 35.9263C67.7414 35.636 67.8119 35.3193 67.8119 34.9986C67.8119 34.678 67.7414 34.3613 67.6054 34.0709C67.4694 33.7806 67.2713 33.5237 67.025 33.3184ZM44.4965 8.88125C44.2265 8.78321 43.9398 8.73932 43.6528 8.75208C43.3658 8.76485 43.0841 8.83402 42.8239 8.95564C42.5636 9.07727 42.3298 9.24896 42.1359 9.46093C41.942 9.67289 41.7918 9.92098 41.6938 10.191L24.1938 58.316C24.0953 58.5862 24.0511 58.8732 24.0637 59.1605C24.0762 59.4478 24.1453 59.7298 24.2669 59.9903C24.3886 60.2509 24.5604 60.4849 24.7726 60.679C24.9848 60.8731 25.2332 61.0235 25.5035 61.1215C25.7432 61.2067 25.9957 61.2501 26.25 61.25C26.6993 61.25 27.1376 61.1117 27.5055 60.8539C27.8734 60.5961 28.153 60.2312 28.3063 59.809L45.8063 11.684C45.9043 11.414 45.9482 11.1273 45.9354 10.8403C45.9227 10.5533 45.8535 10.2716 45.7319 10.0113C45.6102 9.75108 45.4385 9.51733 45.2266 9.32342C45.0146 9.12952 44.7665 8.97927 44.4965 8.88125Z"
                    fill="#C4C4C4"
                  />
                </svg>
              </div>
              <h3 className="text-center text-base text-white font-semibold max-w-[200px] mx-auto mt-[16px]">
                Дизайн, разработка и запуск
              </h3>
            </div>
            <div>
              <div className="bg-[#ffffff18] w-[150px] h-[138px] mx-auto rounded-[26px] backdrop-blur-[70px] services-shadow flex items-center justify-center">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M62.7977 59.7023L49.1066 46.0141C53.0748 41.25 55.0536 35.1394 54.6313 28.9536C54.2089 22.7677 51.418 16.9828 46.8391 12.8023C42.2602 8.62172 36.2459 6.36741 30.0472 6.50829C23.8486 6.64916 17.9429 9.17438 13.5586 13.5586C9.17438 17.9429 6.64916 23.8486 6.50829 30.0472C6.36741 36.2459 8.62172 42.2602 12.8023 46.8391C16.9828 51.418 22.7677 54.2089 28.9536 54.6313C35.1394 55.0536 41.25 53.0748 46.0141 49.1066L59.7023 62.7977C59.9056 63.0009 60.1469 63.1621 60.4124 63.2721C60.678 63.3821 60.9626 63.4387 61.25 63.4387C61.5374 63.4387 61.822 63.3821 62.0876 63.2721C62.3531 63.1621 62.5944 63.0009 62.7977 62.7977C63.0009 62.5944 63.1621 62.3531 63.2721 62.0876C63.3821 61.822 63.4387 61.5374 63.4387 61.25C63.4387 60.9626 63.3821 60.678 63.2721 60.4124C63.1621 60.1469 63.0009 59.9056 62.7977 59.7023ZM10.9375 30.625C10.9375 26.7312 12.0922 22.9248 14.2554 19.6872C16.4187 16.4496 19.4935 13.9262 23.0909 12.4361C26.6883 10.946 30.6468 10.5561 34.4658 11.3158C38.2848 12.0754 41.7928 13.9505 44.5462 16.7038C47.2995 19.4572 49.1746 22.9652 49.9342 26.7842C50.6939 30.6032 50.304 34.5617 48.8139 38.1591C47.3238 41.7565 44.8004 44.8313 41.5628 46.9946C38.3252 49.1578 34.5188 50.3125 30.625 50.3125C25.4053 50.3067 20.4011 48.2306 16.7102 44.5398C13.0194 40.8489 10.9433 35.8447 10.9375 30.625Z"
                    fill="#C4C4C4"
                  />
                </svg>
              </div>
              <h3 className="text-center text-base text-white font-semibold max-w-[200px] mx-auto mt-[16px]">
                Cайт будет виден в Google
              </h3>
            </div>
            <div>
              <div className="bg-[#ffffff18] w-[150px] h-[138px] mx-auto rounded-[26px] backdrop-blur-[70px] services-shadow flex items-center justify-center">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M61.25 19.6875H56.875V17.5C56.875 15.7595 56.1836 14.0903 54.9529 12.8596C53.7222 11.6289 52.053 10.9375 50.3125 10.9375H10.9375C9.19702 10.9375 7.52782 11.6289 6.29711 12.8596C5.0664 14.0903 4.375 15.7595 4.375 17.5V43.75C4.375 45.4905 5.0664 47.1597 6.29711 48.3904C7.52782 49.6211 9.19702 50.3125 10.9375 50.3125H41.5625V52.5C41.5625 54.2405 42.2539 55.9097 43.4846 57.1404C44.7153 58.3711 46.3845 59.0625 48.125 59.0625H61.25C62.9905 59.0625 64.6597 58.3711 65.8904 57.1404C67.1211 55.9097 67.8125 54.2405 67.8125 52.5V26.25C67.8125 24.5095 67.1211 22.8403 65.8904 21.6096C64.6597 20.3789 62.9905 19.6875 61.25 19.6875ZM10.9375 45.9375C10.3573 45.9375 9.80094 45.707 9.3907 45.2968C8.98047 44.8866 8.75 44.3302 8.75 43.75V17.5C8.75 16.9198 8.98047 16.3634 9.3907 15.9532C9.80094 15.543 10.3573 15.3125 10.9375 15.3125H50.3125C50.8927 15.3125 51.4491 15.543 51.8593 15.9532C52.2695 16.3634 52.5 16.9198 52.5 17.5V19.6875H48.125C46.3845 19.6875 44.7153 20.3789 43.4846 21.6096C42.2539 22.8403 41.5625 24.5095 41.5625 26.25V45.9375H10.9375ZM63.4375 52.5C63.4375 53.0802 63.207 53.6366 62.7968 54.0468C62.3866 54.457 61.8302 54.6875 61.25 54.6875H48.125C47.5448 54.6875 46.9884 54.457 46.5782 54.0468C46.168 53.6366 45.9375 53.0802 45.9375 52.5V26.25C45.9375 25.6698 46.168 25.1134 46.5782 24.7032C46.9884 24.293 47.5448 24.0625 48.125 24.0625H61.25C61.8302 24.0625 62.3866 24.293 62.7968 24.7032C63.207 25.1134 63.4375 25.6698 63.4375 26.25V52.5ZM37.1875 56.875C37.1875 57.4552 36.957 58.0116 36.5468 58.4218C36.1366 58.832 35.5802 59.0625 35 59.0625H24.0625C23.4823 59.0625 22.9259 58.832 22.5157 58.4218C22.1055 58.0116 21.875 57.4552 21.875 56.875C21.875 56.2948 22.1055 55.7384 22.5157 55.3282C22.9259 54.918 23.4823 54.6875 24.0625 54.6875H35C35.5802 54.6875 36.1366 54.918 36.5468 55.3282C36.957 55.7384 37.1875 56.2948 37.1875 56.875ZM59.0625 30.625C59.0625 31.2052 58.832 31.7616 58.4218 32.1718C58.0116 32.582 57.4552 32.8125 56.875 32.8125H52.5C51.9198 32.8125 51.3634 32.582 50.9532 32.1718C50.543 31.7616 50.3125 31.2052 50.3125 30.625C50.3125 30.0448 50.543 29.4884 50.9532 29.0782C51.3634 28.668 51.9198 28.4375 52.5 28.4375H56.875C57.4552 28.4375 58.0116 28.668 58.4218 29.0782C58.832 29.4884 59.0625 30.0448 59.0625 30.625Z"
                    fill="#C4C4C4"
                  />
                </svg>
              </div>
              <h3 className="text-center text-base text-white font-semibold max-w-[200px] mx-auto mt-[16px]">
                Адаптивный дизайн сайта
              </h3>
            </div>
            <div>
              <div className="bg-[#ffffff18] w-[150px] h-[138px] mx-auto rounded-[26px] backdrop-blur-[70px] services-shadow flex items-center justify-center">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M55.2043 14.9461C52.5875 12.303 49.4751 10.202 46.0452 8.76342C42.6153 7.32484 38.9353 6.57692 35.216 6.5625H35C27.4579 6.5625 20.2247 9.55859 14.8917 14.8917C9.55859 20.2247 6.5625 27.4579 6.5625 35V50.3125C6.5625 52.053 7.2539 53.7222 8.48461 54.9529C9.71532 56.1836 11.3845 56.875 13.125 56.875H17.5C19.2405 56.875 20.9097 56.1836 22.1404 54.9529C23.3711 53.7222 24.0625 52.053 24.0625 50.3125V39.375C24.0625 37.6345 23.3711 35.9653 22.1404 34.7346C20.9097 33.5039 19.2405 32.8125 17.5 32.8125H11.0359C11.4578 28.2514 13.171 23.905 15.9748 20.2828C18.7786 16.6606 22.5568 13.9126 26.8666 12.3609C31.1764 10.8093 35.8391 10.5182 40.3084 11.5219C44.7777 12.5255 48.8683 14.7823 52.1008 18.0277C56.0517 21.9989 58.4818 27.2318 58.9668 32.8125H52.5C50.7595 32.8125 49.0903 33.5039 47.8596 34.7346C46.6289 35.9653 45.9375 37.6345 45.9375 39.375V50.3125C45.9375 52.053 46.6289 53.7222 47.8596 54.9529C49.0903 56.1836 50.7595 56.875 52.5 56.875H59.0625C59.0625 58.6155 58.3711 60.2847 57.1404 61.5154C55.9097 62.7461 54.2405 63.4375 52.5 63.4375H37.1875C36.6073 63.4375 36.0509 63.668 35.6407 64.0782C35.2305 64.4884 35 65.0448 35 65.625C35 66.2052 35.2305 66.7616 35.6407 67.1718C36.0509 67.582 36.6073 67.8125 37.1875 67.8125H52.5C55.4008 67.8125 58.1828 66.6602 60.234 64.609C62.2852 62.5578 63.4375 59.7758 63.4375 56.875V35C63.4517 31.2801 62.7318 27.5939 61.319 24.1527C59.9062 20.7115 57.8283 17.5829 55.2043 14.9461ZM17.5 37.1875C18.0802 37.1875 18.6366 37.418 19.0468 37.8282C19.457 38.2384 19.6875 38.7948 19.6875 39.375V50.3125C19.6875 50.8927 19.457 51.4491 19.0468 51.8593C18.6366 52.2695 18.0802 52.5 17.5 52.5H13.125C12.5448 52.5 11.9884 52.2695 11.5782 51.8593C11.168 51.4491 10.9375 50.8927 10.9375 50.3125V37.1875H17.5ZM52.5 52.5C51.9198 52.5 51.3634 52.2695 50.9532 51.8593C50.543 51.4491 50.3125 50.8927 50.3125 50.3125V39.375C50.3125 38.7948 50.543 38.2384 50.9532 37.8282C51.3634 37.418 51.9198 37.1875 52.5 37.1875H59.0625V52.5H52.5Z"
                    fill="#C4C4C4"
                  />
                </svg>
              </div>
              <h3 className="text-center text-base text-white font-semibold max-w-[200px] mx-auto mt-[16px]">
                Месяц бесплатной поддержки
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { OurServices };
