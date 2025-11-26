import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Target, Eye, Award, Users } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1668453814676-c8093305fae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMHN0dWRpb3xlbnwxfHx8fDE3NjQxMjkyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4 font-medium tracking-tight">
              About <span className="text-[#ea580c]">TRIP MEDIA</span>
            </h1>
            <p className="text-xl text-white/70">
              Dubai's Creative Powerhouse
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              <span className="text-[#ea580c]">TRIP MEDIA</span> is a creative
              powerhouse in the UAE, specializing in high-impact commercial
              photography, cinematic videography, and visual storytelling for brands,
              businesses, and events. Established in Dubai, TRIP MEDIA delivers
              world-class imagery that captivates audiences and drives business results.
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
                To become the UAE's leading name in commercial photography and visual
                content creation, blending creativity with commercial value to help
                brands stand out.
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
                To set a global standard in creative media by combining storytelling,
                innovation, and technology — turning every photo and video into a
                powerful brand asset.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm">
              Core Values
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-medium">Our Core Values</h2>
            <p className="text-lg text-white/50">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Excellence", desc: "Delivering world-class quality in every project" },
              { icon: Users, title: "Collaboration", desc: "Working closely with clients to achieve their vision" },
              { icon: Target, title: "Innovation", desc: "Pushing creative boundaries with cutting-edge technology" },
              { icon: Eye, title: "Vision", desc: "Seeing the potential in every story we tell" },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#ea580c]/50 transition-colors"
              >
                <div className="w-16 h-16 bg-[#ea580c]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#ea580c]" />
                </div>
                <h3 className="text-xl mb-2 font-medium">{value.title}</h3>
                <p className="text-white/50">
                  {value.desc}
                </p>
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
            <div className="inline-block mb-4 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm">
              Meet the Team
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-medium">Our Team</h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              A diverse group of creative professionals passionate about visual
              storytelling
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                image: "https://images.unsplash.com/photo-1637348318881-03b4c930a723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcGhvdG9ncmFwaHklMjBzaG9vdHxlbnwxfHx8fDE3NjQxNDQ3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                title: "Photographers",
                desc: "Masters of light and composition"
              },
              {
                image: "https://images.unsplash.com/photo-1727791719116-39761d569f32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBtb2RlbHxlbnwxfHx8fDE3NjQxMzc1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                title: "Creative Directors",
                desc: "Visionaries shaping brand stories"
              },
              {
                image: "https://images.unsplash.com/photo-1571645163064-77faa9676a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NDE0MzIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                title: "Production Team",
                desc: "Experts bringing ideas to life"
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
