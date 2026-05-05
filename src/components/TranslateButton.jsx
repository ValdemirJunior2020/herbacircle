// src/components/TranslateButton.jsx

import { Languages } from "lucide-react";
import { useEffect, useState } from "react";

export default function TranslateButton() {
  const [translated, setTranslated] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.google?.translate?.TranslateElement) {
      setReady(true);
      return;
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,pt",
          autoDisplay: false,
        },
        "google_translate_element"
      );

      setTimeout(() => {
        setReady(true);
      }, 700);
    };

    const existingScript = document.querySelector(
      'script[src*="translate_a/element.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const triggerTranslate = (languageCode) => {
    const select = document.querySelector(".goog-te-combo");

    if (!select) {
      alert("Translator is loading. Click again in a few seconds.");
      return;
    }

    select.value = languageCode;
    select.dispatchEvent(new Event("change"));
  };

  const handleClick = () => {
    if (!ready) {
      alert("Translator is loading. Click again in a few seconds.");
      return;
    }

    if (translated) {
      triggerTranslate("en");
      setTranslated(false);
    } else {
      triggerTranslate("pt");
      setTranslated(true);
    }
  };

  return (
    <>
      <div id="google_translate_element" className="hidden" />

      <button
        type="button"
        onClick={handleClick}
        className="inline-flex items-center gap-2 rounded-full bg-mint px-4 py-2 text-sm font-bold text-forest shadow-soft transition hover:bg-cream"
        title="Translate site"
      >
        {translated ? (
          <Languages size={17} />
        ) : (
          <img
            src="/brazil.png"
            alt="Brazilian flag"
            className="h-5 w-5 rounded-full object-cover"
          />
        )}

        <span className="hidden sm:inline">
          {translated ? "English" : "Português"}
        </span>
      </button>
    </>
  );
}