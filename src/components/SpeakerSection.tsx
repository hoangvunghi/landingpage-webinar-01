import { Star, Award, Users, Building } from "lucide-react";
import speakerImage from "@/assets/speaker-portrait.jpg";

export const SpeakerSection = () => {
  const achievements = [
    {
      icon: Building,
      number: "15+",
      label: "Năm kinh nghiệm",
      description: "Phát triển BĐS tại HN & HCM"
    },
    {
      icon: Users,
      number: "500+",
      label: "Nhà đầu tư",
      description: "Được hướng dẫn thành công"
    },
    {
      icon: Award,
      number: "20%",
      label: "Lãi suất bình quân",
      description: "Qua các dự án thực tế"
    },
    {
      icon: Star,
      number: "100M+",
      label: "Tổng giá trị",
      description: "Dự án đã triển khai"
    }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="heading-lg mb-6">
            Diễn giả 
            <span className="text-accent-gradient"> chuyên nghiệp</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Học hỏi từ chuyên gia hàng đầu với kinh nghiệm thực chiến 15+ năm
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Speaker Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img 
                src={speakerImage} 
                alt="Nguyễn Thị Ngọc Ly - Chủ tịch Sany Holding" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating credentials */}
              <div className="absolute -top-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Chủ tịch</p>
                    <p className="font-semibold text-foreground">Sany Holding</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-card">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Kinh nghiệm</p>
                  <p className="text-2xl font-bold text-accent">15+ năm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Speaker Info */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Name & Title */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">
                Nguyễn Thị Ngọc Ly
              </h3>
              <p className="text-xl text-accent font-medium mb-4">
                Chủ tịch Sany Holding
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                15 năm kinh nghiệm phát triển BĐS tại Hà Nội & TP.HCM. 
                Dẫn dắt hàng trăm nhà đầu tư từ vốn nhỏ trở thành chủ sở hữu tài sản lớn.
              </p>
            </div>

            {/* Key Quote */}
            <div className="bg-gradient-accent rounded-xl p-6 text-accent-foreground relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                <span className="text-xs text-accent-foreground font-bold">"</span>
              </div>
              <p className="text-lg font-medium italic">
                "Lãi kép không chỉ là con số – đó là chiến lược tư duy. 
                Thành công đến từ việc hiểu rõ bản chất thị trường và kiên nhẫn thực hiện đúng phương pháp."
              </p>
              <div className="mt-4 text-sm opacity-80">
                - Nguyễn Thị Ngọc Ly
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {achievements.map((item, index) => (
                <div 
                  key={index}
                  className="investment-card text-center group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{item.number}</div>
                  <div className="text-sm font-medium text-foreground mb-1">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.description}</div>
                </div>
              ))}
            </div>

            {/* Expertise Areas */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Chuyên môn cốt lõi:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Phân tích thị trường BĐS",
                  "Đầu tư dòng tiền bền vững", 
                  "Quản lý rủi ro đầu tư",
                  "Chiến lược lãi kép"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};