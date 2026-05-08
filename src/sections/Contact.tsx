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
    console.log("Form Data:", data);
    setIsSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#0ea5e9", "#6366f1"],
    });
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-width-container">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or just want to chat? Feel free to reach out!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold mb-6 text-[var(--text-primary)]">Let's build something epic together.</h3>
            <p className="text-lg text-[var(--text-secondary)]">
              I'm always open to new opportunities, collaborations, or simply discussing the latest in tech and security.
            </p>

            <div className="space-y-6">
              <GlassCard className="flex items-center gap-6 p-5 border-[var(--card-border)] bg-[var(--card-bg)] shadow-sm">
                <div className="p-4 rounded-2xl bg-[var(--accent-color)]/10 text-[var(--accent-color)]">
                  <Mail size={32} />
                </div>
                <div>
                  <div className="text-[10px] text-[var(--text-secondary)] uppercase tracking-widest font-mono font-bold mb-1">
                    Direct Contact
                  </div>
                  <div className="text-xl font-bold text-[var(--text-primary)]">{portfolioData.personalInfo.email}</div>
                </div>
              </GlassCard>
            </div>

            <div className="pt-8">
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 font-mono">
                Connect on Socials
              </h4>
              <div className="flex gap-4">
                {[
                  { Icon: Github, href: portfolioData.socials.github },
                  { Icon: Linkedin, href: portfolioData.socials.linkedin },
                  { Icon: Twitter, href: portfolioData.socials.twitter },
                ].map(({ Icon, href }, i) => (
                  <Button
                    key={i}
                    variant="secondary"
                    size="md"
                    className="w-14 h-14 rounded-2xl"
                    onClick={() => window.open(href, "_blank")}
                  >
                    <Icon size={24} />
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 border-[var(--card-border)] bg-[var(--card-bg)] shadow-md">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--text-primary)]">Name</label>
                    <input
                      {...register("name")}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-[var(--card-border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-all text-sm text-[var(--text-primary)] placeholder:text-slate-400"
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--text-primary)]">Email</label>
                    <input
                      {...register("email")}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-[var(--card-border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-all text-sm text-[var(--text-primary)] placeholder:text-slate-400"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--text-primary)]">Subject</label>
                  <input
                    {...register("subject")}
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-[var(--card-border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-all text-sm text-[var(--text-primary)] placeholder:text-slate-400"
                  />
                  {errors.subject && <p className="text-red-500 text-xs">{errors.subject.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--text-primary)]">Message</label>
                  <textarea
                    {...register("message")}
                    placeholder="Tell me about your vision..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-[var(--card-border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-all text-sm resize-none text-[var(--text-primary)] placeholder:text-slate-400"
                  />
                  {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    "Transmitting..."
                  ) : isSubmitted ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle size={20} />
                      Sent Successfully!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={18} />
                      Secure Dispatch
                    </span>
                  )}
                </Button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
