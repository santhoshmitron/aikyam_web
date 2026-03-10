'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TermsContent() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/legal#terms');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <p className="text-gray-500 font-light">Redirecting to Terms of Service…</p>
    </div>
  );
}
