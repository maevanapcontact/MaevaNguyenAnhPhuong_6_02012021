(()=>{"use strict";var e=function(e,t){var a=document.createElement(e);return a.classList.add(t),a},t=function(e,t){var a=document.createElement("img");return o(a,e,t),a},a=function(t,a,r){var o=e(t,r);return i(o,a),o},r=function(t,a){var r=document.createElement("li"),i=document.createElement("span");i.textContent="#";var o=e("span","filter-tag");o.textContent=a,r.appendChild(i),r.appendChild(o),t.appendChild(r)},i=function(e,t){var a=document.createTextNode(t);return e.appendChild(a),e},o=function(e,t,a){return e.setAttribute("src",t),e.setAttribute("alt",a),e},n=function(i){var o,n,l,d=e("article","photographers-elt"),p=(o="photographer-page.html?id=".concat(i.id),n=i.name,(l=document.createElement("a")).setAttribute("href",o),l.setAttribute("title",n),l),s=e("p","infos"),c=e("ul","tags");d.appendChild(p),d.appendChild(s),d.appendChild(c);var g=t("images/".concat(i.portrait),""),h=a("h2",i.name,"photographer-name");p.appendChild(g),p.appendChild(h);var u=a("span","".concat(i.city,", ").concat(i.country),"infos-city"),m=a("span",i.tagline,"infos-tagline"),v=a("span","".concat(i.price,"€/jour"),"infos-price");return s.appendChild(u),s.appendChild(m),s.appendChild(v),i.tags.forEach((function(e){return r(c,e)})),d};const l={photographers:[{name:"Mimi Keel",id:243,city:"London",country:"UK",tags:["portrait","events","travel","animals"],tagline:"Voir le beau dans le quotidien",price:400,portrait:"MimiKeel.jpg",alt:"Mimi Keel portrait"},{name:"Ellie-Rose Wilkens",id:930,city:"Paris",country:"France",tags:["sports","architecture"],tagline:"Capturer des compositions complexes",price:250,portrait:"EllieRoseWilkens.jpg",alt:"Ellie-Rose Wilkens portrait"},{name:"Tracy Galindo",id:82,city:"Montreal",country:"Canada",tags:["art","fashion","events"],tagline:"Photographe freelance",price:500,portrait:"TracyGalindo.jpg",alt:"Tracy Galindo portrait"},{name:"Nabeel Bradford",id:527,city:"Mexico City",country:"Mexico",tags:["travel","portrait"],tagline:"Toujours aller de l'avant",price:350,portrait:"NabeelBrandford.jpg",alt:"Nabeel Bradford portrait"},{name:"Rhode Dubois",id:925,city:"Barcelona",country:"Spain",tags:["sport","fashion","events","animals"],tagline:"Je crée des souvenirs",price:275,portrait:"RhodeDubois.jpg",alt:"Rhode Dubois portrait"},{name:"Marcel Nikolic",id:195,city:"Berlin",country:"Germany",tags:["travel","architecture"],tagline:"Toujours à la recherche de LA photo",price:300,portrait:"MarcelNikolic.jpg",alt:"Marcel Nikolic portrait"}],media:[{id:342550,photographerId:82,image:"Fashion_Yellow_Beach.jpg",alt:"Fashion Yellow Beach",tags:["fashion"],likes:62,date:"2011-12-08",price:55},{id:8520927,photographerId:82,image:"Fashion_Urban_Jungle.jpg",alt:"Fashion Urban Jungle",tags:["fashion"],likes:11,date:"2011-11-06",price:55},{id:9025895,photographerId:82,image:"Fashion_Pattern_on_Pattern.jpg",alt:"Fashion Pattern on Pattern",tags:["fashion"],likes:72,date:"2013-08-12",price:55},{id:9275938,photographerId:82,image:"Event_WeddingGazebo.jpg",alt:"Event Edding Gazebo",tags:["events"],likes:69,date:"2018-02-22",price:55},{id:2053494,photographerId:82,image:"Event_Sparklers.jpg",alt:"Event Sparklers",tags:["events"],likes:2,date:"2020-05-25",price:55},{id:7324238,photographerId:82,image:"Event_18thAnniversary.jpg",alt:"Event 18th Anniversary",tags:["events"],likes:33,date:"2019-06-12",price:55},{id:8328953,photographerId:82,video:"Art_Wooden_Horse_Sculpture.mp4",alt:"Art Wooden Horse Sculpture",tags:["art"],likes:24,date:"2011-12-08",price:100},{id:7502053,photographerId:82,image:"Art_Triangle_Man.jpg",alt:"Art Triangle Man",tags:["art"],likes:88,date:"2007-05-07",price:55},{id:8523492,photographerId:82,image:"Art_Purple_light.jpg",alt:"Art Purple Light",tags:["art"],likes:24,date:"2018-05-05",price:55},{id:75902334,photographerId:82,image:"Art_Mine.jpg",alt:"Art Mine",tags:["art"],likes:75,date:"2019-11-25",price:55},{id:73852953,photographerId:925,image:"Sport_2000_with_8.jpg",alt:"Sport 2000 with 8",tags:["sport"],likes:52,date:"2013-02-30",price:70},{id:92758372,photographerId:925,image:"Fashion_Wings.jpg",alt:"Fashion Wings",tags:["fashion"],likes:58,date:"2018-07-17",price:70},{id:32958383,photographerId:925,image:"Fashion_Melody_Red_on_Stripes.jpg",alt:"Fashion Melody Red on Stripes",tags:["fashion"],likes:11,date:"2019-08-12",price:70},{id:928587383,photographerId:925,image:"Event_VentureConference.jpg",alt:"Event Venture Conference",tags:["events"],likes:2,date:"2019-01-02",price:70},{id:725639493,photographerId:925,image:"Event_ProductPitch.jpg",alt:"Event Product Pitch",tags:["events"],likes:3,date:"2019-05-20",price:70},{id:23394384,photographerId:925,image:"Event_KeyboardCheck.jpg",alt:"Event Keyboard Check",tags:["events"],likes:52,date:"2019-07-18",price:70},{id:87367293,photographerId:925,image:"Event_Emcee.jpg",alt:"Event Emcee",tags:["events"],likes:23,date:"2018-02-22",price:70},{id:593834784,photographerId:925,image:"Animals_Majesty.jpg",alt:"Animals Majesty",tags:["animals"],likes:52,date:"2017-03-13",price:70},{id:83958935,photographerId:925,video:"Animals_Puppiness.mp4",alt:"Animals Puppiness",tags:["animals"],likes:52,date:"2016-06-12",price:70},{id:394583434,photographerId:527,video:"Travel_Rock_Mountains.mp4",alt:"Travel Rock Mountains",tags:["travel"],likes:23,date:"2017-03-18",price:45},{id:343423425,photographerId:527,image:"Travel_Outdoor_Baths.jpg",alt:"Travel Outdoor Baths",tags:["travel"],likes:101,date:"2017-04-03",price:45},{id:73434243,photographerId:527,image:"Travel_Road_into_Hill.jpg",alt:"Travel Road into Hill",tags:["travel"],likes:99,date:"2018-04-30",price:45},{id:23425523,photographerId:527,image:"Travel_Bridge_into_Forest.jpg",alt:"Travel Bridge into Forest",tags:["travel"],likes:34,date:"2016-04-05",price:45},{id:23134513,photographerId:527,image:"Travel_Boat_Wanderer.jpg",alt:"Travel Boat Wanderer",tags:["travel"],likes:23,date:"2017-03-18",price:45},{id:92352352,photographerId:527,image:"Portrait_Sunkissed.jpg",alt:"Portrait Sunkissed",tags:["portrait"],likes:66,date:"2018-05-24",price:45},{id:34513453,photographerId:527,image:"Portrait_Shaw.jpg",alt:"Portrait Shaw",tags:["portait"],likes:52,date:"2017-04-21",price:45},{id:23523533,photographerId:527,image:"Portrait_Alexandra.jpg",alt:"Portrait Alexandra",tags:["portait"],likes:95,date:"2018-11-02",price:45},{id:525834234,photographerId:527,image:"Portrait_AfternoonBreak.jpg",alt:"Portrait Afternoon Break",tags:["portait"],likes:25,date:"2019-01-02",price:45},{id:623534343,photographerId:243,image:"Travel_Lonesome.jpg",alt:"Travel Lonesome",tags:["travel"],likes:88,date:"2019-02-03",price:45},{id:625025343,photographerId:243,image:"Travel_HillsideColor.jpg",alt:"Travel Hill side Color",tags:["travel"],likes:85,date:"2019-04-03",price:45},{id:2525345343,photographerId:243,image:"Portrait_Wednesday.jpg",alt:"Portrait Wednesday",tags:["portait"],likes:34,date:"2019-04-07",price:45},{id:2523434634,photographerId:243,image:"Portrait_Nora.jpg",alt:"Portrait Nora",tags:["portait"],likes:63,date:"2019-04-07",price:45},{id:398847109,photographerId:243,image:"Portrait_Background.jpg",alt:"Portrait Background",tags:["portait"],likes:55,date:"2019-06-20",price:45},{id:2534342,photographerId:243,image:"Event_SeasideWedding.jpg",alt:"Event Seaside Wedding",tags:["events"],likes:25,date:"2019-06-21",price:45},{id:65235234,photographerId:243,image:"Event_PintoWedding.jpg",alt:"Event Pinto Wedding",tags:["events"],likes:52,date:"2019-06-25",price:45},{id:23523434,photographerId:243,image:"Event_BenevidesWedding.jpg",alt:"Event Benevides Wedding",tags:["events"],likes:77,date:"2019-06-28",price:45},{id:5234343,photographerId:243,video:"Animals_Wild_Horses_in_the_mountains.mp4",tags:["animals"],alt:"Animals Wild Horses in the mountains",likes:142,date:"2019-08-23",price:60},{id:95234343,photographerId:243,image:"Animals_Rainbow.jpg",alt:"Animals Rainbow",tags:["animals"],likes:59,date:"2019-07-02",price:60},{id:52343416,photographerId:195,image:"Travel_Tower.jpg",alt:"Travel Tower",tags:["travel"],likes:25,date:"2019-04-03",price:60},{id:2523434,photographerId:195,image:"Travel_SunsetonCanals.jpg",alt:"Travel Sunset on Canals",tags:["travel"],likes:53,date:"2019-05-06",price:60},{id:95293534,photographerId:195,image:"Travel_OpenMountain.jpg",alt:"Travel Open Mountain",tags:["travel"],likes:33,date:"2019-05-12",price:60},{id:356234343,photographerId:195,image:"Travel_Bike_and_Stair.jpg",alt:"Travel Bike and Stair",tags:["travel"],likes:53,date:"2019-06-20",price:60},{id:235234343,photographerId:195,image:"Travel_Adventure_Door.jpg",alt:"Travel Adventure Door",tags:["travel"],likes:63,date:"2019-06-26",price:60},{id:6234234343,photographerId:195,image:"Architecture_Contrast.jpg",alt:"Architecture Contrast",tags:["architecture"],likes:52,date:"2019-06-30",price:60},{id:6525666253,photographerId:195,image:"Architecture_On_a_hill.jpg",alt:"Architecture on a hill",tags:["architecture"],likes:63,date:"2019-07-20",price:60},{id:98252523433,photographerId:195,image:"Architecture_Dome.jpg",alt:"Architecture Dome",tags:["architecture"],likes:88,date:"2020-01-05",price:60},{id:9259398453,photographerId:195,video:"Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4",alt:"Architecture cover circle empty highway in buenos aires",tags:["architecture"],likes:57,date:"2020-01-20",price:65},{id:3523523534,photographerId:195,image:"Architecture_Corner_Room.jpg",alt:"Architecture Corner Room",tags:["architecture"],likes:54,date:"2020-05-05",price:60},{id:952343423,photographerId:930,video:"Sport_Tricks_in_the_air.mp4",alt:"Sport Tricks in the air",tags:["sport"],likes:150,date:"2018-02-30",price:70},{id:235234343,photographerId:930,image:"Sport_Next_Hold.jpg",alt:"Sport Next Hold",tags:["sport"],likes:101,date:"2018-03-05",price:65},{id:235343222,photographerId:930,image:"sport_water_tunnel.jpg",alt:"Sport water tunel",tags:["sport"],likes:103,date:"2018-03-10",price:70},{id:7775342343,photographerId:930,image:"Sport_Sky_Cross.jpg",alt:"Sport sky cross",tags:["sport"],likes:77,date:"2018-04-16",price:50},{id:9253445784,photographerId:930,image:"Sport_Race_End.jpg",alt:"Sport Race End",tags:["sport"],likes:88,date:"2018-04-22",price:65},{id:22299394,photographerId:930,image:"Sport_Jump.jpg",alt:"Sport Jump",tags:["sport"],likes:95,date:"2018-04-27",price:70},{id:3452342633,photographerId:930,image:"Architecture_White_Light.jpg",alt:"Architecture white light",tags:["architecture"],likes:52,date:"2018-05-03",price:75},{id:939234243,photographerId:930,image:"Architecture_Water_on_Modern.jpg",alt:"Architecture water on modern",tags:["architecture"],likes:55,date:"2018-05-10",price:72},{id:222959233,photographerId:930,image:"Architecture_Horseshoe.jpg",alt:"Architecture Horse shoe",tags:["architecture"],likes:85,date:"2018-05-15",price:71},{id:965933434,photographerId:930,image:"Architecture_Cross_Bar.jpg",alt:"Architecture Cross Bar",tags:["architecture"],likes:66,date:"2018-05-20",price:58},{id:777723343,photographerId:930,image:"Architecture_Connected_Curves.jpg",alt:"Architecture Connected Curves",tags:["architecture"],likes:79,date:"2018-05-21",price:80}]};var d=document.getElementById("tags"),p=document.getElementById("photographers"),s=l.photographers,c=function(){var e=d.childNodes,t=[];return e.forEach((function(e){"selected"==e.className&&s.forEach((function(a){a.tags.includes(e.lastChild.textContent.toLowerCase())&&!t.includes(a)&&t.push(a)}))})),0===t.length?s:t},g=document.getElementById("photographers"),h=document.getElementById("tags"),u=document.getElementById("ph-contact"),m=document.getElementById("contact-form"),v=document.getElementById("cover"),k=document.getElementById("close-btn");function _(){m.style.display="none",v.style.display="none"}document.location.pathname.includes("photographer-page.html")&&(u.addEventListener("click",(function(){m.style.display="flex",v.style.display="block"})),k.addEventListener("click",_),m.addEventListener("submit",(function(e){e.preventDefault();var t=document.getElementById("first-name"),a=document.getElementById("last-name"),r=document.getElementById("email"),i=document.getElementById("message");console.log("Prénom : ".concat(t.value)),console.log("Nom : ".concat(a.value)),console.log("Email : ".concat(r.value)),console.log("Votre message : ".concat(i.value)),_()})));var f=document.getElementById("works-elts");document.location.pathname.includes("photographer-page.html")&&f.addEventListener("click",(function(e){var t=e.target;if("I"===t.tagName){var a=K.filter((function(e){return e.id==t.parentElement.id}))[0];a.likes++,t.parentElement.childNodes[0].nodeValue=a.likes,y()}}));var y=function(){var e=document.getElementById("total-likes"),t=0;K.forEach((function(e){return t+=e.likes})),e.childNodes[0].nodeValue="".concat(t," ")},E=document.getElementById("lightbox-cover"),I=document.getElementById("lightbox"),j=document.getElementById("lightbox-content"),C=document.getElementById("lightbox-close"),A=document.getElementsByTagName("body")[0],B=document.getElementsByTagName("html")[0],T=function(){E.style.display="none",I.style.display="none",A.style.overflow="auto"};function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t,a){return t&&w(e.prototype,t),a&&w(e,a),e}var S,M,L,N,W,x,R=function(){function e(t){b(this,e),this.src=t.image,this.alt=t.alt}return P(e,[{key:"createElt",value:function(){return t("images/".concat(this.src),"".concat(this.alt,", closeup view"))}},{key:"createFullElt",value:function(){return t("images/".concat(this.src),this.alt)}}]),e}(),F=function(){function e(t){b(this,e),this.src=t.video,this.alt=t.alt}return P(e,[{key:"domCreation",value:function(e){var t=a("video",e,"video-elt"),r=document.createElement("source");return r.setAttribute("src","videos/".concat(this.src)),t.appendChild(r),t}},{key:"createElt",value:function(){return this.domCreation("".concat(this.alt,", closeup view"))}},{key:"createFullElt",value:function(){var e=this.domCreation(this.alt);return e.setAttribute("controls",!0),e}}]),e}(),H=function e(t,a){return b(this,e),"image"===t?new R(a):"video"===t?new F(a):void 0},D=(S=document.location.href,"id",new URL(S).searchParams.get("id")),G=l.photographers.filter((function(e){return e.id==D}))[0],K=l.media.filter((function(e){return e.photographerId==D})),O=function(t){var r=e("div","work-elt"),i=e("div","work-elt-infos"),o=a("span",t.alt,"work-title"),n=a("span","".concat(t.price," €"),"work-price"),l=a("span",t.likes,"work-like");l.setAttribute("id",t.id);var d=e("i","fas");d.classList.add("fa-heart");var p=void 0===t.video?"image":"video",s=new H(p,t),c=s.createElt();return r.appendChild(c),c.addEventListener("click",function(e){return function(){E.style.display="block",I.style.display="block",B.scrollTop=0,A.scrollTop=0,A.style.overflow="hidden",function(e){j.innerHTML="",j.appendChild(e.createFullElt())}(e)}}(s)),l.appendChild(d),i.appendChild(o),i.appendChild(n),i.appendChild(l),r.appendChild(i),r},V=document.location.pathname;V.includes("index.html")&&(h.addEventListener("click",(function(e){var t=e.target;"SPAN"===t.tagName&&t.parentNode.classList.toggle("selected"),"LI"===t.tagName&&t.classList.toggle("selected");var a=c();p.innerHTML="",a.forEach((function(e){return p.appendChild(n(e))}))})),c().forEach((function(e){return g.appendChild(n(e))}))),V.includes("photographer-page.html")&&(function(){var e=document.getElementById("ph-title");i(e,G.name);var t=document.getElementById("ph-city");i(t,"".concat(G.city,", ").concat(G.country));var a=document.getElementById("ph-tagline");i(a,G.tagline);var n=document.getElementById("ph-tags");G.tags.forEach((function(e){return r(n,e)}));var l=document.getElementById("ph-portrait");o(l,"images/".concat(G.portrait),G.alt),C.addEventListener("click",T)}(),x=document.getElementById("works-elts"),K.forEach((function(e){return x.appendChild(O(e))})),L=document.getElementById("photographer-page"),N=e("div","ph-data"),(W=document.createElement("span")).textContent="".concat(G.price,"€ / jour"),N.appendChild(function(){var t=document.createElement("span");t.setAttribute("id","total-likes");var a=0;K.forEach((function(e){return a+=e.likes}));var r=e("i","fas");return r.classList.add("fa-heart"),t.textContent="".concat(a," "),t.appendChild(r),t}()),N.appendChild(W),L.appendChild(N),M=G.name,document.getElementById("ph-form-name").textContent=M)})();