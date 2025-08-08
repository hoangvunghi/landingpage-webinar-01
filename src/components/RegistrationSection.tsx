import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, User, Mail, Phone, Briefcase, Gift } from "lucide-react";
import { googleSheetsService } from "@/services/googleSheets";

export const RegistrationSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    profession: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Đặc biệt xử lý số điện thoại để đảm bảo nó luôn là string
    if (name === 'phone') {
      // Chỉ cho phép số và một số ký tự đặc biệt
      const phoneValue = value.replace(/[^\d+\-\s()]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: phoneValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast({
        title: "Vui lòng điền đầy đủ thông tin",
        description: "Họ tên, email và số điện thoại là bắt buộc",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email không hợp lệ",
        description: "Vui lòng nhập địa chỉ email đúng định dạng",
        variant: "destructive"
      });
      return;
    }

    // Phone validation (Vietnamese phone numbers)
    const phoneRegex = /^(\+84|84|0)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-9])[0-9]{7}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      toast({
        title: "Số điện thoại không hợp lệ",
        description: "Vui lòng nhập số điện thoại Việt Nam hợp lệ",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Use Google Apps Script method (more reliable)
      const result = await googleSheetsService.writeViaAppsScript(formData);

      if (result.success) {
        toast({
          title: "Đăng ký thành công! 🎉",
          description: "Chúng tôi đã lưu thông tin của bạn và sẽ gửi link webinar đến email sớm nhất.",
        });
        
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          profession: ""
        });
      } else {
        throw new Error(result.error || 'Không thể lưu dữ liệu');
      }
      
    } catch (error: any) {
      toast({
        title: "Có lỗi xảy ra",
        description: "Không thể lưu thông tin đăng ký. Vui lòng thử lại sau hoặc liên hệ hỗ trợ.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="registration" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="heading-lg mb-6">
            Sẵn sàng để bắt đầu 
            <span className="text-accent-gradient"> hành trình đầu tư bền vững?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Đăng ký ngay để nhận thông tin webinar và tài liệu đầu tư miễn phí
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Benefits */}
          <div className="space-y-8 animate-fade-in-up">
            <h3 className="heading-md">Những gì bạn sẽ nhận được:</h3>
            
            <div className="space-y-6">
              {[
                {
                  icon: Gift,
                  title: "Tài liệu đầu tư miễn phí",
                  description: "Bộ tài liệu đầu tư BĐS dòng tiền trị giá 2 triệu đồng"
                },
                {
                  icon: CheckCircle,
                  title: "Link tham gia webinar",
                  description: "Thông tin chi tiết về thời gian và cách tham gia"
                },
                {
                  icon: User,
                  title: "Tư vấn cá nhân",
                  description: "Cơ hội được tư vấn 1-1 với chuyên gia sau webinar"
                }
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4 investment-card">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-section border border-border rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-4">Cam kết của chúng tôi:</h4>
              <div className="space-y-3">
                {[
                  "🔒 Bảo mật thông tin cá nhân tuyệt đối",
                  "📧 Không spam email marketing",
                  "🎯 Nội dung 100% chất lượng, không bán hàng cưỡng bức",
                  "💯 Hoàn tiền nếu không hài lòng"
                ].map((commitment, index) => (
                  <div key={index} className="text-sm text-muted-foreground">
                    {commitment}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Registration Form */}
          <div className="animate-slide-in-right">
            <div id="registration-form" className="investment-card border-2 border-accent/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Đăng ký tham gia miễn phí
                </h3>
                <p className="text-muted-foreground">
                  Điền thông tin để nhận link tham gia webinar
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <Label htmlFor="fullName" className="flex items-center gap-2 text-foreground font-medium mb-2">
                    <User className="w-4 h-4" />
                    Họ và tên *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Nhập họ và tên đầy đủ"
                    className="form-input"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="flex items-center gap-2 text-foreground font-medium mb-2">
                    <Mail className="w-4 h-4" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@email.com"
                    className="form-input"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone" className="flex items-center gap-2 text-foreground font-medium mb-2">
                    <Phone className="w-4 h-4" />
                    Số điện thoại *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="0901234567"
                    className="form-input"
                    required
                  />
                </div>

                {/* Profession (Optional) */}
                <div>
                  <Label htmlFor="profession" className="flex items-center gap-2 text-foreground font-medium mb-2">
                    <Briefcase className="w-4 h-4" />
                    Nghề nghiệp / Doanh nghiệp
                  </Label>
                  <Input
                    id="profession"
                    name="profession"
                    type="text"
                    value={formData.profession}
                    onChange={handleInputChange}
                    placeholder="Ví dụ: Kỹ sư, Giám đốc kinh doanh..."
                    className="form-input"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-accent text-lg py-4 animate-pulse-glow"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin"></div>
                      Đang xử lý...
                    </div>
                  ) : (
                    "🎯 Đăng ký ngay miễn phí"
                  )}
                </Button>

                {/* Privacy Note */}
                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  Bằng việc đăng ký, bạn đồng ý với{" "}
                  <a href="#" className="text-accent hover:underline">Điều khoản sử dụng</a> và{" "}
                  <a href="#" className="text-accent hover:underline">Chính sách bảo mật</a> của chúng tôi.
                </p>
              </form>
            </div>

            {/* Additional CTA */}
            <div className="mt-8 text-center">
              <div className="bg-gradient-accent rounded-xl p-4 text-accent-foreground">
                <div className="font-semibold mb-1">⏰ Ưu đãi có thời hạn!</div>
                <div className="text-sm">
                  100 người đăng ký đầu tiên sẽ nhận được bộ tài liệu đầu tư độc quyền
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};