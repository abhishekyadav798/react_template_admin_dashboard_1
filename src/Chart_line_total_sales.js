import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import 'bootstrap/dist/css/bootstrap.min.css'

const data = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ],
  datasets: [
    {
      label: 'Stock A',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgb(212, 234, 255) ',
      borderColor: 'rgb(44, 127, 204)', // The main line color
      borderCapStyle: 'square',
      borderDash: [], // try [5, 15] for instance
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgb(44, 127, 204)',
      pointBackgroundColor: 'white',
      pointBorderWidth: 1,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: 'white',
      pointHoverBorderColor: 'none',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 5,
      // notice the gap in the data and the spanGaps: true
      data: [65, 59, 80, 81, 56, 55, 40, , 60, 55, 30, 78],
      spanGaps: true
    }
  ]
}

// Notice the scaleLabel at the same level as Ticks
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        },
        scaleLabel: {
          display: true,
          labelString: 'Moola',
          fontSize: 20
        }
      }
    ]
  },
  plugins: {
    legend: {
      display: false
    }
  }
}

export default class Chart_line_total_sales extends React.Component {
  render () {
    return (
      <div>
        <Line data={data} options={options} />
      </div>
    )
  }
}
