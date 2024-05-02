import { ArrowTrendingUpIcon, ArrowPathIcon, PuzzlePieceIcon } from '@heroicons/react/20/solid'
import destinations from "../../../public/images/destinations.png"
import Image from 'next/image'

const features = [
  {
    name: 'Customer Journey',
    description:
      "By integrating web3 customer interactions with your analytics solutions you'll be able to create a complete customer journey.",
    icon: PuzzlePieceIcon,
  },
  {
    name: 'Targeted Advertising',
    description: 'Match Web3 audiences with demand-side advertising platforms to precisely target on-chain customer actions.',
    icon: ArrowTrendingUpIcon,
  },
  {
    name: 'Marketing Automation',
    description: 'Connect your marketing automation platform to trigger email campaigns based on on-chain events.',
    icon: ArrowPathIcon,
  },
]

export const ProductFeature: React.FC = () => {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32  mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-[#D95798]">Web3 Marketing</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Data-Driven Marketing for the Next Digital Era</p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Today, many brands overlook the potential of Web3 data, missing key customer interactions. Activating Web3 data opens up a spectrum of new use cases.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
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
          <Image
            src={destinations}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
