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
  Eye
} from 'lucide-react';

interface Letter {
  letter: string;
  suffix?: string;
  name: string;
  proto: string;
  meaning: string;
  evolution: string;
  number: number;
  examples: string[];
  philosophy: string;
  historyNote: string;
}

const App: React.FC = () => {
  const alphabet: Letter[] = [
    { letter: 'א', name: 'Алеф', proto: '𓃾', meaning: 'Бык / Сила', evolution: 'Древнейший символ, изображающий голову быка с рогами, что олицетворяло первозданную мощь и лидерство в хозяйстве древних семитов. Со временем изображение повернулось, превратившись в греческую Альфу и латинскую А, но в иврите сохранило свою беззвучную природу', number: 1, examples: ['אור (Свет)', 'אמת (Истина)'], philosophy: 'Символизирует абсолютное единство и начало всего сущего. Это беззвучный выдох, из которого рождаются все остальные звуки вселенной', historyNote: 'Прямой предок арабского Алифа и греческой Альфы.' },
    { letter: 'ב', name: 'Бет', proto: '𓉐', meaning: 'Дом', evolution: 'Изначально рисовался как план жилого помещения или шатра кочевника с четко обозначенным входом. Этот знак подчеркивает идею разделения внешнего и внутреннего миров, создавая защищенное пространство', number: 2, examples: ['בית (Дом)', 'ברכה (Благословение)'], philosophy: 'Это «сосуд» для божественной энергии. Первая буква Торы, указывающая на то, что творение началось с создания дома для человечества', historyNote: 'Связана с арабской Ба (ب).' },
    { letter: 'ג', name: 'Гимель', proto: '𓄿', meaning: 'Верблюд', evolution: 'Напоминает шею верблюда или ногу бегущего человека, символизируя длинные путешествия через пустыню. Верблюд был «кораблем пустыни», обеспечивающим связь между далекими цивилизациями и передачу товаров', number: 3, examples: ['גמל (Верблюд)', 'גשר (Мост)'], philosophy: 'Символ вознаграждения и милосердия. Гимель олицетворяет богатого человека, который бежит за бедняком (Далет), чтобы помочь ему', historyNote: 'Арабская Джим (ج).' },
    { letter: 'ד', name: 'Далет', proto: '𓇯', meaning: 'Дверь', evolution: 'Обозначает вход в шатер или проем в стене, через который можно войти или выйти. Этот символ неразрывно связан со смирением, так как входящий должен склонить голову, а само слово созвучно слову «бедность»', number: 4, examples: ['דלת (Дверь)', 'דעת (Знание)'], philosophy: 'Олицетворяет выбор пути и переход из одного состояния в другое. Четверка символизирует четыре стороны света', historyNote: 'В древних надписях выглядела как треугольник.' },
    { letter: 'ה', name: 'Хей', proto: '𓀠', meaning: 'Окно / Выдох', evolution: 'Происходит от изображения человека с поднятыми руками, выражающего восторг или молитву. Позже трансформировалась в символ окна, через которое в дом проникает свет и воздух, дарующий жизнь', number: 5, examples: ['הוד (Величие)', 'הללויה (Аллилуйя)'], philosophy: 'Дыхание жизни, легкий звук, который не требует усилий. Считается, что этот мир был создан с помощью звука этой буквы', historyNote: 'Родственна арабской Ха (هـ).' },
    { letter: 'ו', name: 'Вав', proto: '𓏳', meaning: 'Крючок', evolution: 'Изображала колышек для крепления шатра или соединительный крюк. Эта деталь была критически важна для устойчивости жилища в условиях ветреной пустыни, объединяя разрозненные части ткани', number: 6, examples: ['ו (И)', 'וורד (Роза)'], philosophy: 'Сила соединения и вертикальная связь между небом и землей. В языке служит союзом «и», буквально связывая слова и смыслы', historyNote: 'Стала латинской F и Y через греческие трансформации.' },
    { letter: 'ז', name: 'Заин', proto: '𓏴', meaning: 'Оружие', evolution: 'Первоначально напоминала меч, кинжал или скипетр, символизируя защиту и власть. Это знак борьбы, но также и символ седьмого дня, который охраняет святость всей недели', number: 7, examples: ['זמן (Время)', 'זהב (Золото)'], philosophy: 'Святость времени и борьба духа. Число семь указывает на завершенность природного цикла.', historyNote: 'Арабская Зай (ز).' },
    { letter: 'ח', name: 'Хет', proto: '𓉗', meaning: 'Ограда', evolution: 'Рисовалась как забор или стена, защищающая частную территорию от диких зверей и врагов. Ограда дает безопасность, но она же создает границы, внутри которых процветает жизнь', number: 8, examples: ['חי (Жизнь)', 'חסד (Милость)'], philosophy: 'Динамическая энергия жизни, пробивающаяся через препятствия. Символизирует способность преодолевать материальные границы', historyNote: 'Арабская Ха (ح). Глубокий гортанный звук.' },
    { letter: 'ט', name: 'Тет', proto: '𓇽', meaning: 'Корзина', evolution: 'Символ свернутого предмета, корзины или щита, внутри которого скрыто нечто ценное. Это образ потенциала, который еще не проявлен вовне, но содержит в себе полноту будущего добра', number: 9, examples: ['טוב (Добро)', 'טבע (Природа)'], philosophy: 'Скрытое добро и чистота души. Число девять символизирует период беременности — время подготовки к рождению нового', historyNote: 'Арабская Та (ط).' },
    { letter: 'י', name: 'Йод', proto: '𓂝', meaning: 'Рука', evolution: 'Самая маленькая буква, произошедшая от изображения кисти руки. Несмотря на малый размер, она является частью почти всех остальных букв и символизирует божественную искру в материи', number: 10, examples: ['יד (Рука)', 'ישראל (Израиль)'], philosophy: 'Точка бесконечности, из которой разворачивается всё мироздание. Олицетворяет смирение и потенциал действия', historyNote: 'В латыни превратилась в I и J.' },
    { letter: 'כ', suffix: 'ך', name: 'Каф', proto: '𓂬', meaning: 'Ладонь', evolution: 'Изображение согнутой ладони, готовой принять дар или начать работу. Это символ материализации идей, когда абстрактная мысль обретает физическую форму через труд', number: 20, examples: ['כוח (Сила)', 'כבוד (Честь)'], philosophy: 'Реализация потенциала и сила воображения. Каф учит нас оформлять свои желания в конкретные действия', historyNote: 'Имеет конечную форму (Софит) — ך.' },
    { letter: 'ל', name: 'Ламед', proto: '𓋿', meaning: 'Посох', evolution: 'Пастуший посох или стрекало для управления скотом. Пастух использовал его, чтобы направлять стадо, поэтому буква стала символом обучения и дисциплины', number: 30, examples: ['לב (Сердце)', 'לימוד (Учение)'], philosophy: 'Самая высокая буква алфавита, устремленная вверх. Символизирует стремление сердца к познанию высших истин', historyNote: 'Арабская Лям (ل). Высокая буква.' },
    { letter: 'מ', suffix: 'ם', name: 'Мем', proto: '𓈖', meaning: 'Вода', evolution: 'Происходит от волнистой линии, изображающей поверхность воды. Вода — это источник жизни, но также символ изменчивости и глубокой мудрости океана', number: 40, examples: ['מים (Вода)', 'מלך (Царь)'], philosophy: 'Поток времени и глубина сознания. Сорок дней — период очищения и обновления', historyNote: 'Имеет закрытую конечную форму — ם.' },
    { letter: 'נ', suffix: 'ן', name: 'Нун', proto: '𓆓', meaning: 'Рыба', evolution: 'Изначально изображала извивающуюся змею или рыбу в движении. Это символ жизненности в водной стихии, плодовитости и верности своему источнику', number: 50, examples: ['נשמה (Душа)', 'נס (Чудо)'], philosophy: 'Символ вечной души и искренности. Нун учит нас падать и снова подниматься, сохраняя свет веры', historyNote: 'Конечная форма — ן. Арабская Нун (ن).' },
    { letter: 'ס', name: 'Самех', proto: '𓊽', meaning: 'Опора', evolution: 'Древний знак, напоминающий скелет рыбы или подпорку для дерева. Это круговая защита, щит, который поддерживает слабого, создавая замкнутый контур безопасности', number: 60, examples: ['סוד (Тайна)', 'ספר (Книга)'], philosophy: 'Божественная поддержка и цикличность. Замкнутый круг Самех напоминает нам о защите Творца', historyNote: 'В арабском функции перешли к Син (س).' },
    { letter: 'ע', name: 'Аин', proto: '𓁹', meaning: 'Глаз', evolution: 'Четкое изображение глаза с зрачком. Этот символ призывает нас не просто смотреть на поверхность вещей, а видеть их истинную внутреннюю суть', number: 70, examples: ['עולם (Мир)', 'עבודה (Работа)'], philosophy: 'Глубокое понимание и прозрение. Аин говорит о том, что наше восприятие определяет реальность', historyNote: 'Сложный гортанный звук Айн (ع).' },
    { letter: 'פ', suffix: 'ף', name: 'Пе', proto: '𓂊', meaning: 'Рот', evolution: 'Очертание открытого рта. Это инструмент коммуникации, через который человек выражает мысли, творит молитву или разрушает мир сплетнями', number: 80, examples: ['פה (Рот)', 'פנים (Лицо)'], philosophy: 'Сила слова и свобода речи. Пе учит нас ответственности за каждое произнесенное слово', historyNote: 'Конечная форма — ף. Арабская Фа (ف).' },
    { letter: 'צ', suffix: 'ץ', name: 'Цади', proto: '𓇑', meaning: 'Крючок', evolution: 'Изображала рыболовный крючок или ловушку. Позже смысл трансформировался в образ «праведника», чьи мысли всегда обращены к небу', number: 90, examples: ['צדק (Правда)', 'צפון (Север)'], philosophy: 'Стремление к справедливости и этическая чистота. Цади символизирует победу духа', historyNote: 'Конечная форма — ץ. Арабская Сад (ص).' },
    { letter: 'ק', name: 'Куф', proto: '𓃻', meaning: 'Ушко иглы', evolution: 'Возможно, изображала затылок или ушко иглы. Это символ святости, которая способна проникнуть даже в самые плотные слои материального мира', number: 100, examples: ['קדושה (Святость)', 'קול (Голос)'], philosophy: 'Преобразование тьмы в свет. Куф напоминает о том, что даже во тьме можно найти искры божественного', historyNote: 'Арабская Каф (ق).' },
    { letter: 'ר', name: 'Реш', proto: '𓁶', meaning: 'Голова', evolution: 'Изображение головы человека в профиль. Это символ интеллекта, самосознания и главенства разума над телом', number: 200, examples: ['ראש (Голова)', 'רוח (Дух)'], philosophy: 'Начало нового этапа и чистота мысли. Реш призывает нас обновлять свое сознание каждый день', historyNote: 'Арабская Ра (ر).' },
    { letter: 'ש', name: 'Шин', proto: '𓌓', meaning: 'Зуб', evolution: 'Рисовалась как три резца или боевой лук. Это символ огня и разрушительной энергии, которая необходима, чтобы уничтожить старое', number: 300, examples: ['שלום (Мир)', 'שמים (Небеса)'], philosophy: 'Божественный огонь и баланс. Три ветви Шин символизируют истину, правосудие и мир', historyNote: 'Арабская Шин (ش).' },
    { letter: 'ת', name: 'Тав', proto: '𓏴', meaning: 'Знак / Печать', evolution: 'Изначально выглядела как крест или метка. Это была печать владельца или знак завершения работы. Тав ставит точку в алфавите', number: 400, examples: ['תורה (Учение)', 'תפילה (Молитва)'], philosophy: 'Завершенность, истина и печать Творца на творении. Тав учит доводить дело до финала', historyNote: 'Арабская Та (ت).' },
  ];

  const [selectedLetter, setSelectedLetter] = useState<Letter>(alphabet[0]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-teal-100">

      {/* Header Section */}
      <header className="relative pt-20 pb-24 px-6 bg-gradient-to-b from-teal-50 to-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-8xl font-patrick mb-6 tracking-tight text-indigo-900">
            Иврит
            <p className="text-teal-700">Язык Первооснов </p>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Исследуйте архитектуру древнейшего языка, где каждая буква является одновременно числом, символом и ключом к пониманию культуры
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
              Иврит является жемчужиной семитской семьи, чья история насчитывает более трех тысячелетий. Он неразрывно связан с <strong>Арамейским</strong> языком — лингва франка Древнего Ближнего Востока, на котором написаны части Талмуда. В то же время, <strong>Арабский</strong> язык является его ближайшим живым родственником: их грамматические структуры, системы корней и многие базовые слова практически идентичны
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
            <div className="overflow-hidden border border-slate-200 rounded-3xl">
              <table className="w-full text-left border-collapse bg-white">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="p-5 font-bold text-slate-400 text-xs uppercase tracking-widest border-b border-slate-100">Слово на иврите</th>
                    <th className="p-5 font-bold text-slate-400 text-xs uppercase tracking-widest border-b border-slate-100">Транскрипция</th>
                    <th className="p-5 font-bold text-slate-400 text-xs uppercase tracking-widest border-b border-slate-100">Значение</th>
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
              <div className="bg-teal-600 p-4 text-center text-white text-lg font-patrick">
                Общий корень: <span className="text-2xl"> כ - ת - ב </span>(Письменность)
              </div>
            </div>
          </section>
        </div>

        {/* Evolution Section: ALEF and AIN (Fixed ReferenceError and updated design) */}
        <section className="bg-white p-10 md:p-14 rounded-[4rem] border border-teal-200 relative overflow-hidden">
          <div className="relative z-10 space-y-10">
            <div className="flex items-center gap-4 text-teal-700">
              <h2 className="text-4xl text-center font-patrick text-teal-700">От Иероглифа к Цифре</h2>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
              Каждая буква современного иврита — это результат долгой эволюции <strong>Протосинайского письма</strong>. 
              Около 1800 г. до н.э. семитские рабочие адаптировали египетские иероглифы, используя первую букву названия предмета. Так изображение головы быка стало буквой Алеф
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Alef Evolution Card */}
              <div className="bg-teal-50 p-8 rounded-[2.5rem] shadow-sm space-y-6 border border-teal-200">
                <div className="flex items-center justify-between border-b pb-4">
                  <h4 className="text-xl font-bold text-indigo-900">Алеф (Бык)</h4>
                  <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wider">Голова силы</span>
                </div>
                
                <div className="flex items-center justify-around py-4">
                  <div className="text-center">
                    <span className="text-8xl block mb-1 text-slate-500">𓃾</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Иероглиф</span>
                  </div>
                  <ArrowRight className="text-slate-400" />
                  <div className="text-center">
                    <span className="text-6xl block mb-1 font-serif text-teal-600">א</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Иврит</span>
                  </div>
                  <ArrowRight className="text-slate-400" />
                  <div className="text-center">
                    <span className="text-5xl block mb-1 font-serif text-indigo-900 font-bold">A</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Латынь</span>
                  </div>
                </div>

                <p className="text-sm text-slate-500 leading-relaxed border-t pt-4">
                  Рога и морда быка со временем превратились в перекрещенные линии. В латыни символ перевернулся рогами вниз, став буквой «A»
                </p>
              </div>

              {/* Ain Evolution Card */}
              <div className="bg-teal-50 p-8 rounded-[2.5rem] shadow-sm space-y-6 border border-teal-200">
                <div className="flex items-center justify-between border-b pb-4">
                  <h4 className="text-xl font-bold text-indigo-900">Аин (Глаз)</h4>
                  <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wider">Прозрение</span>
                </div>

                <div className="flex items-center justify-around py-4">
                  <div className="text-center">
                    <span className="text-8xl block mb-1 text-slate-500">𓁹</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Иероглиф</span>
                  </div>
                  <ArrowRight className="text-slate-400" />
                  <div className="text-center">
                    <span className="text-6xl block mb-1 font-serif text-teal-600">ע</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Иврит</span>
                  </div>
                  <ArrowRight className="text-slate-400" />
                  <div className="text-center">
                    <span className="text-5xl block mb-1 font-serif text-indigo-900 font-bold">O</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Латынь</span>
                  </div>
                </div>

                <p className="text-sm text-slate-500 leading-relaxed border-t pt-4">
                  Буква Аин изначально рисовалась как глаз со зрачком. В греческом и латыни она упростилась до идеального круга — буквы «O»
                </p>
              </div>
            </div>

            <div className="text-center p-7 bg-teal-600 text-white rounded-3xl">
              <p className="text-lg font-patrick">Интересный факт:</p>
              <p className="text-lg font-patrick">почти весь латинский алфавит — это «перевернутые» или «отзеркаленные» образы древних букв иврита</p>
            </div>
          </div>
        </section>

                {/* Alphabet Explorer (Compact) */}
        <section className="space-y-16">
          <div className="text-center space-y-3">
            <h2 className="text-4xl font-patrick text-teal-700">Генезис Символов</h2>
            <p className="text-slate-500">Нажмите на букву, чтобы узнать её историю и смысл</p>
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
                      ? 'bg-teal-600 text-white border-teal-500 shadow-lg -translate-y-1'
                      : 'bg-white hover:bg-slate-50 border-slate-100 text-indigo-900'
                  }`}
                >
                  <span className="text-2xl font-serif font-bold">{item.letter}</span>
                  <span className="text-[9px] font-black text-teal-500 group-hover:text-teal-600 transition-colors uppercase">
                    {selectedLetter.letter === item.letter ? '✓' : item.number}
                  </span>
                </button>
              ))}
            </div>

            {/* Letter Content Card */}
            <div className="bg-teal-50 rounded-[2.5rem] p-8 md:p-12 border border-teal-200 relative overflow-hidden">
               <div className="grid md:grid-cols-12 gap-12 relative z-10">
                  
                  {/* LEFT COLUMN: VISUALS */}
                  <div className="md:col-span-4 flex flex-col gap-8 items-center md:items-start">
                    {/* Left Top: Hieroglyph */}
                    <div className="w-full space-y-4">
                      <span className="text-[10px] uppercase font-bold text-teal-600 tracking-widest block text-center md:text-left">Прото-иероглиф</span>
                      <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-3xl flex items-center justify-center border border-teal-200 shadow-inner text-10xl text-slate-500 mx-auto md:mx-0">
                        {selectedLetter.proto}
                      </div>
                    </div>
                    {/* Left Bottom: Modern Letter */}
                    <div className="w-full space-y-4 pt-4">
                      <span className="text-[10px] uppercase font-bold text-teal-600 tracking-widest block text-center md:text-left">Современная форма</span>
                      <div className="text-9xl font-serif text-teal-600 leading-none text-center md:text-left font-bold">
                        {selectedLetter.letter}
                      </div>
                      <div className="bg-teal-600 text-white py-2 px-4 rounded-xl font-bold text-xs tracking-widest uppercase inline-block mx-auto md:mx-0">
                        Гематрия: {selectedLetter.number}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: TEXT */}
                  <div className="md:col-span-8 flex flex-col gap-10">
                    {/* Right Top: Evolution */}
                    <div className="space-y-4">
                      <h3 className="text-4xl font-patrick text-indigo-900 flex flex-wrap items-center gap-3">
                         {selectedLetter.name} 
                         <span className="text-teal-600 text-2xl">— {selectedLetter.meaning}</span>
                      </h3>
                      <div className="bg-white/60 p-6 rounded-3xl border border-teal-200">
                        <h4 className="text-[10px] font-bold text-teal-600 uppercase mb-3 flex items-center gap-2">
                           <Zap size={14} /> Эволюция символа
                        </h4>
                        <p className="text-slate-600 leading-relaxed text-lg font-patrick">
                          {selectedLetter.evolution}
                        </p>
                      </div>
                    </div>

                    {/* Right Bottom: Philosophy */}
                    <div className="space-y-6">
                      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-teal-200 shadow-sm relative">
                        <h4 className="text-[10px] font-bold text-teal-600 uppercase mb-4 flex items-center gap-2">
                          <ScrollText size={16} /> Философский смысл
                        </h4>
                        <p className="text-slate-600 leading-relaxed text-lg font-patrick">
                          {selectedLetter.philosophy}
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                           {selectedLetter.examples.map((ex, i) => (
                             <span key={i} className="px-3 py-1 bg-teal-50 text-teal-600 rounded-lg text-sm font-medium border border-teal-200">
                               {ex}
                             </span>
                           ))}
                        </div>
                      </div>
                    </div>
                  </div>

               </div>
            </div>
          </div>
        </section>

        {/* Sophit Explaination */}
        <section className="bg-white p-10 rounded-[3rem] border border-teal-200">
          <h2 className="text-4xl font-patrick mb-4 text-teal-700">Пять Букв Софит (Окончания)</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            В иврите пять букв — <strong>Каф, Мем, Нун, Пе и Цади</strong> — меняют форму, если стоят в конце слова. Это помогает визуально разделять слова
          </p>
          <div className="flex gap-4">
            {['ך', 'ם', 'ן', 'ף', 'ץ'].map(s => (
              <div key={s} className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm">
                <span className="text-3xl font-serif text-teal-600">{s}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Gematria Calculation Block */}
        <section className="bg-white p-10 md:p-14 rounded-[4rem] border border-teal-200 relative overflow-hidden">
          <div className="relative z-10 space-y-10">
            <div className="text-center space-y-3">
              <h2 className="text-4xl font-patrick text-teal-700">Гематрия: числовой код</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-teal-50 p-8 rounded-[2.5rem] shadow-sm space-y-6 border border-teal-200">
                <h4 className="text-xl font-patrick text-indigo-900">Слово «Любовь» (Ахава)</h4>
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
                <h4 className="text-xl font-patrick text-indigo-900">Слово «Единый» (Эхад)</h4>
                <div className="text-4xl font-serif text-teal-600 border-b pb-4">אחד</div>
                <div className="space-y-2 font-mono text-sm text-slate-500">
                  <div className="flex justify-between"><span>Алеф (א)</span> <span>1</span></div>
                  <div className="flex justify-between"><span>Хет (ח)</span> <span>8</span></div>
                  <div className="flex justify-between"><span>Далет (ד)</span> <span>4</span></div>
                </div>
                <div className="pt-4 border-t flex justify-between font-patrick text-2xl text-teal-700">
                  <span>ИТОГО:</span> <span>1 + 8 + 4 = 13</span>
                </div>
              </div>
            </div>

            <div className="text-center p-7 bg-teal-600 text-white rounded-3xl shadow-xl">
              <p className="text-lg font-patrick">
                Совпадение этих чисел говорит о том, что в культуре иврита Любовь и Единство — это одна и та же математическая и духовная величина
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <div className="text-teal-500 text-4xl font-serif tracking-[0.5em]">אבגדהוזחטיכלמנסעפצקרשת</div>
          <p className="text-slate-500 text-xs uppercase tracking-[0.2em]">© 2026 Лингвистическое наследие • Грамматика Бытия</p>
        </div>
      </footer>
    </div>
  );
};

export default App;