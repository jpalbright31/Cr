var Cr={doc:"undefined"!=typeof document?document:null,elm:function(e,t,n,r){var i,o,d,s=this.doc.createElement(e);if(t){if(d=t.event||t.events)if("string"==typeof d[0])s.addEventListener(d[0],d[1],d[2]);else if(d.length)for(i=0,o=d.length;o>i;i++)s.addEventListener(d[i][0],d[i][1],d[i][2]);t.childNodes&&((r||n&&n.length)&&(console.warn("Cr Exception: if providing attributes.childNodes; 3 args max, addchilds argument becomes final argument appnedTo"),n.length&&(t.childNodes=t.childNodes.concat(n),n=r)),r=n,n=t.childNodes);for(i in t)"event"==i.substring(0,5)||"childNodes"==i||("checked"==i||"selected"==i?t[i]&&s.setAttribute(i,i):s.setAttribute(i,t[i]))}if(n)for(i=0,o=n.length;o>i;i++)n[i]&&s.appendChild(n[i]);return r&&this.insertNode(s,r),s},txt:function(e){return this.doc.createTextNode(e)},ent:function(e){return this.doc.createTextNode(this.unescapeHtml(e))},frag:function(e){var t=this.doc.createDocumentFragment();return e&&this.insertNodes(e,t),t},evt:function(){return Array.prototype.slice.call(arguments)},evts:null,event:null,events:null,paragraphs:function(e){for(var t=e.split("\n"),n=[],r=0,i=t.length;i>r;r++)n.push(Cr.elm("p",{},[Cr.ent(t[r])]));return n},insertNode:function(e,t,n){t||(t=this.doc.body),n&&n.parentNode==t?t.insertBefore(e,n):t.appendChild(e)},insertNodes:function(e,t,n){if(e.nodeType)this.insertNode(e,t,n);else for(var r=0,i=e.length;i>r;r++)this.insertNode(e[r],t,n)},empty:function(e){for(;e.lastChild;)e.removeChild(e.lastChild)},unescapeHtml:function(e){if(e.length<1)return e;var t=this.doc.createElement("div");e=e.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim,""),t.innerHTML=e;var n=t.childNodes[0].nodeValue;return this.empty(t),n}};Cr.evts=Cr.evt,Cr.event=Cr.evt,Cr.events=Cr.evt,"undefined"!=typeof module&&(module.exports=function(e){return Cr.doc=e||Cr.doc,Cr});
//# sourceMappingURL=Cr_min.js.map