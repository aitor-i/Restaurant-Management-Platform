import React from "react";
import Link from "next/link";

export default function Custom404() {
  return (
    <section className=" min-h-screen flex justify-center   gap-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl lg:max-w-4xl mx-auto py-60 gap-4 flex flex-col">
        <h1 className="font-bold text-customPalette-sageGreen  text-6xl">
          404 - Page not found
        </h1>
        <Link href="/" className="text-slate-700 font-bold text-2xl">
          Go back to home
        </Link>
      </div>
    </section>
  );
}
