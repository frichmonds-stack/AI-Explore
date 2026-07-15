import { Link, useParams } from 'react-router-dom';
import { usePageMeta } from '../lib/usePageMeta';
import { SaveButton } from '../lumen/SaveButton';
import { ShareButton } from '../lumen/ShareButton';
import toolsData from '../content/tools.json';
import { StatusBadge } from '../lumen/StatusBadge';
import { SHOW_APPROVAL_STATUS } from '../config';
import { ArrowRight } from '../lumen/ToolCard';
import { DraftNotice, needsReview } from '../lumen/DraftNotice';

const { tools, meta } = toolsData;

const cewaStatusMap = {
  'approved': 'approved',
  'approved-conditions': 'conditional',
  'under-review': 'review',
  'not-approved': 'restricted',
  'not-reviewed': 'unreviewed',
};

const ROLE_DESC = {
  'Administration': 'The operational side of school life — drafting communications, managing documentation, and handling the organisational tasks that sit alongside teaching.',
  'Classroom': 'Direct teaching and learning — lesson delivery, student interaction, formative checks, and real-time instructional decisions.',
  'Curriculum': 'Curriculum design and planning — building units of work, sequencing learning, writing learning intentions, and aligning to the Australian Curriculum.',
  'Assessment': 'Designing, delivering, and responding to assessment — from formative checks through to summative tasks, rubrics, and report writing.',
  'Professional Learning': 'Your own growth as an educator — engaging with research, preparing for appraisal conversations, exploring new approaches, and developing practice.',
  'Creativity & Media': 'Creative and media-rich projects — visual arts, digital storytelling, design, photography, video, and media production across subject areas.',
};

const CEWA_DETAIL = {
  approved: {
    summary: 'This tool has been reviewed and cleared for use on school-managed devices and networks.',
    guidance: 'You can use this on school-managed devices. Still apply professional judgement around student data, age-appropriateness, and how student work is stored.',
  },
  conditional: {
    summary: 'Approved for school use, but specific conditions apply.',
    guidance: 'Read the conditions carefully before using on school devices. Restrictions commonly relate to student age, data storage location, or particular features within the tool.',
  },
  review: {
    summary: 'Currently being evaluated — no decision has been made yet.',
    guidance: 'Avoid using on school-managed devices until the review is complete. Use on personal devices is at your own professional discretion.',
  },
  restricted: {
    summary: 'Explicitly blocked from school devices and networks.',
    guidance: 'Do not use this tool on school devices or within school networks. This restriction applies to both teachers and students.',
  },
  unreviewed: {
    summary: 'This tool has not yet been independently reviewed.',
    guidance: 'Use professional judgement. Appropriate for personal devices; avoid school-managed devices until reviewed. Check vendor privacy policies before using with student data.',
  },
};

function SectionLabel({ children }) {
  return (
    <p style={{
      fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 'var(--weight-medium)', margin: 0,
    }}>{children}</p>
  );
}

function Section({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', paddingBottom: 'var(--space-6)', borderBottom: '1px solid var(--border-subtle)' }}>
      <SectionLabel>{label}</SectionLabel>
      {children}
    </div>
  );
}

function TagCard({ tag, description, linkTo, linkClass }) {
  return (
    <div style={{
      padding: 'var(--space-4)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      display: 'flex', flexDirection: 'column', gap: 'var(--space-2)',
    }}>
      <Link className={linkClass} to={linkTo} style={{ alignSelf: 'flex-start' }}>{tag}</Link>
      {description && (
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
          {description}
        </p>
      )}
    </div>
  );
}

