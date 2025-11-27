import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Camera, Video, Award, Users, Sparkles, TrendingUp, Play, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import cameraMp4 from "../public/camera.mp4";

export function Home() {
  const features = [
    {
      icon: Award,
      title: "Cinematic Quality",
      description: "World-class imagery that captivates and inspires",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Professional creatives with years of experience",
    },
    {
      icon: Sparkles,
      title: "Story-Driven",
      description: "Every frame tells your unique brand story",
    },
    {
      icon: Camera,
      title: "Award-Winning",
      description: "Recognized excellence in commercial production",
    },
    {
      icon: Video,
      title: "Client-Focused",
      description: "Custom packages tailored to your needs",
    },
    {
      icon: TrendingUp,
      title: "Results-Driven",
      description: "Visuals that drive business growth",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src={cameraMp4}
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm">
              <span className="text-[#ea580c]">●</span> Dubai's Premier Media Studio
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight font-medium">
              Dubai's Leading
              <br />
              <span className="text-[#ea580c]">Creative Media</span> Studio
            </h1>
            <p className="text-lg md:text-xl mb-10 text-white/70 max-w-2xl mx-auto">
              We craft high-impact visuals that elevate brands, businesses & events through cinematic photography and videography.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-8 py-6 text-base rounded-full"
                >
                  Book a Shoot
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base rounded-full backdrop-blur-sm"
                >
                  <Play className="mr-2 w-4 h-4" />
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section
      <section className="py-20 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-5xl lg:text-6xl text-[#ea580c] mb-2 font-medium">500+</div>
              <div className="text-white/50 text-sm">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-5xl lg:text-6xl text-[#ea580c] mb-2 font-medium">200+</div>
              <div className="text-white/50 text-sm">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-5xl lg:text-6xl text-[#ea580c] mb-2 font-medium">50+</div>
              <div className="text-white/50 text-sm">Awards Won</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-5xl lg:text-6xl text-[#ea580c] mb-2 font-medium">10+</div>
              <div className="text-white/50 text-sm">Years Experience</div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Features Grid */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-medium">
              Why Choose <span className="text-[#ea580c]">TRIP MEDIA</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              We combine creativity, technology, and commercial expertise to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#ea580c]/50 transition-all hover:bg-white/[0.07] group"
              >
                <div className="w-12 h-12 bg-[#ea580c]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ea580c]/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#ea580c]" />
                </div>
                <h3 className="text-xl mb-2 font-medium">{feature.title}</h3>
                <p className="text-white/50">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm">
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-medium">Our Services</h2>
            <p className="text-lg text-white/50">
              Comprehensive creative solutions for every need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative h-96 rounded-2xl overflow-hidden group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1637348318881-03b4c930a723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcGhvdG9ncmFwaHklMjBzaG9vdHxlbnwxfHx8fDE3NjQxNDQ3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Photography"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end">
                <div className="p-8 w-full">
                  <h3 className="text-2xl mb-2 font-medium">Photography & Videography</h3>
                  <p className="text-white/70 mb-4">
                    Commercial shoots, events, and more
                  </p>
                  <Link to="/services" className="text-[#ea580c] flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative h-96 rounded-2xl overflow-hidden group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1668453814676-c8093305fae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMHN0dWRpb3xlbnwxfHx8fDE3NjQxMjkyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Branding"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end">
                <div className="p-8 w-full">
                  <h3 className="text-2xl mb-2 font-medium">Branding & Marketing</h3>
                  <p className="text-white/70 mb-4">
                    Build and grow your brand identity
                  </p>
                  <Link to="/services" className="text-[#ea580c] flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative h-96 rounded-2xl overflow-hidden group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1534443274343-c6200874852c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMHNjZW5pY3xlbnwxfHx8fDE3NjQxMjMzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Travel"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end">
                <div className="p-8 w-full">
                  <h3 className="text-2xl mb-2 font-medium">Travel Experiences</h3>
                  <p className="text-white/70 mb-4">
                    Luxury getaways and destination shoots
                  </p>
                  <Link to="/services" className="text-[#ea580c] flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button
                size="lg"
                className="bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full px-8"
              >
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-medium">Ready to Create Something Amazing?</h2>
            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
              Let's bring your vision to life with world-class photography and videography
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-[#ea580c] px-8 py-6 text-base rounded-full"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
