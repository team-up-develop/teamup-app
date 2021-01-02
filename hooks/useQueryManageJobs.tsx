import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Master from '../master'

export default function useQueryManageJobs() {
  const [manageJobs, setManageJobs] = useState<any[]>([]); 
  
  useEffect(() => { 
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const response = await axios.get(`${Master.API}/job/?user_id=1`);
      setManageJobs(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return manageJobs;
}
