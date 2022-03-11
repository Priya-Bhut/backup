/* ----------------------------------For Creating Graph Use react-chartjs-2 library---------------------------------- */

import React from "react";
import "./graph.css";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  TimeScale,
  Legend
);

function Graph() {
  const data = {
    labels: [
      "03-MAR-22",
      "05-MAR-22",
      "07-MAR-22",
      "09-MAR-22",
      "11-MAR-22",
      "13-MAR-22",
      "15-MAR-22",
      "17-MAR-22",
    ],
    datasets: [
      {
        label: null,
        data: [33, 53, 55, 41, 44, 65, 12, 45],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <div className="main-div">
        {/*---------------------------------------Creating a Graph---------------------------------------- */}
        <div className="left-div">
          <span>Check-ins</span>
          <div className="btn">
            <button className="graph-btn">Modify Plan</button>
            <button className="graph-btn">Check-in</button>
          </div>
          <Line data={data} options={options} />
        </div>
        {/*---------------------------------------Creating a History---------------------------------------- */}

        <div className="right-div">
          <div className="display_history">
            <div className="history">History</div>
            <div className="active-checkins">
              <div className="filter">
                <i class="fa fa-solid fa-filter"></i>
                <i class="fa fa-solid fa-sort-down sort-down"></i>
              </div>
              <div className="active-label">Active Check-in</div>
            </div>
            <div className="no-checkins"> No check-ins made yet.</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Graph;
