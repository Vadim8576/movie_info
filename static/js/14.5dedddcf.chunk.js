(this.webpackJsonpmovie_info=this.webpackJsonpmovie_info||[]).push([[14],{141:function(e,t,s){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ru",s={year:"numeric",month:"numeric",day:"numeric",timezone:"UTC"};return""===e?null:new Date(e).toLocaleString(t,s)}},147:function(e,t,s){"use strict";t.a=function(e,t){var s=new Date;return"month"===t?s.setMonth(s.getMonth()+e):s.setDate(s.getDate()+e)}},160:function(e,t,s){"use strict";s.r(t);var i=s(20),a=s(0),r=s.n(a),n=(s(62),s(19)),o=s(47),c=s(32),u=s(12),v=s(35),_=s(67),l=s(68),d=s(141),g=s(147),m=s(55);t.default=Object(n.b)((function(e){return{genres:e.genres.genres,request:e.discover.request,discover_movies_is_fetching:e.discover.discover_movies_is_fetching,discover_movies:e.discover.discover_movies,current_page:e.pagination.current_page,total_pages:e.pagination.total_pages,total_results:e.pagination.total_results,isAuth:e.auth.isAuth,session_id:e.auth.session_id,your_rate:e.movies.your_rate}}),{getGenres:o.b,setCurrentPage:u.b,setRequestData:c.d,setRequestDataGenreIds:c.e,getDiscoverMovies:c.c,discoverMoviesIsFetching:c.b,rateMovie:v.f,getAccountStates:v.b,rateMovieDelete:v.g})((function(e){var t=e.discover_movies,s=e.getDiscoverMovies,n=e.discover_movies_is_fetching,o=(e.popular_movies,e.popular_movies_isFetching,e.getGenres),c=e.genres,u=e.setRequestData,v=e.request,h=e.setRequestDataGenreIds,f=(e.discoverMoviesIsFetching,e.isAuth),p=e.rateMovie,b=e.session_id,D=e.getAccountStates,M=e.your_rate,E=e.rateMovieDelete,q=(e.getDetails,e.authentication,Object(i.a)(e,["discover_movies","getDiscoverMovies","discover_movies_is_fetching","popular_movies","popular_movies_isFetching","getGenres","genres","setRequestData","request","setRequestDataGenreIds","discoverMoviesIsFetching","isAuth","rateMovie","session_id","getAccountStates","your_rate","rateMovieDelete","getDetails","authentication"]));Object(a.useEffect)((function(){s(v,q.current_page)}),[q.current_page,v.release_date_gte]),Object(a.useEffect)((function(){o(),u({sort_by:"popularity.desc",release_date_gte:Object(d.a)(Object(g.a)(7,"day"),"fr-CA"),release_date_lte:Object(d.a)(Object(g.a)(1,"month"),"fr-CA"),btn_is_visible:!1}),h(null,!1)}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"tittle"},r.a.createElement("h5",null,"\u041e\u0436\u0438\u0434\u0430\u0435\u043c\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b \u043d\u0430 ",r.a.createElement("a",{href:"https://www.themoviedb.org",target:"_blank"}," TMDb"),":")),r.a.createElement("div",{className:"sides_wrapper"},r.a.createElement("div",{className:"left_side"},r.a.createElement(_.a,Object.assign({request:v,setRequestData:u,genres:c,setRequestDataGenreIds:h,getDiscoverMovies:s},q))),r.a.createElement("div",{className:"right_side border"},r.a.createElement(m.a,q),r.a.createElement("hr",null),r.a.createElement(l.a,Object.assign({discover_movies_is_fetching:n,data:t,isAuth:f,setRateMovie:function(e){var t=e.id,s=e.session_id,i=e.rate;f&&p({id:t,session_id:s,rate:i})},session_id:b,accountStates:function(e){var t=e.id,s=e.session_id;f&&D({id:t,session_id:s})},your_rate:M,rateMovieDelete:E},q)),r.a.createElement("hr",null),r.a.createElement(m.a,q))))}))}}]);
//# sourceMappingURL=14.5dedddcf.chunk.js.map