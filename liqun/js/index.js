$(function(){var e=document.getElementById("qr"),n=e.getElementsByTagName("img")[0],t=e.getElementsByTagName("img")[3];n.onmouseenter=function(){t.style.display="block"},n.onmouseleave=function(){t.style.display="none"};for(var a=document.getElementById("header-nav").getElementsByTagName("a"),o=0;o<a.length;o++)a[o].onmouseenter=function(){this.style.color="orangered"},a[o].onmouseleave=function(){this.style.color=""};for(var i=document.getElementsByClassName("banner")[0],l=document.getElementById("list1").getElementsByTagName("li"),s=document.getElementById("zi"),o=1;o<l.length;o++)l[o].onmouseenter=function(){s.style.display="block",s.style.height=s.style.lineHeight=randomLength()+"px",s.style.background=randomColor()},l[o].onmouseleave=function(){s.style.display="none"};var r=document.getElementById("list2"),m=document.getElementById("list3"),i=document.getElementsByClassName("banner")[0],c=[];ajax({url:"lunbo.json",data:{},success:function(e){function n(){d>=s.length&&(d=0);for(var e=0;e<s.length;e++)e==d?(animate(s[e],{opacity:100}),p[e].style.background="orange",f.style.backgroundImage="url("+c[e]+")"):(animate(s[e],{opacity:0}),p[e].style.background="")}for(var t=JSON.parse(e),a=0;a<t.length;a++){var o=t[a],l=document.createElement("li");r.appendChild(l),l.innerHTML="<img src="+o.img+" />",c.push(o.bg)}var s=r.getElementsByTagName("li");s[0].style.opacity=1,s[0].style.filter="alpha(opacity=100)";var d=0,u=setInterval(function(){d++,n()},2e3),f=document.getElementById("banner-wrap"),p=m.getElementsByTagName("li");p[0].style.background="orange";for(a=0;a<p.length;a++)p[a].index=a,p[a].onmouseenter=function(){d=this.index,n();for(var e=0;e<p.length;e++)p[e].style.background="",p[e].style.background=e==d?"orange":""};i.onmouseenter=function(){clearInterval(u)},i.onmouseleave=function(){clearInterval(u),u=setInterval(function(){d++,n()},2e3)}}});var d=[];$.get("json/foods.json",function(e){d=e;for(var n=0;n<d.length;n++){var t=d[n],a=$("<li></li>").appendTo(".food2-kind");$("<img src="+t.img+">").appendTo(a);var o=$("<li></li>").appendTo(".food-kind");$("<img src="+t.img+">").appendTo(o);var i=$("<li></li>").appendTo(".food3-kind");$("<img src="+t.img+">").appendTo(i),$("<p>"+t.unit+t.price+"</p>").appendTo(i),function(e,n){var t=setInterval(function(){var a=new Date(n.endTime),o=new Date,i=parseInt((a-o)/1e3);if(i<=0)return alert("活动时间已过, 要买下次再来"),void clearInterval(t);var l=parseInt(i/86400),s=parseInt(i/3600)%24,r=parseInt(i/60)%60,m=i%60;l=l<10?"0"+l:l,s=s<10?"0"+s:s,r=r<10?"0"+r:r,m=m<10?"0"+m:m,e.find("span").eq(0).html(l),e.find("span").eq(1).html(s),e.find("span").eq(2).html(r),e.find("span").eq(3).html(m)},1e3)}($("<b>倒计时:<span>00</span>天<span>00</span>时<span>00</span>分<span>00</span>秒</b>").appendTo(i),t)}$(".food3-kind").on("click","li",function(){location.href="items.html?id="+d[$(this).index()].id+"&index="+$(this).index()+"&username="+u}),$(".food2-kind").on("click","li",function(){location.href="items.html?id="+d[$(this).index()].id+"&index="+$(this).index()+"&username="+u}),$(".food-kind").on("click","li",function(){location.href="items.html?id="+d[$(this).index()].id+"&index="+$(this).index()+"&username="+u})});var u=function(e,n){for(var t=e.split("&"),a=0;a<t.length;a++){var o=t[a].split("=");if(o[0]==n)return o[1]}return""}(location.search.substring(1),"username");0==u.length?($(".myname span").html(""),$(".myname").html("您未登录,点我登录"),$(".myname").click(function(){location.href="login.html"})):($(".myname span").html(u),$(".myname").html(u+",欢迎回来"),$(".uname").html(""),$(".uname").append($("<span></span>")),$(".uname span").html(u)),$(".car").click(function(){location.href="carshop.html?username="+u}),$(".food li").click(function(){location.href="itemsAll.html?username="+u}),$(".food2 li").click(function(){location.href="itemsAll.html?username="+u}),$(".food3 li").click(function(){location.href="itemsAll.html?username="+u}),$(".orders").click(function(){location.href="carshop.html?username="+u})});