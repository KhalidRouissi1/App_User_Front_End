'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import mailEnvelopeImage from '../images/check-mark.png'; 
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from 'i18n/LanguageContext'; // Hook de langue

export default function Confirmation() {
  const router = useRouter();
  const { t } = useLanguage(); // Utilisation du hook pour la traduction

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/signin'); // Redirection après 3 secondes
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#ffffff]">
      <h1 className="text-2xl font-semibold text-black mb-4">
        {t('common.passwordResetSuccess')} {/* Texte traduit */}
      </h1>
      <Image 
        src={mailEnvelopeImage} 
        alt={t('common.requestSent')} 
        width={150} 
        height={150} 
        className="mb-2" 
      />
      <p className="text-center text-gray-800 mb-4">
        {t('common.passwordResetMessage')} {/* Texte traduit */}
      </p>
      <Link href="/signin" passHref>
        <button className="w-full bg-black text-white p-3 rounded-lg mt-4">
          {t('common.goToSignIn')} {/* Texte traduit */}
        </button>
      </Link>
    </div>
  );
}
