import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";
export const AboutMe = () => {
  const people = [
    {
      name: "Deepak Kumar",
      title: "Data Scientist | React Developer",
      role: "Data Scientist ",
      email: "erdeep64930@.com",
      telephone: "+91-9939183692",
      imageUrl: "/dpk.JPG"
    }
    // More people...
  ];
  return (
    <div>
      <ul>
        {people.map((person) => (
          <li
            key={person.email}
            className="col-span-1 flex flex-col text-center bg-white/10 rounded-lg shadow divide-y divide-sec"
          >
            <div className="flex-1 flex flex-col p-6 font-robot">
              <Image
                width={100}
                height={100}
                className="w-32 h-32 flex-shrink-0 mx-auto  rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-pri text-sm font-medium font-rye">
                {person.name}
              </h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sec text-sm font-robot">{person.title}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <span className="px-4 py-2 text-pri text-xs font-medium bg-black/30 font-rye  rounded-full">
                    {person.role}
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-pri">
                <div className="w-0 flex-1 flex">
                  <a
                    href={`mailto:${person.email}`}
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-pri font-medium border border-transparent rounded-bl-lg hover:text-sec"
                  >
                    <HiOutlineMail
                      className="w-5 h-5 text-pri"
                      aria-hidden="true"
                    />
                    <span className="ml-3 font-robot">Email</span>
                  </a>
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  <Link
                    href={`tel:${person.telephone}`}
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-pri font-medium border border-transparent rounded-br-lg hover:text-sec"
                  >
                    <AiOutlinePhone
                      className="w-5 h-5 text-pri"
                      aria-hidden="true"
                    />
                    <span className="ml-3 font-robot">Call</span>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
