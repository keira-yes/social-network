(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{11:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(71),r=n.n(a).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"dc63a3ff-a043-4208-a711-144171d6a52b"}})},125:function(e,t,n){e.exports=n(226)},22:function(e,t,n){"use strict";var a=n(3),r=n.n(a),u=n(5),c=n(6),s=n(36),i=n(11),o={getAuthData:function(){var e=Object(u.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.a)("auth/me");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),login:function(){var e=Object(u.a)(r.a.mark(function e(t,n,a){var u,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("auth/login",{email:t,password:n,rememberMe:a});case 2:return u=e.sent,c=u.data,e.abrupt("return",c);case 5:case"end":return e.stop()}},e)}));return function(t,n,a){return e.apply(this,arguments)}}(),logout:function(){var e=Object(u.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.delete("auth/login");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()};n.d(t,"a",function(){return f}),n.d(t,"b",function(){return p}),n.d(t,"c",function(){return d}),n.d(t,"d",function(){return m});var l={authData:null,isAuth:!1},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_AUTH_DATA":return Object(c.a)({},e,{authData:t.payload,isAuth:!0});case"auth/RESET_AUTH_DATA":return Object(c.a)({},e,{authData:null,isAuth:!1});default:return e}},p=function(){return function(){var e=Object(u.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.getAuthData();case 2:return 0===(n=e.sent).resultCode&&t({type:"auth/SET_AUTH_DATA",payload:n}),e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var a=Object(u.a)(r.a.mark(function a(u){var c,i;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.login(e,t,n);case 2:0===(c=a.sent).resultCode?u(p()):(i=c.messages.length?c.messages[0]:"Something went wrong...",u(Object(s.a)("login",{_error:i})));case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},m=function(){return function(){var e=Object(u.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.logout();case 2:0===e.sent.resultCode&&t({type:"auth/RESET_AUTH_DATA"});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}},222:function(e,t,n){},224:function(e,t,n){},226:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(35),c=n.n(u),s=n(19),i=function(e){e&&e instanceof Function&&n.e(2).then(n.bind(null,318)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,u=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),u(e),c(e)})},o=n(26),l=n(73),f=n(89),p=n(53),d=n(51),m=n(90),h=n(22),v=n(3),E=n.n(v),b=n(5),g=n(6),_={isInitialized:!1},O=Object(o.c)({form:f.a,appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;switch((arguments.length>1?arguments[1]:void 0).type){case"app/SET_INITIALIZED":return Object(g.a)({},e,{isInitialized:!0});default:return e}},profileReducer:d.d,dialogsReducer:p.b,usersReducer:m.d,authReducer:h.a}),w=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):o.d)(Object(o.a)(l.a)),y=Object(o.e)(O,w),S=n(10),T=n(1),j=n(74),A=n.n(j),x=function(e){var t=e.isAuth,n=e.authData,a=e.logOut;return r.a.createElement("header",{className:A.a.header},r.a.createElement(S.b,{to:"/"},"Logo"),t?r.a.createElement("div",null,r.a.createElement("strong",null,n.data.login),r.a.createElement("button",{type:"button",onClick:a},"Logout")):r.a.createElement(S.b,{to:"/login"},"Login"))},N=Object(s.b)(function(e){return{isAuth:e.authReducer.isAuth,authData:e.authReducer.authData}},{logOut:h.d})(function(e){return r.a.createElement(x,e)}),I=n(27),D=n.n(I),k=function(){return r.a.createElement("aside",{className:D.a.sidebar},r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",{className:"nav__list"},r.a.createElement("li",{className:"nav__item"},r.a.createElement(S.b,{to:"/profile",className:function(e){return e.isActive?D.a.active:""}},"Profile")),r.a.createElement("li",{className:"nav__item"},r.a.createElement(S.b,{to:"/messages",className:function(e){return e.isActive?D.a.active:""}},"Messages")),r.a.createElement("li",{className:"nav__item"},r.a.createElement(S.b,{to:"/users",className:function(e){return e.isActive?D.a.active:""}},"Users")),r.a.createElement("li",{className:"nav__item"},r.a.createElement(S.b,{to:"/news",className:"nav__link"},"News")),r.a.createElement("li",{className:"nav__item"},r.a.createElement(S.b,{to:"/music",className:"nav__link"},"Music")),r.a.createElement("li",{className:"nav__item"},r.a.createElement(S.b,{to:"/settings",className:"nav__link"},"Settings")))))},L=n(42),R=(n(222),Object(a.lazy)(function(){return n.e(3).then(n.bind(null,323))})),U=Object(a.lazy)(function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,320))}),P=Object(a.lazy)(function(){return n.e(5).then(n.bind(null,321))}),C=Object(a.lazy)(function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,319))}),F=Object(a.lazy)(function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,322))}),z=Object(s.b)(function(e){return{isInitialized:e.appReducer.isInitialized}},{initializeApp:function(){return function(){var e=Object(b.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(h.b)());case 2:t({type:"app/SET_INITIALIZED"});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(function(e){var t=e.initializeApp,n=e.isInitialized;return Object(a.useEffect)(function(){t()},[n]),n?r.a.createElement(S.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},r.a.createElement(N,null),r.a.createElement(k,null),r.a.createElement("main",{className:"main"},r.a.createElement(a.Suspense,{fallback:r.a.createElement(L.a,null)},r.a.createElement(T.d,null,r.a.createElement(T.b,{path:"profile",element:r.a.createElement(R,null)}),r.a.createElement(T.b,{path:"messages",element:r.a.createElement(U,null)}),r.a.createElement(T.b,{path:"users",element:r.a.createElement(P,null)}),r.a.createElement(T.b,{path:"users/:id",element:r.a.createElement(C,null)}),r.a.createElement(T.b,{path:"login",element:r.a.createElement(F,null)}))))))):r.a.createElement(L.a,null)});n(224);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:y},r.a.createElement(z,null))),document.getElementById("root")),i()},27:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__2dWDY",active:"Sidebar_active__3CRTK"}},42:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(){return r.a.createElement("span",null,"Loading...")}},51:function(e,t,n){"use strict";var a=n(3),r=n.n(a),u=n(5),c=n(17),s=n(6),i=n(11),o={getProfile:function(){var e=Object(u.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.a)("profile/".concat(t));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),getStatus:function(){var e=Object(u.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.a)("profile/status/".concat(t));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),updateStatus:function(){var e=Object(u.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.put("profile/status",{status:t});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()};n.d(t,"d",function(){return f}),n.d(t,"a",function(){return p}),n.d(t,"b",function(){return d}),n.d(t,"c",function(){return h}),n.d(t,"e",function(){return v});var l={profile:null,status:"",posts:[{id:1,message:"Hello World!",likes:5},{id:2,message:"My first post...",likes:12}]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/SET_PROFILE":return Object(s.a)({},e,{profile:t.payload});case"profile/SET_STATUS":return Object(s.a)({},e,{status:t.payload});case"profile/ADD_POST":var n={id:e.posts.length+1,message:t.payload,likes:0};return Object(s.a)({},e,{posts:[].concat(Object(c.a)(e.posts),[n])});case"profile/DELETE_POST":return Object(s.a)({},e,{posts:e.posts.filter(function(e){return e.id!==t.payload})});default:return e}},p=function(e){return{type:"profile/ADD_POST",payload:e}},d=function(e){return function(){var t=Object(u.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.getProfile(e);case 2:a=t.sent,n({type:"profile/SET_PROFILE",payload:a});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},m=function(e){return{type:"profile/SET_STATUS",payload:e}},h=function(e){return function(){var t=Object(u.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.getStatus(e);case 2:a=t.sent,n(m(a));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(u.a)(r.a.mark(function t(n){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.updateStatus(e);case 2:n(m(e));case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},53:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return s});var a=n(17),r=n(6),u={dialogs:[{id:1,name:"Name 1"},{id:2,name:"Name 2"},{id:3,name:"Name 3"},{id:4,name:"Name 4"},{id:5,name:"Name 5"},{id:6,name:"Name 6"}],messages:[{id:1,message:"Hi world"},{id:2,message:"How are you doing"},{id:3,message:"Miss you"}]},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/ADD_MESSAGE":var n={id:e.messages.length+1,message:t.payload};return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[n])});default:return e}},s=function(e){return{type:"dialogs/ADD_MESSAGE",payload:e}}},74:function(e,t,n){e.exports={header:"Header_header__1wlg0"}},90:function(e,t,n){"use strict";var a=n(3),r=n.n(a),u=n(5),c=n(17),s=n(6),i=n(11),o={getUsers:function(){var e=Object(u.a)(r.a.mark(function e(){var t,n,a,u,c=arguments;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:1,n=c.length>1&&void 0!==c[1]?c[1]:10,e.next=4,Object(i.a)("users?page=".concat(t,"&count=").concat(n));case 4:return a=e.sent,u=a.data,e.abrupt("return",u);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),followUser:function(){var e=Object(u.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("follow/".concat(t));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),unFollowUser:function(){var e=Object(u.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.delete("follow/".concat(t));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()};n.d(t,"d",function(){return f}),n.d(t,"b",function(){return m}),n.d(t,"a",function(){return v}),n.d(t,"c",function(){return E});var l={users:[],usersTotal:0,usersPageLimit:10,usersCurrentPage:1,isLoading:!1,fetchingItems:[]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"users/SET_USERS":return Object(s.a)({},e,{users:t.payload});case"users/SET_USERS_TOTAL":return Object(s.a)({},e,{usersTotal:t.payload});case"users/TOGGLE_FOLLOW_USER":return Object(s.a)({},e,{users:e.users.map(function(e){return e.id===t.payload?Object(s.a)({},e,{followed:!e.followed}):e})});case"users/SET_CURRENT_PAGE":return Object(s.a)({},e,{usersCurrentPage:t.payload});case"users/SET_IS_LOADING":return Object(s.a)({},e,{isLoading:t.payload});case"users/SET_IS_FETCHING":return Object(s.a)({},e,{fetchingItems:t.isFetching?[].concat(Object(c.a)(e.fetchingItems),[t.id]):e.fetchingItems.filter(function(e){return e!==t.id})});default:return e}},p=function(e){return{type:"users/SET_IS_LOADING",payload:e}},d=function(e){return{type:"users/SET_USERS_TOTAL",payload:e}},m=function(e){return{type:"users/SET_CURRENT_PAGE",payload:e}},h=function(e,t){return{type:"users/SET_IS_FETCHING",isFetching:e,id:t}},v=function(e,t){return function(){var n=Object(u.a)(r.a.mark(function n(a){var u;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(p(!0)),n.next=3,o.getUsers(e,t);case 3:u=n.sent,a(p(!1)),a({type:"users/SET_USERS",payload:u.items}),a(d(u.totalCount));case 7:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()},E=function(e,t){return function(){var n=Object(u.a)(r.a.mark(function n(a){var u;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(h(!0,t)),u=e?o.unFollowUser:o.followUser,n.next=4,u(t);case 4:0===n.sent.resultCode&&a({type:"users/TOGGLE_FOLLOW_USER",payload:t}),a(h(!1,t));case 7:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}}},[[125,9,8]]]);
//# sourceMappingURL=main.b4d9794b.chunk.js.map