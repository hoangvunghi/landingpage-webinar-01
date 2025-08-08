import { 
  BarChart3, 
  Shield, 
  TrendingUp, 
  AlertCircle, 
  GraduationCap, 
  Heart 
} from "lucide-react";

export const WebinarContentSection = () => {
  const contentItems = [
    {
      icon: BarChart3,
      title: "Phân tích tương lai kinh tế VN 10-20 năm tới",
      description: "Hiểu rõ xu hướng phát triển kinh tế, dân số và cơ hội đầu tư trong giai đoạn vàng 2027-2037.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: AlertCircle,
      title: "Nhận diện rào cản vô hình khiến nhà đầu tư thất bại",
      description: "Khám phá những sai lầm phổ biến và cách tránh bẫy tâm lý trong đầu tư BĐS.",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: TrendingUp,
      title: "Phương pháp đầu tư dòng tiền - lãi kép 20%/năm",
      description: "Học cách tạo dòng tiền thụ động bền vững với chiến lược đầu tư khoa học đã được kiểm chứng.",
      gradient: "from-accent to-accent-dark"
    },
    {
      icon: Shield,
      title: "Tránh bẫy đầu cơ/lướt sóng - bảo toàn vốn",
      description: "Phân biệt đầu tư và đầu cơ, xây dựng chiến lược bảo vệ vốn trong mọi thị trường.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: GraduationCap,
      title: "Sức mạnh đầu tư kiến thức",
      description: "Tại sao kiến thức là yếu tố quyết định thành công, cách xây dựng tư duy đầu tư dài hạn.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Câu chuyện thành công từ người thật, việc thật",
      description: "Chia sẻ những case study thực tế, bài học kinh nghiệm từ các nhà đầu tư thành công.",
      gradient: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="heading-lg mb-6">
            Bạn sẽ học được gì từ 
            <span className="text-accent-gradient"> buổi Webinar?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            6 nội dung cốt lõi giúp bạn thay đổi tư duy và phương pháp đầu tư bất động sản
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems.map((item, index) => (
            <div 
              key={index}
              className="investment-card group hover:border-accent/30 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom indicator */}
              <div className="mt-6 pt-4 border-t border-border group-hover:border-accent/30 transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Nội dung {index + 1}</span>
                  <div className="w-8 h-1 bg-gradient-to-r from-accent to-accent-dark rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-section border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="heading-md mb-4">Kiến thức thực chiến từ chuyên gia</h3>
            <p className="text-muted-foreground mb-6">
              Mỗi nội dung đều được thiết kế dựa trên kinh nghiệm thực tế 15+ năm trong lĩnh vực BĐS,
              giúp bạn tiết kiệm hàng năm trời học hỏi và tránh được những sai lầm đắt giá.
            </p>
            <div className="inline-flex items-center gap-2 text-accent font-medium">
              <GraduationCap className="w-5 h-5" />
              <span>Học từ kinh nghiệm thật - Áp dụng ngay được</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};