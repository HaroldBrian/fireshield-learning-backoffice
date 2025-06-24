'use client';
import { toSentenceCase } from '@/helpers';
import { cn } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { LuChevronDown, LuDownloadCloud, LuMenu, LuX } from 'react-icons/lu';
import { landingPages } from '@/assets/data';

import logoDark from '@/assets/images/logo-dark.png';
import logoLight from '@/assets/images/logo-light.png';

const TopNavBar = ({
  menuItems,
  position,
  hasDownloadButton,
}: {
  menuItems: string[];
  position: 'sticky' | 'fixed';
  hasDownloadButton?: boolean;
}) => {

  const navbarRef = useRef<HTMLDivElement>(null);
  const hash = window.location.hash;
  const pathname = usePathname();
  
  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      e.preventDefault();
      activeSection();
      if (navbarRef.current) {
        if (window.scrollY >= 80) navbarRef.current.classList.add('nav-sticky');
        else navbarRef.current.classList.remove('nav-sticky');
      }
    });

    const timeout = setTimeout(() => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: 'instant' });
      }
    }, 0);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', activeSection);
    };
  }, []);

  const [activation, setActivation] = useState<string>(menuItems[0]);

  const activeSection = () => {
    const scrollY = window.scrollY;

    for (let i = menuItems.length - 1; i >= 0; i--) {
      const section = menuItems[i];
      const el: HTMLElement | null = document.getElementById(section)
      if (el && el.offsetTop <= scrollY + 100) {
        setActivation(section);
        return;
      }
    }
  };

  return (
    <>
      <header
        ref={navbarRef}
        id="navbar"
        className={cn(
          position,
          'inset-x-0 top-0 z-[60] w-full  border-b border-transparent bg-white transition-all duration-300 dark:bg-default-50 lg:bg-transparent [&.nav-sticky]:bg-white/90 [&.nav-sticky]:shadow-md [&.nav-sticky]:backdrop-blur-3xl dark:[&.nav-sticky]:bg-default-50/80'
        )}
      >
        <div className="flex h-full items-center py-4">
          <div className="container">
            <nav className="flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
              <div className="flex w-full items-center justify-between lg:w-auto">
                <Link href="/">
                  <Image
                    src={logoDark}
                    alt="logo"
                    height={40}
                    width={147}
                    className="flex h-10 dark:hidden"
                  />
                  <Image
                    src={logoLight}
                    alt="logo"
                    height={40}
                    width={147}
                    className="hidden h-10 dark:flex"
                  />
                </Link>
                <div className="flex items-center gap-2">
                  {hasDownloadButton && (
                    <div className="inline-flex shrink gap-2 lg:hidden">
                      <Link href="" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-1.5 text-base text-white transition-all hover:bg-primary-700">
                        <LuDownloadCloud className="h-4 w-4 fill-white/40" />
                        <span className="hidden sm:block">Download</span>
                      </Link>
                    </div>
                  )}
                  <button
                    className="hs-collapse-toggle inline-block lg:hidden"
                    data-hs-overlay="#mobile-menu"
                  >
                    <LuMenu className="h-7 w-7 text-default-600 hover:text-default-900" />
                  </button>
                </div>
              </div>
              <ul className="menu relative mx-auto hidden grow items-center justify-center lg:flex">
                {menuItems.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className={cn(
                        'menu-item mx-2 text-default-800 transition-all duration-300 hover:text-primary [&.active]:text-primary',
                        activation === item && 'active'
                      )}
                    >
                      <Link
                        className="inline-flex items-center rounded-full px-2 py-0.5 text-sm font-medium capitalize lg:text-base"
                        href={`#${item}`}
                      >
                        {toSentenceCase(item)}
                      </Link>
                    </li>
                  );
                })}
                <li className="menu-item group">
                  <div className="hs-dropdown relative inline-flex [--trigger:hover] [--placement:bottom]">
                    <Link
                      className="hs-dropdown-toggle inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-default-700 after:absolute after:inset-0 hover:text-primary group-hover:after:-bottom-16 lg:text-base"
                      href=""
                    >
                      Landing <LuChevronDown className="ms-2 h-4 w-4" />
                    </Link>
                    <div className="hs-dropdown-menu z-10 mt-4 hidden min-w-48 rounded-lg border border-default-100 bg-white p-1.5 opacity-0 shadow-lg transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50">
                      <ul className="flex flex-col gap-1">
                        {landingPages.map((item, idx) => {
                          return (
                            <li key={idx}>
                              <Link
                                className={cn(
                                  'flex items-center rounded px-3 py-2 text-sm font-medium text-default-600 transition-all hover:bg-default-400/10 hover:text-default-700 [&.active]:text-primary',
                                  pathname === item.link && 'active'
                                )}
                                href={item.link}
                              >
                                {item.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="ms-auto hidden shrink gap-2 lg:inline-flex">
                <Link
                  href=""
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-1.5 text-base text-white transition-all hover:bg-primary-700"
                >
                  <LuDownloadCloud className="h-4 w-4 fill-white/40" />
                  <span className="hidden sm:block">Download</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      <div
        id="mobile-menu"
        className="hs-overlay fixed bottom-0 left-0 top-0 z-[61] hidden h-screen w-full max-w-[270px] -translate-x-full transform border-r border-default-200 bg-white transition-all [--body-scroll:true] [--overlay-backdrop:false] hs-overlay-open:translate-x-0 dark:bg-default-50"
        tabIndex={-1}
      >
        <div className="flex h-[74px] items-center justify-between border-b border-dashed border-default-200 px-4 transition-all duration-300">
          <Link href="/">
            <Image
              src={logoDark}
              alt="logo"
              height={40}
              width={147}
              className="flex h-10 dark:hidden"
            />
            <Image
              src={logoLight}
              alt="logo"
              height={40}
              width={147}
              className="hidden h-10 dark:flex"
            />
          </Link>
          <div data-hs-overlay="#mobile-menu" className="hs-collapse-toggle">
            <LuX size={24} />
          </div>
        </div>
        <div className="h-[calc(100%-4rem)] overflow-y-auto">
          <nav className="hs-accordion-group flex h-full w-full flex-col flex-wrap p-4">
            <ul className="space-y-1">
              {menuItems.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className={cn(
                      'rounded text-sm font-medium capitalize text-default-900 transition-all duration-300 hover:bg-default-100 hover:text-primary [&.active]:bg-default-100 [&.active]:text-primary',
                      activation == `${item}` && 'active'
                    )}
                  >
                    <a className="block w-full px-4 py-2.5" href={`#${item}`}>
                      {toSentenceCase(item)}
                    </a>
                  </li>
                );
              })}

              <li className="hs-accordion" id="landing-accordion">
                <Link
                  className="hs-accordion-toggle flex items-center rounded px-4 py-2.5 text-sm font-medium capitalize text-default-900 transition-all duration-300 hover:bg-default-100 hover:text-primary hs-accordion-active:bg-default-400/10 [&.active]:bg-default-100 [&.active]:text-primary"
                  href=""
                >
                  Landing
                  <LuChevronDown className="ms-auto size-5 transition-all hs-accordion-active:rotate-180" />
                </Link>
                <div
                  id="landing-accordion"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height]"
                >
                  <ul className="ps-2 pt-2">
                    {landingPages.map((item, idx) => {
                      return (
                        <li key={idx}>
                          <Link
                            className={cn(
                              'flex items-center rounded px-3 py-2 text-sm font-medium text-default-600 transition-all hover:bg-default-400/10 hover:text-default-700 [&.active]:text-primary',
                              pathname === item.link && 'active'
                            )}
                            href={item.link}
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default TopNavBar;
