import React, { useState } from "react";
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";
import TextSwap from "../Component/TextSwap";
import { Link } from "react-router-dom";

const Example = () => {
  return (
    <>
      <FlyoutNav />
    </>
  );
};

const FlyoutNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 250 ? true : false);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-black text-sm
      transition-all duration-300 ease-out lg:px-12
      ${
        scrolled
          ? "backdrop-blur py-3 shadow-xl bg-[#e8e8e8] bg-opacity-80"
          : "backdrop-blur py-4 shadow-none bg-[#e8e8e8] bg-opacity-80"
      }`}
    >
      <div className="mx-auto flex container items-center justify-between">
        <Logo scrolled={scrolled} />
        <div className="hidden gap-6 lg:flex">
          <Links />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

interface LogoProps{
  color?: string,
  scrolled: boolean
}

const Logo: React.FC<LogoProps> = ({ color = "black", scrolled }) => {
  return (
    <div className="items-center gap-2">
      <p className="text-xl font-bold" style={{ color }}>
        Sebastian Wang
      </p>
    
      {!scrolled && (
        <TextSwap
          strings={[
            "Service Designer",
            "Storyteller",
            "Inclusive Designer",
            "Innovation Strategist"
          ]}
          animationType="fade"
          animationDuration="5s"
          interval={3000}
        />
      )}
      
    </div>
  );
};

const Links = () => {
  return (
    <div className="flex items-center gap-6">
      {LINKS.map((l) => (
        <NavLink key={l.text} href={l.href} FlyoutContent={l.component}>
          {l.text}
        </NavLink>
      ))}
    </div>
  );
};

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: React.ComponentType; 
}

const NavLink: React.FC<NavLinkProps>  = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <Link to={href} className="relative hover:border-b-[3px] pb-1 hover:box-border border-[#DD663C] duration-300">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-orange-500 transition-transform duration-300 ease-out"
        />
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface MobileMenuLinkProps {
  children: React.ReactNode;
  href: string;
  FoldContent?: React.ComponentType; 
  setMenuOpen: (isOpen: boolean) => void; 
}


const MobileMenuLink: React.FC<MobileMenuLinkProps> = ({ children, href, FoldContent, setMenuOpen }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-neutral-950">
      {FoldContent ? (
        <div
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
          onClick={() => setOpen((pv) => !pv)}
        >
          <a
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            href={href}
          >
            {children}
          </a>
          <motion.div
            animate={{ rotate: open ? "180deg" : "0deg" }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <FiChevronDown />
          </motion.div>
        </div>
      ) : (
        <a
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(false);
          }}
          href="#"
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
        >
          <span>{children}</span>
          <FiArrowRight />
        </a>
      )}
      {FoldContent && (
        <motion.div
          initial={false}
          animate={{
            height: open ? "fit-content" : "0px",
            marginBottom: open ? "24px" : "0px",
            marginTop: open ? "12px" : "0px",
          }}
          className="overflow-hidden"
        >
          <FoldContent />
        </motion.div>
      )}
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(true)} className="block text-3xl">
        <FiMenu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
          >
            <div className="flex items-center justify-between p-6">
              <Logo color="black" scrolled={true} />
              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-neutral-950" />
              </button>
            </div>
            <div className="h-screen overflow-y-scroll bg-neutral-100 p-6">
              {LINKS.map((l) => (
                <MobileMenuLink
                  key={l.text}
                  href={l.href}
                  FoldContent={l.component}
                  setMenuOpen={setOpen}
                >
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Example;

const LINKS = [
  {
    text: "Home",
    href: "/",
    component: undefined,
  },
  {
    text: "About",
    href: "/about",
    component: undefined,
  },
  {
    text: "Projects",
    href: "/project",
    component: undefined,
  },
  {
    text: "Contact",
    href: "#",
    component: undefined,
  },
];