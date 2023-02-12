import '../styles/Widgets.css';

function Month(props) {
  return(
    <div className={props.month}>
        <div className="XShape"></div>
        <div className="XName">{props.month}</div>
    </div>
  );
}

export default Month;