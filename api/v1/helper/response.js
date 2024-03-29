const response = (res, status, message, data) => {
    res.status(status).json({
        message: message,
        data: data 
    });
}

export default response;