import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className="my-28">
            <div className="text-center">
                <h1 className="font-bold text-4xl text-[#1A1919] ">Featured Jobs </h1>
                <p className='text-base mt-5 text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 gap-5 mt-6 md:grid-cols-2 ">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="flex items-center justify-center mt-8">
                <button
                    onClick={() => setDataLength(jobs.length)}
                    className={dataLength === jobs.length ? "hidden" : "btn px-6 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-semibold text-white"}>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;