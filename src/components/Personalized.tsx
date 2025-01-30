import React, { useState } from "react";
import doctor from "../assets/doctors.svg";

interface FormData {
  age: string;
  gender: string;
  mobileOS: string;
  educationUse: string;
  activities: string[];
  helpfulForStudying: string;
  educationalApps: string[];
  dailyUsage: string;
  usageDistraction: string;
  usefulFeatures: string[];
  beneficialSubjects: string[];
  usageSymptoms: string[];
  symptomFrequency: string;
  healthPrecautions: string[];
}

const Personalized = () => {
  const [formData, setFormData] = useState<FormData>({
    age: "",
    gender: "",
    mobileOS: "",
    educationUse: "",
    activities: [],
    helpfulForStudying: "",
    educationalApps: [],
    dailyUsage: "",
    usageDistraction: "",
    usefulFeatures: [],
    beneficialSubjects: [],
    usageSymptoms: [],
    symptomFrequency: "",
    healthPrecautions: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
          ? [...prevData[name], value]
          : prevData[name].filter((val: string) => val !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex">
      <div className="w-1/2">
      <img src={doctor} alt="Health Ratings" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="w-1/2 max-w-md mx-auto p-4 overflow-y-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Personalized Recommendations</h1>
      <p className="text-center mb-4 text-gray-600">
        This form will determine your health and provide personalized recommendations based on your mobile phone usage habits. 
        Please fill out all the fields accurately to get the best possible advice tailored to your needs. 
        Your responses will help us understand how you use your mobile phone for educational purposes, 
        the activities you engage in, and any symptoms you may experience due to prolonged usage. 
        We aim to offer suggestions that can improve your overall well-being and enhance your learning experience.
      </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <select
              name="age"
              value={formData.age}
              onChange={handleChange}
              title="Age"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="">Select Age</option>
              <option value="10-15">10-15</option>
              <option value="16-20">16-20</option>
              <option value="21-25">21-25</option>
              <option value="26-30">26-30</option>
              <option value="31-35">31-35</option>
              <option value="36-40">36-40</option>
              <option value="41-45">41-45</option>
              <option value="46-50">46-50</option>
              <option value="51-55">51-55</option>
              <option value="56-60">56-60</option>
              <option value="61-65">61-65</option>
            </select>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Mobile OS */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile Operating System
            </label>
            <select
              name="mobileOS"
              value={formData.mobileOS}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="">Select OS</option>
              <option value="android">Android</option>
              <option value="ios">iOS</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Mobile Phone for Education */}
            <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile Phone Use for Education
            </label>
            <div className="mt-2 space-y-1">
              <label className="inline-flex items-center">
              <input
                type="radio"
                name="educationUse"
                value="sometimes"
                checked={formData.educationUse === "sometimes"}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="">Sometimes</span>
              </label>
              <label className="inline-flex items-center ml-2">
              <input
                type="radio"
                name="educationUse"
                value="frequently"
                checked={formData.educationUse === "frequently"}
                onChange={handleChange}
                className="form-radio"
              />
              <span >Frequently</span>
              </label>
              <label className="inline-flex items-center ml-2">
              <input
                type="radio"
                name="educationUse"
                value="rarely"
                checked={formData.educationUse === "rarely"}
                onChange={handleChange}
                className="form-radio"
              />
              <span >Rarely</span>
              </label>
              <label className="inline-flex items-center ml-2">
              <input
                type="radio"
                name="educationUse"
                value="never"
                checked={formData.educationUse === "never"}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="">Never</span>
              </label>
            </div>
            </div>

          {/* Mobile Phone Activities */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile Phone Activities
            </label>
            <div className="mt-2 space-y-1">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="activities"
                  value="social media"
                  checked={formData.activities.includes("social media")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Social Media</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="activities"
                  value="education"
                  checked={formData.activities.includes("education")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="">Education</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="activities"
                  value="web browsing"
                  checked={formData.activities.includes("web browsing") }
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="">Web Browsing</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="activities"
                  value="messaging"
                  checked={formData.activities.includes("messaging")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="">Messaging</span>
              </label>
              {/* Add more activities */}
            </div>
          </div>

          {/* Helpful for Studying */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Helpful for Studying
            </label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="helpfulForStudying"
                  value="yes"
                  checked={formData.helpfulForStudying === "yes"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="helpfulForStudying"
                  value="no"
                  checked={formData.helpfulForStudying === "no"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          {/* Educational Apps */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Educational Apps
            </label>
            <div className="mt-2 space-y-1">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="educationalApps"
                  value="educational videos"
                  checked={formData.educationalApps.includes(
                    "educational videos"
                  )}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Educational Videos</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="educationalApps"
                  value="language"
                  checked={formData.educationalApps.includes("language")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="">Language</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="educationalApps"
                  value="productivity"
                  checked={formData.educationalApps.includes("productivity")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="">Productivity</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="educationalApps"
                  value="study planner"
                  checked={formData.educationalApps.includes("study planner")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="">Study Planner</span>
              </label>
            </div>
          </div>

          {/* Daily Usage */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Daily Usage
            </label>
            <div className="mt-2 space-y-1">
                <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="dailyUsage"
                  value="< 1 hour"
                  checked={formData.dailyUsage === "< 1 hour"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">&lt; 1 hour</span>
                </label>
                <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="dailyUsage"
                  value="1-2 hours"
                  checked={formData.dailyUsage === "1-2 hours"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">1-2 hours</span>
                </label>
                <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="dailyUsage"
                  value="4-6 hours"
                  checked={formData.dailyUsage === "4-6 hours"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">4-6 hours</span>
                </label>
                <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="dailyUsage"
                  value="> 6 hours"
                  checked={formData.dailyUsage === "> 6 hours"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">&gt; 6 hours</span>
                </label>
              {/* Add more options here */}
            </div>
          </div>

          {/* Usage Distraction */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Usage Distraction
            </label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="usageDistraction"
                  value="yes"
                  checked={formData.usageDistraction === "yes"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="usageDistraction"
                  value="no"
                  checked={formData.usageDistraction === "no"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          {/* Useful Features */}
          {/* Replace with your own options for useful features */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Useful Features
            </label>
            <div className="mt-2 space-y-1">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="usefulFeatures"
                  value="notes"
                  checked={formData.usefulFeatures.includes("notes")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Notes</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="usefulFeatures"
                  value="camera"
                  checked={formData.usefulFeatures.includes("camera")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="">Camera</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="usefulFeatures"
                  value="internet access"
                  checked={formData.usefulFeatures.includes("internet access")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="">Internet Access</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="usefulFeatures"
                  value="browsing"
                  checked={formData.usefulFeatures.includes("browsing")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="">Browsing</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="usefulFeatures"
                  value="research"
                  checked={formData.usefulFeatures.includes("research")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="">Research</span>
              </label>
              {/* Add more feature options as needed */}
            </div>
          </div>

          {/* Beneficial Subjects */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Beneficial Subjects
            </label>
            <div className="mt-2 space-y-1">
                <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="beneficialSubjects"
                  value="browsing materials"
                  checked={formData.beneficialSubjects.includes(
                  "browsing materials"
                  )}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Browsing Materials</span>
                </label>
                <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="beneficialSubjects"
                  value="calculating"
                  checked={formData.beneficialSubjects.includes("calculating")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Calculating</span>
                </label>
                <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="beneficialSubjects"
                  value="reading"
                  checked={formData.beneficialSubjects.includes("reading")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Reading</span>
                </label>
                <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="beneficialSubjects"
                  value="writing"
                  checked={formData.beneficialSubjects.includes("writing")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Writing</span>
                </label>
              {/* Add more subject options as needed */}
            </div>
          </div>

          {/* Usage Symptoms */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Usage Symptoms
            </label>
            <div className="mt-2 space-y-1">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="usageSymptoms"
                  value="sleep disturbance"
                  checked={formData.usageSymptoms.includes("sleep disturbance")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Sleep Disturbance</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="usageSymptoms"
                  value="anxiety"
                  checked={formData.usageSymptoms.includes("anxiety")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="">Anxiety</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="usageSymptoms"
                  value="headache"
                  checked={formData.usageSymptoms.includes("headache") }
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="">Headache</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="usageSymptoms"
                  value="all of these"
                  checked={formData.usageSymptoms.includes("all of these")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="">All of these</span>
              </label>
              {/* Add more symptom options as needed */}
            </div>
          </div>

          {/* Symptom Frequency */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Symptom Frequency
            </label>
            <select
              name="symptomFrequency"
              value={formData.symptomFrequency}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="">Select Frequency</option>
              <option value="never">Never</option>
              <option value="sometimes">Sometimes</option>
              <option value="frequently">Frequently</option>
            </select>
          </div>

          {/* Health Precautions */}
          {/* Replace with your own options for health precautions */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Health Precautions
            </label>
            <div className="mt-2 space-y-1">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="healthPrecautions"
                  value="using blue light filter"
                  checked={formData.healthPrecautions.includes("using blue light filter")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Using Blue light filter</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="healthPrecautions"
                  value="taking break during prolonged use"
                  checked={formData.healthPrecautions.includes("taking break during prolonged use")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Taking Break During Prolonged Use</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="healthPrecautions"
                  value="limiting screen time"
                  checked={formData.healthPrecautions.includes("limiting screen time")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Limiting Screen Time</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="healthPrecautions"
                  value="none of the above"
                  checked={formData.healthPrecautions.includes("none of the above")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">None of the above</span>
              </label>
              {/* Add more health precaution options as needed */}
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Personalized;
