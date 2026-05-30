'use client';

import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  fullPage?: boolean;
  message?: string;
  minDuration?: number; // minimum ms to show (avoids flashing)
}

export default function Loader({ 
  fullPage = true, 
  message = "initializing system",
  minDuration = 3000 
}: LoadingScreenProps) {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(message);

  useEffect(() => {
    if (!fullPage) return;
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.max(1, Math.floor((100 - prev) / 15));
        return Math.min(100, prev + increment);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [fullPage]);

  // Rotating loading messages
  useEffect(() => {
    if (!fullPage) return;
    
    const messages = [
      "initializing system",
      "calibrating sensors",
      "establishing connection",
      "loading modules",
      "ready for operation"
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % messages.length;
      setCurrentMessage(messages[index]);
    }, minDuration / 5);
    
    return () => clearInterval(interval);
  }, [fullPage]);

  // Minimum display time
  useEffect(() => {
    if (!fullPage) return;
    
    const timer = setTimeout(() => {
      setShow(false);
    }, minDuration);
    
    return () => clearTimeout(timer);
  }, [minDuration, fullPage]);

  if (!show && fullPage) return null;

  const containerClasses = fullPage 
    ? "fixed inset-0 z-50 bg-[#0A0A0F] flex items-center justify-center"
    : "w-full h-full flex items-center justify-center min-h-[200px]";

  return (
    <div className={containerClasses}>
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Animated terminal cursor / robot eye */}
        <div className="relative mb-8">
          <div className="w-16 h-16 border-2 border-[#00FF88]/30 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-[#00FF88] rounded-full animate-pulse" />
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[#00FF88]/50" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-[#00FF88]/50" />
        </div>

        {/* Animated brackets / loader */}
        <div className="font-mono text-sm tracking-wider mb-4">
          <span className="text-gray-500">{'<'}</span>
          <span className="text-[#00FF88] animate-pulse">▸</span>
          <span className="text-gray-500">{' ' + currentMessage + ' '}</span>
          <span className="text-gray-500">{'/>'}</span>
        </div>

        {/* Progress bar (only for full page) */}
        {fullPage && (
          <div className="w-64 mt-4">
            <div className="h-px bg-gray-800 relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-[#00FF88] via-[#4C1D95] to-[#00FF88]"
                style={{ 
                  width: `${progress}%`,
                  transition: 'width 0.1s linear'
                }}
              />
            </div>
            <div className="flex justify-between mt-2 text-[10px] font-mono text-gray-600">
              <span>[</span>
              <span>{progress}%</span>
              <span>]</span>
            </div>
          </div>
        )}

        {/* Dots animation for component loading */}
        {!fullPage && (
          <div className="flex gap-1 mt-3">
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className="w-1 h-1 bg-[#00FF88]/50 rounded-full"
                style={{
                  animation: `dotPulse 1.4s ease-in-out ${i * 0.2}s infinite`
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Add keyframes for dot animation */}
      <style jsx>{`
        @keyframes dotPulse {
          0%, 60%, 100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          30% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}