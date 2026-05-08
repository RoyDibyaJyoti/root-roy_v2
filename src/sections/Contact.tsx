import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "motion/react";
import { Mail, Send, CheckCircle, Github, Linkedin, Twitter } from "lucide-react";
import { SectionHeading, GlassCard } from "../components/ui/SectionUI";
import { Button } from "../components/ui/Button";
import { portfolioData } from "../data/portfolio";
import confetti from "canvas-confetti";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#10b981", "#3b82f6"],
    });
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-width-container">
        <SectionHeading
          title="Connect"
          subtitle="Direct channels for collaboration, technical discussions, and security inquiries."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-start">
          {/* Contact Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--text-primary)]">
              Let's secure the <span className="text-[var(--accent-color)]">future</span> of computing together.
            </h3>
            
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-medium italic-serif leading-relaxed">
              I'm always open to new opportunities, collaborations, or simply discussing the latest in low-level systems and security.
            </p>

            <div className="space-y-8 pt-8 border-t-2 border-[var(--card-border)]">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono text-[var(--accent-color)] font-black tracking-[0.4em] uppercase">
                  PRIMARY_GATEWAY
                </span>
                <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-2xl md:text-4xl font-black hover:text-[var(--accent-color)] transition-colors tracking-tighter">
                  {portfolioData.personalInfo.email}
                </a>
              </div>

              <div className="flex gap-4">
                {[
                  { Icon: Github, href: portfolioData.socials.github, label: "GitHub" },
                  { Icon: Linkedin, href: portfolioData.socials.linkedin, label: "LinkedIn" },
                  { Icon: Twitter, href: portfolioData.socials.twitter, label: "Twitter" },
                ].map(({ Icon, href, label }, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    size="md"
                    className="h-14 w-14 rounded-full border-2 border-[var(--card-border)] bg-transparent hover:bg-[var(--accent-color)] hover:text-white transition-all duration-300 shadow-sm"
                    onClick={() => window.open(href, "_blank")}
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Minimal Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 group/form">
              <div className="space-y-12">
                <div className="relative">
                  <input
                    {...register("name")}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-stone-300 dark:border-white/20 py-4 focus:border-[var(--accent-color)] outline-none transition-all text-xl md:text-2xl font-bold text-[var(--text-primary)]"
                  />
                  <label className="absolute left-0 top-4 text-xl md:text-2xl text-[var(--text-secondary)] font-bold pointer-events-none transition-all peer-focus:-top-8 peer-focus:text-xs peer-focus:text-[var(--accent-color)] peer-[:not(:placeholder-shown)]:-top-8 peer-[:not(:placeholder-shown)]:text-xs italic-serif">
                    Your Name
                  </label>
                  {errors.name && <p className="text-red-500 text-[10px] uppercase font-black mt-2 font-mono tracking-widest">{errors.name.message}</p>}
                </div>

                <div className="relative">
                  <input
                    {...register("email")}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-stone-300 dark:border-white/20 py-4 focus:border-[var(--accent-color)] outline-none transition-all text-xl md:text-2xl font-bold text-[var(--text-primary)]"
                  />
                  <label className="absolute left-0 top-4 text-xl md:text-2xl text-[var(--text-secondary)] font-bold pointer-events-none transition-all peer-focus:-top-8 peer-focus:text-xs peer-focus:text-[var(--accent-color)] peer-[:not(:placeholder-shown)]:-top-8 peer-[:not(:placeholder-shown)]:text-xs italic-serif">
                    Email Address
                  </label>
                  {errors.email && <p className="text-red-500 text-[10px] uppercase font-black mt-2 font-mono tracking-widest">{errors.email.message}</p>}
                </div>

                <div className="relative">
                  <textarea
                    {...register("message")}
                    placeholder=" "
                    rows={1}
                    className="peer w-full bg-transparent border-b-2 border-stone-300 dark:border-white/20 py-4 focus:border-[var(--accent-color)] outline-none transition-all text-xl md:text-2xl font-bold text-[var(--text-primary)] resize-none"
                  />
                  <label className="absolute left-0 top-4 text-xl md:text-2xl text-[var(--text-secondary)] font-bold pointer-events-none transition-all peer-focus:-top-8 peer-focus:text-xs peer-focus:text-[var(--accent-color)] peer-[:not(:placeholder-shown)]:-top-8 peer-[:not(:placeholder-shown)]:text-xs italic-serif">
                    Project Vision
                  </label>
                  {errors.message && <p className="text-red-500 text-[10px] uppercase font-black mt-2 font-mono tracking-widest">{errors.message.message}</p>}
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting || isSubmitted}
                className="w-full h-20 rounded-full text-lg font-bold tracking-widest uppercase flex items-center justify-center gap-4 transition-all duration-500 hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  "TRANSMITTING..."
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={24} />
                    CHANNEL_OPEN
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    INITIATE_DISPATCH
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
