import { Phone, Clock, Home, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { useEffect } from 'react';

function App() {
  const phoneNumber = "+370 644 42543";
  const businessInfo = {
    name: "Magnetoterapijos Nuoma",
    year: new Date().getFullYear(),
    phoneRaw: "+37064442543"
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber.replace(/\s/g, '')}`;
  };

  // Update document title for better SEO
  useEffect(() => {
    document.title = "Magnetoterapija Namuose | Profesionalus Magnetoterapijos Prietaisų Nuoma";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hidden semantic header for better SEO */}
      <header className="sr-only">
        <h1>Magnetoterapijos Prietaisų Nuoma Namuose</h1>
        <p>Profesionali magnetoterapija jūsų namuose - greitesnis gijimas, mažesnis skausmas</p>
      </header>
      
      {/* Hero Section */}
      <section aria-labelledby="hero-heading" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop')] mix-blend-overlay opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Magnetoterapija Jūsų Namuose
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Gydykitės patogiai namuose su profesionaliu magnetoterapijos prietaisu. Greitesnis gijimas, mažesnis skausmas.
              </p>
              <button
                onClick={handleCall}
                aria-label="Paskambinti užsakyti magnetoterapijos prietaisą"
                className="flex items-center gap-3 bg-white text-blue-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
              >
                <Phone className="w-6 h-6" aria-hidden="true" />
                {phoneNumber}
              </button>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800"
                  alt="Magnetoterapijos prietaisas gydymui namuose"
                  className="w-full h-full object-cover"
                  width="800"
                  height="600"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section aria-labelledby="benefits-heading" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="benefits-heading" className="text-4xl font-bold text-center mb-16">Magnetoterapijos Privalumai</h2>
          <div className="grid gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Clock className="w-12 h-12 text-blue-600" />,
                title: "Taupykite Laiką",
                description: "Nebereikia važiuoti į kliniką - gydykitės patogiai namuose Jums tinkamu metu"
              },
              {
                icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
                title: "Efektyvus Gydymas",
                description: "Pagreitina audinių gijimą, mažina skausmą ir uždegimą"
              },
              {
                icon: <Home className="w-12 h-12 text-blue-600" />,
                title: "Patogumas Namuose",
                description: "Naudokite prietaisą kada norite, kiek reikia, savo namų aplinkoje"
              }
            ].map((benefit, index) => (
              <article key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0" aria-hidden="true">{benefit.icon}</div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 text-lg">{benefit.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section aria-labelledby="how-it-works-heading" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="how-it-works-heading" className="text-4xl font-bold text-center mb-16">Kaip Tai Veikia?</h2>
          <div className="grid gap-6 max-w-3xl mx-auto">
            {[
              "Magnetoterapija naudoja magnetinį lauką, kuris stimuliuoja ląstelių atsinaujinimą",
              "Pagerina kraujotaką ir deguonies tiekimą į audinius",
              "Mažina uždegimą ir skausmą",
              "Greitina kaulų, raumenų ir sąnarių gijimą"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-6 bg-blue-50 p-6 rounded-xl hover:bg-blue-100 transition-colors">
                <CheckCircle2 className="w-8 h-8 text-blue-600 flex-shrink-0" aria-hidden="true" />
                <p className="text-xl">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Using appropriate semantic elements */}
      <section aria-labelledby="faq-heading" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="text-4xl font-bold text-center mb-16">Dažniausiai Užduodami Klausimai</h2>
          <div className="grid gap-6 max-w-3xl mx-auto">
            {[
              {
                question: "Kiek laiko trunka viena procedūra?",
                answer: "Įprastai viena procedūra trunka 20-30 minučių, priklausomai nuo gydomo negalavimo."
              },
              {
                question: "Ar saugu naudoti namuose?",
                answer: "Taip, prietaisas yra visiškai saugus naudoti namuose. Mes suteiksime išsamias instrukcijas."
              },
              {
                question: "Kokia nuomos trukmė?",
                answer: "Minimalus nuomos laikotarpis - 1 savaitė. Galima išsinuomoti ir ilgesniam laikui."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-lg">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section aria-labelledby="cta-heading" className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-4xl font-bold mb-8">Pradėkite Gydymą Jau Šiandien</h2>
          <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto">
            Paskambinkite dabar ir rezervuokite magnetoterapijos prietaisą
          </p>
          <button
            onClick={handleCall}
            aria-label="Paskambinti ir užsakyti magnetoterapijos prietaisą"
            className="flex items-center gap-3 bg-white text-blue-800 px-10 py-5 rounded-full text-xl font-semibold mx-auto hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
          >
            <Phone className="w-7 h-7" aria-hidden="true" />
            {phoneNumber}
            <ArrowRight className="w-7 h-7" aria-hidden="true" />
          </button>
        </div>
      </section>

      {/* Footer with structured data */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div itemScope itemType="https://schema.org/LocalBusiness">
            <meta itemProp="name" content={businessInfo.name} />
            <meta itemProp="telephone" content={businessInfo.phoneRaw} />
            <address itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="sr-only">
              <meta itemProp="addressCountry" content="LT" />
            </address>
            <p className="text-lg">© {businessInfo.year} <span itemProp="legalName">{businessInfo.name}</span>. Visos teisės saugomos.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;