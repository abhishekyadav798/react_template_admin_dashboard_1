import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const state = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        'rgb(56, 156, 250)',
        'rgb(56, 221, 250)',
        'rgb(56, 250, 224)',
        'rgb(56, 250, 121)',
        'rgb(176, 250, 56)'
      ],
      hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
      ],
      data: [65, 59, 80, 81, 56],
      radius: 65,

      cutout: 90
    }
  ]
}

export default class Chart_doughnut_market_share extends React.Component {
  render () {
    return (
      <div>
        <Doughnut
          data={state}
          height={243}
          options={{
            responsive: true,
            maintainAspectRatio: false,
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
                display: false
              }
            }
          }}
        />
      </div>
    )
  }
}
