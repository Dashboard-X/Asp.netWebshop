var OxOb954=["Table1","Table2","inp_title","inp_doctype","inp_description","inp_keywords","PageLanguage","HTMLEncoding","bgcolor","bgcolor_Preview","fontcolor","fontcolor_Preview","Backgroundimage","btnbrowse","TopMargin","BottomMargin","LeftMargin","RightMargin","MarginWidth","MarginHeight","btnok","btncc","editor","window","document","body","head","title","innerHTML","value","DOCTYPE","meta","length","name","keywords","content","description","httpEquiv","content-type","content-language","background","color","style","backgroundColor","bgColor","topMargin","bottomMargin","leftMargin","rightMargin","marginWidth","marginHeight","","[[ValidNumber]]","Please enter a valid color number.","text","childNodes","parentNode","http-equiv","Content-Type","Content-Language","\x3CMETA ","=\x22","\x22 CONTENT=\x22","\x22\x3E","META","onclick"];var Table1=Window_GetElement(window,OxOb954[0x0],true);var Table2=Window_GetElement(window,OxOb954[0x1],true);var inp_title=Window_GetElement(window,OxOb954[0x2],true);var inp_doctype=Window_GetElement(window,OxOb954[0x3],true);var inp_description=Window_GetElement(window,OxOb954[0x4],true);var inp_keywords=Window_GetElement(window,OxOb954[0x5],true);var PageLanguage=Window_GetElement(window,OxOb954[0x6],true);var HTMLEncoding=Window_GetElement(window,OxOb954[0x7],true);var bgcolor=Window_GetElement(window,OxOb954[0x8],true);var bgcolor_Preview=Window_GetElement(window,OxOb954[0x9],true);var fontcolor=Window_GetElement(window,OxOb954[0xa],true);var fontcolor_Preview=Window_GetElement(window,OxOb954[0xb],true);var Backgroundimage=Window_GetElement(window,OxOb954[0xc],true);var btnbrowse=Window_GetElement(window,OxOb954[0xd],true);var TopMargin=Window_GetElement(window,OxOb954[0xe],true);var BottomMargin=Window_GetElement(window,OxOb954[0xf],true);var LeftMargin=Window_GetElement(window,OxOb954[0x10],true);var RightMargin=Window_GetElement(window,OxOb954[0x11],true);var MarginWidth=Window_GetElement(window,OxOb954[0x12],true);var MarginHeight=Window_GetElement(window,OxOb954[0x13],true);var btnok=Window_GetElement(window,OxOb954[0x14],true);var btncc=Window_GetElement(window,OxOb954[0x15],true);var obj=Window_GetDialogArguments(window);var editor=obj[OxOb954[0x16]];var editwin=obj[OxOb954[0x17]];var editdoc=obj[OxOb954[0x18]];var body=editdoc[OxOb954[0x19]];var head=obj[OxOb954[0x1a]];var title=head.getElementsByTagName(OxOb954[0x1b])[0x0];if(title){ inp_title[OxOb954[0x1d]]=title[OxOb954[0x1c]] ;} ; inp_doctype[OxOb954[0x1d]]=obj[OxOb954[0x1e]] ;var metas=head.getElementsByTagName(OxOb954[0x1f]);for(var m=0x0;m<metas[OxOb954[0x20]];m++){if(metas[m][OxOb954[0x21]].toLowerCase()==OxOb954[0x22]){ inp_keywords[OxOb954[0x1d]]=metas[m][OxOb954[0x23]] ;} ;if(metas[m][OxOb954[0x21]].toLowerCase()==OxOb954[0x24]){ inp_description[OxOb954[0x1d]]=metas[m][OxOb954[0x23]] ;} ;if(metas[m][OxOb954[0x25]].toLowerCase()==OxOb954[0x26]){ HTMLEncoding[OxOb954[0x1d]]=metas[m][OxOb954[0x23]] ;} ;if(metas[m][OxOb954[0x25]].toLowerCase()==OxOb954[0x27]){ PageLanguage[OxOb954[0x1d]]=metas[m][OxOb954[0x23]] ;} ;} ;if(editdoc[OxOb954[0x19]][OxOb954[0x28]]){ Backgroundimage[OxOb954[0x1d]]=editdoc[OxOb954[0x19]][OxOb954[0x28]] ;} ;if(editdoc[OxOb954[0x19]][OxOb954[0x2a]][OxOb954[0x29]]){ fontcolor[OxOb954[0x1d]]=editdoc[OxOb954[0x19]][OxOb954[0x2a]][OxOb954[0x29]] ; fontcolor[OxOb954[0x2a]][OxOb954[0x2b]]=fontcolor[OxOb954[0x1d]] ; fontcolor_Preview[OxOb954[0x2a]][OxOb954[0x2b]]=fontcolor[OxOb954[0x1d]] ;} ;var body_bgcolor=editdoc[OxOb954[0x19]][OxOb954[0x2a]][OxOb954[0x2b]]||editdoc[OxOb954[0x19]][OxOb954[0x2c]];if(body_bgcolor){ bgcolor[OxOb954[0x1d]]=body_bgcolor ; bgcolor[OxOb954[0x2a]][OxOb954[0x2b]]=body_bgcolor ; bgcolor_Preview[OxOb954[0x2a]][OxOb954[0x2b]]=body_bgcolor ;} ;if(Browser_IsWinIE()){if(body[OxOb954[0x2d]]){ TopMargin[OxOb954[0x1d]]=body[OxOb954[0x2d]] ;} ;if(body[OxOb954[0x2e]]){ BottomMargin[OxOb954[0x1d]]=body[OxOb954[0x2e]] ;} ;if(body[OxOb954[0x2f]]){ LeftMargin[OxOb954[0x1d]]=body[OxOb954[0x2f]] ;} ;if(body[OxOb954[0x30]]){ RightMargin[OxOb954[0x1d]]=body[OxOb954[0x30]] ;} ;if(body[OxOb954[0x31]]){ MarginWidth[OxOb954[0x1d]]=body[OxOb954[0x31]] ;} ;if(body[OxOb954[0x32]]){ MarginHeight[OxOb954[0x1d]]=body[OxOb954[0x32]] ;} ;} else {if(body.getAttribute(OxOb954[0x2d])){ TopMargin[OxOb954[0x1d]]=body.getAttribute(OxOb954[0x2d]) ;} ;if(body.getAttribute(OxOb954[0x2e])){ BottomMargin[OxOb954[0x1d]]=body.getAttribute(OxOb954[0x2e]) ;} ;if(body.getAttribute(OxOb954[0x2f])){ LeftMargin[OxOb954[0x1d]]=body.getAttribute(OxOb954[0x2f]) ;} ;if(body.getAttribute(OxOb954[0x30])){ RightMargin[OxOb954[0x1d]]=body.getAttribute(OxOb954[0x30]) ;} ;if(body.getAttribute(OxOb954[0x12])){ MarginWidth[OxOb954[0x1d]]=body.getAttribute(OxOb954[0x31]) ;} ;if(body.getAttribute(OxOb954[0x32])){ MarginHeight[OxOb954[0x1d]]=body.getAttribute(OxOb954[0x32]) ;} ;} ; function do_insert(){try{if(Browser_IsWinIE()){ body[OxOb954[0x2d]]=TopMargin[OxOb954[0x1d]] ; body[OxOb954[0x2e]]=BottomMargin[OxOb954[0x1d]] ; body[OxOb954[0x2f]]=LeftMargin[OxOb954[0x1d]] ; body[OxOb954[0x30]]=RightMargin[OxOb954[0x1d]] ;if(MarginWidth[OxOb954[0x1d]]){ body[OxOb954[0x31]]=MarginWidth[OxOb954[0x1d]] ;} ;if(MarginHeight[OxOb954[0x1d]]){ body[OxOb954[0x32]]=MarginHeight[OxOb954[0x1d]] ;} ;} else { body.setAttribute(OxOb954[0x2d],TopMargin.value) ; body.setAttribute(OxOb954[0x2e],BottomMargin.value) ; body.setAttribute(OxOb954[0x2f],LeftMargin.value) ; body.setAttribute(OxOb954[0x30],RightMargin.value) ; body.setAttribute(OxOb954[0x31],MarginWidth.value) ; body.setAttribute(OxOb954[0x32],MarginHeight.value) ;if(body.getAttribute(OxOb954[0x2d])==OxOb954[0x33]){ body.removeAttribute(OxOb954[0x2d]) ;} ;if(body.getAttribute(OxOb954[0x2e])==OxOb954[0x33]){ body.removeAttribute(OxOb954[0x2e]) ;} ;if(body.getAttribute(OxOb954[0x2f])==OxOb954[0x33]){ body.removeAttribute(OxOb954[0x2f]) ;} ;if(body.getAttribute(OxOb954[0x30])==OxOb954[0x33]){ body.removeAttribute(OxOb954[0x30]) ;} ;if(body.getAttribute(OxOb954[0x31])==OxOb954[0x33]){ body.removeAttribute(OxOb954[0x31]) ;} ;if(body.getAttribute(OxOb954[0x32])==OxOb954[0x33]){ body.removeAttribute(OxOb954[0x32]) ;} ;} ;} catch(er){ alert(OxOb954[0x34]) ;return ;} ;try{ editdoc[OxOb954[0x19]][OxOb954[0x2a]][OxOb954[0x2b]]=bgcolor[OxOb954[0x1d]] ; editdoc[OxOb954[0x19]][OxOb954[0x2a]][OxOb954[0x29]]=fontcolor[OxOb954[0x1d]] ;if(Backgroundimage[OxOb954[0x1d]]){ editdoc[OxOb954[0x19]][OxOb954[0x28]]=Backgroundimage[OxOb954[0x1d]] ;} else { body.removeAttribute(OxOb954[0x28]) ;} ;} catch(er){ alert(OxOb954[0x35]) ;return ;} ;if(!title){ title=document.createElement(OxOb954[0x1b]) ; head.appendChild(title) ;} ;if(Browser_IsWinIE()){ title[OxOb954[0x36]]=inp_title[OxOb954[0x1d]] ;} else {var Ox3dc=document.createTextNode(inp_title.value);try{ title.removeChild(title[OxOb954[0x37]].item(0x0)) ;} catch(x){} ; title.appendChild(Ox3dc) ;} ;for(var m=0x0;m<metas[OxOb954[0x20]];m++){var Oxb0=metas[m];if(Oxb0){if(Oxb0[OxOb954[0x21]].toLowerCase()==OxOb954[0x22]||Oxb0[OxOb954[0x21]].toLowerCase()==OxOb954[0x24]||Oxb0[OxOb954[0x21]].toLowerCase()==OxOb954[0x26]||Oxb0[OxOb954[0x21]].toLowerCase()==OxOb954[0x27]){ Oxb0[OxOb954[0x38]].removeChild(Oxb0) ; Oxb0=null ;} ;} ;} ;try{if(inp_keywords[OxOb954[0x1d]]){ Ox3dd(OxOb954[0x21],OxOb954[0x22],inp_keywords.value) ;} ;if(inp_description[OxOb954[0x1d]]){ Ox3dd(OxOb954[0x21],OxOb954[0x24],inp_description.value) ;} ;if(HTMLEncoding[OxOb954[0x1d]]){ Ox3dd(OxOb954[0x39],OxOb954[0x3a],HTMLEncoding.value) ;} ;if(PageLanguage[OxOb954[0x1d]]){ Ox3dd(OxOb954[0x39],OxOb954[0x3b],PageLanguage.value) ;} ;} catch(x){} ; function Ox3dd(Ox3de,name,Oxc7){var Ox3df;if(Browser_IsWinIE()){ Ox3df=editdoc.createElement(OxOb954[0x3c]+Ox3de+OxOb954[0x3d]+name+OxOb954[0x3e]+Oxc7+OxOb954[0x3f]) ;} else {var metas=head.getElementsByTagName(OxOb954[0x1f]);for(var m=0x0;m<metas[OxOb954[0x20]];m++){if(metas[m][OxOb954[0x21]].toLowerCase()==name.toLowerCase()){ metas[m][OxOb954[0x38]].removeChild(metas[m]) ;} ;} ;var Ox3df=editdoc.createElement(OxOb954[0x40]); Ox3df.setAttribute(Ox3de,name) ; Ox3df.setAttribute(OxOb954[0x23],Oxc7) ;} ; head.appendChild(Ox3df) ;}  ; Window_SetDialogReturnValue(window,inp_doctype[OxOb954[0x1d]]+OxOb954[0x33]) ; Window_CloseDialog(window) ;}  ; btnbrowse[OxOb954[0x41]]=function btnbrowse_onclick(){ function Ox2db(Ox137){if(Ox137){ Backgroundimage[OxOb954[0x1d]]=Ox137 ;} ;}  ; editor.SetNextDialogWindow(window) ;if(Browser_IsSafari()){ editor.ShowSelectImageDialog(Ox2db,Backgroundimage.value,Backgroundimage) ;} else { editor.ShowSelectImageDialog(Ox2db,Backgroundimage.value) ;} ;}  ; function do_Close(){ Window_CloseDialog(window) ;}  ; fontcolor[OxOb954[0x41]]=fontcolor_Preview[OxOb954[0x41]]=function fontcolor_onclick(){ SelectColor(fontcolor,fontcolor_Preview) ;}  ; bgcolor[OxOb954[0x41]]=bgcolor_Preview[OxOb954[0x41]]=function bgcolor_onclick(){ SelectColor(bgcolor,bgcolor_Preview) ;}  ;