import { useState } from "react";
import { SITE_NAME } from "../lib/site";
import WarningModal from "./sub_components/WarningModal"
import Router from "next/router";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
  
const features = [
  {
    name: "Online data store of test results",
    description:
      "You can stroe your test results and manage it by printing or deleting from result dashboard",
    icon: GlobeAltIcon,
  },
  {
    name: "Accurate Predictions",
    description:
      "Our system is build on a very trained well machine learning models with low level of false positve and false negative predictions",
    icon: ScaleIcon,
  },
  {
    name: "List fo Diseases",
    description:
      "You can select of various list of diseases list to predict with ability to extend it in the future soon",
    icon: LightningBoltIcon,
  },
  {
    name: "Help Others",
    description:
      "Help us in serving the community of disease discovery by providing us with your medical tests results",
    icon: AnnotationIcon,
  },
];

export default function HomeGridThree() {
  const [showWarning, setShowWarning] = useState(false);
  
  
  const showWarningFunc = () => {
    setShowWarning(true);
  };
  const hideWarningFunc = () => {
    setShowWarning(false);
  };

  const handleGetStarted = () =>{
    let user;
    if (typeof window !== "undefined") {
      user = JSON.parse(localStorage.getItem("Auth"))
    }
    if(user)
    {
      //go to discover page
      Router.push("/discover")
    }
    else{
      showWarningFunc()
    }
  }

  return (
    <>
    {showWarning && <WarningModal hide={hideWarningFunc}/>}
      <div className="py-12 bg-white mt-15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              {SITE_NAME}
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to detect Diseases
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our System able to detect the medical state with these features
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 mt-15">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mr-5">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">
              Start prediction today
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                onClick={handleGetStarted}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Discover
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
