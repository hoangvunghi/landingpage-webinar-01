import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-real-estate.jpg";

export const HeroSection = () => {
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
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Webinar Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 text-accent font-medium">
              <Calendar className="w-4 h-4" />
              Webinar Miễn Phí - Số lượng có hạn
            </div>

            {/* Main Headline */}
            <h1 className="heading-xl">
              <span className="block text-primary-foreground">Webinar Đầu Tư</span>
              <span className="block text-accent-gradient">Bất Động Sản Dòng Tiền</span>
              <span className="block text-primary-foreground">Lãi Kép 20%/Năm</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-lg">
              Khám phá bí quyết đầu tư bền vững, tạo dòng tiền thụ động. 
              Bắt đầu chỉ với <span className="font-semibold text-accent">500 triệu đồng</span>
            </p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span>Lãi suất 20%/năm</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Users className="w-5 h-5 text-accent" />
                <span>Chuyên gia 15+ năm</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToRegistration}
                size="lg"
                className="btn-accent text-lg px-8 py-4 animate-pulse-glow"
                aria-label="Đăng ký tham gia miễn phí"
              >
                🎯 Đăng ký tham gia miễn phí
              </Button>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Còn lại 48 suất tham gia</span>
              </div>
            </div>

            {/* Webinar Details */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground font-medium">Hình thức: Online Webinar</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground font-medium">Thời gian: Sẽ cập nhật sớm</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Đầu tư bất động sản hiện đại" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Overlay stats */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Lãi suất trung bình</p>
                    <p className="text-2xl font-bold text-success">20%/năm</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-card">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Vốn tối thiểu</p>
                  <p className="text-xl font-bold text-primary">500M+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};