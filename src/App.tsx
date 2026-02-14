import React, { useState } from 'react';
import { Info, ChevronRight, Star, Globe, Zap, ScrollText } from 'lucide-react';

// Интерфейс для типизации данных буквы
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
  // База данных алфавита (Версия 1.5)
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
      philosophy: 'Двойственность и творение. Начало Торы.'
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
      examples: ['הוא (Ху) — Он', 'הллуя (Аллилуйя)'],
      philosophy: 'Дыхание жизни, мягкость звука.'
    },
    {
      letter: 'ו',
      name: 'Вав',
      proto: '𓏳',
      meaning: 'Крючок / Гвоздь',
      evolution: 'Символ соединения. Часто используется как союз "и".',
      number: 6,
      examples: ['וורד (Веред) — Роза', 'ו (Ве-) — и'],
      philosophy: 'Сила, соединяющая небо и землю.'
    },
    {
      letter: 'ז',
      name: 'Заин',
      proto: '𓏴',
      meaning: 'Оружие / Меч',
      evolution: 'Изображение кинжала. Символизирует защиту и разделение.',
      number: 7,
      examples: ['זמן (Зман) — Время', 'זהב (Захав) — Золото'],
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
      examples: ['יד (Яд) — Рука', 'ישראל (Исраэль)'],
      philosophy: 'Точка бесконечности, из которой всё исходит.'
    }
  ];

  const [selectedLetter, setSelectedLetter] = useState<Letter>(alphabet[0]);

  return (
    <div className="min-h-screen bg-emerald-50 text-emerald-950 font-sans">
      {/* Шапка сайта */}
      <header className="relative bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-700 text-white py-24 px-6 overflow-hidden shadow-2xl">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-serif mb-6 tracking-tight drop-shadow-2xl">
            Иврит: Код Бытия
          </h1>
          <p className="text-xl md:text-2xl text-cyan-50 max-w-3xl mx-auto leading-relaxed font-light">
            Язык, где каждая буква — это число, а каждое слово — формула реальности.
          </p>
        </div>
      </header>

      {/* Основной контент */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif text-teal-800 flex items-center gap-3">
              <Globe className="text-cyan-500" /> Древо Языка
            </h2>
            <div className="prose prose-emerald text-lg text-emerald-900/80 leading-relaxed">
              <p>
                Иврит принадлежит к <strong>семитской языковой семье</strong>. Он был возрожден спустя 2000 лет, сохранив древнюю логику и структуру.
              </p>
            </div>
            <div className="bg-cyan-100/50 p-6 rounded-2xl border-l-4 border-cyan-500 shadow-sm">
              <h4 className="font-bold text-cyan-800 mb-2 flex items-center gap-2">
                <ScrollText size={18} /> Связь с Египтом
              </h4>
              <p className="text-sm text-teal-900">
                Древнейшее <strong>Протосинайское письмо</strong> адаптировало египетские иероглифы под семитские звуки.
              </p>
            </div>
          </div>

          {/* Визуализация эволюции */}
          <div className="relative">
            <div className="bg-white p-4 rounded-[2rem] shadow-2xl rotate-2">
              <div className="bg-teal-900 text-white p-8 rounded-[1.5rem] aspect-square flex flex-col justify-center">
                <h3 className="text-3xl font-serif mb-4 text-center">Эволюция</h3>
                <div className="flex justify-between items-center text-5xl">
                  <span className="opacity-40 tracking-widest text-cyan-300">{selectedLetter.proto}</span>
                  <ChevronRight size={40} className="text-emerald-400" />
                  <span className="text-8xl font-serif">{selectedLetter.letter}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Сетка букв */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-teal-50">
          <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-3 mb-12">
            {alphabet.map((item) => (
              <button
                key={item.letter}
                onClick={() => setSelectedLetter(item)}
                className={`p-4 rounded-xl transition-all duration-300 flex flex-col items-center border-2 ${
                  selectedLetter.letter === item.letter 
                  ? 'bg-gradient-to-b from-cyan-500 to-teal-600 text-white shadow-lg border-cyan-300 scale-105' 
                  : 'bg-emerald-50 hover:border-cyan-400 border-emerald-50 text-emerald-800 shadow-sm'
                }`}
              >
                <span className="text-3xl font-serif">{item.letter}</span>
                <span className="text-[10px] font-bold uppercase mt-1">{item.name}</span>
              </button>
            ))}
          </div>

          {/* Детализация буквы */}
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-teal-100 pb-10 md:pb-0 text-center">
              <div className="mb-8">
                <p className="text-[11px] uppercase text-cyan-600 mb-3 tracking-[0.2em] font-black">Прото-форма</p>
                <div className="text-7xl bg-cyan-50 w-24 h-24 flex items-center justify-center rounded-2xl border border-cyan-100 text-teal-600 mx-auto">
                  {selectedLetter.proto}
                </div>
              </div>
              <div>
                <p className="text-[11px] uppercase text-cyan-600 mb-3 tracking-[0.2em] font-black">Буква</p>
                <div className="text-9xl font-serif text-teal-900 leading-none">{selectedLetter.letter}</div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-8">
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <h3 className="text-5xl font-serif font-bold text-emerald-950">{selectedLetter.name}</h3>
                  <p className="text-cyan-600 text-2xl font-medium tracking-wide mt-1 italic underline decoration-teal-200 underline-offset-8">
                    {selectedLetter.meaning}
                  </p>
                </div>
                <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-xl flex flex-col items-center shadow-md">
                  <span className="text-[10px] uppercase font-black opacity-70">Гематрия</span>
                  <span className="text-3xl font-black">{selectedLetter.number}</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center gap-3 font-black text-teal-800 text-sm uppercase tracking-widest mb-3">
                    <Info size={18} className="text-cyan-500"/> Суть и История
                  </h4>
                  <p className="text-emerald-900/80 text-xl leading-relaxed font-light">{selectedLetter.evolution}</p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                    <h4 className="text-[10px] font-black text-teal-700 uppercase mb-3">Примеры слов</h4>
                    <ul className="space-y-2">
                      {selectedLetter.examples.map(ex => (
                        <li key={ex} className="flex items-center gap-2 text-emerald-950 font-bold">
                          <Star size={10} className="text-cyan-500 fill-cyan-500"/> {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-cyan-50 p-6 rounded-2xl border border-cyan-100 italic">
                    <p className="text-emerald-900 leading-relaxed">«{selectedLetter.philosophy}»</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-teal-800/40 text-sm font-medium">
        © 2026 Иврит: Код Бытия • Обновлено до Версии 1.5
      </footer>
    </div>
  );
};

export default App;