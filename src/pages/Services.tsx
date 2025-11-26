import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import {
  Camera,
  Video,
  Package,
  Shirt,
  Tv,
  Plane,
  Heart,
  Cake,
  MapPin,
  Palette,
  TrendingUp,
  Bot,
  Share2,
} from "lucide-react";

export function Services() {
  const photographyServices = [
    { icon: Camera, name: "Commercial Shoot", description: "Professional commercial photography for businesses" },
    { icon: Video, name: "Corporate Event Coverage", description: "Comprehensive event documentation" },
    { icon: Camera, name: "Corporate Meeting Coverage", description: "Capture important business moments" },
    { icon: Camera, name: "Photoshoot", description: "Creative photoshoots for all occasions" },
    { icon: Video, name: "Video Shoot", description: "Cinematic video production services" },
    { icon: Package, name: "Product Photography", description: "Stunning product imagery for e-commerce and marketing" },
    { icon: Shirt, name: "Fashion Photography", description: "High-end fashion and editorial shoots" },
    { icon: Tv, name: "Ad Making / TVC", description: "TV commercials and advertising content" },
    { icon: Plane, name: "Travel Movie", description: "Captivating travel documentaries and films" },
    { icon: Heart, name: "Pre-Wedding Shoot", description: "Romantic pre-wedding photography" },
    { icon: Heart, name: "Post-Wedding Shoot", description: "Beautiful post-wedding memories" },
    { icon: Cake, name: "Birthday Celebration Coverage", description: "Memorable birthday event coverage" },
    { icon: MapPin, name: "Destination Wedding Coverage", description: "Full-service destination wedding photography" },
{
  icon: Camera, name: "Sports Coverage",description: "Professional sports event photography and videography"},
  ];

  const brandingServices = [
    { icon: Palette, name: "Brand Creation", description: "Complete brand identity development" },
    { icon: TrendingUp, name: "Digital Marketing", description: "Strategic digital marketing campaigns" },
    { icon: Bot, name: "AI Marketing", description: "AI-powered marketing solutions" },
    { icon: Share2, name: "Social Media Content Creation", description: "Engaging social media content" },
  ];

  const travelServices = [
    { icon: Plane, name: "Luxury Getaway Shoots", description: "Premium travel photography experiences" },
    { icon: Camera, name: "Group Adventure Photography", description: "Document group travel adventures" },
    { icon: Video, name: "Memory Lane Trip Films", description: "Cinematic travel video memories" },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1637348318881-03b4c930a723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcGhvdG9ncmFwaHklMjBzaG9vdHxlbnwxfHx8fDE3NjQxNDQ3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professional photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl mb-4">
            Our <span className="text-orange-500">Services</span>
          </h1>
          <p className="text-xl text-white/80">
            Comprehensive creative solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Photography & Videography Services */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Photography & Videography</h2>
            <p className="text-xl text-white/60">
              Professional visual content for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photographyServices.map((service, index) => (
              <div
                key={index}
                className="bg-black/50 border border-white/10 rounded-lg p-6 hover:border-orange-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl mb-2">{service.name}</h3>
                <p className="text-white/60">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branding & Marketing Services */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Branding & Marketing</h2>
            <p className="text-xl text-white/60">
              Build and grow your brand with strategic marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandingServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-white/10 rounded-lg p-6 hover:border-orange-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl mb-2">{service.name}</h3>
                <p className="text-white/60">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Experiences */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Travel Experiences</h2>
            <p className="text-xl text-white/60">
              Capture your adventures in stunning detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {travelServices.map((service, index) => (
              <div
                key={index}
                className="bg-black/50 border border-white/10 rounded-lg p-8 hover:border-orange-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-2xl mb-3">{service.name}</h3>
                <p className="text-white/60 text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Our Process</h2>
            <p className="text-xl text-white/60">
              How we bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                1
              </div>
              <h3 className="text-xl mb-2">Consultation</h3>
              <p className="text-white/60">
                We discuss your vision, goals, and requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                2
              </div>
              <h3 className="text-xl mb-2">Planning</h3>
              <p className="text-white/60">
                Detailed planning and creative direction
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                3
              </div>
              <h3 className="text-xl mb-2">Production</h3>
              <p className="text-white/60">
                Professional shoot with expert team
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                4
              </div>
              <h3 className="text-xl mb-2">Delivery</h3>
              <p className="text-white/60">
                Final edited content delivered on time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how we can help bring your vision to life
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-900 text-white px-8 py-6 text-lg"
            >
              Book Your Shoot
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
