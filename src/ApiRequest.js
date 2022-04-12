// 前面兩個參數會由前端傳來(包在body裡面傳api進來)
const ApiRequest = async (url = '', optionsObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, optionsObj);
        if (!response.ok) throw Error('Please reload the app');
    } catch (err) {
        errMsg = err.message;
    } finally {
        // 這邊設定return，整個func 都會是一個錯誤訊息的string，如果沒有錯誤訊息，會回傳null
        return errMsg;
    }
}

export default ApiRequest;