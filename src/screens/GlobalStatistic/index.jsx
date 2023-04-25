import React, { useEffect, useState } from "react";
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

const GlobalStatistic = () => {
  const [fieldData, setFieldData] = useState({
    dateFrom: "2021-09-29T23:08:34.402Z",
    dateTo: "2023-01-27T21:08:16.708Z",
    selectedCase: "NewConfirmed"
  });

  const [data, setData] = useState([]);

  const handleFieldChange = (event) => {
    const { target } = event;
    const updatedFieldData = { ...fieldData, [target.name]: target.value };
    setFieldData(updatedFieldData);

    const url = `${window.location.origin}${window.location.pathname}?from=${updatedFieldData.dateFrom}&to=${updatedFieldData.dateTo}&selectedCase=${updatedFieldData.selectedCase}`;

    window.history.pushState(null, "", url);
  };

  const countAllCases = () => {
    let counter = 0;
    data.map((day) => {
      counter += day?.[fieldData.selectedCase];
    });
    return counter;
  };

  const barData = {
    labels: [fieldData.selectedCase],
    datasets: [
      {
        label: "covid-19",
        fill: false,
        data: [countAllCases()],
        backgroundColor: ["white"]
      }
    ]
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const dateFrom = searchParams.get("from") || fieldData.dateFrom;
    const dateTo = searchParams.get("to") || fieldData.dateTo;
    const selectedCase =
      searchParams.get("selectedCase") || fieldData.selectedCase;

    setFieldData({
      dateFrom,
      dateTo,
      selectedCase
    });

    (async () => {
      setData(
        await api.get(`world?from=${fieldData.dateFrom}&to=${fieldData.dateTo}`)
      );
    })();
  }, [fieldData.dateFrom, fieldData.dateTo]);

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
          <InputLabel htmlFor="date-from">Date From</InputLabel>
          <Select
            name="dateFrom"
            label="Date From"
            value={fieldData.dateFrom}
            onChange={handleFieldChange}
            inputProps={{ id: "date-from" }}
          >
            <MenuItem value="2021-09-29T23:08:34.402Z">2021-09-29</MenuItem>
            <MenuItem value="2021-10-29T23:08:34.402Z">2021-10-29</MenuItem>
            <MenuItem value="2021-11-29T23:08:34.402Z">2021-11-29</MenuItem>
            <MenuItem value="2021-12-29T23:08:34.402Z">2021-12-29</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" style={{ margin: "16px" }}>
          <InputLabel htmlFor="date-to">Date To</InputLabel>
          <Select
            name="dateTo"
            label="Date To"
            value={fieldData.dateTo}
            onChange={handleFieldChange}
            inputProps={{ id: "date-to" }}
          >
            <MenuItem value="2023-01-27T21:08:16.708Z">2023-01-27</MenuItem>
            <MenuItem value="2022-12-27T21:08:16.708Z">2022-12-27</MenuItem>
            <MenuItem value="2022-11-27T21:08:16.708Z">2022-11-27</MenuItem>
            <MenuItem value="2022-10-27T21:08:16.708Z">2022-10-27</MenuItem>
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
            <MenuItem value="NewConfirmed">New Confirmed</MenuItem>
            <MenuItem value="NewDeaths">New Deaths</MenuItem>
            <MenuItem value="TotalDeaths">Total Deaths</MenuItem>
            <MenuItem value="NewRecovered">New Recovered</MenuItem>
            <MenuItem value="TotalRecovered">Total Recovered</MenuItem>
          </Select>
        </FormControl>
      </S.Fields>
      <Bar data={barData} options={options} />
    </S.Wrapper>
  );
};

export default GlobalStatistic;
