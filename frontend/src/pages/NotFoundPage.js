import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="hero py-24">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-5xl font-bold text-base-content mb-4">404</h1>
          <p className="text-lg text-base-content/60 mb-8">That page doesn't exist.</p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
