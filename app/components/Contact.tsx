"use client";

import { useForm, ValidationError } from '@formspree/react';
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [state, handleSubmit] = useForm('mgawzera');

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-mono text-indigo-400 font-semibold">
            06.
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="h-[1px] bg-white/10 flex-grow max-w-xs" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <p className="text-gray-300 text-base leading-relaxed">
              I&apos;m currently looking for new opportunities and my inbox is
              always open. Whether you have a question or just want to say hi, I&apos;ll
              try my best to get back to you!
            </p>

            <div className="space-y-4 mt-2">
              <div className="card-glass p-4 rounded-xl border border-white/10 flex items-center gap-4">
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-400 uppercase block">
                    Email
                  </span>
                  <a
                    href="mailto:tanchitech@gmail.com"
                    className="text-sm font-medium text-white hover:text-indigo-400 transition-colors"
                  >
                    tanchitech@gmail.com
                  </a>
                </div>
              </div>

              <div className="card-glass p-4 rounded-xl border border-white/10 flex items-center gap-4">
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-400 uppercase block">
                    Location
                  </span>
                  <span className="text-sm font-medium text-white">
                    Buea, Cameroon
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 card-glass p-8 rounded-2xl border border-white/10"
          >
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-3">
                <CheckCircle2 size={48} className="text-emerald-400" />
                <h3 className="text-xl font-bold text-white">Thanks for reaching out!</h3>
                <p className="text-gray-300 text-sm">Your message has been sent successfully. I will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-gray-400 uppercase mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your Name"
                      className="w-full bg-[#080911] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-rose-400 text-xs mt-1 block" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-gray-400 uppercase mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-[#080911] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-rose-400 text-xs mt-1 block" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-gray-400 uppercase mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Project Inquiry"
                    className="w-full bg-[#080911] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-rose-400 text-xs mt-1 block" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-gray-400 uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project..."
                    className="w-full bg-[#080911] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-rose-400 text-xs mt-1 block" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3.5 px-6 rounded-lg bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-500/50 text-white font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 cursor-pointer"
                >
                  {state.submitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}