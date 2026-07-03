import { Link } from 'react-router-dom';
import { usePageMeta } from '../lib/usePageMeta';

// Author is deliberately anonymous, so copy is first-person but unsigned.
// Voice: straight-shooter, high ideals, honest about limits. Kept in the
// component (like HomePage/LearnPage) since it's one-off narrative, not
// structured content.

function Eyebrow({ children }) {
  return (
    <p style={{
      fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase', color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)', margin: '0 0 var(--space-2)',
    }}>{children}</p>
  );
}

function H2({ children }) {
  return (
    <h2 style={{
      fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--text-strong)',
      fontWeight: 'var(--weight-semibold)', margin: '0 0 var(--space-3)',
    }}>{children}</h2>
  );
}

function P({ children }) {
  return (
    <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', margin: '0 0 var(--space-4)' }}>
      {children}
    </p>
  );
}

function UnderConstruction({ children }) {
  return (
    <div className="alert alert-info" style={{ fontSize: 'var(--text-sm)', margin: '0 0 var(--space-4)' }}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '1.1rem', height: '1.1rem', flexShrink: 0 }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{children}</span>
    </div>
  );
}

export default function AboutPage() {
  usePageMeta({
    title: 'About',
    description: 'An independent, honest attempt to help teachers decide whether, when and how to use AI — child safety and good teaching first.',
  });

  return (
    <div style={{ maxWidth: 720 }}>
      <div style={{ marginBottom: 'var(--space-7)' }}>
        <Eyebrow>About</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', lineHeight: 'var(--leading-tight)', marginBottom: 'var(--space-3)' }}>
          Why this exists
        </h1>
        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
          A straight-talking attempt to help teachers decide whether, when and how to use AI — with child safety and good teaching leading, not trailing.
        </p>
      </div>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <P>
          I'm a maths teacher first and a tech leader second. Across more than fifteen years in classrooms and five leading
          technology in schools, I've watched tool after tool arrive with big promises and little guidance for the teachers
          expected to use them. AI is the fastest-moving of them yet — in the last year I've built things I never thought
          possible — and the questions teachers actually ask keep going unanswered: <em>Is this safe? Should students use it?
          Does it actually help them learn?</em>
        </P>
        <P>
          Part of my role is to explore technology. My aim with this site is to marry four things that usually get treated
          separately — the tech, future-focused thinking, child safety, and sound pedagogy — so that using AI well makes you a
          <em> better</em> teacher, not just a faster one.
        </P>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <H2>Who's behind it</H2>
        <P>
          I've kept my name off this on purpose — not to hide, but because the ideas should stand on their own, not on who's
          saying them. For what it's worth: I'm a maths teacher and school technology leader. Straight talk,
          high standards, and trying to do right by kids — that's the lens everything here is written through.
        </P>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <H2>Full transparency</H2>
        <P>
          So you can weigh what you read: I have <strong>no commercial affiliation</strong> with any tool listed here. In the
          interest of full disclosure, earlier in my career I spent a couple of years as a business development manager at a
          maths edtech company. I've seen how the product gets sold — which is a large part of <em>why</em> the vetting here
          tries to be honest about what a tool <em>can't</em> do, not just what it can.
        </P>
        <P>
          This site is <strong>independent</strong> — it isn't affiliated with, or endorsed by, any school or education
          authority, and no tool here is officially reviewed or approved. Always confirm a tool's suitability, its current
          status, and your school's policy before using it with students. Definitions for the labels are in the{' '}
          <Link to="/glossary" style={{ color: 'var(--pine-700)', textDecoration: 'underline' }}>glossary</Link>.
        </P>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <H2>Where this is honest — and still under construction</H2>
        <P>
          I'll be straight with you. Right now this is largely one teacher sharing what he's found. The deeper, structured
          tool reviews — privacy, student-use, what to avoid, sources, review dates — are being built, not finished.
        </P>
        <UnderConstruction>
          Where something hasn't been properly reviewed yet, it says so. I'd rather show you an honest gap than a confident
          guess — so parts of this site are openly a work in progress.
        </UnderConstruction>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <H2>What I try to hold to</H2>
        <ul style={{ margin: 0, paddingLeft: '1.2em', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          {[
            ['Balanced.', 'AI is neither saviour nor threat. Intent is what matters — the same tool can serve or undermine learning.'],
            ['Child safety first.', 'Named up front, surfaced everywhere, never traded for convenience or speed.'],
            ['Pedagogy is the point.', 'The goal is better teaching, not just faster work. Every shortcut should pull toward the craft.'],
            ['Honest about uncertainty.', 'Verified facts, general guidance, and unknowns are kept distinct. No invented approvals or policy.'],
            ['Plain language.', 'Written for time-poor, non-technical teachers. No jargon, no code.'],
          ].map(([lead, rest]) => (
            <li key={lead} style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)' }}>
              <strong style={{ color: 'var(--text-strong)' }}>{lead}</strong> {rest}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <H2>Get in touch</H2>
        <P>
          A proper way to reach me — to flag an error, correct a status, or suggest a tool worth reviewing — is coming.
        </P>
        <UnderConstruction>Contact is still under construction; a professional email will land here soon.</UnderConstruction>
      </section>
    </div>
  );
}
