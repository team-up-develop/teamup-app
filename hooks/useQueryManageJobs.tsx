import React, { useState, useEffect } from "react";
import axios from "axios";
import Master from "../master";

export default function useQueryManageJobs() {
  const [manageJobs, setManageJobs] = useState<any[]>([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const res = await axios.get(`${Master.API}/jobs?user_id=1`);
      // console.log(res.data.response);
      setManageJobs(res.data.response);
    } catch (error) {
      console.error(error);
    }
  };

  return manageJobs;
}
