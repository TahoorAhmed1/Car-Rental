import CarLists from "@/components/Home/CarLists";
import CarsFilterOption from "@/components/Home/CarsFilterOption";
import Hero from "@/components/Home/Hero";
import Searchfilter from "@/components/Home/Searchfilter";
export default function Home() {
  return (
    <>
      <main className="sm:p-10 md:px-20 p-5   ">
        <Hero />
        <Searchfilter />
        <CarsFilterOption></CarsFilterOption>
        <CarLists></CarLists>
      </main>
    </>
  );
}
