"use client";

import { CardBody, CardContainer, CardItem } from "../ui/3d-card"
import connect from "../../../public/images/connect.png"
import chainEvent from "../../../public/images/chain-event.png"
import identity from "../../../public/images/identity-print.png"
import Image from 'next/image'

export const InfoCardSection: React.FC = () => {
  const primaryFeatures = [
    {
      name: 'Set On-Chain Triggers',
      description: 'Create on-chain triggers for wallet addresses, smart contracts and protocols to capture web3 data',
      href: '#',
      icon: chainEvent,
    },
    {
      name: 'Marketing Connectors',
      description: 'Infuse web3 customer data into your existing marketing stack by connecting on-chain events. ',
      href: '#',
      icon: connect,
    },
    {
      name: 'Identity Resolution',
      description: 'Resolve web3 domains to real world identities and stitch your customer profiles with on-chain data',
      href: '#',
      icon: identity,
    },
  ];

  return (
    <div className="mx-auto pt-32 max-w-7xl px-6 lg:px-8" id="info">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-base font-semibold leading-7 text-[#D95798]">Identify trends</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Transform data into action
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Automagically push on-chain customer events to tools like Google Analytics, Hubspot, Salesforce CRM and many more
        </p>
      </div>
      <div className="mx-auto max-w-2xl lg:max-w-none flex justify-center">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {primaryFeatures.map((feature) => (
            <CardContainer key={feature.name}>
              <div key={feature.name} className="flex flex-col p-8 rounded-3xl bg-gradient-to-b to-[rgba(217,87,152,0.67)] from-[rgba(136,68,102,0.20)] shadow-lg cursor-pointer">
                <dt className="text-base font-semibold leading-7 text-white mx-auto text-center mb-2">
                  <CardItem>
                    <Image src={feature.icon} className="w-60 text-white mb-6" aria-hidden="true" alt={feature.name} />
                  </CardItem>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto text-center">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-white flex justify-center">
                      Learn more<span className='ml-2' aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            </CardContainer>
          ))}
        </dl>
      </div>
    </div>
  )
}