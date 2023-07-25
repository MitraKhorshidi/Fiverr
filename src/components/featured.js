import men from "../asset/man.png";
import { FiSearch } from 'react-icons/fi';
export default function Featured() {
  return (
    <div className="flex flex-row justify-center w-full bg-[#013914] text-white">
      <div className="flex flex-col justify-center gap-y-8 ml-24">
        <h1 className="text-5xl font-semibold w-2/3">
          Find the right <i>freelance service</i>, right away
        </h1>
        <div className="flex flex-row w-2/3 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search for any service..."
            className="bg-white text-gray-600 grow px-4 py-2"
          />
          <button className="bg-[#1dbf73] px-4 py-2">
            <FiSearch/>
          </button>
        </div>
        <div className="flex flex-row gap-x-2 font-medium">
          <p>Popular:</p>
          <button className="border border-white rounded-3xl px-2 py-0.5 hover:bg-white hover:text-black">
            Website Design
          </button>
          <button className="border border-white rounded-3xl px-2 py-0.5 hover:bg-white hover:text-black">
            WordPress
          </button>
          <button className="border border-white rounded-3xl px-2 py-0.5 hover:bg-white hover:text-black">
            Logo Design
          </button>
          <button className="border border-white rounded-3xl px-2 py-0.5 hover:bg-white hover:text-black">
            AI Service
          </button>
        </div>
      </div>
      <img src={men} alt="men"/>
    </div>
  );
}
