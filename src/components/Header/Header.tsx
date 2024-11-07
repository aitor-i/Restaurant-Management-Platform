import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="py-16  bg-customPalette-sageGreen px-4 sm:px-6 lg:px-8 w-full flex justify-between">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-customPalette-ivory sm:text-6xl">
          Restaurant
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Your place for all your favorite restaurants
        </p>
      </div>
      <div>
        <nav className="flex gap-2 text-customPalette-ivory font-bold">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
        </nav>
      </div>
    </header>
  );
}
