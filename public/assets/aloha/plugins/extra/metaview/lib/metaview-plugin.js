/*!
* Aloha Editor
* Author & Copyright (c) 2010 Gentics Software GmbH
* aloha-sales@gentics.com
* Licensed unter the terms of http://www.aloha-editor.com/license.html
*/
define(["aloha/plugin","aloha/floatingmenu","i18n!metaview/nls/i18n","i18n!aloha/nls/i18n","aloha/jquery","css!metaview/css/metaview.css"],function(e,t,n,r,i){var s=i,o=window.GENTICS,u=window.Aloha;return e.create("metaview",{_constructor:function(){this._super("metaview")},languages:["en","de"],init:function(){var e=this;this.createButtons(),u.bind("aloha-editable-activated",function(t,n){i(u.activeEditable.obj).hasClass("aloha-metaview")?e.button.setPressed(!0):e.button.setPressed(!1)})},buttonClick:function(){var e=this;i(u.activeEditable.obj).hasClass("aloha-metaview")?(i(u.activeEditable.obj).removeClass("aloha-metaview"),e.button.setPressed(!1)):(i(u.activeEditable.obj).addClass("aloha-metaview"),e.button.setPressed(!0))},createButtons:function(){var e=this;e.button=new u.ui.Button({name:"meta",iconClass:"aloha-button aloha-button-metaview",size:"small",onclick:function(){e.buttonClick()},tooltip:n.t("button.switch-metaview.tooltip"),toggle:!0}),t.addButton("Aloha.continuoustext",e.button,r.t("floatingmenu.tab.format"),1)}})});