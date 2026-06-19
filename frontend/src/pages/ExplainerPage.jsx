import { Link, useParams } from 'react-router-dom';

const COPY = {
  uses: {
    eyebrow: 'Use categories',
    title: 'What you can do with AI',
    body: 'Use categories group tools by the job a teacher actually needs done — planning a lesson, giving feedback, differentiating a text, engaging a class. A full explainer for each category is on its way.',
  },
  roles: {
    eyebrow: 'Teaching roles',
    title: 'AI across your roles',
    body: 'Teachers wear many hats — classroom, curriculum, assessment, administration, professional learning. This explainer will set out how AI fits each one, and where to be cautious.',
  },
  pedagogies: {
    eyebrow: 'Teaching approaches',
    title: 'Pedagogy first, tools second',
    body: 'Every tool here is mapped to the research-based approaches it supports — Cognitive Load Theory, UDL, Differentiation, Visible Learning and more. Deep explainers for each framework are coming, linking practice back to theory.',
  },
};

export default function ExplainerPage() {
  const { category } = useParams();
  const copy = COPY[category] || {
    eyebrow: 'Explainer',
    title: 'Coming soon',
    body: 'This explainer is being written.',
  };

  return (
    <div style={{ maxWidth: 640 }}>
      <p className="lumen-eyebrow" style={{ marginBottom: 'var(--space-2)' }}>{copy.eyebrow}</p>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-4)' }}>
        {copy.title}
      </h1>
      <div style={{
        padding: 'var(--space-5)', background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)',
        marginBottom: 'var(--space-6)',
      }}>
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-3)' }}>
          {copy.body}
        </p>
        <p className="lumen-eyebrow">Full explainer in development</p>
      </div>
      <Link to="/tools" style={{ fontSize: 'var(--text-sm)', color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)' }}>
        ← Back to the tools library
      </Link>
    </div>
  );
}
