/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowUpRight, 
  Code2, 
  Cpu, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  PlayCircle, 
  Sparkles, 
  Terminal, 
  Twitter,
  Dribbble,
  ArrowRight,
  Box,
  X
} from "lucide-react";

interface Project {
  title: string;
  category: string;
  desc: string;
  img: string;
  featured?: boolean;
  link?: string;
  caseStudyLink?: string;
}

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant">
    <div className="flex justify-between items-center max-w-7xl mx-auto px-6 lg:px-8 h-20">
      <span className="text-2xl font-black tracking-tighter text-white">Aleem</span>
      <div className="hidden md:flex items-center gap-10">
        <a href="#work" className="text-on-surface-variant hover:text-white transition-colors">Work</a>
        <a href="#about" className="text-on-surface-variant hover:text-white transition-colors">About</a>
        <a href="#experience" className="text-on-surface-variant hover:text-white transition-colors">Experience</a>
        <a href="#contact" className="text-on-surface-variant hover:text-white transition-colors">Contact</a>
      </div>
      <button className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-bold hover:bg-white hover:text-surface transition-all active:scale-95">
        Let's Talk
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-32">
    {/* Intro Card */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="md:col-span-7 glass-card rounded-3xl p-8 md:p-12 flex flex-col justify-end min-h-[480px] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full -mr-20 -mt-20" />
      <div className="relative z-10">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
          Available for Projects
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1]">
          Mohammed <br/><span className="text-primary">Abdul Aleem.</span>
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl font-medium leading-relaxed">
          Senior UX Designer crafting intelligent SaaS ecosystems and AI-driven experiences. 11+ years of merging human intent with digital precision.
        </p>
      </div>
    </motion.div>

    {/* Portrait Card */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 }}
      className="md:col-span-5 glass-card rounded-3xl overflow-hidden relative group min-h-[480px]"
    >
      <img 
        src="https://lh3.googleusercontent.com/d/18RtwP13bkXK9m_S-met1IJ-lZtFIP7LQ" 
        alt="Mohammed Abdul Aleem" 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
      <div className="absolute bottom-8 left-8">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-bold uppercase tracking-widest text-white">Based in Hyderabad, India</span>
        </div>
      </div>
    </motion.div>

    {/* Stats Row */}
    <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card rounded-3xl p-8 flex flex-col justify-center items-center text-center"
      >
        <span className="text-6xl font-black text-primary mb-2">11+</span>
        <span className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Years Experience</span>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-card rounded-3xl p-8 flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary-container/20 to-transparent"
      >
        <Box className="w-12 h-12 text-primary mb-4" />
        <span className="text-lg font-bold">25+ Shipped Products</span>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-card rounded-3xl p-8 flex flex-col justify-center items-center text-center border border-primary/20"
      >
        <div className="flex -space-x-3 mb-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-high overflow-hidden">
              <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" referrerPolicy="no-referrer" />
            </div>
          ))}
          <div className="w-10 h-10 rounded-full border-2 border-surface bg-primary flex items-center justify-center text-[10px] font-bold">
            +50
          </div>
        </div>
        <span className="text-lg font-bold">Happy Global Clients</span>
      </motion.div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="space-y-8">
    <div className="flex items-center gap-4">
      <h2 className="text-3xl font-bold tracking-tight">Career Architecture</h2>
      <div className="h-px flex-1 bg-outline-variant" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { year: "2021 — PRESENT", role: "Senior UX Designer", company: "Colaberry AI", desc: "Leading design for AI-driven education platforms and talent analytics dashboards.", featured: true },
        { year: "2018 — 2021", role: "UX Consultant", company: "NTT DATA", desc: "Modernizing legacy enterprise systems for Fortune 500 financial clients." },
        { year: "2015 — 2018", role: "Lead Designer", company: "Teqsar Solutions", desc: "Spearheaded the design language for early-stage SaaS startups in the MENA region." }
      ].map((exp, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={`glass-card rounded-3xl p-8 space-y-4 ${exp.featured ? 'border-l-4 border-primary' : ''}`}
        >
          <span className={`text-xs font-bold uppercase tracking-widest ${exp.featured ? 'text-primary' : 'text-on-surface-variant'}`}>
            {exp.year}
          </span>
          <h3 className="text-xl font-bold">{exp.role}</h3>
          <p className="text-lg text-white font-medium">{exp.company}</p>
          <p className="text-sm text-on-surface-variant leading-relaxed">{exp.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };

    if (selectedProject) {
      window.addEventListener("keydown", handleEscape);
      // Focus the close button when the modal opens
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    } else {
      // Return focus to the trigger element when the modal closes
      triggerRef.current?.focus();
    }

    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedProject]);

  const projects: Project[] = [
    { 
      title: "Nexus Wallet", 
      category: "Web3 & Fintech", 
      desc: "A next-generation multi-chain wallet focused on security and abstracting complex transactions. Features include multi-sig support, hardware wallet integration, and a seamless cross-chain swap interface.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDU0NDMztrcdZYMOYEgPHLLNM1nyCnPuYboG5OH8hY4-a9vPde6klB8SxvbmSTQK9xr03fjlEXMbbC71b2nQeHk2IkzLcvPTUQBfDhvfknENIXv2zBpLRqQIhGF5ort0Pfm6y03hrHw917P3Oqo2xOIgzdVVUjVRJI2cjTcAAbdgVq6kRfkXaCTKpUxlslVsZN0Tzo3BQtV0HRyVyQuj2An0UBVDnhFwHpqt8TwRrXShJm2iur3pcCbJ4Fc-4YpBHiif25YejkS1-I",
      featured: true,
      link: "#",
      caseStudyLink: "#"
    },
    { 
      title: "Orbit Home", 
      category: "IoT Ecosystem", 
      desc: "Comprehensive smart home management system. Integrates with over 500+ devices to provide a unified control center for lighting, security, climate, and energy monitoring with AI-driven automation.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHaa82XUHVU0P5IV_IF0cHrYLwomuZ0LYxqVng8_LMZNvXrF4O_w797A6ZMOy5qmBysmnUyUodsG_ATtw-9uUlaHsqZCyE6KNKU9S0ZPpxc6xb5rwr6Ro-IfI5lz_fJ3XoJvKJB5MlhjMfw4gbMjc-JZVB-Dj6DDOFgTupqDEM8gfAsviLdCt5rfjJk86s_gI0VUwHYUgJUMCUI9xP4UcMrH_vWOhISuIEIuX3Ngi2mFWzdxk5GbY4t3XeTd3HYdWHs96L0LaZdYY",
      link: "#",
      caseStudyLink: "#"
    },
    { 
      title: "Nomad Trails", 
      category: "Travel Tech", 
      desc: "Adventure planning platform for off-grid travelers. Includes offline maps, community-sourced trail data, and emergency satellite communication integration for the ultimate wilderness experience.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6UtVHU4-sIjfDFUhMr-jM1LMv1eZUoNc1rZYzx5ychJDRfB8Jn83PesW1yWF7NQLil9Nq4Oj-pBmVsWypl05_KOnnNFsgwJ6vRNSmuAM1uMcnjTyARMALo5f2SuyYx9sYzIg9t18EZfpTsguI1zhlzfu4m84IqkhQqdEXQ3xMXSHRLPcrSNERZPJUS-CPN2gfzyCwY9WpcmgWZ7pq_4QW0dKgMeeDjwSF_xpJWYMebTI8N_0g3fS3nFKJRBEeFE6Zm55dpWk11h8",
      link: "#",
      caseStudyLink: "#"
    },
    { 
      title: "Pulse Analytics", 
      category: "B2B SaaS", 
      desc: "Real-time business intelligence dashboard for enterprise scale. Leverages machine learning to predict market trends and provide actionable insights through intuitive data visualizations.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCBEyGjplMi6jZjMQw9Le8FafESNAew48ng7WWZV6Jk8tYTBgJQjmIMbW1hfR44jbyviXlIjJ_VEOSQYbafbVgKYQI1LntFSaqwl5a4e2y9aGRQbE2Fp2umwND7w3On2j7YlTVhhn3-C2C5zHfY0VYFRxhi9WrqNt3Cy3BJtW8LGdytF9tHWG8lInsEsGxNeYBx77LOqkI4rLcTgDwKTxdaxmMdiPb3uuTO1jKHWjo9a9cNO16yy_iO0-114Co5WABYg4ukFba5g0",
      link: "#",
      caseStudyLink: "#"
    },
    { 
      title: "Lumina Health", 
      category: "Healthcare", 
      desc: "Patient-centric health management app. Streamlines doctor-patient communication, prescription tracking, and integrates with wearable devices to provide a 360-degree view of patient wellness.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDJB0J9K37E3bDwl5sv0m-QdwEztNEth7yOCI-z-0hj-jbo8twR-uOkIw9sdVGoMV23S845NEbclLeXmvbNqLuW11ulbQwJABau12cEHusgCERm_U776kUFyiSF8wSonxZ-CupQLaONmsFeMPQGs8Ie55fn1VpSzEufckdXDArVfOfbLdRJhV9CiAM_U698n9-eZNoGR4LyfW9KyyfCt09EaLfSXCMkgeYwQExbzC_GxwPKqITBtb6NhEaQNi00OAolyM_sE04lhE",
      link: "#",
      caseStudyLink: "#"
    }
  ];

  const categories = ["All", "Web3 & Fintech", "Travel Tech", "B2B SaaS", "Healthcare"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4 flex-1">
          <h2 className="text-3xl font-bold tracking-tight">Selected Works</h2>
          <div className="h-px flex-1 bg-outline-variant" />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                filter === cat 
                  ? "bg-primary text-surface" 
                  : "bg-surface-container border border-outline-variant text-on-surface-variant hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured && filter === "All";
            
            return (
              <motion.div 
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.015 }}
                tabIndex={0}
                role="button"
                aria-haspopup="dialog"
                aria-expanded={selectedProject?.title === project.title}
                onClick={(e) => {
                  triggerRef.current = e.currentTarget as HTMLDivElement;
                  setSelectedProject(project);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    triggerRef.current = e.currentTarget as HTMLDivElement;
                    setSelectedProject(project);
                  }
                }}
                className={`
                  ${isFeatured ? "md:col-span-8" : "md:col-span-4"} 
                  group relative overflow-hidden rounded-3xl cursor-pointer
                  aspect-[16/10] md:aspect-auto 
                  ${!isFeatured ? "aspect-square" : ""}
                  transition-all duration-500
                  border border-transparent hover:border-primary/50
                  hover:shadow-2xl hover:shadow-primary/10
                `}
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/95 via-surface/40 to-transparent p-8 flex flex-col justify-end">
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">{project.category}</span>
                    <h3 className={`${isFeatured ? "text-4xl" : "text-xl"} font-bold`}>{project.title}</h3>
                    
                    <div className="flex items-center gap-2 text-white font-bold group/btn pt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details 
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-surface/90 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-surface-container-high rounded-[2.5rem] overflow-hidden shadow-2xl border border-outline-variant flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                ref={closeButtonRef}
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-surface/50 backdrop-blur hover:bg-white hover:text-surface transition-all focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img 
                  src={selectedProject.img} 
                  alt="" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                      {selectedProject.category}
                    </span>
                    <h2 id="modal-title" className="text-4xl md:text-5xl font-black tracking-tighter">
                      {selectedProject.title}
                    </h2>
                  </div>
                  
                  <p id="modal-desc" className="text-lg text-on-surface-variant leading-relaxed">
                    {selectedProject.desc}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <a 
                      href={selectedProject.caseStudyLink}
                      className="flex items-center gap-2 bg-primary text-surface px-8 py-3 rounded-full font-bold hover:bg-white transition-all"
                    >
                      View Case Study 
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a 
                      href={selectedProject.link}
                      className="flex items-center gap-2 border border-outline-variant text-white px-8 py-3 rounded-full font-bold hover:bg-surface-container-highest transition-all"
                    >
                      Live Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const SkillsCerts = () => (
  <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="md:col-span-4 glass-card rounded-3xl p-8 space-y-6"
    >
      <h3 className="text-2xl font-bold">Tech Stack</h3>
      <div className="flex flex-wrap gap-2">
        {["Figma", "React", "Webflow", "After Effects", "Vertex AI"].map(skill => (
          <span key={skill} className="px-3 py-1.5 rounded-xl bg-surface-bright/10 border border-outline-variant text-xs font-bold uppercase tracking-wider">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="md:col-span-8 glass-card rounded-3xl p-8"
    >
      <h3 className="text-2xl font-bold mb-6">Certifications</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { title: "Google Professional UX", subtitle: "Foundational Design Excellence", icon: <Sparkles className="text-primary" /> },
          { title: "Harvard GenAI Program", subtitle: "AI-First Product Design", icon: <Cpu className="text-primary" /> }
        ].map((cert, i) => (
          <div key={i} className="flex items-center gap-4 p-4 bg-surface-container rounded-2xl border border-outline-variant">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
              {cert.icon}
            </div>
            <div>
              <p className="font-bold">{cert.title}</p>
              <p className="text-xs text-on-surface-variant">{cert.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

const AboutMe = () => (
  <section id="about" className="space-y-8">
    <div className="flex items-center gap-4">
      <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
      <div className="h-px flex-1 bg-outline-variant" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="md:col-span-8 space-y-6"
      >
        <p className="text-xl md:text-2xl text-on-surface leading-relaxed font-medium">
          Mohammed Abdul Aleem is a Senior UX Designer with over 11 years of experience in crafting digital experiences that bridge the gap between human needs and technological possibilities.
        </p>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          His design philosophy centers on <span className="text-primary font-bold italic">"Intentional Simplicity"</span>—the belief that the most powerful interfaces are those that disappear, leaving only the user and their goals. With a deep passion for user-centric design, he specializes in transforming complex data into intuitive, high-impact products.
        </p>
        <div className="flex gap-8 pt-4">
          <div className="flex flex-col">
            <span className="text-primary font-bold text-3xl">11+</span>
            <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Years of Craft</span>
          </div>
          <div className="w-px h-12 bg-outline-variant" />
          <div className="flex flex-col">
            <span className="text-primary font-bold text-3xl">25+</span>
            <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Products Shipped</span>
          </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="md:col-span-4 flex justify-center"
      >
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-500" />
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-outline-variant shadow-2xl">
            <img 
              src="https://i.pravatar.cc/400?u=aleem" 
              alt="Mohammed Abdul Aleem" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Lab = () => (
  <section className="space-y-8">
    <div className="flex items-center gap-4">
      <h2 className="text-3xl font-bold tracking-tight">The Lab</h2>
      <div className="h-px flex-1 bg-outline-variant" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="md:col-span-2 glass-card rounded-3xl overflow-hidden aspect-video relative group"
      >
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdSIgMaLGGzAOilFiSiE1ggm7sZcwP_wWre5RSX6e3LklJh2rt-PJ8L2A-bVm9mZRCd46VEi_rctmcSXV9ZISpko7pyDeuj0Ygv3BXMe-DBnIIkuckyP-TXWiALhVG3ggQ-m3fMphAA9QxplGa_NsWPT3QI90j_EqqIp4GZPt4E6oKIiMGxDirlhGO73z3VZkwjei3nIY8bM2WjYdYrKn8Suh3qgGRgRlENIeEfi5imvuHfUqQzDDmwAi2jQUBLM7Mca8rM5TjNI4" 
          alt="Motion Study" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-surface/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <PlayCircle className="w-16 h-16 text-white" />
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-black/60 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest">Motion Study #04</span>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        viewport={{ once: true }}
        className="glass-card rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 border border-transparent hover:border-primary/50 cursor-default"
      >
        <Terminal className="text-primary w-8 h-8" />
        <div>
          <h4 className="font-bold">Prototypes</h4>
          <p className="text-xs text-on-surface-variant">High-fidelity functional demos.</p>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="glass-card rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 border border-transparent hover:border-primary/50 cursor-default"
      >
        <Sparkles className="text-primary w-8 h-8" />
        <div>
          <h4 className="font-bold">Experiments</h4>
          <p className="text-xs text-on-surface-variant">Exploration of AI UI patterns.</p>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="md:col-span-1 glass-card rounded-3xl overflow-hidden aspect-square relative group"
      >
        <img 
          src="https://picsum.photos/seed/future-ui-abstract/800/800" 
          alt="AI-Driven UI Concepts" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-surface/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4 text-center">
          <Cpu className="w-10 h-10 text-primary mb-2" />
          <h4 className="font-bold text-sm">AI-Driven UI Concepts</h4>
          <p className="text-[10px] text-on-surface-variant mt-1">Generative interface experiments exploring dynamic layout adaptation.</p>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-primary/20 backdrop-blur border border-primary/30 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest text-primary">Lab #09</span>
        </div>
      </motion.div>
    </div>
  </section>
);

const CTA = () => (
  <section id="contact">
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden bg-gradient-to-tr from-primary/10 via-transparent to-transparent"
    >
      <div className="relative z-10 space-y-8">
        <h2 className="text-4xl md:text-7xl font-black tracking-tight max-w-4xl mx-auto leading-tight">
          Let's Build Something <span className="text-primary">Remarkable.</span>
        </h2>
        <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto">
          Currently open for leadership roles and select high-impact freelance collaborations.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button className="bg-primary text-surface px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all scale-100 hover:scale-105 active:scale-95">
            Start a Conversation
          </button>
          <button className="bg-surface-container-high border border-outline-variant text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-surface-container-highest transition-all">
            View Resume
          </button>
        </div>
      </div>
    </motion.div>
  </section>
);

const Footer = () => (
  <footer className="py-16 border-t border-outline-variant mt-24">
    <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 lg:px-8 gap-8">
      <div className="space-y-4 text-center md:text-left">
        <span className="text-2xl font-bold text-white block">Aleem.</span>
        <p className="text-on-surface-variant text-sm">© 2024 Mohammed Abdul Aleem. Built for the Digital Curator.</p>
      </div>
      <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
        {[
          { name: "LinkedIn", icon: <Linkedin className="w-4 h-4" />, url: "https://linkedin.com/in/mohammed-abdul-aleem" },
          { name: "GitHub", icon: <Github className="w-4 h-4" />, url: "https://github.com/aleem" },
          { name: "Dribbble", icon: <Dribbble className="w-4 h-4" />, url: "https://dribbble.com/aleem" },
          { name: "Twitter", icon: <Twitter className="w-4 h-4" />, url: "https://twitter.com/aleem" }
        ].map(social => (
          <a 
            key={social.name} 
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
          >
            {social.icon}
            {social.name}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary/30">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32 pb-24">
        <Hero />
        <Experience />
        <Projects />
        <SkillsCerts />
        <AboutMe />
        <Lab />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
