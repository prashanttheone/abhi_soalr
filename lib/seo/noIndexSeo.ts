import type { Metadata } from 'next';

export const noIndexSeo: Metadata = {
  title: 'Admin Dashboard | Abhi Solar',
  robots: {
    index: false,
    follow: false,
  },
};
