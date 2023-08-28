"use client";
import { useCarStore } from "@/store/carStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CarCrad from "./CarCrad";
import BookingMoadl from "../carBooking/BookingMoadl";

function CarLists() {
  const router = useRouter();
  const [selectedCar, setSelectedCar] = useState<any>();
  const [getAllCarList, carLists] = useCarStore((state) => [
    state.getAllCarList,
    state.carLists,
  ]);

  useEffect(() => {
    getAllCarList();
  }, [router.refresh]);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {carLists.map((data: any, index) => (
          <div
            key={index}
            onClick={() => {
              (window as any).my_modal_1.showModal();
              setSelectedCar(data);
            }}
          >
            <CarCrad key={index} car={data}></CarCrad>
          </div>
        ))}
      </div>

      <dialog id="my_modal_1" className="modal">
      {selectedCar &&  <BookingMoadl selectedCar={selectedCar}></BookingMoadl>}
      </dialog>
    </div>
  );
}

export default CarLists;
