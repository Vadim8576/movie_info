(this.webpackJsonpmovie_info=this.webpackJsonpmovie_info||[]).push([[11],{141:function(e,t,a){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ru",a={year:"numeric",month:"numeric",day:"numeric",timezone:"UTC"};return""===e?null:new Date(e).toLocaleString(t,a)}},144:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var r=a(20),n=a(0),l=a.n(n),s=a(19),i=a(35),c=a(15),m=a(11),o=a(28),u=a(138),d=a(1),v=a(2),E=a(3),b=a.n(E),f=a(6),_=l.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.striped,s=e.bordered,i=e.borderless,c=e.hover,m=e.size,o=e.variant,u=e.responsive,E=Object(v.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),_=Object(f.b)(a,"table"),p=b()(r,_,o&&_+"-"+o,m&&_+"-"+m,n&&_+"-striped",s&&_+"-bordered",i&&_+"-borderless",c&&_+"-hover"),h=l.a.createElement("table",Object(d.a)({},E,{className:p,ref:t}));if(u){var g=_+"-responsive";return"string"===typeof u&&(g=g+"-"+u),l.a.createElement("div",{className:g},h)}return h})),p=a(141),h=(a(144),function(e){var t=e.releases,a=(e.releases_isFetching,e.getReleases),s=e.getDetails,i=e.movie_info,c=Object(r.a)(e,["releases","releases_isFetching","getReleases","getDetails","movie_info"]);return Object(n.useEffect)((function(){var e=c.match.params.movie_id;a(e),s(e)}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"realeases_header border"},l.a.createElement("div",{className:"realeases_poster"},l.a.createElement(m.b,{to:"/movie_info/".concat(c.match.params.movie_id),className:"link"},l.a.createElement("img",{src:i.poster_path?"https://image.tmdb.org/t/p/w220_and_h330_face".concat(i.poster_path):"/img/no_poster.jpg",alt:"\u043f\u043e\u0441\u0442\u0435\u0440"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f")),l.a.createElement("div",{className:"realeases_text"},l.a.createElement("h4",null,i.title)),l.a.createElement("br",null)),l.a.createElement("h5",null,"\u0414\u0430\u0442\u044b \u0440\u0435\u043b\u0438\u0437\u043e\u0432:"),l.a.createElement("br",null),t?l.a.createElement(g,{releases:t}):l.a.createElement(u.a,{animation:"border"}))}),g=function(e){var t=e.releases;return l.a.createElement(l.a.Fragment,null,t.map((function(e){return l.a.createElement("div",{key:e.iso_3166_1},l.a.createElement("div",{className:"list-group-item active"},e.iso_3166_1),l.a.createElement(_,{bordered:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u0414\u0430\u0442\u0430"),l.a.createElement("th",null,"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"),l.a.createElement("th",null,"\u0422\u0438\u043f"),l.a.createElement("th",null,"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"))),l.a.createElement("tbody",null,e.release_dates.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,Object(p.a)(e.release_date)),l.a.createElement("td",null,e.certification),l.a.createElement("td",null,e.type),l.a.createElement("td",null,e.note))})))),l.a.createElement("br",null))})))};t.default=h=Object(c.d)(Object(s.b)((function(e){return{releases:e.movies.releases,releases_isFetching:e.movies.releases_isFetching,movie_info:e.movies.movie_info}}),{getReleases:i.e,getDetails:i.d}),o.g)(h)}}]);
//# sourceMappingURL=11.bd0f6da0.chunk.js.map