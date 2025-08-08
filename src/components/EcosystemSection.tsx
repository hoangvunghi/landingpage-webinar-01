import { 
  GraduationCap, 
  FileText, 
  Building2, 
  Target, 
  Eye 
} from "lucide-react";

export const EcosystemSection = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Đào tạo",
      description: "Hệ thống đào tạo toàn diện từ cơ bản đến nâng cao",
      features: ["Khóa học online", "Workshop thực hành", "Mentoring 1-1"]
    },
    {
      icon: FileText,
      title: "Pháp lý",
      description: "Dịch vụ pháp lý chuyên nghiệp, minh bạch",
      features: ["Thẩm định hồ sơ", "Tư vấn thủ tục", "Bảo đảm quyền lợi"]
    },
    {
      icon: Building2,
      title: "Xây dựng",
      description: "Đối tác xây dựng uy tín, chất lượng cao",
      features: ["Thiết kế hiện đại", "Thi công chuyên nghiệp", "Bảo hành dài hạn"]
    },
    {
      icon: Target,
      title: "Tư vấn đầu tư",
      description: "Chiến lược đầu tư cá nhân hóa cho từng khách hàng",
      features: ["Phân tích thị trường", "Lựa chọn dự án", "Quản lý danh mục"]
    },
    {
      icon: Eye,
      title: "Dự án minh bạch",
      description: "Các dự án được thẩm định kỹ lưỡng, minh bạch thông tin",
      features: ["Báo cáo định kỳ", "Kiểm toán độc lập", "Thông tin công khai"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="heading-lg mb-6">
            Đồng hành cùng 
            <span className="text-accent-gradient"> hệ sinh thái đầu tư toàn diện</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Từ đào tạo, pháp lý đến xây dựng và tư vấn - tất cả trong một hệ sinh thái tin cậy
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="investment-card group hover:border-accent/30 hover:shadow-accent/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Bottom accent */}
              <div className="mt-6 pt-4 border-t border-border group-hover:border-accent/30 transition-colors duration-300">
                <div className="w-full h-1 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full group-hover:from-accent group-hover:to-primary transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Why Choose Us */}
          <div className="space-y-8 animate-fade-in-up">
            <h3 className="heading-md">Tại sao chọn hệ sinh thái Sany?</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Liên kết toàn diện</h4>
                  <p className="text-muted-foreground">Mọi dịch vụ được kết nối chặt chẽ, tạo hiệu quả tối ưu cho nhà đầu tư.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Minh bạch tuyệt đối</h4>
                  <p className="text-muted-foreground">Mọi thông tin, số liệu được công khai, kiểm toán độc lập định kỳ.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Đồng hành dài hạn</h4>
                  <p className="text-muted-foreground">Không chỉ tư vấn mà còn đồng hành trong suốt hành trình đầu tư.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Statistics */}
          <div className="space-y-8 animate-slide-in-right">
            <h3 className="heading-md">Thành tích đạt được</h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="investment-card text-center">
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Khách hàng hài lòng</div>
              </div>

              <div className="investment-card text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Dự án thành công</div>
              </div>

              <div className="investment-card text-center">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Năm kinh nghiệm</div>
              </div>

              <div className="investment-card text-center">
                <div className="text-3xl font-bold text-primary mb-2">20%</div>
                <div className="text-sm text-muted-foreground">Lãi suất bình quân</div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-gradient-section border border-border rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-3">Cam kết chất lượng</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Tất cả dịch vụ đều có bảo hành, cam kết hoàn tiền nếu không đạt kết quả như cam kết. 
                Chúng tôi đặt uy tín và lợi ích khách hàng lên hàng đầu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};