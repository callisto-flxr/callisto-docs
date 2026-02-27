import React from 'react';
import Layout from '@theme/Layout';

export default function Home(): React.ReactElement {
  return (
    <Layout title="Callisto" description="A free, fully-featured Fluxer ticketing bot">
      <main style={{ padding: '2rem' }}>
        <h1>Callisto</h1>
        <p>A free, fully-featured Fluxer ticketing bot. View the docs using the navigation above.</p>
      </main>
    </Layout>
  );
}