import { 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Users, 
  Star, 
  Clock 
} from "lucide-react";

export const WhyJoinSection = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Nắm được chiến lược đầu tư rõ ràng, hiệu quả",
      description: "Phương pháp đầu tư dòng tiền đã được kiểm chứng qua thực tế, mang lại lãi suất 20%/năm bền vững."
    },
    {
      icon: Shield,
      title: "Tránh sai lầm đầu tư kiểu 'lướt sóng'",
      description: "Học cách phân biệt đầu tư và đầu cơ, xây dựng portfolio bền vững thay vì theo đuổi lợi nhuận nhanh."
    },
    {
      icon: TrendingUp,
      title: "Có phương pháp quản lý vốn từ 500 triệu",
      description: "Chiến lược đầu tư phù hợp với người có vốn trung bình, tối ưu hóa hiệu quả từng đồng vốn."
    },
    {
      icon: Users,
      title: "Được cố vấn từ chuyên gia uy tín",
      description: "Tiếp cận trực tiếp với chuyên gia 15+ năm kinh nghiệm, được hướng dẫn cụ thể từng bước."
    },
    {
      icon: Star,
      title: "Cơ hội lớn trong giai đoạn vàng 2027-2037",
      description: "Nắm bắt xu hướng dân số vàng và đô thị hóa, đầu tư đúng thời điểm để tối đa hóa lợi nhuận."
    }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="heading-lg mb-6">
            Tại sao bạn 
            <span className="text-accent-gradient"> không nên bỏ lỡ</span> webinar này?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            5 lý do thuyết phục khiến buổi webinar này trở thành cơ hội đầu tư quan trọng nhất năm 2024
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="space-y-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="grid lg:grid-cols-12 gap-8 items-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Number & Icon */}
              <div className="lg:col-span-2 flex items-center justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <reason.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-sm">{index + 1}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-10 investment-card">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-center text-primary-foreground">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold">Thời điểm vàng không chờ đợi!</h3>
            </div>
            
            <p className="text-lg mb-8 opacity-90">
              Giai đoạn dân số vàng 2027-2037 chỉ diễn ra một lần trong đời. 
              Những người chuẩn bị tốt từ hôm nay sẽ là những người thắng lớn trong tương lai.
            </p>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">10 năm</div>
                <div className="text-sm opacity-80">Cơ hội dân số vàng</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">60%</div>
                <div className="text-sm opacity-80">Tỷ lệ đô thị hóa 2030</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">20%</div>
                <div className="text-sm opacity-80">Lãi suất mục tiêu</div>
              </div>
            </div>

            <div className="bg-accent/20 rounded-xl p-6 backdrop-blur-sm border border-accent/30">
              <h4 className="font-semibold text-lg mb-2">Đừng để cơ hội trôi qua!</h4>
              <p className="opacity-90">
                Những người tham gia webinar hôm nay sẽ có lợi thế cạnh tranh vượt trội 
                so với 90% nhà đầu tư khác trong 10 năm tới.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};