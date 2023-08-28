import { MapPinIcon } from "@heroicons/react/20/solid";
function Searchfilter() {
  return (
    <div>
      <h2 className="text-center text-[20px] text-gray-400 ">
        Lets search for your favorites car
      </h2>
      <div className="flex justify-center my-5">
        <div className="flex bg-gray-100/90 rounded-full py-1 px-4 gap-2 divide-x-2 ">
        <div className="flex items-center  ">
          <MapPinIcon className="w-5 h-5" />

          <input
            type="text"
            name="search"
            placeholder="Location"
            className="outline-none bg-transparent px-3 py-2 rounded-full text-slate-700"
          />
        </div>
        <div className="flex items-center ">
          <input
            type="datetime-local"
            name="date"
            className="outline-none bg-transparent px-3 py-2 rounded-full text-slate-700 "
          />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Searchfilter;
