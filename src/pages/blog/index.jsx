import * as React from 'react';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

export default function BlogIndexPage() {
  return (
    <Layout>
      <div>
        <h1>
          Latest Stories
        </h1>
      </div>
      <section className="section">
        <div className="container">
          <div className="content">
            <BlogRoll />
          </div>
        </div>
      </section>
    </Layout>
  );
}
