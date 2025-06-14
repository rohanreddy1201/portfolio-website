import { type Metadata } from 'next';

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function generateMetadata({
  title,
  description,
  path = '',
  image,
}: GenerateMetadataProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rohanreddy.dev'; // Or your GitHub Pages URL
  const fullTitle = title
    ? `${title} | Rohan Reddy`
    : 'Rohan Reddy - AI Cloud Engineer & ML Developer';

  return {
    title: fullTitle,
    description:
      description ||
      'AI Cloud Engineer and ML Developer with a passion for deploying scalable, production-grade GenAI applications on AWS.',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
    openGraph: {
      title: fullTitle,
      description:
        description ||
        'Building real-world AI applications and deploying cloud-native platforms using AWS, LLMs, and scalable infra.',
      url: `${baseUrl}${path}`,
      siteName: 'Rohan Reddy',
      type: 'website',
      ...(image && { images: [{ url: image }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      ...(image && { images: [image] }),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
