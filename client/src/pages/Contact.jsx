import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

function Contact() {
  const formRef = useScrollReveal();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus({ type: 'success', message: 'You\'re in. Welcome to the cult.' });
        setEmail('');
      } else {
        const data = await res.json();
        setStatus({ type: 'error', message: data.error || 'Something went wrong.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="page-section">
      <h1 className="section-title">newsletter coming soon</h1>
     </section>
  );
}

export default Contact;
