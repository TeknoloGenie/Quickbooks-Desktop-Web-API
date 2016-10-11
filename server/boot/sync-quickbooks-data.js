var loopback = require('loopback');

module.exports = function syncQuickBooksData(server) {
  //todo: EmployeeQuery (use to build users) take into consideration there EmployeeType
  var QuickBooks = loopback.getModel('QuickBooks');
  QuickBooks.queueTransaction({modelName: 'Employee', method: 'GET'});
  //todo: SalesOrderQuery
  QuickBooks.queueTransaction({modelName: 'SalesOrder', method: 'GET'});

  //todo: EstimateQuery
  QuickBooks.queueTransaction({modelName: 'Estimate', method: 'GET'});

  //todo: CustomerQuery
  QuickBooks.queueTransaction({modelName: 'Customer', method: 'GET'});

  QuickBooks.queueTransaction({modelName: 'SalesRep', method: 'GET'});

  //todo: ItemQuery
  QuickBooks.queueTransaction({modelName: 'ItemInventory', method: 'GET'});
};