export default function ToolDetailPage() {
  const { toolId } = useParams();
  const tool = tools.find((t) => t.id === toolId);

  usePageMeta(tool ? { title: tool.name, description: tool.description, type: 'article' } : { title: 'Tool not found' });

  if (!tool) {
    return (
      <div style={{ maxWidth: 640 }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', marginBottom: 'var(--space-3)' }}>
          Tool not found
        </h1>
        <Link to="/tools" style={{ color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-sm)' }}>
          ← Back to the tools library
        </Link>
      </div>
    );
  }

  const status = cewaStatusMap[tool.cewaStatus] || 'unreviewed';
  const statusDetail = CEWA_DETAIL[status];
  const useCats = (tool.useCategories || []).map(id => meta.useCategories.find(u => u.id === id)).filter(Boolean);
  const peds = (tool.pedagogies || []).map(id => meta.pedagogyFrameworks.find(p => p.id === id)).filter(Boolean);
  const accessTier = tool.access ? (meta.accessTiers || []).find(a => a.id === tool.access) : null;

  return (
    <div style={{ maxWidth: 760 }}>

      {/* Breadcrumb */}
      <nav style={{ marginBottom: 'var(--space-5)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
        <Link to="/tools" style={{ color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)' }}>AI Tools</Link>
        <span>›</span>
        <span>{tool.name}</span>
      </nav>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)', marginBottom: 'var(--space-5)' }}>
        <div style={{
          width: 64, height: 64, borderRadius: 'var(--radius-md)', flexShrink: 0,
          background: 'var(--pine-50)', border: '1px solid var(--pine-100)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden', fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)',
          fontSize: 26, color: 'var(--pine-700)',
        }}>
          {tool.logo ? <img src={tool.logo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : tool.name.trim()[0]}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', lineHeight: 1.1, marginBottom: 4 }}>
            {tool.name}
          </h1>
          {tool.vendor && (
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', margin: 0 }}>{tool.vendor}</p>
          )}
        </div>
        <StatusBadge status={status} />
      </div>

      {/* Description */}
      <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-5)' }}>
        {tool.description}
      </p>

      <div style={{ display: 'flex', gap: 'var(--space-3)', marginBottom: 'var(--space-7)', flexWrap: 'wrap' }}>
        <SaveButton type="tool" id={tool.id} />
        <ShareButton title={`${tool.name} — Pigeon Hole`} text={tool.description} />
      </div>

      {needsReview(tool) && <DraftNotice note="This tool write-up was drafted by AI — its description and notes need a human review before relying on them." />}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>

        {/* Why it's useful */}
        {tool.notes && (
          <Section label="Why it may be useful">
            <p style={{
              fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', margin: 0,
              padding: 'var(--space-4)', background: 'var(--paper-50)',
              borderLeft: '3px solid var(--pine-200)', borderRadius: 'var(--radius-sm)',
            }}>
              {tool.notes}
            </p>
          </Section>
        )}

        {/* Approval/device status — hidden for the public build (see config.js). */}
        {SHOW_APPROVAL_STATUS && (
          <Section label="Device status">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', padding: 'var(--space-4)', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <StatusBadge status={status} />
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', margin: 0, fontWeight: 'var(--weight-medium)' }}>
                {statusDetail.summary}
              </p>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
                {statusDetail.guidance}
              </p>
            </div>
          </Section>
        )}

        {/* Availability & access — secondary "tell me more" info, detail page only */}
        {((SHOW_APPROVAL_STATUS && tool.cewaProvided) || accessTier) && (
          <Section label="Availability & access">
            {SHOW_APPROVAL_STATUS && tool.cewaProvided && (
              <div style={{
                display: 'flex', flexDirection: 'column', gap: 'var(--space-2)',
                padding: 'var(--space-4)', background: 'var(--pine-50)',
                border: '1px solid var(--pine-100)', borderRadius: 'var(--radius-md)',
              }}>
                <span style={{
                  alignSelf: 'flex-start', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)',
                  fontWeight: 'var(--weight-semibold)', color: '#fff', background: 'var(--pine-600)',
                  borderRadius: 'var(--radius-pill)', padding: '.3em .8em',
                }}>Already in your toolkit</span>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--pine-800)', fontWeight: 'var(--weight-semibold)', margin: 0 }}>
                  Likely already available to you — no separate signup or cost.
                </p>
                {tool.accessNote && (
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
                    {tool.accessNote}
                  </p>
                )}
              </div>
            )}

            {accessTier && (
              <div style={{
                display: 'flex', flexDirection: 'column', gap: 'var(--space-2)',
                padding: 'var(--space-4)', background: 'var(--surface-card)',
                border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)',
              }}>
                <SectionLabel>Cost</SectionLabel>
                <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', margin: 0 }}>
                  {accessTier.label}
                </p>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
                  {accessTier.description}
                </p>
                {tool.accessNote && !tool.cewaProvided && (
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
                    {tool.accessNote}
                  </p>
                )}
              </div>
            )}

            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', margin: 0, fontStyle: 'italic' }}>
              Pricing and what's provisioned change often — check with your school's digital team before relying on this. Free or provided doesn't mean cleared for student data; confirm a tool's suitability and your school's policy before using it with students.
            </p>
          </Section>
        )}

        {/* Use categories */}
        {useCats.length > 0 && (
          <Section label="What you can do with this tool">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {useCats.map((u) => (
                <TagCard
                  key={u.id}
                  tag={u.label}
                  description={u.description}
                  linkTo="/explainer/uses"
                  linkClass="lmn-tool__use"
                />
              ))}
            </div>
          </Section>
        )}

        {/* Roles */}
        {(tool.roles || []).length > 0 && (
          <Section label="For your role">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {tool.roles.map((r) => (
                <TagCard
                  key={r}
                  tag={r}
                  description={ROLE_DESC[r]}
                  linkTo="/explainer/roles"
                  linkClass="lmn-tool__rolepill"
                />
              ))}
            </div>
          </Section>
        )}

        {/* Pedagogies */}
        {peds.length > 0 && (
          <Section label="Teaching approaches">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {peds.map((p) => (
                <div key={p.id} style={{
                  padding: 'var(--space-4)', background: 'var(--surface-card)',
                  border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)',
                  display: 'flex', flexDirection: 'column', gap: 'var(--space-2)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Link className="lmn-tool__ped" to={`/pedagogies/${p.id}`} title={p.label} style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)' }}>
                      {p.label} <ArrowRight />
                    </Link>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>{p.author}</span>
                  </div>
                  {p.description && (
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
                      {p.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Setup placeholder */}
        <Section label="Setup guide">
          <div style={{
            padding: 'var(--space-4)', background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)',
          }}>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)',
              textTransform: 'uppercase', color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)',
              marginBottom: 'var(--space-2)',
            }}>Setup guide coming soon</p>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
              A step-by-step classroom setup guide for {tool.name} is being written, including account setup, student access, and integration with your school's systems. In the meantime, visit the vendor's help centre via the link below.
            </p>
          </div>
        </Section>

      </div>

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-6)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--border-subtle)' }}>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: '#fff',
            background: 'var(--pine-600)', borderRadius: 'var(--radius-pill)',
            padding: '.55em 1.15em', textDecoration: 'none',
          }}
        >
          Visit {tool.name} ↗
        </a>
        <Link to="/tools" style={{ fontSize: 'var(--text-sm)', color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)' }}>
          ← Back to library
        </Link>
      </div>
    </div>
  );
}
