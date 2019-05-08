var companySearchFilter = require('./routes/company-search-filter.js')
var filters = require('./routes/filters.js')

Sandbox.define('/api/v1/company/search/','POST', companySearchFilter.post)

Sandbox.define('/api/v1/company/search/region/','GET', filters.region)
Sandbox.define('/api/v1/company/search/export_propensity/','GET', filters.exportPropensity)
Sandbox.define('/api/v1/company/search/market_of_interest/','GET', filters.marketOfInterest)
Sandbox.define('/api/v1/company/search/service_usage/','GET', filters.serviceUsage)
Sandbox.define('/api/v1/company/search/market_exported/','GET', filters.marketExported)

