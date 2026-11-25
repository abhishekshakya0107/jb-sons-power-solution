import { useEffect, useState } from 'react';

const LANGUAGE_KEY = 'jbsons_language';
const GOOGLE_TRANSLATE_SCRIPT_ID = 'google-translate-script';

function readLanguage() {
  return localStorage.getItem(LANGUAGE_KEY) || 'en';
}

function LanguageSelector() {
  const [language, setLanguage] = useState(readLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    if (language !== 'hi' || document.getElementById(GOOGLE_TRANSLATE_SCRIPT_ID)) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en', includedLanguages: 'en,hi', autoDisplay: false },
        'google_translate_element',
      );
    };

    const script = document.createElement('script');
    script.id = GOOGLE_TRANSLATE_SCRIPT_ID;
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);
  }, [language]);

  const selectLanguage = (nextLanguage) => {
    if (nextLanguage === language) return;

    localStorage.setItem(LANGUAGE_KEY, nextLanguage);
    document.cookie = `googtrans=/en/${nextLanguage}; path=/; max-age=31536000; SameSite=Lax`;
    setLanguage(nextLanguage);
    window.location.reload();
  };

  return (
    <>
      <div className="inline-flex items-center rounded-md border border-white/15 bg-white/5 p-1" role="group" aria-label="Choose language" translate="no">
        <button
          type="button"
          onClick={() => selectLanguage('en')}
          aria-pressed={language === 'en'}
          className={`rounded px-2.5 py-1.5 text-xs font-semibold transition-colors ${language === 'en' ? 'bg-[#ff8c1a] text-[#111827]' : 'text-[#d1d5db] hover:text-white'}`}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => selectLanguage('hi')}
          aria-pressed={language === 'hi'}
          className={`rounded px-2.5 py-1.5 text-xs font-semibold transition-colors ${language === 'hi' ? 'bg-[#ff8c1a] text-[#111827]' : 'text-[#d1d5db] hover:text-white'}`}
        >
          हिंदी
        </button>
      </div>
      <div id="google_translate_element" className="hidden" aria-hidden="true" />
    </>
  );
}

export default LanguageSelector;