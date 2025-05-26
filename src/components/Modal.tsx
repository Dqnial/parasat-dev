import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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

        <form>
          <label className="block mb-2 text-[#E2E2E2] font-medium">Имя</label>
          <input
            type="text"
            placeholder="Введите имя"
            className="w-full p-3 mb-6 rounded bg-[#2A2938] border border-[#44465A] text-white placeholder-[#7E7E8A] focus:outline-none focus:ring-2 focus:ring-gradient"
          />
          <label className="block mb-2 text-[#E2E2E2] font-medium">
            WhatsApp
          </label>
          <input
            type="text"
            placeholder="+7 777 777 77 77"
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
