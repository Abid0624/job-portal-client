import React from "react";
import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div>
      <div className="card  hover:bg-blue-200 bg-blue-50 h-[500px] shadow-xl ">
        <div className="flex justify-center h-[116px] gap-4 items-center">
          <figure>
            <img className="w-16" src={company_logo} alt="company" />
          </figure>
          <div>
            <h4 className="text-2xl">{company}</h4>
            <p className="text-gray-500 flex gap-1 items-center">
              <FaMapMarkerAlt />
              {location}
            </p>
          </div>
        </div>
        <div className="card-body text-left">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>

          <p className="text-left">{description}</p>
          <div className="flex gap-1 justify-center items-center flex-wrap">
            {requirements.map((skill, index) => (
              <p
                key={index}
                className="border p-2 text-blue-700 border-blue-600 shadow-lg hover:bg-blue-600 hover:text-white rounded-lg"
              >
                {skill}
              </p>
            ))}
          </div>
          <div className="card-actions items-center justify-center">
            <p className="flex items-center">
              <span className="font-bold"> Salary: </span>
              <FaDollarSign></FaDollarSign>
              {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
            </p>
            <Link to={`/jobs/${_id}`}>
              <button className="btn btn-primary">Apply</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
