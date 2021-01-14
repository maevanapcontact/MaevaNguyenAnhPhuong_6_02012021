(()=>{"use strict";var e=function(e,t){var a=document.createElement(e);return a.classList.add(t),a},t=function(e,t){var a=document.createElement("img");return n(a,e,t),a},a=function(t,a,r){var n=e(t,r);return i(n,a),n},r=function(t,a){var r=document.createElement("li");r.setAttribute("role","button");var i=document.createElement("span");i.textContent="#";var n=e("span","filter-tag");n.textContent=a,r.appendChild(i),r.appendChild(n),t.appendChild(r)},i=function(e,t){var a=document.createTextNode(t);return e.appendChild(a),e},n=function(e,t,a){return e.setAttribute("src",t),e.setAttribute("alt",a),e},o=function(i){var n,o,d,l=e("article","photographers-elt"),s=(n="photographer-page.html?id=".concat(i.id),o=i.name,(d=document.createElement("a")).setAttribute("href",n),d.setAttribute("title",o),d),p=e("p","infos"),c=e("ul","tags");l.appendChild(s),l.appendChild(p),l.appendChild(c);var g=t("images/".concat(i.portrait),""),h=a("h2",i.name,"photographer-name");s.appendChild(g),s.appendChild(h);var u=a("span","".concat(i.city,", ").concat(i.country),"infos-city"),m=a("span",i.tagline,"infos-tagline"),v=a("span","".concat(i.price,"€/jour"),"infos-price");return p.appendChild(u),p.appendChild(m),p.appendChild(v),i.tags.forEach((function(e){return r(c,e)})),l};const d={photographers:[{name:"Mimi Keel",id:243,city:"London",country:"UK",tags:["portrait","events","travel","animals"],tagline:"Voir le beau dans le quotidien",price:400,portrait:"MimiKeel.jpg",alt:"Mimi Keel portrait"},{name:"Ellie-Rose Wilkens",id:930,city:"Paris",country:"France",tags:["sports","architecture"],tagline:"Capturer des compositions complexes",price:250,portrait:"EllieRoseWilkens.jpg",alt:"Ellie-Rose Wilkens portrait"},{name:"Tracy Galindo",id:82,city:"Montreal",country:"Canada",tags:["art","fashion","events"],tagline:"Photographe freelance",price:500,portrait:"TracyGalindo.jpg",alt:"Tracy Galindo portrait"},{name:"Nabeel Bradford",id:527,city:"Mexico City",country:"Mexico",tags:["travel","portrait"],tagline:"Toujours aller de l'avant",price:350,portrait:"NabeelBrandford.jpg",alt:"Nabeel Bradford portrait"},{name:"Rhode Dubois",id:925,city:"Barcelona",country:"Spain",tags:["sport","fashion","events","animals"],tagline:"Je crée des souvenirs",price:275,portrait:"RhodeDubois.jpg",alt:"Rhode Dubois portrait"},{name:"Marcel Nikolic",id:195,city:"Berlin",country:"Germany",tags:["travel","architecture"],tagline:"Toujours à la recherche de LA photo",price:300,portrait:"MarcelNikolic.jpg",alt:"Marcel Nikolic portrait"}],media:[{id:342550,photographerId:82,image:"Fashion_Yellow_Beach.jpg",alt:"Fashion Yellow Beach",tags:["fashion"],likes:62,date:"2011-12-08",price:55},{id:8520927,photographerId:82,image:"Fashion_Urban_Jungle.jpg",alt:"Fashion Urban Jungle",tags:["fashion"],likes:11,date:"2011-11-06",price:55},{id:9025895,photographerId:82,image:"Fashion_Pattern_on_Pattern.jpg",alt:"Fashion Pattern on Pattern",tags:["fashion"],likes:72,date:"2013-08-12",price:55},{id:9275938,photographerId:82,image:"Event_WeddingGazebo.jpg",alt:"Event Edding Gazebo",tags:["events"],likes:69,date:"2018-02-22",price:55},{id:2053494,photographerId:82,image:"Event_Sparklers.jpg",alt:"Event Sparklers",tags:["events"],likes:2,date:"2020-05-25",price:55},{id:7324238,photographerId:82,image:"Event_18thAnniversary.jpg",alt:"Event 18th Anniversary",tags:["events"],likes:33,date:"2019-06-12",price:55},{id:8328953,photographerId:82,video:"Art_Wooden_Horse_Sculpture.mp4",alt:"Art Wooden Horse Sculpture",tags:["art"],likes:24,date:"2011-12-08",price:100},{id:7502053,photographerId:82,image:"Art_Triangle_Man.jpg",alt:"Art Triangle Man",tags:["art"],likes:88,date:"2007-05-07",price:55},{id:8523492,photographerId:82,image:"Art_Purple_light.jpg",alt:"Art Purple Light",tags:["art"],likes:24,date:"2018-05-05",price:55},{id:75902334,photographerId:82,image:"Art_Mine.jpg",alt:"Art Mine",tags:["art"],likes:75,date:"2019-11-25",price:55},{id:73852953,photographerId:925,image:"Sport_2000_with_8.jpg",alt:"Sport 2000 with 8",tags:["sport"],likes:52,date:"2013-02-30",price:70},{id:92758372,photographerId:925,image:"Fashion_Wings.jpg",alt:"Fashion Wings",tags:["fashion"],likes:58,date:"2018-07-17",price:70},{id:32958383,photographerId:925,image:"Fashion_Melody_Red_on_Stripes.jpg",alt:"Fashion Melody Red on Stripes",tags:["fashion"],likes:11,date:"2019-08-12",price:70},{id:928587383,photographerId:925,image:"Event_VentureConference.jpg",alt:"Event Venture Conference",tags:["events"],likes:2,date:"2019-01-02",price:70},{id:725639493,photographerId:925,image:"Event_ProductPitch.jpg",alt:"Event Product Pitch",tags:["events"],likes:3,date:"2019-05-20",price:70},{id:23394384,photographerId:925,image:"Event_KeyboardCheck.jpg",alt:"Event Keyboard Check",tags:["events"],likes:52,date:"2019-07-18",price:70},{id:87367293,photographerId:925,image:"Event_Emcee.jpg",alt:"Event Emcee",tags:["events"],likes:23,date:"2018-02-22",price:70},{id:593834784,photographerId:925,image:"Animals_Majesty.jpg",alt:"Animals Majesty",tags:["animals"],likes:52,date:"2017-03-13",price:70},{id:83958935,photographerId:925,video:"Animals_Puppiness.mp4",alt:"Animals Puppiness",tags:["animals"],likes:52,date:"2016-06-12",price:70},{id:394583434,photographerId:527,video:"Travel_Rock_Mountains.mp4",alt:"Travel Rock Mountains",tags:["travel"],likes:23,date:"2017-03-18",price:45},{id:343423425,photographerId:527,image:"Travel_Outdoor_Baths.jpg",alt:"Travel Outdoor Baths",tags:["travel"],likes:101,date:"2017-04-03",price:45},{id:73434243,photographerId:527,image:"Travel_Road_into_Hill.jpg",alt:"Travel Road into Hill",tags:["travel"],likes:99,date:"2018-04-30",price:45},{id:23425523,photographerId:527,image:"Travel_Bridge_into_Forest.jpg",alt:"Travel Bridge into Forest",tags:["travel"],likes:34,date:"2016-04-05",price:45},{id:23134513,photographerId:527,image:"Travel_Boat_Wanderer.jpg",alt:"Travel Boat Wanderer",tags:["travel"],likes:23,date:"2017-03-18",price:45},{id:92352352,photographerId:527,image:"Portrait_Sunkissed.jpg",alt:"Portrait Sunkissed",tags:["portrait"],likes:66,date:"2018-05-24",price:45},{id:34513453,photographerId:527,image:"Portrait_Shaw.jpg",alt:"Portrait Shaw",tags:["portait"],likes:52,date:"2017-04-21",price:45},{id:23523533,photographerId:527,image:"Portrait_Alexandra.jpg",alt:"Portrait Alexandra",tags:["portait"],likes:95,date:"2018-11-02",price:45},{id:525834234,photographerId:527,image:"Portrait_AfternoonBreak.jpg",alt:"Portrait Afternoon Break",tags:["portait"],likes:25,date:"2019-01-02",price:45},{id:623534343,photographerId:243,image:"Travel_Lonesome.jpg",alt:"Travel Lonesome",tags:["travel"],likes:88,date:"2019-02-03",price:45},{id:625025343,photographerId:243,image:"Travel_HillsideColor.jpg",alt:"Travel Hill side Color",tags:["travel"],likes:85,date:"2019-04-03",price:45},{id:2525345343,photographerId:243,image:"Portrait_Wednesday.jpg",alt:"Portrait Wednesday",tags:["portait"],likes:34,date:"2019-04-07",price:45},{id:2523434634,photographerId:243,image:"Portrait_Nora.jpg",alt:"Portrait Nora",tags:["portait"],likes:63,date:"2019-04-07",price:45},{id:398847109,photographerId:243,image:"Portrait_Background.jpg",alt:"Portrait Background",tags:["portait"],likes:55,date:"2019-06-20",price:45},{id:2534342,photographerId:243,image:"Event_SeasideWedding.jpg",alt:"Event Seaside Wedding",tags:["events"],likes:25,date:"2019-06-21",price:45},{id:65235234,photographerId:243,image:"Event_PintoWedding.jpg",alt:"Event Pinto Wedding",tags:["events"],likes:52,date:"2019-06-25",price:45},{id:23523434,photographerId:243,image:"Event_BenevidesWedding.jpg",alt:"Event Benevides Wedding",tags:["events"],likes:77,date:"2019-06-28",price:45},{id:5234343,photographerId:243,video:"Animals_Wild_Horses_in_the_mountains.mp4",tags:["animals"],alt:"Animals Wild Horses in the mountains",likes:142,date:"2019-08-23",price:60},{id:95234343,photographerId:243,image:"Animals_Rainbow.jpg",alt:"Animals Rainbow",tags:["animals"],likes:59,date:"2019-07-02",price:60},{id:52343416,photographerId:195,image:"Travel_Tower.jpg",alt:"Travel Tower",tags:["travel"],likes:25,date:"2019-04-03",price:60},{id:2523434,photographerId:195,image:"Travel_SunsetonCanals.jpg",alt:"Travel Sunset on Canals",tags:["travel"],likes:53,date:"2019-05-06",price:60},{id:95293534,photographerId:195,image:"Travel_OpenMountain.jpg",alt:"Travel Open Mountain",tags:["travel"],likes:33,date:"2019-05-12",price:60},{id:356234343,photographerId:195,image:"Travel_Bike_and_Stair.jpg",alt:"Travel Bike and Stair",tags:["travel"],likes:53,date:"2019-06-20",price:60},{id:235234343,photographerId:195,image:"Travel_Adventure_Door.jpg",alt:"Travel Adventure Door",tags:["travel"],likes:63,date:"2019-06-26",price:60},{id:6234234343,photographerId:195,image:"Architecture_Contrast.jpg",alt:"Architecture Contrast",tags:["architecture"],likes:52,date:"2019-06-30",price:60},{id:6525666253,photographerId:195,image:"Architecture_On_a_hill.jpg",alt:"Architecture on a hill",tags:["architecture"],likes:63,date:"2019-07-20",price:60},{id:98252523433,photographerId:195,image:"Architecture_Dome.jpg",alt:"Architecture Dome",tags:["architecture"],likes:88,date:"2020-01-05",price:60},{id:9259398453,photographerId:195,video:"Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4",alt:"Architecture cover circle empty highway in buenos aires",tags:["architecture"],likes:57,date:"2020-01-20",price:65},{id:3523523534,photographerId:195,image:"Architecture_Corner_Room.jpg",alt:"Architecture Corner Room",tags:["architecture"],likes:54,date:"2020-05-05",price:60},{id:952343423,photographerId:930,video:"Sport_Tricks_in_the_air.mp4",alt:"Sport Tricks in the air",tags:["sport"],likes:150,date:"2018-02-30",price:70},{id:235234343,photographerId:930,image:"Sport_Next_Hold.jpg",alt:"Sport Next Hold",tags:["sport"],likes:101,date:"2018-03-05",price:65},{id:235343222,photographerId:930,image:"sport_water_tunnel.jpg",alt:"Sport water tunel",tags:["sport"],likes:103,date:"2018-03-10",price:70},{id:7775342343,photographerId:930,image:"Sport_Sky_Cross.jpg",alt:"Sport sky cross",tags:["sport"],likes:77,date:"2018-04-16",price:50},{id:9253445784,photographerId:930,image:"Sport_Race_End.jpg",alt:"Sport Race End",tags:["sport"],likes:88,date:"2018-04-22",price:65},{id:22299394,photographerId:930,image:"Sport_Jump.jpg",alt:"Sport Jump",tags:["sport"],likes:95,date:"2018-04-27",price:70},{id:3452342633,photographerId:930,image:"Architecture_White_Light.jpg",alt:"Architecture white light",tags:["architecture"],likes:52,date:"2018-05-03",price:75},{id:939234243,photographerId:930,image:"Architecture_Water_on_Modern.jpg",alt:"Architecture water on modern",tags:["architecture"],likes:55,date:"2018-05-10",price:72},{id:222959233,photographerId:930,image:"Architecture_Horseshoe.jpg",alt:"Architecture Horse shoe",tags:["architecture"],likes:85,date:"2018-05-15",price:71},{id:965933434,photographerId:930,image:"Architecture_Cross_Bar.jpg",alt:"Architecture Cross Bar",tags:["architecture"],likes:66,date:"2018-05-20",price:58},{id:777723343,photographerId:930,image:"Architecture_Connected_Curves.jpg",alt:"Architecture Connected Curves",tags:["architecture"],likes:79,date:"2018-05-21",price:80}]};var l=document.getElementById("tags"),s=document.getElementById("photographers"),p=d.photographers,c=function(){var e=l.childNodes,t=[];return e.forEach((function(e){"selected"==e.className&&p.forEach((function(a){a.tags.includes(e.lastChild.textContent.toLowerCase())&&!t.includes(a)&&t.push(a)}))})),0===t.length?p:t},g=document.getElementById("photographers"),h=document.getElementById("tags"),u=document.getElementById("ph-contact"),m=document.getElementById("contact-form"),v=document.getElementById("form-dialog"),k=document.getElementById("cover"),f=document.getElementById("close-btn");function _(){te(),v.style.display="none",v.setAttribute("aria-hidden","true"),k.style.display="none",k.setAttribute("aria-hidden","true")}document.location.pathname.includes("photographer-page.html")&&(u.addEventListener("click",(function(){ee(),v.style.display="block",v.setAttribute("aria-hidden","false"),k.style.display="block",k.setAttribute("aria-hidden","false")})),f.addEventListener("click",_),m.addEventListener("submit",(function(e){e.preventDefault();var t=document.getElementById("first-name"),a=document.getElementById("last-name"),r=document.getElementById("email"),i=document.getElementById("message");console.log("Prénom : ".concat(t.value)),console.log("Nom : ".concat(a.value)),console.log("Email : ".concat(r.value)),console.log("Votre message : ".concat(i.value)),_()})));var y=document.getElementById("works-elts");document.location.pathname.includes("photographer-page.html")&&y.addEventListener("click",(function(e){var t=e.target;if("I"===t.tagName){var a=X.filter((function(e){return e.id==t.parentElement.id}))[0];a.likes++,t.parentElement.childNodes[0].nodeValue=a.likes,E()}}));var E=function(){var e=document.getElementById("total-likes"),t=0;X.forEach((function(e){return t+=e.likes})),e.childNodes[0].nodeValue="".concat(t," ")};function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t,a){return t&&b(e.prototype,t),a&&b(e,a),e}var j,C,B,w=function(){function e(t){I(this,e),this.src=t.image,this.alt=t.alt,this.id=t.id}return A(e,[{key:"createElt",value:function(){var e=t("images/".concat(this.src),"".concat(this.alt,", closeup view"));return e.setAttribute("role","button"),e}},{key:"createFullElt",value:function(){var e=t("images/".concat(this.src),this.alt);return e.setAttribute("id","current-media-lightbox"),e}}]),e}(),T=function(){function e(t){I(this,e),this.src=t.video,this.alt=t.alt,this.id=t.id}return A(e,[{key:"domCreation",value:function(e){var t=a("video",e,"video-elt"),r=document.createElement("source");return r.setAttribute("src","videos/".concat(this.src)),t.appendChild(r),t}},{key:"createElt",value:function(){var e=this.domCreation("".concat(this.alt,", closeup view"));return e.setAttribute("role","button"),e}},{key:"createFullElt",value:function(){var e=this.domCreation(this.alt);return e.setAttribute("controls",!0),e.setAttribute("id","current-media-lightbox"),e}}]),e}(),P=function e(t,a){return I(this,e),"image"===t?new w(a):"video"===t?new T(a):void 0},S=-1,L=document.getElementById("lightbox-cover"),x=document.getElementById("lightbox"),M=document.getElementById("lightbox-content"),N=document.getElementById("lightbox-close"),W=document.getElementsByTagName("body")[0],R=document.getElementsByTagName("html")[0],F=document.getElementById("lightbox-previous"),H=document.getElementById("lightbox-next"),D=function(){te(),L.style.display="none",L.setAttribute("aria-hidden","true"),x.style.display="none",x.setAttribute("aria-hidden","true"),W.style.overflow="auto"},G=function(e){M.innerHTML="",M.appendChild(e.createFullElt());var t=a("h3",e.alt,"lightbox-media-title");M.appendChild(t),S=K(e)},K=function(e){for(var t=0;t<X.length;t++)if(X[t].id===e.id)return t;return-1},O=function(){var e=X[S],t=e.image?"image":"video",a=new P(t,e);G(a)},U=function(){S>0?S--:S=X.length-1,O()},V=function(){S<X.length-1?S++:S=0,O()},J=function(e){switch(e.key){case"Left":case"ArrowLeft":U();break;case"Right":case"ArrowRight":V();break;case"Esc":case"Escape":D();break;default:return}e.preventDefault()},z=document.getElementById("header-banner"),Y=document.getElementById("photographer-page"),q=(j=document.location.href,"id",new URL(j).searchParams.get("id")),Q=d.photographers.filter((function(e){return e.id==q}))[0],X=d.media.filter((function(e){return e.photographerId==q})),Z=function(e){return"popularite"===e?X.sort((function(e,t){return t.likes-e.likes})):"date"===e?X.sort((function(e,t){return new Date(t.date)-new Date(e.date)})):"titre"===e?X.sort((function(e,t){var a=e.alt.toUpperCase(),r=t.alt.toUpperCase();return a<r?-1:a>r?1:0})):void 0},$=function(t){var r=e("div","work-elt"),i=e("div","work-elt-infos"),n=a("h2",t.alt,"work-title"),o=a("span","".concat(t.price," €"),"work-price"),d=a("span",t.likes,"work-like");d.setAttribute("id",t.id);var l=e("i","fas");l.classList.add("fa-heart"),l.setAttribute("aria-label","likes"),l.setAttribute("role","button");var s=void 0===t.video?"image":"video",p=new P(s,t),c=p.createElt();return r.appendChild(c),c.addEventListener("click",function(e){return function(){ee(),L.style.display="block",L.setAttribute("aria-hidden","false"),x.style.display="block",x.setAttribute("aria-hidden","false"),R.scrollTop=0,W.scrollTop=0,W.style.overflow="hidden",G(e)}}(p)),d.appendChild(l),i.appendChild(n),i.appendChild(o),i.appendChild(d),r.appendChild(i),r},ee=function(){z.setAttribute("aria-hidden","true"),Y.setAttribute("aria-hidden","true")},te=function(){z.setAttribute("aria-hidden","false"),Y.setAttribute("aria-hidden","false")};window.location.pathname.includes("photographer-page.html")?(function(){var e=document.getElementById("ph-title");i(e,Q.name);var t=document.getElementById("ph-city");i(t,"".concat(Q.city,", ").concat(Q.country));var a=document.getElementById("ph-tagline");i(a,Q.tagline);var o=document.getElementById("ph-tags");Q.tags.forEach((function(e){return r(o,e)}));var d=document.getElementById("ph-portrait");n(d,"images/".concat(Q.portrait),Q.alt),N.addEventListener("click",D),F.addEventListener("click",U),H.addEventListener("click",V),window.addEventListener("keydown",J)}(),B=document.getElementById("works-elts"),Z("popularite").forEach((function(e){return B.appendChild($(e))})),function(){var t=document.getElementById("photographer-page"),a=e("aside","ph-data");a.setAttribute("aria-label","photographer likes and price");var r=document.createElement("span");r.textContent="".concat(Q.price,"€ / jour"),a.appendChild(function(){var t=document.createElement("span");t.setAttribute("id","total-likes");var a=0;X.forEach((function(e){return a+=e.likes}));var r=e("i","fas");return r.classList.add("fa-heart"),r.setAttribute("aria-label","likes"),t.textContent="".concat(a," "),t.appendChild(r),t}()),a.appendChild(r),t.appendChild(a)}(),C=Q.name,document.getElementById("ph-form-name").textContent=C):(h.addEventListener("click",(function(e){var t=e.target;"SPAN"===t.tagName&&t.parentNode.classList.toggle("selected"),"LI"===t.tagName&&t.classList.toggle("selected");var a=c();s.innerHTML="",a.forEach((function(e){return s.appendChild(o(e))}))})),c().forEach((function(e){return g.appendChild(o(e))})))})();