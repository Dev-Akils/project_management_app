import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// npm install highcharts highcharts-react-official

const SalesChart = () => {
  const options = {
    chart: {
      type: "line",
      backgroundColor: "transparent",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      title: {
        text: "Sales (₹)",
      },
    },
    series: [
      {
        name: "Sales",
        data: [1200, 1900, 3000, 2500, 2800, 3500, 4200],
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default SalesChart;
