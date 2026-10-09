import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from './Button';
import ThemeToggle from './ThemeToggle';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu';

const serviceOfferings = [
  { name: 'Business Analysis', desc: 'Clarity before change & requirements', path: '/services#business-analysis' },
  { name: 'Product Management', desc: 'From idea to products that deliver value', path: '/services#product-management' },
  { name: 'Artificial Intelligence', desc: 'Practical AI for smarter business operations', path: '/services#artificial-intelligence' },
  { name: 'Data Analysis', desc: 'Clear insights & better decisions', path: '/services#data-analysis' },
  { name: 'DevOps Engineering', desc: 'Reliable systems & consistent delivery', path: '/services#devops-engineering' },
];



export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);

  const location = useLocation();

  const closeMenus = () => {
    setMobileMenuOpen(false);
  };

  // Handle ESC key to close mobile menu
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isServicesActive = location.pathname.startsWith('/services');


  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-[#070D1E]/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800 shadow-xs transition-colors duration-200">
      {/* Main Architectural Navigation Bar */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-3.5 sm:py-4 flex items-center justify-between">
        {/* Brand Identity */}
        <Link
          to="/"
          onClick={closeMenus}
          className="flex items-center gap-3.5 group no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue rounded"
          aria-label="ConvergeTec Home"
        >
          <img
            src="/logo-icon.svg"
            alt="ConvergeTec logo"
            className="h-8 w-8 object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-display font-bold text-2xl tracking-tight text-navy dark:text-white group-hover:text-blue transition-colors leading-none">
              ConvergeTec
            </span>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-400 mt-0.5">
              Transformation &amp; Technology
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (Switches at lg: 1024px to prevent tablet crowding) */}
        <nav
          className="hidden lg:flex items-center"
          aria-label="Main Navigation"
        >
          <NavigationMenu>
            <NavigationMenuList className="space-x-1">
              {/* 1. Home Link */}
              <NavigationMenuItem>
                <NavLink
                  to="/"
                  end
                  onClick={closeMenus}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors no-underline px-3.5 py-2 rounded-lg ${
                      isActive
                        ? 'text-navy dark:text-white font-semibold bg-slate-100/80 dark:bg-slate-800'
                        : 'text-slate-600 dark:text-slate-300 hover:text-navy dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
                    }`
                  }
                >
                  Home
                </NavLink>
              </NavigationMenuItem>

              {/* 2. About Link */}
              <NavigationMenuItem>
                <NavLink
                  to="/about"
                  onClick={closeMenus}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors no-underline px-3.5 py-2 rounded-lg ${
                      isActive
                        ? 'text-navy dark:text-white font-semibold bg-slate-100/80 dark:bg-slate-800'
                        : 'text-slate-600 dark:text-slate-300 hover:text-navy dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
                    }`
                  }
                >
                  About
                </NavLink>
              </NavigationMenuItem>

              {/* 3. Our Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`text-sm font-medium px-3.5 py-2 rounded-lg bg-transparent transition-colors ${
                    isServicesActive
                      ? 'text-navy dark:text-white font-semibold bg-slate-100/80 dark:bg-slate-800'
                      : 'text-slate-600 dark:text-slate-300 hover:text-navy dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  Our Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-2.5 bg-white dark:bg-[#0D162B] rounded-2xl shadow-xl border border-slate-200/90 dark:border-slate-800">
                  <div className="flex flex-col space-y-1 w-[380px]">
                    {serviceOfferings.map((service) => (
                      <NavLink
                        key={service.name}
                        to={service.path}
                        onClick={closeMenus}
                        className={({ isActive }) =>
                          `block px-3.5 py-2.5 rounded-xl no-underline transition-colors ${
                            isActive
                              ? 'bg-blue/5 dark:bg-blue/15 text-blue font-semibold'
                              : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:text-navy dark:hover:text-white'
                          }`
                        }
                      >
                        <span className="block text-sm font-semibold text-navy dark:text-white">{service.name}</span>
                        <span className="block text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-normal mt-0.5">
                          {service.desc}
                        </span>
                      </NavLink>
                    ))}
                    <div className="pt-2 mt-1 border-t border-slate-100 dark:border-slate-800">
                      <Link
                        to="/services"
                        onClick={closeMenus}
                        className="block px-3.5 py-2 text-sm font-semibold text-blue dark:text-cyan hover:text-navy dark:hover:text-white no-underline rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60"
                      >
                        View All Services Overview &rarr;
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* 5. Contact Link */}
              <NavigationMenuItem>
                <NavLink
                  to="/contact"
                  onClick={closeMenus}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors no-underline px-3.5 py-2 rounded-lg ${
                      isActive
                        ? 'text-navy dark:text-white font-semibold bg-slate-100/80 dark:bg-slate-800'
                        : 'text-slate-600 dark:text-slate-300 hover:text-navy dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Desktop Action CTA & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          <ThemeToggle />
          <Button
            to="/contact"
            variant="primary"
            onClick={closeMenus}
            className="px-5 py-2.5 text-sm font-display font-semibold rounded-md shadow-sm whitespace-nowrap"
          >
            Book Discovery Call
          </Button>
        </div>

        {/* Mobile & Tablet Toggle + Theme Toggle (< 1024px) */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:text-navy dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Navigation (< 1024px) */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-[73px] h-[calc(100dvh-73px)] bg-white dark:bg-[#070D1E] text-navy dark:text-white overflow-y-auto z-40 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="content-container py-8 flex flex-col min-h-full justify-between">
            <nav className="flex flex-col space-y-4 font-display text-xl" aria-label="Mobile Navigation Links">
              <NavLink
                to="/"
                end
                onClick={closeMenus}
                className={({ isActive }) =>
                  `py-2 transition-colors no-underline ${
                    isActive
                      ? 'text-blue font-bold pl-2 border-l-4 border-blue'
                      : 'text-slate-800 dark:text-slate-200 hover:text-blue'
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                onClick={closeMenus}
                className={({ isActive }) =>
                  `py-2 transition-colors no-underline ${
                    isActive
                      ? 'text-blue font-bold pl-2 border-l-4 border-blue'
                      : 'text-slate-800 dark:text-slate-200 hover:text-blue'
                  }`
                }
              >
                About
              </NavLink>

              {/* Services Mobile Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileAccordionOpen((prev) => !prev)}
                  className={`w-full flex items-center justify-between py-2 text-left font-display text-xl transition-colors cursor-pointer bg-transparent border-none ${
                    isServicesActive ? 'text-blue font-bold' : 'text-slate-800 dark:text-slate-200 hover:text-blue'
                  }`}
                  aria-expanded={mobileAccordionOpen}
                >
                  <span>Our Services</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      mobileAccordionOpen ? 'rotate-180 text-blue' : 'text-slate-400'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {mobileAccordionOpen && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-slate-200 dark:border-slate-800">
                    <NavLink
                      to="/services"
                      onClick={closeMenus}
                      className="block py-2 text-base font-semibold text-blue dark:text-cyan transition-colors no-underline"
                    >
                      All Services Overview &rarr;
                    </NavLink>
                    {serviceOfferings.map((service) => (
                      <NavLink
                        key={service.name}
                        to={service.path}
                        onClick={closeMenus}
                        className={({ isActive }) =>
                          `block py-1.5 text-base font-body transition-colors no-underline ${
                            isActive ? 'text-blue font-semibold' : 'text-slate-800 dark:text-slate-200 hover:text-blue'
                          }`
                        }
                      >
                        {service.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>


              <NavLink
                to="/contact"
                onClick={closeMenus}
                className={({ isActive }) =>
                  `py-2 transition-colors no-underline ${
                    isActive
                      ? 'text-blue font-bold pl-2 border-l-4 border-blue'
                      : 'text-slate-800 dark:text-slate-200 hover:text-blue'
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>

            <div className="pt-8 mt-8 border-t border-slate-200 dark:border-slate-800">
              <Button
                to="/contact"
                variant="primary"
                onClick={closeMenus}
                className="w-full py-3.5 text-base font-display rounded-xl"
              >
                Book a Discovery Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
