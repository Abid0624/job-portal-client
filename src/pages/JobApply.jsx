import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = UseAuth();
  const navigate = useNavigate();

  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    console.log(linkedin, github, resume);

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      github,
      resume,
    };

    fetch("http://localhost:3000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "You successfully applied to this job",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/myApplications");
      });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-5xl font-bold text-center">Apply Job & Good Luck!</h2>

      <div className=" my-10 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={submitJobApplication} className="card-body">
          <fieldset className="fieldset">
            <label className="label">LinkedIn URL</label>
            <input
              type="url"
              name="linkedin"
              className="input"
              placeholder="EmailLinkedIn URL"
            />
            <label className="label">Github URL</label>
            <input
              type="url"
              name="github"
              className="input"
              placeholder="Github URL"
            />
            <label className="label">Resume URL</label>
            <input
              type="url"
              name="resume"
              className="input"
              placeholder="Resume URL"
            />

            <button className="btn btn-neutral mt-4">Apply</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
