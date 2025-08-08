import { Building2, Phone, Mail, MessageCircle, Facebook, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Building2 className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold">Sany Holding</h3>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Công ty đầu tư và phát triển bất động sản hàng đầu Việt Nam với 15+ năm kinh nghiệm. 
              Chuyên gia tư vấn đầu tư dòng tiền bền vững với lãi suất 20%/năm.
            </p>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Thông tin liên hệ</h4>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span>Hotline: 1900 xxxx</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span>Email: info@sanyholding.com</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-accent" />
                  <span>Zalo: 0901 xxx xxx</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Dịch vụ</h4>
            <nav className="space-y-3">
              {[
                "Tư vấn đầu tư BĐS",
                "Đào tạo đầu tư",
                "Dịch vụ pháp lý",
                "Xây dựng & phát triển",
                "Quản lý tài sản"
              ].map((service, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  {service}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Kết nối với chúng tôi</h4>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground hover:scale-110 transition-transform duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground hover:scale-110 transition-transform duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground hover:scale-110 transition-transform duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            {/* Office Hours */}
            <div className="space-y-3">
              <h5 className="font-medium">Giờ làm việc</h5>
              <div className="text-primary-foreground/80 space-y-1">
                <p>Thứ 2 - Thứ 6: 8:00 - 18:00</p>
                <p>Thứ 7: 8:00 - 17:00</p>
                <p>Chủ nhật: 9:00 - 16:00</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h5 className="font-medium">Chứng nhận</h5>
              <div className="text-primary-foreground/80 text-sm space-y-1">
                <p>✓ Giấy phép kinh doanh BĐS</p>
                <p>✓ Chứng nhận ISO 9001:2015</p>
                <p>✓ Top 10 công ty BĐS uy tín</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/60 text-sm">
              © 2024 Sany Holding. Tất cả quyền được bảo lưu.
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors duration-300">
                Chính sách bảo mật
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors duration-300">
                Điều khoản sử dụng
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};