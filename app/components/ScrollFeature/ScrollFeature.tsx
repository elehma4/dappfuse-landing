"use client";

import {
    AdjustmentsVerticalIcon,
    ChartBarIcon,
    CloudArrowUpIcon,
    CubeIcon,
    FingerPrintIcon,
    SignalIcon,
  } from '@heroicons/react/20/solid'
import { ContainerScroll } from "../ui/container-scroll-animation";
import dashboard from "../../../public/images/dappFuse-dashboard.png";
import mobileDashboard from "../../../public/images/mobile-dashboard.png";
import { useEffect, useState } from 'react';
import Image from "next/image";

export const ScrollFeature: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const dashboardSrc = isMobile ? mobileDashboard : dashboard;

  const secondaryFeatures = [
    {
        name: 'Real-time Events',
        description: 'Capture real-time transactions on Ethereum, Polygon, Optimism, Arbitrum and Base.',
        icon: SignalIcon,
    },
    {
        name: 'On-chain Activity',
        description: "Track all forms of on-chain activity, from token and NFT transfers to the smart contract interactions.",
        icon: CubeIcon,
    },
    {
        name: 'Advanced Filters',
        description: 'Leverage advanced filters to create versatile marketing segments driven by on-chain customer behavior.',
        icon: AdjustmentsVerticalIcon,
    },
    {
        name: 'Marketing Connectors',
        description: 'No-code integrations to send on-chain data seamlessly to your digital marketing tools.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Identity SDK',
        description: 'Merge customer interactions from your web interfaces and apps with on-chain activity seamlessly.',
        icon: FingerPrintIcon,
    },
    {
        name: 'Live Monitoring',
        description: 'Get real-time stats and detailed monitoring of all your triggers and destinations.',
        icon: ChartBarIcon,
    },
  ];

  return (
      <div>
        {isMobile ? (
          <div className='my-40 mx-10'>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-[24] mb-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-base font-semibold leading-7 text-[#D95798]">Platform Features</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Integrated Web3 Marketing Platform</p>
              </div>
            </div>
            <Image
              src={dashboardSrc}
              alt="Mobile App screenshot"
              className="rounded-xl"
              width={1024}
              height={768}
            />
          </div>
        ) : (
        <ContainerScroll
          titleComponent={
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-[24]">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="text-base font-semibold leading-7 text-[#D95798]">Everything you need</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Integrate with ease.</p>
              </div>
            </div>
          }
        >
          <div className="overflow-hidden">
              <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-2">
                <Image
                    src={dashboardSrc}
                    alt="App screenshot"
                    className="rounded-xl"
                    width={2432}
                    height={1442}
                />
                <div className="relative" aria-hidden="true">
                    <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
                </div>
              </div>
          </div>
        </ContainerScroll>
        )}
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-[-6rem] md:mt-[-29rem] lg:mt-[-20rem] xl:mt-[-8rem]">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {secondaryFeatures.map((feature) => (
            <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-[#D95798]" aria-hidden="true" />
                {feature.name}
                </dt>{' '}
                <dd className="inline">{feature.description}</dd>
            </div>
            ))}
          </dl>
        </div>
      </div>
  );
}

