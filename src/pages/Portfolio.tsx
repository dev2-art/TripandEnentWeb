import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import { Button } from "../components/ui/button";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Work" },
    { id: "real-estate", name: "Real Estate" },
    { id: "fashion", name: "Fashion" },
    { id: "hospitality", name: "Hospitality" },
    { id: "tourism", name: "Tourism" },
    { id: "corporate", name: "Corporate" },
    { id: "weddings", name: "Weddings" },
    { id: "Sports", name: "Sports Coverages" },
  ];

  const portfolioItems = [
    {
      id: 1,
      category: "real-estate",
      title: "Luxury Villa Interior",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY0MTM0MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "High-end residential property photography",
    },
    {
      id: 2,
      category: "fashion",
      title: "Fashion Editorial",
      image: "https://images.unsplash.com/photo-1727791719116-39761d569f32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBtb2RlbHxlbnwxfHx8fDE3NjQxMzc1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Editorial fashion campaign for luxury brand",
    },
    {
      id: 3,
      category: "hospitality",
      title: "Fine Dining Experience",
      image: "https://images.unsplash.com/photo-1758648207539-b40dd1f6b50e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbGl0eSUyMHJlc3RhdXJhbnQlMjBlbGVnYW50fGVufDF8fHx8MTc2NDE0NDc5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Restaurant and culinary photography",
    },
    {
      id: 4,
      category: "tourism",
      title: "Destination Showcase",
      image: "https://images.unsplash.com/photo-1534443274343-c6200874852c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMHNjZW5pY3xlbnwxfHx8fDE3NjQxMjMzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Travel and tourism promotional content",
    },
    {
      id: 5,
      category: "corporate",
      title: "Corporate Event",
      image: "https://images.unsplash.com/photo-1571645163064-77faa9676a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NDE0MzIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Business conference coverage",
    },
    {
      id: 6,
      category: "weddings",
      title: "Luxury Wedding",
      image: "https://images.unsplash.com/photo-1700062069869-0c59ff21fa3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzY0MTIwNjg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Destination wedding photography",
    },
    {
      id: 7,
      category: "real-estate",
      title: "Commercial Property",
      image: "https://images.unsplash.com/photo-1721170628951-aa4bfa50be28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGNpdHlzY2FwZSUyMGNpbmVtYXRpY3xlbnwxfHx8fDE3NjQxNDQ3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Dubai commercial real estate",
    },
    {
      id: 8,
      category: "fashion",
      title: "Product Photography",
      image: "https://images.unsplash.com/photo-1719176010035-17729577d496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjBsdXh1cnl8ZW58MXx8fHwxNzY0MTQ0NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Luxury product photography",
    },
    {
      id: 9,
      category: "corporate",
      title: "Commercial Shoot",
      image: "https://images.unsplash.com/photo-1637348318881-03b4c930a723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcGhvdG9ncmFwaHklMjBzaG9vdHxlbnwxfHx8fDE3NjQxNDQ3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Professional commercial photography",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1668453814676-c8093305fae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMHN0dWRpb3xlbnwxfHx8fDE3NjQxMjkyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl mb-4">
            Our <span className="text-orange-500">Portfolio</span>
          </h1>
          <p className="text-xl text-white/80">
            A showcase of our finest work across various industries
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-900 sticky top-20 z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={
                  activeCategory === category.id
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "border-white/20 text-white hover:bg-white/10"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative h-96 rounded-lg overflow-hidden cursor-pointer"
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-2xl mb-2">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                    <div className="mt-4">
                      <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm">
                        {categories.find((cat) => cat.id === item.category)?.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-white/60">
                No projects found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Our Impact</h2>
            <p className="text-xl text-white/60">
              Numbers that speak to our expertise
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl text-orange-500 mb-2">500+</div>
              <div className="text-white/60">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl text-orange-500 mb-2">200+</div>
              <div className="text-white/60">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl text-orange-500 mb-2">50+</div>
              <div className="text-white/60">Awards Won</div>
            </div>
            <div>
              <div className="text-5xl text-orange-500 mb-2">98%</div>
              <div className="text-white/60">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">What Our Clients Say</h2>
            <p className="text-xl text-white/60">
              Trusted by leading brands and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-white/10 rounded-lg p-8">
              <div className="text-orange-500 text-4xl mb-4">"</div>
              <p className="text-lg text-white/80 mb-6">
                TRIP MEDIA transformed our brand with stunning visuals. Their
                attention to detail and creative vision exceeded our expectations.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span>AS</span>
                </div>
                <div>
                  <div>Ahmed Salem</div>
                  <div className="text-sm text-white/60">CEO, Luxury Real Estate</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-white/10 rounded-lg p-8">
              <div className="text-orange-500 text-4xl mb-4">"</div>
              <p className="text-lg text-white/80 mb-6">
                Professional, creative, and reliable. The team captured our
                destination wedding beautifully. Every moment was perfect.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span>SK</span>
                </div>
                <div>
                  <div>Sarah Khan</div>
                  <div className="text-sm text-white/60">Wedding Client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
