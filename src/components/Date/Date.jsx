import "./Date.scss";

const Date = (props) => {
    // eslint-disable-next-line react/prop-types
    const year = props.date.getFullYear();
    // eslint-disable-next-line react/prop-types
    const month = props.date.toLocaleString("default", {month: "long"});
    // eslint-disable-next-line react/prop-types
    const day = props.date.getDate();
    return (
        <div className="date">


            <div className="date__month">{month}</div>
            <div className="date__year">{year}</div>
            <div className="date__day">{day}</div>
        </div>
    );
};

export default Date;
