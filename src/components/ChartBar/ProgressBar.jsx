import "./ProgressBar.scss";
const ProgressBar = (props) => {
    const months = props.month
    const height = props.barHight+"%"
  return (
    <div className="bar-container">
      <div class="bar-backgroud">
        <div class="bar-backgroud__bar" style={{height:height}}></div>
      </div>
      <label>{months}</label>
    </div>
  );
};

export default ProgressBar;
