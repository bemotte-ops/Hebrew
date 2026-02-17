import React, { useState } from 'react';
import {
  History,
  Hash,
  Sparkles,
  ScrollText,
  Library,
  ArrowLeftRight,
  Globe,
  BookOpen,
  Compass,
  ArrowRight,
  Calculator,
  Zap,
  Eye,
  ChevronDown,
  Info,
  Star,
  Landmark,
  Search,
  FileSearch2,
  Hand,
  DoorOpen,
  Link2,
  Square
} from 'lucide-react';

interface Letter {
  letter: string;
  suffix?: string;
  name: string;
  proto: string;
  meaning: string;
  cyrillic: string;
  evolution: string;
  number: number;
  examples: string[];
  philosophy: string;
  historyNote: string;
}

const App: React.FC = () => {
  const alphabet: Letter[] = [
    { letter: 'א', name: 'Алеф', proto: '𓃾', meaning: 'Бык / Сила', cyrillic: 'А / (нет звука)', evolution: 'Древнейший символ, изображающий голову быка с рогами, что олицетворяло первозданную мощь. Со временем изображение повернулось, превратившись в греческую Альфу', number: 1, examples: ['אור [Ор] — Свет', 'אמת [Эмет] — Истина'], philosophy: 'Символизирует абсолютное единство. Это беззвучный выдох, из которого рождаются все остальные звуки', historyNote: 'Прямой предок арабского Алифа и греческой Альфы' },
    { letter: 'ב', name: 'Бет', proto: '𓉐', meaning: 'Дом', cyrillic: 'Б / В', evolution: 'Изначально рисовался как план жилого помещения. Этот знак подчеркивает идею разделения внешнего и внутреннего миров', number: 2, examples: ['בית [Байт] — Дом', 'ברכה [Браха] — Благословение'], philosophy: 'Это «сосуд» для божественной энергии. Первая буква Торы, указывающая на создание дома для человечества', historyNote: 'Связана с арабской Ба' },
    { letter: 'ג', name: 'Гимель', proto: '𓄿', meaning: 'Верблюд', cyrillic: 'Г', evolution: 'Напоминает шею верблюда или ногу бегущего человека, символизируя длинные путешествия через пустыню', number: 3, examples: ['גמל [Гамаль] — Верблюд', 'גшер [Гешер] — Мост'], philosophy: 'Символ вознаграждения и милосердия. Гимель олицетворяет богатого человека, который бежит за бедняком', historyNote: 'Арабская Джим' },
    { letter: 'ד', name: 'Далет', proto: '𓇯', meaning: 'Дверь', cyrillic: 'Д', evolution: 'Обозначает вход в шатер. Этот символ неразрывно связан со смирением, так как входящий должен склонить голову', number: 4, examples: ['דלת [Делет] — Дверь', 'דעт [Даат] — Знание'], philosophy: 'Олицетворяет выбор пути и переход из одного состояния в другое', historyNote: 'В древних надписях выглядела как треугольник' },
    { letter: 'ה', name: 'Хей', proto: '𓀠', meaning: 'Окно / Выдох', cyrillic: 'Х (мягкая)', evolution: 'Происходит от изображения человека с поднятыми руками. Позже трансформировалась в символ окна и света', number: 5, examples: ['הוד [hод] — Величие', 'הллуя [hаллелуя] — Аллилуйя'], philosophy: 'Дыхание жизни, легкий звук. Считается, что этот мир был создан с помощью звука этой буквы', historyNote: 'Родственна арабской Ха' },
    { letter: 'ו', name: 'Вав', proto: '𓏳', meaning: 'Крючок', cyrillic: 'В / У / О', evolution: 'Изображала колышек для крепления шатра. Эта деталь была важна для устойчивости жилища, объединяя части ткани', number: 6, examples: ['ו [Ве] — И', 'ורд [Веред] — Роза'], philosophy: 'Сила соединения и вертикальная связь между небом и землей', historyNote: 'Стала латинской F и Y через греческие трансформации' },
    { letter: 'ז', name: 'Заин', proto: '𓏴', meaning: 'Оружие', cyrillic: 'З', evolution: 'Напоминала меч или скипетр, символизируя защиту и власть. Это знак борьбы и седьмого дня', number: 7, examples: ['זман [Зман] — Время', 'זהб [Заhав] — Золото'], philosophy: 'Святость времени и борьба духа. Число семь указывает на завершенность цикла', historyNote: 'Арабская Зай' },
    { letter: 'ח', name: 'Хет', proto: '𓉗', meaning: 'Ограда', cyrillic: 'Х (твёрдая)', evolution: 'Рисовалась как забор, защищающий территорию. Ограда дает безопасность, но она же создает границы', number: 8, examples: ['חי [Хай] — Жизнь', 'חסд [Хесед] — Милость'], philosophy: 'Динамическая энергия жизни, пробивающаяся через препятствия', historyNote: 'Арабская Ха. Глубокий гортанный звук' },
    { letter: 'ט', name: 'Тет', proto: '𓇽', meaning: 'Корзина', cyrillic: 'Т', evolution: 'Символ свернутого предмета или щита, внутри которого скрыто нечто ценное', number: 9, examples: ['טоб [Тов] — Добро', 'טبع [Тева] — Природа'], philosophy: 'Скрытое добро и чистота души. Число девять символизирует период подготовки', historyNote: 'Арабская Та' },
    { letter: 'י', name: 'Йод', proto: '𓂝', meaning: 'Рука', cyrillic: 'Й / И', evolution: 'Самая маленькая буква, произошедшая от изображения кисти руки. Является частью почти всех остальных букв', number: 10, examples: ['יд [Яд] — Рука', 'ישראל [Исраэль] — Израиль'], philosophy: 'Точка бесконечности, из которой разворачивается всё мироздание', historyNote: 'В латыни превратилась в I и J' },
    { letter: 'כ', suffix: 'ך', name: 'Каф', proto: '𓂬', meaning: 'Ладонь', cyrillic: 'К / Х', evolution: 'Изображение согнутой ладони, готовой принять дар. Это символ материализации идей', number: 20, examples: ['כוח [Коах] — Сила', 'כвод [Кавод] — Честь'], philosophy: 'Реализация потенциала и сила воображения', historyNote: 'Имеет конечную форму (Софит) — ך' },
    { letter: 'ל', name: 'Ламед', proto: '𓋿', meaning: 'Посох', cyrillic: 'Л', evolution: 'Пастуший посох для управления скотом. Символ обучения, направления и дисциплины', number: 30, examples: ['לב [Лев] — Сердце', 'לימוד [Лимуд] — Учение'], philosophy: 'Самая высокая буква, устремленная вверх. Стремление к высшим истинам', historyNote: 'Высокая буква, выходящая за строку' },
    { letter: 'מ', suffix: 'ם', name: 'Мем', proto: '𓈖', meaning: 'Вода', cyrillic: 'М', evolution: 'Происходит от волнистой линии воды. Вода — источник жизни и символ изменчивости', number: 40, examples: ['מים [Маим] — Вода', 'מלך [Мелех] — Царь'], philosophy: 'Поток времени и глубина сознания. Сорок дней — период очищения', historyNote: 'Имеет закрытую конечную форму — ם' },
    { letter: 'נ', suffix: 'ן', name: 'Нун', proto: '𓆓', meaning: 'Рыба', cyrillic: 'Н', evolution: 'Изначально изображала извивающуюся змею или рыбу. Символ жизненности и плодовитости', number: 50, examples: ['נшма [Нешама] — Душа', 'נס [Нес] — Чудо'], philosophy: 'Символ вечной души и искренности. Способность подниматься после падения', historyNote: 'Конечная форма — ן' },
    { letter: 'ס', name: 'Самех', proto: '𓊽', meaning: 'Опора', cyrillic: 'С', evolution: 'Напоминает подпорку для дерева. Это круговая защита, щит, поддерживающий слабого', number: 60, examples: ['סוד [Сод] — Тайна', 'ספר [Сефер] — Книга'], philosophy: 'Божественная поддержка и цикличность. Замкнутый круг', historyNote: 'Символ бесконечной поддержки' },
    { letter: 'ע', name: 'Аин', proto: '𓁹', meaning: 'Глаз', cyrillic: '(нет звука)', evolution: 'Четкое изображение глаза. Этот символ призывает видеть истинную внутреннюю суть вещей', number: 70, examples: ['עולם [Олам] — Мир', 'עבודה [Авода] — Работа'], philosophy: 'Глубокое понимание и прозрение. Восприятие определяет реальность', historyNote: 'Сложный гортанный звук' },
    { letter: 'פ', suffix: 'ף', name: 'Пе', proto: '𓂊', meaning: 'Рот', cyrillic: 'П / Ф', evolution: 'Очертание открытого рта. Инструмент коммуникации и выражения мыслей', number: 80, examples: ['פה [Пэ] — Рот', 'פנים [Паним] — Лицо'], philosophy: 'Сила слова и свобода речи. Ответственность за произнесенное', historyNote: 'Конечная форма — ף' },
    { letter: 'צ', suffix: 'ץ', name: 'Цади', proto: '𓇑', meaning: 'Крючок', cyrillic: 'Ц', evolution: 'Изображала рыболовный крючок. Позже смысл трансформировался в образ праведника', number: 90, examples: ['צдк [Цедек] — Правда', 'צפון [Цафон] — Север'], philosophy: 'Стремление к справедливости и этическая чистота', historyNote: 'Конечная форма — ץ.' },
    { letter: 'ק', name: 'Куф', proto: '𓃻', meaning: 'Ушко иглы', cyrillic: 'К', evolution: 'Возможно, изображала затылок или ушко иглы. Символ святости в материальном мире', number: 100, examples: ['קдуשה [Кдуша] — Святость', 'קול [Коль] — Голос'], philosophy: 'Преобразование тьмы в свет', historyNote: 'Арабская Каф' },
    { letter: 'ר', name: 'Реш', proto: '𓁶', meaning: 'Глова', cyrillic: 'Р', evolution: 'Изображение головы человека в профиль. Символ интеллекта и самосознания', number: 200, examples: ['ראש [Рош] — Голова', 'рох [Руах] — Дух'], philosophy: 'Начало нового этапа и чистота мысли', historyNote: 'Арабская Ра' },
    { letter: 'ש', name: 'Шин', proto: '𓌓', meaning: 'Зуб', cyrillic: 'Ш / С', evolution: 'Рисовалась как резцы. Символ огня и энергии, необходимой для трансформации', number: 300, examples: ['שלום [Шалом] — Мир', 'שמים [Шамаим] — Небеса'], philosophy: 'Божественный огонь и баланс истин', historyNote: 'Три ветви символизируют гармонию' },
    { letter: 'ת', name: 'Тав', proto: '𓏴', meaning: 'Знак / Печать', cyrillic: 'Т', evolution: 'Изначально выглядела как крест или метка. Знак завершения работы', number: 400, examples: ['תורה [Тора] — Учение', 'תפילה [Тфила] — Молитва'], philosophy: 'Завершенность и печать истины на творении', historyNote: 'Последняя буква алфавита' },
  ];

  const sofitLetters = alphabet.filter(l => l.suffix);
  const [selectedLetter, setSelectedLetter] = useState<Letter>(alphabet[0]);

  const headerImage = "https://raw.githubusercontent.com/bemotte-ops/Hebrew/main/parchment-bg.png"; 
  const footerImage = "https://raw.githubusercontent.com/bemotte-ops/Hebrew/main/footer-texture.png";

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-teal-100">

      {/* Header Section */}
      <header className="relative pt-20 pb-24 px-6 bg-white/90 overflow-hidden rounded-b-[2.5rem]">
        <div className="absolute inset-0 z-0 opacity-60">
          <img 
            src={headerImage} 
            alt="Parchment Background" 
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-8xl font-patrick tracking-tight text-indigo-900">
            Иврит
            <p className="text-indigo-900 mb-6">Коды Бытия </p>
          </h1>
          <p className="text-lg md:text-xl text-indigo-900 max-w-2xl mx-auto leading-relaxed">
            Исследуйте Архитектуру древнейшего Языка, где каждая Буква является одновременно Числом, Символом и Ключом к пониманию Законов Жизни
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto pb-24 px-6 space-y-16 mt-16">

        {/* Sequence Blocks */}
        <div className="space-y-12">

          {/* 1. History Block */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-teal-200 space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-4xl font-patrick text-teal-700">Древо Жизни Языков</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              Иврит является жемчужиной семитской семьи, чья история насчитывает более трех тысячелетий. Он неразрывно связан с <strong>Арамейским</strong> языком — международным языком Древнего Ближнего Востока, на котором написаны части Талмуда. В то же время, <strong>Арабский</strong> язык является его ближайшим живым родственником: их грамматические структуры, системы корней и многие базовые слова практически идентичны
            </p>

            {/* Linguistic Scheme */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-dashed border-slate-200">
               <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100 w-full">
                     <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Древняя Ветвь</span>
                     <span className="text-xl font-bold text-teal-700">Арамейский</span>
                  </div>
                  <div className="text-slate-300 hidden md:block"><ArrowRight /></div>
                  <div className="text-center p-6 bg-teal-600 rounded-2xl shadow-md border border-teal-500 w-full scale-110">
                     <span className="text-xs uppercase font-bold text-teal-100 block mb-1">Центральный Ствол</span>
                     <span className="text-2xl font-patrick text-white tracking-wide">ИВРИТ</span>
                  </div>
                  <div className="text-slate-300 hidden md:block"><ArrowRight /></div>
                  <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100 w-full">
                     <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Современная Ветвь</span>
                     <span className="text-xl font-bold text-teal-700">Арабский</span>
                  </div>
               </div>
               <div className="mt-8 text-center text-xs text-slate-400 font-medium">
                  Все три языка используют систему согласных корней и имеют общих предков в Протосемитском языке
               </div>
            </div>
          </section>

          {/* 2. Direction Block */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-teal-200 space-y-6">
            <div className="text-center space-y-3">
              <h2 className="text-4xl font-patrick text-teal-700">Вспять Потоку Времени</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              Иврит пишется и читается <strong>справа налево</strong>, что поначалу кажется непривычным. Эта традиция восходит к временам, когда тексты высекались на камне: молоток держали в правой руке, а зубило в левой, двигаясь естественным образом. Такое направление письма считается «движением к сердцу», подчеркивая интроспективный характер языка. Книги на иврите открываются «с конца», приглашая читателя в иное измерение восприятия
            </p>
          </section>

          {/* 3. Shoresh Block */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-teal-200 space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-4xl font-patrick text-teal-700">Магия Трёх Букв</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              Фундаментом иврита является концепция <strong>Шореша</strong> — трехбуквенного согласного корня. Это уникальный механизм, где одно ядро смысла порождает десятки слов: существительные, глаголы и прилагательные. Ниже приведен пример того, как корень К-Т-Б расцветает в разные значения
            </p>

            {/* Shoresh Table */}
            <div className="overflow-hidden border border-teal-200 rounded-3xl">
              <table className="w-full text-center border-collapse bg-white">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="p-5 font-bold text-center text-teal-700 text-xs uppercase tracking-widest border-b border-slate-100">Слово на иврите</th>
                    <th className="p-5 font-bold text-center text-teal-700 text-xs uppercase tracking-widest border-b border-slate-100">Транскрипция</th>
                    <th className="p-5 font-bold text-center text-teal-700 text-xs uppercase tracking-widest border-b border-slate-100">Значение</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  <tr className="hover:bg-teal-50/30 transition-colors">
                    <td className="p-5 text-2xl font-serif text-teal-700">כתב</td>
                    <td className="p-5 text-slate-500 italic">ка-тав</td>
                    <td className="p-5 font-medium text-slate-700">Он писал (глагол)</td>
                  </tr>
                  <tr className="hover:bg-teal-50/30 transition-colors">
                    <td className="p-5 text-2xl font-serif text-teal-700">מכתב</td>
                    <td className="p-5 text-slate-500 italic">мих-тав</td>
                    <td className="p-5 font-medium text-slate-700">Письмо (почтовое)</td>
                  </tr>
                  <tr className="hover:bg-teal-50/30 transition-colors">
                    <td className="p-5 text-2xl font-serif text-teal-700">כתובת</td>
                    <td className="p-5 text-slate-500 italic">кто-вет</td>
                    <td className="p-5 font-medium text-slate-700">Адрес / Надпись</td>
                  </tr>
                  <tr className="hover:bg-teal-50/30 transition-colors">
                    <td className="p-5 text-2xl font-serif text-teal-700">כתבה</td>
                    <td className="p-5 text-slate-500 italic">ката-ва</td>
                    <td className="p-5 font-medium text-slate-700">Статья в газете</td>
                  </tr>
                </tbody>
              </table>
              <div className="bg-teal-50 p-4 text-center text-teal-700 text-lg font-patrick">
                Общий корень: <span className="text-2xl"> כ - ת - ב </span>(Письменность)
              </div>
            </div>
          </section>
        </div>

        {/* Evolution Section: ALEF and AIN (Fixed ReferenceError and updated design) */}
        <section className="bg-white p-10 md:p-14 rounded-[4rem] border border-teal-200 relative overflow-hidden">
          <div className="relative z-10 space-y-10">
            <div className="flex items-center justify-center gap-4 text-teal-700 w-full">
              <h2 className="text-4xl text-center font-patrick text-teal-700">От Иероглифа к Цифре</h2>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
              Каждая буква современного иврита — это результат долгой эволюции <strong>Протосинайского письма</strong>. 
              Около 1800 г. до н.э. семитские рабочие адаптировали египетские иероглифы, используя первую букву названия предмета. Так изображение головы быка стало буквой Алеф
            </p>

            <div className="grid md:grid-cols-2 gap-8">
          
              {[
                { 
                  title: "Алеф (Бык)", 
                  tag: "Голова силы", 
                  proto: "𓃾", 
                  hebrew: "א", 
                  latin: "A", 
                  desc: "Рога и морда быка со временем превратились в перекрещенные линии. В латыни символ перевернулся, став буквой «A»" 
                },
                { 
                  title: "Аин (Глаз)", 
                  tag: "Прозрение", 
                  proto: "𓁹", 
                  hebrew: "ע", 
                  latin: "O", 
                  desc: "Буква Аин изначально рисовалась как глаз. В латинском алфавите она упростилась до круга — буквы «O»" 
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-teal-50 p-10 rounded-[2.5rem] shadow-sm border border-teal-200 space-y-10">
                  <div className="flex items-center justify-between border-b pb-4">
                    <h4 className="text-xl font-bold text-indigo-900">{item.title}</h4>
                    <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-[10px] font-bold uppercase tracking-tighter">{item.tag}</span>
                  </div>
              
                  <div className="w-full">
                    {/* ВЕРХНИЙ РЯД: СИМВОЛЫ */}
                    <div className="grid grid-cols-5 gap-0 items-center justify-items-center w-full">
                    
                      {/* 1. Иероглиф - экстремальный подъем через -mt-10 и translate */}
                      <div className="h-24 flex items-center justify-center">
                        <span className="text-7xl md:text-8xl text-slate-500 select-none -mt-10 transform -translate-y-2">
                          {item.proto}
                        </span>
                      </div>
                    
                      {/* Стрелка 1 */}
                      <div className="h-24 flex items-center justify-center">
                        <ArrowRight className="text-slate-300" size={24} />
                      </div>

                      {/* 2. Иврит */}
                      <div className="h-24 flex items-center justify-center">
                        <span className="text-6xl md:text-7xl font-serif text-teal-600 font-bold select-none">
                          {item.hebrew}
                        </span>
                      </div>

                      {/* Стрелка 2 */}
                      <div className="h-24 flex items-center justify-center">
                        <ArrowRight className="text-slate-300" size={24} />
                      </div>

                      {/* 3. Латынь */}
                      <div className="h-24 flex items-center justify-center">
                        <span className="text-5xl md:text-6xl font-serif text-indigo-900 font-bold select-none">
                          {item.latin}
                        </span>
                      </div>
                    </div>

                    {/* НИЖНИЙ РЯД: ПОДПИСИ (Жесткая фиксация на нижней линии) */}
                    <div className="grid grid-cols-5 gap-0 w-full mt-4">
                      <div className="flex justify-center items-end h-4">
                        <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest leading-none">Иероглиф</span>
                      </div>
                      <div className="h-4"></div>
                      <div className="flex justify-center items-end h-4">
                        <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest leading-none">Иврит</span>
                      </div>
                      <div className="h-4"></div>
                      <div className="flex justify-center items-end h-4">
                        <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest leading-none">Латынь</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-500 text-patrick leading-relaxed border-t pt-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-left p-7 bg-teal-50 text-slate-700 rounded-3xl border border-teal-200">
              <p className="text-sm font-patrick">Интересный факт:</p>
              <p className="text-sm font-patrick">почти весь латинский алфавит — это «перевернутые» или «отзеркаленные» образы древних букв иврита</p>
            </div>
          </div>
        </section>

                {/* Alphabet Explorer (Compact) */}
        <section className="space-y-16">
          <div className="text-center space-y-3">
            <h2 className="text-4xl font-patrick text-teal-700">Генезис Символов</h2>
            <p className="text-slate-500">Выберите букву для изучения её истории и смысла</p>
          </div>

          <div className="bg-white p-6 md:p-10 rounded-[3rem] shadow-sm border border-teal-200">
            {/* Grid with Numbers */}
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-3 mb-12">
              {alphabet.map((item) => (
                <button
                  key={item.letter}
                  onClick={() => setSelectedLetter(item)}
                  className={`group relative py-3 rounded-2xl transition-all flex flex-col items-center justify-center border-2 ${
                    selectedLetter.letter === item.letter
                      ? 'bg-teal-600 text-white border-teal-600 shadow-lg -translate-y-1'
                      : 'bg-white hover:bg-slate-50 border-slate-100 text-indigo-900'
                  }`}
                >
                  <span className="text-2xl font-serif font-bold">{item.letter}</span>
                  <span className="text-[9px] font-black text-teal-600 group-hover:text-teal-600 transition-colors uppercase">
                    {selectedLetter.letter === item.letter ? '✓' : item.number}
                  </span>
                </button>
              ))}
            </div>

            {/* Карточка: Использование Grid 12 колонок */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                
                {/* ЛЕВАЯ КОЛОНКА: Визуализация (4/12) */}
                <div className="md:col-span-4 flex flex-col items-center justify-between bg-slate-50 rounded-[2.5rem] p-10 border border-indigo-900 min-h-[480px]">
                  
                  {/* Архетип */}
                  <div className="text-center space-y-1 w-full">
                    <span className="text-[12px] font-bold text-indigo-900 uppercase tracking-[0.2em] block">Архетип</span>
                    <div className="relative -mt-6 text-[11rem] leading-none text-indigo-900 transform hover:scale-105 transition-transform duration-500 cursor-default">
                      {selectedLetter.proto}
                    </div>
                  </div>

                  {/* Визуальный разделитель */}
                  <div className="flex flex-col items-center">
                    <div className="h-6 w-px bg-gradient-to-b from-slate-200 to-transparent"></div>
                    <ChevronDown className="text-slate-500 animate-pulse my-1" size={24} />
                    <div className="h-8 w-px bg-gradient-to-t from-slate-200 to-transparent"></div>
                  </div>

                  {/* Современная форма */}
                  <div className="text-center w-full flex flex-col items-center">
                    <span className="text-[12px] font-bold text-teal-600 uppercase tracking-[0.2em] block">Современная форма</span>
                    <div className="text-[10rem] font-serif text-teal-600 font-bold leading-none mb-4">
                      {selectedLetter.letter}
                    </div>
                    <div className="text-indigo-900 text-xl font-patrick uppercase tracking-widest">
                      Гематрия: {selectedLetter.number}
                    </div>
                  </div>
                </div>

                {/* ПРАВАЯ КОЛОНКА: Информация (8/12) */}
                <div className="md:col-span-8 flex flex-col justify-between gap-6">
                    <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <h3 className="text-5xl font-patrick text-teal-600">
                            {selectedLetter.name} — <span className="text-indigo-900">{selectedLetter.meaning}</span>
                          </h3>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] border border-teal-200 backdrop-blur-sm">
                            <h4 className="text-[12px] font-bold text-teal-600 uppercase mb-3 flex items-center gap-2 tracking-widest">
                                <Zap size={14} /> Эволюция символа
                            </h4>
                            <p className="text-slate-500 text-sm leading-normal">{selectedLetter.evolution}</p>
                        </div>
                    </div>
                    
                    <div className="bg-white p-8 rounded-[2rem] border border-teal-200 shadow-sm flex-grow">
                        <h4 className="text-[12px] font-bold text-teal-600 uppercase mb-3 flex items-center gap-2 tracking-widest">
                            <ScrollText size={14} /> Философский смысл
                        </h4>
                        <p className="text-slate-500 text-sm leading-normal">
                          {selectedLetter.philosophy}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                       <div className="bg-white p-6 rounded-2xl border border-indigo-900">
                          <span className="text-[12px] uppercase font-bold text-indigo-900 block mb-3 flex items-center gap-2">
                             <Star size={12} /> Примеры слов
                          </span>
                          <div className="flex flex-wrap gap-2">
                             {selectedLetter.examples.map(ex => (
                               <span key={ex} className="text-sm font-medium text-indigo-900 bg-white px-3 py-1 rounded-lg shadow-sm border border-indigo-50">{ex}</span>
                             ))}
                          </div>
                       </div>
                       <div className="bg-white p-6 rounded-2xl border border-indigo-900">
                          <span className="text-[12px] uppercase font-bold text-indigo-900 block mb-3 flex items-center gap-2">
                             <Info size={12} /> Заметка
                          </span>
                          <div className="space-y-1">
                              <div className="text-sm text-indigo-900 leading-normal">
                                 {selectedLetter.historyNote}
                              </div>
                              <div className="text-sm font-patrick text-indigo-900">
                                <strong>Кириллица:</strong> {selectedLetter.cyrillic}
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>  
        </section>

        {/* Пять Букв Софит */}
        <section className="bg-white p-10 md:p-14 rounded-[4rem] border border-teal-200 shadow-sm">
          <div className="space-y-12">
            <div className="flex items-center justify-center gap-4 text-indigo-900 w-full">
              <h2 className="text-4xl text-center font-patrick text-teal-600">Пять Букв Софит (Окончания)</h2>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
              В иврите есть пять букв, которые меняют своё начертание, если стоят в самом конце слова. Их называют <strong>«Софит»</strong> (конечные). Обычно их «хвост», загнутый влево, распрямляется и уходит вниз
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {sofitLetters.map((l: Letter) => (
                <div key={l.letter} className="bg-teal-50 rounded-3xl p-6 border border-teal-200 text-center space-y-4 hover:border-teal-200 transition-colors">
                  <div className="text-[10px] font-bold text-teal-600 uppercase tracking-widest">Буква {l.name}</div>
                  
                  <div className="flex items-center justify-around py-2">
                    <div className="flex flex-col items-center gap-2">
                      <div className="text-5xl font-serif text-indigo-900">{l.letter}</div>
                    </div>
                    
                    <div className="text-teal-700">
                      <ArrowRight size={20} />
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <div className="text-5xl font-serif text-indigo-900">{l.suffix}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-teal-50 rounded-3xl text-slate-700 font-patrick text-sm border border-teal-200">
               <p className="flex items-start gap-3">
                 Гематрия букв Софит в классическом иврите совпадает с гематрией их обычных форм. Например, и Каф (כ), и Каф-софит (ך) равны 20
               </p>
            </div>
          </div>
        </section>

                {/* Gematria Calculation Block */}
        <section className="bg-white p-10 md:p-14 rounded-[4rem] border border-teal-200 relative overflow-hidden">
          <div className="relative z-10 space-y-10">
            <div className="text-center space-y-3">
              <h2 className="text-4xl font-patrick text-teal-600">Гематрия: числовой код языка</h2>
            </div>

            {/* Вступительный блок — ключ к пониманию системы */}
            <div className="text-lg text-slate-700">
              <p>
                В иврите форма буквы, её название и числовое значение образуют единый узел смысла. 
                Возьмём первую букву — <span className="font-serif text-2xl text-teal-600">א</span> [Алеф]. 
                Её числовое значение — 1, что указывает на Единого Творца.
                Но если разложить саму форму Алеф, мы увидим, что она графически состоит из двух букв 
                <span className="font-serif"> י</span> [Йуд] и соединяющей их 
                <span className="font-serif"> ו</span> [Вав]:
              </p>
              <div className="text-center text-teal-600 font-mono text-lg bg-white/50 p-2 rounded-xl">
                <span className="font-serif">י</span> (10) + <span className="font-serif">ו</span> (6) + <span className="font-serif">י</span> (10) = 26
              </div>
              <p className="text-lg text-slate-700">
                А 26 — это гематрия главного Имени Бога <span className="font-serif">יהוה</span> [Йуд-Хей-Вав-Хей]:
              </p>
              <div className="text-center text-teal-600 font-mono text-lg bg-white/50 p-2 rounded-xl">
                <span className="font-serif">י</span> (10) + <span className="font-serif">ה</span> (5) + <span className="font-serif">ו</span> (6) + <span className="font-serif">ה</span> (5) = 26
              </div>
              <p className="text-lg text-slate-700">
                Так через форму одной буквы раскрывается связь Единицы с Творцом, а гематрия становится ключом 
                к скрытым измерениям текста
              </p>
            </div>
        
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-teal-50 p-8 rounded-[2.5rem] shadow-sm space-y-6 border border-teal-200">
                <h4 className="text-xl font-patrick text-indigo-900">Слово «Любовь» [Ахава]</h4>
                <div className="text-4xl font-serif text-teal-600 border-b pb-4">אהבה</div>
                <div className="space-y-2 font-mono text-sm text-slate-500">
                  <div className="flex justify-between"><span>Алеф (א)</span> <span>1</span></div>
                  <div className="flex justify-between"><span>Хей (ה)</span> <span>5</span></div>
                  <div className="flex justify-between"><span>Бет (ב)</span> <span>2</span></div>
                  <div className="flex justify-between"><span>Хей (ה)</span> <span>5</span></div>
                </div>
                <div className="pt-4 border-t flex justify-between font-patrick text-2xl text-teal-700">
                  <span>ИТОГО:</span> <span>1 + 5 + 2 + 5 = 13</span>
                </div>
              </div>
        
              <div className="bg-teal-50 p-8 rounded-[2.5rem] shadow-sm space-y-6 border border-teal-200">
                <h4 className="text-xl font-patrick text-indigo-900">Слово «Единый» [Эхад]</h4>
                <div className="text-4xl font-serif text-teal-600 border-b pb-4">אחד</div>
                <div className="space-y-2 font-mono text-sm text-slate-500">
                  <div className="flex justify-between"><span>Алеф (א)</span> <span>1</span></div>
                  <div className="flex justify-between"><span>Хет (ח)</span> <span>8</span></div>
                  <div className="flex justify-between"><span>Далет (ד)</span> <span>4</span></div>
                  <div className="flex justify-between opacity-0"><span>&nbsp;</span><span>&nbsp;</span></div>
                </div>
                <div className="pt-4 border-t flex justify-between font-patrick text-2xl text-teal-700 mt-15">
                  <span>ИТОГО:</span> <span>1 + 8 + 4 = 13</span>
                </div>
              </div>
            </div>
        
            <div className="text-left p-7 bg-slate-50 text-slate-700 rounded-3xl shadow-xl border border-indigo-900">
              <p className="text-lg font-patrick">
                Совпадение чисел Любви (אהבה) и Единства (אחד) — 13 — не случайно. 
                Оно указывает на глубинный закон бытия: Любовь и Единство неразделимы. 
                Как Алеф (1) раскрывается в Четырёхбуквенном Имени <a href="#tetragrammaton" className="underline text-teal-600 hover:text-white transition-colors">Тетраграмматон</a> (26), 
                так и эти слова говорят об одном: мир сотворён Любовью и держится на ней, а высшая Цель человека — через Любовь прийти к Единому
              </p>
            </div>
          </div>
        </section>

        {/* 4. Full Alphabet Table Summary - Updated Styles */}
        <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-teal-200 space-y-10">
          <div className="text-center w-full">
            <h2 className="text-4xl font-patrick text-teal-600">
              Сводная матрица Алфавита
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-teal-200">
            <table className="w-full text-left font-patrick">
              <thead className="bg-teal-50 border-b border-teal-200">
                <tr>
                  <th className="px-6 py-5 font-black uppercase text-[10px] tracking-widest font-patrick text-indigo-900 text-center">Гематрия</th>
                  <th className="px-6 py-5 font-black uppercase text-[10px] tracking-widest font-patrick text-indigo-900 text-center">Иероглиф</th>
                  <th className="px-6 py-5 font-black uppercase text-[10px] tracking-widest font-patrick text-indigo-900 text-center">Буква</th>
                  <th className="px-6 py-5 font-black uppercase text-[10px] tracking-widest font-patrick text-indigo-900 text-center">Название</th>
                  <th className="px-6 py-5 font-black uppercase text-[10px] tracking-widest font-patrick text-indigo-900 text-center">Кириллица</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {alphabet.map((item, idx) => (
                  <React.Fragment key={item.letter}>
                    {/* Main Letter Row */}
                    <tr className={`hover:bg-teal-50/30 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                      <td className="px-6 py-4 text-center text-teal-600 font-patrick">{item.number}</td>
                      <td className="px-6 py-4 text-center text-3xl text-indigo-900 font-serif leading-none">{item.proto}</td>
                      <td className="px-6 py-4 text-center text-3xl font-serif text-teal-600">{item.letter}</td>
                      <td className="px-6 py-4 text-center text-indigo-900 font-patrick text-xl">{item.name}</td>
                      <td className="px-6 py-4 text-center text-slate-500">{item.cyrillic}</td>
                    </tr>
                    
                    {/* Special Row for Sofit form if exists */}
                    {item.suffix && (
                      <tr className={`hover:bg-teal-50/30 transition-colors italic ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                        <td className="px-6 py-4 text-center text-teal-400 font-patrick text-xs">{item.number}</td>
                        <td className="px-6 py-4 text-center text-indigo-900">—</td>
                        <td className="px-6 py-4 text-center text-4xl font-serif text-teal-400">{item.suffix}</td>
                        <td className="px-6 py-4 text-center text-indigo-900 text-sm">{item.name} (Софит)</td>
                        <td className="px-6 py-4 text-center text-slate-500 text-xs">—</td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </section>        

        {/* Tetragrammaton Section */}
        <section id="tetragrammaton" className="bg-white p-10 md:p-14 rounded-[4rem] border border-teal-200 relative overflow-hidden">
          <div className="relative z-10 space-y-10">
            
            {/* Header */}
            <div className="text-center space-y-3">
              <h2 className="text-4xl font-patrick text-teal-600">
                <span className="font-serif text-5xl mr-2">יהוה</span> — Четыре буквы, в которых заключено всё
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Тетраграмматон — самое священное Имя в иудаизме. Оно встречается в Танахе почти 7000 раз и скрывает в себе тайну бытия: «Он Был, Есть и Будет»
              </p>
            </div>
        
            {/* Four Squares Visualization */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { 
                  letter: 'י', 
                  name: 'Йуд', 
                  meaning: 'Рука / Творение', 
                  number: 10, 
                  icon: Hand,
                  value: 'Начало, потенциал, точка творения'
                },
                { 
                  letter: 'ה', 
                  name: 'Хей', 
                  meaning: 'Окно / Присутствие', 
                  number: 5, 
                  icon: DoorOpen,
                  value: 'Проявление в мире, дыхание жизни'
                },
                { 
                  letter: 'ו', 
                  name: 'Вав', 
                  meaning: 'Крюк / Связь', 
                  number: 6, 
                  icon: Link2,
                  value: 'Соединение неба и земли, вертикальная связь'
                },
                { 
                  letter: 'ה', 
                  name: 'Хей (конечная)', 
                  meaning: 'Окно / Завершение', 
                  number: 5, 
                  icon: Square,
                  value: 'Завершённое проявление, присутствие в итоге'
                },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="bg-teal-50 p-6 rounded-[2.5rem] border border-teal-200 text-center space-y-4 hover:shadow-lg transition group">
                    {/* Иконка сверху — indigo-900 */}
                    <div className="flex justify-center">
                      <IconComponent className="text-indigo-900 w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                    </div>
                    
                    {/* Буква — крупно */}
                    <div className="text-7xl font-serif text-teal-600">{item.letter}</div>
                    
                    {/* Название буквы */}
                    <div className="text-2xl font-patrick text-indigo-900">{item.name}</div>
                    
                    {/* Символическое значение (кратко) */}
                    <div className="text-sm text-slate-500 border-b border-teal-200 pb-2">{item.meaning}</div>
                    
                    {/* Числовое значение в круге */}
                    <div className="w-12 h-12 mx-auto bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md">
                      {item.number}
                    </div>
                    
                    {/* Значение в имени Тетраграмматона — НОВОЕ */}
                    <div className="text-xs font-patrick text-indigo-800 bg-white/50 p-2 rounded-xl border border-teal-100 mt-2">
                      {item.value}
                    </div>
                  </div>
                );
              })}
            </div>
        
            {/* Total 26 + Алеф connection */}
            <div className="bg-teal-50 p-8 rounded-[2.5rem] border border-teal-200 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <span className="text-sm uppercase tracking-widest text-teal-600 font-bold">Сумма букв</span>
                <div className="text-5xl font-patrick text-indigo-900">10 + 5 + 6 + 5 = <span className="text-teal-600">26</span></div>
                <p className="text-slate-500 mt-2">Число 26 — гематрия Тетраграмматона</p>
              </div>
              <div className="text-slate-300 text-4xl">⇄</div>
              <div className="text-center md:text-right">
                <span className="text-sm uppercase tracking-widest text-teal-600 font-bold">Скрыто в букве Алеф</span>
                <div className="text-3xl font-serif text-indigo-900">א = <span className="font-mono">י (10) + ו (6) + י (10)</span></div>
                <p className="text-slate-500 mt-2">Форма Алеф раскрывает то же число 26</p>
              </div>
            </div>
                
            {/* Timeline: История использования */}
            <div className="space-y-6">
              <h3 className="text-2xl font-patrick text-indigo-900 text-center">История Имени: от Произнесения к Благоговению</h3>
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-8">
                {/* Линия времени */}
                <div className="absolute left-0 right-0 h-0.5 bg-white hidden md:block"></div>
                {[
                  { period: 'До VI в. до н.э.', event: 'Имя произносилось первосвященником в Храме', icon: Landmark },
                  { period: 'III в. до н.э.', event: 'Замена на Адонай при чтении', icon: ScrollText },
                  { period: 'Средневековье', event: 'Масореты добавляют огласовки от Адонай', icon: Sparkles },
                  { period: 'XVI век', event: 'Прочтение и распространение Иегова (JeHoWaH)', icon: BookOpen },
                  { period: 'XIX век', event: 'Реконструкция Яхве на основе древних источников', icon: FileSearch2 },
                ].map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={idx} className="relative z-10 flex flex-col items-center text-center bg-white p-4 rounded-2xl border border-teal-200 w-full md:w-48">
                      <span className="text-xs font-bold text-teal-600 mb-2">{item.period}</span>
                      <IconComponent className="text-teal-700 w-8 h-8 mb-2" strokeWidth={1.5} />
                      <span className="text-sm font-patrick text-indigo-900">{item.event}</span>
                    </div>
                  );
                })}
              </div>
            </div>
        
            {/* Связь с глаголом "быть" */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-teal-50 p-8 rounded-[2.5rem] border border-teal-200">
                <h4 className="text-xl font-patrick text-indigo-900 mb-4">Грамматическая тайна</h4>
                <p className="text-slate-600">Имя <span className="font-serif text-xl">יהוה</span> образовано от глагола <span className="font-serif text-xl">היה</span> (<em>hая</em> — «быть»). Это форма третьего лица будущего времени, но несёт оттенок настоящего и прошедшего. Буквально: «Он есть, был и будет».</p>
                <div className="mt-6 flex items-center justify-center gap-4 text-3xl font-serif text-teal-600">
                  <span>היה</span> <span className="text-slate-300">→</span> <span>יהוה</span>
                </div>
              </div>
              <div className="bg-teal-50 p-8 rounded-[2.5rem] border border-teal-200">
                <h4 className="text-xl font-patrick text-indigo-900 mb-4">Ответ Моисею</h4>
                <p className="text-slate-600">Когда Моисей спросил: «Как Твоё имя?», Бог ответил: <span className="font-serif text-xl">אהיה אשר אהיה</span> — «Я буду тем, кем буду». Это первое лицо того же глагола: <span className="font-serif">אהיה</span> (Эхйе). Люди же, говоря о Нём, используют третье лицо: <span className="font-serif">יהוה</span>.</p>
                <div className="mt-6 flex items-center justify-center gap-4 text-3xl font-serif text-teal-600">
                  <span>אהיה</span> <span className="text-slate-300">⇄</span> <span>יהוה</span>
                </div>
              </div>
            </div>
        
            {/* Замены имени */}
            <div className="bg-indigo-900 text-white p-8 rounded-[2.5rem] border border-teal-200 flex flex-col md:flex-row items-center justify-around gap-6">
              <div className="text-center">
                <div className="text-3xl font-serif">יהוה</div>
                <div className="text-xs uppercase tracking-widest mt-2">не произносится</div>
              </div>
              <ArrowRight className="text-teal-300" size={32} />
              <div className="text-center">
                <div className="text-3xl font-serif">אֲדֹנָי</div>
                <div className="text-xs uppercase tracking-widest mt-2">Адонай (Господь)</div>
              </div>
              <ArrowRight className="text-teal-300" size={32} />
              <div className="text-center">
                <div className="text-3xl font-serif">הַשֵּׁם</div>
                <div className="text-xs uppercase tracking-widest mt-2">ха-Шем (Имя)</div>
              </div>
            </div>
        
            {/* Теофорные имена */}
            <div className="space-y-4">
              <h3 className="text-2xl font-patrick text-indigo-900 text-center">Имена, несущие Имя</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'יְהוֹשֻׁעַ', translit: 'Йехошуа', meaning: 'Яхве спасает' },
                  { name: 'יְשַׁעְיָהוּ', translit: 'Йешайаху', meaning: 'Яхве спасёт' },
                  { name: 'יִרְמְיָהוּ', translit: 'Йирмейаху', meaning: 'Яхве возвысит' },
                  { name: 'אֵלִיָּהוּ', translit: 'Элийаху', meaning: 'Мой Бог — Яхве' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-teal-50 p-4 rounded-2xl border border-teal-200 text-center">
                    <div className="text-2xl font-serif text-teal-600">{item.name}</div>
                    <div className="text-sm font-patrick text-indigo-900 mt-1">{item.translit}</div>
                    <div className="text-xs text-slate-500 mt-1">{item.meaning}</div>
                  </div>
                ))}
              </div>
            </div>
        
            {/* Откуда взялись Иегова и Яхве */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-teal-50 p-6 rounded-[2.5rem] border border-teal-200">
                <h4 className="text-xl font-patrick text-indigo-900 mb-3">Иегова (JeHoWaH)</h4>
                <p className="text-slate-600 text-sm">Масореты добавили к согласным <span className="font-serif">יהוה</span> гласные от <span className="font-serif">אֲדֹנָי</span> (Адонай), чтобы читатель не пытался произнести непроизносимое. В XVI веке христианские учёные прочли это как JeHoWaH — так родился «Иегова».</p>
                <div className="mt-4 text-center text-2xl font-mono text-teal-600">YHWH + гласные Адонай = JeHoWaH</div>
              </div>
              <div className="bg-teal-50 p-6 rounded-[2.5rem] border border-teal-200">
                <h4 className="text-xl font-patrick text-indigo-900 mb-3">Яхве (Yahweh)</h4>
                <p className="text-slate-600 text-sm">Раннехристианские авторы (II–IV вв.) передавали имя как Ἰαβέ (Иаве) или Ἰαώ (Иао). Анализ сокращённой формы <span className="font-serif">יה</span> (Yah) и самаритянского произношения позволил реконструировать «Яхве».</p>
                <div className="mt-4 text-center text-2xl font-mono text-teal-600">Древние источники → Яхве</div>
              </div>
            </div>
        
            {/* Заключительная цитата */}
            <div className="text-center p-7 bg-teal-600 text-white rounded-3xl shadow-xl">
              <p className="text-xl font-patrick italic">
                «В имени יהוה сокрыто всё: прошлое, настоящее и будущее. Это не просто имя — это само Бытие, зашифрованное в четырёх буквах.»
              </p>
            </div>
        
          </div>
        </section>
        
      </main>

      {/* Footer Section */}
      <footer className="bg-indigo-900 text-white pt-48 pb-6 mt-20 rounded-t-[2.5rem] relative overflow-hidden">
         {/* Фоновая текстура футера с GitHub */}
         <div className="absolute inset-0 z-0 opacity-80">
           <img 
              src={footerImage} 
              alt="Текстура камня"
              className="w-full h-full object-cover"
              onError={handleImageError}
           />
           {/* Наложение цвета и размытия */}
           <div className="absolute inset-0 bg-indigo-900/40 backdrop-blur-[1px]"></div>
         </div>
         
         <div className="max-w-4xl mx-auto px-6 text-center space-y-4 relative z-10">
            {/* Адаптивная декоративная строка алфавита */}
            <div className="text-slate-300 text-2xl md:text-2xl font-serif tracking-[0.3em] md:tracking-[1em] select-none break-all whitespace-normal max-w-full overflow-hidden">
              אבגדהוזחטיכלмנסעפצקרשת
            </div>
            <p className="text-slate-400 text-[10px] uppercase tracking-[0.3em] px-4">
              © 2026 Лингвистический проект "Код Бытия"
            </p>
            <p className="text-slate-300 font-patrick text-sm italic">
                Вначале было Слово...
            </p>
         </div>
      </footer>
    </div>
  );
};

export default App;

