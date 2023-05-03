import "../Style/global.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url, isCovidData) => {
  const [dataOutput, setDataOutput] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    async function fetchDate() {
      try {
        let res = await axios.get(url, {
          cancelToken: source.token,
        });
        let data = res && res.data ? res.data : [];
        if (data && data.length > 0 && isCovidData === true) {
          data.map((item) => {
            item.Date = moment(item.Date).format(`DD/MM/YYYY`);
            return item;
          });
        }
        setDataOutput(data);
        setIsLoading(true);
        setIsErr(false);
      } catch (e) {
        if (axios.isCancel(e)) {
          console.log("Request canceled", e.message);
        } else {
          setIsErr(true);
          setIsLoading(true);
          setMessage(e.message);
          console.log(e.message);
        }
      }
    }

    fetchDate();

    return () => {
      source.cancel("Covid19: Request canceled");
    };
  }, [url]);

  return {
    dataOutput,
    isLoading,
    isErr,
    message,
  };
};

export default useFetch;
