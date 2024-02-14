/* eslint-disable react/prop-types */

import ContentRequests from "./ContentRequests/ContentRequests";
import JobSearch from "./JobSearch/JobSearch";
import Pageheader from "./Pageheader";
import { useState } from "react";

function Jobs() {
  const [activeJobs, setActiveJobs] = useState("Content Request");

  return (
    <div className="jobs max-w-4xl m-auto">
      <div className="flex pb-2 text-center justify-around mb-3">
        <Pageheader
          onClick={() => setActiveJobs("Content Request")}
          activeType={activeJobs}
          button="Content Request"
        />

        <Pageheader
          onClick={() => setActiveJobs("Job")}
          activeType={activeJobs}
          button="job"
        />
      </div>

      {activeJobs === "Content Request" ? <ContentRequests /> : <JobSearch />}
    </div>
  );
}

export default Jobs;
