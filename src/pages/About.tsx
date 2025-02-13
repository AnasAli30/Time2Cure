import { motion } from 'framer-motion';
import { team } from '../data';
import BackgroundSlider from '../components/BackgroundSlider';
import { useState } from 'react';
import { Heart, Brain, Leaf, Users, Clock, Shield } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const specialties = [
  {
    icon: Brain,
    title: "Teenage Reproductive Health",
    description: "Helping teenagers understand their changing bodies and emotions, creating a safe space for questions and learning."
  },
  {
    icon: Shield,
    title: "Pre-Puberty Education",
    description: "Classes for students in grades 5 to 7 to help them navigate early stages of puberty with confidence."
  },
  {
    icon: Heart,
    title: "Women's Health",
    description: "Workshops and guidance for women to understand and embrace their menstrual health with self-care practices."
  },
  {
    icon: Clock,
    title: "Senior Citizens Care",
    description: "Customized self-care strategies and guidance to help seniors maintain their physical and emotional well-being."
  },
  {
    icon: Leaf,
    title: "Holistic Healing",
    description: "Blending therapeutic practices with yoga and Ayurvedic wisdom for comprehensive wellness."
  },
  {
    icon: Users,
    title: "Personalized Approach",
    description: "Non-judgmental and compassionate support for individuals of all ages and backgrounds."
  }
];

export default function About() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  return (
    <div className="min-h-screen text-white">
      <BackgroundSlider />
      
      <div className="container mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <motion.h1
              variants={itemVariants}
              className="text-6xl font-bold mb-12 bg-gradient-to-r from-sage-green to-light-sage bg-clip-text text-transparent"
            >
              About Time2Cure
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Welcome to Time2Cure – a space dedicated to nurturing health, well-being, and self-awareness. 
              We are a team of passionate therapists and yoga teachers committed to providing holistic guidance 
              on physical and emotional health.
            </motion.p>
          </div>

          {/* Mission Section */}
          <motion.div
            variants={containerVariants}
            className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold mb-6 text-sage-green"
            >
              Our Mission
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed"
            >
              Our mission is to empower individuals to take a holistic approach towards every field of their lives. 
              We believe in Treatment Without Medicine, which is why we work extensively in education across various groups.
            </motion.p>
          </motion.div>

          {/* Specialties Grid */}
          <motion.div variants={containerVariants} className="space-y-8">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-sage-green text-center"
            >
              Our Specialties
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialties.map((specialty, index) => (
                <motion.div
                  key={specialty.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-sage-green transition-colors"
                >
                  <specialty.icon className="w-8 h-8 text-sage-green mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{specialty.title}</h3>
                  <p className="text-gray-300">{specialty.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div variants={containerVariants} className="space-y-8">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-sage-green text-center"
            >
              Our Founder
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12">
              {team.map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="relative group rounded-xl overflow-hidden"
                  onMouseEnter={() => setHoveredMember(member.name)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <div className="aspect-[3/4] rounded-xl overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-75"
                    />
                  </div>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: hoveredMember === member.name ? 0.8 : 0,
                      y: hoveredMember === member.name ? 1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/90 p-6 rounded-xl overflow-y-auto backdrop-blur-sm"
                  >
                    <div className="h-full flex flex-col">
                      <h2 className="text-3xl font-bold mb-2 text-sage-green">{member.name}</h2>
                      <h3 className="text-light-sage text-xl mb-4">{member.role}</h3>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-sage-green">Education</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {member.education.map((edu) => (
                            <li key={edu} className="text-gray-300">{edu}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-sage-green">Expertise</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {member.expertise.map((exp) => (
                            <li key={exp} className="text-gray-300">{exp}</li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-gray-300 mt-auto">{member.bio}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us Section */}
          <motion.div
            variants={containerVariants}
            className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold mb-6 text-sage-green"
            >
              Why Choose Time2Cure?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed space-y-4"
            >
              At Time2Cure, we blend therapeutic practices with yoga and Ayurvedic wisdom to provide 
              a holistic approach to health. Our team's expertise in both mind-body therapy and 
              traditional healing systems allows us to offer well-rounded support for individuals 
              of all ages, especially teens and senior citizens.
              <br /><br />
              We believe that through knowledge and practice, everyone can live a healthier, more 
              balanced life. Our approach is personalized, non-judgmental, and deeply rooted in 
              compassion. Whether you're a teenager navigating the changes of adolescence or a 
              senior citizen seeking more balance, we are here to support you.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}