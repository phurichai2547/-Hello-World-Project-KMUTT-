import { Analytics } from "@vercel/analytics/react";
import { useScroll } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import About from "./components/About";
import HeroBanner from "./components/HeroBanner";
import NavBar from "./components/Nav";
import StickyLinks from "./components/Social";
import Team from "./components/Team";
import usePageStore from "./stores/pageStore";
import Events from "./components/Events";
import Faqs from "./components/Faqs";
import Game from "./components/Game";

function App() {
  const { setPage } = usePageStore();

  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const eventRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const navTo = useCallback(
    (path: string) => {
      setPage(path);
      const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
        "/": heroRef,
        "/about": aboutRef,
        "/teams": teamRef,
        "/events": eventRef,
        "/faqs": faqRef,
        "/game": gameRef,
      };
      const offsetTop = refs[path].current?.offsetTop;
      if (offsetTop !== undefined) {
        window.scrollTo({ top: offsetTop!, behavior: "smooth" });
      }
    },
    [setPage],
  );

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const [isLogoVisible, setIsLogoVisible] = useState(false);

  // Initial scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      if (latest >= 1) {
        setIsLogoVisible(true);
      } else {
        setIsLogoVisible(false);
      }
    });
  }, [scrollYProgress]);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = [
        { page: "/", ref: heroRef },
        { page: "/about", ref: aboutRef },
        { page: "/teams", ref: teamRef },
        { page: "/events", ref: eventRef },
        { page: "/faqs", ref: faqRef },
        { page: "/game", ref: gameRef },
      ];
      const currentScroll = window.scrollY + window.innerHeight / 2;

      for (let i = offsets.length - 1; i >= 0; i--) {
        const offsetTop = offsets[i].ref.current?.offsetTop || 0;
        if (currentScroll >= offsetTop) {
          setPage(offsets[i].page);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setPage]);

  return (
    <div className="flex min-h-screen flex-col items-center overflow-hidden">
      <NavBar isLogoVisible={isLogoVisible} navTo={navTo} />
      <HeroBanner ref={heroRef} />
      <About ref={aboutRef} />
      <Team ref={teamRef} />
      <Events ref={eventRef} />
      <Faqs ref={faqRef} />
      <Game ref={gameRef} />
      <StickyLinks />
      <Analytics />
    </div>
  );
}

export default App;
