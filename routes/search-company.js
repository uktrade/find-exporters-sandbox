var noFilterCompanies = require('../fixtures/no-filter-company-result.json')
var singleCompany = require('../fixtures/single-company.json')

exports.post = function (req, res) {
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }

    res.type('application/json');
    res.status(200);

    if (req.body.filters) {
        if (req.body.filters.company_name) {
            if (req.body.filters.company_name == 'single company') {
                return res.json(singleCompany);
            }
            return res.json({});
        }
    }

    res.json(noFilterCompanies);
}
