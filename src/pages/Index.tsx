import { useState } from "react";
import Icon from "@/components/ui/icon";

const CATALOG = [
  {
    id: 1,
    name: "Комбайн АГРО-5000",
    category: "Комбайны",
    image: "https://cdn.poehali.dev/projects/6fbf17b2-0bcc-46ec-a368-965e0779fc91/files/3edfcc3f-a707-490c-a285-4c13d5e2bbbe.jpg",
    price: "от 4 500 000 ₽",
    specs: [
      { label: "Мощность двигателя", value: "350 л.с." },
      { label: "Ширина захвата жатки", value: "7.6 м" },
      { label: "Объём бункера", value: "9 000 л" },
      { label: "Производительность", value: "до 30 т/ч" },
      { label: "Масса", value: "14 200 кг" },
    ],
    description: "Высокопроизводительный зерноуборочный комбайн с современной системой точного земледелия. Идеален для уборки пшеницы, ячменя и подсолнечника.",
  },
  {
    id: 2,
    name: "Трактор ПОЛЕ-220",
    category: "Тракторы",
    image: "https://cdn.poehali.dev/projects/6fbf17b2-0bcc-46ec-a368-965e0779fc91/files/22b3e80c-b499-4a71-a68a-9b93b28cb358.jpg",
    price: "от 1 800 000 ₽",
    specs: [
      { label: "Мощность двигателя", value: "220 л.с." },
      { label: "Тяговый класс", value: "4" },
      { label: "Грузоподъёмность", value: "8 000 кг" },
      { label: "Колёсная формула", value: "4×4" },
      { label: "Масса", value: "8 500 кг" },
    ],
    description: "Универсальный трактор для пахоты, культивации и транспортных работ. Оснащён современной кабиной с климат-контролем и системой GPS-навигации.",
  },
  {
    id: 3,
    name: "Почвообрабатывающий агрегат ПА-8",
    category: "Оборудование",
    image: "https://cdn.poehali.dev/projects/6fbf17b2-0bcc-46ec-a368-965e0779fc91/files/50936c3e-2b75-4f45-b1fb-e8701834005a.jpg",
    price: "от 650 000 ₽",
    specs: [
      { label: "Ширина захвата", value: "8 м" },
      { label: "Глубина обработки", value: "до 30 см" },
      { label: "Количество секций", value: "4" },
      { label: "Требуемая мощность", value: "от 160 л.с." },
      { label: "Масса", value: "3 200 кг" },
    ],
    description: "Многофункциональный почвообрабатывающий агрегат для минимальной и нулевой обработки почвы. Снижает затраты на топливо до 40%.",
  },
];

const REVIEWS = [
  {
    name: "Сергей Петров",
    company: "КФХ «Урожай», Краснодарский край",
    text: "Приобрели комбайн АГРО-5000 в прошлом сезоне. Убрали 800 гектаров без единой поломки. Александр Юдаков помог с выбором комплектации и организовал доставку в течение недели.",
    rating: 5,
  },
  {
    name: "Алексей Воронов",
    company: "ООО «АгроПлюс», Ростовская область",
    text: "Трактор ПОЛЕ-220 превзошёл все ожидания по мощности и надёжности. Поддержка Александра — на высшем уровне, всегда на связи и быстро решает вопросы.",
    rating: 5,
  },
  {
    name: "Ирина Семёнова",
    company: "Агрохолдинг «Степной», Ставропольский край",
    text: "Закупили сразу 3 почвообрабатывающих агрегата. Качество техники отличное, сервис и запчасти — без задержек. Рекомендую всем аграриям!",
    rating: 5,
  },
];

