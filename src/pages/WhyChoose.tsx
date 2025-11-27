import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Award,
  Users,
  BookOpen,
  Settings,
  Package,
  Camera,
  Video,
  Zap,
  Shield,
  Clock,
  ThumbsUp,
  Globe,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import camera2 from "../public/camera2.mp4";

export function WhyChoose() {
  const reasons = [
    {
      icon: Award,
      title: "Cinematic Quality",
      description:
        "We deliver world-class imagery that captivates audiences and stands out in the market. Every frame is crafted with precision and artistic vision.",
      color: "orange",
    },
    {
      icon: Users,
      title: "Expert Creative Team",
      description:
        "Our team consists of award-winning photographers, videographers, and creative directors with years of industry experience and proven track records.",
      color: "orange",
    },
    {
      icon: BookOpen,
      title: "Story-Driven Approach",
      description:
        "We don't just capture images—we tell compelling stories that connect with your audience emotionally and drive engagement.",
      color: "orange",
    },
    {
      icon: Settings,
      title: "Cutting-Edge Equipment",
      description:
        "We use the latest professional cameras, lenses, drones, and lighting equipment to ensure the highest quality output for every project.",
      color: "orange",
    },
    {
      icon: Package,
      title: "Custom Packages for Every Client",
      description:
        "Flexible pricing and customizable packages designed to meet your specific needs and budget, from startups to enterprise clients.",
      color: "orange",
    },
    {
      icon: Camera,
      title: "Diverse Expertise",
      description:
        "From commercial shoots to destination weddings, corporate events to fashion editorials—we excel across all photography and videography domains.",
      color: "orange",
    },
  ];

  const additionalBenefits = [
    {
      icon: Video,
      title: "Full Production Services",
      description: "End-to-end production from concept to final delivery",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising on quality",
    },
    {
      icon: Shield,
      title: "Professional Standards",
      description: "Industry-leading quality and reliability",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Available when you need us most",
    },
    {
      icon: ThumbsUp,
      title: "Client Satisfaction",
      description: "98% client satisfaction rate",
    },
    {
      icon: Globe,
      title: "Local & International",
      description: "Serving clients across UAE and beyond",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src={camera2}
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
   
      </section>

      {/* Main Reasons */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              We combine creativity, technology, and commercial expertise to deliver
              exceptional results that drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-lg p-8 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-6">
                  <reason.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-2xl mb-4">{reason.title}</h3>
                <p className="text-white/70 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Additional Benefits</h2>
            <p className="text-xl text-white/60">
              More reasons to partner with TRIP MEDIA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-white/10 rounded-lg p-6 flex items-start gap-4 hover:border-orange-500/50 transition-colors"
              >
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg mb-2">{benefit.title}</h3>
                  <p className="text-white/60 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Our Commitment to You</h2>
          </div>

          <div className="bg-black border border-white/10 rounded-lg p-8 md:p-12">
            <div className="space-y-6 text-lg text-white/80">
              <p>
                At <span className="text-orange-500">TRIP MEDIA</span>, we're not just
                service providers—we're your creative partners. We invest time in
                understanding your brand, your goals, and your vision to create content
                that truly resonates.
              </p>
              <p>
                Our commitment to excellence means we never compromise on quality. Every
                project, regardless of size, receives the same level of attention,
                creativity, and professionalism.
              </p>
              <p>
                We believe in building long-term relationships with our clients. Your
                success is our success, and we're dedicated to helping you achieve your
                business objectives through powerful visual storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Proven Track Record</h2>
            <p className="text-xl text-white/60">
              Numbers that demonstrate our expertise and reliability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl text-orange-500 mb-2">500+</div>
              <div className="text-white/60">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl text-orange-500 mb-2">200+</div>
              <div className="text-white/60">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl text-orange-500 mb-2">50+</div>
              <div className="text-white/60">Industry Awards</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl text-orange-500 mb-2">98%</div>
              <div className="text-white/60">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Industries We Serve</h2>
            <p className="text-xl text-white/60">
              Diverse expertise across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Real Estate",
              "Fashion & Retail",
              "Hospitality",
              "Tourism & Travel",
              "Corporate",
              "Events & Weddings",
              "Food & Beverage",
              "Technology",
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-lg p-6 text-center hover:border-orange-500 transition-colors"
              >
                <p className="text-lg">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-4">
            Experience the TRIP MEDIA Difference
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join hundreds of satisfied clients who trust us with their visual content
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-900 text-white px-8 py-6 text-lg"
            >
              Start Your Project Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
