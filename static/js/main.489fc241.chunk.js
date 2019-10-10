(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"broom","image":"./images/broom_600.jpg","clicked":false},{"id":2,"name":"candle","image":"./images/candle_600.jpg","clicked":false},{"id":3,"name":"candy","image":"./images/candy_600.jpg","clicked":false},{"id":4,"name":"cat","image":"./images/cat_600.jpg","clicked":false},{"id":5,"name":"eye","image":"./images/eye_600.jpg","clicked":false},{"id":6,"name":"ghost","image":"./images/ghost_600.jpg","clicked":false},{"id":7,"name":"hat","image":"./images/hat_600.jpg","clicked":false},{"id":8,"name":"pot","image":"./images/pot_600.jpg","clicked":false},{"id":9,"name":"pumpkin","image":"./images/pumpkin_600.jpg","clicked":false},{"id":10,"name":"spider","image":"./images/spider_600.jpg","clicked":false},{"id":11,"name":"stone","image":"./images/stone_600.jpg","clicked":false},{"id":12,"name":"trick","image":"./images/trick_600.jpg","clicked":false}]')},,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),s=t(2),o=t.n(s),l=(t(14),t(3)),i=t(4),r=t(7),m=t(5),d=t(8);t(15),t(16);var g=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"image-card","data-id":e.id,onClick:function(){return e.cardClick(e.id)}},n.a.createElement("img",{alt:e.name,src:e.image,"data-clicked":e.clicked})))};t(17);var u=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Halloween Clicky Game"),n.a.createElement("button",{type:"button",className:"modal-btn","data-toggle":"modal","data-target":"#instructions"},"?"),n.a.createElement("p",{id:"msg"},e.message),n.a.createElement("div",null,n.a.createElement("span",{className:"score"},"Score ",e.score),n.a.createElement("span",{className:"score"},"Top Score ",e.topScore)),n.a.createElement("div",{className:"modal fade",id:"instructions",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true",className:"close-btn"},"\xd7"))),n.a.createElement("div",{className:"modal-body"},n.a.createElement("p",null,n.a.createElement("i",{className:"fas fa-skull"}),"\xa0 Click each image only once and never repeat!"),n.a.createElement("p",null,n.a.createElement("i",{className:"fas fa-skull"}),"\xa0 Be careful, every time any image is clicked, all of the images shuffle in a random order."),n.a.createElement("p",null,n.a.createElement("i",{className:"fas fa-skull"}),"\xa0 You will loose when you click on the same image more than once!")),n.a.createElement("div",{className:"modal-footer"},n.a.createElement("button",{type:"button",className:"btn got-btn","data-dismiss":"modal"},"Got it?"))))))},f=t(6),p=function(e){function a(){var e,t;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(t=Object(r.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={cards:f,message:"Click any image to begin!",score:0,topScore:0},t.cardClick=function(e){var a=t.state.cards.filter((function(a){return a.id===e}));console.log(a[0]),!1===a[0].clicked?(a[0].clicked=!0,t.incrementScore(),t.shuffle()):(console.log("You Lost!"),t.setState({message:"You Lost! Click any image to start over."}),t.changeColor("red"),t.shake(),t.resetGame(),t.shuffle())},t.incrementScore=function(){var e=t.state.score+1;if(12===e?(console.log("You won!"),t.setState({score:e,message:"Yay, you won! Click any image to start over."}),t.changeColor("pink"),t.resetGame()):(console.log("You guessed correctly!"),t.setState({score:e,message:"You guessed correctly. Keep guessing!"}),t.changeColor()),t.state.topScore<e){var a=t.state.topScore+1;t.setState({topScore:a})}},t.shuffle=function(){for(var e=t.state.cards,a=e.length-1;a>0;a--){var c=Math.floor(Math.random()*a),n=e[a];e[a]=e[c],e[c]=n}},t.resetGame=function(){var e=t.state.cards.map((function(e){var a={};return a.id=e.id,a.name=e.name,a.image=e.image,a.clicked=!1,a}));console.log(e),t.setState({score:0,cards:e}),console.log(t.state.cards)},t.changeColor=function(e){switch(document.querySelector("#msg").className="",e){case"red":document.querySelector("#msg").className="red";break;case"pink":document.querySelector("#msg").className="pink";break;default:document.querySelector("#msg").className="white",setTimeout(a,500);var a=function(){document.querySelector("#msg").className=""}}},t.shake=function(){document.querySelector(".card-container").classList.add("shake"),setTimeout((function(){document.querySelector(".card-container").classList.remove("shake")}),500)},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(u,{message:this.state.message,score:this.state.score,topScore:this.state.topScore}),n.a.createElement("div",{className:"card-container"},this.state.cards.map((function(a){return n.a.createElement(g,{changeColor:e.changeColor,cardClick:e.cardClick,id:a.id,key:a.id,name:a.name,image:a.image,clicked:a.clicked})}))))}}]),a}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.489fc241.chunk.js.map