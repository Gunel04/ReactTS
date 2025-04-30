type propsType = {
  first:string,
  second:string,
  third:number
}


const App:React.FC<propsType> = ({first, second, third}) => {
  return (
    <>
      <div>App</div>
      <ul>
        <li>{first}</li>
        <li>{second}</li>
        <li>{third}</li>
      </ul>
    </>
  )
}

export default App