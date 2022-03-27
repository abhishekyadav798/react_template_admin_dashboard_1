import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const Barchart1 = () => {
  const data = {
    labels: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    datasets: [
      {
        label: 'Hours Studied in Geeksforgeeks',
        data: [2, 5, 7, 9, 7, 6, 4],
        fill: true,
        backgroundColor: 'rgba(6, 156,51, .3)',
        borderColor: '#02b844'
      }
    ]
  }
  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        display: false //this will remove all the x-axis grid lines
      },
      y: {
        display: false //this will remove all the y-axis grid lines
      }
    }
  }

  return (
    <div className='Barchart1'>
      <Bar data={data} options={options} />
    </div>
  )
}

export default Barchart1
