tinyMCEPopup.requireLangPack();var SearchReplaceDialog={init:function(e){var t=this,n=document.forms[0],r=tinyMCEPopup.getWindowArg("mode");t.switchMode(r),n[r+"_panel_searchstring"].value=tinyMCEPopup.getWindowArg("search_string"),n[r+"_panel_searchstring"].focus(),mcTabs.onChange.add(function(e,n){t.switchMode(e.substring(0,e.indexOf("_")))})},switchMode:function(e){var t,n=this.lastMode;n!=e&&(t=document.forms[0],n&&(t[e+"_panel_searchstring"].value=t[n+"_panel_searchstring"].value,t[e+"_panel_backwardsu"].checked=t[n+"_panel_backwardsu"].checked,t[e+"_panel_backwardsd"].checked=t[n+"_panel_backwardsd"].checked,t[e+"_panel_casesensitivebox"].checked=t[n+"_panel_casesensitivebox"].checked),mcTabs.displayTab(e+"_tab",e+"_panel"),document.getElementById("replaceBtn").style.display=e=="replace"?"inline":"none",document.getElementById("replaceAllBtn").style.display=e=="replace"?"inline":"none",this.lastMode=e)},searchNext:function(e){function h(){r=n.getRng().cloneRange(),t.getDoc().execCommand("SelectAll",!1,null),n.setRng(r)}function p(){t.selection.setContent(rs)}var t=tinyMCEPopup.editor,n=t.selection,r=n.getRng(),i,s=this.lastMode,o,u,a=0,f=t.getWin(),l=t.windowManager,c=0;i=document.forms[0],o=i[s+"_panel_searchstring"].value,u=i[s+"_panel_backwardsu"].checked,ca=i[s+"_panel_casesensitivebox"].checked,rs=i.replace_panel_replacestring.value,tinymce.isIE&&(r=t.getDoc().selection.createRange());if(o=="")return;ca&&(a|=4);switch(e){case"all":t.execCommand("SelectAll"),t.selection.collapse(!0);if(tinymce.isIE){t.focus(),r=t.getDoc().selection.createRange();while(r.findText(o,u?-1:1,a))r.scrollIntoView(),r.select(),p(),c=1,u&&r.moveEnd("character",-rs.length);tinyMCEPopup.storeSelection()}else while(f.find(o,ca,u,!1,!1,!1,!1))p(),c=1;c?tinyMCEPopup.alert(t.getLang("searchreplace_dlg.allreplaced")):tinyMCEPopup.alert(t.getLang("searchreplace_dlg.notfound"));return;case"current":t.selection.isCollapsed()||p()}n.collapse(u),r=n.getRng();if(!o)return;tinymce.isIE?(t.focus(),r=t.getDoc().selection.createRange(),r.findText(o,u?-1:1,a)?(r.scrollIntoView(),r.select()):tinyMCEPopup.alert(t.getLang("searchreplace_dlg.notfound")),tinyMCEPopup.storeSelection()):f.find(o,ca,u,!1,!1,!1,!1)?h():tinyMCEPopup.alert(t.getLang("searchreplace_dlg.notfound"))}};tinyMCEPopup.onInit.add(SearchReplaceDialog.init,SearchReplaceDialog);