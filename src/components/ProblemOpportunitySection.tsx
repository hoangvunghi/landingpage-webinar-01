import { TrendingUp, AlertTriangle, Target, Users } from "lucide-react";

export const ProblemOpportunitySection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="heading-lg mb-6 font-vietnam">
            Thế hệ chúng ta liệu còn 
            <span className="text-accent-gradient"> cơ hội sở hữu bất động sản?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dân số vàng 2027-2037 đang đến gần, nhưng cơ hội sở hữu BĐS ngày càng khan hiếm. 
            Đây là thời điểm then chốt để đầu tư thông minh.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="investment-card text-center group">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">+15%</h3>
            <p className="text-muted-foreground">Tăng giá BĐS/năm</p>
          </div>

          <div className="investment-card text-center group">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <AlertTriangle className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-accent mb-2">60%</h3>
            <p className="text-muted-foreground">Tỷ lệ đô thị hóa 2030</p>
          </div>

          <div className="investment-card text-center group">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">2027</h3>
            <p className="text-muted-foreground">Bắt đầu dân số vàng</p>
          </div>

          <div className="investment-card text-center group">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-accent mb-2">70M</h3>
            <p className="text-muted-foreground">Dân số lao động 2030</p>
          </div>
        </div>

        {/* Key Insights */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Market Challenges */}
          <div className="space-y-8 animate-fade-in-up">
            <h3 className="heading-md text-primary">Thách thức hiện tại</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Giá BĐS tăng nhanh</h4>
                  <p className="text-muted-foreground">Mức tăng 15-20%/năm khiến việc sở hữu BĐS ngày càng khó khăn với người thu nhập trung bình.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Thiếu kiến thức đầu tư</h4>
                  <p className="text-muted-foreground">Đa số nhà đầu tư dựa vào cảm tính, thiếu phương pháp khoa học và chiến lược dài hạn.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Bẫy đầu cơ "lướt sóng"</h4>
                  <p className="text-muted-foreground">Nhiều người mắc kẹt vì đầu tư theo tâm lý đám đông, không có kế hoạch rõ ràng.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Golden Opportunity */}
          <div className="space-y-8 animate-slide-in-right">
            <h3 className="heading-md text-accent">Cơ hội vàng 2027-2037</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-success rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Dân số vàng</h4>
                  <p className="text-muted-foreground">Giai đoạn 70% dân số trong độ tuổi lao động, thu nhập tăng mạnh, nhu cầu BĐS cao.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-2 h-2 bg-success rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Đô thị hóa nhanh</h4>
                  <p className="text-muted-foreground">Tỷ lệ đô thị hóa sẽ đạt 60% vào 2030, tạo áp lực lớn lên cung cầu BĐS.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-2 h-2 bg-success rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Phương pháp khoa học</h4>
                  <p className="text-muted-foreground">Đầu tư dòng tiền với lãi kép 20%/năm - phương pháp đã được kiểm chứng qua thực tế.</p>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-accent rounded-xl p-6 text-accent-foreground">
              <h4 className="font-bold text-lg mb-2">Thời điểm vàng không chờ đợi!</h4>
              <p className="mb-4">Những người đầu tư thông minh hôm nay sẽ thu hoạch thành quả trong 10 năm tới.</p>
              <div className="text-sm font-medium">
                💡 Tham gia webinar để nắm bắt cơ hội này
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};