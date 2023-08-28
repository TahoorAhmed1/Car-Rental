"use client";
import { useCarStore } from "@/store/carStore";
import { useEffect, useState } from "react";

function CarsFilterOption() {
  const [orgcarLists, setCarLists] = useCarStore((state) => [
    state.orgcarLists,
    state.setCarLists,
  ]);
  const [BrandList, setBrandList] = useState<any>();

  const setbrand = new Set();
  const FiltercarList = () => {
    orgcarLists.forEach((element: any) => {
      setbrand.add(element.carBrand);
    });
    setBrandList(Array.from(setbrand));
  };
  console.log(setbrand);
  

  useEffect(() => {
    FiltercarList();
  }, [orgcarLists]);

  const filterDropDown = (brand: string) => {
    let data = orgcarLists.filter((item: any) => item.carBrand == brand);
    setCarLists(data);
  };
  const sortListByPrice = (order: any) => {
    let data = [...orgcarLists].sort((a: any, b: any) =>
      order == -1 ? a.price - b.price : b.price - a.price
    );
    setCarLists(data);
  };
  return (
    <div className=" flex justify-between items-center mt-10  ">
      <div className="    ">
        <h2 className="text-[30px]">Cars Catalogs</h2>
        <h1>Explore your car you might Love</h1>
      </div>
      <div className=" flex     space-x-2  ">
        <select
          onChange={(e) => sortListByPrice(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            Price
          </option>
          <option value={-1}>Min to Max</option>
          <option value={1}>Max to Min</option>
          <option></option>
        </select>
        <select
          onChange={(e) => {
            filterDropDown(e.target.value);
          }}
          className="select select-bordered w-full md:block hidden max-w-xs"
        >
          <option disabled selected>
            Manufacture
          </option>
          {BrandList &&
            BrandList.map((name: string, index: number) => (
              <option>{name}</option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default CarsFilterOption;
