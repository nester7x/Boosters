import React, { useEffect, useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { countCasesDay } from "utils/casesPerDay";
import { countRange } from "utils/rangeOfCases";
import { api } from "utils/apiUtils";

import * as S from "./styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const LiveByCountry = () => {
  const [countries, setCountries] = useState([]);
  const [fieldData, setFieldData] = useState({
    country: "Ukraine",
    dateFrom: "2021-09-29T23:08:34.402Z",
    selectedCase: "Confirmed"
  });

  const [data, setData] = useState([]);

  const handleFieldChange = (event) => {
    const { target } = event;
    const updatedFieldData = { ...fieldData, [target.name]: target.value };
    setFieldData(updatedFieldData);

    const url = `${window.location.origin}${window.location.pathname}?country=${updatedFieldData.country}&from=${updatedFieldData.dateFrom}&selectedCase=${updatedFieldData.selectedCase}`;

    window.history.pushState(null, "", url);
  };

  const countCases = (startDate, finalDate) => {
    const array = [];
    const dateRange = countRange(startDate, finalDate);

    dateRange.forEach((currentDay) => {
      const cases = countCasesDay(data, currentDay, fieldData.selectedCase);
      array.push(cases);
    });

    return array;
  };

  const colorShow = (selectedCase) => {
    const color = [];
    if (selectedCase === "Confirmed") {
      color.push("#feaa47");
    } else if (selectedCase === "Deaths") {
      color.push("#fe6e6e");
    } else if (selectedCase === "Recovered") {
      color.push("#6ffc00");
    } else {
      color.push("#ffffff");
    }
    return color;
  };

  const barData = {
    labels: countRange(fieldData.dateFrom.split("T")[0].slice(0, 7), "2023-01"),
    datasets: [
      {
        label: fieldData.selectedCase,
        fill: false,
        data: countCases(
          fieldData.dateFrom.split("T")[0].slice(0, 7),
          "2023-01"
        ),
        backgroundColor: colorShow(fieldData.selectedCase)
      }
    ]
  };

  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    (async () => {
      const searchParams = new URLSearchParams(window.location.search);
      const country = searchParams.get("country") || fieldData.country;
      const dateFrom = searchParams.get("from") || fieldData.dateFrom;
      const selectedCase =
        searchParams.get("selectedCase") || fieldData.selectedCase;

      await setFieldData({
        country,
        dateFrom,
        selectedCase
      });

      const newData = await api.get(
        `country/${fieldData.country}?from=${fieldData.dateFrom}&to=2023-01-27T21:08:16.708Z}`
      );
      setData(newData);
    })();
  }, [fieldData.country, fieldData.dateFrom]);

  useEffect(() => {
    (async () => {
      const sessionCountries = sessionStorage.getItem("countries");
      if (sessionCountries) {
        setCountries(JSON.parse(sessionCountries));
      } else {
        const newCountries = await api.get("countries");
        setCountries(newCountries);
        sessionStorage.setItem("countries", JSON.stringify(newCountries));
      }
    })();
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    barPercentage: 0.5,
    categoryPercentage: 0.5,
    scales: {
      x: {
        ticks: {
          font: {
            size: 16
          }
        }
      }
    }
  };

  return (
    <S.Wrapper>
      <S.Fields>
        <FormControl variant="outlined" style={{ margin: "16px" }}>
          <InputLabel htmlFor="country">Country</InputLabel>
          <Select
            name="country"
            label="Country"
            value={fieldData.country}
            onChange={handleFieldChange}
            inputProps={{ id: "country" }}
          >
            {countries?.map((item) => (
              <MenuItem value={item.Country}>{item.Country}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" style={{ margin: "16px" }}>
          <InputLabel htmlFor="date-from">Date From</InputLabel>
          <Select
            name="dateFrom"
            label="Date From"
            value={fieldData.dateFrom}
            onChange={handleFieldChange}
            inputProps={{ id: "date-from" }}
          >
            <MenuItem value="2021-09-29T23:08:34.402Z">2021-09</MenuItem>
            <MenuItem value="2021-10-29T23:08:34.402Z">2021-10</MenuItem>
            <MenuItem value="2021-11-29T23:08:34.402Z">2021-11</MenuItem>
            <MenuItem value="2021-12-29T23:08:34.402Z">2021-12</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" style={{ margin: "16px" }}>
          <InputLabel htmlFor="selected-case">Case</InputLabel>
          <Select
            name="selectedCase"
            label="Case"
            value={fieldData.selectedCase}
            onChange={handleFieldChange}
            inputProps={{ id: "selected-case" }}
          >
            <MenuItem value="Confirmed">Confirmed</MenuItem>
            <MenuItem value="Deaths">Deaths</MenuItem>
            <MenuItem value="Recovered">Recovered</MenuItem>
          </Select>
        </FormControl>
      </S.Fields>
      <Bar data={barData} options={options} />
    </S.Wrapper>
  );
};

export default LiveByCountry;
