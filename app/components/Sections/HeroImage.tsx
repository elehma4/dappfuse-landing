"use client";

import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import superWide from "../../../public/images/super-wide.png"

const features = [
  {
    name: 'On-chain events',
    description:
      'Monitor and capture essential on-chain events, including token transfers, transactions involving NFTs, and smart contract activities',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Identity Resolution',
    description:
      "Use our SDK's to match Web3 users with Web2 ad and analytics identifiers, integrating on-chain data to enhance customer profiles",
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Marketing Destinations',
    description:
      'Connect on-chain events with your entire marketing stack and infuse your campaigns and reports web3 customer data',
    href: '#',
    icon: ArrowPathIcon,
  },
]

export const HeroImage: React.FC = () => {
  return (
    <div className="bg-gray-900 py-16 mt-32" id='info'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#D95798]">The Platform</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Activate Web3 Marketing Strategies
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Effortlessly monitor on-chain customer behavior and sync it in real-time with your existing marketing stack through DappFuse.
          </p>
        </div>
        <div className='w-full mx-auto flex justify-center'>
          <Image src={superWide} alt="dappfuse flow diagram" className='p-8 w-auto h-auto' />
        </div>
        <div className="mx-auto max-w-2xl mt-8 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-5 w-5 flex-none text-[#D95798]" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
