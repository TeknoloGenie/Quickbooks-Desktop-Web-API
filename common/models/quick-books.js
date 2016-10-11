var loopback = require('loopback');

module.exports = function (QuickBooks) {

  QuickBooks.queueTransaction = function (body, cb) {
    QuickBooks.getDataSource('quickbooksService').connector.webService.queueTransaction({modelName: body.modelName, method: body.method, data: body.data, filter: body.filter});
  };

  QuickBooks.remoteMethod(
    'queueTransaction',
    {
      accepts: [
        {arg: 'body', type: 'object', required: true, http: {source: 'body'}}
      ],
      description: 'Queue the request transaction for syncing with QuickBooks',
      http: {path: '/queueTransaction', verb: 'post'}
    }
  );
};
