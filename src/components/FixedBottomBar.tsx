import { Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
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
          <Button
            onClick={scrollToRegistration}
            className="btn-accent w-full md:w-auto font-bold text-sm md:text-base px-4 md:px-6 py-2 md:py-3 ml-0 md:ml-4"
            aria-label="Đăng ký tham gia webinar"
          >
            ĐĂNG KÝ NGAY
          </Button>
        </div>
      </div>
    </div>
  );
};
