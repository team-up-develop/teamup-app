import React, { useState, useEffect } from 'react';
import { Job } from '../types/index';
import axios from 'axios';
import Master from '../master'

export default function useQueryJobs() {
  const [jobs, setJobs] = useState<Job[]>([]); 

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const response = await axios.get<Job[]>(`${Master.API}/job`);
      setJobs(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return jobs;
}
