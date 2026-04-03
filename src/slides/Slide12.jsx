import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mentorProofChat from "../assets/mentor_proof_chat.png";
import ixdfMasterclass from "../assets/ixdf_masterclass.png";

export default function Slide12() {
  const [expanded, setExpanded] = useState(null);

  const images = {
    chat: mentorProofChat,
    masterclass: ixdfMasterclass,
  };

  return (
    <div className="relative flex w-full flex-col pb-20">
      <div className="relative z-[1] flex max-w-4xl flex-col pt-4 sm:pt-8 md:pt-12">
        <h1 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl md:leading-[1.08] lg:text-[76px] lg:leading-[1.05]">
          The Future of Design
        </h1>
        <p className="mt-8 max-w-xl font-dm text-base leading-relaxed text-[var(--pres-muted)] sm:text-lg md:text-[20px]">
          Social proof from mentor <strong>Brandon Groce</strong> on the "Vibe Coding" workflow.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        {/* Testimonial / Chat */}
        <div className="flex flex-col space-y-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-[var(--pres-muted)]">
            Mentor Validation
          </span>
          <motion.div 
            onClick={() => setExpanded("chat")}
            whileHover={{ scale: 1.01 }}
            className="cursor-zoom-in overflow-hidden rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-card)] shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-shadow hover:shadow-[0_30px_70px_rgba(0,0,0,0.15)]"
          >
            <img
              src={mentorProofChat}
              alt="Brandon Groce Chat"
              className="w-full object-cover"
            />
          </motion.div>
          <p className="text-lg italic leading-relaxed text-[var(--pres-muted)]">
            "That's basically what the work flow of today & the future."
          </p>
        </div>

        {/* Masterclass / Invitation */}
        <div className="flex flex-col space-y-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-[var(--pres-muted)]">
            Next Session at IxDF
          </span>
          <motion.div 
            onClick={() => setExpanded("masterclass")}
            whileHover={{ scale: 1.01 }}
            className="group relative cursor-zoom-in overflow-hidden rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-card)] shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-shadow hover:shadow-[0_30px_70px_rgba(0,0,0,0.15)]"
          >
            <img
              src={ixdfMasterclass}
              alt="IxDF Masterclass"
              className="w-full scale-115 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.div>
          <div className="mt-4 rounded-3xl border border-[var(--pres-border)] bg-[var(--pres-card)] p-8 shadow-sm">
            <h3 className="text-2xl font-bold">Vibe Coding for Everyone</h3>
            <p className="mt-3 text-lg leading-relaxed text-[var(--pres-muted)]">
              Build and launch real products with AI. Join Brandon Groce's masterclass on <strong>April 16th</strong> at IxDF.
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpanded(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1.05, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 250 }}
              className="relative max-h-screen max-w-screen overflow-hidden p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-8 right-8 z-10 flex gap-2">
                <button 
                  onClick={() => setExpanded(null)}
                  className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl transition-all hover:bg-white/30 hover:scale-110 active:scale-90"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
              
              <img
                src={images[expanded]}
                alt="Expanded View"
                className="max-h-[95vh] w-auto rounded-xl object-contain shadow-[0_0_100px_rgba(0,0,0,0.5)] ring-1 ring-white/20"
              />
              
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-sm font-medium text-white/40 drop-shadow-md">Click anywhere to close</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
