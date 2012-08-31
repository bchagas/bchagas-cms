/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */
(function(){tinymce.create("tinymce.plugins.AdvancedHRPlugin",{init:function(e,t){e.addCommand("mceAdvancedHr",function(){e.windowManager.open({file:t+"/rule.htm",width:250+parseInt(e.getLang("advhr.delta_width",0)),height:160+parseInt(e.getLang("advhr.delta_height",0)),inline:1},{plugin_url:t})}),e.addButton("advhr",{title:"advhr.advhr_desc",cmd:"mceAdvancedHr"}),e.onNodeChange.add(function(e,t,n){t.setActive("advhr",n.nodeName=="HR")}),e.onClick.add(function(e,t){t=t.target,t.nodeName==="HR"&&e.selection.select(t)})},getInfo:function(){return{longname:"Advanced HR",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/advhr",version:tinymce.majorVersion+"."+tinymce.minorVersion}}}),tinymce.PluginManager.add("advhr",tinymce.plugins.AdvancedHRPlugin)})();