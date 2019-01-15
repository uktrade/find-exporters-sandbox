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
        return filtersResponse(res, filters)
    }

    return res.json(noFilterCompanies)
}

var filtersResponse = function(res, filters) {
    if (filters.company_name) {
        if (filters.company_name == 'single company') {
            return res.json(singleCompany)
        } else if (filters.company_name == 'single company no metrics') {
            return res.json(singleCompanyNoMetrics)
        } else if (filters.company_name == 'multiple company') {
            return res.json(noFilterCompanies)
        }
        return res.json({})
    } else if (filters.export_propensity) {
        return res.json(singleCompany)
    } else if (filters.export_codes) {
        return res.json(singleCompany)
    } else if (filters.last_export_evidence) {
        if (filters.last_export_evidence.min && !filters.last_export_evidence.max) {
            return res.json({})
        }

        if (filters.last_export_evidence.max && !filters.last_export_evidence.min) {
            return res.json({})
        }

        if (filters.last_export_evidence.min && filters.last_export_evidence.max) {
          if (filters.last_export_evidence.min == 'invalid' || filters.last_export_evidence.max == 'invalid') {
            return res.json({})
          } else {
            return res.json(singleCompany)
          }
        }

        return res.json({})
    } else if (filters.sic_codes) {
        return res.json(singleCompany)
    } else if (filters.turnover) {
        if (filters.turnover.min) {
            return res.json(singleCompany)
        } else if (filters.turnover.max == 1) {
            return res.json({})
        } else if (!isNaN(filters.turnover.max) || !isNaN(filters.turnover.min)) {
            return res.json({})
        }
        return res.json(singleCompany)
    } else if (filters.market_of_interest) {
        return res.json(singleCompany)
    } else if (filters.market_exported) {
        return res.json(singleCompany)
    } else if (filters.region) {
        return res.json(singleCompany)
    } else if (filters.service_usage) {
        return res.json(singleCompany)
    }
}
