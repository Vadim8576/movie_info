(this.webpackJsonpmovie_info=this.webpackJsonpmovie_info||[]).push([[3],{141:function(e,t,a){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ru",a={year:"numeric",month:"numeric",day:"numeric",timezone:"UTC"};return""===e?null:new Date(e).toLocaleString(t,a)}},142:function(e,t,a){"use strict";var l=a(0),n=a.n(l),o=a(11),i=(a(143),a(141));t.a=function(e){var t=e.data,a=e.type,l=e.id,r=6,p=t?t.length:"\u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445",m={};return"movie cast"===a.context&&(m={title:"\u0410\u043a\u0442\u0435\u0440\u044b",text:{name:"name",job:"character"},img:{property:"profile_path",no_photo:"/img/no_photo.jpg",path:"https://image.tmdb.org/t/p/w138_and_h175_face"},target:"/people/",more_link:"/casts/",type:a.view}),"movie crew"===a.context&&(m={title:"\u0421\u044a\u0435\u043c\u043e\u0447\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430",text:{name:"name",job:"job"},img:{property:"profile_path",no_photo:"/img/no_photo.jpg",path:"https://image.tmdb.org/t/p/w138_and_h175_face"},target:"/people/",more_link:"/crew/",type:a.view}),"people cast"===a.context&&(m={title:"\u0424\u0438\u043b\u044c\u043c\u044b",text:{name:"title",job:"character"},img:{property:"poster_path",no_photo:"/img/no_poster.jpg",path:"https://image.tmdb.org/t/p/w500"},target:"/movie-info/",more_link:"/people-filmography/",type:a.view}),"people crew"===a.context&&(m={title:"\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u043b(\u0430) \u0443\u0447\u0430\u0441\u0442\u0438\u0435",text:{name:"title",job:"job"},img:{property:"poster_path",no_photo:"/img/no_poster.jpg",path:"https://image.tmdb.org/t/p/w500"},target:"/movie-info/",more_link:"/people-crew/",type:a.view}),n.a.createElement(n.a.Fragment,null,"  ",p>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"credits_tittle bg-primary"},n.a.createElement("span",{className:"text-white"},m.title,":")),n.a.createElement("div",{className:m.type+"_list_wrap border"},t&&t.map((function(e,t){return l||(r=p),t<r?n.a.createElement("div",{key:t,className:m.type+"_list border"},n.a.createElement("div",{className:m.type+"_photo"},n.a.createElement(o.b,{to:m.target+e.id,className:"link"},n.a.createElement("img",{className:"border",src:e[m.img.property]?m.img.path+e[m.img.property]:m.img.no_photo,alt:"\u043f\u0440\u043e\u0444\u0430\u0439\u043b"}))),n.a.createElement("div",{className:"list_text"},n.a.createElement("div",null,n.a.createElement(o.b,{to:m.target+e.id,className:"link"},e[m.text.name]&&e[m.text.name])),n.a.createElement("div",null,n.a.createElement("i",null,e[m.text.job]&&e[m.text.job])),"people cast"===a.context||"people crew"===a.context?n.a.createElement("div",null,n.a.createElement("i",null,Object(i.a)(e.release_date))):"")):null})),t&&t.length>r?l&&n.a.createElement("div",{className:m.type+"_list border"},n.a.createElement(o.b,{to:m.more_link+l,className:"link"},"\u0415\u0449\u0435...")):"",t&&0===t.length&&"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445")))}},143:function(e,t,a){},146:function(e,t,a){},150:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var l=a(20),n=a(0),o=a.n(n),i=a(19),r=a(61),p=a(28),m=a(15),c=a(138),s=a(30),g=a(141),h=a(162),_=(a(150),function(e){var t=e.people_image,a=e.show,l=e.setShow,i=e.name,r=e.images_isFetching,p=Object(n.useState)(0),m=Object(s.a)(p,2),g=m[0],_=m[1],u=function(e){var a=g+e;a>t.length-1&&(a=0),a<0&&(a=t.length-1),_(a)};return o.a.createElement(h.a,{people_image:t,show:a,onHide:function(){return l(!1)},dialogClassName:"modal-90w","aria-labelledby":"people-custom-modal-styling-title"},o.a.createElement(h.a.Header,{closeButton:!0},o.a.createElement(h.a.Title,{id:"people-custom-modal-styling-title"},i||"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438","\xa0",t.length>0&&o.a.createElement(o.a.Fragment,null,"(",g+1+" \u0438\u0437 ",t.length,")"))),o.a.createElement(h.a.Body,null,r?o.a.createElement("div",{className:"people_photos_container"},t.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"arrow",onClick:function(){return u(-1)}},"<"),o.a.createElement("div",{className:"people_photos"},t.map((function(e,t){if(t===g)return o.a.createElement("img",{key:t,src:"https://image.tmdb.org/t/p/w500".concat(e.file_path),alt:"\u0424\u043e\u0442\u043e"})}))),o.a.createElement("div",{className:"arrow",onClick:function(){return u(1)}},">")),t.length<=0&&o.a.createElement("img",{src:"/img/no_photo.jpg",alt:"\u0424\u043e\u0442\u043e"})):o.a.createElement(c.a,{animation:"border"})))}),u=(a(146),function(e){var t=e.people,a=e.getImages,l=e.people_image,i=e.images_isFetching,r=Object(n.useState)(!1),p=Object(s.a)(r,2),m=p[0],c=p[1],h=t.birthday?Object(g.a)(t.birthday):"\u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445",u=t.deathday?Object(g.a)(t.deathday):"";return o.a.createElement("div",{className:"details_header border"},o.a.createElement(_,{people_image:l,show:m,setShow:c,name:t.name,images_isFetching:i}),o.a.createElement("div",{className:"poster",onClick:function(){a(t.id),c(!0)}},o.a.createElement("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w220_and_h330_face".concat(t.profile_path):"/img/no_photo.jpg",alt:"\u043f\u043e\u0441\u0442\u0435\u0440"}),o.a.createElement("div",{className:"loupe"})),o.a.createElement("div",{className:"text"},o.a.createElement("h4",null,t.name?t.name:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442"),o.a.createElement("hr",null),o.a.createElement("p",null,"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f: ",h),u&&o.a.createElement("p",null," \u0414\u0430\u0442\u0430 \u0441\u043c\u0435\u0440\u0442\u0438: ",u),o.a.createElement("p",null,"\u041c\u0435\u0441\u0442\u043e \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f: ",t.place_of_birth?t.place_of_birth:"\u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"),o.a.createElement("p",null,"\u0422\u0430\u043a \u0436\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043d(\u043d\u0430), \u043a\u0430\u043a: ",t.also_known_as.map((function(e){return e+", "}))||"\u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"),o.a.createElement("p",null,"\u0414\u043e\u043c\u0430\u0448\u043d\u044f\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430: ",t.homepage?t.homepage:"\u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"),t.biography?o.a.createElement(o.a.Fragment,null,o.a.createElement("details",null,o.a.createElement("summary",null,"\u0411\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u044f:"),o.a.createElement("p",null,t.biography))):"\u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e \u0431\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u0438"))}),d=a(142),E=Object(m.d)(Object(i.b)((function(e){return{people:e.people.people,people_isFetching:e.people.people_isFetching,filmography:e.people.filmography,filmography_isFetching:e.people.filmography_isFetching,people_image:e.people.people_image,images_isFetching:e.people.images_isFetching}}),{getPeople:r.c,getImages:r.b}),p.g)((function(e){var t=e.getPeople,a=e.people_isFetching,i=e.people,r=e.filmography,p=(e.filmography_isFetching,e.getImages),m=e.images_isFetching,s=e.people_image,g=Object(l.a)(e,["getPeople","people_isFetching","people","filmography","filmography_isFetching","getImages","images_isFetching","people_image"]);return console.log("people_image",s),Object(n.useEffect)((function(){var e=g.match.params.people_id;t(e)}),[]),o.a.createElement(o.a.Fragment,null,!a&&o.a.createElement(c.a,{animation:"border"}),a&&o.a.createElement(u,{people:i,getImages:p,people_image:s,images_isFetching:m}),o.a.createElement(d.a,{id:g.match.params.people_id,data:r.cast,type:{context:"people cast",view:"horizontal"}}),o.a.createElement(d.a,{id:g.match.params.people_id,data:r.crew,type:{context:"people crew",view:"horizontal"}}))}));t.default=E}}]);
//# sourceMappingURL=3.86fb2395.chunk.js.map