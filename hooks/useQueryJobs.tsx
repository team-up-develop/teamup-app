import React, { useState, useEffect } from "react";
import { Job } from "../types/index";
import { FetchJobs } from "../types/fetch";
import axios from "axios";
import Master from "../master";

export default function useQueryJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const res = await axios.get<FetchJobs>(`${Master.API}/jobs`);
      setJobs(res.data.response);
    } catch (error) {
      console.error(error);
    }
  };

  return jobs;
}
