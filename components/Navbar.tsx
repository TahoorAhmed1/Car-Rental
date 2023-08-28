import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <div className="flex items-center   py-4 px-6  justify-between ">
      <Image src={"/logo.png"} alt="logo" width={110} height={100}></Image>

      <div className="md:flex  hidden ">
        <ul className="flex justify-center rounded-full gap-6   mx-auto bg bg-slate-900/10 ">
          <li className=" hover:bg-blue-600 py-2 px-4 rounded-full cursor-pointer  ">
            Home
          </li>
          <li className=" hover:bg-blue-600 py-2 px-4 rounded-full cursor-pointer  ">
            History
          </li>
          <li className=" hover:bg-blue-600 py-2 px-4 rounded-full cursor-pointer  ">
            About
          </li>
        </ul>
      </div>

      <UserButton />
    </div>
  );
}

export default Navbar;
