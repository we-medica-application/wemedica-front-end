import { api } from "../lib/api";

const stroke_url = api.strokeCreate;
const hepatitis_url = api.hepatitisCreate;

let userEmail = "";
if (typeof window !== "undefined") {
  const auth = localStorage.getItem("Auth");
  if (auth) {
    try {
      userEmail = JSON.parse(auth).email;
    } catch {
      userEmail = "";
    }
  }
}
export default function DiscoverForm({
  selectedDisease,
  deleteResource,
  createResource,
}) {
  const handleStrokeDetection = async (event) => {
    event.preventDefault();
    const standInfo = {
      name: event.target.name.value,
      email: event.target.email.value,
      mobile: parseInt(event.target.mobile.value),
      age: parseInt(event.target.age.value),
      bmi: parseFloat(event.target.bmi.value),
      avg_glucose_level: event.target.avg_glucose_level.value,
      residence_type: event.target.residence_type.value,
      gender: event.target.gender.value,
      ever_married: event.target.ever_married.value,
      work_type: event.target.work_type.value,
      smoking_status: event.target.smoking_status.value,
      hypertension: event.target.hypertension.value,
      heart_disease: event.target.heart_disease.value,
    }
    await createResource(standInfo, stroke_url);
    event.target.reset();
  };

  const handleHepatitisSubmission = async (event) => {
    event.preventDefault();
    const info = {
      name: event.target.name.value,
      email: event.target.email.value,
      mobile: event.target.mobile.value,
      age: parseInt(event.target.age.value),
      gender: event.target.gender.value,
      steroid: event.target.steroid.value,
      antivirals: event.target.antivirals.value,
      fatigue: event.target.fatigue.value,
      malaise: event.target.malaise.value,
      anorexia: event.target.anorexia.value,
      liver_big: event.target.liver_big.value,
      liver_firm: event.target.liver_firm.value,
      spleen_palpable: event.target.spleen_palpable.value,
      spiders: event.target.spiders.value,
      ascites: event.target.ascites.value,
      varices: event.target.varices.value,
      bilirubin: parseFloat(event.target.bilirubin.value),
      alk_phosphate: parseFloat(event.target.alk_phosphate.value),
      sgot: parseFloat(event.target.sgot.value),
      albumin: parseFloat(event.target.albumin.value),
      protime: parseFloat(event.target.protime.value),
      histology: event.target.histology.value,
    }
    await createResource(info, hepatitis_url);
    event.target.reset();
  };

  if (selectedDisease == 0) {
    return <h1 className="m-auto text-center">Please select a disease to run a test on.</h1>;
  } else if (selectedDisease == 1) {
    return <Stroke handleStrokeDetection={handleStrokeDetection} />;
  } else {
    return (
      <HepatitisForm handleHepatitisSubmission={handleHepatitisSubmission} />
    );
  }
}

