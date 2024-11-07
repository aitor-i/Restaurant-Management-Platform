import React from "react";

export default function Header() {
  return (
    <header className="py-16 bg-customPalette-sageGreen px-4 sm:px-6 lg:px-8 w-full flex flex-col  ">
      <h1 className="text-4xl font-bold tracking-tight text-customPalette-ivory sm:text-6xl">
        Restaurant
      </h1>
      <p className="mt-4 text-lg text-slate-700">
        Your place for all your favorite restaurants
      </p>
    </header>
  );
}
