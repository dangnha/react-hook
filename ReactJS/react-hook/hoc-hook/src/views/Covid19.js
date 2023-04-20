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
  // Date
  var currentDate = new Date();
  var beforeDate = new Date(new Date().setDate(currentDate.getDate() - 30));

  beforeDate = moment(beforeDate).format("2021-MM-DD");
  console.log(beforeDate);

  currentDate = moment(currentDate).format("2021-MM-DD");
  console.log(currentDate);

  useEffect(async () => {
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
          {dataCovid &&
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
        </tbody>
      </table>
    </div>
  );
};

export default Covid19;
