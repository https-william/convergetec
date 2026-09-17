import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const serviceLinks = [
  { name: 'Consulting', path: '/services/consulting' },
  { name: 'Digital & Software', path: '/services/digital-software' },
  { name: 'Academy', path: '/services/academy' },
  { name: 'Resources & Talent', path: '/services/resources-talent' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setDesktopDropdownOpen(false);
  };

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle ESC key to close menus
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        setDesktopDropdownOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header className="bg-navy border-b border-navy-light sticky top-0 z-50">
      <div className="content-container py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={closeMenus}
          className="flex items-center gap-3 group no-underline focus-visible:outline-cyan"
          aria-label="ConvergeTec Home"
        >
          <img
            src="/logo.png"
            alt="ConvergeTec"
            className="h-8 w-auto object-contain"
          />
          <span className="font-display font-bold text-xl text-white tracking-wide group-hover:text-cyan transition-colors">
            ConvergeTec
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          <NavLink
            to="/"
            end
            onClick={closeMenus}
            className={({ isActive }) =>
              `text-sm font-medium transition-colors no-underline pb-1 border-b-2 ${
                isActive
                  ? 'text-cyan border-cyan font-semibold'
                  : 'text-offwhite/85 hover:text-cyan border-transparent'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenus}
            className={({ isActive }) =>
              `text-sm font-medium transition-colors no-underline pb-1 border-b-2 ${
                isActive
                  ? 'text-cyan border-cyan font-semibold'
                  : 'text-offwhite/85 hover:text-cyan border-transparent'
              }`
            }
          >
            About
          </NavLink>

          {/* Services Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDesktopDropdownOpen(true)}
            onMouseLeave={() => setDesktopDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setDesktopDropdownOpen((prev) => !prev)}
              aria-expanded={desktopDropdownOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors no-underline pb-1 border-b-2 bg-transparent cursor-pointer ${
                isServicesActive
                  ? 'text-cyan border-cyan font-semibold'
                  : 'text-offwhite/85 hover:text-cyan border-transparent'
              }`}
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  desktopDropdownOpen ? 'rotate-180 text-cyan' : 'text-offwhite/60'
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

            {/* Dropdown Menu */}
            {desktopDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-56 rounded-lg bg-navy-light border border-navy/40 shadow-xl py-2 z-50 backdrop-blur-sm"
                role="menu"
                aria-label="Services submenu"
              >
                {serviceLinks.map((service) => (
                  <NavLink
                    key={service.path}
                    to={service.path}
                    role="menuitem"
                    onClick={closeMenus}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 text-sm transition-colors no-underline ${
                        isActive
                          ? 'text-cyan bg-navy font-semibold border-l-2 border-cyan'
                          : 'text-offwhite/80 hover:text-cyan hover:bg-navy/60'
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
              `text-sm font-medium transition-colors no-underline pb-1 border-b-2 ${
                isActive
                  ? 'text-cyan border-cyan font-semibold'
                  : 'text-offwhite/85 hover:text-cyan border-transparent'
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            onClick={closeMenus}
            className="bg-blue hover:bg-cyan text-white hover:text-navy font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 text-sm inline-flex items-center justify-center no-underline shadow-sm"
          >
            Book a Discovery Call
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="text-offwhite hover:text-cyan p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
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

      {/* Mobile Full-Screen Navigation */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-[73px] bottom-0 bg-navy text-offwhite overflow-y-auto z-40 border-t border-navy-light"
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
                    isActive ? 'text-cyan font-bold pl-2 border-l-4 border-cyan' : 'text-offwhite hover:text-cyan'
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
                    isActive ? 'text-cyan font-bold pl-2 border-l-4 border-cyan' : 'text-offwhite hover:text-cyan'
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
                    isServicesActive ? 'text-cyan font-bold' : 'text-offwhite hover:text-cyan'
                  }`}
                  aria-expanded={mobileAccordionOpen}
                >
                  <span>Services</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      mobileAccordionOpen ? 'rotate-180 text-cyan' : 'text-offwhite/60'
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
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-navy-light">
                    {serviceLinks.map((service) => (
                      <NavLink
                        key={service.path}
                        to={service.path}
                        onClick={closeMenus}
                        className={({ isActive }) =>
                          `block py-2 text-base font-body transition-colors no-underline ${
                            isActive
                              ? 'text-cyan font-semibold'
                              : 'text-offwhite/70 hover:text-cyan'
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
                    isActive ? 'text-cyan font-bold pl-2 border-l-4 border-cyan' : 'text-offwhite hover:text-cyan'
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>

            <div className="pt-8 mt-8 border-t border-navy-light">
              <Link
                to="/contact"
                onClick={closeMenus}
                className="w-full bg-blue hover:bg-cyan text-white hover:text-navy font-semibold px-6 py-3.5 rounded-lg transition-colors duration-200 text-center text-lg block no-underline font-body shadow"
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
