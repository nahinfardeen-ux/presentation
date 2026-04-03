import { BrandLogo } from "../components/BrandLogo.jsx";

const Card = ({ title, subtitle }) => (
  <div className="group flex h-full flex-col rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-card)] p-6 shadow-sm transition hover:border-[var(--pres-accent)] sm:p-8">
    <h3 className="mb-3 font-display text-xl font-semibold text-[var(--pres-text)] sm:text-2xl">
      {title}
    </h3>
    <p className="font-dm text-sm leading-relaxed text-[var(--pres-muted)] sm:text-base">
      {subtitle}
    </p>
  </div>
);

export default function Slide12() {
  return (
    <div className="flex w-full max-w-5xl flex-col">
      <p className="mb-4 font-dm text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--pres-accent)]">
        Proof of work
      </p>
      <h2 className="mb-12 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-[48px]">
        Built with This Workflow
      </h2>

      <div className="mb-8 grid w-full gap-6 md:grid-cols-2 md:gap-8">
        <Card
          title="Genelle Health Portal"
          subtitle="DNA-based wellness platform, Client Portal, Design System + Vibe-coded components"
        />
        <Card
          title="Internal Tool"
          subtitle="n8n automation + Google Forms → Sheets → Gemini → Gmail"
        />
      </div>

      <p className="mb-3 flex items-center gap-2 font-display text-lg font-semibold text-[var(--pres-accent)]">
        <BrandLogo brand="vercel" className="h-5 w-5 opacity-100" />
        Live on Vercel →
      </p>
      <p className="font-dm text-sm text-[var(--pres-muted)] sm:text-base">
        From wireframe to deployed product — same workflow, every time.
      </p>
    </div>
  );
}
