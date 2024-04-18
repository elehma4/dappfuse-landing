"use client";

import nicolas from "../../../public/images/profile_nico.jpg";
import ian from "../../../public/images/profile_ian.jpg";
import matt from "../../../public/images/profile_matt.jpg";
import jack from "../../../public/images/profile_jack.jpg";
import emma from "../../../public/images/profile_emma.jpg";
import ethan from "../../../public/images/profile_ethan.jpg";
import Image from "next/image";

const people = [
  {
    name: 'Nicolas Lierman',
    role: 'Lead Architect',
    image: nicolas,
    linkedinUrl: 'https://www.linkedin.com/in/nlierman/'
  },
  {
    name: 'Ian Brillembourg',
    role: 'Strategy & Acquisition',
    image: ian,
    linkedinUrl: 'https://www.linkedin.com/in/ianbrillembourg/'
  },
  {
    name: 'Jack Davanzo',
    role: 'Business Development',
    image: jack,
    linkedinUrl: 'https://www.linkedin.com/in/jack-davanzo/'
  },
  {
    name: 'Ethan Lehman',
    role: 'Developer',
    image: ethan,
    linkedinUrl: 'https://www.linkedin.com/in/ethan-lehman-development/'
  },
  {
    name: 'Matt Polvi',
    role: 'Operations',
    image: matt,
    linkedinUrl: 'https://www.linkedin.com/in/mattpolvi111/'
  },
  {
    name: 'Emma Sharma',
    role: 'Product Lead',
    image: emma,
    linkedinUrl: 'https://www.linkedin.com/in/emmasharma/'
  }
]
  
export default function OurTeam() {
return (
  <div className="bg-gray-900 py-24 sm:py-32" id="team">
    <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
        <p className="text-center text-lg font-semibold leading-8 tracking-wider text-[#D95798]">
          OUR TEAM
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet the innovators bridging on-chain data for marketers</h2>

        </div>
        <ul
        role="list"
        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
        {people.map((person) => (
            <li key={person.name} className="rounded-2xl bg-gray-800 py-8">
            <Image className="mx-auto h-40 w-40 rounded-full" src={person.image} alt="" />
            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
            <p className="text-sm leading-6 text-gray-400">{person.role}</p>
            <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                <a href={person.linkedinUrl} className="text-[#D95798]">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                    />
                    </svg>
                </a>
                </li>
            </ul>
            </li>
        ))}
        </ul>
    </div>
  </div>
)
}
  