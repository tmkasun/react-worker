import React, { useEffect, useMemo, useState } from "react";
import DWorker from './workers/d.worker.js'

export default () => {

    const [userIn, setUserIn] = useState()
    const dWorker = useMemo(() => {
        const _dWorker = new DWorker()
        _dWorker.onmessage = (event) => {
            console.log(`Received a message from worker ==> ${event.data}`)
            setUserIn(event.data)
        }
        return _dWorker
    }, [setUserIn])
    const handleUserIn = (event) => {
        const enteredVal = event.target.value;
        dWorker.postMessage(enteredVal)
    }
    useEffect(() => {
        dWorker.postMessage("Hello (SYNC)")
    }, [dWorker])
    return (
        <div>
            <h2>
                Web worker sample
            </h2>
            <input type='text' onChange={handleUserIn} />
            <h4>Typed: <i>{userIn}</i></h4>
        </div>
    )
}
