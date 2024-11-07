import TablesMap from "@/components/TablesMap/TablesMap";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl lg:max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight py-12 text-customPalette-sageGreen sm:text-4xl">
          Tables
        </h2>
        <TablesMap />
      </div>
    </section>
  );
}
