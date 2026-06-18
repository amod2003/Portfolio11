"use client";
// @flow strict

import { useState } from 'react';
import { TbMailForward } from "react-icons/tb";
import { toast } from 'react-toastify';

function ContactForm() {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/movarwwl', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        toast.success('Message sent successfully!');
        form.reset();
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch {
      toast.error('Failed to send. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="rounded-2xl border border-[#1b2c68a0] bg-gradient-to-b from-[#0d1224] to-[#0a0d37] p-6 lg:p-8">
      {/* Top accent line */}
      <div className="flex mb-6">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      <h3 className="text-lg font-semibold text-white mb-1">Send a Message</h3>
      <p className="text-xs text-gray-500 mb-6">I&apos;ll get back to you within 24 hours.</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium uppercase tracking-wider text-gray-400">
            Full Name
          </label>
          <input
            type="text"
            name="username"
            placeholder="Amod Kumar"
            autoComplete="off"
            required
            className="w-full rounded-lg border border-[#2a2060] bg-[#0d1224] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500/30"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium uppercase tracking-wider text-gray-400">
            Email Address
          </label>
          <input
            type="email"
            name="Email"
            placeholder="hello@example.com"
            autoComplete="off"
            required
            className="w-full rounded-lg border border-[#2a2060] bg-[#0d1224] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500/30"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium uppercase tracking-wider text-gray-400">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell me about your project or opportunity..."
            autoComplete="off"
            required
            className="w-full resize-none rounded-lg border border-[#2a2060] bg-[#0d1224] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500/30"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={sending}
          className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:from-violet-600 hover:to-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {sending ? (
            <span>Sending...</span>
          ) : (
            <>
              <span>Send Message</span>
              <TbMailForward size={18} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
