import { MessageCircleMore } from 'lucide-react';
import { companyInfo } from '../data/dummyData';

const whatsappNumber = companyInfo.whatsapp.replace(/\D/g, '');

function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_rgba(37,211,102,0.35)] transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircleMore size={24} />
    </a>
  );
}

export default WhatsAppButton;
