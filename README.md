# 🏥 Ayu Sathi

Ayu Sathi is a comprehensive platform built with React, designed to connect patients with medical professionals and provide a supportive health-focused social environment.

## 🌟 Features

### 🏠 **Homepage**
- Clean, professional design with white & blue Ayu Sathi theme
- Hero section with search functionality
- Community statistics display
- Health category navigation
- Senior-citizen friendly large fonts (18px+ base)

### 👥 **Community Q&A (Stack Overflow Style)**
- Ask and answer health-related questions
- Voting system for questions and answers
- Category-based organization by medical specialties
- Advanced search and filtering
- Top contributors showcase
- Tag system for better content organization

### 👨‍⚕️ **Doctor Directory**
- Comprehensive doctor profiles with ratings and reviews
- Filter by specialty, location, and availability
- Video consultation and in-person appointment booking
- Verified Ayu Sathi professional badges
- Emergency services access

### 📚 **Health Tips & Articles**
- Categorized health content (Heart Health, Nutrition, Mental Health, etc.)
- Featured articles by medical experts
- Reading time estimates
- Newsletter subscription
- Expert author verification

### 🔐 **Authentication System**
- User registration for patients and Ayu Sathi professionals
- Social login integration (Google, Facebook)
- Secure password management
- User type differentiation

### 👤 **User Profile Dashboard**
- Personal health statistics tracking
- Activity timeline and history
- Appointment management
- Customizable notification settings
- Privacy controls

## 🛠️ Technology Stack

- **Frontend**: React 19, React Router DOM
- **Styling**: Tailwind CSS with custom Ayu Sathi theme
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Backend Ready**: Structured for Django REST Framework integration

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/testing789-bit/ayusathi.git
   cd ayusathi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Design Philosophy

### Accessibility First
- **Senior-Friendly**: Large fonts, high contrast, clear navigation
- **Screen Reader Compatible**: Proper ARIA labels and semantic HTML
- **Keyboard Navigation**: Full keyboard accessibility support
- **Responsive Design**: Works seamlessly on all devices

### Ayu Sathi-Focused UX
- **Trust-Building Colors**: Professional blue and white theme
- **Clear Information Hierarchy**: Easy-to-scan content layout
- **Minimal Cognitive Load**: Simple, intuitive user flows
- **Emergency Access**: Quick access to emergency services

## 📱 Responsive Design

The platform is fully responsive and optimized for:
- **Desktop**: Full-featured experience with sidebar navigation
- **Tablet**: Adapted layouts with touch-friendly interactions
- **Mobile**: Condensed navigation with swipe gestures

## 🔧 Configuration

### Tailwind CSS Theme
The custom Ayu Sathi theme includes:
- Primary colors: Blue shades for trust and professionalism
- Typography: Inter font family with large base sizes
- Components: Pre-built Ayu Sathi-specific UI components

### Environment Setup
Create a `.env` file in the root directory:
```env
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
REACT_APP_FACEBOOK_APP_ID=your_facebook_app_id
```

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 🔗 Backend Integration

This frontend is designed to work with a Django REST Framework backend. Key API endpoints expected:

- `/api/auth/` - Authentication endpoints
- `/api/users/` - User management
- `/api/questions/` - Community Q&A
- `/api/doctors/` - Doctor profiles and availability
- `/api/articles/` - Health articles and tips
- `/api/appointments/` - Appointment booking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js       # Navigation component
│   └── Footer.js       # Footer component
├── pages/              # Page components
│   ├── Home.js         # Homepage
│   ├── Community.js    # Q&A community
│   ├── Doctors.js      # Doctor directory
│   ├── HealthTips.js   # Articles and tips
│   ├── Login.js        # Authentication
│   ├── Register.js     # User registration
│   └── Profile.js      # User dashboard
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── context/            # React context providers
└── App.js             # Main application component
```

## 🎯 Future Enhancements

- [ ] Real-time chat with doctors
- [ ] Appointment video calling integration
- [ ] Health record management
- [ ] Medication reminders
- [ ] Symptom tracker
- [ ] Health insurance integration
- [ ] Multi-language support
- [ ] AI-powered health recommendations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Development Team

**SquadMinds** - Ayu Sathi Technology Solutions

## 📞 Support

For support and questions:
- Email: support@squadminds.com
- Community: [GitHub Discussions](https://github.com/testing789-bit/ayusathi/discussions)
- Issues: [GitHub Issues](https://github.com/testing789-bit/ayusathi/issues)

---

**Made with ❤️ for better Ayu Sathi accessibility**
