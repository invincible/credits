Ext.define('CreditApp.store.CreditStore', {
    extend: 'Ext.data.Store',
    model: 'CreditApp.model.Credit',
    
    storeId: 'CreditStore',
    
    data: [
        {"id": 1, "openDate": '2012/01/14', "closeDate": '2012/04/13', "term": 60, "summ": 90000, "percent": 7, "fullSumm": 108000, "status": 'погашен'},
        {"id": 2, "openDate": '2012/02/13', "closeDate": '2012/04/18', "term": 10, "summ": 70000, "percent": 10, "fullSumm": 84000, "status": 'выдан'}
    ]

    /*autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'app/data/credits.json',
        reader: {
            type: 'json',
            root: 'credits',
            successProperty: 'success'
        }
    }*/
});