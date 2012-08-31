/**
 * fullpage.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */
(function(){function i(e,t){var n=document.getElementById(e);n&&(t=t||"",n.nodeName=="SELECT"?selectByValue(document.forms[0],e,t):n.type=="checkbox"?n.checked=!!t:n.value=t)}function s(e){var t=document.getElementById(e);return t.nodeName=="SELECT"?t.options[t.selectedIndex].value:t.type=="checkbox"?t.checked:t.value}function o(){var s=document.forms[0],o,u,a,f=tinyMCEPopup.editor;a=f.getParam("fullpage_doctypes",e).split(",");for(o=0;o<a.length;o++)u=a[o].split("="),u.length>1&&addSelectValue(s,"doctype",u[0],u[1]);a=f.getParam("fullpage_fonts",n).split(";");for(o=0;o<a.length;o++)u=a[o].split("="),u.length>1&&addSelectValue(s,"fontface",u[0],u[1]);a=f.getParam("fullpage_fontsizes",r).split(",");for(o=0;o<a.length;o++)addSelectValue(s,"fontsize",a[o],a[o]);a=f.getParam("fullpage_encodings",t).split(",");for(o=0;o<a.length;o++)u=a[o].split("="),u.length>1&&addSelectValue(s,"docencoding",u[0],u[1]);document.getElementById("bgcolor_pickcontainer").innerHTML=getColorPickerHTML("bgcolor_pick","bgcolor"),document.getElementById("link_color_pickcontainer").innerHTML=getColorPickerHTML("link_color_pick","link_color"),document.getElementById("visited_color_pickcontainer").innerHTML=getColorPickerHTML("visited_color_pick","visited_color"),document.getElementById("active_color_pickcontainer").innerHTML=getColorPickerHTML("active_color_pick","active_color"),document.getElementById("textcolor_pickcontainer").innerHTML=getColorPickerHTML("textcolor_pick","textcolor"),document.getElementById("stylesheet_browsercontainer").innerHTML=getBrowserHTML("stylesheetbrowser","stylesheet","file","fullpage"),document.getElementById("bgimage_pickcontainer").innerHTML=getBrowserHTML("bgimage_browser","bgimage","image","fullpage"),isVisible("stylesheetbrowser")&&(document.getElementById("stylesheet").style.width="220px"),isVisible("link_href_browser")&&(document.getElementById("element_link_href").style.width="230px"),isVisible("bgimage_browser")&&(document.getElementById("bgimage").style.width="210px"),tinymce.each(tinyMCEPopup.getWindowArg("data"),function(e,t){i(t,e)}),FullPageDialog.changedStyle(),updateColor("textcolor_pick","textcolor"),updateColor("bgcolor_pick","bgcolor"),updateColor("visited_color_pick","visited_color"),updateColor("active_color_pick","active_color"),updateColor("link_color_pick","link_color")}tinyMCEPopup.requireLangPack();var e='XHTML 1.0 Transitional=<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">,XHTML 1.0 Frameset=<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">,XHTML 1.0 Strict=<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">,XHTML 1.1=<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">,HTML 4.01 Transitional=<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">,HTML 4.01 Strict=<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">,HTML 4.01 Frameset=<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">',t="Western european (iso-8859-1)=iso-8859-1,Central European (iso-8859-2)=iso-8859-2,Unicode (UTF-8)=utf-8,Chinese traditional (Big5)=big5,Cyrillic (iso-8859-5)=iso-8859-5,Japanese (iso-2022-jp)=iso-2022-jp,Greek (iso-8859-7)=iso-8859-7,Korean (iso-2022-kr)=iso-2022-kr,ASCII (us-ascii)=us-ascii",n="Arial=arial,helvetica,sans-serif;Courier New=courier new,courier,monospace;Georgia=georgia,times new roman,times,serif;Tahoma=tahoma,arial,helvetica,sans-serif;Times New Roman=times new roman,times,serif;Verdana=verdana,arial,helvetica,sans-serif;Impact=impact;WingDings=wingdings",r="10px,11px,12px,13px,14px,15px,16px";window.FullPageDialog={changedStyle:function(){var e,t=tinyMCEPopup.editor.dom.parseStyle(s("style"));i("fontface",t["font-face"]),i("fontsize",t["font-size"]),i("textcolor",t.color),(e=t["background-image"])?i("bgimage",e.replace(new RegExp("url\\('?([^']*)'?\\)","gi"),"$1")):i("bgimage",""),i("bgcolor",t["background-color"]),i("topmargin",""),i("rightmargin",""),i("bottommargin",""),i("leftmargin","");if(e=t.margin)e=e.split(" "),t["margin-top"]=e[0]||"",t["margin-right"]=e[1]||e[0]||"",t["margin-bottom"]=e[2]||e[0]||"",t["margin-left"]=e[3]||e[0]||"";(e=t["margin-top"])&&i("topmargin",e.replace(/px/,"")),(e=t["margin-right"])&&i("rightmargin",e.replace(/px/,"")),(e=t["margin-bottom"])&&i("bottommargin",e.replace(/px/,"")),(e=t["margin-left"])&&i("leftmargin",e.replace(/px/,"")),updateColor("bgcolor_pick","bgcolor"),updateColor("textcolor_pick","textcolor")},changedStyleProp:function(){var e,t=tinyMCEPopup.editor.dom,n=t.parseStyle(s("style"));n["font-face"]=s("fontface"),n["font-size"]=s("fontsize"),n.color=s("textcolor"),n["background-color"]=s("bgcolor"),(e=s("bgimage"))?n["background-image"]="url('"+e+"')":n["background-image"]="",delete n.margin,(e=s("topmargin"))?n["margin-top"]=e+"px":n["margin-top"]="",(e=s("rightmargin"))?n["margin-right"]=e+"px":n["margin-right"]="",(e=s("bottommargin"))?n["margin-bottom"]=e+"px":n["margin-bottom"]="",(e=s("leftmargin"))?n["margin-left"]=e+"px":n["margin-left"]="",i("style",t.serializeStyle(t.parseStyle(t.serializeStyle(n)))),this.changedStyle()},update:function(){var e={};tinymce.each(tinyMCEPopup.dom.select("select,input,textarea"),function(t){e[t.id]=s(t.id)}),tinyMCEPopup.editor.plugins.fullpage._dataToHtml(e),tinyMCEPopup.close()}},tinyMCEPopup.onInit.add(o)})();