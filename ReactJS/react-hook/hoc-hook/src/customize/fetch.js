import "../Style/global.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url) => {
  const [dataCovid, setDataCovid] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      async function fetchDate() {
        let res = await axios.get(url);
        let data = res && res.data ? res.data : [];
        if (data && data.length > 0) {
          data.map((item) => {
            item.Date = moment(item.Date).format(`DD/MM/YYYY`);
            return item;
          });
        }
        setDataCovid(data);
        setIsLoading(true);
        setIsErr(false);
      }
      fetchDate();
    } catch (e) {
      setIsErr(true);
      setIsLoading(true);
      setMessage(e.message);
      console.log(e.message);
    }
  }, []);

  return {
    dataCovid,
    isLoading,
    isErr,
    message,
  };
};

export default useFetch;
