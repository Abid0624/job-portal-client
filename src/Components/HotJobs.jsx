import React, { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  const uniqueCategories = [...new Set(jobs.map((job) => job.category))];

  return (
    <div>
      <div className="mt-8 mb-4 text-center">
        <h2 className="text-3xl font-bold">Jobs Of The Day</h2>
        <p className="my-2 text-xl font-thin">
          Search and connect with the right candidates faster.{" "}
        </p>
        <div className="flex justify-center mt-4 mb-6 flex-wrap gap-4">
          {uniqueCategories.map((category) => (
            <div className="px-3 py-2 border rounded-xl border-blue-500 shadow-3xl text-blue-500">
              {category}
            </div>
          ))}
        </div>
        <div className="w-11/12 mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {jobs.map((job) => (
            <HotJobCard key={job._id} job={job}></HotJobCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotJobs;
