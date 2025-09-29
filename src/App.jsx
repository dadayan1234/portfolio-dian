import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Code, 
  Wifi, 
  Database, 
  Monitor, 
  Brain,
  Mail, 
  Phone,
  ChevronRight,
  CheckCircle,
  Menu,
  X,
  ArrowRight,
  Globe,
  Zap,
  Shield,
  Users,
  Gauge,
  LineChart,
  Home,
  Building,
  GraduationCap,
  Coffee
} from 'lucide-react';

const PortfolioWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const services = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Paket Skripsi Cepat",
      price: "Rp 500k",
      description: "Solusi lengkap untuk mahasiswa tingkat akhir",
      features: [
        "Code siap pakai & dokumentasi",
        "Circuit design + wiring diagram",
        "Bimbingan implementasi",
        "Garansi revisi 2x"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "IoT Monitoring Kos/Kafe",
      price: "Rp 1.5jt",
      description: "Sistem monitoring real-time untuk bisnis Anda",
      features: [
        "Device IoT + sensor",
        "Backend API + database",
        "Dashboard web responsive",
        "Free maintenance 1 bulan"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Smart Solution + AI",
      price: "Rp 3-5jt",
      description: "Solusi IoT terintegrasi dengan kecerdasan buatan",
      features: [
        "Full IoT ecosystem",
        "AI forecasting & analytics",
        "Custom web application",
        "Training & documentation"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const portfolio = [
    {
      title: "IoT Smart Meter",
      tech: "ESP32 + PZEM + Dashboard",
      description: "Sistem monitoring konsumsi listrik real-time dengan analisis biaya otomatis",
      image: "🔌",
      features: ["Real-time monitoring", "Cost analysis", "Mobile responsive"],
      gradient: "from-blue-600 to-blue-400"
    },
    {
      title: "Smart Home Relay Control",
      tech: "ESP32 + FastAPI",
      description: "Kontrol perangkat rumah dari mana saja dengan scheduling otomatis",
      image: "🏠",
      features: ["Remote control", "Auto scheduling", "Voice integration"],
      gradient: "from-green-600 to-green-400"
    },
    {
      title: "AI-based Forecasting",
      tech: "Python + ML",
      description: "Prediksi konsumsi energi dengan machine learning untuk efisiensi maksimal",
      image: "📊",
      features: ["Predictive analytics", "Pattern recognition", "Auto optimization"],
      gradient: "from-purple-600 to-purple-400"
    },
    {
      title: "Web Dashboard Integration",
      tech: "FastAPI + React",
      description: "Dashboard terintegrasi untuk monitoring multi-device dengan visualisasi data",
      image: "💻",
      features: ["Multi-device support", "Data visualization", "Real-time sync"],
      gradient: "from-orange-600 to-orange-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* SEO Meta would be handled by Next.js or React Helmet */}
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Cpu className="w-8 h-8 text-blue-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Dian Prasetya
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-200 hover:text-blue-600 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
              <a
                href="https://wa.me/6283871758155"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white border-t px-4 py-4 space-y-3">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                {item}
              </button>
            ))}
            <a
              href="https://wa.me/6283871758155"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" />
                IoT Specialist Yogyakarta
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Solusi IoT <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">End-to-End</span> di Yogyakarta
              </h1>
              
              <p className="text-xl text-gray-600">
                Dari Device hingga AI Integration. Membantu mahasiswa, UMKM, dan startup membangun ekosistem IoT yang powerful & terjangkau.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/6283871758155?text=Halo%20Pak%20Dian,%20saya%20tertarik%20konsultasi%20project%20IoT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  Konsultasi Gratis via WhatsApp
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="px-8 py-4 rounded-full font-medium border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Lihat Portfolio
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">Fast Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">Garansi Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">Harga Terjangkau</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-600 to-green-500 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Wifi className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Device & Sensor</p>
                        <p className="font-semibold">ESP32, Arduino, Raspberry Pi</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <Code className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Backend & API</p>
                        <p className="font-semibold">FastAPI, Node.js, MQTT</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <Brain className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">AI Integration</p>
                        <p className="font-semibold">TensorFlow, Scikit-learn</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                        <Monitor className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Dashboard Web</p>
                        <p className="font-semibold">React, Vue.js, Grafana</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-xl animate-float">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-xl animate-float animation-delay-2000">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl transform rotate-3" />
                <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <GraduationCap className="w-8 h-8 text-blue-600" />
                      <div>
                        <p className="font-semibold text-lg">S1 Teknik Komputer</p>
                        <p className="text-gray-600">Spesialisasi IoT & Embedded System</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 rounded-xl p-4">
                        <p className="text-3xl font-bold text-blue-600">10+</p>
                        <p className="text-sm text-gray-600">Project Completed</p>
                      </div>
                      <div className="bg-green-50 rounded-xl p-4">
                        <p className="text-3xl font-bold text-green-600">100%</p>
                        <p className="text-sm text-gray-600">Client Satisfaction</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">Expert dalam ESP32, Arduino, Raspberry Pi</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">Full-stack IoT development</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">AI & Machine Learning integration</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">Cloud platform deployment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Users className="w-4 h-4" />
                About Me
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Membangun <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Ekosistem IoT</span> yang Powerful
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Saya adalah lulusan S1 Teknik Komputer dengan pengalaman mendalam di IoT, AI integration, dan backend development. Fokus saya adalah membantu mahasiswa, UMKM, dan startup di Yogyakarta membangun solusi IoT end-to-end yang terjangkau, praktis, dan siap pakai.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Dengan kombinasi hardware expertise dan software development, saya menghadirkan solusi lengkap dari device hingga dashboard, memastikan setiap project berjalan optimal dan sesuai kebutuhan bisnis Anda.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-md">
                  IoT Development
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-md">
                  API Integration
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-md">
                  AI/ML
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-md">
                  Web Dashboard
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4" />
              Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Pilih <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Paket Terbaik</span> untuk Anda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi IoT lengkap dengan harga transparan dan kualitas terjamin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative p-8 space-y-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white`}>
                    {service.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                      {service.price}
                    </p>
                    <p className="text-gray-600 mt-3">{service.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/6283871758155?text=Halo%20Pak%20Dian,%20saya%20tertarik%20dengan%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Pilih Paket Ini
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Need Custom Solution?</h3>
            <p className="text-lg mb-6 opacity-90">
              Konsultasikan kebutuhan spesifik Anda, kami siap membantu merancang solusi IoT yang tepat
            </p>
            <a
              href="https://wa.me/6283871758155?text=Halo%20Pak%20Dian,%20saya%20butuh%20custom%20solution%20IoT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              Diskusi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Gauge className="w-4 h-4" />
              Portfolio
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Project <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Showcase</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beberapa project IoT yang telah berhasil diimplementasikan
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative p-8 space-y-6 group-hover:text-white transition-colors duration-500">
                  <div className="flex items-start justify-between">
                    <div className="space-y-3">
                      <span className="text-5xl">{project.image}</span>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-sm font-medium opacity-75">{project.tech}</p>
                    </div>
                    <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                  
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 group-hover:bg-white/20 rounded-full text-sm font-medium text-gray-700 group-hover:text-white transition-all"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Tertarik dengan project serupa?</p>
            <a
              href="https://wa.me/6283871758155?text=Halo%20Pak%20Dian,%20saya%20tertarik%20lihat%20portfolio%20lengkap"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Lihat Portfolio Lengkap
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Mail className="w-4 h-4" />
              Contact
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Mari <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Diskusi Project IoT</span> Anda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hubungi saya untuk konsultasi gratis dan temukan solusi IoT terbaik untuk kebutuhan Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Get in Touch</h3>
                
                <div className="space-y-4">
                  <a
                    href="https://wa.me/6283871758155"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all group"
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">WhatsApp (Fast Response)</p>
                      <p className="font-semibold text-gray-900">+62 838-7175-8155</p>
                    </div>
                  </a>

                  <a
                    href="mailto:diaprasetya772@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 transition-all group"
                  >
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-semibold text-gray-900">diaprasetya772@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-semibold text-gray-900">Yogyakarta, Indonesia</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <p className="text-sm text-gray-600 mb-4">Response Time:</p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-gray-700">Usually responds within 1 hour</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Why Choose My Services?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>End-to-end IoT solution dari hardware hingga software</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Harga kompetitif khusus untuk mahasiswa & UMKM</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Garansi service & free consultation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Dokumentasi lengkap & training</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
              
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const message = `Nama: ${formData.get('name')}%0AEmail: ${formData.get('email')}%0AProject: ${formData.get('project')}%0APesan: ${formData.get('message')}`;
                window.open(`https://wa.me/6283871758155?text=${message}`, '_blank');
              }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jenis Project
                  </label>
                  <select
                    name="project"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  >
                    <option value="">Pilih jenis project</option>
                    <option value="Skripsi">Project Skripsi</option>
                    <option value="UMKM">IoT untuk UMKM</option>
                    <option value="Smart Home">Smart Home</option>
                    <option value="Monitoring">System Monitoring</option>
                    <option value="Custom">Custom Solution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                    placeholder="Jelaskan kebutuhan project IoT Anda..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-4 rounded-xl font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Kirim via WhatsApp
                </button>
              </form>

              <p className="text-sm text-gray-500 text-center mt-4">
                * Pesan akan dikirim melalui WhatsApp untuk response lebih cepat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Cpu className="w-8 h-8 text-blue-400" />
                <span className="font-bold text-xl">Dian Prasetya</span>
              </div>
              <p className="text-gray-400">
                IoT Specialist di Yogyakarta. Membangun solusi IoT end-to-end yang powerful & terjangkau.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-white transition-colors">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">
                  About
                </button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-white transition-colors">
                  Services
                </button>
                <button onClick={() => scrollToSection('portfolio')} className="block text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <a
                  href="https://wa.me/6283871758155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +62 838-7175-8155
                </a>
                <a
                  href="mailto:diaprasetya772@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  diaprasetya772@gmail.com
                </a>
                <div className="flex items-center gap-2 text-gray-400">
                  <Globe className="w-4 h-4" />
                  Yogyakarta, Indonesia
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Dian Prasetya. All rights reserved. | IoT Specialist Yogyakarta
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6283871758155"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 hover:shadow-2xl transform hover:scale-110 transition-all duration-200 z-40"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default PortfolioWebsite;