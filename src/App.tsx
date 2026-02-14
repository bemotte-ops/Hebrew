import React, { useState } from 'react';
import { BookOpen, Hash, History, Shapes, Info, ChevronRight, Star } from 'lucide-react';

interface Letter {
  letter: string;
  name: string;
  proto: string;
  meaning: string;
  evolution: string;
  number: number;
  examples: string[];
  philosophy: string;
}

const App: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);

  const alphabet: Letter[] = [
    {
      letter: 'א',
      name: 'Алеф',
      proto: '𓃾',
      meaning: 'Бык / Сила',
      evolution: 'Начиналось как голова быка с рогами. Символизирует мощь, лидерство и божественное единство.',
      number: 1,
      examples: ['אבא (Аба) — Отец', 'אור (Ор) — Свет'],
      philosophy: 'Первая искра творения. Тишина перед звуком.'
    },
    {
      letter: 'ב',
      name: 'Бет',
      proto: '𓉐',
      meaning: 'Дом',
      evolution: 'Иероглиф плана дома. Символизирует концепцию сосуда, семьи и внутреннего пространства.',
      number: 2,
      examples: ['בית (Байт) — Дом', 'בן (Бен) — Сын'],
      philosophy: 'Двойственность и творение. Начало Торы (Берешит).'
    },
    {
      letter: 'ג',
      name: 'Гимель',
      proto: '𓄿',
      meaning: 'Верблюд / Подъем',
      evolution: 'Шея верблюда или нога. Означает движение, путешествие и вознаграждение (гмилут).',
      number: 3,
      examples: ['גמל (Гамаль) — Верблюд', 'גדול (Гадоль) — Большой'],
      philosophy: 'Связующее звено между противоположностями.'
    },
    {
      letter: 'ד',
      name: 'Далет',
      proto: '𓇯',
      meaning: 'Дверь',
      evolution: 'Вход в шатер. Символизирует выбор, переход и смирение (даль — бедняк).',
      number: 4,
      examples: ['דלת (Делет) — Дверь', 'דרך (Дерех) — Путь'],
      philosophy: 'Проход из одного состояния в другое.'
    },
    {
      letter: 'ה',
      name: 'Хей',
      proto: '𓀠',
      meaning: 'Окно / Дыхание',
      evolution: 'Человек с поднятыми руками или проем. Символизирует откровение и божественное присутствие.',
      number: 5,
      examples: ['הוא (Ху) — Он', 'הללויה (Аллилуйя)'],
      philosophy: 'Дыхание жизни, мягкость звука.'
    }
  ];

  // Set initial letter if none selected
  if (!selectedLetter && alphabet.length > 0) {
    setSelectedLetter(alphabet[0]);
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Header */}
      <header className="relative bg-stone-900 text-stone-100 py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight">Иврит: Код Бытия</h1>
          <p className="text-xl text-stone-400 max-w-2xl mx-auto">
            Исследуйте древнюю связь языка с иероглифами и его внутреннюю философию.
          </p>
        </div>
      </header>

      {/* Philosophy Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-serif flex items-center gap-3">
            <History className="text-amber-700" /> Происхождение
          </h2>
          <p className="text-stone-700 leading-relaxed text-lg">
            Иврит произошел от протосинайского письма. Каждая буква — это не просто звук, а символ. 
            Понимая, что буква <strong>Алеф</strong> — это бык, вы начинаете видеть логику в словах, связанных с силой и первенством.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shapes className="text-amber-700" /> Смысловые Корни
          </h3>
          <p className="text-stone-600">
            В иврите корень слова (Шореш) обычно состоит из 3-х согласных. 
            Вся грамматика строится на "нанизывании" смыслов на этот корень.
          </p>
        </div>
      </section>

      {/* Alphabet Grid */}
      <section className="bg-stone-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
            {alphabet.map((item) => (
              <button
                key={item.letter}
                onClick={() => setSelectedLetter(item)}
                className={`p-6 rounded-xl transition-all duration-300 flex flex-col items-center ${
                  selectedLetter?.letter === item.letter 
                  ? 'bg-amber-800 text-white shadow-lg scale-105' 
                  : 'bg-white hover:border-amber-500 border border-stone-200'
                }`}
              >
                <span className="text-4xl font-serif mb-1">{item.letter}</span>
                <span className="text-sm font-semibold">{item.name}</span>
                <span className="text-xs opacity-50">{item.number}</span>
              </button>
            ))}
          </div>

          {selectedLetter && (
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-stone-200 animate-in fade-in zoom-in duration-300">
              <div className="grid md:grid-cols-3 gap-10">
                <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-stone-100 pb-8 md:pb-0 text-center">
                  <div className="mb-6">
                    <p className="text-xs uppercase text-stone-400 mb-2">Иероглиф</p>
                    <div className="text-6xl bg-stone-50 w-24 h-24 flex items-center justify-center rounded-full border border-stone-200">
                      {selectedLetter.proto}
                    </div>
                  </div>
                  <ChevronRight className="rotate-90 md:rotate-0 text-stone-300 mb-6 hidden md:block" />
                  <div>
                    <p className="text-xs uppercase text-stone-400 mb-2">Современная буква</p>
                    <div className="text-8xl font-serif text-amber-900">{selectedLetter.letter}</div>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-4xl font-serif font-bold">{selectedLetter.name}</h3>
                      <p className="text-amber-700 text-xl italic">{selectedLetter.meaning}</p>
                    </div>
                    <div className="bg-stone-900 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                      <Hash size={18} /> <span className="text-xl font-bold">{selectedLetter.number}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="flex items-center gap-2 font-bold text-stone-400 text-sm uppercase"><Info size={16}/> История</h4>
                      <p className="text-stone-700 text-lg leading-relaxed">{selectedLetter.evolution}</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-stone-50 p-4 rounded-xl">
                        <h4 className="text-xs font-bold text-amber-800 uppercase mb-2">Примеры слов</h4>
                        <ul className="space-y-1">
                          {selectedLetter.examples.map(ex => <li key={ex} className="flex items-center gap-2 text-stone-800"><Star size={10}/> {ex}</li>)}
                        </ul>
                      </div>
                      <div className="bg-stone-50 p-4 rounded-xl">
                        <h4 className="text-xs font-bold text-amber-800 uppercase mb-2">Философия</h4>
                        <p className="text-stone-800 text-sm">{selectedLetter.philosophy}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default App;