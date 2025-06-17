import React from "react";
import Swal from "sweetalert2";
import UseAuth from "../hooks/UseAuth";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const { user } = UseAuth();
  const navigate = useNavigate();

  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries());
    const initialData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);

    fetch("http://localhost:3000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Job has been added!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/myPostedJobs");
      });
  };
  return (
    <div>
      <h2 className="text-3xl my-4 text-center text-purple-600 font-bold">
        Post a new job
      </h2>
      <form onSubmit={handleAddJob} className="card-body">
        {/* job title */}
        <fieldset className="fieldset">
          <label className="label">Job Title</label>
          <input
            type="text"
            name="title"
            className="input w-full"
            placeholder="Job Title"
            required
          />
          {/* Job location */}
          <label className="label">Job Location</label>
          <input
            type="text"
            name="location"
            className="input w-full"
            placeholder="Job Location"
            required
          />
          <div className="flex gap-3">
            {/* job type */}
            <div className="w-1/2">
              <label className="label flex mb-2">Job Type</label>
              <select
                defaultValue="Pick a Job type"
                className="select select-ghost"
                name="jobType"
              >
                <option disabled={true}>Pick a Job type</option>
                <option>Full Time</option>
                <option>Intern</option>
                <option>Part Time</option>
              </select>
            </div>
            <div className="w-1/2">
              {/* job category */}
              <label className="label flex mb-2">Job Field</label>
              <select
                defaultValue="Pick a Job field"
                className="select select-ghost"
                name="category"
              >
                <option disabled={true}>Pick a Job field</option>
                <option>Engineering</option>
                <option>Marketing</option>
                <option>Finance</option>
                <option>Design</option>
                <option>Teaching</option>
                <option>Data</option>
              </select>
            </div>
          </div>
          {/* salary range */}

          <div className="grid grid-cols-1 lg:grid-cols-3 items-end gap-4">
            <div>
              <label className="label flex">Salary Range</label>
              <input
                type="text"
                name="min"
                className="input"
                placeholder="Min"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="max"
                className="input"
                placeholder="Max"
                required
              />
            </div>
            <div>
              <select
                defaultValue="Pick a Currency"
                className="select select-ghost"
                name="currency"
              >
                <option disabled={true}>Pick a Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>INR</option>
              </select>
            </div>
          </div>
          {/* job description */}
          <label className="label">Job Description</label>

          <textarea
            className="textarea w-full"
            name="description"
            placeholder="Job Description"
            required
          ></textarea>
          {/* Company Name */}
          <label className="label">Company Name</label>
          <input
            type="text"
            name="company"
            className="input w-full"
            placeholder="Company Name"
            required
          />
          {/* requirements */}
          <label className="label">Job Requirements</label>

          <textarea
            className="textarea w-full"
            name="requirements"
            placeholder="Put each requirements in a new line"
            required
          ></textarea>
          {/* responsibilities */}
          <label className="label">Responsibilities</label>

          <textarea
            className="textarea w-full"
            name="responsibilities"
            placeholder="Write each responsibility in a new line"
            required
          ></textarea>
          {/* HR Name */}
          <label className="label">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="input w-full"
            placeholder="HR Name"
            required
          />
          {/* HR Email */}
          <label className="label">HR Email</label>
          <input
            type="email"
            name="hr_email"
            defaultValue={user?.email}
            className="input w-full"
            placeholder="HR Email"
            required
          />
          {/* application Deadline */}
          <label className="label">Application Deadline</label>
          <input
            type="date"
            name="applicationDeadline"
            className="input w-full"
            placeholder="Application Deadline"
            required
          />
          {/* Company Logo URL */}
          <label className="label">Company Logo URL</label>
          <input
            type="text"
            name="company_logo"
            className="input w-full"
            placeholder="Company Logo URL"
            required
          />
          {/* submit button */}
          <button className="btn btn-neutral mt-4">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;
