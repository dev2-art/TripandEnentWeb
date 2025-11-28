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
  VolumeX,
  Volume2,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { useRef, useState } from "react";
import camera2 from "../public/camera2.mp4";
import { CiPlay1, CiPause1 } from "react-icons/ci";

export function WhyChoose() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const reasons = [
    {
      icon: Award,
      title: "Cinematic Quality",
      description:
        "We deliver world-class imagery that captivates audiences and stands out in the market. Every frame is crafted with precision and artistic vision.",
    },
    {
      icon: Users,
      title: "Expert Creative Team",
      description:
        "Our team consists of award-winning photographers, videographers, and creative directors with years of industry experience and proven track records.",
    },
    {
      icon: BookOpen,
      title: "Story-Driven Approach",
      description:
        "We don't just capture images—we tell compelling stories that connect with your audience emotionally and drive engagement.",
    },
    {
      icon: Settings,
      title: "Cutting-Edge Equipment",
      description:
        "We use the latest professional cameras, lenses, drones, and lighting equipment to ensure the highest quality output for every project.",
    },
    {
      icon: Package,
      title: "Custom Packages for Every Client",
      description:
        "Flexible pricing and customizable packages designed to meet your specific needs and budget, from startups to enterprise clients.",
    },
    {
      icon: Camera,
      title: "Diverse Expertise",
      description:
        "From commercial shoots to destination weddings, corporate events to fashion editorials—we excel across all photography and videography domains.",
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

      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1668453814676-c8093305fae6"
            alt="Professional studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl mb-4">
            Why Choose <span className="text-orange-500">TRIP MEDIA</span>
          </h1>
          <p className="text-xl text-white/80">
            The reasons that make us Dubai's leading creative media studio
          </p>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={camera2} type="video/mp4" />
          </video>

          {/* PLAY + MUTE CONTROLS */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6">

            {/* PLAY / PAUSE BUTTON */}
            <button
              onClick={togglePlay}
              className="p-4 bg-black/60 rounded-full text-white backdrop-blur hover:bg-black/80 transition"
            >
              {isPlaying ? (
                <CiPause1 className="w-7 h-7 flex-shrink-0" aria-hidden="true" />
              ) : (
                <CiPlay1 className="w-7 h-7 flex-shrink-0" aria-hidden="true" />
              )}
            </button>

            {/* MUTE / UNMUTE */}
            <button
              onClick={toggleMute}
              className="p-4 bg-black/60 rounded-full text-white backdrop-blur hover:bg-black/80 transition"
            >
              {isMuted ? (
                <VolumeX className="w-6 h-6 flex-shrink-0" aria-hidden="true" />
              ) : (
                <Volume2 className="w-6 h-6 flex-shrink-0" aria-hidden="true" />
              )}
            </button>

          </div>
        </div>
      </section>

      {/* MAIN REASONS */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Creativity, technology, and powerful storytelling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-lg p-8 hover:border-orange-500 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-6">
                  <span className="flex items-center justify-center w-full h-full">
                    {reason.icon ? (
                      <reason.icon className="w-8 h-8 text-orange-500 flex-shrink-0" aria-hidden="true" />
                    ) : (
                      <div className="w-8 h-8 bg-orange-500 rounded-full" /> // Fallback placeholder
                    )}
                  </span>
                </div>
                <h3 className="text-2xl mb-4">{reason.title}</h3>
                <p className="text-white/70">{reason.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ADDITIONAL BENEFITS */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Additional Benefits</h2>
            <p className="text-xl text-white/60">More reasons to choose us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-white/10 rounded-lg p-6 flex items-start gap-4 hover:border-orange-500/50 transition"
              >
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="flex items-center justify-center w-full h-full">
                    {benefit.icon ? (
                      <benefit.icon className="w-6 h-6 text-orange-500 flex-shrink-0" aria-hidden="true" />
                    ) : (
                      <div className="w-6 h-6 bg-orange-500 rounded" /> // Fallback placeholder
                    )}
                  </span>
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

      {/* COMMITMENT */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Our Commitment to You</h2>
          </div>

          <div className="bg-black border border-white/10 rounded-lg p-8 md:p-12 text-lg text-white/80 space-y-6">
            <p>
              At <span className="text-orange-500">TRIP MEDIA</span>, we become
              your creative partners. We deeply understand your brand and goals.
            </p>
            <p>
              Every project receives unmatched attention, creativity, and quality.
            </p>
            <p>
              We build long-term partnerships and ensure your success through
              powerful visual storytelling.
            </p>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Proven Track Record</h2>
            <p className="text-xl text-white/60">Numbers that speak for us</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: "500+", label: "Successful Projects" },
              { n: "200+", label: "Satisfied Clients" },
              { n: "50+", label: "Industry Awards" },
              { n: "98%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl text-orange-500 mb-2">
                  {stat.n}
                </div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INDUSTRIES */}
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
                className="bg-black border border-white/10 rounded-lg p-6 text-center hover:border-orange-500 transition"
              >
                <p className="text-lg">{industry}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
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