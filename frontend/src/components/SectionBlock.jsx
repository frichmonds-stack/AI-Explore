import RiskCallout from './RiskCallout';
import PedagogyNote from './PedagogyNote';

export default function SectionBlock({ block }) {
  switch (block.type) {
    case 'text':
      return <p className="text-base-content/80 leading-relaxed mb-4">{block.content}</p>;

    case 'heading':
      return <h3 className="text-lg font-semibold text-base-content mt-8 mb-3">{block.content}</h3>;

    case 'list':
      return (
        <ul className="list-disc list-inside space-y-2 mb-4 text-base-content/80">
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );

    case 'risk':
      return <RiskCallout title={block.title}>{block.content}</RiskCallout>;

    case 'pedagogy':
      return <PedagogyNote title={block.title}>{block.content}</PedagogyNote>;

    case 'quote':
      return (
        <blockquote className="border-l-4 border-primary pl-4 italic text-base-content/70 my-6">
          <p>{block.content}</p>
          {block.source && <footer className="text-sm mt-1 not-italic">— {block.source}</footer>}
        </blockquote>
      );

    case 'callout':
      return (
        <div className="alert alert-neutral my-6">
          <div>
            {block.title && <h4 className="font-semibold">{block.title}</h4>}
            <p className="text-sm">{block.content}</p>
          </div>
        </div>
      );

    default:
      return null;
  }
}
