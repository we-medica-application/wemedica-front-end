import { staticImage } from "../lib/assets";

export default function AboutGrid() {
  return (
    <>
      <div className="">
        <img
          src={staticImage("MisisonVision.jpg")}
          alt="Mission and Vision"
          className="w-full h-1/15"
        />
      </div>
      <div className="bg-stone-200 max-w-full m-5 rounded-lg border-indigo-400">
        <div className=" mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl mr-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-center font-light italic">
              Our Mission
            </span>
            <span className="pt-5 block text-indigo-500 font-light max-w-full text-center font-sans">
              Our main purpose is to provide a diseases discovery App using a
              machine learning algorithms in order to predict patient medical
              state for a specific disease based on his/her medical record.
            </span>
          </h2>
        </div>
      </div>
      <div className="bg-stone-200 max-w-full m-5 rounded-lg border-indigo-400">
        <div className=" mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl ml-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-center font-light italic">
              Our Vision
            </span>
            <span className="pt-5 block text-indigo-500 font-light font-sans text-center max-w-full">
              We are aiming to expand our prediction list to cover more
              diseases, and provide patients with a full accurate results. In
              addition, to enrich the global database with a new researchable
              data.
            </span>
          </h2>
        </div>
      </div>
    </>
  );
}
