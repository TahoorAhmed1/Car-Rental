import { create } from "zustand";
import { getCarList } from "@/services";

type carData = {
  createdAt: String;
  id: String;
  name: String;
  price: Number;
};
interface carStore {
  carLists: [];
  orgcarLists: [];
  getAllCarList: () => void;
  setCarLists: (data: any) => void;
}

export const useCarStore = create<carStore>((set) => ({
  carLists: [],
  orgcarLists: [],
  getAllCarList: async () => {
    let data: any = await getCarList();
    set({ carLists: data?.carLists });
    set({ orgcarLists: data?.carLists });
  },
  setCarLists: (data) => {
    set({ carLists: data });
  },
}));
