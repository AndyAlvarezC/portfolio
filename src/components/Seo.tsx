import { Helmet } from 'react-helmet';

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export const Seo = ({ title, description, image, url }: SeoProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />

    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    {url && <meta property="og:url" content={url} />}
    {image && <meta property="og:image" content={image} />}

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {image && <meta name="twitter:image" content={image} />}

    <script type="application/ld+json" id="json-ld">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Andy Álvarez',
        url: url || 'https://portfolio-andy-alvarez.vercel.app',
        sameAs: [
          'https://github.com/AndyAlvarezC',
          'https://www.linkedin.com/in/andy-alvarez-6961b4300/',
        ],
        jobTitle: 'Frontend Developer',
      })}
    </script>
  </Helmet>
);
