import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Tôi không có kinh nghiệm đầu tư, có tham gia được không?",
      answer: "Hoàn toàn có thể! Webinar được thiết kế cho cả người mới bắt đầu và người đã có kinh nghiệm. Chúng tôi sẽ hướng dẫn từ những kiến thức cơ bản nhất, giúp bạn hiểu rõ bản chất đầu tư BĐS và xây dựng tư duy đúng đắn từ đầu."
    },
    {
      question: "Lãi suất 20%/năm có thực tế và bền vững không?",
      answer: "Đây là con số trung bình được tính toán dựa trên 15+ năm kinh nghiệm thực tế của chúng tôi. Lãi suất này đạt được thông qua phương pháp đầu tư dòng tiền khoa học, kết hợp giữa lợi nhuận từ cho thuê và tăng giá tài sản. Tất nhiên, mọi khoản đầu tư đều có rủi ro, nhưng với phương pháp đúng đắn, con số này hoàn toàn khả thi."
    },
    {
      question: "Webinar có miễn phí hoàn toàn không?",
      answer: "Có, webinar hoàn toàn miễn phí. Bạn sẽ nhận được kiến thức chất lượng cao mà không phải trả bất kỳ khoản phí nào. Sau webinar, nếu bạn quan tâm đến các dịch vụ tư vấn chuyên sâu, chúng tôi sẽ có các gói hỗ trợ khác, nhưng việc tham gia webinar không ràng buộc bạn phải sử dụng dịch vụ nào."
    },
    {
      question: "Tôi cần chuẩn bị gì để tham gia webinar?",
      answer: "Bạn chỉ cần một thiết bị có kết nối internet (máy tính, tablet hoặc smartphone), một cuốn sổ để ghi chú và tinh thần sẵn sàng học hỏi. Chúng tôi sẽ gửi link tham gia và tài liệu chuẩn bị qua email đã đăng ký."
    }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-accent" />
            <h2 className="heading-lg">
              <span className="text-accent-gradient">Câu hỏi</span> thường gặp
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Những thắc mắc phổ biến về webinar và phương pháp đầu tư
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="investment-card border border-border"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-accent transition-colors duration-300 px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed px-6 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Support */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Vẫn còn thắc mắc?</h3>
            <p className="text-lg mb-6 opacity-90">
              Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-primary-foreground/10 rounded-xl p-4 backdrop-blur-sm border border-primary-foreground/20">
                <h4 className="font-semibold mb-2">Hotline</h4>
                <p className="text-accent font-bold">1900 xxxx</p>
              </div>
              
              <div className="bg-primary-foreground/10 rounded-xl p-4 backdrop-blur-sm border border-primary-foreground/20">
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-accent font-bold">info@sanyholding.com</p>
              </div>
            </div>

            <div className="mt-6 text-sm opacity-80">
              Thời gian hỗ trợ: 8:00 - 22:00 hàng ngày
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};