const CATEGORIES = ["Все", "Комбайны", "Тракторы", "Оборудование"];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [selectedItem, setSelectedItem] = useState<typeof CATALOG[0] | null>(null);
  const [supportForm, setSupportForm] = useState({ name: "", phone: "", message: "" });
  const [supportSent, setSupportSent] = useState(false);

  const filtered = activeCategory === "Все" ? CATALOG : CATALOG.filter((i) => i.category === activeCategory);

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSupportSent(true);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md py-4 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Tractor" size={24} className="text-amber-400" />
            <span className="text-white font-serif text-xl font-semibold tracking-wide">АгроТехника</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-white/80 text-sm font-light">
            <a href="#catalog" className="hover:text-amber-400 transition-colors duration-300">Каталог</a>
            <a href="#reviews" className="hover:text-amber-400 transition-colors duration-300">Отзывы</a>
            <a href="#support" className="hover:text-amber-400 transition-colors duration-300">Поддержка</a>
          </div>
          <a href="#support" className="bg-amber-500 hover:bg-amber-400 text-gray-950 font-medium px-4 py-2 rounded-lg text-sm transition-all duration-300">
            Получить консультацию
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/6fbf17b2-0bcc-46ec-a368-965e0779fc91/files/3edfcc3f-a707-490c-a285-4c13d5e2bbbe.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/60 to-transparent z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <div className="max-w-2xl fade-in">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 rounded-full px-4 py-1.5 mb-6">
              <Icon name="Wheat" size={14} className="text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">Надёжная техника для вашего урожая</span>
            </div>
            <h1 className="font-serif text-white text-5xl lg:text-7xl font-normal tracking-tight mb-6 leading-tight">
              Агро<em className="text-amber-400">техника</em><br />нового поколения
            </h1>
            <p className="text-gray-300 text-lg lg:text-xl font-light leading-relaxed mb-10 max-w-xl">
              Комбайны, тракторы и почвообрабатывающее оборудование для эффективного земледелия. Профессиональный подбор и поддержка от Александра Юдакова.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#catalog" className="bg-amber-500 hover:bg-amber-400 text-gray-950 font-semibold px-8 py-3.5 rounded-lg text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30">
                Смотреть каталог
              </a>
              <a href="#support" className="border border-white/30 hover:border-white/60 text-white font-medium px-8 py-3.5 rounded-lg text-base transition-all duration-300 hover:bg-white/10">
                Получить консультацию
              </a>
            </div>
            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-14">
              {[
                { value: "500+", label: "единиц техники" },
                { value: "12 лет", label: "на рынке" },
                { value: "47 регионов", label: "доставки" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-serif font-semibold text-amber-400">{s.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Catalog Section */}
      <section id="catalog" className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl lg:text-5xl text-white mb-4">Каталог техники</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Профессиональная сельскохозяйственная техника для любых задач. Александр Юдаков поможет подобрать оптимальное решение.</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-amber-500 text-gray-950"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-amber-500 text-gray-950 text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-xl mb-2">{item.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>
                  {/* Mini specs */}
                  <div className="space-y-1.5 mb-5">
                    {item.specs.slice(0, 3).map((spec) => (
                      <div key={spec.label} className="flex justify-between text-sm">
                        <span className="text-gray-500">{spec.label}</span>
                        <span className="text-gray-300 font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-400 font-semibold text-lg">{item.price}</span>
                    <button className="text-sm text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors">
                      Подробнее <Icon name="ArrowRight" size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-gray-900 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <Icon name="X" size={18} />
              </button>
              <div className="absolute top-4 left-4 bg-amber-500 text-gray-950 text-xs font-semibold px-3 py-1 rounded-full">
                {selectedItem.category}
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-white font-serif text-3xl mb-2">{selectedItem.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{selectedItem.description}</p>
              <div className="border border-gray-700 rounded-xl p-5 mb-6">
                <h4 className="text-amber-400 font-semibold text-sm uppercase tracking-wide mb-4">Характеристики</h4>
                <div className="space-y-3">
                  {selectedItem.specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between border-b border-gray-800 pb-2">
                      <span className="text-gray-500 text-sm">{spec.label}</span>
                      <span className="text-white font-medium text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-amber-400 font-semibold text-2xl">{selectedItem.price}</span>
                <a
                  href="#support"
                  onClick={() => setSelectedItem(null)}
                  className="bg-amber-500 hover:bg-amber-400 text-gray-950 font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                >
                  Запросить цену
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reviews Section */}
      <section id="reviews" className="py-24 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl lg:text-5xl text-white mb-4">Отзывы клиентов</h2>
            <p className="text-gray-400 text-lg">Что говорят наши покупатели об Александре Юдакове и технике</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <div key={idx} className="bg-gray-800 rounded-2xl p-8 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">«{review.text}»</p>
                <div className="flex items-center gap-3 border-t border-gray-700 pt-5">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                    <Icon name="User" size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{review.name}</div>
                    <div className="text-gray-500 text-xs">{review.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Info */}
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6">Поддержка и<br /><em className="text-amber-400">консультация</em></h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Александр Юдаков — ваш личный менеджер по агротехнике. Поможет подобрать технику, организует доставку, сервисное обслуживание и запасные части.
              </p>
              <div className="space-y-5">
                {[
                  { icon: "Phone", title: "Телефон", value: "+7 (800) 555-35-35", sub: "Бесплатно по России" },
                  { icon: "Mail", title: "Email", value: "yudakov@agrotechnika.ru", sub: "Ответим в течение 1 часа" },
                  { icon: "MapPin", title: "Адрес", value: "г. Москва, ул. Аграрная, 15", sub: "Пн–Пт 9:00–18:00" },
                ].map((c) => (
                  <div key={c.title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon} size={18} className="text-amber-400" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-wide mb-0.5">{c.title}</div>
                      <div className="text-white font-medium">{c.value}</div>
                      <div className="text-gray-500 text-sm">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-800 rounded-2xl p-8">
              {supportSent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={32} className="text-amber-400" />
                  </div>
                  <h3 className="text-white font-semibold text-2xl mb-2">Заявка отправлена!</h3>
                  <p className="text-gray-400">Александр Юдаков свяжется с вами в ближайшее время.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-white font-semibold text-2xl mb-2">Оставить заявку</h3>
                  <p className="text-gray-400 text-sm mb-6">Александр Юдаков перезвонит и ответит на все вопросы</p>
                  <form onSubmit={handleSupportSubmit} className="space-y-4">
                    <div>
                      <label className="text-gray-400 text-sm block mb-1.5">Ваше имя</label>
                      <input
                        type="text"
                        required
                        value={supportForm.name}
                        onChange={(e) => setSupportForm({ ...supportForm, name: e.target.value })}
                        className="w-full bg-gray-700 border border-gray-600 focus:border-amber-500 text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder-gray-500"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm block mb-1.5">Телефон</label>
                      <input
                        type="tel"
                        required
                        value={supportForm.phone}
                        onChange={(e) => setSupportForm({ ...supportForm, phone: e.target.value })}
                        className="w-full bg-gray-700 border border-gray-600 focus:border-amber-500 text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder-gray-500"
                        placeholder="+7 (999) 000-00-00"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm block mb-1.5">Что интересует?</label>
                      <textarea
                        value={supportForm.message}
                        onChange={(e) => setSupportForm({ ...supportForm, message: e.target.value })}
                        rows={4}
                        className="w-full bg-gray-700 border border-gray-600 focus:border-amber-500 text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder-gray-500 resize-none"
                        placeholder="Опишите, какая техника вас интересует..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-amber-500 hover:bg-amber-400 text-gray-950 font-semibold py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30"
                    >
                      Отправить заявку
                    </button>
                    <p className="text-gray-600 text-xs text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Icon name="Tractor" size={20} className="text-amber-400" />
            <span className="text-white font-serif text-lg">АгроТехника</span>
          </div>
          <p className="text-gray-600 text-sm">Александр Юдаков © 2026. Все права защищены.</p>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Icon name="Wheat" size={14} className="text-amber-500" />
            <span>Надёжная техника для вашего урожая</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
