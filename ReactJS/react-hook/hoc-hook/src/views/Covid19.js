import "../Style/global.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Covid19 = () => {
  const [dataCovid, setDataCovid] = useState([]);

  useEffect(async () => {
    let res = await axios.get(
      "https://api.covid19api.com/country/vietnam?from=2021-09-20T00:00:00Z&to=2021-10-20T00:00:00Z"
    );
    let data = res && res.data ? res.data : [];
    setDataCovid(data);
    console.log(dataCovid);
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Covid19;
