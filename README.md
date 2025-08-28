# WhisperLip Sync Studio 🎬

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.19-purple.svg)](https://vitejs.dev/)

## 🚀 Overview

WhisperLip Sync Studio is a cutting-edge web application that leverages AI technology to create perfect lip synchronization between audio and video content. Specifically designed to work with Hindi audio, this tool provides multiple AI models to choose from, making it perfect for content creators, filmmakers, and anyone looking to create professional-quality lip-synced videos.

## ✨ Features

- **🎯 AI-Powered Lip Sync**: Advanced AI models for accurate lip synchronization
- **🎵 Hindi Audio Support**: Specialized support for Hindi language audio processing
- **🤖 Multiple AI Models**: Choose from various models including:
  - Wav2Lip ONNX HQ
  - OpenTalker/SadTalker (GUI)
  - Wav2Lip - Rudrabha
- **📱 Responsive Design**: Modern, mobile-friendly interface
- **⚡ Real-time Processing**: Fast processing with visual feedback
- **🎨 Beautiful UI**: Elegant design with smooth animations and transitions
- **📥 Easy File Upload**: Drag-and-drop interface for audio and video files
- **⬇️ Download Results**: Download your processed videos instantly

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.19
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom animations
- **Routing**: React Router DOM
- **State Management**: React hooks and Context API
- **HTTP Client**: TanStack React Query
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🏗️ Project Structure

```
whisperlip-sync-studio/
├── public/
│   ├── team-photos/          # Team member images
│   └── result.mp4           # Sample output video
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── Hero.tsx         # Landing page hero section
│   │   ├── ProjectFlow.tsx  # How it works section
│   │   ├── Team.tsx         # Team showcase
│   │   └── Footer.tsx       # Footer component
│   ├── pages/
│   │   ├── Index.tsx        # Home page
│   │   ├── Convert.tsx      # Main conversion interface
│   │   └── NotFound.tsx     # 404 page
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   └── App.tsx              # Main application component
├── package.json
└── vite.config.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/rohitdeshmukh27/whisperlip-sync-studio.git
   cd whisperlip-sync-studio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to see the application.

## 🎮 Usage

1. **Upload Files**: Select your audio and video files using the upload interface
2. **Choose Model**: Pick from available AI models based on your quality and speed preferences
3. **Process**: Click "Generate Lip-Sync" to start the AI processing
4. **Download**: Once processing is complete, download your synchronized video

## 🏃‍♂️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 👥 Team

This project is developed by a talented team of students as part of their Final Year Project:

- **Dr. Sujit N Deshpande** - Mentor
- **Rohit Deshmukh** - Team Lead
- **Ananya Payas** - Team Member
- **Chaitanya Ambade** - Team Member
- **Lakxhit Chaurasia** - Team Member
- **Ronit Jain** - Team Member

## 🎯 Features in Detail

### AI Models

- **Wav2Lip ONNX HQ**: High-quality model for professional results
- **OpenTalker/SadTalker**: Advanced talking head generation
- **Wav2Lip - Rudrabha**: Original Wav2Lip implementation

### User Interface

- Modern gradient design with glassmorphism effects
- Smooth animations and transitions
- Mobile-responsive layout
- Intuitive file upload system
- Real-time processing feedback

## 🔧 Configuration

The project uses Vite for build tooling and can be configured through `vite.config.ts`. The development server runs on port 8080 by default.

## 📦 Dependencies

### Core Dependencies

- React & React DOM for UI
- TypeScript for type safety
- React Router for navigation
- TanStack React Query for data fetching
- Framer Motion for animations

### UI Components

- Radix UI primitives for accessible components
- Tailwind CSS for styling
- Lucide React for icons

## 🚀 Deployment

The application can be deployed to any static hosting service:

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service of choice (Vercel, Netlify, GitHub Pages, etc.)

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- **Repository**: [GitHub](https://github.com/rohitdeshmukh27/whisperlip-sync-studio)
- **Live Demo**: [WhisperLip Sync Studio](https://lovable.dev/projects/e4abae57-442d-425b-9db9-791db3748e49)

## 📞 Support

For support, please contact the development team or create an issue in the GitHub repository.

---

Made with ❤️ by the WhisperLip Team
