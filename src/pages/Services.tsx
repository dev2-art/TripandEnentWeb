import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export function Services() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [direction, setDirection] = useState(0);

  const serviceCategories = [
    {
      id: 1,
      title: "Photography & Videography",
      description: "Professional visual content for every occasion",
      bgImage: "https://images.unsplash.com/photo-1637348318881-03b4c930a723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcGhvdG9ncmFwaHklMjBzaG9vdHxlbnwxfHx8fDE3NjQxNDQ3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      services: [
        {
          name: "Commercial Shoot",
          image: "https://images.unsplash.com/photo-1637348318881-03b4c930a723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcGhvdG9ncmFwaHklMjBzaG9vdHxlbnwxfHx8fDE3NjQxNDQ3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          description: "Professional commercial photography for businesses"
        },
        {
          name: "Corporate Event Coverage",
          image: "https://images.unsplash.com/photo-1571645163064-77faa9676a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NDE0MzIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          description: "Comprehensive event documentation"
        },
        {
          name: "Corporate Meeting Coverage",
          image: "https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZWV0aW5nJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY0MjI2NzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          description: "Capture important business moments"
        },
        {
          name: "Photoshoot",
          image: "https://images.unsplash.com/photo-1675435970366-f1299ff2ff3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b3Nob290JTIwc3R1ZGlvJTIwbGlnaHRzfGVufDF8fHx8MTc2NDIyNjc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          description: "Creative photoshoots for all occasions"
        },
        {
          name: "Video Shoot",
          image: "https://images.unsplash.com/photo-1654288891700-95f67982cbcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBjYW1lcmF8ZW58MXx8fHwxNzY0MjI2MzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          description: "Cinematic video production services"
        },
        {
          name: "Product Photography",
          image: "https://images.unsplash.com/photo-1719176010035-17729577d496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjBsdXh1cnl8ZW58MXx8fHwxNzY0MTQ0NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          description: "Stunning product imagery"
        },
        {
          name: "Fashion Photography",
          image: "https://images.unsplash.com/photo-1727791719116-39761d569f32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBtb2RlbHxlbnwxfHx8fDE3NjQxMzc1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          description: "High-end fashion shoots"
        },
        {
          name: "Ad Making / TVC",
          image: "https://images.unsplash.com/photo-1719954147576-f103d71cd979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlcnRpc2luZyUyMGNvbW1lcmNpYWwlMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2NDIyNjc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          description: "TV commercials and advertising"
        },
        {
          name: "Travel Movie",
          image: "https://images.unsplash.com/photo-1711120356957-41972d4643a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBmaWxtJTIwc2NlbmVyeXxlbnwxfHx8fDE3NjQyMjY3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          description: "Captivating travel films"
        },
      ]
    },
    {
      id: 2,
      title: "Wedding & Celebration",
      description: "Capturing life's most precious moments",
      bgImage: "https://images.unsplash.com/photo-1700062069869-0c59ff21fa3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzY0MTIwNjg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      services: [
        {
          name: "Pre-Wedding Shoot",
          image: "https://images.unsplash.com/photo-1655490162630-175929877280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY0MjI2NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          description: "Romantic pre-wedding photography"
        },
        {
          name: "Post-Wedding Shoot",
          image: "https://images.unsplash.com/photo-1700062069869-0c59ff21fa3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzY0MTIwNjg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          description: "Beautiful post-wedding memories"
        },
        {
          name: "Destination Wedding Coverage",
          image: "https://images.unsplash.com/photo-1569976088853-abf1c2cb282a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXN0aW5hdGlvbiUyMHdlZGRpbmclMjBiZWFjaHxlbnwxfHx8fDE3NjQyMjY3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          description: "Full-service destination weddings"
        },
        {
          name: "Birthday Celebration Coverage",
          image: "https://images.unsplash.com/photo-1650584997985-e713a869ee77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY0MTcxODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          description: "Memorable birthday events"
        },
      ]
    },
    {
      id: 3,
      title: "Branding & Marketing",
      description: "Build and grow your brand identity",
      bgImage: "https://images.unsplash.com/photo-1633533447057-56ccf997f4fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc2NDE5MTMyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      services: [
        {
          name: "Brand Creation",
          image: "https://images.unsplash.com/photo-1633533447057-56ccf997f4fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc2NDE5MTMyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          description: "Complete brand identity development"
        },
        {
          name: "Digital Marketing",
          image: "https://images.unsplash.com/photo-1547621008-d6d6d2e28e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc29jaWFsfGVufDF8fHx8MTc2NDIxMjA4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          description: "Strategic digital marketing campaigns"
        },
        {
          name: "AI Marketing",
          image: "https://images.unsplash.com/photo-1668453814676-c8093305fae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMHN0dWRpb3xlbnwxfHx8fDE3NjQxMjkyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          description: "AI-powered marketing solutions"
        },
        {
          name: "Social Media Content Creation",
          image: "https://images.unsplash.com/photo-1547621008-d6d6d2e28e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc29jaWFsfGVufDF8fHx8MTc2NDIxMjA4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          description: "Engaging social media content"
        },
      ]
    },
    {
      id: 4,
      title: "Travel Experiences",
      description: "Capture your adventures in stunning detail",
      bgImage: "https://images.unsplash.com/photo-1534443274343-c6200874852c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMHNjZW5pY3xlbnwxfHx8fDE3NjQxMjMzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      services: [
        {
          name: "Luxury Getaway Shoots",
          image: "https://images.unsplash.com/photo-1667987566780-3b31fa5485c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0cmF2ZWwlMjBkZXN0aW5hdGlvbnxlbnwxfHx8fDE3NjQyMjM0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          description: "Premium travel photography experiences"
        },
        {
          name: "Group Adventure Photography",
          image: "https://images.unsplash.com/photo-1741660420355-aed07ee9208f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBncm91cCUyMGhpa2luZ3xlbnwxfHx8fDE3NjQyMjY3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          description: "Document group travel adventures"
        },
        {
          name: "Memory Lane Trip Films",
          image: "https://images.unsplash.com/photo-1711120356957-41972d4643a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBmaWxtJTIwc2NlbmVyeXxlbnwxfHx8fDE3NjQyMjY3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          description: "Cinematic travel video memories"
        },
      ]
    },
    {
      id: 4,
      title: "Sports Coverages",
      description: "Dynamic coverage for all sporting events",
      bgImage: "https://images.unsplash.com/photo-1534443274343-c6200874852c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMHNjZW5pY3xlbnwxfHx8fDE3NjQxMjMzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      services: [
        {
          name: "Luxury Getaway Shoots",
          image: "https://images.unsplash.com/photo-1667987566780-3b31fa5485c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0cmF2ZWwlMjBkZXN0aW5hdGlvbnxlbnwxfHx8fDE3NjQyMjM0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          description: "Premium travel photography experiences"
        },
        {
          name: "Group Adventure Photography",
          image: "https://images.unsplash.com/photo-1741660420355-aed07ee9208f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBncm91cCUyMGhpa2luZ3xlbnwxfHx8fDE3NjQyMjY3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          description: "Document group travel adventures"
        },
        {
          name: "Memory Lane Trip Films",
          image: "https://images.unsplash.com/photo-1711120356957-41972d4643a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBmaWxtJTIwc2NlbmVyeXxlbnwxfHx8fDE3NjQyMjY3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          description: "Cinematic travel video memories"
        },
      ]
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentCategory((prev) => (prev + 1) % serviceCategories.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentCategory((prev) => (prev - 1 + serviceCategories.length) % serviceCategories.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentCategory ? 1 : -1);
    setCurrentCategory(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1637348318881-03b4c930a723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcGhvdG9ncmFwaHklMjBzaG9vdHxlbnwxfHx8fDE3NjQxNDQ3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professional photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm">
              What We Offer
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4 font-medium tracking-tight">
              Our <span className="text-[#ea580c]">Services</span>
            </h1>
            <p className="text-xl text-white/70">
              Comprehensive creative solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {serviceCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => goToSlide(index)}
                className={`px-6 py-3 rounded-full transition-all ${
                  currentCategory === index
                    ? "bg-[#ea580c] text-white"
                    : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Carousel Container */}
          <div className="relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentCategory}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
              >
                {/* Category Hero */}
                <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
                  <ImageWithFallback
                    src={serviceCategories[currentCategory].bgImage}
                    alt={serviceCategories[currentCategory].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end">
                    <div className="p-12 w-full">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-medium">
                        {serviceCategories[currentCategory].title}
                      </h2>
                      <p className="text-xl text-white/80">
                        {serviceCategories[currentCategory].description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {serviceCategories[currentCategory].services.map((service, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group relative h-80 rounded-2xl overflow-hidden"
                    >
                      <ImageWithFallback
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-xl mb-2 font-medium">{service.name}</h3>
                          <p className="text-white/70 text-sm mb-4">{service.description}</p>
                          <div className="flex items-center text-[#ea580c] text-sm group-hover:gap-2 transition-all">
                            Learn More <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-[#ea580c] rounded-full flex items-center justify-center transition-colors border border-white/10"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-[#ea580c] rounded-full flex items-center justify-center transition-colors border border-white/10"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {serviceCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all ${
                  currentCategory === index
                    ? "w-12 bg-[#ea580c]"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm">
              How We Work
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-medium">Our Process</h2>
            <p className="text-lg text-white/50">
              How we bring your vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Consultation", desc: "We discuss your vision, goals, and requirements" },
              { num: "02", title: "Planning", desc: "Detailed planning and creative direction" },
              { num: "03", title: "Production", desc: "Professional shoot with expert team" },
              { num: "04", title: "Delivery", desc: "Final edited content delivered on time" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#ea580c] to-[#c2410c] rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-medium">
                  {step.num}
                </div>
                <h3 className="text-xl mb-2 font-medium">{step.title}</h3>
                <p className="text-white/50">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#ea580c] to-[#c2410c] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-medium">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-10 text-white/90">
              Let's discuss how we can help bring your vision to life
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-[#ea580c] px-8 py-6 text-base rounded-full"
              >
                Book Your Shoot
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
