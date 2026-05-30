// components/Contact.tsx
'use client';

import { useState } from 'react';

interface ContactProps {
  email: string;
  linkedin: string;
  github: string;
}

export default function ContactPage({ email, linkedin, github }: ContactProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      
      {/* Terminal prompt line */}
      <div className="inline-block mb-6 px-4 py-1.5 border-l-2 border-[#00FF88] bg-[#00FF88]/5 font-mono text-sm text-gray-300">
        <span className="text-[#00FF88]">$</span> establish_connection --protocol direct
      </div>

      {/* Section header */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-px bg-[#00FF88]"></div>
        <h2 className="text-3xl font-light tracking-wide text-white">Contact</h2>
        <div className="flex-1 w-px h-px bg-gradient-to-r from-[#00FF88]/20 to-transparent"></div>
      </div>

      {/* Contact methods grid */}
      <div className="grid gap-4 max-w-md">
        {/* Email with copy button */}
        <div className="group relative bg-[#111115] border border-gray-800 hover:border-[#00FF88]/30 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FF88]/0 via-[#00FF88]/0 to-[#4C1D95]/0 group-hover:to-[#4C1D95]/5 transition-all duration-500" />
          <div className="relative p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-[#00FF88] text-sm">▸</span>
              <span className="text-gray-300 font-mono text-sm">{email}</span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="text-xs font-mono text-gray-500 hover:text-[#00FF88] transition-colors duration-300 px-3 py-1 border border-gray-800 hover:border-[#00FF88]/30"
            >
              {copied ? '[copied]' : '[copy]'}
            </button>
          </div>
        </div>

        {/* Alternative mailto link */}
        <a
          href={`mailto:${email}`}
          className="group relative bg-[#111115] border border-gray-800 hover:border-[#00FF88]/30 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FF88]/0 via-[#00FF88]/0 to-[#4C1D95]/0 group-hover:to-[#4C1D95]/5 transition-all duration-500" />
          <div className="relative p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-sm">↗</span>
              <span className="text-gray-400 text-sm font-mono">send_a_direct_email</span>
            </div>
            <span className="text-[#00FF88] text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </div>
        </a>

        {/* LinkedIn */}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#111115] border border-gray-800 hover:border-[#00FF88]/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00FF88]/0 via-[#00FF88]/0 to-[#4C1D95]/0 group-hover:to-[#4C1D95]/5 transition-all duration-500" />
            <div className="relative p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm">in</span>
                <span className="text-gray-400 text-sm font-mono">linkedin.com/in/felix-catzin</span>
              </div>
              <span className="text-[#00FF88] text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
          </a>
        )}

        {/* GitHub */}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#111115] border border-gray-800 hover:border-[#00FF88]/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00FF88]/0 via-[#00FF88]/0 to-[#4C1D95]/0 group-hover:to-[#4C1D95]/5 transition-all duration-500" />
            <div className="relative p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm">{'<>'}</span>
                <span className="text-gray-400 text-sm font-mono">github.com/d4rkx666</span>
              </div>
              <span className="text-[#00FF88] text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
          </a>
        )}
      </div>

      {/* Status indicator */}
      <div className="flex items-center gap-3 pt-4">
        <div className="w-1.5 h-1.5 bg-[#00FF88] rounded-full animate-pulse" />
        <span className="text-gray-500 text-xs font-mono tracking-wider">awaiting_connection</span>
        <div className="flex-1" />
        <span className="text-gray-600 text-[10px] font-mono">[ port: open ]</span>
      </div>
    </div>
  );
}