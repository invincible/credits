Ext.define('CreditApp.model.Credit', {
    extend: 'Ext.data.Model',
    fields: ['id','openDate', 'closeDate', 'term', 'summ', 'percent', 'fullSumm', 'status']
});