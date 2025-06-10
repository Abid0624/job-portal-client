import React from "react";
import { easeOut, motion } from "motion/react";
import team1 from "../assets/team/team1.jpg";
import team2 from "../assets/team/team2.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <motion.img
              animate={{ y: [25, 65, 25] }}
              transition={{ duration: 10, repeat: Infinity }}
              src={team1}
              className="max-w-sm w-40 md:w-72 rounded-t-[40px] rounded-br-[40px] border-l-[6px] border-b-[6px] border-blue-600 shadow-2xl"
            />
            <motion.img
              animate={{ x: [75, 115, 75] }}
              transition={{ duration: 10, delay: 5, repeat: Infinity }}
              src={team2}
              className="max-w-sm w-40 md:w-72 rounded-t-[40px] rounded-br-[40px] border-l-[6px] border-b-[6px] border-blue-600 shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <motion.h1
              animate={{ x: 50 }}
              transition={{
                duration: 2,
                delay: 1,
                ease: easeOut,
                repeat: Infinity,
              }}
              className="text-5xl font-bold"
            >
              Latest{" "}
              <motion.span
                animate={{ color: ["#3633ff ", "#f6ff33  "] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Jobs
              </motion.span>{" "}
              For You!
            </motion.h1>
            <p className="py-6">
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
