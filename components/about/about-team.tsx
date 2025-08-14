"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Maria Santos",
    role: "Founder & Head Roaster",
    image: "/images/about/female-ceo.jpg",
    bio: "Coffee enthusiast with 15+ years of experience in sourcing and roasting premium beans.",
  },
  {
    name: "James Wilson",
    role: "Quality Control Manager",
    image: "/images/about/cso.jpg",
    bio: "Former barista champion with expertise in flavor profiling and quality assurance.",
  },
  {
    name: "Sarah Chen",
    role: "Sustainability Director",
    image: "/images/about/cto.jpg",
    bio: "Environmental scientist dedicated to sustainable coffee farming practices.",
  },
  {
    name: "David Rodriguez",
    role: "Customer Experience Lead",
    image: "/images/about/male-ceo.jpg",
    bio: "Passionate about creating exceptional customer experiences and building community.",
  },
];

export function AboutTeam() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-gradient">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The passionate people behind every cup, dedicated to bringing you
            the finest coffee experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
