"use client";

import logo from "../../../public/images/logo-main.png"
import { Bars3Icon, ChevronDoubleDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useSmoothScroll } from "@/app/utils/smooth-scroll";
import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import Image from 'next/image'
import Link from "next/link";

// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Company', href: '/#team' },
// ]

export const Hero: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const smoothScrollTo = useSmoothScroll();

  const handleNavLinkClick = (event: any, href: string) => {
    event.preventDefault();
    const id = href.split('#')[1];
    if (id) {
      smoothScrollTo(id)
    }
  }

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 h-screen">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
      <defs>
        <pattern
          id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
          width={200}
          height={200}
          x="50%"
          y={-1}
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-29rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#D95798] to-[#884466] opacity-20"
          style={{
          clipPath:
            'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div>
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-12" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">DappFuse</span>
              <Image
                className="h-12 w-auto"
                src={logo}
                alt=""
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} onClick={(e) => handleNavLinkClick(e, item.href)} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </Link>
            ))}
          </div> */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end hover:shadow-sm">
            {/* <Link href="https://platform.dappfuse.com/" className="rounded-md text-sm font-semibold border-2 border-[#D95798] text-white bg-transparent bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70 px-5 py-[0.55rem] shadow-sm mr-[0.67rem]">
              Request Demo
            </Link> */}
            <Link href="/#request-demo" className="rounded-md text-sm font-semibold leading-6 bg-[#D95798] text-white flex items-center gap-2 px-7 py-[0.55rem]">
              Request Demo {/* <span aria-hidden="true" className='transition-all duration-500 group-hover:translate-x-1'>&rarr;</span> */}
            </Link>

          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link href="#/Company" className="-m-1.5 p-1.5">
                <span className="sr-only">DappFuse</span>
                <Image
                  className="h-12 w-auto"
                  src={logo}
                  alt="dappfuse logo"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                {/* <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div> */}
                <div className="py-6">
                  <Link
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    Request Demo
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate overflow-hidden pt-14">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              {"The World's First On-Chain Data Platform for Marketers"}
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-6xl tracking-tight">
              Unlock Web3 Insights
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Connect the dots of your digital customer journey<br />by capturing on-chain data with your existing marketing tools
            </p>
            <div className="my-16 flex flex-col items-center justify-center gap-x-8 cursor-pointer">
              <div className="flex flex-col justify-center content-center absolute bottom-0">
                <Link href="/#info" className="w-full flex flex-col justify-center content-center">
                  <div
                    className="rounded-3xl hover:rounded-md transition-all duration-500 text-[2.1rem] text-[#D95798] shadow-sm m-auto font-extralight leading-7 mb-3"
                  >
                    Explore
                  </div>
                  <div className="flex justify-center mt-4 w-20 m-auto">
                    <ChevronDoubleDownIcon className="text-[#D95798] ease-in duration-300 shadow-md hover:shadow-lg shadow-[#D95798] hover:shadow-[#D95798] p-[1.555rem] rounded-full font-medium mb-5" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
