import { useState } from "react"

const GeneralComponent = (OriginalContainer: any) => {
    const counterComponent = () => {
        const [count, setCount] = useState<number>(0);
        return <OriginalContainer count={count} counter={() => { setCount((count) => count + 1) }}></OriginalContainer>
    }
    return counterComponent;
}

export default GeneralComponent