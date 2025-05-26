"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Сколько стоит создание сайта?",
    answer:
      "Стоимость зависит от типа проекта и ваших задач. Мы делаем как простые лендинги, так и сложные сервисы. После короткого брифинга скажем точную цену.",
  },
  {
    question: "Сколько времени занимает разработка?",
    answer:
      "От 7 дней для простого сайта. Сроки зависят от объёма: лендинг — быстро, интернет-магазин или веб-сервис — дольше.",
  },
  {
    question: "А если у меня уже есть сайт?",
    answer:
      "Можем доработать, оптимизировать или предложить редизайн. Иногда проще сделать новый — расскажем честно.",
  },
  {
    question: "Вы всё делаете под ключ?",
    answer:
      "Да. От идеи до запуска: дизайн, верстка, тексты, подключение аналитики и домена. Вам не нужно разбираться в технических деталях.",
  },
  {
    question: "Что входит в поддержку после запуска?",
    answer:
      "Обновления, исправления, консультации. Мы не исчезаем после сдачи проекта — всегда на связи.",
  },
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#1F1D2B]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-white font-bold text-center mb-12 max-lg:text-4xl max-lg:leading-normal max-sm:text-3xl">
          Часто задаваемые вопросы
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#ffffff08] rounded-[24px] p-6 cursor-pointer transition-all duration-300"
              onClick={() => toggle(index)}
            >
              <h3 className="text-xl text-white font-semibold flex justify-between items-center">
                {faq.question}
                <span
                  className="text-[24px] transition-transform"
                  style={{
                    transform:
                      openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </h3>
              {openIndex === index && (
                <p className="text-[#E2E2E2] mt-4 text-base leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { FaqSection };
