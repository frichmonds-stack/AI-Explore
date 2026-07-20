import { Link, useParams } from 'react-router-dom';
import toolsData from '../content/tools.json';
import { DraftNotice } from '../lumen/DraftNotice';
import { Eyebrow } from '../lumen/Eyebrow';

const { meta } = toolsData;

const ROLE_DATA = [
  {
    id: 'Administration',
    emoji: '📋',
    description: 'The operational backbone of school life. AI tools help teachers draft communications, produce reports, manage documentation, and handle the administrative load more efficiently — freeing more time for teaching.',
    examples: ['Drafting parent newsletters and updates', 'Producing report comment starters', 'Summarising meeting notes and action items', 'Writing staff communications and policy documents'],
  },
  {
    id: 'Classroom',
    emoji: '🏫',
    description: "Direct teaching and learning — the space where AI tools can most directly support or undermine pedagogy. The key is intentional use: AI supports the teacher's craft, it doesn't replace it.",
    examples: ['Generating discussion prompts and warm-up activities', 'Creating interactive exercises and class tasks', 'Producing alternative explanations for tricky concepts', 'Building engagement activities and formative checks'],
  },
  {
    id: 'Curriculum',
    emoji: '📐',
    description: 'Designing the learning journey from broad scope-and-sequence down to individual lesson activities. AI accelerates the drafting phase, letting teachers focus attention on pedagogical decisions rather than production.',
    examples: ['Building unit outlines and learning progressions', 'Writing learning intentions and success criteria', 'Aligning tasks to the Australian Curriculum', 'Adapting resources across year levels and bands'],
  },
  {
    id: 'Assessment',
    emoji: '📊',
    description: 'From formative check-ins to summative tasks and report writing. AI can help generate assessment tasks, write rubrics, and produce feedback — but professional judgement must remain with the teacher.',
    examples: ['Generating quiz and test questions across Bloom\'s levels', 'Drafting rubric criteria for writing and projects', 'Producing differentiated assessment tasks', 'Writing feedback comment banks for reports'],
  },
  {
    id: 'Professional Learning',
    emoji: '🌱',
    description: 'AI as a professional thinking partner — helping teachers engage with research, prepare for appraisal, reflect on practice, and stay current in a fast-moving landscape.',
    examples: ['Summarising research papers and professional articles', 'Preparing for appraisal and goal-setting conversations', 'Exploring new pedagogical frameworks and approaches', 'Reflecting on classroom data and student outcomes'],
  },
  {
    id: 'Creativity & Media',
    emoji: '🎨',
    description: 'AI is a powerful creative collaborator for teachers working in Arts, Media, Design, and English. Image generation, writing variation, and rapid prototyping of creative concepts all open new classroom possibilities.',
    examples: ['Generating visual assets and mood boards', 'Producing story starters and creative prompts', 'Exploring design variations and concept sketches', 'Creating multimedia resources for creative projects'],
  },
];

function UsesExplainer() {
  return (
    <div>
      <Eyebrow tone="pine" style={{ marginBottom: 'var(--space-2)' }}>Use categories</Eyebrow>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-3)' }}>
        What do you need to do?
      </h1>
      <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-7)', maxWidth: 600 }}>
        The tools library is organised by teacher job-to-be-done — the task you're actually trying to complete — rather than by AI capability or vendor category. Pick the category that matches your need and the right tools surface.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        {meta.useCategories.map((u) => (
          <div key={u.id} style={{
            padding: 'var(--space-5)', background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)',
            display: 'flex', flexDirection: 'column', gap: 'var(--space-2)',
          }}>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-md)', color: 'var(--text-strong)', margin: 0 }}>
              {u.label}
            </p>
            {u.description && (
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
                {u.description}
              </p>
            )}
            <Link to="/tools" style={{ fontSize: 'var(--text-sm)', color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)', textDecoration: 'none', alignSelf: 'flex-start', marginTop: 'var(--space-1)' }}>
              Browse {u.label} tools →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function RolesExplainer() {
  return (
    <div>
      <Eyebrow tone="pine" style={{ marginBottom: 'var(--space-2)' }}>Teaching roles</Eyebrow>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-3)' }}>
        AI across your roles
      </h1>
      <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-7)', maxWidth: 600 }}>
        Teachers wear many hats. The role tag on each tool card shows which teaching contexts that tool is most useful in — from classroom delivery through to curriculum design and administration.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
        {ROLE_DATA.map((r) => (
          <div key={r.id} style={{
            padding: 'var(--space-5)', background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)',
            display: 'flex', flexDirection: 'column', gap: 'var(--space-3)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <span style={{ fontSize: 22 }}>{r.emoji}</span>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-md)', color: 'var(--text-strong)', margin: 0 }}>
                {r.id}
              </p>
            </div>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
              {r.description}
            </p>
            <div>
              <Eyebrow>Common uses</Eyebrow>
              <ul style={{ margin: 'var(--space-2) 0 0', paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                {r.examples.map((ex) => (
                  <li key={ex} style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)' }}>{ex}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PedagogiesExplainer() {
  return (
    <div>
      <Eyebrow tone="pine" style={{ marginBottom: 'var(--space-2)' }}>Teaching approaches</Eyebrow>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-3)' }}>
        Pedagogy first, tools second
      </h1>
      <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-2)', maxWidth: 600 }}>
        Every tool in this library is mapped to the research-based teaching frameworks it best supports. The pedagogy badge on a tool card isn't decoration — it's a signal that the tool's design aligns with how that framework suggests students learn best.
      </p>
      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-7)', maxWidth: 600 }}>
        The ambition of this resource is to move teachers from "what tool should I use?" to "how do I teach better?" — and these frameworks are the bridge between the two.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
        {meta.pedagogyFrameworks.map((p) => (
          <div key={p.id} style={{
            padding: 'var(--space-5)', background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)',
            display: 'flex', flexDirection: 'column', gap: 'var(--space-3)',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-3)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-md)', color: 'var(--text-strong)', margin: 0 }}>
                {p.label}
              </p>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', whiteSpace: 'nowrap', paddingTop: 2 }}>{p.author}</span>
            </div>
            {p.description && (
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
                {p.description}
              </p>
            )}
          </div>
        ))}
      </div>

      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', marginTop: 'var(--space-6)', fontStyle: 'italic' }}>
        Deep-dive explainers for each framework — connecting theory to specific classroom practices and showing how AI tools can support each approach — are being written and will be published here.
      </p>
    </div>
  );
}

export default function ExplainerPage() {
  const { category } = useParams();

  const content = {
    uses: <UsesExplainer />,
    roles: <RolesExplainer />,
    pedagogies: <PedagogiesExplainer />,
  }[category] ?? (
    <div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', marginBottom: 'var(--space-4)' }}>
        Coming soon
      </h1>
      <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)' }}>This explainer is being written.</p>
    </div>
  );

  return (
    <div style={{ maxWidth: 720 }}>
      <DraftNotice />
      {content}
      <div style={{ marginTop: 'var(--space-8)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--border-subtle)' }}>
        <Link to="/tools" style={{ fontSize: 'var(--text-sm)', color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)' }}>
          ← Back to the tools library
        </Link>
      </div>
    </div>
  );
}
