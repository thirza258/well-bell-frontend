import React, { useState } from "react";
import doctor from "../assets/doctors.svg";
import services from "../services/services";
import { useNavigate } from "react-router-dom";

export interface FormData {
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
  performanceImpact: string;
}

const Personalized = () => {
  const navigate = useNavigate();
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
    performanceImpact: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
          ? [...(prevData[name as keyof FormData] || []), value]
          : (prevData[name as keyof FormData] as string[]).filter(
              (val: string) => val !== value
            ),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await services.returnFormData(formData);
      setResponseMessage(response.data);
      console.log("Data saved successfully:", response.data);

      const score = response.data.prediction;
      const description = response.data.description;
      console.log(responseMessage)
      navigate("/returnee", { state: { score, description } });
    } catch (error) {
      console.error("Error submitting form data:", error);
      setResponseMessage("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="flex">
      <div className="w-1/2">
        <img
          src={doctor}
          alt="Health Ratings"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-1/2 max-w-md mx-auto p-4 overflow-y-auto">
        <h1 className="text-2xl font-bold text-center mb-4">
          Personalized Recommendations
        </h1>
        <p className="text-center mb-4 text-gray-600">
          This form will determine your health and provide personalized
          recommendations based on your mobile phone usage habits. Please fill
          out all the fields accurately to get the best possible advice tailored
          to your needs. Your responses will help us understand how you use your
          mobile phone for educational purposes, the activities you engage in,
          and any symptoms you may experience due to prolonged usage. We aim to
          offer suggestions that can improve your overall well-being and enhance
          your learning experience.
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
                  value="Sometimes"
                  checked={formData.educationUse === "Sometimes"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="">Sometimes</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="radio"
                  name="educationUse"
                  value="Frequently"
                  checked={formData.educationUse === "Frequently"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span>Frequently</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="radio"
                  name="educationUse"
                  value="Rarely"
                  checked={formData.educationUse === "Rarely"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span>Rarely</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="radio"
                  name="educationUse"
                  value="Never"
                  checked={formData.educationUse === "Never"}
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
                  value="Social Media"
                  checked={formData.activities.includes("Social Media")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Social Media</span>
              </label>

              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="activities"
                  value="Web Browsing"
                  checked={formData.activities.includes("Web Browsing")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="">Web Browsing</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="activities"
                  value="Messaging"
                  checked={formData.activities.includes("Messaging")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="">Messaging</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="activities"
                  value="All of these"
                  checked={formData.activities.includes("All of these")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="">All of these</span>
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
                  value="Educational Videos"
                  checked={formData.educationalApps.includes(
                    "Educational Videos"
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
                  value="Language"
                  checked={formData.educationalApps.includes("Language")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="">Language</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="educationalApps"
                  value="Productivity Tools"
                  checked={formData.educationalApps.includes(
                    "Productivity Tools"
                  )}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="">Productivity Tools</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="educationalApps"
                  value="Study Planner"
                  checked={formData.educationalApps.includes("Study Planner")}
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
                  value="< 2 hours"
                  checked={formData.dailyUsage === "< 2 hours"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">&lt; 2 hour</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="dailyUsage"
                  value="2-4 hours"
                  checked={formData.dailyUsage === "2-4 hours"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">2-4 hours</span>
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
                  value="Not Distracting"
                  checked={formData.usageDistraction === "Not Distracting"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Not Distracting</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="usageDistraction"
                  value="While Studying"
                  checked={formData.usageDistraction === "While Studying"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">While Studying</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="usageDistraction"
                  value="During Class Lectures"
                  checked={
                    formData.usageDistraction === "During Class Lectures"
                  }
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">During Class Lectures</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="usageDistraction"
                  value="During Exams"
                  checked={formData.usageDistraction === "During Exams"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">During Exams</span>
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
                  value="Internet Access"
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
                  value="Browsing Material"
                  checked={formData.beneficialSubjects.includes(
                    "Browsing Material"
                  )}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Browsing Material</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="beneficialSubjects"
                  value="Accounting"
                  checked={formData.beneficialSubjects.includes("Accounting")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="">Accounting</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="beneficialSubjects"
                  value="Reasarch"
                  checked={formData.beneficialSubjects.includes("Reasarch")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="">Reasarch</span>
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
                  value="Sleep disturbance"
                  checked={formData.usageSymptoms.includes("Sleep disturbance")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Sleep Disturbance</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="usageSymptoms"
                  value="Anxiety or Stress"
                  checked={formData.usageSymptoms.includes("Anxiety or Stress")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="">Anxiety or Stress</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="usageSymptoms"
                  value="Headache"
                  checked={formData.usageSymptoms.includes("Headache")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="">Headache</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  name="usageSymptoms"
                  value="All of these"
                  checked={formData.usageSymptoms.includes("All of these")}
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
              <option value="Never">Never</option>
              <option value="Rarely">Rarely</option>
              <option value="Sometimes">Sometimes</option>
              <option value="Frequently">Frequently</option>
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
                  value="Using Blue Light filter"
                  checked={formData.healthPrecautions.includes(
                    "Using Blue Light filter"
                  )}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Using Blue light filter</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="healthPrecautions"
                  value="Taking Break during prolonged use"
                  checked={formData.healthPrecautions.includes(
                    "Taking Break during prolonged use"
                  )}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Taking Break During Prolonged Use</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="healthPrecautions"
                  value="Limiting Screen Time"
                  checked={formData.healthPrecautions.includes(
                    "Limiting Screen Time"
                  )}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Limiting Screen Time</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="healthPrecautions"
                  value="None of Above"
                  checked={formData.healthPrecautions.includes("None of Above")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">None of Above</span>
              </label>
              {/* Add more health precaution options as needed */}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Performance Impact
            </label>
            <div className="mt-2 space-y-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="performanceImpact"
                  value="Strongly Agree"
                  checked={formData.performanceImpact === "Strongly Agree"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span>Strongly Agree</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="radio"
                  name="performanceImpact"
                  value="Agree"
                  checked={formData.performanceImpact === "Agree"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span>Agree</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="radio"
                  name="performanceImpact"
                  value="Neutral"
                  checked={formData.performanceImpact === "Neutral"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span>Neutral</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="radio"
                  name="performanceImpact"
                  value="Disagree"
                  checked={formData.performanceImpact === "Disagree"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span>Disagree</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="radio"
                  name="performanceImpact"
                  value="Strongly Disagree"
                  checked={formData.performanceImpact === "Strongly Disagree"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span>Strongly Disagree</span>
              </label>
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
