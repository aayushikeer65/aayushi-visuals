import { useState, type ReactNode } from "react";
import { Reveal, Heading } from "../components/Reveal";
import { contactInfo, socials, EMAIL } from "../data";

const icons: Record<string, ReactNode> = {
  Instagram: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.5.01-4.74.07-.9.04-1.39.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.81-.32 1.71-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.04.9.19 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.81.28 1.71.32 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.39-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.81.32-1.71.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.39-.32-1.71a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.13-.81-.28-1.71-.32-1.24-.06-1.59-.07-4.74-.07Zm0 2.76a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm0 8.74a3.44 3.44 0 1 0 0-6.88 3.44 3.44 0 0 0 0 6.88Zm6.75-8.93a1.24 1.24 0 1 1-2.48 0 1.24 1.24 0 0 1 2.48 0Z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  ),
  Twitter: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.22-6.82-5.97 6.82H1.66l7.73-8.84L1.24 2.25H8.1l4.71 6.23 5.43-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64Z" />
    </svg>
  ),
};

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", msg: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Project inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.msg}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="pointer-events-none absolute left-0 bottom-0 h-80 w-80 rounded-full bg-purple-600/10 blur-[130px]" />
      <div className="mx-auto w-[92%] max-w-6xl">
        <Heading
          eyebrow="Contact"
          title={<>Get in <span className="text-gradient">Touch</span></>}
          subtitle="Tell me about your project — I'll get back to you over a cup of chai. ☕"
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {contactInfo.map((c) => (
                <div key={c.label} className="glass flex items-center gap-4 rounded-2xl p-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-400/20 text-xl">
                    {c.icon}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">{c.label}</p>
                    <p className="font-medium break-all">{c.value}</p>
                  </div>
                </div>
              ))}
              <div className="glass rounded-2xl p-5">
                <p className="mb-3 text-xs uppercase tracking-wider text-muted">Follow me</p>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--card-border)] bg-white/5 transition-all hover:-translate-y-1 hover:border-cyan-400/60 hover:text-cyan-300"
                    >
                      {icons[s.label]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass space-y-5 rounded-3xl p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your Name" id="name" placeholder="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                <Field label="Email" id="email" type="email" placeholder="you@email.com" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              </div>
              <Field label="Subject" id="subject" placeholder="Project inquiry" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />
              <div>
                <label htmlFor="msg" className="mb-2 block text-sm text-muted">Message</label>
                <textarea
                  id="msg"
                  required
                  rows={5}
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  placeholder="Tell me about your vision..."
                  className="w-full resize-none rounded-2xl border border-[var(--card-border)] bg-white/5 px-4 py-3 text-sm outline-none transition-all focus:border-purple-400/60 focus:bg-white/10"
                />
              </div>
              <button className="gradient-btn w-full rounded-full py-3.5 font-semibold text-white">
                {sent ? "✓ Opening your email app..." : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-muted">{label}</label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[var(--card-border)] bg-white/5 px-4 py-3 text-sm outline-none transition-all focus:border-purple-400/60 focus:bg-white/10"
      />
    </div>
  );
}
