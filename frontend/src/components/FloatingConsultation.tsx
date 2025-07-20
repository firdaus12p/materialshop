"use client";

import { useState, useEffect } from "react";

export default function FloatingConsultation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState("");

  const phoneNumber = "6288242423267";

  // Array pesan tooltip yang akan muncul secara random
  const tooltipMessages = [
    "Bingung Mulai Dari Mana? 🤔",
    "Yuk Konsultasi Terlebih Dahulu! 💬",
    "Ada Yang Bisa Kami Bantu? 🙋‍♂️",
    "Butuh Saran Produk? Chat Aja! 📱",
    "Gratis Konsultasi Loh! 😊",
  ];

  // Menu konsultasi
  const consultationOptions = [
    {
      id: "product",
      label: "Tanya Produk",
      icon: "📦",
      message:
        "Halo! Saya ingin bertanya tentang produk yang tersedia di toko Anda. Mohon bantuan informasinya.",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      id: "price",
      label: "Tanya Harga",
      icon: "💰",
      message:
        "Halo! Saya ingin menanyakan harga untuk beberapa produk. Bisa minta daftar harga terbaru?",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      id: "shipping",
      label: "Tanya Pengiriman",
      icon: "🚚",
      message:
        "Halo! Saya ingin menanyakan tentang layanan pengiriman. Apakah bisa kirim ke daerah saya?",
      color: "bg-orange-500 hover:bg-orange-600",
    },
    {
      id: "consultation",
      label: "Konsultasi",
      icon: "👨‍🏭",
      message:
        "Halo! Saya butuh konsultasi untuk memilih material bangunan yang tepat. Mohon bantuannya.",
      color: "bg-purple-500 hover:bg-purple-600",
    },
  ];

  // Show tooltip after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const randomMessage =
        tooltipMessages[Math.floor(Math.random() * tooltipMessages.length)];
      setTooltipText(randomMessage);
      setShowTooltip(true);

      // Hide tooltip after 5 seconds
      setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
    }, 8000);

    return () => clearTimeout(timer);
  }, [tooltipMessages]);

  const handleOptionClick = (option: (typeof consultationOptions)[0]) => {
    const message = encodeURIComponent(option.message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (showTooltip) {
      setShowTooltip(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && !isMenuOpen && (
        <div className="absolute bottom-16 right-0 mb-2 animate-bounce">
          <div className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-medium relative">
            {tooltipText}
            {/* Arrow */}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      )}

      {/* Menu Options */}
      {isMenuOpen && (
        <div className="absolute bottom-16 right-0 mb-2 space-y-3 animate-fade-in">
          {consultationOptions.map((option, index) => (
            <div
              key={option.id}
              className="transform transition-all duration-300 ease-out"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: `slideUp 0.3s ease-out ${index * 100}ms both`,
              }}
            >
              <button
                onClick={() => handleOptionClick(option)}
                className={`
                  ${option.color} text-white px-4 py-3 rounded-full shadow-lg 
                  transition-all duration-300 flex items-center gap-3 min-w-[160px]
                  hover:scale-105 hover:shadow-xl group
                `}
              >
                <span className="text-lg">{option.icon}</span>
                <span className="font-medium text-sm">{option.label}</span>
                <svg
                  className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={toggleMenu}
        className={`
          bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg 
          transition-all duration-300 flex items-center justify-center
          hover:scale-110 hover:shadow-xl active:scale-95
          ${isMenuOpen ? "rotate-45" : "rotate-0"}
        `}
        aria-label="Menu Konsultasi"
      >
        {isMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        )}
      </button>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
