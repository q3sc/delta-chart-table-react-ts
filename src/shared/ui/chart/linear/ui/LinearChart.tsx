import { LineChart } from "@mui/x-charts";

const LinearChart = () => {
  const color = "#037D50";
  const yData = Array(6).fill(0).map(() => Math.random() * 10);
  const xData = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <LineChart
      height={300}
      series={[
        {
          data: yData,
          color: color,
          curve: "linear",
          showMark: true,
          shape: "square",
        },
      ]}
      xAxis={[
        {
          data: xData,
          valueFormatter: () => "",
        },
      ]}
      yAxis={[
        {
          valueFormatter: () => "",
        },
      ]}
    />
  );
};

export default LinearChart;