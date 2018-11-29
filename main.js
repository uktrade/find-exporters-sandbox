var searchCompany = require('./routes/search-company.js')
var search = require('./routes/search.js')

Sandbox.define('/api/v1/company/search/','POST', searchCompany.post)

Sandbox.define('/api/v1/company/search/region/','GET', search.region)
Sandbox.define('/api/v1/company/search/export_propensity/','GET', search.exportPropensity)
Sandbox.define('/api/v1/company/search/market_of_interest/','GET', search.marketOfInterest)
Sandbox.define('/api/v1/company/search/service_usage/','GET', search.serviceUsage)
Sandbox.define('/api/v1/company/search/market_exported/','GET', search.marketExported)
