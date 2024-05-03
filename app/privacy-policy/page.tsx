"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo-main.png";
import { Footer } from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'

const PrivacyPolicy = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Hide horizontal scrollbar
    document.body.style.overflowX = 'hidden';
  }, []);

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
          <div className="flex flex-col gap-4 w-full h-full py-24 px-4 md:px-0">
            <div className="text-xl md:text-2xl text-gray-200">
              Dappfuse Privacy Policy
            </div>
            <div className="text-lg flex flex-col text-gray-300">
              1. Introduction
              <div className="text-sm text-gray-400">
                  Welcome to Dappfuse! We are committed to protecting the privacy and security of our customers&apos; data. This privacy policy aims to give you information on how we collect and process your personal data through your use of our services, in compliance with the General Data Protection Regulation (GDPR).
              </div>
            </div>
            <div className="text-lg flex flex-col text-gray-300">
              2. The Data We Collect
              <div className="text-sm text-gray-400">
                  As part of our services, we collect and process certain information. This includes data you provide when you create an account, including name, email address, company information, and any relevant billing information. We also collect data about how you use our services, such as login information, activity details, and data related to the transactions you track through our platform.
              </div>
            </div>
            <div className="text-lg flex flex-col text-gray-300">
              3. How We Use Your Data
              <div className="text-sm text-gray-400">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to perform the contract we are about to enter into or have entered into with you, to provide you with our services, and to manage our relationship with you. We do not share or sell any customer data with third parties or subsidiaries.
              </div>
            </div>
            <div className="text-lg flex flex-col text-gray-300">
              4. Data Retention
              <div className="text-sm text-gray-400">
                  We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. This means that we retain your data for as long as you have an account with us.
              </div>
            </div>
            <div className="text-lg flex flex-col text-gray-300">
              5. Your Legal Rights
              <div className="text-sm text-gray-400">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data. These rights include the right to request access, correction, erasure, restriction, transfer, or to object to the processing of your personal data. To exercise these rights, you can send us an email at gm@dappfuse.com, or manage your account information at www.dappfuse.com.
              </div>
            </div>
            <div className="text-lg flex flex-col text-gray-300">
              6. Contact Details
              <div className="text-sm text-gray-400">
                  Our full details are:
                  <br /><br />
                  Full Name of Legal Entity: Dappfuse LLC, 2810 N CHURCH ST. NUM 669469, WILMINGTON, DE 19802
                  Email address: gm@dappfuse.com
                  For all data matters, you may contact us via email at gm@dappfuse.com.
                  <br /><br />
                  This policy was last updated on 06/24/2023. Please check back regularly to see any updates or changes to our privacy policy.
              </div>
            </div>
          </div>
        </div>
        <Footer />

      </div>
    </div>
  );
};

export default PrivacyPolicy;