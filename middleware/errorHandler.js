const { constants } = require('../constants');  


const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500; // Set default status code to 500 if not set

    res.status(statusCode);

    switch (statusCode) {
        case constants.BAD_REQUEST:
            res.json({ title: "Bad Request", message: err.message, stackTrace: err.stack });
            break;
        case constants.UNAUTHORIZED:
            res.json({ title: "Unauthorized", message: err.message, stackTrace: err.stack });
            break;
        case constants.FORBIDDEN:
            res.json({ title: "Forbidden", message: err.message, stackTrace: err.stack });
            break;
        case constants.NOT_FOUND:
            res.json({ title: "Not Found", message: err.message, stackTrace: err.stack });
            break;
        case constants.INTERNAL_SERVER_ERROR:
            res.json({ title: "Internal Server Error", message: err.message, stackTrace: err.stack });
            break;
        default:
            res.json({ title: "Error", message: err.message, stackTrace: err.stack });
            break;
    }

};

module.exports = errorHandler;