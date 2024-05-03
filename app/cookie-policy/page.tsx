"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo-main.png";
import { Footer } from "../components/Footer/Footer";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'

const CookiePolicy = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-screen bg-gray-900">
       <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-12" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">DappFuse</span>
              <Image
                className="h-11 w-auto"
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
          <div className="hidden lg:flex lg:flex-1 lg:justify-end hover:shadow-sm">
            <Link href="/#request-demo" className="rounded-md text-sm font-semibold leading-6 bg-[#D95798] text-white flex items-center gap-2 px-7 py-[0.55rem]">
              Request Demo {/* <span aria-hidden="true" className='transition-all duration-500 group-hover:translate-x-1'>&rarr;</span> */}
            </Link>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
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
                <div className="py-6">
                  <Link
                    href="/#request-demo"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-sm font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    Request Demo
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-gray-900 w-full">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-4 w-full h-full pb-24 pt-28 px-4 md:px-0">
            <div className="text-xl md:text-2xl text-gray-200">
              Cookie Policy for www.dappfuse.com
            </div>
            <div className="text-sm text-gray-400 mt-[-1rem]">
              updated: July 22, 2023
            </div>
            <div className="text-lg flex flex-col text-gray-300">
              1. Introduction
              <div className="text-sm text-gray-400">
                Dappfuse (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) understands the importance of your privacy and is committed to protecting it. This Cookie Policy explains how and why we use cookies on www.dappfuse.com (the &quot;Website&quot;). Please read this policy carefully.
              </div>
            </div>
            <div className="text-lg flex flex-col text-gray-300">
              2. What are Cookies
              <div className="text-sm text-gray-400">
                Cookies are small files which are stored on a user&apos;s computer. They are designed to hold a modest amount of data specific to a particular client and website and can be accessed either by the web server or the client computer. This allows the server to deliver a page tailored to a particular user, or the page itself can contain some script which is aware of the data in the cookie and can carry information from one visit to the website (or related site) to the next.
              </div>
            </div>
            <div className="text-lg flex flex-col text-gray-300">
              3. The Cookie We Use
              <div className="text-sm text-gray-400">
                Our Website uses only one type of first-party cookie. This is an essential cookie, and it is required for the operation of our Website. It does not track your activity or gather information about you beyond your use of our Website.
              </div>
            </div>
            <div className="text-lg flex flex-col text-gray-300">
              Specifically, we use:
              <div className="text-sm text-gray-400">
                &apos;_df&apos; cookie: This is used to maintain user sessions and to carry information across pages of our Website and prevent the need for re-entry of information. It is essential for parts of the Website to operate. This cookie expires after 30 minutes of inactivity.
              </div>
            </div>
            <div className="text-lg flex flex-col text-gray-300">
              4. Managing and Disabling Cookies
              <div className="text-sm text-gray-400">
                You can choose to enable or disable Cookies in your internet browser. Most internet browsers also enable you to choose whether you wish to disable all cookies or only third-party cookies. By default, most internet browsers accept cookies, but this can be changed.
                <br />
                For further details, consult the Help menu in your internet browser or the documentation that came with your device. Please note that disabling the &apos;_df&apos; cookie may impact the functionality of our Website.
              </div>
            </div>
            <div className="text-lg flex flex-col text-gray-300">
              5. Changes to this Cookie Policy
              <div className="text-sm text-gray-400">
                We may alter this Cookie Policy at any time. Any such changes will become binding on you on your first use of our Website after the changes have been made. You are therefore advised to check this page from time to time.
              </div>
            </div>
            <div className="text-lg flex flex-col text-gray-300">
              6. More Information
              <div className="text-sm text-gray-400">
                For more information about privacy, data protection and our terms and conditions, please visit our Privacy Policy page.
                <br />
                In the event of any queries or concerns about this Cookie Policy, please contact us at gm@dappfuse.com.
              </div>
            </div>
            <div className="text-lg flex flex-col text-gray-300">
              7. Consent
              <div className="text-sm text-gray-400">
                By continuing to use our Website, you are agreeing to the placement of our &apos;_df&apos; cookie on your device in accordance with this Cookie Policy. If you do not wish to accept our &apos;_df&apos; cookie in accordance with this Policy, please stop using our site immediately, or disable the relevant cookie function in your browser.
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CookiePolicy;