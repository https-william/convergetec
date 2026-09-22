import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from './Button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu';

const serviceLinks = [
  { name: 'Consulting', desc: 'Operating models & strategic advisory', path: '/services/consulting' },
  { name: 'Digital & Software', desc: 'Custom cloud SaaS & enterprise APIs', path: '/services/digital-software' },
  { name: 'Academy', desc: 'Workforce transformation masterclasses', path: '/services/academy' },
  { name: 'Resources & Talent', desc: 'Fractional executives & specialist squads', path: '/services/resources-talent' },
];

const productLinks = [
  { name: 'Motor App', desc: 'Automated motor claims, fleet telematics & assessment', path: '/products#motor-app' },
  { name: 'Policy Vault', desc: 'Enterprise compliance repository & policy governance', path: '/products#policy-vault' },
  { name: 'Big Converge', desc: 'Unified real-time data pipeline & integration engine', path: '/products#big-converge' },
  { name: 'Remicon', desc: 'Automated high-volume remittance & ledger reconciliation', path: '/products#remicon' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);
  const [mobileProductsAccordionOpen, setMobileProductsAccordionOpen] = useState(false);
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
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isServicesActive = location.pathname.startsWith('/services');
  const isProductsActive = location.pathname.startsWith('/products');

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
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
            <span className="font-display font-bold text-2xl tracking-tight text-navy group-hover:text-blue transition-colors leading-none">
              ConvergeTec
            </span>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 mt-0.5">
              Transformation &amp; Technology
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center"
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
                        ? 'text-navy font-semibold bg-slate-100/80'
                        : 'text-slate-600 hover:text-navy hover:bg-slate-50'
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
                        ? 'text-navy font-semibold bg-slate-100/80'
                        : 'text-slate-600 hover:text-navy hover:bg-slate-50'
                    }`
                  }
                >
                  About
                </NavLink>
              </NavigationMenuItem>

              {/* 3. Practice Divisions Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`text-sm font-medium px-3.5 py-2 rounded-lg bg-transparent transition-colors ${
                    isServicesActive
                      ? 'text-navy font-semibold bg-slate-100/80'
                      : 'text-slate-600 hover:text-navy hover:bg-slate-50'
                  }`}
                >
                  Practice Divisions
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-2.5 bg-white rounded-2xl shadow-xl">
                  <div className="flex flex-col space-y-1 w-[360px]">
                    {serviceLinks.map((service) => (
                      <NavLink
                        key={service.path}
                        to={service.path}
                        onClick={closeMenus}
                        className={({ isActive }) =>
                          `block px-3.5 py-2.5 rounded-xl no-underline transition-colors ${
                            isActive
                              ? 'bg-blue/5 text-blue font-semibold'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-navy'
                          }`
                        }
                      >
                        <span className="block text-sm font-semibold">{service.name}</span>
                        <span className="block text-xs text-slate-500 font-normal mt-0.5">
                          {service.desc}
                        </span>
                      </NavLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* 4. Our Products Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`text-sm font-medium px-3.5 py-2 rounded-lg bg-transparent transition-colors ${
                    isProductsActive
                      ? 'text-navy font-semibold bg-slate-100/80'
                      : 'text-slate-600 hover:text-navy hover:bg-slate-50'
                  }`}
                >
                  Our Products
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-2.5 bg-white rounded-2xl shadow-xl">
                  <div className="flex flex-col space-y-1 w-[380px]">
                    {productLinks.map((product) => (
                      <NavLink
                        key={product.name}
                        to={product.path}
                        onClick={closeMenus}
                        className="block px-3.5 py-2.5 rounded-xl no-underline transition-colors text-slate-700 hover:bg-slate-50 hover:text-navy"
                      >
                        <span className="block text-sm font-semibold">{product.name}</span>
                        <span className="block text-xs text-slate-500 font-normal mt-0.5">
                          {product.desc}
                        </span>
                      </NavLink>
                    ))}
                    <div className="pt-2 mt-1 border-t border-slate-100">
                      <Link
                        to="/products"
                        onClick={closeMenus}
                        className="block px-3.5 py-2 text-xs font-semibold text-blue hover:text-navy no-underline rounded-lg hover:bg-slate-50"
                      >
                        View All Products Overview &rarr;
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
                        ? 'text-navy font-semibold bg-slate-100/80'
                        : 'text-slate-600 hover:text-navy hover:bg-slate-50'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Desktop Action CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            to="/contact"
            variant="primary"
            onClick={closeMenus}
            className="px-5 py-2.5 text-sm font-display font-semibold rounded-md shadow-sm"
          >
            Book Discovery Call
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="p-2 text-slate-700 hover:text-navy focus:outline-none"
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

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-[73px] bottom-0 bg-white text-navy overflow-y-auto z-40 border-t border-slate-200"
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
                    isActive ? 'text-blue font-bold pl-2 border-l-4 border-blue' : 'text-slate-800 hover:text-blue'
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
                    isActive ? 'text-blue font-bold pl-2 border-l-4 border-blue' : 'text-slate-800 hover:text-blue'
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
                    isServicesActive ? 'text-blue font-bold' : 'text-slate-800 hover:text-blue'
                  }`}
                  aria-expanded={mobileAccordionOpen}
                >
                  <span>Practice Divisions</span>
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
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-slate-200">
                    {serviceLinks.map((service) => (
                      <NavLink
                        key={service.path}
                        to={service.path}
                        onClick={closeMenus}
                        className={({ isActive }) =>
                          `block py-2 text-base font-body transition-colors no-underline ${
                            isActive ? 'text-blue font-semibold' : 'text-slate-600 hover:text-blue'
                          }`
                        }
                      >
                        {service.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Products Mobile Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileProductsAccordionOpen((prev) => !prev)}
                  className={`w-full flex items-center justify-between py-2 text-left font-display text-xl transition-colors cursor-pointer bg-transparent border-none ${
                    isProductsActive ? 'text-blue font-bold' : 'text-slate-800 hover:text-blue'
                  }`}
                  aria-expanded={mobileProductsAccordionOpen}
                >
                  <span>Our Products</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      mobileProductsAccordionOpen ? 'rotate-180 text-blue' : 'text-slate-400'
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

                {mobileProductsAccordionOpen && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-slate-200">
                    {productLinks.map((product) => (
                      <NavLink
                        key={product.name}
                        to={product.path}
                        onClick={closeMenus}
                        className={({ isActive }) =>
                          `block py-2 text-base font-body transition-colors no-underline ${
                            isActive ? 'text-blue font-semibold' : 'text-slate-600 hover:text-blue'
                          }`
                        }
                      >
                        {product.name}
                      </NavLink>
                    ))}
                    <Link
                      to="/products"
                      onClick={closeMenus}
                      className="block py-2 text-sm font-semibold text-blue no-underline"
                    >
                      View All Products &rarr;
                    </Link>
                  </div>
                )}
              </div>

              <NavLink
                to="/contact"
                onClick={closeMenus}
                className={({ isActive }) =>
                  `py-2 transition-colors no-underline ${
                    isActive ? 'text-blue font-bold pl-2 border-l-4 border-blue' : 'text-slate-800 hover:text-blue'
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>

            <div className="pt-8 mt-8 border-t border-slate-200">
              <Button
                to="/contact"
                variant="primary"
                onClick={closeMenus}
                className="w-full py-3.5 text-base font-display rounded-md"
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
