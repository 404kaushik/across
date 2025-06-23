"use client"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import CountUp from "react-countup"
import { useState, useEffect } from "react"
import {
  Shield,
  CreditCard,
  Building2,
  TrendingUp,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  DollarSign,
  BarChart3,
  Target,
  Rocket,
  Globe,
  Package,
  Banknote,
  ArrowDown,
  Play,
  Sparkles,
  Lock,
  Award,
} from "lucide-react"

export default function AcrossWebsite() {
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  // Parallax transforms
  const heroY = useTransform(smoothProgress, [0, 0.3], [0, -100])
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0])
  const sectionY = useTransform(smoothProgress, [0.1, 0.4], [50, -50])
  const cardY = useTransform(smoothProgress, [0.2, 0.6], [30, -30])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const scaleOnHover = {
    scale: 1.02,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white overflow-hidden">
      {/* Custom CSS for trending fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
        
        .font-heading {
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }
        
        .font-accent {
          font-family: 'Outfit', system-ui, sans-serif;
        }
        
        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glow-effect {
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
        }
      `}</style>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 pt-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 25,
          delay: 0.1 
        }}
      >
        <motion.div
          className="mx-auto max-w-7xl relative overflow-hidden transition-all duration-700 ease-out bg-black/90 backdrop-blur-2xl rounded-2xl"
          animate={{
            boxShadow: [
              '0 4px 32px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.07)',
              '0 8px 48px rgba(0, 0, 0, 0.10), 0 2px 6px rgba(0, 0, 0, 0.10)',
              '0 4px 32px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.07)',
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center justify-between px-8 py-4">
            
            {/* Logo - Apple-inspired minimal design */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <motion.h1
                className="text-2xl font-medium tracking-tight transition-all duration-500 text-white hover:text-gray-600"
              >
                Across
              </motion.h1>
              
              {/* Subtle gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-2xl font-medium tracking-tight opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              >
                Across
              </motion.div>
            </motion.div>

            {/* Navigation Links - Clean minimal design */}
            <div className="hidden md:flex items-center space-x-1 ">
              {["Products", "How it Works", "Investors", "Contact"].map((item, index) => (
                <motion.div key={item} className="relative">
                  <motion.a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 text-white hover:text-black"
                    whileHover={{ 
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                      scale: 1.02
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 25,
                      backgroundColor: { duration: 0.2 }
                    }}
                  >
                    {item}
                    
                    {/* Subtle active indicator */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      initial={{ width: 0, x: "-50%" }}
                      whileHover={{ width: "80%" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </motion.a>
                </motion.div>
              ))}
            </div>

            {/* CTA Button - Apple-inspired design */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <motion.button
                className="relative overflow-hidden px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 bg-black text-white hover:bg-gray-800 shadow-lg"
                whileHover={{
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.15)'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Subtle shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                
                <span className="relative flex items-center gap-2">
                  Get Started
                  <motion.span
                    animate={{ x: [0, 2, 0] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Subtle bottom accent - very minimal */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Outer subtle glow - very refined */}
        
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center px-6"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-blue-900/10 to-transparent"></div>
        </div>

        {/* Concentric Circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <motion.div
              key={index}
              className="absolute border border-white/30 rounded-full"
              style={{
                width: `${index * 120 + 200}px`,
                height: `${index * 120 + 200}px`,
              }}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ 
                opacity: 0.6,
                rotate: index % 2 === 0 ? 360 : -360,
                scale: [1, 1.05, 1],
              }}
              transition={{
                opacity: {
                  duration: 1,
                  delay: index * 0.1
                },
                rotate: {
                  duration: 25 + index * 3,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          ))}
          
          {/* Additional decorative circles */}
          {[1, 2, 3].map((index) => (
            <motion.div
              key={`outer-${index}`}
              className="absolute border border-white rounded-full"
              style={{
                width: `${index * 150 + 800}px`,
                height: `${index * 150 + 800}px`,
              }}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ 
                opacity: 0.3,
                rotate: index % 2 === 0 ? -360 : 360,
                scale: [1, 1.03, 1]
              }}
              transition={{
                opacity: {
                  duration: 1.5,
                  delay: index * 0.2 + 0.5
                },
                rotate: {
                  duration: 35 + index * 4,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }
              }}
            />
          ))}
        </div>

        <motion.div
          className="text-center max-w-6xl mx-auto relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <Badge variant="outline" className="glass-effect text-white/90 px-6 py-3 text-sm font-accent font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Safe Transactions, Always
            </Badge>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="text-7xl md:text-9xl lg:text-[12rem] font-heading mb-8 tracking-tight leading-none relative"
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
              Across
            </span>
            
            {/* Central glow effect with heartbeat */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ 
                opacity: [0, 0.8, 0.4],
                scale: [1, 1.15, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <div className="w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            </motion.div>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto font-light leading-relaxed"
          >
            The future of secure transactions. Eliminate fraud and build trust with our{" "}
            <span className="text-blue-400 font-medium">revolutionary escrow platform</span>.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div whileHover={scaleOnHover} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="lg"
                className="bg-black/5 text-white hover:from-blue-700 hover:to-purple-700 px-10 py-6 text-xl rounded-full font-medium glow-effect"
              >
                <Rocket className="mr-3 w-6 h-6" />
                Experience Across
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </motion.div>
            <motion.div whileHover={scaleOnHover} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="lg"
                className="glass-effect text-white px-10 py-6 text-xl rounded-full font-medium"
              >
                <Play className="mr-3 w-6 h-6" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        >
          <div className="glass-effect rounded-full p-3">
            <ArrowDown className="w-6 h-6 text-white/70" />
          </div>
        </motion.div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section id="how-it-works" className="py-32 px-6 bg-gradient-to-br from-white via-gray-50 to-blue-50 text-black" style={{ y: sectionY }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-heading font-bold mb-8 tracking-tight">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Five simple steps to secure, worry-free transactions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-6">
            {[
              {
                icon: Shield,
                title: "Create Escrow",
                description: "Buyer and Seller agree on terms and initiate the secure transaction.",
                step: "01",
                color: "from-blue-500 to-cyan-400",
              },
              {
                icon: Banknote,
                title: "Fund Account",
                description: "Buyer deposits the agreed amount into our ultra-secure escrow vault.",
                step: "02",
                color: "from-green-500 to-emerald-400",
              },
              {
                icon: Package,
                title: "Deliver Product",
                description: "Seller fulfills their commitment by delivering the product or service.",
                step: "03",
                color: "from-purple-500 to-violet-400",
              },
              {
                icon: CheckCircle,
                title: "Verify & Approve",
                description: "Buyer reviews and confirms everything meets the agreed specifications.",
                step: "04",
                color: "from-orange-500 to-red-400",
              },
              {
                icon: DollarSign,
                title: "Release Payment",
                description: "Funds are instantly released to the seller upon buyer approval.",
                step: "05",
                color: "from-pink-500 to-rose-400",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="text-center">
                  <div className="relative mb-8">
                    <motion.div
                      className={`w-24 h-24 mx-auto bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring" as const, stiffness: 300 }}
                    >
                      <item.icon className="w-12 h-12 text-white" />
                    </motion.div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-sm font-bold text-black shadow-lg font-mono">
                      {item.step}
                    </div>
                  </div>

                  <h3 className="text-2xl font-heading font-semibold mb-6 leading-tight">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                </div>

                {index < 4 && (
                  <motion.div
                    className="hidden lg:block absolute top-12 -right-6 w-12 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section className="py-32 px-6 bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white" style={{ y: cardY }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-heading font-bold mb-8 tracking-tight">
              Built for <span className="gradient-text">Trust</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Our escrow service acts as a neutral third party, ensuring fair and secure exchanges for everyone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Shield,
                title: "Fraud Protection",
                description: "Advanced AI-powered security measures eliminate fraud risk and protect your transactions with military-grade encryption.",
                gradient: "from-blue-500 to-cyan-400",
              },
              {
                icon: Users,
                title: "Trust Building",
                description: "Create unshakeable confidence between buyers and sellers with our transparent, auditable process.",
                gradient: "from-purple-500 to-pink-400",
              },
              {
                icon: Lock,
                title: "Guaranteed Safety",
                description: "Your funds remain 100% secure in our insured vaults until all transaction conditions are perfectly met.",
                gradient: "from-green-500 to-emerald-400",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.03 }}
                className="group"
              >
                <Card className="glass-effect hover:bg-white/20 transition-all duration-500 h-full border-0 shadow-2xl">
                  <CardHeader className="text-center pb-6 p-8">
                    <motion.div
                      className={`w-20 h-20 mx-auto mb-8 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <CardTitle className="text-3xl font-heading font-bold text-white mb-4">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <p className="text-gray-300 text-center leading-relaxed text-lg">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section id="products" className="py-32 px-6 bg-gradient-to-br from-white via-gray-50 to-purple-50 text-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-heading font-bold mb-8 tracking-tight">
              Our <span className="gradient-text">Products</span>
            </h2>
            <p className="text-2xl text-gray-600 font-light leading-relaxed">Innovative solutions for consumers and businesses</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* AcrossPay */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-blue-50 to-purple-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                <CardHeader className="relative p-10">
                  <div className="flex items-center gap-6 mb-8">
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <CreditCard className="w-10 h-10 text-white" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-4xl text-black font-heading font-bold">AcrossPay</CardTitle>
                      <Badge variant="secondary" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white mt-3 px-4 py-1 font-accent">
                        Consumer
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-gray-700 text-xl leading-relaxed">
                    World's first escrow card featuring the <span className="font-semibold">Neil Armstrong edition</span>. Secure transactions with contactless
                    payments and comprehensive fraud protection.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-10 pt-0">
                  <div className="space-y-6">
                    {[
                      "Hassle-Free Escrow Protection",
                      "NFC-Enabled Contactless Payments",
                      "TLS 1.3 Bank-Grade Encryption",
                      "90-Day Fraud Resolution",
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 text-lg font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* AcrossX */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-purple-50 to-pink-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                <CardHeader className="relative p-10">
                  <div className="flex items-center gap-6 mb-8">
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Building2 className="w-10 h-10 text-white" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-4xl text-black font-heading font-bold">AcrossX</CardTitle>
                      <Badge variant="secondary" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white mt-3 px-4 py-1 font-accent">
                        Business
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-gray-700 text-xl leading-relaxed">
                    Powerful <span className="font-semibold">B2B payment platform</span> with invoice discounting for efficient cash flow management and
                    streamlined business transactions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-10 pt-0">
                  <div className="space-y-6">
                    {[
                      "Invoice Discounting & Cash Flow",
                      "Seamless System Integration",
                      "Advanced Fraud Prevention",
                      "Democratized Escrow Access",
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 text-lg font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Revenue Model Section */}
      <motion.section className="py-32 px-6 bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-heading font-bold mb-8 tracking-tight">
              Revenue <span className="gradient-text">Forecast</span>
            </h2>
            <p className="text-2xl text-gray-300 font-light leading-relaxed">Sustainable growth with a proven business model</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-0 shadow-2xl">
                <CardHeader className="p-10">
                  <CardTitle className="text-4xl text-white flex items-center gap-4 font-heading font-bold">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    Revenue Model
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-10 pt-0">
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      { 
                        value: 0.2, 
                        label: "Transaction Fee", 
                        gradient: "from-blue-500 to-cyan-400",
                        suffix: "%",
                        decimals: 1,
                        duration: 2.5
                      },
                      { 
                        value: 100, 
                        label: "Avg Transaction", 
                        gradient: "from-green-500 to-emerald-400",
                        prefix: "$",
                        decimals: 0,
                        duration: 2
                      },
                      { 
                        value: 12, 
                        label: "Growth Rate", 
                        gradient: "from-purple-500 to-pink-400",
                        suffix: "%",
                        decimals: 0,
                        duration: 2.2
                      },
                      { 
                        value: 15, 
                        label: "User Growth", 
                        gradient: "from-orange-500 to-red-400",
                        suffix: "%",
                        decimals: 0,
                        duration: 1.8
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="text-center p-8 glass-effect rounded-2xl shadow-lg group"
                      >
                        <div className={`text-4xl font-bold font-heading mb-3 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                          <CountUp
                            start={0}
                            end={item.value}
                            duration={item.duration}
                            delay={index * 0.3}
                            decimals={item.decimals}
                            prefix={item.prefix || ""}
                            suffix={item.suffix || ""}
                            enableScrollSpy
                            scrollSpyOnce
                          />
                        </div>
                        <div className="text-sm text-gray-300 font-accent uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                          {item.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { year: "Year 1", users: 115000, revenue: 2300000, gradient: "from-blue-500 to-cyan-400" },
                { year: "Year 2", users: 132250, revenue: 2641000, gradient: "from-green-500 to-emerald-400" },
                { year: "Year 3", users: 152088, revenue: 3041760, gradient: "from-purple-500 to-violet-400" },
                { year: "Year 4", users: 175492, revenue: 3509840, gradient: "from-orange-500 to-red-400" },
                { year: "Year 5", users: 202819, revenue: 4056380, gradient: "from-pink-500 to-rose-400" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex justify-between items-center p-8 glass-effect rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center gap-6">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center text-white font-bold text-xl font-mono shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {index + 1}
                    </motion.div>
                    <div>
                      <div className="text-white font-heading font-bold text-2xl">{item.year}</div>
                      <div className="text-gray-300 font-accent">
                        <CountUp
                          start={0}
                          end={item.users}
                          duration={2.5}
                          delay={index * 0.2}
                          separator=","
                          enableScrollSpy
                          scrollSpyOnce
                        /> users
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white font-mono">
                    $<CountUp
                      start={0}
                      end={item.revenue}
                      duration={3}
                      delay={index * 0.15}
                      separator=","
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </div>
                </motion.div>
              ))}
              
              {/* Add a summary card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-10 p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-white/10"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-heading font-bold text-white mb-4">5-Year Total</h3>
                  <div className="text-5xl font-bold font-mono mb-2">
                    $<CountUp
                      start={0}
                      end={15548980}
                      duration={4}
                      delay={1}
                      separator=","
                      enableScrollSpy
                      scrollSpyOnce
                      className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
                    />
                  </div>
                  <p className="text-gray-300 font-accent">Total Projected Revenue</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Investment Section */}
      <motion.section id="investors" className="py-32 px-6 bg-gradient-to-br from-white via-gray-50 to-blue-50 text-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-heading font-bold mb-8 tracking-tight">
              Investment <span className="gradient-text">Rounds</span>
            </h2>
            <p className="text-2xl text-gray-600 font-light leading-relaxed">Join us on our journey to transform the escrow industry</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                stage: "Pre-Seed",
                amount: "$50k",
                equity: "1%",
                goal: "Develop Functional Prototype",
                icon: Rocket,
                gradient: "from-blue-500 to-cyan-400",
              },
              {
                stage: "Seed",
                amount: "$15M",
                equity: "5+1%",
                goal: "Beta Launch & 20k Users",
                icon: TrendingUp,
                gradient: "from-green-500 to-emerald-400",
              },
              {
                stage: "Series A",
                amount: "TBD",
                equity: "TBD",
                goal: "Official Product Launch",
                icon: Target,
                gradient: "from-purple-500 to-pink-400",
              },
            ].map((round, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.03 }}
                className="group"
              >
                <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                  <CardHeader className="text-center p-10">
                    <motion.div
                      className={`w-24 h-24 mx-auto mb-8 bg-gradient-to-br ${round.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <round.icon className="w-12 h-12 text-white" />
                    </motion.div>
                    <CardTitle className="text-3xl text-black font-heading font-bold mb-6">{round.stage}</CardTitle>
                    <div className="flex justify-center gap-4 mb-6">
                      <Badge variant="outline" className={`border-2 bg-gradient-to-r ${round.gradient} text-white px-4 py-2 font-accent font-semibold border-transparent`}>
                        {round.amount}
                      </Badge>
                      <Badge variant="outline" className="border-gray-300 text-gray-700 px-4 py-2 font-accent font-semibold">
                        {round.equity}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-10 pt-0">
                    <p className="text-gray-600 text-center leading-relaxed text-lg">{round.goal}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="py-32 px-6 bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-heading font-bold mb-12 tracking-tight">
              A Relentless Focus on{" "}
              <span className="gradient-text">Better</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-16 leading-relaxed font-light max-w-4xl mx-auto">
              At Across, we don't settle for meeting expectations—we{" "}
              <span className="text-blue-400 font-medium">surpass them</span>. Join us in transforming the future of
              secure transactions, one milestone at a time.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-8 justify-center items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} whileHover={scaleOnHover} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-black hover:bg-gray px-12 py-8 text-2xl rounded-full font-medium glow-effect"
                >
                  <Globe className="mr-4 w-8 h-8" />
                  Join the Revolution
                </Button>
              </motion.div>
              <motion.div variants={itemVariants} whileHover={scaleOnHover} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="glass-effect text-white px-12 py-8 text-2xl rounded-full font-medium"
                >
                  <DollarSign className="mr-4 w-8 h-8" />
                  Invest Now
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-black text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl font-heading mb-6 tracking-tight">Across</h3>
            <p className="text-gray-200 mb-12 font-accent text-xl">Safe Transactions, Always.</p>
            <div className="flex justify-center space-x-8">
              {[
                { Icon: Globe, gradient: "from-blue-500 to-cyan-400" },
                { Icon: Star, gradient: "from-yellow-500 to-orange-400" },
                { Icon: Award, gradient: "from-purple-500 to-pink-400" },
              ].map(({ Icon, gradient }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-all duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}