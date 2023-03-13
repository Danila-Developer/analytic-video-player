export function timestampToTime (timestamp: number): string {
    const date = new Date(timestamp)
    let minutes: number | string = date.getMinutes()
    let seconds: number | string = date.getSeconds()
    let milliseconds: number | string = date.getMilliseconds()

    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    if (milliseconds < 10) {
        milliseconds = '00' + milliseconds
    } else if (milliseconds < 100) {
        milliseconds = '0' + milliseconds
    }


    return `${minutes}:${seconds}:${milliseconds}`
}