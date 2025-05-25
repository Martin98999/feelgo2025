import { useState } from "react";

const MOODS = [
  { color: "🔴", label: "Angry", sk: "Nahnevaný", class: "text-red-600" },
  { color: "🟠", label: "Nervous", sk: "Nervózny", class: "text-orange-500" },
  { color: "🟡", label: "Neutral", sk: "Neutrálny", class: "text-yellow-400" },
  { color: "🟢", label: "Open", sk: "Otvorený", class: "text-green-600" },
  { color: "🔵", label: "Sad", sk: "Smutný", class: "text-blue-600" },
  { color: "🟣", label: "Creative", sk: "Kreatívny", class: "text-purple-600" }
];

export default function Home() {
  const [lang, setLang] = useState("en");
  const t = (en: string, sk: string) => (lang === "en" ? en : sk);
  const stripeUrl = "https://buy.stripe.com/test_4gw8A77q3bfL1HG8ww";

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="py-4 px-6 text-right">
        <button
          className="text-sm text-gray-500 underline"
          onClick={() => setLang(lang === "en" ? "sk" : "en")}
        >
          {lang === "en" ? "Slovenčina" : "English"}
        </button>
      </section>

      <section className="py-20 px-6 text-center bg-gradient-to-b from-white to-blue-50">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">FeelGo – Wear Your Mood</h1>
        <p className="text-lg md:text-xl mb-8">
          {t("A colorful bracelet that reflects your emotions.", "Farebný náramok, ktorý vyjadruje tvoje emócie.")}
        </p>
        <a
          href={stripeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white text-lg font-semibold px-6 py-3 rounded-2xl shadow hover:bg-gray-800 transition"
        >
          {t("Shop Now", "Objednaj teraz")}
        </a>
      </section>

      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          {t("How does MoodBand work?", "Ako MoodBand funguje?")}
        </h2>
        <p className="text-md mb-10">
          {t("Each color stands for a different mood.", "Každá farba znamená inú náladu.")}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-lg">
          {MOODS.map((mood, i) => (
            <div key={i} className={mood.class}>
              {mood.color} {t(mood.label, mood.sk)}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          {t("Born from emotion", "Zrodený z emócie")}
        </h2>
        <p className="text-md max-w-xl mx-auto">
          {t(
            "MoodBand was created as a way to connect – with yourself and others.
A small signal with a big impact. Let colors speak for you.",
            "MoodBand vznikol ako spôsob, ako sa spojiť – so sebou aj s ostatnými.
Malé gesto, veľký význam. Nech farby hovoria za teba."
          ).split("\n").map((line, i) => (
            <span key={i} className="block mb-2">{line}</span>
          ))}
        </p>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          {t("Get yours now", "Objednaj si svoj teraz")}
        </h2>
        <p className="text-md mb-6">
          {t("Limited first edition. Ships from Slovakia.", "Limitovaná prvá edícia. Odosielame zo Slovenska.")}
        </p>
        <a
          href={stripeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white text-lg font-semibold px-6 py-3 rounded-2xl shadow hover:bg-gray-800 transition"
        >
          {t("Choose Your MoodBand", "Vyber si svoj MoodBand")}
        </a>
      </section>

      <footer className="py-10 text-center text-sm text-gray-500">
        © 2025 FeelGo · <a href="#" className="underline">Instagram</a> · <a href="#" className="underline">Contact</a> · <a href="#" className="underline">Privacy Policy</a>
      </footer>
    </main>
  );
}