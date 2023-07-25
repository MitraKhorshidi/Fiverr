import { AiOutlineCheckCircle } from "react-icons/ai";
import video from "../asset/fiverr.mp4";
export default function BestPart() {
  return (
    <div className="flex flex-row justify-center items-center gap-x-32 bg-[#F1FDF7] my-24 py-24 px-24">
      <div className="flex flex-col justify-center gap-y-3 w-1/2">
        <h3 className="text-4xl text-gray-800 font-semibold">
          The best part? Everything.
        </h3>
        <p className="flex flex-row text-gray-600 text-xl font-semibold items-center gap-x-1">
          <AiOutlineCheckCircle className="text-2xl"/>
          Stick to your budget
        </p>
        <p className="text-gray-600 text-lg">
          Find the right service for every price point. No hourly rates, just
          project-based pricing.
        </p>
        <p className="flex flex-row text-gray-600 text-xl font-semibold items-center gap-x-1">
          <AiOutlineCheckCircle className="text-2xl"/>
          Get quality work done quickly
        </p>
        <p className="text-gray-600 text-lg">
          Hand your project over to a talented freelancer in minutes, get
          long-lasting results.
        </p>
        <p className="flex flex-row text-gray-600 text-xl font-semibold items-center gap-x-1">
          <AiOutlineCheckCircle className="text-2xl"/>
          Pay when you're happy
        </p>
        <p className="text-gray-600 text-lg">
          Upfront quotes mean no surprises. Payments only get released when you
          approve.
        </p>
        <p className="flex flex-row text-gray-600 text-xl font-semibold items-center gap-x-1">
          <AiOutlineCheckCircle className="text-2xl"/>
          Count on 24/7 support
        </p>
        <p className="text-gray-600 text-lg">
          Our round-the-clock support team is available to help anytime,
          anywhere.
        </p>
      </div>
      <video autoPlay muted className="w-1/2 rounded-md shadow-sm">
        <source src={video} type="video/mp4"/>
      </video>
    </div>
  );
}
