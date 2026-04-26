'use client';

import { useState } from 'react';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="border border-border bg-card/40 backdrop-blur-md p-6 md:p-8 rounded-sm space-y-5">
      <p className="text-mono text-[10px] uppercase tracking-[0.3em] text-signal">[ Brief us ]</p>
      <Field label="Name"><input required className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-signal text-foreground" /></Field>
      <Field label="Email"><input type="email" required className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-signal text-foreground" /></Field>
      <Field label="I'm interested in">
        <select className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-signal text-foreground">
          <option className="bg-background">Geopolitical Forecast Platform</option>
          <option className="bg-background">Bittensor Intelligence Platform</option>
          <option className="bg-background">Custom forecasting pipeline</option>
          <option className="bg-background">Partnership / Integration</option>
          <option className="bg-background">Investment inquiry</option>
          <option className="bg-background">Just saying hi</option>
        </select>
      </Field>
      <Field label="Tell us more"><textarea rows={4} className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-signal text-foreground resize-none" /></Field>
      <button type="submit" className="w-full mt-2 inline-flex items-center justify-between rounded-full bg-signal text-signal-foreground px-6 py-3 text-mono text-xs uppercase tracking-[0.2em] hover:bg-signal/90 transition cursor-hover">
        {sent ? '✓ Signal received' : 'Send signal'}<span>→</span>
      </button>
    </form>
  );
}
