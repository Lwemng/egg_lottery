export default {
    // 延迟
    wait (time) {
        return new Promise(resolve => setTimeout(resolve, time))
    }
}