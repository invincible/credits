Ext.define('CreditApp.view.CreditList' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.creditlist',
 
    title: 'История займов',
    store: 'CreditStore',

    viewConfig: { 
        stripeRows: false, 
        getRowClass: function(record) { 
            return record.get('status') == 'выдан' ? 'credit-active' : '';
        } 
    },
    
    dockedItems: [{
        xtype: 'toolbar',
        itemId: 'toolbar',
        items: [{
            text: 'Выдать займ',
            scope: this,
            action: 'giveCredit'
        }, {
            text: 'Просмотр займа',
            scope: this,
            action: 'showCredit'
        }, {
            text: 'Информация',
            scope: this,
            action: 'showInfo'
        }]
    }],

    //'id','openDate', 'closeDate', 'term', 'summ', 'percent', 'fullSumm', 'status'
    initComponent: function() {
        this.columns = [
            {header: 'Дата', dataIndex: 'openDate', xtype: 'datecolumn', format:'d.m.Y'},
            {
                header: 'Срок',
                dataIndex: 'term',
                flex: 1,
                renderer: function(value) {
                    return Ext.String.format('{0} дней', value);
                }
            },
            {header: 'Дата пог.',  dataIndex: 'closeDate', xtype: 'datecolumn', format:'d.m.Y'},
            {header: 'Тело займа', dataIndex: 'summ', xtype: 'numbercolumn', format:'0.00'},
            {header: '%', dataIndex: 'percent'},
            {header: 'Сумма+%', dataIndex: 'fullSumm', xtype: 'numbercolumn', format:'0.00'},
            {header: 'Статус', dataIndex: 'status', flex: 1},
            {
                xtype:'actioncolumn',
                flex: 1,
                items: [{
                    iconCls: 'icon-print',
                    tooltip: 'Распечатать информацию',
                    padding:  '10 5 3 10',
                    handler: function(grid, rowIndex, colIndex) {
                        this.up('grid').fireEvent('itemprintbuttonclick', grid, rowIndex, colIndex);
                    }
                },{
                    iconCls: 'icon-mail',
                    tooltip: 'Посмотреть документы',
                    handler: function(grid, rowIndex, colIndex) {
                        this.up('grid').fireEvent('itemshowbuttonclick', grid, rowIndex, colIndex);
                    },
                    isDisabled: renderBtn
                },{
                    iconCls: 'icon-del',
                    tooltip: 'Удалить запись',
                    handler: function(grid, rowIndex, colIndex) {
                        this.up('grid').fireEvent('itemdelbuttonclick', grid, rowIndex, colIndex);   
                    },
                    isDisabled: renderBtn
                }]
            }
        ];
        
        this.addEvents('itemprintbuttonclick', 'itemshowbuttonclick', 'itemdelbuttonclick');
        this.callParent(arguments);
    }

});

function renderBtn(view, rowIndex, colIndex, item, record) {
    return record.get('status') != 'выдан';
};