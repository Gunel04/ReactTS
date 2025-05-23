import GeneralComponent from "./GeneralComponent";

const CounterTwo:React.FC = (props:any) => {
    const {count,counter} = props;
  return (
    <div>
        <p className="btn">{count}</p>
        <button className="btn btn-info" onClick={counter}>+</button>
    </div>
  )
}

export default GeneralComponent(CounterTwo)