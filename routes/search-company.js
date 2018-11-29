var noFilterCompanies = require('../fixtures/no-filter-company-result.json')
var singleCompany = require('../fixtures/single-company.json')
var singleCompanyNoMetrics = require('../fixtures/single-company-no-metrics.json')

exports.post = function (req, res) {
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json')
    }

    res.type('application/json')
    res.status(200)

    var filters = req.body.filters

    if (filters) {
        if (filters.company_name) {
            if (filters.company_name == 'single company') {
                return res.json(singleCompany)
            } else if (filters.company_name == 'single company no metrics') {
                return res.json(singleCompanyNoMetrics)
            } else if (filters.company_name == 'multiple company') {
                return res.json(noFilterCompanies)
            }
            return res.json({})
        }
    }

    res.json(noFilterCompanies)
}
