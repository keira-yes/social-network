(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{227:function(e,t,a){e.exports={error:"FormField_error__gFhzy",errorWindow:"FormField_errorWindow__2ZKzs"}},228:function(e,t,a){"use strict";a.d(t,"b",function(){return s}),a.d(t,"a",function(){return u});var n=a(239),r=a(0),c=a.n(r),o=a(227),l=a.n(o),i=function(e){return function(t){var a=t.input,r=t.meta,o=Object(n.a)(t,["input","meta"]),i=r.touched&&r.error;return c.a.createElement("div",{className:i?l.a.error:""},c.a.createElement(e,Object.assign({},a,o)),i&&c.a.createElement("span",null,r.error))}},s=i("textarea"),u=i("input")},230:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r});var n=function(e){return e?void 0:"This field is required"},r=function(e){return function(t){return t&&t.length>e?"Must be ".concat(e," characters or less"):void 0}}},304:function(e,t,a){e.exports=a.p+"static/media/facebook.92bab191.svg"},305:function(e,t,a){e.exports=a.p+"static/media/web.1a2d68cb.svg"},306:function(e,t,a){e.exports=a.p+"static/media/vk.19f27101.svg"},307:function(e,t,a){e.exports=a.p+"static/media/twitter.dc77d709.svg"},308:function(e,t,a){e.exports=a.p+"static/media/instagram.bc38dfb8.svg"},309:function(e,t,a){e.exports=a.p+"static/media/youtube.5f30aa80.svg"},310:function(e,t,a){e.exports=a.p+"static/media/github.e3ae8d33.svg"},311:function(e,t,a){e.exports=a.p+"static/media/link.115f6451.svg"},312:function(e,t,a){e.exports={post:"Post_post__1_Ha1"}},314:function(e,t,a){e.exports={posts:"Posts_posts__3ieNw"}},316:function(e,t,a){e.exports={profile:"Profile_profile__AOFaI"}},319:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a(26),l=a(1),i=function(e){return function(t){var a=Object(l.f)(),n=Object(l.g)(),c=Object(l.h)();return r.a.createElement(e,Object.assign({},t,{router:{location:a,navigate:n,params:c}}))}},s=a(42),u=a(304),m=a.n(u),f=a(305),p=a.n(f),d=a(306),E=a.n(d),b=a(307),g=a.n(b),v=a(308),A=a.n(v),h=a(309),k=a.n(h),O=a(310),w=a.n(O),F=a(311),j=a.n(F),S=a(86),z=a.n(S),G=a(13),I=function(e){var t=e.status,a=e.updateStatus,c=Object(n.useState)(!1),o=Object(G.a)(c,2),l=o[0],i=o[1],s=Object(n.useState)(t),u=Object(G.a)(s,2),m=u[0],f=u[1];Object(n.useEffect)(function(){f(t)},[t]);var p=function(){i(!l)};return r.a.createElement(r.a.Fragment,null,l?r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:m,autoFocus:!0,onChange:function(e){f(e.target.value)},onBlur:function(){p(),a(m)}})):r.a.createElement("div",{onDoubleClick:p},t||"Enter status..."))},x=function(e){var t=e.profile,a=e.status,n=e.updateStatus;if(!t)return r.a.createElement(s.a,null);var c=t.photos,o=t.fullName,l=t.aboutMe,i=t.lookingForAJob,u=t.lookingForAJobDescription,f=t.contacts,d=f.facebook,b=f.website,v=f.vk,h=f.twitter,O=f.instagram,F=f.youtube,S=f.github,G=f.mainLink;return r.a.createElement("div",null,r.a.createElement("img",{src:c.large?c.large:z.a,alt:o}),r.a.createElement("h2",null,o),r.a.createElement(I,{status:a,updateStatus:n}),r.a.createElement("p",null,r.a.createElement("strong",null,"About:")," ",l),r.a.createElement("p",null,r.a.createElement("strong",null,"Looking for a job:")," ",i?"Yes":"No"),r.a.createElement("p",null,r.a.createElement("strong",null,"Comment:")," ",u),r.a.createElement("div",null,d&&r.a.createElement("a",{href:d},r.a.createElement("img",{src:m.a,alt:"Facebook"})),b&&r.a.createElement("a",{href:b},r.a.createElement("img",{src:p.a,alt:"Website"})),v&&r.a.createElement("a",{href:v},r.a.createElement("img",{src:E.a,alt:"Vk"})),h&&r.a.createElement("a",{href:h},r.a.createElement("img",{src:g.a,alt:"Twitter"})),O&&r.a.createElement("a",{href:O},r.a.createElement("img",{src:A.a,alt:"Instagram"})),F&&r.a.createElement("a",{href:F},r.a.createElement("img",{src:k.a,alt:"Youtube"})),S&&r.a.createElement("a",{href:S},r.a.createElement("img",{src:w.a,alt:"Github"})),G&&r.a.createElement("a",{href:G},r.a.createElement("img",{src:j.a,alt:"Link"}))))},M=a(51),K=a(87),y=a(88),J=a(230),P=a(228),X=Object(J.a)(10),B=Object(y.a)({form:"post"})(function(e){var t=e.handleSubmit;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"post"},"Enter Post"),r.a.createElement(K.a,{name:"post",component:P.b,validate:[J.b,X],placeholder:"Enter post"})),r.a.createElement("button",{type:"submit"},"Add"))}),C=a(312),T=a.n(C),q=function(e){var t=e.message,a=e.likes;return r.a.createElement("article",{className:T.a.post},r.a.createElement("h3",null,"Post"),r.a.createElement("p",null,t),r.a.createElement("button",{type:"button"},a))},L=a(314),R=a.n(L),N=function(e){var t=e.posts,a=e.addPost;return r.a.createElement("div",null,r.a.createElement(B,{onSubmit:function(e){a(e.post)}}),r.a.createElement("div",{className:R.a.posts},t.map(function(e){return r.a.createElement(q,{key:e.id,message:e.message,likes:e.likes})})))},Y=Object(c.b)(function(e){return{posts:e.profileReducer.posts}},{addPost:M.a})(N),H=a(316),V=a.n(H),D=function(e){var t=e.profile,a=e.status,n=e.updateStatus;return r.a.createElement("div",{className:V.a.profile},r.a.createElement("h1",null,"Profile"),r.a.createElement(x,{profile:t,status:a,updateStatus:n}),r.a.createElement(Y,null))};t.default=Object(o.d)(Object(c.b)(function(e){return{profile:e.profileReducer.profile,status:e.profileReducer.status}},{getProfile:M.b,getStatus:M.c,updateStatus:M.e}),i)(function(e){return Object(n.useEffect)(function(){var t=e.router,a=e.getProfile,n=e.getStatus,r=t.params.id;a(r),n(r)},[]),r.a.createElement(D,e)})},86:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAOVBMVEXf5emPnKWdqbGVoaqnsrqjrrbO1tvc4ubI0Na9xszAyc/X3uLT2t+vucDFzdO2v8artbyZpa2zvcMfXADjAAAEzElEQVR4nO2dB5bqMAxFB6eTSva/2E/I5BOGFMtWg6O7AfyOLatZ4efHMAzDMAzDMAzDMAzjQ8m7fkjdLXngsmG85oX0msDkfXq7vJNkfflBYvLRbYhYuLWl9AK9KKojFTOub6SXeUYzJqcyHrS59FKPKHo/FQ8Gvbty9dyNhV56wds0GUzGHafR7CuwjIlWetl/KdIgHfdN0WUp+Zb386STXvyKMlzGnUp6+f+5Rum4XEZpAb/E6tBi8vE6dOxJnH0syPvGHEXH5XIV1lEDo5J9hINIeFiyRyKacEGi3TMyQR1YBjIj6BgjApMtaikdmAdrQupw1cg6Lheh9GRAF3IT0dGg6xByi6Gp1BESW0KxISJZVksixLHrKEh0CIRcGFnIFuw5Fl60+ErCrAPfGS4wO0Wqk8V+tvC9+gKzK0GOe9ewlh5xE5FXWNMSOhNhNhIatz7DmpVQeZEJ1irEeb8zAkZrx6tmbcEYbtGE8AuMoTzl7ct6/+IUrhUI6UiFMFbmaYUwekQT4gXj0foaY/+a6/drHGLxLSHK1wSNJHXfBdakHbvFs4Y1saJ0JKyvICivLd6CPGE5iLclSld9YG4s0BkJ80MhOpfI3SCh8iTsXUSqAJj/4RbRvcX/epbGuQu84qDpWUk8P6NwJfzd6R+aLZF5VTOi6xB654TvFKUe/GP3reQeZOP2ewTfmeLau+R4D+bhkn3pj+dMRFzICqzCUCL2VvaXGil4lJ+vxKlDaBi0wqhoSw9dzMQr0TIulkfGKjr2Y6KJurs0zbkGD4aqGw0NznwH6YW/kYccr0SPeTwp4ImW1tn8HGYpToMX3KHzP183Lc5jh84v2XLKZUzk7al/TBUfqjXFdTjQklXSETuEotz65k6Sjd0nqVhoymoc0mwiHdqq+8BvIH0YBW5aJ7Vf02eCBsQf7xOR7wnl8+CFw/rt+hEVpNwhffOcH8HplXXLfZ2x7spLzI7w0/V6rmZgu6DLvwHVGGkp1av7TJjCl43iYlRasRFoZgybspM/BYfk26F/Qh6M7Vet3TXggHW7GQxxv/0wM78BP5FXH352L6X0j6dDe2nn/fPlWbTvyAyl8MmZksEjvi3K1qP2nVBl9N5pbNaX+2KKsko9K5MJiXP02o/nGtzQd3mzPmhFfQ/rWwcpr5IoCaqK3lyWzmQupJFC0P6hfOnLqYRygvIQ5NZi2EcYUUgxddDOi5yA6OPpPifgBV7cRTqb4AGWwYsZ+gKSwYsayAyKmdBO73iC4eHpPlMBAOFZM+2AmzfxL+YJ5ytAxIb0lDNIICLfbQq7wjVxblGFpc9E2TvtBCiQmLId5VdD4ISXVZRcvQvh/l3XhoS/C1a2IeFbIpSm7xO4JaqurJmwi0s8DXknyJeoCN//EtJiFCyc7BMScUkn6tvA03d1d+8M/AZWaOoT8A9rajT1Cai5KyidbAMdl1F6suBnS+vJgp4ttScLerbwhz7RgIUpOr3hDKTqqKh48g4kBKb85mo0kBaW2st3ApJeaTYRiJGoNhGIkSj2IhP+nkRlTvXEvxOn2tYh1q6sMPeGd69ES3NnD+8Og/RCz/C+tqQXeoZ34i690DO871/phZ7hPU0qvdAzJP8VzjAMwzAMwzAMwzCY+AcGfkw8gFOZaAAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=6.ece80089.chunk.js.map