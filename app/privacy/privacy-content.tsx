'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PrivacyContent() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/legal#privacy');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <p className="text-gray-500 font-light">Redirecting to Privacy Policy…</p>
    </div>
  );
}