function Stroke({ handleStrokeDetection }) {
  return (
    <div className="w-4/12 m-auto mt-32 bg-white border-b border-gray-200 md:grid md:grid-cols-1 md:gap-6 bg-clip-padding rounded-3xl backdrop-filter backdrop-blur-lg bg-opacity-30">
      <form action="/discover" onSubmit={handleStrokeDetection} method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="px-4 py-5 sm:p-6 ">
            <div className="grid grid-cols-1 gap-6 ">
              <div className="col-span-6 sm:col-span-5">
                <label
                  for="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  style={{ height: 50 }}
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full p-4 mt-1 text-sm border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm: y"
                />
              </div>

              <div className="col-span-6 sm:col-span-5">
                <label
                  for="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  style={{ height: 50 }}
                  type="text"
                  name="email"
                  id="email"
                  value={userEmail}
                  readonly
                  className="block w-full p-4 mt-1 text-sm border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm:"
                />
              </div>

              <div className="col-span-6 sm:col-span-5">
                <label
                  for="mobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Number
                </label>
                <input
                  style={{ height: 50 }}
                  type="text"
                  name="mobile"
                  id="mobile"
                  className="block w-full p-4 mt-1 text-sm border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm:"
                />
              </div>

              <div className="col-span-6 sm:col-span-5">
                <div>
                  <legend className="text-base font-medium text-gray-900">
                    What is Your Age?
                  </legend>
                  <p className="text-sm text-gray-500">Type Your Age: </p>
                </div>
                <div className="col-span-6 sm:col-span-5">
                  <label
                    for="age"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Age
                  </label>
                  <input
                    style={{ height: 50 }}
                    type="number"
                    name="age"
                    id="age"
                    className="block w-full p-4 mt-1 text-sm border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm:"
                  />
                </div>
              </div>

              <div className="col-span-6 sm:col-span-5">
                <div>
                  <legend className="text-base font-medium text-gray-900">
                    What is Your Body Mass Index?
                  </legend>
                  <p className="text-sm text-gray-500">Type Your BMI: </p>
                </div>
                <div className="col-span-6 sm:col-span-5">
                  <label
                    for="bmi"
                    className="block text-sm font-medium text-gray-700"
                  >
                    BMI
                  </label>
                  <input
                    style={{ height: 50 }}
                    type="text"
                    name="bmi"
                    id="bmi"
                    className="block w-full p-4 mt-1 text-sm border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm:"
                  />
                </div>
              </div>

              <div className="col-span-6 sm:col-span-5">
                <div>
                  <legend className="text-base font-medium text-gray-900">
                    What is avgarage glucose level?
                  </legend>
                  <p className="text-sm text-gray-500">
                    Type your avgarage glucose level:
                  </p>
                </div>
                <div className="col-span-6 sm:col-span-5">
                  <label
                    for="avg_glucose_level"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Avarage Glucose
                  </label>
                  <input
                    style={{ height: 50 }}
                    type="text"
                    name="avg_glucose_level"
                    id="avg_glucose_level"
                    className="block w-full p-4 mt-1 text-sm border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm:"
                  />
                </div>
              </div>

              <div className="col-span-6 sm:col-span-5">
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      What is Your Gender?
                    </legend>
                    <p className="text-sm text-gray-500">
                      Choose Your Gender:{" "}
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="gender"
                        name="gender"
                        value={1}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="gender"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        Male
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="gender"
                        name="gender"
                        value={0}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="gender"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="col-span-6 sm:col-span-5">
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      Do You have permanent residence type?
                    </legend>
                    <p className="text-sm text-gray-500">
                      Answer by the following choices:
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="residence_type"
                        name="residence_type"
                        value={1}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="residence_type"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        True
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="residence_type"
                        name="residence_type"
                        value={0}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="residence_type"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        False
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="col-span-6 sm:col-span-5">
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      I have ever married Before..?
                    </legend>
                    <p className="text-sm text-gray-500">
                      Answer by the following choices:
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="ever_married"
                        name="ever_married"
                        value={1}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="ever_married"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        True
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="ever_married"
                        name="ever_married"
                        value={0}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="ever_married"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        False
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="col-span-6 sm:col-span-5">
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      What is the type of your work?
                    </legend>
                    <p className="text-sm text-gray-500">
                      Answer by the following choices:
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        id="work_type"
                        name="work_type"
                        type="radio"
                        value={"1, 0, 0, 0, 0"}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="work_type"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        Goverment Job
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        id="work_type"
                        name="work_type"
                        type="radio"
                        value={"0, 1, 0, 0, 0"}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="work_type"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        Never Worked
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        id="work_type"
                        name="work_type"
                        type="radio"
                        value={"0, 0, 1, 0, 0"}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="work_type"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        Private
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        id="work_type"
                        name="work_type"
                        type="radio"
                        value={"0, 0, 0, 1, 0"}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="work_type"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        Self Employed
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        id="work_type"
                        name="work_type"
                        type="radio"
                        value={"0, 0, 0, 0, 1"}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="work_type"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        No work I have Children
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="col-span-6 sm:col-span-5">
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      Do I smoke?
                    </legend>
                    <p className="text-sm text-gray-500">
                      Answer by the following choices:
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        style={{ height: 50 }}
                        id="smoking_status"
                        name="smoking_status"
                        value={"1, 0, 0, 0"}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="smoking_status"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        Unknown
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        id="smoking_status"
                        name="smoking_status"
                        value={"0, 1, 0, 0"}
                        type="radio"
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="smoking_status"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        Formerly Smoked
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        id="smoking_status"
                        name="smoking_status"
                        value={"0, 0, 1, 0"}
                        type="radio"
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="smoking_status"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        Never smoked
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        id="smoking_status"
                        name="smoking_status"
                        type="radio"
                        value={"0, 0, 0, 1"}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="smoking_status"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        Smokes
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="col-span-6 sm:col-span-5">
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      I have a hypertension?
                    </legend>
                    <p className="text-sm text-gray-500">
                      Answer by the following:
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="hypertension"
                        name="hypertension"
                        value={1}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="hypertension"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        True
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="hypertension"
                        name="hypertension"
                        value={0}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="hypertension-False"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        False
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="col-span-6 sm:col-span-5">
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      I have a Heart Disease?
                    </legend>
                    <p className="text-sm text-gray-500">
                      Answer by the following:
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="heart_disease"
                        name="heart_disease"
                        value={1}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="heart_disease"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        True
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="heart_disease"
                        name="heart_disease"
                        value={0}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="heart_disease"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        False
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="text-center col-span-32 sm:col-span-6 bg-gray-50 sm:px-6">
                <button
                  type="submit"
                  className="justify-around w-3/4 p-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Run Test
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

function HepatitisForm({ handleHepatitisSubmission }) {
  return (
    <div className="w-4/12 m-auto mt-32 bg-white border-b border-gray-200 md:grid md:grid-cols-1 md:gap-6 bg-clip-padding rounded-3xl backdrop-filter backdrop-blur-lg bg-opacity-30">
      <form action="/discover" onSubmit={handleHepatitisSubmission} method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="px-4 py-5 sm:p-6 ">
            <div className="grid grid-cols-1 gap-6 ">
              <div className="col-span-6 sm:col-span-5">
                <label
                  for="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  style={{ height: 50 }}
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full p-4 mt-1 text-sm border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm: y"
                />
              </div>

              <div className="col-span-6 sm:col-span-5">
                <label
                  for="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  style={{ height: 50 }}
                  type="text"
                  name="email"
                  id="email"
                  value={userEmail}
                  readonly
                  className="block w-full p-4 mt-1 text-sm border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm:"
                />
              </div>

              <div className="col-span-6 sm:col-span-5">
                <label
                  for="mobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Number
                </label>
                <input
                  style={{ height: 50 }}
                  type="text"
                  name="mobile"
                  id="mobile"
                  className="block w-full p-4 mt-1 text-sm border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm:"
                />
              </div>

              <div className="col-span-6 sm:col-span-5">
                <div>
                  <legend className="text-base font-medium text-gray-900">
                    What is Your Age?
                  </legend>
                  <p className="text-sm text-gray-500">Type Your Age: </p>
                </div>
                <div className="col-span-6 sm:col-span-5">
                  <label
                    for="age"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Age
                  </label>
                  <input
                    style={{ height: 50 }}
                    type="text"
                    name="age"
                    id="age"
                    className="block w-full p-4 mt-1 text-sm border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm:"
                  />
                </div>
              </div>

              <div className="col-span-6 sm:col-span-5">
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      What is Your Gender?
                    </legend>
                    <p className="text-sm text-gray-500">
                      Choose Your Gender:{" "}
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="gender"
                        name="gender"
                        value={1}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="gender"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        Male
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="gender"
                        name="gender"
                        value={0}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="gender"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="col-span-6 sm:col-span-5">
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      Did you ever take steroids ?
                    </legend>
                    <p className="text-sm text-gray-500">
                      Answer by the following choices:
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="steroid"
                        name="steroid"
                        value={1}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="steroid"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="steroid"
                        name="steroid"
                        value={0}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="steroid"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="col-span-6 sm:col-span-5">
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      Did you ever take antivirals ?
                    </legend>
                    <p className="text-sm text-gray-500">
                      Answer by the following choices:
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="antivirals"
                        name="antivirals"
                        value={1}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="antivirals"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="antivirals"
                        name="antivirals"
                        value={0}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="antivirals"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
              {/* fatigue */}

              <div className="col-span-6 sm:col-span-5">
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      Do you feel that you lack energy(fatigue)?
                    </legend>
                    <p className="text-sm text-gray-500">
                      Answer by the following choices:
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="fatigue"
                        name="fatigue"
                        value={1}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="fatigue"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="fatigue"
                        name="fatigue"
                        value={0}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="fatigue"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              {/* malaise */}
              <div className="col-span-6 sm:col-span-5">
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      Do you have a general feel of discomfort(malaise)?
                    </legend>
                    <p className="text-sm text-gray-500">
                      Answer by the following choices:
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="malaise"
                        name="malaise"
                        value={1}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="malaise"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="malaise"
                        name="malaise"
                        value={0}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="malaise"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
              {/* anorexia */}
              <div className="col-span-6 sm:col-span-5">
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      Are your weight and height being lower than expected for your age?
                    </legend>
                    <p className="text-sm text-gray-500">
                      Answer by the following choices:
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="anorexia"
                        name="anorexia"
                        value={1}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="anorexia"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="anorexia"
                        name="anorexia"
                        value={0}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="anorexia"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              {/* liver_big */}
              <div className="col-span-6 sm:col-span-5">
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      Is your liver bigger than what it is supposed to be?
                    </legend>
                    <p className="text-sm text-gray-500">
                      Answer by the following choices:
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="liver_big"
                        name="liver_big"
                        value={1}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="liver_big"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="liver_big"
                        name="liver_big"
                        value={0}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="liver_big"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              {/* liver_firm */}
              <div className="col-span-6 sm:col-span-5">
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      Is your liver firm?
                    </legend>
                    <p className="text-sm text-gray-500">
                      Answer by the following choices:
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="liver_firm"
                        name="liver_firm"
                        value={1}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="liver_firm"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="liver_firm"
                        name="liver_firm"
                        value={0}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="liver_firm"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              {/* spleen_palpable */}
              <div className="col-span-6 sm:col-span-5">
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      Can you feel enlarged spleen?
                    </legend>
                    <p className="text-sm text-gray-500">
                      Answer by the following choices:
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="spleen_palpable"
                        name="spleen_palpable"
                        value={1}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="spleen_palpable"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="spleen_palpable"
                        name="spleen_palpable"
                        value={0}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="spleen_palpable"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              {/* spiders */}
              <div className="col-span-6 sm:col-span-5">
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      Have you ever been bitten by a spider?
                    </legend>
                    <p className="text-sm text-gray-500">
                      Answer by the following choices:
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="spiders"
                        name="spiders"
                        value={1}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="spiders"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="spiders"
                        name="spiders"
                        value={0}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="spiders"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              {/* ascites */}
              <div className="col-span-6 sm:col-span-5">
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      Do you have ascites?
                    </legend>
                    <p className="text-sm text-gray-500">
                      Answer by the following choices:
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="ascites"
                        name="ascites"
                        value={1}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="ascites"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="ascites"
                        name="ascites"
                        value={0}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="ascites"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              {/* varices */}
              <div className="col-span-6 sm:col-span-5">
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      Do you have varices?
                    </legend>
                    <p className="text-sm text-gray-500">
                      Answer by the following choices:
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="varices"
                        name="varices"
                        value={1}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="varices"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="varices"
                        name="varices"
                        value={0}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="varices"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              {/* bilirubin */}
              <div className="col-span-6 sm:col-span-5">
                <label
                  for="bilirubin"
                  className="block text-sm font-medium text-gray-700"
                >
                  What is your bilirubin?
                </label>
                <input
                  style={{ height: 50 }}
                  type="number"
                  step="0.01"
                  name="bilirubin"
                  id="bilirubin"
                  className="block w-full p-4 mt-1 text-sm border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm:"
                />
              </div>


              <div className="col-span-6 sm:col-span-5">
                <label
                  for="alk_phosphate"
                  className="block text-sm font-medium text-gray-700"
                >
                  What is alkaline phosphatase level?
                </label>
                <input
                  style={{ height: 50 }}
                  type="number"
                  step="0.01"
                  name="alk_phosphate"
                  id="alk_phosphate"
                  className="block w-full p-4 mt-1 text-sm border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm:"
                />
              </div>

              {/* sgot */}
              <div className="col-span-6 sm:col-span-5">
                <label
                  for="sgot"
                  className="block text-sm font-medium text-gray-700"
                >
                  What is your sgot test result?
                </label>
                <input
                  style={{ height: 50 }}
                  type="number"
                  step="0.01"
                  name="sgot"
                  id="sgot"
                  className="block w-full p-4 mt-1 text-sm border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm:"
                />
              </div>

              {/* albumin */}
              <div className="col-span-6 sm:col-span-5">
                <label
                  for="albumin"
                  className="block text-sm font-medium text-gray-700"
                >
                  What is your albumin level?
                </label>
                <input
                  style={{ height: 50 }}
                  type="number"
                  step="0.01"
                  name="albumin"
                  id="albumin"
                  className="block w-full p-4 mt-1 text-sm border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm:"
                />
              </div>

              {/* protime */}
              <div className="col-span-6 sm:col-span-5">
                <label
                  for="protime"
                  className="block text-sm font-medium text-gray-700"
                >
                  What is your protime test result?
                </label>
                <input
                  style={{ height: 50 }}
                  type="number"
                  step="0.01"
                  name="protime"
                  id="protime"
                  className="block w-full p-4 mt-1 text-sm border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm:"
                />
              </div>

              {/* histology */}
              <div className="col-span-6 sm:col-span-5">
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      Did you make a microanatomy study or histology ?
                    </legend>
                    <p className="text-sm text-gray-500">
                      Answer by the following choices:
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="histology"
                        name="histology"
                        value={1}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="histology"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        style={{ height: 50 }}
                        type="radio"
                        id="histology"
                        name="histology"
                        value={0}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500"
                      />
                      <label
                        for="histology"
                        className="block ml-3 text-sm font-medium text-gray-700"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="text-center col-span-32 sm:col-span-6 bg-gray-50 sm:px-6">
                <button
                  type="submit"
                  className="justify-around w-3/4 p-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Run Test
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
