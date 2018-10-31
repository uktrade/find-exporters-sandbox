var region = require('../fixtures/region.json')
var exportPropensity = require('../fixtures/export-propensity.json')
var marketOfInterest = require('../fixtures/market-of-interest.json')
var serviceUsage = require('../fixtures/service-usage.json')
var marketExported = require('../fixtures/market-exported.json')


exports.region = function (req, res) {
    res.json(region);
}

exports.exportPropensity = function (req, res) {
    res.json(exportPropensity);
}

exports.marketOfInterest = function (req, res) {
    res.json(marketOfInterest);
}

exports.serviceUsage = function (req, res) {
    res.json(serviceUsage);
}

exports.marketExported = function (req, res) {
    res.json(marketExported);
}
