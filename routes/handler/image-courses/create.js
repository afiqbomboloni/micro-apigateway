const apiAdapter = require('../../apiAdapter');

const {
    URL_SERVICE_COURSE
} = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req,res) => {

    try {
        const imageCourse = await api.post('/api/image-courses', req.body);
        return res.json(imageCourse.data);

    } catch (error) {

        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({status:'error', message: 'service raonok'});
        }
        const { status, data} = error.response;
        return res.status(status).json(data);

    }
}