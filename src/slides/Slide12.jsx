import mentorProofChat from "../assets/mentor_proof_chat.png";
import ixdfMasterclass from "../assets/ixdf_masterclass.png";

export default function Slide12() {
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
          <div className="overflow-hidden rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-card)] shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:scale-[1.02]">
            <img
              src={mentorProofChat}
              alt="Brandon Groce Chat"
              className="w-full object-cover"
            />
          </div>
          <p className="text-lg italic leading-relaxed text-[var(--pres-muted)]">
            "That's basically what the work flow of today & the future."
          </p>
        </div>

        {/* Masterclass / Invitation */}
        <div className="flex flex-col space-y-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-[var(--pres-muted)]">
            Next Session at IxDF
          </span>
          <div className="group relative overflow-hidden rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-card)] shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:scale-[1.02]">
            <img
              src={ixdfMasterclass}
              alt="IxDF Masterclass"
              className="w-full scale-115 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <div className="mt-4 rounded-3xl border border-[var(--pres-border)] bg-[var(--pres-card)] p-8 shadow-sm">
            <h3 className="text-2xl font-bold">Vibe Coding for Everyone</h3>
            <p className="mt-3 text-lg leading-relaxed text-[var(--pres-muted)]">
              Build and launch real products with AI. Join Brandon Groce's masterclass on <strong>April 16th</strong> at IxDF.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="flex-1 cursor-pointer rounded-full bg-[var(--pres-accent)] px-8 py-4 text-center font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95">
                Register on IxDF
              </button>
              <button className="flex-1 cursor-pointer rounded-full border border-[var(--pres-border)] bg-white px-8 py-4 text-center font-bold text-[var(--pres-text)] shadow-sm transition-all hover:bg-gray-50 active:scale-95">
                Invite Colleague
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
