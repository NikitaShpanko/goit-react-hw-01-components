(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(t,e,a){t.exports={profile:"Profile_profile__2qgja",avatar:"Profile_avatar__NY62h",name:"Profile_name__3l1Un",tag:"Profile_tag__2XGod",stats:"Profile_stats__3ffMN",label:"Profile_label__3GevR",quantity:"Profile_quantity__2Vaqo"}},function(t,e,a){t.exports={statistics:"Statistics_statistics__35pzF",title:"Statistics_title__3M3wQ",statList:"Statistics_statList__3fou-",item:"Statistics_item__1z03V",label:"Statistics_label__vn7Hf"}},function(t){t.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(t,e,a){t.exports={item:"FriendListItem_item__3kmSZ",status:"FriendListItem_status__17boO",isOnline:"FriendListItem_isOnline__kbJqM",avatar:"FriendListItem_avatar__249_I",name:"FriendListItem_name__3Inzm"}},,,,function(t){t.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(t){t.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(t){t.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(t,e,a){t.exports={friendList:"FriendList_friendList__1u5K8"}},function(t,e,a){t.exports={transactionHistory:"TransactionHistory_transactionHistory___6T_H"}},,,,,,function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var c=a(5),n=a.n(c),s=a(7),i=a.n(s),r=(a(18),a(3)),o=a(8),d=a(9),l=a(10),b=a(13);var m=function(t){return t.slice(0,1).toUpperCase()+t.slice(1).toLowerCase()},u=a(1),f=a.n(u),p=a(0);var j=function(t){var e=t.avatar,a=t.name,c=t.tag,n=t.location,s=t.stats;return Object(p.jsxs)("div",{className:f.a.profile,children:[Object(p.jsxs)("div",{className:f.a.description,children:[Object(p.jsx)("img",{src:e,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:f.a.avatar}),Object(p.jsx)("p",{className:f.a.name,children:a}),Object(p.jsxs)("p",{className:f.a.tag,children:["@",c]}),Object(p.jsx)("p",{className:f.a.location,children:n})]}),Object(p.jsx)("ul",{className:f.a.stats,children:Object.entries(s).map((function(t){var e=Object(b.a)(t,2),a=e[0],c=e[1];return Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{className:f.a.label,children:m(a)}),Object(p.jsx)("span",{className:f.a.quantity,children:c.toLocaleString("en-US")})]},a)}))})]})},v=a(2),O=a.n(v);var y=function(t){var e=t.title,a=t.stats;return Object(p.jsxs)("section",{className:O.a.statistics,children:[e&&Object(p.jsx)("h2",{className:O.a.title,children:e}),Object(p.jsx)("ul",{className:O.a.statList,children:a.map((function(t){var e=t.id,a=t.label,c=t.percentage;return Object(p.jsxs)("li",{className:O.a.item,children:[Object(p.jsx)("span",{className:O.a.label,children:a}),Object(p.jsx)("span",{className:O.a.percentage,children:c+"%"})]},e)}))})]})},_=a(4),h=a.n(_),x=function(t){var e=t.isOnline,a=t.avatar,c=t.name;return Object(p.jsxs)("li",{className:h.a.item,children:[Object(p.jsx)("span",{className:"".concat(h.a.status).concat(e?" ".concat(h.a.isOnline):"")}),Object(p.jsx)("img",{className:h.a.avatar,src:a,alt:c}),Object(p.jsx)("p",{className:h.a.name,children:c})]})},g=a(11),w=a.n(g);var N=function(t){var e=t.friends;return Object(p.jsx)("ul",{className:w.a.friendList,children:e.map((function(t){var e=t.avatar,a=t.name,c=t.isOnline,n=t.id;return Object(p.jsx)(x,{avatar:e,name:a,isOnline:c},n)}))})},L=a(12),S=a.n(L);var U=function(t){var e=t.items;return Object(p.jsxs)("table",{className:S.a.transactionHistory,children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Type"}),Object(p.jsx)("th",{children:"Amount"}),Object(p.jsx)("th",{children:"Currency"})]})}),Object(p.jsx)("tbody",{children:e.map((function(t){var e=t.id,a=t.type,c=t.amount,n=t.currency;return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:m(a)}),Object(p.jsx)("td",{children:c}),Object(p.jsx)("td",{children:n})]},e)}))})]})};var P=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(j,{name:r.name,tag:r.tag,location:r.location,avatar:r.avatar,stats:r.stats}),Object(p.jsx)(y,{title:"Upload stats",stats:o}),Object(p.jsx)(N,{friends:d}),Object(p.jsx)(U,{items:l})]})};i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.1ff7eb7a.chunk.js.map