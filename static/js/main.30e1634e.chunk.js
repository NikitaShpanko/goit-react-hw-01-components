(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(a,e,t){a.exports={profile:"Profile_profile__2qgja",name:"Profile_name__3l1Un",label:"Profile_label__3GevR",avatar:"Profile_avatar__NY62h"}},function(a,e,t){a.exports={statistics:"Statistics_statistics__35pzF",label:"Statistics_label__vn7Hf"}},function(a){a.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(a,e,t){a.exports={item:"FriendListItem_item__3kmSZ",status:"FriendListItem_status__17boO",isOnline:"FriendListItem_isOnline__kbJqM",avatar:"FriendListItem_avatar__249_I"}},,,,function(a){a.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(a){a.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(a){a.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(a,e,t){},function(a,e,t){a.exports={transactionHistory:"TransactionHistory_transactionHistory___6T_H"}},,,,,,function(a,e,t){},,function(a,e,t){"use strict";t.r(e);var c=t(5),n=t.n(c),s=t(7),i=t.n(s),r=(t(18),t(3)),d=t(8),l=t(9),o=t(10),b=t(13);var m=function(a){return a.slice(0,1).toUpperCase()+a.slice(1).toLowerCase()},u=t(1),p=t.n(u),j=t(0);var f=function(a){var e=a.avatar,t=a.name,c=a.tag,n=a.location,s=a.stats;return Object(j.jsxs)("div",{className:p.a.profile,children:[Object(j.jsxs)("div",{className:p.a.description,children:[Object(j.jsx)("img",{src:e,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:p.a.avatar}),Object(j.jsx)("p",{className:p.a.name,children:t}),Object(j.jsxs)("p",{className:p.a.tag,children:["@",c]}),Object(j.jsx)("p",{className:p.a.location,children:n})]}),Object(j.jsx)("ul",{className:p.a.stats,children:Object.entries(s).map((function(a){var e=Object(b.a)(a,2),t=e[0],c=e[1];return Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:p.a.label,children:m(t)}),Object(j.jsx)("span",{className:p.a.quantity,children:c})]},t)}))})]})},v=t(2),O=t.n(v);var y=function(a){var e=a.title,t=a.stats;return Object(j.jsxs)("section",{className:O.a.statistics,children:[e&&Object(j.jsx)("h2",{className:O.a.title,children:e}),Object(j.jsx)("ul",{className:O.a.statList,children:t.map((function(a){var e=a.id,t=a.label,c=a.percentage;return Object(j.jsxs)("li",{className:O.a.item,children:[Object(j.jsx)("span",{className:O.a.label,children:t}),Object(j.jsx)("span",{className:O.a.percentage,children:c})]},e)}))})]})},h=t(4),x=t.n(h),g=function(a){var e=a.isOnline,t=a.avatar,c=a.name;return Object(j.jsxs)("li",{className:x.a.item,children:[Object(j.jsx)("span",{className:"".concat(x.a.status).concat(e?" ".concat(x.a.isOnline):"")}),Object(j.jsx)("img",{className:x.a.avatar,src:t,alt:c}),Object(j.jsx)("p",{className:x.a.name,children:c})]})},w=t(11),_=t.n(w);var N=function(a){var e=a.friends;return Object(j.jsx)("ul",{className:_.a.friendList,children:e.map((function(a){var e=a.avatar,t=a.name,c=a.isOnline,n=a.id;return Object(j.jsx)(g,{avatar:e,name:t,isOnline:c},n)}))})},L=t(12),U=t.n(L);var J=function(a){var e=a.items;return Object(j.jsxs)("table",{className:U.a.transactionHistory,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Type"}),Object(j.jsx)("th",{children:"Amount"}),Object(j.jsx)("th",{children:"Currency"})]})}),Object(j.jsx)("tbody",{children:e.map((function(a){var e=a.id,t=a.type,c=a.amount,n=a.currency;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:m(t)}),Object(j.jsx)("td",{children:c}),Object(j.jsx)("td",{children:n})]},e)}))})]})};var S=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{name:r.name,tag:r.tag,location:r.location,avatar:r.avatar,stats:r.stats}),Object(j.jsx)(y,{title:"Upload stats",stats:d}),Object(j.jsx)(N,{friends:l}),Object(j.jsx)(J,{items:o})]})};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.30e1634e.chunk.js.map