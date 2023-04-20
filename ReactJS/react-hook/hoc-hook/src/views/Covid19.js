import "../Style/global.scss";
import useFetch from "../customize/fetch.js";
import moment from "moment";

/*
  https://api.covid19api.com/country/vietnam?from=2021-09-20T00:00:00Z&to=2021-10-20T00:00:00Z
  https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#071be6ab-ebcc-40dc-be8b-9209ab7caca5
*/

const Covid19 = () => {
  // Date
  var currentDate = new Date();
  var beforeDate = new Date(new Date().setDate(currentDate.getDate() - 30));

  beforeDate = moment(beforeDate).format("2021-MM-DD");
  currentDate = moment(currentDate).format("2021-MM-DD");

  const url = `https://api.covid19api.com/country/vietnam?from=${beforeDate}T00:00:00Z&to=${currentDate}T00:00:00Z`;

  const { dataCovid, isLoading, isErr, message } = useFetch(url);

  return (
    <div className="CovidLoadBoard">
      <h1>Covid tracking in Vietnam 2021</h1>
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
          {isLoading === true &&
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
          {isLoading === false && (
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
