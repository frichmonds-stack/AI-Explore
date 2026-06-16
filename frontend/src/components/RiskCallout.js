export default function RiskCallout({ title, children }) {
  return (
    <div role="alert" className="alert alert-warning my-6">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
      <div>
        <h4 className="font-semibold">{title || 'Child Development Risk'}</h4>
        <p className="text-sm">{children}</p>
      </div>
    </div>
  );
}
