console.log("Worker loaded")
onmessage = (event) => {
    console.log(`Worker received a message = ${event.data}`)
    postMessage(`${event.data} (${event.data.length})`)
}
