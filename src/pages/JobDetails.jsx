import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaUserTie,
  FaDollarSign,
} from "react-icons/fa";
import { motion } from "framer-motion";

const JobDetails = () => {
  const {
    title,
    company,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    company_logo,
  } = useLoaderData();

  return (
    <motion.div
      className="max-w-5xl mx-auto my-10 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
          <img
            src={company_logo}
            alt={company}
            className="w-20 h-20 rounded-lg object-contain"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-gray-600 text-lg">{company}</p>
          </div>
        </div>

        {/* Job Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 mb-6">
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-500" /> {location}
          </p>
          <p className="flex items-center gap-2">
            <FaUserTie className="text-green-500" /> Type: {jobType}
          </p>
          <p className="flex items-center gap-2">
            <FaDollarSign className="text-yellow-500" /> Salary:{" "}
            {salaryRange.min} - {salaryRange.max}{" "}
            {salaryRange.currency.toUpperCase()}
          </p>
          <p>Category: {category}</p>
          <p>Deadline: {applicationDeadline}</p>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Job Description</h3>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>

        {/* Requirements */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Requirements</h3>
          <ul className="list-disc list-inside text-gray-700">
            {requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>

        {/* Responsibilities */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
          <ul className="list-disc list-inside text-gray-700">
            {responsibilities.map((res, i) => (
              <li key={i}>{res}</li>
            ))}
          </ul>
        </div>

        {/* HR Info + Apply Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t pt-4 gap-4">
          <div>
            <h3 className="text-lg font-semibold">HR Contact</h3>
            <p className="text-gray-700 flex items-center gap-2">
              <FaUserTie /> {hr_name}
            </p>
            <p className="text-gray-700 flex items-center gap-2">
              <FaEnvelope /> {hr_email}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 md:mt-0 px-6 py-2 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Apply Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default JobDetails;
