import React from "react";
import { CheckCircledIcon } from "@radix-ui/react-icons";

export default function PricingTwo() {
  return (
    <section className="relative w-full overflow-hidden bg-white pb-14">
      <div className="relative  z-10 mx-auto max-w-7xl px-4">
        <div className="mx-auto md:max-w-4xl">
          <div className="-m-5 flex flex-wrap">
            <div className="w-full p-5 md:w-1/2">
              <div className="rounded-md border bg-white bg-opacity-90">
                <div className=" border-b">
                  <div className="px-9 py-7">
                    <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">
                      Standard
                    </h3>
                    <p className="font-medium leading-relaxed text-gray-500">
                      Lorem ipsum dolor sit amet, consect etur adipiscing maror.
                    </p>
                  </div>
                </div>
                <div className="px-9 pb-9 pt-8">
                  <p className="mb-6 font-medium leading-relaxed text-gray-600">
                    Features included:
                  </p>
                  <ul className="mb-11">
                    <li className="mb-4 flex items-center">
                      <CheckCircledIcon className="mr-2 size-4" />
                      <p className="font-semibold leading-normal">
                        Dashboard Cleaning
                      </p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircledIcon className="mr-2 size-4" />
                      <p className="font-semibold leading-normal">
                        Carpets Cleaning
                      </p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircledIcon className="mr-2 size-4" />
                      <p className="font-semibold leading-normal">
                        Something else
                      </p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircledIcon className="mr-2 size-4" />
                      <p className="font-semibold leading-normal">
                        Something else
                      </p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircledIcon className="mr-2 size-4" />
                      <p className="font-semibold leading-normal">
                        Something else
                      </p>
                    </li>
                  </ul>
                  <p className="mb-6 text-lg font-semibold leading-normal text-gray-600">
                    <span>Starting from</span>
                    <span className="ml-2 text-gray-900">$49</span>
                  </p>
                  <div className="md:inline-block">
                    <button
                      type="button"
                      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Reserve Your Time
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-5 md:w-1/2">
              <div className="rounded-md border bg-white bg-opacity-90">
                <div className=" border-b">
                  <div className="px-9 py-7">
                    <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">
                      Pro
                    </h3>
                    <p className="font-medium leading-relaxed text-gray-500">
                      Lorem ipsum dolor sit amet, consect etur adipiscing maror.
                    </p>
                  </div>
                </div>
                <div className="px-9 pb-9 pt-8 backdrop:blur-md">
                  <p className="mb-6 font-medium leading-relaxed text-gray-600">
                    Features included:
                  </p>
                  <ul className="mb-11">
                    <li className="mb-4 flex items-center">
                      <CheckCircledIcon className="mr-2 size-4" />
                      <p className="font-semibold leading-normal">
                        Dashboard Cleaning
                      </p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircledIcon className="mr-2 size-4" />
                      <p className="font-semibold leading-normal">
                        Carpets Cleaning
                      </p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircledIcon className="mr-2 size-4" />
                      <p className="font-semibold leading-normal">
                        Something else
                      </p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircledIcon className="mr-2 size-4" />
                      <p className="font-semibold leading-normal">More</p>
                    </li>
                    <li className="flex items-center">
                      <CheckCircledIcon className="mr-2 size-4" />
                      <p className="font-semibold leading-normal">More</p>
                    </li>
                  </ul>
                  <p className="mb-6 text-lg font-semibold leading-normal text-gray-600">
                    <span>Starting from</span>
                    <span className="ml-2 text-gray-900">$99</span>
                  </p>
                  <div className="md:inline-block">
                    <button
                      type="button"
                      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Reserve Your Time
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
