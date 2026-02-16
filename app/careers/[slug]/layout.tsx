import { Metadata } from 'next';
import { getJobCategoryBySlug } from '@/lib/jobs';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getJobCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Job Category Not Found | Aikyam Careers',
      description: 'The job category you are looking for does not exist.',
    };
  }

  const positionTitles = category.positions.map(p => p.title).join(', ');

  return {
    title: `${category.title} | Aikyam Careers`,
    description: `Join our ${category.title} team. Open positions: ${positionTitles}`,
    keywords: `Aikyam, ${category.title}, careers, jobs, hiring, India`,
    openGraph: {
      title: `${category.title} at Aikyam`,
      description: category.shortDescription,
      type: 'website',
    },
  };
}

export default function JobLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
