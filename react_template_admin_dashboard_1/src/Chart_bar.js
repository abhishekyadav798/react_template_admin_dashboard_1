import React from 'react';
import {Bar} from 'react-chartjs-2';
const data = {
  labels: [Date().toLocaleString(),2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40],
      barThickness:20
    }
  ]
};
const options = {
    // title:{
    //   display:false,
    //   text:'Average Rainfall per month',
    //   fontSize:10
    // },
    plugins: {
        legend: {
          display: false
        }
      },
    scales:{
            xAxes: {
                
                display: false //this will remove all the x-axis grid lines  
            },
            y:{
                display: false
            }}};
function Chart2() {
  return (
    <div>
        <Bar
          data={data}
          options={options}
          // width={100} 
          height={55} 
          // options={{
          //   maintainAspectRatio: false
          // }}
        />
    </div>
  );
}
export default Chart2;