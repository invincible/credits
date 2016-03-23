Ext.define('CreditApp.view.DocList', {
    extend: 'Ext.window.Window',
    alias: 'widget.doclistwindow',
 
    title: 'Документы',
    layout: 'fit',
    autoShow: true,
    
    height: 200,
    width: 400,
    
    initComponent: function() {
        this.items = [{
            xtype: 'grid',
            border: false,
            columns: [{ text: 'Документы',  dataIndex: 'doc', flex: 1}],
            store: Ext.create('Ext.data.ArrayStore', {
                fields: ['doc'],
                data: [['Документ 1'], ['Документ 2'], ['Документ 3']]
            })
        }];
 
        this.callParent(arguments);
    }
});