const apiRequest = async(url = '', options = null, err = null) => {
    
    try {
        const result = await fetch(url, options);
        if (!result.ok) throw Error('Please reload the page');
    } catch (error) {
        err = error.message;
    }finally {
       return  err
    }
}

export default apiRequest