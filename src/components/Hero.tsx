import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 border border-orange-400 rotate-45"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border border-orange-400 rotate-12"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-gray-300"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <header className="flex items-center justify-between mb-16">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <img
                src="https://cdn.poehali.dev/files/693bee09-bb4f-4351-b14d-2e600dd97615.png"
                alt="АМТЕК"
                className="w-12 h-12 object-contain filter brightness-0 invert"
              />
            </div>
            <div>
              <h1 className="text-gray-900 text-2xl font-bold tracking-wide">
                АМТЕК
              </h1>
              <p className="text-gray-600 text-sm">ГРУППА КОМПАНИЙ</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#projects"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Проекты
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Услуги
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              О компании
            </a>
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Контакты
            </Button>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-6">
              25+ лет на рынке • 150+ реализованных проектов
            </span>

            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Строим будущее
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                сегодня
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Группа компаний АМТЕК — лидер в области строительства, управления
              и продажи недвижимости. Реализуем проекты любой сложности от
              офисных центров до курортных комплексов.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
            >
              <Icon name="Building2" className="mr-2" size={20} />
              Наши проекты
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть видео
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-500 text-sm">Проектов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">25</div>
              <div className="text-gray-500 text-sm">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">40K</div>
              <div className="text-gray-500 text-sm">м² в работе</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-500 text-sm">Надёжность</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="text-gray-400" size={24} />
      </div>
    </section>
  );
};

export default Hero;
