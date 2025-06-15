import React, { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";
import Swal from "sweetalert2";

const MyApplications = () => {
  const { user } = UseAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/job-application?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/job-application/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your job application has been deleted.",
                icon: "success",
              });
              const remaining = jobs.filter((job) => job._id !== id);
              setJobs(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="my-10 w-11/12 mx-auto">
      <h2 className="text-3xl text-center mb-4">
        MyApplications: {jobs.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job Type & Deadline</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {jobs.map((job) => (
              <tr key={job._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={job.company_logo} alt="company logo" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {job.jobType}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {job.applicationDeadline}
                  </span>
                </td>

                <th>
                  <button
                    onClick={() => handleDelete(job._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
