import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Button } from './components/ui/button';
import { Eye, Heart, Flame, ChevronRight } from 'lucide-react';
import { DashedLine, YellowArrows, WavePattern, YellowDots } from './components/DecorativeElements';
import olyaPhoto from 'figma:asset/dff4c39d98e475a13ed0f9c43d7c7847b7c09a35.png';
import { useIsMobile } from './components/ui/use-mobile';
import { useState, useEffect, useRef } from 'react';
import InstagramGallery from './components/InstagramGallery';

export default function App() {
  const isMobile = useIsMobile();
  const [showStickyButton, setShowStickyButton] = useState(false);
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Get the position of the CTA section and footer
      const ctaSection = ctaSectionRef.current;
      const footer = footerRef.current;
      if (!ctaSection || !footer) return;

      const ctaSectionTop = ctaSection.getBoundingClientRect().top;
      const ctaSectionBottom = ctaSection.getBoundingClientRect().bottom;
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Show button after scrolling past the first screen (100vh)
      // Hide button when reaching the "Хочешь понять твое ли?" section
      // Hide button when reaching the footer section
      if (window.scrollY > windowHeight && ctaSectionTop > windowHeight && footerTop > windowHeight * 0.5) {
        setShowStickyButton(true);
      } else {
        setShowStickyButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-[#f5f5f5] relative overflow-hidden">
      {/* Background noise/grain effect */}
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Abstract decorative elements */}
      <div className="fixed top-20 right-10 w-64 h-64 bg-[#FFD33D] rounded-full opacity-10 blur-[100px] pointer-events-none z-0" />
      <div className="fixed bottom-40 left-20 w-96 h-96 bg-[#FFD33D] rounded-full opacity-5 blur-[120px] pointer-events-none z-0" />

      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
          {/* Decorative dashed line */}
          <DashedLine className="absolute top-40 right-10 w-48 h-48 opacity-40 rotate-45" />
          
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Logo */}
            <div className="inline-block bg-[#2a2a2a] px-6 py-3 mb-6">
              <div className="font-display text-2xl tracking-tight">
                <span className="text-[#FFD33D]">МЕТА</span>
                <br />
                <span className="text-[#FFD33D]">ТЕАТР</span>
              </div>
            </div>
            
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f5f5f5] mb-6 leading-tight">
              пространство твоей<br />
              <span className="text-[#FFD33D]">внутренней свободы</span>
            </h1>

            <YellowArrows className="justify-center my-8" />

            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-[#e0e0e0] max-w-3xl mx-auto">
              <p className="text-2xl">Ты не будешь прежним.</p>
              
              <p>
                МетаТеатр — это не курс, не кружок и не "эзо-активити". 
                Это живая лаборатория человеческого присутствия. 
                Здесь мы исследуем себя — через импровизацию, телесность, внимание, диалог, игры и честное проживание.
              </p>
              
              <p className="text-[#FFD33D] text-xl pt-4">
                Мы не учим "как правильно". Мы предлагаем пространство, где ты можешь быть настоящим.
              </p>
            </div>

            <YellowDots count={3} className="justify-center pt-8" />
          </div>
        </section>

        {/* What is MetaTheatre Section */}
        <section className="py-20 px-6 relative">
          <WavePattern className="absolute bottom-10 left-10 w-40 h-40 opacity-30" />
          
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <YellowArrows />
              <h2 className="font-display text-4xl md:text-6xl text-[#FFD33D]">
                Что такое МетаТеатр?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#1a1a1a] p-8 border-l-4 border-[#FFD33D] hover:bg-[#222] transition-all">
                <Flame className="w-10 h-10 text-[#FFD33D] mb-4" />
                <p className="text-lg leading-relaxed">
                  Это тренировки твоей проявленности, а не "прокачки навыков"
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-8 border-l-4 border-[#FFD33D] hover:bg-[#222] transition-all">
                <div className="text-3xl mb-4">🌀</div>
                <p className="text-lg leading-relaxed">
                  Это театр без спектакля, где сцена — это момент "здесь и сейчас"
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-8 border-l-4 border-[#FFD33D] hover:bg-[#222] transition-all">
                <Eye className="w-10 h-10 text-[#FFD33D] mb-4" />
                <p className="text-lg leading-relaxed">
                  Это место, где ты можешь смотреть — и быть увиденным
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-8 border-l-4 border-[#FFD33D] hover:bg-[#222] transition-all">
                <Heart className="w-10 h-10 text-[#FFD33D] mb-4" />
                <p className="text-lg leading-relaxed">
                  Это сообщество людей, которым мало "масок". Нам хочется подлинности
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Chooses Us Section */}
        <section className="py-20 px-6 bg-[#1a1a1a]/50 relative">
          <YellowDots count={7} className="absolute top-10 right-10 opacity-30" />
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-12">
              <div className="flex flex-col gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FFD33D]" />
                <div className="w-3 h-3 rounded-full bg-[#FFD33D] opacity-70" />
                <div className="w-3 h-3 rounded-full bg-[#FFD33D] opacity-40" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-[#FFD33D]">
                Нас выбирают:
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed">
              <div className="flex items-start gap-4">
                <ChevronRight className="w-6 h-6 text-[#FFD33D] flex-shrink-0 mt-1" />
                <p>те, кто хочет перестать бояться проявляться и быть "неудобным"</p>
              </div>
              <div className="flex items-start gap-4">
                <ChevronRight className="w-6 h-6 text-[#FFD33D] flex-shrink-0 mt-1" />
                <p>те, кто устал от форматов, где учат, как жить</p>
              </div>
              <div className="flex items-start gap-4">
                <ChevronRight className="w-6 h-6 text-[#FFD33D] flex-shrink-0 mt-1" />
                <p>те, кто ищет честные практики, а не инфо-пустышки</p>
              </div>
              <div className="flex items-start gap-4">
                <ChevronRight className="w-6 h-6 text-[#FFD33D] flex-shrink-0 mt-1" />
                <p>те, кто хочет быть ближе к себе и к людям</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-6xl text-[#f5f5f5] mb-8">
              Кто <span className="text-[#FFD33D]">мы?</span>
            </h2>

            <div className="space-y-6 text-lg leading-relaxed mb-12">
              <p>
                МетаТеатр родился из жажды настоящего.
              </p>
              <p>
                Режиссёр и создатель проекта — <span className="text-[#FFD33D]">Оля Махновецкая</span>, 
                тонкий проводник, без пафоса, но с огнём.
              </p>
              <p>
                К ней присоединяются телесные практики, работа с вниманием, игровые форматы, 
                иногда даже баня и горы. Всё — как часть живого пути.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 px-6 bg-[#1a1a1a]/30 relative" id="events">
          <DashedLine className="absolute bottom-20 right-20 w-64 h-64 opacity-20 rotate-180" />
          
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-6xl text-[#FFD33D] mb-12">
              Что мы проводим
            </h2>

            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-xl text-[#f5f5f5]">
                Живые события в Санкт-Петербурге и на природе
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-8">
                <div className="bg-[#121212] p-6 border-t-2 border-[#FFD33D]">
                  <p>тренинг «Проявленность» с залитым светом залом и мокрыми от слёз глазами</p>
                </div>
                <div className="bg-[#121212] p-6 border-t-2 border-[#FFD33D]">
                  <p>формат "Внутренний ребёнок VS Внутренний критик" (спойлер: ребёнок победил)</p>
                </div>
                <div className="bg-[#121212] p-6 border-t-2 border-[#FFD33D]">
                  <p>мини-резиденции, где люди не хотели уезжать и обнимались до утра</p>
                </div>
                <div className="bg-[#121212] p-6 border-t-2 border-[#FFD33D]">
                  <p>и, конечно, тёплый ламповый чат, где всё продолжается</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leader Section with Portrait */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="font-display text-4xl md:text-5xl text-[#f5f5f5] mb-16 text-center">
              ВЕДУЩИЕ
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Оля Махновецкая */}
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#FFD33D] translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
                  <img
                    src={olyaPhoto}
                    alt="Оля Махновецкая"
                    className="relative w-full aspect-[3/4] object-cover grayscale"
                  />
                </div>
                
                <div>
                  <h3 className="font-display text-3xl text-[#FFD33D] mb-4">
                    ОЛЯ<br />МАХНОВЕЦКАЯ
                  </h3>
                  <p className="text-sm uppercase tracking-wider text-[#a0a0a0] mb-4">
                    РЕЖИССЁР И ПРОДЮСЕР,<br />
                    СООСНОВАТЕЛЬ<br />
                    МЕТА ТЕАТРА
                  </p>
                  <p className="text-base leading-relaxed">
                    Актриса и перформер, автор иммерсивных форматов. Создатель пространства, 
                    где можно быть собой — без масок, без игры, без страха "сделать неправильно".
                  </p>
                </div>
              </div>

              {/* Second facilitator placeholder */}
              <div className="space-y-6 opacity-60">
                <div className="relative">
                  <div className="w-full aspect-[3/4] bg-[#2a2a2a] flex items-center justify-center">
                    <p className="text-[#FFD33D] text-sm">+ другие проводники</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-base leading-relaxed text-[#a0a0a0]">
                    К Оле присоединяются телесные практики, работа с вниманием, игровые форматы. 
                    Каждое событие уникально и ведётся в соответствии с энергией группы.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 max-w-2xl mx-auto text-center">
              <p className="text-[#FFD33D] text-xl italic leading-relaxed">
                "Я здесь не для того, чтобы вести вас куда-то. Я здесь, чтобы быть рядом, 
                пока вы находите свой путь."
              </p>
            </div>
          </div>
        </section>

        {/* Instagram Gallery */}
        <InstagramGallery />

        {/* CTA Section - Telegram */}
        <section className="py-20 px-6" ref={ctaSectionRef}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#1a1a1a] border-4 border-[#FFD33D] p-12 md:p-16 relative overflow-hidden">
              <YellowDots count={5} className="absolute top-6 right-6 opacity-40" />
              <YellowDots count={5} className="absolute bottom-6 left-6 opacity-40" />
              
              <div className="relative z-10 text-center space-y-8">
                <h2 className="font-display text-4xl md:text-5xl text-[#FFD33D]">
                  Хочешь понять,<br />твое ли?
                </h2>
                
                <p className="text-lg leading-relaxed max-w-2xl mx-auto">
                  Загляни в наш Telegram-чат. Там записи, анонсы, голос Оли и люди, которые уже с нами.
                </p>

                <p className="text-base text-[#a0a0a0]">
                  Просто послушай. Просто почувствуй.
                </p>

                <div className="pt-6">
                  <a 
                    href="https://t.me/metatselnost" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button 
                      className="bg-[#FFD33D] text-[#121212] hover:bg-[#FFD33D]/90 px-12 py-7 text-lg font-display rounded-none transition-all hover:scale-105"
                    >
                      ВСТУПИТЬ В ЧАТ →
                    </Button>
                  </a>
                </div>

                <p className="text-sm text-[#a0a0a0] pt-2">
                  t.me/metatselnost
                </p>
              </div>
            </div>

            <div className="mt-16 text-center space-y-6">
              <h3 className="font-display text-3xl text-[#FFD33D]">
                А ты точно успеешь?
              </h3>
              <div className="text-lg leading-relaxed space-y-4 max-w-2xl mx-auto">
                <p>
                  Набор на живые тренинги и онлайн-форматы продолжается.
                </p>
                <p>
                  Есть места в ближайший поток.
                </p>
                <p>
                  Следи за объявлениями в чате и приходи в своё "Да".
                </p>
              </div>
              <p className="text-[#FFD33D] italic text-lg pt-4">
                И если что-то щёлкает внутри — доверься. Это МетаТеатр зовёт.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Message */}
        <footer className="py-20 px-6 border-t border-[#FFD33D]/20" ref={footerRef}>
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <p className="font-display text-4xl md:text-6xl text-[#FFD33D] leading-tight">
              Ты не играешь роль.<br />
              Ты играешь себя.
            </p>

            <YellowDots count={5} className="justify-center" />

            <div className="bg-[#2a2a2a] inline-block px-8 py-4">
              <div className="font-display text-xl tracking-tight">
                <span className="text-[#FFD33D]">МЕТА ТЕАТР</span>
              </div>
            </div>

            <p className="text-sm text-[#a0a0a0]">
              © 2025
            </p>
          </div>
        </footer>
      </div>

      {/* Sticky button for mobile */}
      {isMobile && showStickyButton && (
        <div className="fixed h-[50px]">
          <a 
            href="https://t.me/c/metatselnost/308" 
            target="_blank"
            rel="noopener noreferrer"
            className="flash-button block w-full h-full bg-[#FFD33D] text-[#121212] font-display font-bold text-center hover:bg-[#FFD33D]/90 transition-all whitespace-nowrap flex items-center justify-center"
            style={{ zIndex: 99999 }}
          >
            Анонсы событий
          </a>
        </div>
      )}

      <style jsx>{`
        @keyframes flash {
          0% { box-shadow: 0 0 5px #FFD33D, 0 0 10px #FFD33D; }
          50% { box-shadow: 0 0 20px #FFD33D, 0 0 30px #FFD33D; }
          100% { box-shadow: 0 0 5px #FFD33D, 0 0 10px #FFD33D; }
        }
        .flash-button {
          animation: flash 2s infinite;
          padding: 20px 0;
        }
        
        .fixed {
          position: fixed;
          width: 100%;
          z-index: 99999999;
          bottom: 0;
          left: 0;
          right: 0;
        }
      `}</style>
    </div>
  );
}
