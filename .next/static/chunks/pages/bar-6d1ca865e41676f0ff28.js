_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{mNFP:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return S}));var i=a("vJKn"),s=a.n(i),r=a("rg98"),n=a("nKUr"),u=a("Kvkj"),c=a("tr08"),l=a("tRbT"),h=a("kKAo"),d=a("x7I7"),o=(a("JjJj"),a("8Kt/")),x=a.n(o),j=a("+vyA"),p=(a("q1tI"),a("R/WZ")),b=a("VX74"),v=Object(p.a)((function(e){return{charts:{flexGrow:1,marginBottom:e.spacing(4)},paper:{padding:e.spacing(2),color:e.palette.text.secondary}}}));var S=!0;t.default=function(){v(),Object(c.a)();var e=Object(b.useQuery)(d.e,{context:{clientName:"bar"}}).data.bar,t=Object(b.useQuery)(d.d,{context:{clientName:"bar"}}).data.histories,a=Object(b.useQuery)(d.p).data.factory,i=Object(b.useQuery)(d.gb,{variables:{id:"0x5fa664f69c2a4a3ec94fac3cbf7049bd9ca73129"}}).data.token,o=Object(b.useQuery)(d.n).data.bundles,p=Object(b.useQuery)(d.l).data.dayDatas,S=parseFloat(null===i||void 0===i?void 0:i.derivedETH)*parseFloat(o[0].ethPrice);Object(d.kb)(Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([d.v,d.w,d.x,d.z,d.J,d.y]);case 2:case"end":return e.stop()}}),e)}))),6e4);var f=t.reduce((function(e,t){var a=1e3*t.date,i=p.find((function(e){return e.date===t.date}));e.sushiStakedUSD.push({date:a,value:parseFloat(t.sushiStakedUSD)}),e.sushiHarvestedUSD.push({date:a,value:parseFloat(t.sushiHarvestedUSD)}),e.xSushiMinted.push({date:a,value:parseFloat(t.xSushiMinted)}),e.xSushiBurned.push({date:a,value:parseFloat(t.xSushiBurned)}),e.xSushi.push({date:a,value:parseFloat(t.xSushiSupply)});var s=.05*i.volumeUSD*.01/t.xSushiSupply*365/(t.ratio*S);return e.apr.push({date:a,value:parseFloat(100*s)}),e.apy.push({date:a,value:parseFloat(100*(Math.pow(1+s/365,365)-1))}),e.fees.push({date:a,value:parseFloat(.005*i.volumeUSD)}),e}),{sushiStakedUSD:[],sushiHarvestedUSD:[],xSushiMinted:[],xSushiBurned:[],xSushi:[],apr:[],apy:[],fees:[]}),m=(f.sushiStakedUSD,f.sushiHarvestedUSD,f.xSushiMinted),O=f.xSushiBurned,g=f.xSushi,y=f.apr,w=f.apy,D=f.fees,_=w.reduce((function(e,t){return e+t.value}),0)/w.length,F=.05*(a.volumeUSD-a.oneDay.volumeUSD)*.01/e.totalSupply*365/(e.ratio*S),U=Math.pow(1+F/365,365)-1;return Object(n.jsxs)(u.a,{children:[Object(n.jsx)(x.a,{children:Object(n.jsx)("title",{children:"MIST Bar | MISTswap Analytics"})}),Object(n.jsxs)(l.a,{container:!0,spacing:3,children:[Object(n.jsx)(l.a,{item:!0,xs:12,children:Object(n.jsxs)(l.a,{container:!0,spacing:3,children:[Object(n.jsx)(l.a,{item:!0,xs:12,sm:6,md:3,children:Object(n.jsx)(u.h,{title:"APY (24h)",value:100*U,format:"percent"})}),Object(n.jsx)(l.a,{item:!0,xs:12,sm:6,md:3,children:Object(n.jsx)(u.h,{title:"APY (Avg)",value:_,format:"percent"})}),Object(n.jsx)(l.a,{item:!0,xs:12,sm:6,md:3,children:Object(n.jsx)(u.h,{title:"xSushi",value:e.totalSupply,format:"integer"})}),Object(n.jsx)(l.a,{item:!0,xs:12,sm:6,md:3,children:Object(n.jsx)(u.h,{title:"xSushi:Sushi",value:Number(e.ratio).toFixed(4)})})]})}),Object(n.jsx)(l.a,{item:!0,xs:12,children:Object(n.jsx)(h.a,{variant:"outlined",style:{display:"flex",height:400,flex:1},children:Object(n.jsx)(j.a,{children:function(e){var t=e.width,a=e.height;return Object(n.jsx)(u.e,{width:t,height:a,margin:{top:64,right:32,bottom:0,left:64},data:[w,y],labels:["APY","APR"]})}})})}),Object(n.jsx)(l.a,{item:!0,xs:12,children:Object(n.jsx)(h.a,{variant:"outlined",style:{display:"flex",height:400,flex:1},children:Object(n.jsx)(j.a,{children:function(e){var t=e.width,a=e.height;return Object(n.jsx)(u.e,{width:t,height:a,title:"Fees received (USD)",margin:{top:64,right:32,bottom:0,left:64},data:[D]})}})})}),Object(n.jsx)(l.a,{item:!0,xs:12,children:Object(n.jsx)(h.a,{variant:"outlined",style:{display:"flex",height:400,flex:1},children:Object(n.jsx)(j.a,{children:function(e){var t=e.width,a=e.height;return Object(n.jsx)(u.e,{width:t,height:a,margin:{top:64,right:32,bottom:0,left:64},data:[m,O],labels:["xSushi Minted","xSushi Burned"]})}})})}),Object(n.jsx)(l.a,{item:!0,xs:12,children:Object(n.jsx)(h.a,{variant:"outlined",style:{display:"flex",height:400,flex:1},children:Object(n.jsx)(j.a,{children:function(e){var t=e.width,a=e.height;return Object(n.jsx)(u.e,{width:t,height:a,title:"xSushi Total Supply",margin:{top:64,right:32,bottom:0,left:64},data:[g]})}})})})]})]})}},"xxl+":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bar",function(){return a("mNFP")}])}},[["xxl+",1,2,0,3,4]]]);