Ext.define('CreditApp.view.Credit', {
    extend: 'Ext.window.Window',
    alias: 'widget.creditwindow',
 
    title: 'Информация о кредите',
    layout: 'fit',
    autoShow: true,
 
    initComponent: function() {
        this.items = [{
                xtype: 'form',
                items: [{
                        xtype: 'textfield',
                        name : 'status',
                        fieldLabel: 'Статус'
                    }]
            }];
        this.buttons = [{
                text: 'Сохранить',
                iconCls:'save-icon',
                scope: this,
                action: 'save'
        }];
 
        this.callParent(arguments);
    }
});