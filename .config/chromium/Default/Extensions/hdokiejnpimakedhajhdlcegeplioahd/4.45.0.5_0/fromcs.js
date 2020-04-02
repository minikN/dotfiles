function hasNever(e,a,t,i){"undefined"!=typeof g_neverurls&&null!==g_neverurls||(g_neverurls={});var l=lpcanonizeUrl(e),r=l;if(0<l.length&&"/"==l.charAt(l.length-1)&&(l=l.substring(0,l.length-1)),g_neverurls[t]&&0<g_neverurls[t].length){for(var n=!1,o=0;g_neverurls[t]&&o<g_neverurls[t].length;o++){var s;if((s=g_neverurls[t][o])==a||s==l){n=!0;break}}if(!n)return!0}for(var o=0;g_neverurls[i]&&o<g_neverurls[i].length;o++){var s=g_neverurls[i][o],d=LPTools.createUrlPattern(s);if(-1!==s.indexOf("*")&&d&&d.test(r)||s==a||s==l||s==r)return!0}return!1}function hasNeverAutologin(e,a){return hasNever(e,a,"onlyautologins","neverautologins")}function hasNeverFormFill(e,a){return hasNever(e,a,"onlyformfills","neverformfills")}function hasNeverSave(e,a){return hasNever(e,a,"onlyaccounts","neveraccounts")}function hasNeverShowIcon(e,a){return hasNever(e,a,"onlyshowicons","nevershowicons")}function hasNeverGenerate(e,a){return hasNever(e,a,"onlygenerates","nevergenerates")}function hasNeverEnableLP(e,a){return hasNever(e,a,"onlyenablelp","neverenablelp")}function hasNeverMPReuse(e,a){return hasNever(e,a,"onlympwreuse","nevermpwreuse")}var g_accessibility_enabled=-1;function handleFill(e,a){var t=!1,i=null;if(!lploggedin||null!=grid_getdata("active"))return!1;if(void 0===a||!a)return!1;if(!check_for_frame_mismatch_ok(e,a.fromiframe,gs("Are you sure you want LastPass to fill your information into this site:"),a.cmd))return!1;if(g_fillfield_did_fillbest[e.toString()]=!1,"autofillaid"==a.cmd||"autologinaid"==a.cmd){var l=a.aid;if(g_last_launch[l]=(new Date).getTime(),void 0===g_sites[l])return!1;var r="autologinaid"==a.cmd,n=!0,o=get_record(l);a.no_manualfill_on_saveall&&o.save_all&&(n=!1),a.from_iframe&&!o.save_all&&(n=!0);var s=!!a.from_iframe;return g_fillfield_confirm_perfield={},fill({tabid:e,acct:g_sites[l],docid:null,submit:r,doconfirm:!r,docnum:"all",allowforce:!0,skip_pwprotect:!1,manualfill:n,automaticallyFill:null,skip_basicauth:null,from_iframe:s,desc:a.cmd,source:a.source}),!0}if(void 0===a.url)return!1;void 0!==a.username_val&&(g_username_vals[a.url]=a.username_val);var d=a.url,c=lp_gettld_url(d),u=0;if(null===a.aid||void 0===a.aid){var _=getcsinfo(e,g_CS_tops[e]);_&&(u=_.lastfill_aid)}if(lp_url_is_lastpass(d))return!1;if(void 0!==g_launches[e]&&g_launches[e]||null!=g_pending_launch&&(g_launches[e]=g_pending_launch),void 0!==g_launches[e]&&g_launches[e]){var l=g_launches[e];if(void 0!==g_sites[l]){var o=get_record(l);if(g_fillfield_confirm_perfield={},check_ident_aid(l)&&compare_tlds(c,lp_gettld_url(g_sites[l].url))){var s=!!a.from_iframe;fill({tabid:e,acct:o,docid:null,submit:!0,doconfirm:!1,docnum:a.docnum,allowforce:!1,skip_pwprotect:!0,manualfill:null,automaticallyFill:null,skip_basicauth:null,from_iframe:s,desc:"FILL_F3"}),i=l,void 0!==a.numpass&&0<a.numpass?(g_launches[e]=null,g_pending_launch=null):setTimeout(function(){g_launches[e]=null,g_pending_launch=null},1e3)}}}var f=a.topurl!==d?lp_gettld_url(a.topurl):"",m={},g=getsites(d),p=reorderOnURL(g,d,!0);if(!(hasNeverAutologin(d,c)||""!==f&&hasNeverAutologin(a.topurl,f)))if(0<u&&Object.keys(g).length<2)for(var h in p)p[h].aid==u&&(m=tryAutoFillWithItem(d,e,a,u,i));else for(var h in p=void 0!==a.username_val&&a.username_val&&!given_username_in_accts(p,a.username_val,d)?[]:reorderOnURL(g,d,!0))if((m=tryAutoFillWithItem(d,e,a,p[h].aid,i)).done&&m.filled)break;return 0==lpGetPref("showNotificationsAfterClick",1)&&checkgenpwfillforms(e,d),!0}function tryAutoFillWithItem(e,a,t,l,r){try{islastpass&&g_ischrome&&!g_isedge&&1==arr[i].basic_auth&&g_accessibility_enabled<=0&&0==lpGetPref("basicauthnever",0)&&(g_is_mac&&have_binary_function("accessibility_enabled")?call_binary_function("accessibility_enabled",function(e){0==(g_accessibility_enabled=e?1:0)&&setTimeout(function(){get_selected_tab(null,function(e){sendCS(gettabid(e),{cmd:"showbasicauthnotification",needbinary:0,text:gs("In order for LastPass to fill into basic authentication dialogs, you need to enable access for assistive devices."),do_40notify:g_40notify})})},100)}):!g_is_win&&!g_is_mac||have_binary()||(g_accessibility_enabled=0,setTimeout(function(){get_selected_tab(null,function(e){sendCS(gettabid(e),{cmd:"showbasicauthnotification",needbinary:1,text:gs("In order for LastPass to fill into basic authentication dialogs, you need to install the binary version of LastPass for Chrome."),do_40notify:g_40notify})})},100)))}catch(e){}var n={filled:!1,done:!1};if(r&&r!==l)return verbose_log("launchedAccountId != accountId "+r+"!="+l),n;if(!check_ident_aid(l))return n;if(void 0===g_sites[l])return n;var o=get_record(l);if(!o)return n;if(o.genpw)return n;if(0==o.fields.length&&""==o.username)return n;var s=!1;if(o.never_autofill?s=!0:o.pwprotect||g_prompts.login_site_prompt?s=!0:0===o.url.indexOf("https://")&&0!==e.indexOf("https://")?s=!0:0==parseInt(lpGetPref("automaticallyFill",1))&&(s=!0),LPContentScriptFeatures.autofill_https_test&&0==e.indexOf("http://")&&(s=!0),g_fillfield_confirm_perfield={},!s){var d=!o.save_all;d&&(void 0===g_fillfieldsmatches[e]&&(g_fillfieldsmatches[e]=[]),g_fillfieldsmatches[e][g_fillfieldsmatches[e].length]=o,g_fillfieldsmatchescurridx[e]=0);var c=parseInt(lpGetPref("automaticallyFill",1)),u=null;fill({tabid:a,acct:o,docid:t.docid,submit:null,doconfirm:d,docnum:t.docnum,allowforce:u,skip_pwprotect:!0,manualfill:null,automaticallyFill:c,desc:"FILL_F4",source:t.source}),n.filled=!0}return n.done=!0,n}function checkWeakDuplicateBreached(r,n,o){g_showweakdupalerts&&qualifyForWeakCheck(getpasswordfromacct(r))&&(g_ischrome||g_issafari||g_isfirefoxsdk||g_issafari_appext)&&(0!=g_disablepwalerts||void 0!==r.noalert&&"1"==r.noalert||getWeakAndDuplicateIds(g_username_hash,g_username,function(e){var a=null!=r.sharedfromaid&&""!=r.sharedfromaid&&"0"!=r.sharedfromaid&&"null"!=r.sharedfromaid?1:0,t=issharedfolder(g_shares,r.group),i=!checkreadonly(t,!0),l=a||i||"1"!=r.pwch?0:1;isBreachedSite(r)?(g_notification_type="lpalert",g_notification_data={cmd:"notification",type:"lpalert",name:r.name,username:getusernamefromacct(r),breached:r.breached},set_badge(g_notification_data,n),drawIconAtRotation(0)):isDuplicateSite(e[0],r.aid)?(g_notification_type="alert",g_notification_data={cmd:"notification",type:"alert",aid:r.aid,name:r.name,username:getusernamefromacct(r),alerttype:"duplicate",tld:o,tabid:n,pwch:l},set_badge(g_notification_data,n),drawIconAtRotation(0)):isWeakPassword(e[1],r.aid)&&(g_notification_type="alert",g_notification_data={cmd:"notification",type:"alert",aid:r.aid,name:r.name,username:getusernamefromacct(r),alerttype:"weak",tld:o,tabid:n,pwch:l},set_badge(g_notification_data,n),drawIconAtRotation(0))}))}function checkgenpwfillforms(e,a,t){for(var i=lp_gettld_url(a),l=1!=lpGetPref("showGenerateNotifications",1)||hasNeverGenerate(a,i),r=1!=lpGetPref("showFormFillNotifications",1)||hasNeverFormFill(a,i),n=new Array,o=0;o<g_formfills.length;o++)check_ident_ffid(g_formfills[o].ffid)&&(n[n.length]=g_formfills[o]);0==n.length&&(r=!0);var s={cmd:"checkgenpwfillforms",nevergenerate:l,neverformfill:r,sites:cache_usernames(reorderOnURL(getsites(a),a,!0,!0)),formfills:LPJSON.stringify(n),active:g_popupfill_last_active[e],activefieldid:g_popupfill_last_active_fieldid[e]};t||(s.ff=g_cachedffdat),sendCS(e,s,"all")}function cache_usernames(e){for(var a in e)e[a].useusername=getusernamefromacct(e[a]);return LPJSON.stringify(e)}function handleNever(e,a){handleNeverURL(a)}function handleNeverURL(e){if("neverautofill"==e.cmd){var a=e.aid;if(void 0===g_sites[a])return;g_sites[a].never_autofill=!0,g_sites[a].autologin=!1;var t="aid="+en(a);lpMakeRequest(base_url+"set_never_autofill.php",t,null,null)}else if("neverdomain"==e.cmd||"neverpage"==e.cmd){var i="neverdomain"==e.cmd?lp_gettld_url(e.url):lpcanonizeUrl(e.url),t="url="+en(AES.url2hex(i));void 0!==e.fromsave&&e.fromsave?g_neverurls.neveraccounts.push(i):void 0!==e.fromgenerate&&e.fromgenerate?(t+="&type=1",g_neverurls.nevergenerates.push(i)):void 0!==e.fromformfill&&e.fromformfill?(t+="&type=2",g_neverurls.neverformfills.push(i)):void 0!==e.fromshowicons&&e.fromshowicons?(t+="&type=6",g_neverurls.nevershowicons.push(i)):void 0!==e.neverforall&&e.neverforall?(g_neverurls.neveraccounts.push(i),g_neverurls.nevergenerates.push(i),g_neverurls.neverformfills.push(i),g_neverurls.neverautologins.push(i),g_neverurls.nevershowicons.push(i),t+="&type=7"):void 0!==e.neverenablelp&&e.neverenablelp?(g_neverurls.neverenablelp.push(i),t+="&type=8"):(t+="&type=3",g_neverurls.neverautologins.push(i)),lpMakeRequest(base_url+"add_never.php",t,null,null)}g_local_accts_version++,rewritelocalfile()}function handleSave(e,a){var t=!1;if(g_cpwbot&&CPWbot_bg&&e==CPWbot_bg.get_pwchangetabid())return L("handleSave(tab:"+e+", state="+CPWbot_bg.g_pwchangestate+")"),console_log("Skipping save because driving a password change"),!1;var i=get_ff_translation("ff_currpass_regexp");if("undefined"==typeof SAVEALLFORMSUBMITS){if(!lploggedin)return!1;if(lp_url_is_lastpass(a.url,!0))return!1;if(lp_url_is_lastpassext(a.url))return!1}for(var l=a.formdata.split("\n"),r=!1,n=!1,o=null,s="",d="",c=new Array,u=new Array,_=J(l),f=0;f<l.length;f++){var m,g;if(4==(g=(m=l[f]).split("\t")).length||5==g.length){var p=decodeURIComponent(g[2]),h=g[3],v=!0;if(r&&5<=g.length&&"notseen"==g[4]&&(v=!1),(!r||!n)&&B(h)&&0<p.length&&(v&&(s=p,r=!0),0==n&&void 0!==SpecialSites[lpcanonizeUrl(a.url)]&&(n=!0)),!("password"==h&&5<=g.length&&"notseen"==g[4]&&1<_.pwcount&&0<_.pwseencount)&&"password"==h&&(v||0==n)){var y=decodeURIComponent(g[1]);if(c[u.length]={name:y,value:p},u[u.length]=p,!n&&p.length&&(d=p,n=!0),null==o){var b=new RegExp(i,"i");y&&(y==a.current_pw_field_name||b.exec(y))&&(o=u.length-1)}}}}if(n){a.username=s,a.password=d,!r&&1<u.length&&u[0]!=u[1]&&null==o&&(a.username=u[0],a.password=u[1]);var w=lp_gettld_url(a.url);a.tld=w;var x=null,S=!1,k="",C="";1<u.length&&u[u.length-1]==u[u.length-2]&&""!=u[u.length-1]&&c[u.length-1].name!=c[u.length-2].name?(S=!0,k=u[u.length-1],x=1,3==u.length&&u[0]!=u[1]&&u[1]==u[2]&&(C=u[0])):1<u.length&&u[0]==u[1]&&""!=u[0]&&c[0].name!=c[1].name?(S=!0,k=u[0],x=2):1<u.length&&u[0]!=u[1]&&""!=u[0]&&null!=o&&(x=0==o&&2==u.length?(k=u[1],3):1==o&&2==u.length?(k=u[0],4):(k="",6));var P=S||null!=o&&k,A=new Array;if(P){var A=getsites(a.url,!0);if(a.createacct=2==u.length||0<array_length(A),a.createacct){for(var j="",q="",F="",T="",f=0;f<l.length;f++){var m,g;if(4==(g=(m=l[f]).split("\t")).length||5==g.length){var h=g[3];if(""==j&&B(h)&&""!=g[1]&&""!=g[2]){var y=decodeURIComponent(g[1]),D=get_ff_translation("ff_username_regexp"),b;if(""!=D)(b=new RegExp(D,"i")).exec(y)&&(j=y,q=decodeURIComponent(g[2]))}if(""==F&&B(h)&&""!=g[1]&&""!=g[2]){var y=decodeURIComponent(g[1]),N=get_ff_translation("ff_email_regexp"),b;if(""!=N)(b=new RegExp(N,"i")).exec(y)&&(F=y,T=decodeURIComponent(g[2]))}if(""!=j&&""!=F)break}}""==j&&(j=F,q=T),a.username_field=j,""!=q&&(a.username=q)}}if(P&&0<array_length(A)){verbose_log("looking for newpw="+(g_show_pw_in_logs||g_isadmin?k:"REDACTED")+" tld="+w+" in g_didchangepw");var U=void 0!==g_didchangepw[SHA256(k+w)]&&g_didchangepw[SHA256(k+w)]>(new Date).getTime()-6e5;if(verbose_log("already processed pw ="+(g_show_pw_in_logs||g_isadmin?k:"REDACTED")+" tld="+w+" is "+U),!U&&(g_notification_type="change",a.newpw=k,a.oldpw=C,g_notification_data=a,t=!0,0!=lpGetPref("showChangeNotificationBar",1))){var I=A,E;if(a.sitecount=array_length(I),1==array_length(I))for(var f in I){a.singleaid=f,E=gs("LastPass detected a password change for user:")+" "+of(getusernamefromacct(g_sites[f]));break}else E=gs("LastPass detected a password change for domain:")+" "+of(w);g_persistent_notifications[e]={cmd:"showchangenotification",text:E,notificationdata:a,do_40notify:g_40notify},write_history({cmd:"showchangenotification",aid:a.singleaid,spin:x,tld:a.tld,url:a.url,msg:E})}}else{var R=null;if(hasNeverSave(a.url,w)||(void 0!==a.topdocurl&&hasNeverSave(a.topdocurl),lp_gettld_url(a.topdocurl)))return!1;var O=reorderOnURL(getsites(a.url),a.url);for(var M in O)if(check_ident_aid(M.aid)&&void 0!==g_sites[M.aid]){var W=get_record(M.aid),z=getusernamefromacct(W),G=getpasswordfromacct(W);if((!r||s==lpmdec_acct(W.username,!0,W,g_shares)||value_is_masked(s)||s==z)&&(d==lpmdec_acct(W.password,!0,W,g_shares)||d==G)||W.save_all&&isMatch(W,r,s,d)||s==lpmdec_acct(W.username,!0,W,g_shares)&&""==d)return!1;if(r&&(s==lpmdec_acct(W.username,!0,W,g_shares)||value_is_masked(s)||s==z)&&u&&2==u.length&&(u[0]==lpmdec_acct(W.password,!0,W,g_shares)||u[1]==lpmdec_acct(W.password,!0,W,g_shares))&&(d===u[0]||d===u[1]))return!1}if(g_notification_type="save",g_notification_data=a,0!=lpGetPref("showSaveNotificationBar",1)&&lpCheckAddSite(a.username,a.password,w)){var E=gs("Should LastPass remember this password?");g_persistent_notifications[e]={cmd:"showaddnotification",text:E,notificationdata:LPJSON.stringify(a),do_40notify:g_40notify,tutorialData:IntroTutorial.getState()};var H="streetscape.com"==w?"all":null;sendCS(e,{cmd:"showaddnotification",text:E,notificationdata:LPJSON.stringify(a),do_40notify:g_40notify,tutorialData:IntroTutorial.getState()},H),write_history({cmd:"showaddnotification",username:a.username,tld:w,url:a.url,msg:E,spin:R}),t=!0}}}return t;function B(e){if(!e)return!1;var a=["text","email","tel","url"],t;for(t in a)if(a.hasOwnProperty(t)&&e==a[t])return!0;return!1}function J(e){for(var a={pwcount:0,textcount:0,pwseencount:0,textseencount:0,hiddencount:0},t=0;t<e.length;t++){var i,l=e[t].split("\t");if(4==l.length||5==l.length){var r=decodeURIComponent(l[2]),n=l[3];"password"==n?a.pwcount++:"hidden"==n?a.hiddencount++:B(n)&&a.textcount++,"password"==n&&(l.length<5||5<=l.length&&"seen"==l[4])?a.pwseencount++:B(n)&&(l.length<5||5<=l.length&&"seen"==l[4])&&a.textseencount++}}return a}}function lpCheckAddSite(e,a,t){var i=lp_get_gmt_timestamp(),l=new Array;for(var r in g_rejectedaddsites){var n;i>(n=g_rejectedaddsites[r]).rejectedTime+600&&(l[l.length]=r)}for(var r=l.length-1;0<=r;r--)g_rejectedaddsites.splice(l[r],1);for(var r in g_rejectedaddsites){var n;if((n=g_rejectedaddsites[r]).username==e&&lpdec(n.encryptedPassword)==a&&compare_tlds(n.tld,t))return!1}return!0}function update_username_from_fields_if(e,a){for(var t=get_ff_translation("ff_combineddummy_regexp"),i=new RegExp(t,"i"),l=0,r="",n=0;n<a.length;n++)if("text"==a[n].type||"email"==a[n].type||"tel"==a[n].type||"url"==a[n].type){if(i.exec(a[n].name)||i.exec(a[n].id)||"answer"==a[n].id||"answer"==a[n].name)continue;if(r=a[n].value,2<=++l)break}if(1==l&&""!=r){for(var o=0,n=0;n<e.fields.length;n++)if(!e.fields[n].otherfield&&("text"==e.fields[n].type||"email"==e.fields[n].type||"tel"==e.fields[n].type||"url"==e.fields[n].type)){o++;break}0==o&&(e.username=r,e.unencryptedUsername=lpdec_acct(crypto_btoa(e.username),e,g_shares))}}function handleSaveAll(e,a){a.save_all=1,g_site_data=a,LPPlatform.openTabDialog("site",{saveAllData:a})}function isMatch(e,a,t,i){for(var l=!a,r=!1,n=0;n<e.fields.length;n++)if("text"==e.fields[n].type||"password"==e.fields[n].type||"email"==e.fields[n].type||"tel"==e.fields[n].type||"url"==e.fields[n].type){var o=lpmdec_acct(e.fields[n].value,!0,e,g_shares);"text"!=e.fields[n].type&&"email"!=e.fields[n].type&&"tel"!=e.fields[n].type&&"url"!=e.fields[n].type||t!=o||(l=!0),"password"==e.fields[n].type&&i==o&&(r=!0)}return!(!l||!r)}var g_reqindex=0;function fill(e){var P=e.tabid,A=e.acct;if(null==P||!A)return!1;var j=e.docid,q=e.submit,F=e.doconfirm,T=e.docnum,D=e.allowforce,N=e.skip_pwprotect,U=e.skip_basicauth,I=e.from_iframe,E=e.desc,R=e.source,O=e.manualfill;O=O||!1;var M=e.automaticallyFill;if(void 0!==M&&null!=M||(M=1),write_history({cmd:E,tabid:P,docnum:T,aid:A.aid,submit:q,doconfirm:F,allowforce:D}),verbose_log("tabid="+P+"\nacct.aid="+A.aid+"\ndocid="+j+"\nsubmit="+q+"\ndoconfirm="+F+"\ndocnum="+T+"\nallowforce="+D+"\nskip_pwprotect="+N+"\nmanualfill="+O+"\nautomaticallyFill="+M+"\nskip_basicauth="+U+"\nfrom_iframe="+I+"\ndesc="+E),O||!IntroTutorial.getState().enabled){var W=!1,z=!1,G=!1,H=0;if(!N&&(A.pwprotect||g_prompts.login_site_prompt))return console_log("FILL : Showing Security Prompt"),void security_prompt(function(e){setTimeout(function(){var e=get_record(A.aid);fill({tabid:P,acct:e,docid:j,submit:q,doconfirm:F,docnum:T,allowforce:D,skip_pwprotect:!0,manualfill:O,automaticallyFill:null,skip_basicauth:null,from_iframe:I,desc:"fill_PW"})},100)},null,null,!0,A.aid,!0);get_selected_tab(null,function(e){if(!U&&M&&(D||1==A.basic_auth)&&gettabid(e)==P&&g_ischrome&&have_binary_function("fill_basicauth")){var a=getusernamefromacct(A),t=getpasswordfromacct(A);if(""!=a||""!=t){write_history({cmd:"check_autologin1",tabid:P,aid:A.aid,submit:i});var i=check_autologin(q,A),l=lp_gettld_url(A.url),r=lp_gettld_url(g_basicauth_origurl);return compare_tlds(l,r)&&(l=r),void call_binary_function("fill_basicauth",a,t,!!D,l,!!i,function(e){e?g_basicauth_found=!1:fill({tabid:P,acct:A,docid:j,submit:q,doconfirm:F,docnum:T,allowforce:D,skip_pwprotect:N,manualfill:O,automaticallyFill:M,skip_basicauth:!0,desc:"FILLBASIC",source:R})})}}update_cs_lastfill_aid(P,A.aid);var l=A.tld;customjs_has_humanize(A.aid)&&(W=!0),customjs_has_v2humanize(A.aid)&&(z=!0),customjs_has_force_fillbest(A.aid)&&(G=!0);var n=A.fields,o=n.length?n.length:0;F=1==F?1:0,D=D?1:0,I=I?1:0;var s=null!=A.sharedfromaid&&""!=A.sharedfromaid&&"0"!=A.sharedfromaid&&"null"!=A.sharedfromaid?1:0,d=!1;if(0==o&&!D&&customjs_has_userpass_overrides(A.aid)&&(d=D=!0),0!=o){for(var c=0,u=0,_=0;_<n.length;_++)n[_]&&("text"!=n[_].type&&"email"!=n[_].type&&"tel"!=n[_].type||u++,"password"==n[_].type&&c++);var f=!A.save_all&&0==c;f||void 0===SpecialSites[lpcanonizeUrl(A.url)]||A.save_all||(f=!0);var m=!1;if(n&&n.length){var g=0,p=0;n.forEach(function(e){"password"===e.type?g++:"email"!==e.type&&"text"!==e.type||p++}),m=2===n.length&&1===g||1===p}var h=0<n.filter(function(e){return"username"==e.name}).length,v=n.filter(function(e){return"email"==e.name});if(!h&&0<v.length){var y=Object.assign({},v[0]);y.name="username",n.push(y)}for(var b=[],_=0;_<n.length;_++)if(n[_])if(A.save_all||1!=F||"password"==n[_].type||D||f){var w=n[_],x=w.value,S=w.type,k="password"===S?"password":m?"userName":"other";if((void 0===A.captcha_id||""==A.captcha_id||A.captcha_id!=w.name||"text"!=S)&&("text"!=S&&"password"!=S&&"email"!=S&&"tel"!=S&&"textarea"!=S&&"url"!=S||(x=lpmdec_acct(x,!0,A,g_shares)),""==w.name||void 0===b[w.name+x+w.type]))if(b[w.name+x+w.type]=1,""!=x&&null!==x||("text"!=S&&"email"!=S&&"tel"!=S||1!=u?"password"==S&&1==c&&(x=getpasswordfromacct(A),k="password"):(x=getusernamefromacct(A),k="userName")),""!=x&&null!==x){verbose_log("Sending FillRequest: "+_+"\ntype="+S+"\nname="+w.name+"\nvalue=<hidden>");var L=!!(void 0!==g_launches[P]&&g_launches[P]&&g_launches[P]==A.aid&&"undefined"!=typeof g_last_launch&&void 0!==g_last_launch[A.aid]&&(new Date).getTime()-g_last_launch[A.aid]<=25e3),C={from:"fillfield_A",index:g_reqindex,time:(new Date).getTime(),uniqid:Math.floor(1e8*Math.random())};++g_reqindex,W&&H++,fillfieldCS(P,T,A.aid,{reqinfo:C,docid:j,sharedsite:s,automaticallyFill:M,is_launch:L,manualfill:O,name:w.name,value:x,type:S,checked:w.checked,otherfield:w.otherfield,doconfirm:F||A.save_all&&"password"==S?1:2,allowforce:D,from_iframe:I,humanize:W,v2humanize:z,delayquants:H,force_fillbest:G,originator:E,valueType:k},q)}else verbose_log("value is empty, will not fill "+w.name)}else verbose_log("initial fill attempt on page, skipping non-password "+n[_].name)}else if(D){console_log("no fields. finding best match "+getusernamefromacct(A)+" and <hidden>");var L=!!(void 0!==g_launches[P]&&g_launches[P]&&g_launches[P]==A.aid&&"undefined"!=typeof g_last_launch&&void 0!==g_last_launch[A.aid]&&(new Date).getTime()-g_last_launch[A.aid]<=25e3);console_log("Sending fillbest from A reqindex="+g_reqindex);var C={from:"fillbest_A",index:g_reqindex,time:(new Date).getTime(),uniqid:Math.floor(1e8*Math.random())};++g_reqindex,fillbestCS(P,T,A.aid,{reqinfo:C,docid:j,updatefields:1,addurid:0,sharedsite:s,automaticallyFill:M,allowforce:D,is_launch:L,humanize:W,valueType:k,usingCustomJS:d})}if(D&&logLoginAndCheckWeakPassword(P,A,R),1!=F){var i=check_autologin(q,A);"undefined"!=typeof AUTOSUBMIT&&(i=!0),write_history({cmd:"check_autologin2",tabid:P,aid:A.aid,submit:i,docnum:T}),"string"==typeof A.custom_js&&""!=A.custom_js&&sendCS(P,{cmd:"run_custom_js",docid:j,custom_js:A.custom_js,username:getusernamefromacct(A),password:lpmdec_acct(A.password,!0,A,g_shares),onlyfill:i?0:1,loc:3},T),"string"==typeof A.custom_js&&-1!=A.custom_js.indexOf("lpdontsubmit")||i&&submitCS(P,T,A.aid,{docid:j,humanize:W,delayquants:H})}})}}function logLoginAndCheckWeakPassword(l,r,n){get_all_windows({populate:!0},function(e){for(var a=0;a<e.length;a++)for(var t=0;t<get_tabs_length(e[a]);t++){var i=get_tabs(e[a])[t];gettabid(i)==l&&(checkWeakDuplicateBreached(r,l,lp_gettld_url(gettaburl(i))),(g_loglogins||LPISLOC)&&void 0===g_loggedLogins[r.aid]&&(g_loggedLogins[r.aid]="1",loglogintab(r.aid,i,n,r.autologin?1:0)))}})}function showpageoverlay(e){sendCS(e,{cmd:"showoverlay",urlprefix:getchromeurl("",!0)})}function check_autologin(e,a){var t=!1;if(e)t=!0;else if(a.autologin){var i=(new Date).getTime(),l=parseInt(lpGetPref("autoautoVal",25));(isNaN(l)||""==l||l<=0)&&(l=25);var r=i-1e3*l;void 0===a.last_auto_login||isNaN(a.last_auto_login)||a.last_auto_login<r?(console_log("Launching autologin"),a.last_auto_login=i,t=!0):(write_history({cmd:"check_autologin",msg:sprintf("last autologin to %s was too soon, %s < %s, pref=%d seconds",lp_gettld_url(a.url),new Date(a.last_auto_login).toUTCString(),new Date(r).toUTCString(),l)}),console_log("last autologin too soon!"))}return t}function fillfieldsconfirm(e){if(!e||!lploggedin)return!1;var a=e.url,t=void 0!==e.topurl?e.topurl:"",i=lp_gettld_url(a),l=e.result,r=e.aid,n=e.docid,o=e.tabid,s=e.doconfirm,d=!!e.from_iframe,c=e.manualfill,u=e.allowforce,_=!1,f=void 0!==e.automaticallyFill?e.automaticallyFill:1,m=e.force_fillbest,g=e.source,p=e.name,h;if(!(h=get_record(r)))return!1;if(p&&(g_fillfield_confirm_perfield[p]=!!l),(hasNeverAutologin(a,i)||t&&t!=a&&hasNeverAutologin(t,i))&&(_=!0),l){if(g_do_totp){var v=getusernamefromacct(h);""!=v&&(g_usercache[i]=v)}if(1==f&&logLoginAndCheckWeakPassword(o,h,g),2==s)return d&&c&&!_&&sendCS(o,{cmd:"conditionalforcefill",reqinfo:w,username:getusernamefromacct(h),password:getpasswordfromacct(h),aid:h.aid,sharedsite:y,automaticallyFill:f,from_iframe:d},e.docnum),!0}if(_)return!1;var y=null!=h.sharedfromaid&&""!=h.sharedfromaid&&"0"!=h.sharedfromaid&&"null"!=h.sharedfromaid?1:0;if(h.save_all){if(!l&&sufficient_condition_fill_saveall(h))return console.log("sufficient successful fills, ignoring failed fill result on saveall fill"),!0;if(!l||c){var b=!!(void 0!==g_launches[o]&&g_launches[o]&&g_launches[o]==h.aid&&"undefined"!=typeof g_last_launch&&void 0!==g_last_launch[h.aid]&&(new Date).getTime()-g_last_launch[h.aid]<=25e3);console_log("Sending fillbest from B reqindex="+g_reqindex);var w={from:"fillbest_B",index:g_reqindex,time:(new Date).getTime(),uniqid:Math.floor(1e8*Math.random())};++g_reqindex,fillbestCS(o,e.docnum,h.aid,{reqinfo:w,docid:n,updatefields:0,addurid:0,sharedsite:y,automaticallyFill:f,is_launch:b,saveall:!!h.saveall})}}else if(l){var h;if(h=get_record(r))var u=!0;var u=null,c=null;d&&e.manualfill&&(u=c=!0);var x=!1;fill({tabid:o,acct:h,docid:n,submit:null,doconfirm:!1,docnum:e.docnum,allowforce:u,skip_pwprotect:!0,manualfill:c,automaticallyFill:f,skip_basicauth:x,from_iframe:d,desc:"FILL_F5"}),delete g_fillfieldsmatches[a],delete g_fillfieldsmatchescurridx[a]}else if(e.allowforce||m&&!g_fillfield_did_fillbest[o.toString()]&&!sufficient_condition_fill_nonsaveall(h)){m&&(g_fillfield_did_fillbest[o.toString()]=!0);var b=!!(void 0!==g_launches[o]&&g_launches[o]&&g_launches[o]==h.aid&&"undefined"!=typeof g_last_launch&&void 0!==g_last_launch[h.aid]&&(new Date).getTime()-g_last_launch[h.aid]<=25e3);console_log("Sending fillbest from C reqindex="+g_reqindex);var w={from:"fillbest_C",index:g_reqindex,time:(new Date).getTime(),uniqid:Math.floor(1e8*Math.random())};++g_reqindex,fillbestCS(o,e.docnum,r,{reqinfo:w,docid:n,updatefields:0,addurid:c?1:0,sharedsite:y,automaticallyFill:f,is_launch:b,force_fillbest:m})}else{var S=g_fillfieldsmatches[a];if(S)for(var k=!1,L=0;L<S.length;L++){var C=S[L].aid;if(k){var h;if(h=g_sites[C])var x=!1;return void fill({tabid:o,acct:h,docid:n,submit:null,doconfirm:!0,docnum:e.docnum,allowforce:null,skip_pwprotect:!0,manualfill:null,automaticallyFill:f,skip_basicauth:x,from_iframe:d,desc:"FILL_F6"})}L==g_fillfieldsmatchescurridx[a]&&(g_fillfieldsmatchescurridx[a]++,k=!0)}delete g_fillfieldsmatches[a],delete g_fillfieldsmatchescurridx[a]}return!0}function web2plug(e){if("2"==e.rsa){g_local_key=AES.hex2bin(e.key),g_local_key_hex=e.key,g_local_key_hash=SHA256(g_local_key),rsa_userchangedpassword();var a=opendb();createDataTable(a),a&&!LPISLOC&&(g_indexeddb?a.transaction("LastPassData","readwrite").objectStore("LastPassData").delete(g_username_hash+"_accts"):a.transaction(function(e){e.executeSql("DELETE FROM LastPassData WHERE username_hash=? AND type=?",[db_prepend(g_username_hash),"accts"],function(e,a){},function(e,a){console_log(a)})})),lpWriteKeyFile()}else""!=g_username&&null!=g_username&&g_username!=e.username?loggedOut(!1,"web2plug"):(g_local_key=AES.hex2bin(e.key),g_local_key_hex=e.key,g_local_key_hash=SHA256(g_local_key),lpWriteKeyFile())}function recover(t,e,i,l){var a=lpParseUri(e),r=a.directory,n=a.file;""!=(r=r.replace(new RegExp("^/~[^/]*"),""))&&"/"!=r&&"/sso/"!=r||"recover.php"==n&&LPPlatform.getCurrentTabDetails(function(a){LPPlatform.openTabDialog("confirmation",{title:StringUtils.translate("Account Recovery"),text:StringUtils.translate("You have requested to use a One Time Password for account recovery. Are you sure you want to continue?"),handler:function(e){LPPlatform.activateTab(a),GetOTPHash(null,t,i,l),e()}})})}function loginfromwebsite(l){if(""!=l.wxusername&&""!=l.keyhex){var r=opendb();if(createSavedLoginsTable(r),r){1==l.rememberemail?(L("remembering email"),set_default_login_username(l.wxusername)):L("not remembering email");var a=function(e,t){if(0<t.rows.length){var a=t.rows.item(0).password,i=function(e){var a=get_key_iterations(l.wxusername);make_lp_key_iterations(l.wxusername,e,a,function(e){if(AES.bin2hex(e)!=l.keyhex)if(g_indexeddb){var a=t.rows.item(0);a.password="",r.transaction("LastPassSavedLogins2","readwrite").objectStore("LastPassSavedLogins2").put(a)}else r.transaction(function(e){e.executeSql("UPDATE LastPassSavedLogins2 SET password = '' WHERE username = ?",[l.wxusername],function(e,a){},function(e,a){console_log(a)})})})};1==t.rows.item(0).protected?unprotect_data(a,!1,i):2==t.rows.item(0).protected&&i(lpdec(a,AES.hex2bin(SHA256(l.wxusername))))}};if(g_indexeddb){var t={rows:{item:function(e){return this[e]},length:0}};r.transaction("LastPassSavedLogins2","readonly").objectStore("LastPassSavedLogins2").openCursor(IDBKeyRange.only(l.wxusername)).onsuccess=function(e){e.target.result&&""!=e.target.result.value.password&&(t.rows[t.rows.length]=e.target.result.value,t.rows.length++),a(null,t)}}else r.transaction(function(e){e.executeSql("SELECT * FROM LastPassSavedLogins2 WHERE username = ? AND password != ''",[l.wxusername],a,function(e,a){})})}""!=l.wxsessid&&(lp_phpsessid=l.wxsessid);var e=AES.hex2bin(l.keyhex),i=null!=g_local_key?AES.bin2hex(g_local_key):"";lploggedin&&g_username==l.wxusername?(g_local_key=e,g_local_key_hex=l.keyhex,g_local_key_hash=SHA256(g_local_key)):(lploggedin&&""!=g_username&&loggedOut(!1,"differentuser"),g_local_key=e,g_local_key_hex=l.keyhex,g_local_key_hash=SHA256(g_local_key),lpWriteKeyFile(),LP.lplogincheck(!0,null,l.wxusername,l.wxhash))}else lploggedin||LP.lplogincheck(!0)}function reorderOnURL(e,a,t,i){var l=lpParseUri(a),r=lpcanonizeUrl(a,l),n="string"==typeof l.path?l.path.split("/"):new Array,o=lp_gettld_url(a),s=new Array;for(var d in e)if(check_ident_aid(d)){var c=g_sites[d];if(void 0!==c&&void 0!==c.url&&(c.save_all||!t||""!=c.unencryptedUsername||""!=c.password)&&(!i||accthaspassword(c))){var u=lpParseUri(c.url);c.realmmatch=(a==g_basicauth_url||a==g_basicauth_origurl)&&(lpmdec_acct(c.realm_data,!0,c,g_shares)==g_basicauth_realm||g_basicauth_found&&""==g_basicauth_realm&&1==c.basic_auth),c.servermatch=l.host==u.host,c.portmatch=compare_ports(l,u),c.serverportmatch=c.servermatch&&c.portmatch?1:0,c.usernamematch=void 0!==g_username_vals[a]&&""!=g_username_vals[a]&&(g_username_vals[a]==c.unencryptedUsername||is_equivalent_email(g_username_vals[a],c.unencryptedUsername,a,c.url)),c.urlmatch=lpcanonizeUrl(c.url)==r;var _="string"==typeof u.path?u.path.split("/"):new Array,f;for(f=0;f<n.length&&f<_.length&&_[f]==n[f];f++);c.pathlevelmatch=f,c.fieldmatchcount=0,s.push(c)}}s.sort(lp_aids_sort_func);var m="string"==typeof l.path?l.path:"";return s=checkurlrules(g_urlrules,s,o,m,l.host,g_sites,get_port(l))}function lp_aids_sort_func(e,a){return e.realmmatch!=a.realmmatch?e.realmmatch?-1:1:e.usernamematch!=a.usernamematch?e.usernamematch?-1:1:e.fav!=a.fav?"1"==e.fav?-1:1:e.urlmatch!=a.urlmatch?e.urlmatch?-1:1:e.serverportmatch&&a.serverportmatch&&e.pathlevelmatch!=a.pathlevelmatch?e.pathlevelmatch>a.pathlevelmatch?-1:1:e.serverportmatch!=a.serverportmatch?e.serverportmatch?-1:1:e.servermatch!=a.servermatch?e.servermatch?-1:1:e.fieldmatchcount!=a.fieldmatchcount?e.fieldmatchcount>a.fieldmatchcount?-1:1:e.last_touch!=a.last_touch?e.last_touch>a.last_touch?-1:1:e.name!=a.name?e.name<a.name?-1:1:0}function lp_sort_case_insensitive_name(e,a){return(e=e.name.toLowerCase())<(a=a.name.toLowerCase())?-1:1}function launchautologin(e,a){if(check_ident_aid(e)){var t=g_sites[e];t&&(a||!t.pwprotect&&!g_prompts.login_site_prompt?(g_last_launch[t.aid]=(new Date).getTime(),openURL(t.url,function(e,a){g_launches[gettabid(e)]=a},t.aid)):t.pwprotect&&needs_secure_reprompt(t)?security_prompt(function(){launchautologin(e,!0)},null,null,!0,t.aid,!1):security_prompt(function(){launchautologin(e,!0)}))}}function is_max_frames_exceeded(e,a){var t=10;if(null==a)return!0;try{var i=g_CS_tops[e],l=g_CS[e][i],r="";r=g_ischrome&&l?lp_gettld_url(l.sender.tab.url):lp_gettld_url(gettaburl(l)),void 0===i?L("still waiting for topdoc to register for [tab:"+e+"] tld="+r):L("topdoc="+i+" tld="+r),r&&"dailykos.com"==r&&(t=40)}catch(e){console.error("is_max_frames_exceeded: "+e)}if(debug){var n=count_cs_for_tabid(e);0<n&&console.warn("is_max_frames_exceeded: CS table count="+n+", global g_CS_count="+g_CS_count[e]),dumpinfo_for_tabid(e)}return g_skip_ad_frames&&(t=25),a[e]>t}function fillbestCS(e,a,t,i){"number"==typeof t&&(t=t.toString());var l=get_record(t);if(!l&&null!==t&&0!==t||update_cs_lastfill_aid(e,t),void 0===e||!l)return!1;var r=null;return(i=i||{aid:t}).cmd="fillbest",void 0===i.clearfilledfieldsonlogoff&&(i.clearfilledfieldsonlogoff=lpGetPref("clearfilledfieldsonlogoff",0)),void 0===i.realurl&&(i.realurl=l.url),l.save_all&&(r=get_SAED_username_password_fields(l)),void 0===i.username&&(l.save_all&&r&&0<r.length?i.username=r[0]:i.username=getusernamefromacct(l)),void 0===i.password&&(l.save_all&&r&&0<r.length?i.password=r[1]:i.password=getpasswordfromacct(l)),void 0===i.custom_js&&(i.custom_js=l.custom_js),void 0===i.domains&&(i.domains=getacceptabletlds(l.url)),void 0===i.strictDomains&&(i.strictDomains=getStrictMatchingEquivalentDomains(l.url)),void 0===i.is_launch&&(i.is_launch=!!(void 0!==g_launches[e]&&g_launches[e]&&g_launches[e]==l.aid&&"undefined"!=typeof g_last_launch&&void 0!==g_last_launch[l.aid]&&(new Date).getTime()-g_last_launch[l.aid]<=25e3)),void 0===i.automaticallyFill&&(i.automaticallyFill=1),void 0===i.updatefields&&(i.updatefields=0),void 0===i.addurid&&(i.addurid=0),void 0===i.aid&&(i.aid=t),void 0===i.sharedsite&&(i.sharedsite=null!=l.sharedfromaid&&""!=l.sharedfromaid&&"0"!=l.sharedfromaid&&"null"!=l.sharedfromaid?1:0),void 0===i.dontfillautocompleteoff&&(i.dontfillautocompleteoff=getInt(lpGetPref("dontfillautocompleteoff",0))),void 0===i.saveall&&(i.saveall=!!l.saveall),void 0===i.topurl&&(i.topurl=get_top_url(e,a)),write_history({cmd:"fillbestCS",tabid:e,docnum:a,aid:t,username:i.username,force_fillbest:i.force_fillbest,custom_js:i.custom_js}),sendCS(e,i,a),!0}function fillfieldCS(e,a,t,i,l){"number"==typeof t&&(t=t.toString());var r=get_record(t);return!(void 0===e||!r)&&((i=i||{aid:t}).cmd="fillfield",void 0===i.clearfilledfieldsonlogoff&&(i.clearfilledfieldsonlogoff=lpGetPref("clearfilledfieldsonlogoff",0)),void 0===i.dontfillautocompleteoff&&(i.dontfillautocompleteoff=getInt(lpGetPref("dontfillautocompleteoff",0))),void 0===i.realurl&&(i.realurl=r.url),void 0===i.aid&&(i.aid=t),void 0===i.tabid&&(i.tabid=e),void 0===i.custom_js&&(i.custom_js=r.custom_js),void 0===i.domains&&(i.domains=getacceptabletlds(r.url)),void 0===i.strictDomains&&(i.strictDomains=getStrictMatchingEquivalentDomains(r.url)),void 0===i.is_launch&&(i.is_launch=!!(void 0!==g_launches[e]&&g_launches[e]&&g_launches[e]==r.aid&&"undefined"!=typeof g_last_launch&&void 0!==g_last_launch[r.aid]&&(new Date).getTime()-g_last_launch[r.aid]<=25e3)),void 0===i.automaticallyFill&&(i.automaticallyFill=1),void 0===i.from_iframe&&(i.from_iframe=0),void 0===i.formname&&(i.formname=""),void 0===i.type&&(i.type="text"),void 0===i.doconfirm&&(i.doconfirm=2),void 0!==i.delayquants&&parseInt(i.delayquants)||(i.delayquants=0),void 0===i.topurl&&(i.topurl=get_top_url(e,a)),""!=r.custom_js&&(i.username=getusernamefromacct(r),i.password=getpasswordfromacct(r),i.onlyfill=l?0:1),void 0===i.name||void 0===i.value?(console_error("missing required fields!"),!1):(write_history({cmd:"fillfieldCS",tabid:e,docnum:a,aid:i.aid,name:i.name,custom_js:i.custom_js,manualfill:i.manualfill,is_launch:i.is_launch,originator:i.originator,delay:i.humanize?i.delayquants:null}),i.humanize&&i.delayquants?setTimeout(function(){sendCS(e,i,a)},i.delayquants*HUMANIZE_DELAY_QUANTUM):sendCS(e,i,a),!0))}function submitCS(e,a,t,i){"number"==typeof t&&(t=t.toString());var l=get_record(t);if(void 0===e||!l)return!1;var r=void 0!==l.submit_id?l.submit_id:"",n=void 0!==l.submit_html?l.submit_html:"",o=void 0!==l.submit_js?l.submit_js:"";return(i=i||{aid:t}).cmd="submit",void 0===i.aid&&(i.aid=t),void 0===i.custom_js&&(i.custom_js=l.custom_js),void 0===i.submit_id&&(i.submit_id=r),void 0===i.submit_html&&(i.submit_html=n),void 0===i.submit_js&&(i.submit_js=o),void 0!==i.delayquants&&parseInt(i.delayquants)||(i.delayquants=0),"bankofamerica.com"==lp_gettld_url(l.url)?pass:(write_history({cmd:"submitCS",tabid:e,docnum:a,aid:t,submit_id:r,submit_js:o,delay:i.humanize?i.delayquants:null}),i.humanize&&i.delayquants?setTimeout(function(){sendCS(e,i,a)},i.delayquants*HUMANIZE_DELAY_QUANTUM):sendCS(e,i,a)),!0}function customjs_has_humanize(e){var a=get_record(e);return!!a&&("string"==typeof a.custom_js&&0<=a.custom_js.indexOf("lphumanize"))}function customjs_has_v2humanize(e){var a=get_record(e);return!!a&&("string"==typeof a.custom_js&&0<=a.custom_js.indexOf("lpv2humanize=1"))}function customjs_has_dontsubmit(e){var a=get_record(e);return!!a&&("string"==typeof a.custom_js&&0<=a.custom_js.indexOf("lpdontsubmit"))}function check_for_frame_mismatch_ok(e,a,t,i){if(!t||null==e)return!1;var l=0;return void 0!==a&&a&&(l=a),!(l&&!frame_and_topdoc_has_same_domain(e)&&(ftd_report_error(e,i||"unknown"),!lpConfirmYesNo(t+"\n\n"+lp_gettld_url(ftd_get_frameparenturl(e)))))}function set_casper_active_tab(e,a){if(g_iscasper&&e){var t=g_CS[g_CS_tops[a]];e.casper_activeTab=t}return!0}function get_casper_active_tab(e){return g_iscasper&&e&&e.casper_activeTab?e.casper_activeTab:null}function count_fillfield_confirms(){var e=0,a;for(a in Object.keys(g_fillfield_confirm_perfield))!0===g_fillfield_confirm_perfield[a]&&e++;return e}function sufficient_condition_fill_saveall(e){if(!e)return!1;var a,t=null,i=null;if(3<=count_fillfield_confirms()){for(a in e.fields)if(e.fields.hasOwnProperty(a)&&e.fields[a]&&("text"==e.fields[a].type||"email"==e.fields[a].type||"tel"==e.fields[a].type)&&""!=e.fields[a].value){t=e.fields[a].name;break}for(a in e.fields)if(e.fields.hasOwnProperty(a)&&e.fields[a]&&"password"==e.fields[a].type&&""!=e.fields[a].value){i=e.fields[a].name;break}if(t&&i)return!0}return!1}function customjs_has_force_fillbest(e){var a=get_record(e);return!!a&&("string"==typeof a.custom_js&&0<=a.custom_js.indexOf("__lpforcefillbest"))}function sufficient_condition_fill_nonsaveall(e){if(!e)return!1;var a=null,t=null;return!!(2<=count_fillfield_confirms()&&(a=getusernamefromacct(e),t=getpasswordfromacct(e),a&&t))}function customjs_has_userpass_overrides(e){var a=get_record(e);return!!a&&("string"==typeof a.custom_js&&(0<=a.custom_js.indexOf("lpcurrpass")||0<=a.custom_js.indexOf("lpcurruser")))}function clearformsCS(e,a){return!!e&&(null==a&&(a="all"),write_history({cmd:"clearformsCS",tabid:e,docnum:a}),sendCS(e,{cmd:"clearforms"},a),!0)}function given_username_in_accts(e,a,t){if(!e)return!1;if(!a)return!0;for(var i=null,l=0;l<e.length;l++)if(i=e[l]){if(a==i.unencryptedUsername)return!0;if(is_equivalent_email(a,i.unencryptedUsername,t,t))return!0}return!1}
//# sourceMappingURL=sourcemaps/fromcs.js.map
