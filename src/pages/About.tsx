import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Target, Eye, Award, Users } from "lucide-react";
import { motion } from "motion/react";

// Team images
import photographerImage from "../public/img/Photography.jpg";
import creativeDirectorImage from "../public/img/Creative-Dire.jpg";
import productionTeamImage from "../public/img/Production-team.jpg";

// Letter animation
const aboutLetterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function About() {
  const fullText = "About TRIP MEDIA";
  const textToColor = "TRIP MEDIA";
  const highlightStart = fullText.indexOf(textToColor);

  return (
    <div className="bg-[#0a0a0a] text-white">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1668453814676-c8093305fae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Photography studio"
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
              Our Story
            </div>

            {/* Animated Heading with Extra Space Between TRIP & MEDIA */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl mb-4 font-medium tracking-tight"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05 },
                },
              }}
            >
              {Array.from(fullText).map((char, i) => {
                const firstSpaceIndex = fullText.indexOf(" ");       // space after About
                const secondSpaceIndex = fullText.indexOf(" ", firstSpaceIndex + 1); // space between TRIP & MEDIA

                const isAboutTripSpace = i === firstSpaceIndex;
                const isTripMediaSpace = i === secondSpaceIndex;

                const baseClass =
                  char === " "
                    ? isTripMediaSpace
                      ? "inline-block w-6" // BIGGER SPACE between TRIP & MEDIA
                      : isAboutTripSpace
                      ? "inline-block w-6"
                      : "inline-block w-2"
                    : "inline-block";

                const colorClass = i >= highlightStart ? " text-[#ea580c]" : "";

                return (
                  <motion.span
                    key={i}
                    className={baseClass + colorClass}
                    variants={aboutLetterVariants}
                    custom={i}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </motion.h1>

            <p className="text-xl text-white/70">
              Dubai’s Premier Creative Production Studio
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-white/70 leading-relaxed mb-8">

              <span className="text-[#ea580c]">TRIP MEDIA</span> is Dubai’s forward-thinking 
              creative production studio, built on storytelling, innovation, and world-class 
              craftsmanship. <br /><br />

              We transform brand visions into cinematic experiences — from product shoots and 
              commercial campaigns to corporate, lifestyle, and event content. <br /><br />

              Every frame we create is crafted with intention and impact, helping brands engage 
              audiences, inspire action, and strengthen identity.
              
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#ea580c]/10 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-[#ea580c]" />
                </div>
                <h2 className="text-3xl font-medium">Our Mission</h2>
              </div>

              <p className="text-lg text-white/60 leading-relaxed">
                To redefine the Middle East’s creative landscape by producing powerful, 
                story-driven photography and videography that elevate brands, ignite 
                engagement, and create lasting emotional impact.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#ea580c]/10 rounded-2xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-[#ea580c]" />
                </div>
                <h2 className="text-3xl font-medium">Our Vision</h2>
              </div>

              <p className="text-lg text-white/60 leading-relaxed">
                To become a global benchmark in creative media production — where artistry, 
                innovation, and technology merge to craft visuals that move people, reshape 
                brands, and stand the test of time.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
              Core Values
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-medium">Our Core Values</h2>
            <p className="text-lg text-white/50">The principles that guide everything we create</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              { icon: Award, title: "Excellence", desc: "Delivering uncompromising quality and cinematic precision." },
              { icon: Users, title: "Collaboration", desc: "Partnering with clients as creative collaborators." },
              { icon: Target, title: "Innovation", desc: "Pushing boundaries with modern tools and ideas." },
              { icon: Eye, title: "Purpose", desc: "Crafting visuals with meaning, intention, and impact." },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#ea580c]/50 transition-colors"
              >
                <div className="w-16 h-16 bg-[#ea580c]/10 rounded-2xl mx-auto flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-[#ea580c]" />
                </div>
                <h3 className="text-xl mb-2 font-medium">{value.title}</h3>
                <p className="text-white/50">{value.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
              Meet the Team
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-medium">Our Team</h2>

            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              A dynamic group of creative thinkers and production experts shaping visual stories with passion and precision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                image: photographerImage,
                title: "Photographers",
                desc: "Artists of light, detail, and emotion—capturing visuals that turn into unforgettable brand stories."
              },
              {
                image: creativeDirectorImage,
                title: "Creative Directors",
                desc: "The vision architects who define narrative, style, and brand identity across every project."
              },
              {
                image: productionTeamImage,
                title: "Production Team",
                desc: "The powerhouse behind the scenes—ensuring seamless execution, smooth logistics, and world-class delivery."
              }
            ].map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative h-96 rounded-2xl overflow-hidden group"
              >
                <ImageWithFallback
                  src={team.image}
                  alt={team.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end">
                  <div className="p-8">
                    <h3 className="text-2xl mb-1 font-medium">{team.title}</h3>
                    <p className="text-white/60">{team.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
