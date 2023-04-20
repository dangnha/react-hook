import "../Style/global.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

/*
  https://api.covid19api.com/country/vietnam?from=2021-09-20T00:00:00Z&to=2021-10-20T00:00:00Z
  https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#071be6ab-ebcc-40dc-be8b-9209ab7caca5
*/

const Covid19 = () => {
  const [dataCovid, setDataCovid] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [message, setMessage] = useState("");
  // Date
  var currentDate = new Date();
  var beforeDate = new Date(new Date().setDate(currentDate.getDate() - 30));

  beforeDate = moment(beforeDate).format("2021-MM-DD");

  currentDate = moment(currentDate).format("2021-MM-DD");

  useEffect(async () => {
    try {
      let res = await axios.get(
        `https://api.covid19api.com/country/vietnam?from=${beforeDate}T00:00:00Z&to=${currentDate}T00:00:00Z`
      );
      let data = res && res.data ? res.data : [];
      if (data && data.length > 0) {
        data.map((item) => {
          item.Date = moment(item.Date).format(`DD/MM/YYYY`);
          return item;
        });
      }
      setDataCovid(data);
      setLoading(true);
      setIsErr(false);
    } catch (e) {
      setIsErr(true);
      setLoading(true);
      setMessage(e.message);
      console.log(e.message);
    }
  }, []);

  return (
    <div className="CovidLoadBoard">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {loading === true &&
            dataCovid &&
            dataCovid.length > 0 &&
            [...dataCovid].reverse().map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Date}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                </tr>
              );
            })}
          {loading === false && (
            <tr className="load-data">
              <td colSpan="5">Loading...</td>
            </tr>
          )}
          {isErr === true && (
            <tr className="load-data">
              <td colSpan="5">{message}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Covid19;
