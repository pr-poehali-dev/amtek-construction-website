import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Всесезонный курорт «Манжерок»",
      location: "Республика Алтай",
      category: "Туризм и рекреация",
      status: "Реализовано",
      area: "40,000 м²",
      description:
        "Премиальный горнолыжный курорт с гостиничными комплексами и развитой инфраструктурой",
      image:
        "https://images.unsplash.com/photo-1551524164-6cf2ac154a12?w=600&h=400&fit=crop",
      features: ["SPA-комплекс", "Ресторан", "Апартаменты"],
    },
    {
      id: 2,
      title: "ЖК «Каравелла Португалия»",
      location: "г. Сочи, п. Дагомыс",
      category: "Жилая недвижимость",
      status: "3 очереди",
      area: "75,000 м²",
      description:
        "Многоквартирный жилой комплекс с развитой инфраструктурой и парковками",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
      features: ["3 очереди", "Парковка", "Инфраструктура"],
    },
    {
      id: 3,
      title: "Гостиничный комплекс «МРИЯ»",
      location: "Республика Крым",
      category: "Гостиничные комплексы",
      status: "Реализовано",
      area: "Премиум-класс",
      description:
        "Роскошный курортный комплекс с SPA-центром и ресторанами высокого класса",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      features: ["SPA-центр", "Рестораны", "Премиум"],
    },
    {
      id: 4,
      title: "Многофункциональные комплексы",
      location: "Москва",
      category: "Коммерческая недвижимость",
      status: "3 объекта",
      area: "Функционируют",
      description:
        "Физкультурно-оздоровительные комплексы с торговыми и офисными площадями",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      features: ["ФОК", "Торговые площади", "Офисы"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-orange-600 border-orange-200"
          >
            Портфолио проектов
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши ключевые проекты
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            За 25 лет работы мы реализовали более 150 крупных проектов по всей
            России. Наши объекты — это эталон качества и надёжности в
            строительной отрасли.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-orange-500 hover:bg-orange-600">
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className="bg-white/90 text-gray-700"
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-500 mb-2">
                      <Icon name="MapPin" size={16} className="mr-2" />
                      {project.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-orange-600">
                      {project.area}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-500">
                    <Icon name="Building2" size={14} className="inline mr-1" />
                    Строительство АМТЕК
                  </div>
                  <button className="text-orange-600 hover:text-orange-700 font-medium text-sm flex items-center">
                    Подробнее
                    <Icon name="ArrowRight" size={14} className="ml-1" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Section */}
        <div className="text-center bg-white rounded-2xl p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Наши клиенты
          </h3>
          <div className="flex items-center justify-center space-x-12 opacity-60">
            <div className="text-3xl font-bold text-green-600">СБЕРБАНК</div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-lg font-semibold text-gray-700">
              ЧАСТНЫЕ ИНВЕСТОРЫ
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-lg font-semibold text-gray-700">
              КОРПОРАТИВНЫЕ КЛИЕНТЫ
            </div>
          </div>
          <p className="text-gray-500 mt-4">
            Доверие крупнейших финансовых институтов и частных инвесторов
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
