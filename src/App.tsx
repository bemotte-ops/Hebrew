import React, { useState } from 'react';
import { Hash, History, Shapes, Info, ChevronRight, Star } from 'lucide-react';

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
      evolution: 'Шея верблюда или нога. Означает движение, путешествие и вознаграждение.',
      number: 3,
      examples: ['גמל (Гамаль) — Верблюд', 'גדול (Гадоль) — Большой'],
      philosophy: 'Связующее звено между противоположностями.'
    },
    {
      letter: 'ד',
      name: 'Далет',
      proto: '𓇯',
      meaning: 'Дверь',
      evolution: 'Вход в шатер. Символизирует выбор, переход и смирение.',
      number: 4,
      examples: ['דלת (Делет) — Дверь', 'דרך (Дерех) — Путь'],
      philosophy: 'Проход из одного состояния в другое.'
    },
    {
      letter: 'ה',
      name: 'Хей',
      proto: '𓀠',
      meaning: 'Окно / Дыхание',
      evolution: 'Человек с поднятыми руками. Символизирует жизнь и божественное присутствие.',
      number: 5,
      examples: ['הוא (Ху) — Он', 'הללויה (Аллилуйя)'],
      philosophy: 'Дыхание жизни, мягкость звука.'
    },
    {
      letter: 'ו',
      name: 'Вав',
      proto: '𓏳',
      meaning: 'Крючок / Гвоздь',
      evolution: 'Символ соединения. Используется как союз "и".',
      number: 6,
      examples: ['וורд (Веред) — Роза', 'ו (Ве-) — союз "и"'],
      philosophy: 'Сила, соединяющая небо и землю.'
    },
    {
      letter: 'ז',
      name: 'Заин',
      proto: '𓏴',
      meaning: 'Оружие / Меч',
      evolution: 'Изображение кинжала. Символизирует защиту и разделение.',
      number: 7,
      examples: ['זמן (Зман) — Время', 'זהб (Захав) — Золото'],
      philosophy: 'Духовная борьба и священное время.'
    },
    {
      letter: 'ח',
      name: 'Хет',
      proto: '𓉗',
      meaning: 'Забор / Ограда',
      evolution: 'Стены шатра. Символизирует разделение между внешним и внутренним.',
      number: 8,
      examples: ['חיים (Хаим) — Жизнь', 'חכמה (Хохма) — Мудрость'],
      philosophy: 'Динамика жизни внутри защищенного пространства.'
    },
    {
      letter: 'ט',
      name: 'Тет',
      proto: '𓇠',
      meaning: 'Корзина / Узел',
      evolution: 'Свернутый предмет или корзина. Означает скрытое добро.',
      number: 9,
      examples: ['טוב (Тов) — Хорошо', 'טל (Таль) — Роса'],
      philosophy: 'Потенциал, скрытый внутри материи.'
    },
    {
      letter: 'י',
      name: 'Йод',
      proto: '𓂝',
      meaning: 'Рука (кисть)',
      evolution: 'Самая маленькая буква, происходящая от жеста руки. Начало любого действия.',
      number: 10,
      examples: ['יд (Яд) — Рука', 'ישראל (Исраэль)'],
      philosophy: 'Точка бесконечности, из которой всё исходит.'
    }
  ];

  const [selectedLetter, setSelectedLetter] = useState<Letter>(alphabet[0]);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="relative bg-stone-900 text-stone-100 py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight">Иврит: Код Бытия</h1>
          <p className="text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
            Исследуйте древнюю связь языка с иероглифами и его внутреннюю философию.
          </p>
        </div>
      </header>

      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-serif flex items-center gap-3">
            <History className="text-amber-700" /> Происхождение
          </h2>
          <p className="text-stone-700 leading-relaxed text-lg">
            Иврит произошел от протосинайского письма. Каждая буква — это не просто звук, а символ. 
            Понимая, что буква <strong>Алеф</strong> — это бык, вы начинаете видеть логику в словах.
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

      <section className="bg-stone-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3 mb-12">
            {alphabet.map((item) => (
              <button
                key={item.letter}
                onClick={() => setSelectedLetter(item)}
                className={`p-4 rounded-xl transition-all duration-300 flex flex-col items-center border ${
                  selectedLetter.letter === item.letter 
                  ? 'bg-amber-800 text-white shadow-lg scale-105 border-amber-900' 
                  : 'bg-white hover:border-amber-500 border-stone-200 shadow-sm'
                }`}
              >
                <span className="text-3xl font-serif mb-1">{item.letter}</span>
                <span className="text-xs font-semibold uppercase opacity-80">{item.name}</span>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-stone-200">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-stone-100 pb-8 md:pb-0 text-center">
                <div className="mb-6">
                  <p className="text-xs uppercase text-stone-400 mb-2 tracking-widest">Иероглиф</p>
                  <div className="text-6xl bg-stone-50 w-24 h-24 flex items-center justify-center rounded-full border border-stone-200">
                    {selectedLetter.proto}
                  </div>
                </div>
                <ChevronRight className="rotate-90 md:rotate-0 text-stone-300 mb-6 hidden md:block" />
                <div>
                  <p className="text-xs uppercase text-stone-400 mb-2 tracking-widest">Современная буква</p>
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
                
                <div className="space-y-6">
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-stone-400 text-xs uppercase tracking-widest mb-3">
                      <Info size={14}/> История и Форма
                    </h4>
                    <p className="text-stone-700 text-lg leading-relaxed">{selectedLetter.evolution}</p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100">
                      <h4 className="text-[10px] font-bold text-amber-800 uppercase tracking-widest mb-3">Примеры слов</h4>
                      <ul className="space-y-2">
                        {selectedLetter.examples.map(ex => (
                          <li key={ex} className="flex items-center gap-2 text-stone-800 font-medium">
                            <Star size={10} className="text-amber-500 fill-amber-500"/> {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100">
                      <h4 className="text-[10px] font-bold text-amber-800 uppercase tracking-widest mb-3">Философия</h4>
                      <p className="text-stone-700 text-sm leading-relaxed leading-snug italic">
                        {selectedLetter.philosophy}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;