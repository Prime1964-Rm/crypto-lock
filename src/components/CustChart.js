import React from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";
// import { Line } from "react-chartjs-2";
// import faker from "faker";
import {Chart} from "react-google-charts";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const CustChart = () => {
//   const options = {
//     scales: {
//       x: {
//         grid: {
//           display: false
//         }
//       },
//       y: {
//         grid: {
//           display: false
//         }
//       }
//     },
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top"
//       },
//       title: {
//         display: true,
//         text: "Chart.js Line Chart"
//       }
//     }
//   };

//   const labels = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July"
//   ];
//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Dataset 1",
//         data: labels.map(() =>
//           faker.datatype.number({ min: -1000, max: 1000 })
//         ),
//         fill: 1,
//         borderColor: "rgb(255, 99, 132)",
//         backgroundColor: "rgba(255, 99, 132, 0.5)"
//       },
//       {
//         label: "Dataset 2",
//         data: labels.map(() =>
//           faker.datatype.number({ min: -1000, max: 1000 })
//         ),
//         borderColor: "rgb(53, 162, 235)",
//         backgroundColor: "rgba(53, 162, 235, 0.5)"
//       }
//     ]
//   };
//   return <Line options={options} data={data} />;
// };


const custGoogleChart = ({height="100px",width=200}) =>{
    return(
        <Chart
        width={width}
        height={height}
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Year', 'Sales'],
          ['2013', 1000],
          ['2014', 1170],
          ['2015', 660],
          ['2016', 1030],
        ]}
        options={{
          responsive:false,
            legend:'none',
            aspectRatio: 1,
          backgroundColor: { fill:'transparent' },
          hAxis: {  titleTextStyle: { color: '#333' },textPosition:'none' },
          vAxis: { minValue: 0 ,gridlines: {
            interval: 0
          },
          textPosition:'none',
          baselineColor: 'transparent',
          label:'none'
        },
          // For the legend to fit, we make the chart area smaller
          chartArea: { width: '50%', height: '70%' },
          // lineWidth: 25
        }}
      />
    )
}

export default custGoogleChart