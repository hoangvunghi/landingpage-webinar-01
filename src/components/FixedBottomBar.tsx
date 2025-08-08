import { Clock, Calendar } from "lucide-react";

export const FixedBottomBar = () => {
  const scrollToRegistration = () => {
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
      registrationForm.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <div className="fixed-bottom-bar">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Course info */}
          <div className="flex items-center space-x-3 flex-1">
            <div className="flex items-center space-x-2 text-yellow-400">
              <Clock className="w-5 h-5" />
              <span className="font-semibold text-sm md:text-base">KHAI GIẢNG K148:</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gray-300" />
              <span className="text-xs md:text-sm">Thứ 2 ngày 21/07/2025</span>
            </div>
          </div>

          {/* Right side - Register button */}
          <button 
            onClick={scrollToRegistration}
            className="bg-yellow-400 text-black px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm md:text-base whitespace-nowrap ml-4"
          >
            ĐĂNG KÝ NGAY
          </button>
        </div>
      </div>
    </div>
  );
};
