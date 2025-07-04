import React, { useRef } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_bolcxy1",
        "template_iikl5vs",
        form.current,
        "1_T_LiVc6nzr-JM8X"
      )
      .then(
        () => {
          toast.success("Заявка успешно отправлена!");
          form.current?.reset();
          onClose();
        },
        (error) => {
          console.error(error.text);
          toast.error("Произошла ошибка при отправке.");
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-[#2E2B44]/90 flex items-center justify-center z-50 backdrop-blur-md px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#1F1D2B] rounded-lg p-8 max-w-md w-full relative"
      >
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-3 right-3 text-[#E2E2E2] hover:text-white text-2xl font-bold"
          aria-label="Close modal"
        >
          ×
        </button>

        <h2 className="text-white text-2xl font-bold mb-6">Оставить заявку</h2>

        <form ref={form} onSubmit={sendEmail}>
          <label className="block mb-2 text-[#E2E2E2] font-medium">Имя</label>
          <input
            type="text"
            name="name"
            placeholder="Введите имя"
            required
            className="w-full p-3 mb-6 rounded bg-[#2A2938] border border-[#44465A] text-white placeholder-[#7E7E8A] focus:outline-none focus:ring-2 focus:ring-gradient"
          />
          <label className="block mb-2 text-[#E2E2E2] font-medium">
            WhatsApp
          </label>
          <input
            type="text"
            name="whatsapp"
            placeholder="+7 777 777 77 77"
            required
            className="w-full p-3 mb-6 rounded bg-[#2A2938] border border-[#44465A] text-white placeholder-[#7E7E8A] focus:outline-none focus:ring-2 focus:ring-gradient"
          />
          <button
            type="submit"
            className="w-full py-3 cursor-pointer rounded bg-gradient-to-r from-[#9B51E0] to-[#3081ED] text-white font-semibold hover:brightness-110 transition"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export { Modal };
