import Image from 'next/image'
import React from 'react'
import eth from "../../../public/images/chains/ether.png"
import arb from "../../../public/images/chains/arb.png"
import base from "../../../public/images/chains/base.svg"
import poly from "../../../public/images/chains/poly.png"
import opt from "../../../public/images/chains/opt.svg"

export const LogoCloud: React.FC = () => {
  return (
    <div className="mx-auto mt-28 max-w-7xl px-6 lg:px-8">
      <h2 className="text-center text-lg font-semibold leading-8 text-white mb-8 tracking-wider">
        {"SUPPORTED NETWORKS"}
      </h2>
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={eth}
            alt="ethereum"
            width={158}
            height={48}
        />
        <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={arb}
            alt="Reform"
            width={158}
            height={48}
        />
        <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={base}
            alt="Tuple"
            width={158}
            height={48}
        />
        <Image
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={poly}
            alt="SavvyCal"
            width={158}
            height={48}
        />
        <Image
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={opt}
            alt="Statamic"
            width={158}
            height={48}
        />
      </div>
  </div>
  );
}