"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6596],{76596:function(e,t,n){n.r(t),n.d(t,{c:function(){return c}});var r=n(46374),a=Object.defineProperty,i=(e,t)=>a(e,"name",{value:t,configurable:!0});function s(e,t){return t.forEach((function(t){t&&"string"!==typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(n){if("default"!==n&&!(n in e)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}}))})),Object.freeze(e)}i(s,"_mergeNamespaces");var o={exports:{}};!function(e){var t={pairs:"()[]{}''\"\"",closeBefore:")]}'\":;>",triples:"",explode:"[]{}"},n=e.Pos;function r(e,n){return"pairs"==n&&"string"==typeof e?e:"object"==typeof e&&null!=e[n]?e[n]:t[n]}e.defineOption("autoCloseBrackets",!1,(function(t,n,i){i&&i!=e.Init&&(t.removeKeyMap(a),t.state.closeBrackets=null),n&&(s(r(n,"pairs")),t.state.closeBrackets=n,t.addKeyMap(a))})),i(r,"getOption");var a={Backspace:c,Enter:u};function s(e){for(var t=0;t<e.length;t++){var n=e.charAt(t),r="'"+n+"'";a[r]||(a[r]=o(n))}}function o(e){return function(t){return p(t,e)}}function l(e){var t=e.state.closeBrackets;return!t||t.override?t:e.getModeAt(e.getCursor()).closeBrackets||t}function c(t){var a=l(t);if(!a||t.getOption("disableInput"))return e.Pass;for(var i=r(a,"pairs"),s=t.listSelections(),o=0;o<s.length;o++){if(!s[o].empty())return e.Pass;var c=d(t,s[o].head);if(!c||i.indexOf(c)%2!=0)return e.Pass}for(o=s.length-1;o>=0;o--){var u=s[o].head;t.replaceRange("",n(u.line,u.ch-1),n(u.line,u.ch+1),"+delete")}}function u(t){var n=l(t),a=n&&r(n,"explode");if(!a||t.getOption("disableInput"))return e.Pass;for(var i=t.listSelections(),s=0;s<i.length;s++){if(!i[s].empty())return e.Pass;var o=d(t,i[s].head);if(!o||a.indexOf(o)%2!=0)return e.Pass}t.operation((function(){var e=t.lineSeparator()||"\n";t.replaceSelection(e+e,null),f(t,-1),i=t.listSelections();for(var n=0;n<i.length;n++){var r=i[n].head.line;t.indentLine(r,null,!0),t.indentLine(r+1,null,!0)}}))}function f(e,t){for(var n=[],r=e.listSelections(),a=0,i=0;i<r.length;i++){var s=r[i];s.head==e.getCursor()&&(a=i);var o=s.head.ch||t>0?{line:s.head.line,ch:s.head.ch+t}:{line:s.head.line-1};n.push({anchor:o,head:o})}e.setSelections(n,a)}function h(t){var r=e.cmpPos(t.anchor,t.head)>0;return{anchor:new n(t.anchor.line,t.anchor.ch+(r?-1:1)),head:new n(t.head.line,t.head.ch+(r?1:-1))}}function p(t,a){var i=l(t);if(!i||t.getOption("disableInput"))return e.Pass;var s=r(i,"pairs"),o=s.indexOf(a);if(-1==o)return e.Pass;for(var c,u=r(i,"closeBefore"),p=r(i,"triples"),d=s.charAt(o+1)==a,v=t.listSelections(),b=o%2==0,k=0;k<v.length;k++){var S,y=v[k],O=y.head,P=t.getRange(O,n(O.line,O.ch+1));if(b&&!y.empty())S="surround";else if(!d&&b||P!=a)if(d&&O.ch>1&&p.indexOf(a)>=0&&t.getRange(n(O.line,O.ch-2),O)==a+a){if(O.ch>2&&/\bstring/.test(t.getTokenTypeAt(n(O.line,O.ch-2))))return e.Pass;S="addFour"}else if(d){var x=0==O.ch?" ":t.getRange(n(O.line,O.ch-1),O);if(e.isWordChar(P)||x==a||e.isWordChar(x))return e.Pass;S="both"}else{if(!b||!(0===P.length||/\s/.test(P)||u.indexOf(P)>-1))return e.Pass;S="both"}else S=d&&g(t,O)?"both":p.indexOf(a)>=0&&t.getRange(O,n(O.line,O.ch+3))==a+a+a?"skipThree":"skip";if(c){if(c!=S)return e.Pass}else c=S}var A=o%2?s.charAt(o-1):a,m=o%2?a:s.charAt(o+1);t.operation((function(){if("skip"==c)f(t,1);else if("skipThree"==c)f(t,3);else if("surround"==c){for(var e=t.getSelections(),n=0;n<e.length;n++)e[n]=A+e[n]+m;for(t.replaceSelections(e,"around"),e=t.listSelections().slice(),n=0;n<e.length;n++)e[n]=h(e[n]);t.setSelections(e)}else"both"==c?(t.replaceSelection(A+m,null),t.triggerElectric(A+m),f(t,-1)):"addFour"==c&&(t.replaceSelection(A+A+A+A,"before"),f(t,1))}))}function d(e,t){var r=e.getRange(n(t.line,t.ch-1),n(t.line,t.ch+1));return 2==r.length?r:null}function g(e,t){var r=e.getTokenAt(n(t.line,t.ch+1));return/\bstring/.test(r.type)&&r.start==t.ch&&(0==t.ch||!/\bstring/.test(e.getTokenTypeAt(t)))}i(s,"ensureBound"),s(t.pairs+"`"),i(o,"handler"),i(l,"getConfig"),i(c,"handleBackspace"),i(u,"handleEnter"),i(f,"moveSel"),i(h,"contractSelection"),i(p,"handleChar"),i(d,"charsAround"),i(g,"stringStartsAfter")}(r.a.exports);var l=o.exports,c=Object.freeze(s({__proto__:null,[Symbol.toStringTag]:"Module",default:l},[o.exports]))}}]);