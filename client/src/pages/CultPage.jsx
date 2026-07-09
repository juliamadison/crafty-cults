import React from 'react';
import { useParams, Link } from 'react-router-dom';

function CultPage() {
  const { cultId } = useParams();

  return (
    <section className="page-section">
      <h1 className="section-title">Coming Soon</h1>
      <p style={{ textAlign: 'center' }}>
        <Link to="/cults">Back to Cults</Link>
      </p>
    </section>
  );
}

export default CultPage;
