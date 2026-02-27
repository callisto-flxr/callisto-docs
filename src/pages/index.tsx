import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home(): React.ReactElement {
  return (
    <Layout title="Callisto" description="A fully configurable Fluxer ticketing bot">
      <main className={styles.main}>

        <section className={styles.hero}>
          <div className={styles.stars} />
          <img src="img/callistomoon.png" alt="Callisto" className={styles.heroLogo} />
          <h1 className={styles.heroTitle}>Callisto</h1>
          <p className={styles.heroTagline}>
            A free, fully-featured ticketing bot for Fluxer.
          </p>
          <div className={styles.heroButtons}>
            <Link className={styles.buttonPrimary} to="/docs">
              Documentation
            </Link>
            <Link className={styles.buttonSecondary} to="https://web.fluxer.app/oauth2/authorize?client_id=1473925654608011283&scope=bot&permissions=6756636731763927">
              Add to Server
            </Link>
          </div>
        </section>

        <section className={styles.features}>
          <ul className={styles.featureList}>
            {features.map((f, i) => (
              <li key={i} className={styles.featureItem}>
                <span className={styles.featureDot} />
                <div>
                  <span className={styles.featureName}>{f.name}</span>
                  <span className={styles.featureSep}> - </span>
                  <span className={styles.featureDesc}>{f.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

      </main>
    </Layout>
  );
}

const features = [
  { name: 'Ticket categories',    desc: 'Organize tickets by type with per-category staff roles and channels.' },
  { name: 'Reaction panels',      desc: 'Let members open tickets by clicking a reaction.' },
  { name: 'HTML transcripts',     desc: 'Every closed ticket generates a full transcript posted to your log channel.' },
  { name: 'Staff claiming',       desc: 'Staff can claim tickets so everyone knows who is handling what.' },
  { name: 'Canned responses',     desc: 'Save preset messages that staff can drop into any ticket instantly.' },
  { name: 'Idle detection',       desc: 'Automatically warn in quiet tickets and optionally close them.' },
  { name: 'Full configuration',   desc: 'Everything is configurable to your liking.' },
  { name: 'Ignored channels',     desc: "Prevent Callisto from responding in channels where it isn't needed." },
];