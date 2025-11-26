import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your inquiry! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/971501234567", "_blank");
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1721170628951-aa4bfa50be28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGNpdHlzY2FwZSUyMGNpbmVtYXRpY3xlbnwxfHx8fDE3NjQxNDQ3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Dubai cityscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl mb-4">
            Get in <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-xl text-white/80">
            Let's discuss your next project and bring your vision to life
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl mb-4">Book a Shoot</h2>
                <p className="text-white/60 text-lg">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-black border-white/20 text-white placeholder:text-white/40"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-black border-white/20 text-white placeholder:text-white/40"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-black border-white/20 text-white placeholder:text-white/40"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Interested In *</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full h-10 px-3 py-2 bg-black border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select a service</option>
                    <option value="commercial">Commercial Photography</option>
                    <option value="corporate-event">Corporate Event Coverage</option>
                    <option value="product">Product Photography</option>
                    <option value="fashion">Fashion Photography</option>
                    <option value="video">Video Production</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="travel">Travel Photography</option>
                    <option value="branding">Branding & Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-black border-white/20 text-white placeholder:text-white/40"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl mb-4">Contact Information</h2>
                <p className="text-white/60 text-lg">
                  Reach out to us through any of these channels
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-black border border-white/10 rounded-lg p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Phone</h3>
                    <p className="text-white/70">+971 50 123 4567</p>
                    <p className="text-white/70">+971 4 567 8901</p>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-black border border-white/10 rounded-lg p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Email</h3>
                    <p className="text-white/70">info@tripmedia.ae</p>
                    <p className="text-white/70">bookings@tripmedia.ae</p>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-black border border-white/10 rounded-lg p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Office Location</h3>
                    <p className="text-white/70">
                      Building No. 5, Office 301
                      <br />
                      Dubai Media City
                      <br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-black border border-white/10 rounded-lg p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Business Hours</h3>
                    <p className="text-white/70">
                      Sunday - Thursday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Friday: Closed
                    </p>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Visit Our Studio</h2>
            <p className="text-xl text-white/60">
              Located in the heart of Dubai Media City
            </p>
          </div>

          <div className="bg-gray-900 border border-white/10 rounded-lg overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0815589483475!2d55.1522!3d25.0944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6ca7b5e0e0e7%3A0x1e1e1e1e1e1e1e1e!2sDubai%20Media%20City!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TRIP MEDIA Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-white/60">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-black border border-white/10 rounded-lg p-6">
              <h3 className="text-xl mb-2">What is your typical turnaround time?</h3>
              <p className="text-white/70">
                Most projects are delivered within 7-14 business days. Rush services
                are available for urgent projects.
              </p>
            </div>

            <div className="bg-black border border-white/10 rounded-lg p-6">
              <h3 className="text-xl mb-2">Do you travel for destination shoots?</h3>
              <p className="text-white/70">
                Yes, we offer destination photography and videography services across
                the UAE and internationally.
              </p>
            </div>

            <div className="bg-black border border-white/10 rounded-lg p-6">
              <h3 className="text-xl mb-2">Can I customize my package?</h3>
              <p className="text-white/70">
                Absolutely! We create custom packages tailored to your specific needs
                and budget.
              </p>
            </div>

            <div className="bg-black border border-white/10 rounded-lg p-6">
              <h3 className="text-xl mb-2">What equipment do you use?</h3>
              <p className="text-white/70">
                We use professional-grade cameras, lenses, drones, and lighting
                equipment from leading brands like Canon, Sony, and DJI.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
