# Webinar Landing Page - Sany Holding

Landing page cho webinar đầu tư bất động sản dòng tiền với lãi suất 20%/năm của Sany Holding.

## 🚀 Features

- **Responsive Design**: Tối ưu cho mọi thiết bị
- **Modern UI/UX**: Sử dụng React + TypeScript + Tailwind CSS
- **Form Registration**: Tích hợp Google Sheets để lưu thông tin đăng ký
- **Vietnamese Localization**: Hoàn toàn tiếng Việt
- **SEO Optimized**: Meta tags và structure tối ưu SEO

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Backend**: Google Apps Script + Google Sheets
- **Deployment**: Ready for Vercel/Netlify

## 📋 Environment Variables

Tạo file `.env` trong root directory:

```env
VITE_GOOGLE_SHEETS_ID=your_google_sheets_id
VITE_GOOGLE_SHEETS_API_KEY=your_api_key
VITE_GOOGLE_CLIENT_ID=your_client_id
VITE_GOOGLE_APPS_SCRIPT_URL=your_apps_script_url
```

## 🚀 Quick Start

1. **Clone repository**
```bash
git clone <repository-url>
cd webinar
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment**
- Copy `.env.example` to `.env`
- Fill in your Google API credentials

4. **Run development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
```

## 📊 Google Sheets Integration

### Setup Google Apps Script

1. Truy cập [Google Apps Script](https://script.google.com/)
2. Tạo project mới
3. Copy code từ file `PRODUCTION_APPS_SCRIPT.gs`
4. Deploy as Web App với:
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy deployment URL vào `.env`

### Google Sheets Structure

| Thời gian | Họ tên | Email | Số điện thoại | Nghề nghiệp |
|-----------|--------|-------|---------------|-------------|
| 07/08/2025 10:30:00 | Nguyễn Văn A | a@email.com | 0901234567 | Developer |

## 🎨 Components Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── HeroSection.tsx
│   ├── RegistrationSection.tsx
│   ├── FAQSection.tsx
│   └── ...
├── services/
│   └── googleSheets.ts  # Google Sheets integration
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
└── lib/
    └── utils.ts
```

## 🔧 Customization

### Colors & Branding
- Tailwind config: `tailwind.config.ts`
- CSS variables: `src/index.css`

### Content
- Hero section: `src/components/HeroSection.tsx`
- FAQ items: `src/components/FAQSection.tsx`
- Contact info: `src/components/Footer.tsx`

## 📱 Form Validation

- Email format validation
- Vietnamese phone number validation
- Required field checking
- Real-time input sanitization

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy dist/ folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy dist/ folder to Netlify
```

### Manual
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 📝 License

© 2024 Sany Holding. All rights reserved.

## 🆘 Support

For technical support, contact: [your-email@domain.com]