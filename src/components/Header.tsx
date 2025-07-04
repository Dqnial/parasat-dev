import Link from "next/link";
import { useState } from "react";

type HeaderProps = {
  onOpenModal: () => void;
};

const Header = ({ onOpenModal }: HeaderProps) => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "гЛАВНАЯ", href: "#hero" },
    { label: "Услуги", href: "#services" },
    { label: "Портфолио", href: "#portfolio" },
    // { label: "Отзывы", href: "#reviews" },
    { label: "контакты", href: "#contacts" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#1B1A27]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-[24px] max-lg:py-[12px]">
          <Link
            className="text-[32px] tracking-[1.5px] font-bold bg-gradient-to-r from-[#9B51E0] to-[#3081ED] bg-clip-text text-transparent max-sm:text-[24px]"
            href="#hero"
          >
            PARASAT-DEV
          </Link>

          {/* Бургер кнопка (показывается на мобилках) */}
          <button
            onClick={() => setOpen(!open)}
            className="relative w-12 h-12 cursor-pointer flex justify-center items-center bg-[#ffffff08] hover:bg-[#ffffff1A] rounded-full p-2 lg:hidden"
            aria-label="Открыть меню"
            aria-expanded={open}
          >
            <span
              className={`absolute h-[2px] w-8 bg-[#999999] rounded transition-transform duration-300 ease-in-out ${
                open ? "rotate-45" : "-translate-y-2.5"
              }`}
            />
            <span
              className={`absolute h-[2px] w-8 bg-[#999999] rounded transition-opacity duration-300 ease-in-out ${
                open ? "hidden" : ""
              }`}
            />
            <span
              className={`absolute h-[2px] w-8 bg-[#999999] rounded transition-transform duration-300 ease-in-out ${
                open ? "-rotate-45" : "translate-y-2.5"
              }`}
            />
          </button>

          {/* Десктоп меню */}
          <nav className="max-lg:hidden">
            <ul className="flex gap-[30px]">
              {menuItems.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="relative inline-block text-[#bcbcbc] text-sm tracking-[1.5px] uppercase font-medium
                      transition-all duration-300 ease-in-out
                      hover:text-transparent hover:bg-clip-text
                      hover:bg-gradient-to-r hover:from-[#9B51E0] hover:to-[#3081ED]
                      after:content-[''] after:absolute after:left-0 after:right-0
                      after:bottom-[-5px] after:h-[3px] after:rounded-full
                      after:scale-x-0 hover:after:scale-x-100
                      after:origin-center after:transition-transform
                      after:duration-300 after:bg-[#9B51E0]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Кнопка "Оставить заявку" для десктопа */}
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
            className="cursor-pointer py-[5px] px-[22.5px] rounded-[16px] leading-[36px] font-bold text-white text-base
              bg-gradient-to-r from-[#9B51E0] to-[#3081ED]
              hover:brightness-110 hover:shadow-md transition-all duration-300
              max-lg:hidden"
          >
            Оставить заявку
          </a>
        </div>

        {/* Мобильное меню */}
        {open && (
          <nav className="lg:hidden bg-[#1B1A27] pb-6 border-t border-[#44465A]">
            <ul className="flex flex-col gap-6 px-4 uppercase font-medium text-sm text-[#bcbcbc] tracking-widest">
              {menuItems.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="block py-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#9B51E0] hover:to-[#3081ED] transition-all duration-300 ease-in-out"
                    onClick={() => setOpen(false)} // Закрываем меню при клике
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                onOpenModal();
                setOpen(false);
              }}
              className="cursor-pointer w-full py-3 rounded-[16px] bg-gradient-to-r from-[#9B51E0] to-[#3081ED] text-white font-bold hover:brightness-110 transition duration-300"
            >
              Оставить заявку
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export { Header };
