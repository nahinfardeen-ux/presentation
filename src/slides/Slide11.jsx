const MustItem = ({ title, desc }) => (
  <li className="flex flex-col gap-1 border-b border-[var(--pres-border)] py-3 last:border-b-0">
    <span className="font-display text-base font-semibold text-[var(--pres-text)]">
      {title}
    </span>
    <span className="font-dm text-sm text-[var(--pres-muted)]">{desc}</span>
  </li>
);

export default function Slide11() {
  return (
    <div className="flex w-full max-w-5xl flex-col">
      <p className="mb-4 font-dm text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--pres-accent)]">
        Perspective
      </p>
      <h2 className="mb-4 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-[52px]">
        Why Designers Need Code Literacy
      </h2>
      <p className="mb-12 max-w-2xl font-dm text-base text-[var(--pres-muted)] sm:text-lg md:text-[18px]">
        Not to become developers — but to speak their language
      </p>

      <div className="mb-12 grid w-full gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold text-[var(--pres-text)]">
            Must Know
          </h3>
          <ul className="list-none p-0">
            <MustItem title="HTML" desc="structure" />
            <MustItem title="CSS" desc="visual control" />
            <MustItem title="Tailwind" desc="rapid styling" />
            <MustItem title="JavaScript basics" desc="logic & behavior" />
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold text-[var(--pres-text)]">
            Good to Have
          </h3>
          <ul className="list-none p-0">
            <MustItem title="JS OOP & ES6" desc="modern patterns" />
            <MustItem title="Node.js" desc="backend basics" />
          </ul>
        </div>
      </div>

      <p className="max-w-3xl font-display text-lg font-semibold text-[var(--pres-accent)] sm:text-xl md:text-[22px]">
        Code literacy makes you a better prompt engineer.
      </p>
    </div>
  );
}
