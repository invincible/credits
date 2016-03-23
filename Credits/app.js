Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'CreditApp',

    appFolder: 'app',
     controllers: [
        'Credits'
    ],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'creditlist'
                }
            ]
        });
    }
});