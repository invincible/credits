Ext.define('CreditApp.controller.Credits', {
    extend: 'Ext.app.Controller',
 
    views: ['CreditList', 'Credit', 'DocList'],
    stores: ['CreditStore'],
    models: ['Credit'],
    init: function() {
        this.control({
            'viewport > creditlist': {
                //itemdblclick: this.showCredit,
                itemprintbuttonclick: this.onPrint,
                itemdelbuttonclick: this.onItemDel,
                itemshowbuttonclick: this.showDocuments
            },
            'toolbar button[action=giveCredit]': {
                click: this.giveCredit
            },
            'toolbar button[action=showCredit]': {
                click: this.showCredit
            },
            'toolbar button[action=showInfo]': {
                click: this.showInfo
            },
            'creditwindow button[action=save]': {
                click: this.saveCredit
            }
        });
    },

    // Отправка запроса
    saveCredit: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues(true);
        Ext.Msg.alert('Отправка запроса','Тут отправляем запрос на УРЛ: '+values);
        /*
        Ext.Ajax.request({
            url: 'app/data/giveCredit.php',
            params: values,
            success: function(response, options){
                var data=Ext.decode(response.responseText);
                if(data.success){
                    Ext.Msg.alert('Займ выдан ',data.message);
                    var store = Ext.widget('creditlist').getStore();
                    store.load();
                }
                else{
                    Ext.Msg.alert('Выдать займ','Не удалось выдать займ, нет связи с сервером!');
                }
            },
            failure: function(form, action) {
                Ext.Msg.alert('Выдать займ','Что-то пошло не так!');
            }
        });*/
    },
    // Выдать займ
    giveCredit: function(button) {
        var view = Ext.widget('creditwindow');        
    },
    // Просмотр займа
    showCredit: function(button) {
        var view = Ext.widget('creditwindow');
    },
    // Информация
    showInfo: function(button) {
        var view = Ext.widget('creditwindow');  
    },
    // Принтер
    onPrint: function(grid,row,col){
        window.open('http://yandex.ru');
    },
    // Удаление записи
    onItemDel: function(grid,row,col){
        Ext.Msg.confirm('Удаление записи', 'Вы действительно хотите удалить данную запись?', function(btn, text){
            if (btn == 'yes'){
                var store = grid.getStore();
                var rec = store.getAt(row);
                store.remove(rec);
            }
        });
    },
    // Список документов
    showDocuments: function(grid,row,col){
        var view = Ext.widget('doclistwindow');
    }
});