import {
    ArrowPathIcon,
    ChevronRightIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
  } from '@heroicons/react/20/solid'
import { ContainerScroll } from "../ui/container-scroll-animation";
import dashboard from "../../../public/images/dappFuse-dashboard.png"
import Image from "next/image";


export const ScrollFeature: React.FC = () => {

  const secondaryFeatures = [
    {
        name: 'Onboard with ease.',
        description: 'Simplify your entry into web3 marketing. Easily integrate on-chain data into your analytics platform.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Data safeguard.',
        description: "Build a reliable data pipeline, ensuring continuous and secure data flow for your marketing needs.",
        icon: LockClosedIcon,
    },
    {
        name: 'Sync live events.',
        description: 'Enhance your analytics with real-time data for your marketing and product strategies.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Digital identification.',
        description: 'Improve customer profiling on your platform. Create user personas and improve targeting.',
        icon: FingerPrintIcon,
    },
    {
        name: 'Powerful API.',
        description: 'Leverage our robust platform to customize and extend the capabilities of your marketing stack.',
        icon: Cog6ToothIcon,
    },
    {
        name: 'Database backups.',
        description: 'Ensuring your on-chain data is preserved, consistent, and recoverable in any scenario.',
        icon: ServerIcon,
    },
  ];

  return (
      <div>
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
                src={dashboard}
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
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

