import GeneralComponent from "./GeneralComponent";

const CounterOne:React.FC = (props:any) => {
    const {count, counter} = props;
  return (
    <div className="d-flex align-items-center">
    <p className="btn ">{count}</p>
    <button className="btn btn-success" onClick={counter}>+</button>
    </div>
    
  )
}

export default GeneralComponent(CounterOne)