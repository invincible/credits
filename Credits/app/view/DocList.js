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
            columns: [{ text: 'Документы',  dataIndex: 'doc' }],
            store: Ext.create('Ext.data.ArrayStore', {'doc':'Первый'})
        }];
 
        this.callParent(arguments);
    }
});