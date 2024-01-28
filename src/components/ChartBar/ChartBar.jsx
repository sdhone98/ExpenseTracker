import ProgressBar from "./ProgressBar";
import "./ChartBar.scss";
const ChartBar = (props) => {
  const totalCount = props.totalCount;
  props.data.map((month) => {
    const cal = month.value / totalCount;
  });

  return (
    <div className="chart-bar-list">
      {props.data.map((month) => (
        <ProgressBar month={month.label} barHight={month.value} />
      ))}
    </div>
  );
};

export default ChartBar;
