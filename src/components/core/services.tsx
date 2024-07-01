import Image from "next/image";
import React from "react";

const services = [
  {
    name: "Interior Detailing",
    description:
      "We provide professional car detailing services to ensure your car is in top condition.",
    imageURL:
      "https://img.freepik.com/free-photo/close-up-car-care-process_23-2149193616.jpg?w=1800&t=st=1719850452~exp=1719851052~hmac=2ad1f243c3e91ae229ed3e53b197a5f7a1c32bbf2aacd7208441a9a85884c4c9",
  },
  {
    name: "Car Wash",
    description:
      "We provide professional car detailing services to ensure your car is in top condition.",
    imageURL:
      "https://img.freepik.com/premium-photo/photo-super-fantastic-car-road_812426-130791.jpg?w=1060",
  },
  {
    name: "Wheel Detailing",
    description:
      "We provide professional car detailing services to ensure your car is in top condition.",
    imageURL:
      "https://images.unsplash.com/photo-1632823471799-c3812077da2d?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Seat Detailing",
    description:
      "We provide professional car detailing services to ensure your car is in top condition.",
    imageURL:
      "https://img.freepik.com/free-photo/beautiful-car-interior-clean-up-service_23-2149212254.jpg?w=740&t=st=1719850612~exp=1719851212~hmac=9f1d0ddff9adf88a560b2aae6052049493005e8d888c76b570a2bc0903353744",
  },
];
export default function ProductTwo() {
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {services.map((service) => (
        <div
          key={service.name}
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
          <Image
            src={service.imageURL}
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
            fill
            quality={70}
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{service.name}</h1>
            <p className="mt-2 text-sm text-gray-300">{service.description}</p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Shop Now &rarr;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
