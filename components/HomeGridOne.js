import { staticImage } from "../lib/assets";

export default function HomeGridOne() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-0 sm:py-20 lg:py-15 lg:max-w-none">
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-9">
              <div className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={staticImage("Stroke.jpg")}
                    alt="Stroke"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-xl text-gray-900 font-bold">Stroke</h3>
                <p className="text-base font-semibold text-gray-500">
                  A stroke occurs when the blood supply to part of your brain is
                  interrupted or reduced, preventing brain tissue from getting
                  oxygen and nutrients. Brain cells begin to die in minutes. A
                  stroke is a medical emergency, and prompt treatment is
                  crucial. Early action can reduce brain damage and other
                  complications.
                </p>
              </div>

              <div className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={staticImage("Model.jpg")}
                    alt="Hepatitis"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-xl text-gray-900 font-bold">
                  Hepatitis
                </h3>
                <p className="text-base font-semibold text-gray-500">
                  Hepatitis means inflammation of the liver. The liver is a
                  vital organ that processes nutrients, filters the blood, and
                  fights infections. When the liver is inflamed or damaged, its
                  function can be affected. Heavy alcohol use, toxins, some
                  medications, and certain medical conditions can cause
                  hepatitis. However, hepatitis is often caused by a virus.
                </p>
              </div>

              <div className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={staticImage("BCancer2.jpg")}
                    alt="Breast Cancer"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-xl text-gray-900 font-bold">
                  Breast Cancer
                </h3>
                <p className="text-base font-semibold text-gray-500">
                  Breast cancer is a disease in which cells in the breast grow
                  out of control. There are different kinds of breast cancer.
                  The kind of breast cancer depends on which cells in the breast
                  turn into cancer. Breast cancer can begin in different parts
                  of the breast. Early treatment can stop developing invasive
                  breast cancer. Early treatment can include surgeries like
                  lumpectomy and mastectomy followed by radiation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
