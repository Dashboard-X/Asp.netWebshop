var OxO9598=["divpreview","idSource","Width","Height","TargetUrl","chk_Transparency","chk_AllowFullScreen","value","innerHTML","","$5","\x26","checked","wmode=\x22transparent\x22","allowfullscreen=\x22true\x22","\x3Cembed src=\x22","\x22 width=\x22","\x22 height=\x22","\x22 "," "," type=\x22application/x-shockwave-flash\x22 pluginspage=\x22http://www.macromedia.com/go/getflashplayer\x22 \x3E\x3C/embed\x3E\x0A","\x3Cobject xcodebase=","\x22http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab\x22"," height=\x22","\x22 classid=","\x22clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\x22 \x3E"," \x3Cparam name=\x22Movie\x22 value=\x22","\x22 /\x3E","\x3Cparam name=\x22wmode\x22 value=\x22transparent\x22/\x3E","\x3Cparam name=\x22allowFullScreen\x22 value=\x22true\x22/\x3E","\x3C/object\x3E"];var divpreview=Window_GetElement(window,OxO9598[0x0],true);var idSource=Window_GetElement(window,OxO9598[0x1],true);var Width=Window_GetElement(window,OxO9598[0x2],true);var Height=Window_GetElement(window,OxO9598[0x3],true);var TargetUrl=Window_GetElement(window,OxO9598[0x4],true);var chk_Transparency=Window_GetElement(window,OxO9598[0x5],true);var chk_AllowFullScreen=Window_GetElement(window,OxO9598[0x6],true);var editor=Window_GetDialogArguments(window); function do_preview(){var Ox119=GetEmbed();if(Ox119){if(idSource[OxO9598[0x7]]!=Ox119&&idSource[OxO9598[0x7]]!=null){ idSource[OxO9598[0x7]]=Ox119 ;} ; divpreview[OxO9598[0x8]]=Ox119 ;} ;}  ; function do_insert(){var Ox119=GetEmbed();if(Ox119){ editor.PasteHTML(Ox119) ;} ; Window_CloseDialog(window) ;}  ; function do_Close(){ Window_CloseDialog(window) ;}  ; function GetEmbed(){var Ox5cc=OxO9598[0x9];if(idSource[OxO9598[0x7]]!=OxO9598[0x9]&&idSource[OxO9598[0x7]]!=null){ Ox5cc=idSource[OxO9598[0x7]] ;var Ox5cd=/(<object[^\>]*>[\s|\S]*?)(<embed[^\>]*?)(\ssrc=\s*)\s*("|')(.+?)\4([^>]*)(.*<\/embed>)[\s|\S]*?<\/object>/gi;if(Ox5cc.match(Ox5cd)){ Ox5cc=Ox5cc.replace(Ox5cd,OxO9598[0xa]) ;} ;if(Ox5cc.indexOf(OxO9598[0xb])!=-0x1){ TargetUrl[OxO9598[0x7]]=Ox5cc.substring(0x0,Ox5cc.indexOf(OxO9598[0xb])) ;} ;} else {return ;} ;var Ox5ce=OxO9598[0x9];var Oxda,Ox2b,Ox360,Ox361; Oxda=Width[OxO9598[0x7]]+OxO9598[0x9] ; Ox2b=Height[OxO9598[0x7]]+OxO9598[0x9] ; Ox360=chk_Transparency[OxO9598[0x7]] ;if(Ox5cc==OxO9598[0x9]){ divpreview[OxO9598[0x8]]=OxO9598[0x9] ;return ;} ;var Ox364,Ox5cf; Ox5cf=OxO9598[0x9] ; Ox364=chk_Transparency[OxO9598[0xc]]?OxO9598[0xd]:OxO9598[0x9] ; Ox5cf=chk_AllowFullScreen[OxO9598[0xc]]?OxO9598[0xe]:OxO9598[0x9] ;var Ox36a=OxO9598[0xf]+Ox5cc+OxO9598[0x10]+Oxda+OxO9598[0x11]+Ox2b+OxO9598[0x12]+Ox5cf+OxO9598[0x13]+Ox364+OxO9598[0x14];var Ox36b=OxO9598[0x15]+OxO9598[0x16]+OxO9598[0x17]+Ox2b+OxO9598[0x10]+Oxda+OxO9598[0x18]+OxO9598[0x19]+OxO9598[0x1a]+Ox5cc+OxO9598[0x1b];if(chk_Transparency[OxO9598[0xc]]){ Ox36b=Ox36b+OxO9598[0x1c] ;} ;if(chk_AllowFullScreen[OxO9598[0xc]]){ Ox36b=Ox36b+OxO9598[0x1d] ;} ; Ox36b=Ox36b+Ox36a+OxO9598[0x1e] ;return Ox36b;}  ;