define(["aloha/jquery","aloha/plugin","ui/ui","ui/button","i18n!aloha/nls/i18n","i18n!locomotive_media/nls/i18n","css!locomotive_media/css/image.css"],function(t,e,n,i,a,o){var l=t,s=window.GENTICS,r=window.Aloha;return e.create("locomotive_media",{init:function(){this._addUIInsertButton()},openDialog:function(){var t=this,e=window.parent.application_view.content_assets_picker_view;e.options.on_select=function(n){1==n.get("image")?t.insertImg(n):t.insertLink(n),e.close()},e.fetch_assets()},insertImg:function(t){var e,n,i,a=r.Selection.getRangeObject(),o=t.get("url");a.isCollapsed()?(e="max-width: "+t.get("width")+"; max-height: "+t.get("height"),n='<img style="'+e+'" src="'+o+'" title="" />',i=l(n),s.Utils.Dom.insertIntoDOM(i,a,l(r.activeEditable.obj))):r.Log.error("media cannot markup a selection")},insertLink:function(t){var e,n,i=r.Selection.getRangeObject(),a=t.get("full_filename"),o=t.get("url");i.isCollapsed()?(e='<a href="'+o+'">'+a+"</a>",n=l(e),s.Utils.Dom.insertIntoDOM(n,i,l(r.activeEditable.obj)),i.startContainer=i.endContainer=n.contents().get(0),i.startOffset=0,i.endOffset=a.length):(e='<a href="'+o+'"></a>',n=l(e),s.Utils.Dom.addMarkup(i,n,!1))},_addUIInsertButton:function(){{var t=this;n.adopt("insertlocomotivemedia",i,{tooltip:o.t("button.addimg.tooltip"),icon:"aloha-button aloha-locomotive-media-insert",scope:"Aloha.continuoustext",click:function(){t.openDialog()}})}}})});