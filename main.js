(()=>{"use strict";var e=function(e,t){var a=document.createElement(e);return a.classList.add(t),a},t=function(e,t){var a=document.createElement("a");return a.setAttribute("href",e),a.setAttribute("title",t),a},a=function(e,t){var a=document.createElement("img");return o(a,e,t),a},r=function(t,a,r){var i=e(t,r);return n(i,a),i},i=function(t,a,r){var i=document.createElement("li"),n=e("a","filter-tag");n.setAttribute("href",r),n.setAttribute("title",a),n.textContent=a,i.appendChild(n),t.appendChild(i)},n=function(e,t){return e.textContent=t,e},o=function(e,t,a){return e.setAttribute("src",t),e.setAttribute("alt",a),e},d=function(n){var o=e("article","photographers-elt"),d=t("photographer-page.html?id=".concat(n.id),n.name),l=e("p","infos"),c=e("ul","tags");c.classList.add("ph-elt-tags"),o.appendChild(d),o.appendChild(l),o.appendChild(c);var s=a("images/".concat(n.portrait),""),p=r("h2",n.name,"photographer-name");d.appendChild(s),d.appendChild(p);var u=r("span","".concat(n.city,", ").concat(n.country),"infos-city"),g=r("span",n.tagline,"infos-tagline"),h=r("span","".concat(n.price,"€/jour"),"infos-price");return l.appendChild(u),l.appendChild(g),l.appendChild(h),n.tags.forEach((function(e){return i(c,e,"index.html")})),o};const l={photographers:[{name:"Mimi Keel",id:243,city:"London",country:"UK",tags:["portrait","events","travel","animals"],tagline:"Voir le beau dans le quotidien",price:400,portrait:"MimiKeel.jpg",alt:"Mimi Keel portrait"},{name:"Ellie-Rose Wilkens",id:930,city:"Paris",country:"France",tags:["sports","architecture"],tagline:"Capturer des compositions complexes",price:250,portrait:"EllieRoseWilkens.jpg",alt:"Ellie-Rose Wilkens portrait"},{name:"Tracy Galindo",id:82,city:"Montreal",country:"Canada",tags:["art","fashion","events"],tagline:"Photographe freelance",price:500,portrait:"TracyGalindo.jpg",alt:"Tracy Galindo portrait"},{name:"Nabeel Bradford",id:527,city:"Mexico City",country:"Mexico",tags:["travel","portrait"],tagline:"Toujours aller de l'avant",price:350,portrait:"NabeelBrandford.jpg",alt:"Nabeel Bradford portrait"},{name:"Rhode Dubois",id:925,city:"Barcelona",country:"Spain",tags:["sport","fashion","events","animals"],tagline:"Je crée des souvenirs",price:275,portrait:"RhodeDubois.jpg",alt:"Rhode Dubois portrait"},{name:"Marcel Nikolic",id:195,city:"Berlin",country:"Germany",tags:["travel","architecture"],tagline:"Toujours à la recherche de LA photo",price:300,portrait:"MarcelNikolic.jpg",alt:"Marcel Nikolic portrait"}],media:[{id:342550,photographerId:82,image:"Fashion_Yellow_Beach.jpg",alt:"Fashion Yellow Beach",tags:["fashion"],likes:62,date:"2011-12-08",price:55},{id:8520927,photographerId:82,image:"Fashion_Urban_Jungle.jpg",alt:"Fashion Urban Jungle",tags:["fashion"],likes:11,date:"2011-11-06",price:55},{id:9025895,photographerId:82,image:"Fashion_Pattern_on_Pattern.jpg",alt:"Fashion Pattern on Pattern",tags:["fashion"],likes:72,date:"2013-08-12",price:55},{id:9275938,photographerId:82,image:"Event_WeddingGazebo.jpg",alt:"Event Edding Gazebo",tags:["events"],likes:69,date:"2018-02-22",price:55},{id:2053494,photographerId:82,image:"Event_Sparklers.jpg",alt:"Event Sparklers",tags:["events"],likes:2,date:"2020-05-25",price:55},{id:7324238,photographerId:82,image:"Event_18thAnniversary.jpg",alt:"Event 18th Anniversary",tags:["events"],likes:33,date:"2019-06-12",price:55},{id:8328953,photographerId:82,video:"Art_Wooden_Horse_Sculpture.mp4",alt:"Art Wooden Horse Sculpture",tags:["art"],likes:24,date:"2011-12-08",price:100},{id:7502053,photographerId:82,image:"Art_Triangle_Man.jpg",alt:"Art Triangle Man",tags:["art"],likes:88,date:"2007-05-07",price:55},{id:8523492,photographerId:82,image:"Art_Purple_light.jpg",alt:"Art Purple Light",tags:["art"],likes:24,date:"2018-05-05",price:55},{id:75902334,photographerId:82,image:"Art_Mine.jpg",alt:"Art Mine",tags:["art"],likes:75,date:"2019-11-25",price:55},{id:73852953,photographerId:925,image:"Sport_2000_with_8.jpg",alt:"Sport 2000 with 8",tags:["sport"],likes:52,date:"2013-02-30",price:70},{id:92758372,photographerId:925,image:"Fashion_Wings.jpg",alt:"Fashion Wings",tags:["fashion"],likes:58,date:"2018-07-17",price:70},{id:32958383,photographerId:925,image:"Fashion_Melody_Red_on_Stripes.jpg",alt:"Fashion Melody Red on Stripes",tags:["fashion"],likes:11,date:"2019-08-12",price:70},{id:928587383,photographerId:925,image:"Event_VentureConference.jpg",alt:"Event Venture Conference",tags:["events"],likes:2,date:"2019-01-02",price:70},{id:725639493,photographerId:925,image:"Event_ProductPitch.jpg",alt:"Event Product Pitch",tags:["events"],likes:3,date:"2019-05-20",price:70},{id:23394384,photographerId:925,image:"Event_KeyboardCheck.jpg",alt:"Event Keyboard Check",tags:["events"],likes:52,date:"2019-07-18",price:70},{id:87367293,photographerId:925,image:"Event_Emcee.jpg",alt:"Event Emcee",tags:["events"],likes:23,date:"2018-02-22",price:70},{id:593834784,photographerId:925,image:"Animals_Majesty.jpg",alt:"Animals Majesty",tags:["animals"],likes:52,date:"2017-03-13",price:70},{id:83958935,photographerId:925,video:"Animals_Puppiness.mp4",alt:"Animals Puppiness",tags:["animals"],likes:52,date:"2016-06-12",price:70},{id:394583434,photographerId:527,video:"Travel_Rock_Mountains.mp4",alt:"Travel Rock Mountains",tags:["travel"],likes:23,date:"2017-03-18",price:45},{id:343423425,photographerId:527,image:"Travel_Outdoor_Baths.jpg",alt:"Travel Outdoor Baths",tags:["travel"],likes:101,date:"2017-04-03",price:45},{id:73434243,photographerId:527,image:"Travel_Road_into_Hill.jpg",alt:"Travel Road into Hill",tags:["travel"],likes:99,date:"2018-04-30",price:45},{id:23425523,photographerId:527,image:"Travel_Bridge_into_Forest.jpg",alt:"Travel Bridge into Forest",tags:["travel"],likes:34,date:"2016-04-05",price:45},{id:23134513,photographerId:527,image:"Travel_Boat_Wanderer.jpg",alt:"Travel Boat Wanderer",tags:["travel"],likes:23,date:"2017-03-18",price:45},{id:92352352,photographerId:527,image:"Portrait_Sunkissed.jpg",alt:"Portrait Sunkissed",tags:["portrait"],likes:66,date:"2018-05-24",price:45},{id:34513453,photographerId:527,image:"Portrait_Shaw.jpg",alt:"Portrait Shaw",tags:["portait"],likes:52,date:"2017-04-21",price:45},{id:23523533,photographerId:527,image:"Portrait_Alexandra.jpg",alt:"Portrait Alexandra",tags:["portait"],likes:95,date:"2018-11-02",price:45},{id:525834234,photographerId:527,image:"Portrait_AfternoonBreak.jpg",alt:"Portrait Afternoon Break",tags:["portait"],likes:25,date:"2019-01-02",price:45},{id:623534343,photographerId:243,image:"Travel_Lonesome.jpg",alt:"Travel Lonesome",tags:["travel"],likes:88,date:"2019-02-03",price:45},{id:625025343,photographerId:243,image:"Travel_HillsideColor.jpg",alt:"Travel Hill side Color",tags:["travel"],likes:85,date:"2019-04-03",price:45},{id:2525345343,photographerId:243,image:"Portrait_Wednesday.jpg",alt:"Portrait Wednesday",tags:["portait"],likes:34,date:"2019-04-07",price:45},{id:2523434634,photographerId:243,image:"Portrait_Nora.jpg",alt:"Portrait Nora",tags:["portait"],likes:63,date:"2019-04-07",price:45},{id:398847109,photographerId:243,image:"Portrait_Background.jpg",alt:"Portrait Background",tags:["portait"],likes:55,date:"2019-06-20",price:45},{id:2534342,photographerId:243,image:"Event_SeasideWedding.jpg",alt:"Event Seaside Wedding",tags:["events"],likes:25,date:"2019-06-21",price:45},{id:65235234,photographerId:243,image:"Event_PintoWedding.jpg",alt:"Event Pinto Wedding",tags:["events"],likes:52,date:"2019-06-25",price:45},{id:23523434,photographerId:243,image:"Event_BenevidesWedding.jpg",alt:"Event Benevides Wedding",tags:["events"],likes:77,date:"2019-06-28",price:45},{id:5234343,photographerId:243,video:"Animals_Wild_Horses_in_the_mountains.mp4",tags:["animals"],alt:"Animals Wild Horses in the mountains",likes:142,date:"2019-08-23",price:60},{id:95234343,photographerId:243,image:"Animals_Rainbow.jpg",alt:"Animals Rainbow",tags:["animals"],likes:59,date:"2019-07-02",price:60},{id:52343416,photographerId:195,image:"Travel_Tower.jpg",alt:"Travel Tower",tags:["travel"],likes:25,date:"2019-04-03",price:60},{id:2523434,photographerId:195,image:"Travel_SunsetonCanals.jpg",alt:"Travel Sunset on Canals",tags:["travel"],likes:53,date:"2019-05-06",price:60},{id:95293534,photographerId:195,image:"Travel_OpenMountain.jpg",alt:"Travel Open Mountain",tags:["travel"],likes:33,date:"2019-05-12",price:60},{id:356234343,photographerId:195,image:"Travel_Bike_and_Stair.jpg",alt:"Travel Bike and Stair",tags:["travel"],likes:53,date:"2019-06-20",price:60},{id:235234343,photographerId:195,image:"Travel_Adventure_Door.jpg",alt:"Travel Adventure Door",tags:["travel"],likes:63,date:"2019-06-26",price:60},{id:6234234343,photographerId:195,image:"Architecture_Contrast.jpg",alt:"Architecture Contrast",tags:["architecture"],likes:52,date:"2019-06-30",price:60},{id:6525666253,photographerId:195,image:"Architecture_On_a_hill.jpg",alt:"Architecture on a hill",tags:["architecture"],likes:63,date:"2019-07-20",price:60},{id:98252523433,photographerId:195,image:"Architecture_Dome.jpg",alt:"Architecture Dome",tags:["architecture"],likes:88,date:"2020-01-05",price:60},{id:9259398453,photographerId:195,video:"Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4",alt:"Architecture cover circle empty highway in buenos aires",tags:["architecture"],likes:57,date:"2020-01-20",price:65},{id:3523523534,photographerId:195,image:"Architecture_Corner_Room.jpg",alt:"Architecture Corner Room",tags:["architecture"],likes:54,date:"2020-05-05",price:60},{id:952343423,photographerId:930,video:"Sport_Tricks_in_the_air.mp4",alt:"Sport Tricks in the air",tags:["sport"],likes:150,date:"2018-02-30",price:70},{id:235234343,photographerId:930,image:"Sport_Next_Hold.jpg",alt:"Sport Next Hold",tags:["sport"],likes:101,date:"2018-03-05",price:65},{id:235343222,photographerId:930,image:"sport_water_tunnel.jpg",alt:"Sport water tunel",tags:["sport"],likes:103,date:"2018-03-10",price:70},{id:7775342343,photographerId:930,image:"Sport_Sky_Cross.jpg",alt:"Sport sky cross",tags:["sport"],likes:77,date:"2018-04-16",price:50},{id:9253445784,photographerId:930,image:"Sport_Race_End.jpg",alt:"Sport Race End",tags:["sport"],likes:88,date:"2018-04-22",price:65},{id:22299394,photographerId:930,image:"Sport_Jump.jpg",alt:"Sport Jump",tags:["sport"],likes:95,date:"2018-04-27",price:70},{id:3452342633,photographerId:930,image:"Architecture_White_Light.jpg",alt:"Architecture white light",tags:["architecture"],likes:52,date:"2018-05-03",price:75},{id:939234243,photographerId:930,image:"Architecture_Water_on_Modern.jpg",alt:"Architecture water on modern",tags:["architecture"],likes:55,date:"2018-05-10",price:72},{id:222959233,photographerId:930,image:"Architecture_Horseshoe.jpg",alt:"Architecture Horse shoe",tags:["architecture"],likes:85,date:"2018-05-15",price:71},{id:965933434,photographerId:930,image:"Architecture_Cross_Bar.jpg",alt:"Architecture Cross Bar",tags:["architecture"],likes:66,date:"2018-05-20",price:58},{id:777723343,photographerId:930,image:"Architecture_Connected_Curves.jpg",alt:"Architecture Connected Curves",tags:["architecture"],likes:79,date:"2018-05-21",price:80}]};var c=document.getElementById("tags"),s=document.getElementById("photographers"),p=l.photographers,u=function e(t){t.preventDefault();var a=g(t.target);m(a),v();var r=h("tag"),i=k(r);f(i),y(),document.querySelectorAll(".ph-elt-tags").forEach((function(t){return t.addEventListener("click",e)}))},g=function(e){var t="";return"A"===e.tagName&&(t=e.textContent),"LI"===e.tagName&&(t=e.lastChild.textContent),t.toLowerCase()},h=function(e){var t=window.location.href;return new URL(t).searchParams.getAll(e)},m=function(e){if(""!=e){var t="index.html",a=h("tag");a.includes(e)?a=a.filter((function(t){return t!==e})):a.push(e),a.forEach((function(e,a){t+=0===a?"?tag=".concat(e):"&tag=".concat(e)})),window.history.pushState({},"",t)}},v=function(){var e=h("tag");c.childNodes.forEach((function(t){e.includes(t.lastChild.textContent.toLowerCase())?t.classList.add("selected"):t.className=""}))},f=function(e){s.innerHTML="",e.forEach((function(e){return s.appendChild(d(e))}))},y=function(){var e=h("tag");document.querySelectorAll(".ph-elt-tags li").forEach((function(t){e.includes(t.lastChild.textContent.toLowerCase())?t.classList.add("selected"):t.className=""}))},k=function(e){var t=p;return t.filter((function(t){for(var a=0;a<e.length;a++)if(!t.tags.includes(e[a]))return!1;return!0}))},E=document.getElementById("photographers"),_=document.getElementById("tags"),I=document.getElementById("ph-contact"),b=document.getElementById("contact-form"),A=document.getElementById("form-dialog"),C=document.getElementById("cover"),w=document.getElementById("close-btn"),B=document.getElementById("first-name"),j=document.getElementById("last-name"),L=document.getElementById("email"),T=document.getElementById("message"),x=document.getElementById("form-submit-btn");document.location.pathname.includes("photographer-page.html")&&(I.addEventListener("click",(function(){Le(),A.style.display="block",A.setAttribute("aria-hidden","false"),C.style.display="block",C.setAttribute("aria-hidden","false"),S()})),w.addEventListener("click",M),b.addEventListener("submit",(function(e){e.preventDefault(),console.log("Prénom : ".concat(B.value)),console.log("Nom : ".concat(j.value)),console.log("Email : ".concat(L.value)),console.log("Votre message : ".concat(T.value)),M()})));var S=function(){B.focus(),A.addEventListener("keydown",P)};function P(e){9===e.keyCode&&(e.shiftKey?document.activeElement===w&&(e.preventDefault(),x.focus()):document.activeElement===x&&(e.preventDefault(),w.focus())),27===e.keyCode&&M()}function M(){Te(),I.focus(),A.style.display="none",A.setAttribute("aria-hidden","true"),C.style.display="none",C.setAttribute("aria-hidden","true")}var D=document.getElementById("works-elts");document.location.pathname.includes("photographer-page.html")&&D.addEventListener("click",(function(e){"SPAN"===e.target.tagName&&(e.preventDefault(),R(e.target))}));var N=function(e){"Enter"===e.key&&(e.preventDefault(),R(e.target))},R=function(e){var t=we.filter((function(t){return t.id==e.parentElement.id}))[0];t.likes++,e.parentElement.childNodes[0].nodeValue=t.likes,W()},W=function(){var e=document.getElementById("total-likes"),t=0;we.forEach((function(e){return t+=e.likes})),e.childNodes[0].nodeValue="".concat(t," ")};function H(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t,a){return t&&F(e.prototype,t),a&&F(e,a),e}var U,G,O=function(){function e(t){H(this,e),this.src=t.image,this.alt=t.alt,this.id=t.id,this.type="image"}return K(e,[{key:"createElt",value:function(){var e=a("images/".concat(this.src),"".concat(this.alt,", closeup view"));return e.setAttribute("role","button"),e}},{key:"createFullElt",value:function(){var e=a("images/".concat(this.src),this.alt);return e.setAttribute("id","current-media-lightbox"),e}}]),e}(),V=function(){function e(t){H(this,e),this.src=t.video,this.alt=t.alt,this.id=t.id,this.type="video"}return K(e,[{key:"domCreation",value:function(e){var t=r("video",e,"video-elt"),a=document.createElement("source");return a.setAttribute("src","videos/".concat(this.src)),t.appendChild(a),t}},{key:"createElt",value:function(){var e=this.domCreation("".concat(this.alt,", closeup view"));return e.setAttribute("role","button"),e}},{key:"createFullElt",value:function(){var e=this.domCreation(this.alt);return e.setAttribute("controls",!0),e.setAttribute("id","current-media-lightbox"),e}}]),e}(),q=function e(t,a){return H(this,e),"image"===t?new O(a):"video"===t?new V(a):void 0},J=-1,Y=document.activeElement,z=document.getElementById("lightbox-cover"),Q=document.getElementById("lightbox"),X=document.getElementById("lightbox-content"),Z=document.getElementById("lightbox-close"),$=document.getElementsByTagName("body")[0],ee=document.getElementsByTagName("html")[0],te=document.getElementById("lightbox-previous"),ae=document.getElementById("lightbox-next"),re=function(e){return function(){ie(),de(e),Y=document.activeElement;var t=document.getElementById("current-media-lightbox");"image"===e.type&&Z.focus(),"video"===e.type&&t.focus(),Q.addEventListener("keydown",ne)}},ie=function(){Le(),z.style.display="block",z.setAttribute("aria-hidden","false"),Q.style.display="block",Q.setAttribute("aria-hidden","false"),ee.scrollTop=0,$.scrollTop=0,$.style.overflow="hidden"},ne=function(e){var t=document.getElementById("current-media-lightbox");"IMG"===t.tagName?9===e.keyCode&&(e.shiftKey?document.activeElement===Z&&(e.preventDefault(),ae.focus()):document.activeElement===ae&&(e.preventDefault(),Z.focus())):9===e.keyCode&&(e.shiftKey?document.activeElement===t&&(e.preventDefault(),ae.focus()):document.activeElement===ae&&(e.preventDefault(),t.focus())),27===e.keyCode&&oe()},oe=function(){Te(),Y.focus(),z.style.display="none",z.setAttribute("aria-hidden","true"),Q.style.display="none",Q.setAttribute("aria-hidden","true"),$.style.overflow="auto"},de=function(e){X.innerHTML="",X.appendChild(e.createFullElt());var t=r("h3",e.alt,"lightbox-media-title");X.appendChild(t),J=le(e)},le=function(e){for(var t=0;t<we.length;t++)if(we[t].id===e.id)return t;return-1},ce=function(){var e=we[J],t=e.image?"image":"video",a=new q(t,e);de(a)},se=function(){J>0?J--:J=we.length-1,ce()},pe=function(){J<we.length-1?J++:J=0,ce()},ue=function(e){switch(e.key){case"Left":case"ArrowLeft":se();break;case"Right":case"ArrowRight":pe();break;case"Esc":case"Escape":oe();break;default:return}e.preventDefault()},ge=document.getElementById("sort-cover"),he=document.getElementById("sort-btn"),me=document.getElementById("sort-list"),ve=document.getElementById("sort-1"),fe=document.getElementById("sort-2"),ye=document.getElementById("sort-3"),ke=function(){me.style.display="none",ge.style.display="none",he.focus()},Ee=function(e){var t=document.activeElement,a="Escape"===e.key||"Esc"===e.key||"Tab"===e.key||"Shift"===e.key&&"Tab"===e.key;"ArrowDown"!==e.key&&"Down"!==e.key||(e.preventDefault(),t===ve&&fe.focus(),t===fe&&ye.focus(),t===ye&&ve.focus()),"ArrowUp"!==e.key&&"Up"!==e.key||(e.preventDefault(),t===ve&&ye.focus(),t===fe&&ve.focus(),t===ye&&fe.focus()),"Enter"===e.key&&(e.preventDefault(),ke(),he.innerHTML="".concat(t.textContent,'<span class="fas fa-chevron-down sort-arrow"></span>'),Be(t.textContent)),a&&(e.preventDefault(),ke())},_e=function(e){var t=e.target;"LI"==t.tagName&&(Be(t.textContent),he.innerHTML="".concat(t.textContent,'<span class="fas fa-chevron-down sort-arrow"></span>')),"SPAN"==t.tagName&&(Be(t.parentNode.textContent),he.innerHTML="".concat(t.parentNode.textContent,'<span class="fas fa-chevron-down sort-arrow"></span>')),ke()},Ie=document.getElementById("header-banner"),be=document.getElementById("photographer-page"),Ae=(U=document.location.href,"id",new URL(U).searchParams.get("id")),Ce=l.photographers.filter((function(e){return e.id==Ae}))[0],we=l.media.filter((function(e){return e.photographerId==Ae})),Be=function(e){var t,a,r=document.getElementById("works-elts");r.innerHTML="",(t=we,"Popularité"===(a=e)?t.sort((function(e,t){return t.likes-e.likes})):"Date"===a?t.sort((function(e,t){return new Date(t.date)-new Date(e.date)})):"Titre"===a?t.sort((function(e,t){var a=e.alt.toUpperCase(),r=t.alt.toUpperCase();return a<r?-1:a>r?1:0})):void 0).forEach((function(e){return r.appendChild(je(e))}))},je=function(a){var i=e("div","work-elt"),n=t("#","".concat(a.alt,", closeup view")),o=e("div","work-elt-infos"),d=r("h2",a.alt,"work-title"),l=r("span","".concat(a.price," €"),"work-price"),c=r("span",a.likes,"work-like");c.setAttribute("id",a.id);var s=e("span","fas");s.classList.add("fa-heart"),s.setAttribute("aria-label","likes"),s.setAttribute("role","button"),s.setAttribute("tabindex","0"),s.addEventListener("keydown",N);var p=void 0===a.video?"image":"video",u=new q(p,a),g=u.createElt();return n.appendChild(g),g.addEventListener("click",re(u)),c.appendChild(s),o.appendChild(d),o.appendChild(l),o.appendChild(c),i.appendChild(n),i.appendChild(o),n.addEventListener("keydown",function(e){return function(t){"Enter"===t.key&&(t.preventDefault(),re(e)())}}(u)),i},Le=function(){Ie.setAttribute("aria-hidden","true"),be.setAttribute("aria-hidden","true")},Te=function(){Ie.setAttribute("aria-hidden","false"),be.setAttribute("aria-hidden","false")};if(window.location.pathname.includes("photographer-page.html"))(function(){var e=document.getElementById("ph-title");n(e,Ce.name);var t=document.getElementById("ph-city");n(t,"".concat(Ce.city,", ").concat(Ce.country));var a=document.getElementById("ph-tagline");n(a,Ce.tagline);var r=document.getElementById("ph-tags");Ce.tags.forEach((function(e){return i(r,e,"index.html?tag=".concat(e))}));var d=document.getElementById("ph-portrait");o(d,"images/".concat(Ce.portrait),Ce.alt),Z.addEventListener("click",oe),te.addEventListener("click",se),ae.addEventListener("click",pe),window.addEventListener("keydown",ue)})(),Be("Popularité"),function(){var t=document.getElementById("photographer-page"),a=e("aside","ph-data");a.setAttribute("aria-label","photographer likes and price");var r=document.createElement("span");r.textContent="".concat(Ce.price,"€ / jour"),a.appendChild(function(){var t=document.createElement("span");t.setAttribute("id","total-likes");var a=0;we.forEach((function(e){return a+=e.likes}));var r=e("i","fas");return r.classList.add("fa-heart"),r.setAttribute("aria-label","likes"),t.textContent="".concat(a," "),t.appendChild(r),t}()),a.appendChild(r),t.appendChild(a)}(),G=Ce.name,document.getElementById("ph-form-name").textContent=G,he.addEventListener("click",(function(){me.style.display="block",ge.style.display="block",me.addEventListener("keydown",Ee),me.addEventListener("click",_e),ge.addEventListener("click",ke),ve.focus()}));else{var xe=document.getElementById("link-content");_.addEventListener("click",u),k([]).forEach((function(e){return E.appendChild(d(e))})),document.querySelectorAll(".ph-elt-tags").forEach((function(e){return e.addEventListener("click",u)})),function(){v();var e=h("tag"),t=k(e);f(t),y(),document.querySelectorAll(".ph-elt-tags").forEach((function(e){return e.addEventListener("click",u)}))}(),document.addEventListener("scroll",(function(){var e=document.getElementById("link-content"),t=document.getElementById("header-banner");window.scrollY>=t.offsetHeight-20&&(e.style.top="6px"),window.scrollY<t.offsetHeight-20&&(e.style.top="-100px")})),xe.addEventListener("focus",(function(){return xe.style.top="6px"})),xe.addEventListener("blur",(function(){return xe.style.top="-100px"}))}})();