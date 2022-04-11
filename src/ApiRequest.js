const ApiRequest = async (url = '', optionsObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, optionsObj);
        if (!response.ok) throw Error('Please reload the app');
    } catch (err) {
        errMsg = err.message;
    } finally {
        // 這邊設定return，整個func 都會是一個錯誤訊息的string
        return errMsg;
    }
}

export default ApiRequest;