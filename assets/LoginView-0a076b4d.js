import{r as d,e as k,f as V,o as l,c as u,a as L,b as e,g as y,t as v,w as r,v as c,h as g,i as w,j as q,k as K,n as U,u as $,F as C,l as N,m as b,s as B,_ as E,d as I}from"./index-696c6dd9.js";const S={class:"min-h-screen min-w-screen flex"},j={class:"flex flex-col m-auto"},A={class:"bg-gray-500/25 backdrop-blur-xl rounded-md pb-2"},P={class:"h-full pt-2 pb-3"},z={class:"text-center"},D=e("span",{class:"font-bold text-xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"},"PixselCraft ",-1),F={key:0,class:"login w-72"},M={class:"mx-3"},T=e("p",{class:""},"Емайл",-1),W=["onKeyup"],O={class:"mx-3"},R=e("p",{class:""},"Пароль",-1),G=["onKeyup"],H={key:1,class:"register w-80"},J={class:"mx-3"},Q=e("p",{class:"my-auto"},"Емайл",-1),X=["onKeyup"],Y={class:"mx-3"},Z=e("p",{class:""},"Никнейм",-1),ee={class:"mx-3"},se=e("p",{class:""},"Пароль",-1),te={class:"mx-3"},oe=e("p",{class:""},"Повторите пароль",-1),le=["onKeyup"],ne={key:2,class:"pl-3 text-red-500"},ae=e("p",{class:"mt-2 pr-3 text-cyan-500 text-right"},"Забыли пароль?",-1),ie={class:"flex justify-center pt-2"},ue={data(){return{isLogin:!0}},watch:{$route(){this.$route.query.q=="register"?this.isLogin=!1:this.isLogin=!0,console.log(this.$route.query.q)}},mounted(){this.$route.query.q=="register"?this.isLogin=!1:this.isLogin=!0,console.log(this.$route.query.q)}},de=Object.assign(ue,{__name:"LoginView",setup(re){const n=d(null),a=d(null),h=k(),i=d(null),m=d(null),_=d(null),f=()=>{N(b(),n.value,a.value).then(s=>{console.log("Success registered"),h.push("/")}).catch(s=>{console.log(s.code),alert(s.message)})},p=()=>{B(b(),n.value,a.value).then(s=>{console.log("Success login"),h.push("/")}).catch(s=>{switch(console.log(s.code),s.code){case"auth/invalid-email":i.value="Invalid email";break;case"auth/user-not-found":i.value="No account with that email was found";break;case"auth/wrong-password":i.value="Incorrect password";break;default:i.value="Email or password was incorrect";break}})};return(s,t)=>{const x=V("router-link");return l(),u(C,null,[L(E),e("div",{style:U([{background:`url(${$(I)})`},{"background-size":"100% 100%"}]),class:"min-h-screen text-white"},[e("form",S,[e("div",j,[e("form",A,[e("h1",P,[e("h1",z,[D,y(" - "+v(s.isLogin?"войти":"регистрация"),1)])]),s.isLogin?(l(),u("div",F,[e("div",M,[T,r(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>n.value=o),id:"login",class:"w-full my-0.5 p-1 rounded-lg indent-1 bg-gray-500/25 focus:bg-gray-500/25 focus:outline focus:outline-2 focus:outline-white",type:"text",placeholder:"Емайл",onKeyup:g(p,["enter"])},null,40,W),[[c,n.value]])]),e("div",O,[R,r(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>a.value=o),id:"current-password",class:"w-full my-0.5 p-1 rounded-lg indent-1 bg-gray-500/25 focus:outline focus:outline-2 focus:outline-white",type:"password",placeholder:"••••••••",onKeyup:g(p,["enter"])},null,40,G),[[c,a.value]])])])):(l(),u("div",H,[e("div",J,[Q,r(e("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>n.value=o),id:"login",class:"p-1 w-full my-1 rounded-lg indent-1 bg-gray-500/25 focus:outline focus:outline-2 focus:outline-white",type:"text",placeholder:"Емайл",onKeyup:g(p,["enter"])},null,40,X),[[c,n.value]])]),e("div",Y,[Z,r(e("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>m.value=o),id:"username",class:"p-1 w-full my-1 rounded-lg indent-1 bg-gray-500/25 focus:outline focus:outline-2 focus:outline-white",type:"text",placeholder:"Никнейм"},null,512),[[c,m.value]])]),e("div",ee,[se,r(e("input",{"onUpdate:modelValue":t[4]||(t[4]=o=>a.value=o),id:"current-password",class:"p-1 w-full mr-3 my-1 rounded-lg indent-1 bg-gray-500/25 focus:outline focus:outline-2 focus:outline-white",type:"password",placeholder:"••••••••"},null,512),[[c,a.value]])]),e("div",te,[oe,r(e("input",{"onUpdate:modelValue":t[5]||(t[5]=o=>_.value=o),id:"new-password",class:"p-1 w-full mr-3 my-1 rounded-lg indent-1 bg-gray-500/25 focus:outline focus:outline-2 focus:outline-white",type:"password",placeholder:"••••••••",onKeyup:g(f,["enter"])},null,40,le),[[c,_.value]])])])),i.value?(l(),u("p",ne,v(i.value),1)):w("",!0),ae]),e("div",ie,[s.isLogin?(l(),u("a",{key:0,onClick:p,class:"btn w-full text-center text-white bg-cyan-500/25 hover:bg-cyan-500/50 hover:scale-110 ease-out transition backdrop-blur-xl p-2 mr-1 rounded-xl"}," Войти ")):(l(),u("a",{key:1,onClick:f,class:"btn w-full text-center text-cyan-500 bg-cyan-900/25 hover:bg-cyan-900/50 hover:scale-110 ease-out transition backdrop-blur-xl p-2 rounded-xl"}," Зарегистрироваться ")),s.isLogin?(l(),q(x,{key:2,to:"/login?q=register",class:"btn w-full text-center text-cyan-500 bg-cyan-900/25 hover:bg-cyan-900/50 hover:scale-110 ease-out transition backdrop-blur-xl p-2 ml-1 rounded-xl"},{default:K(()=>[y(" Регистрация ")]),_:1})):w("",!0)])])])],4)],64)}}});export{de as default};
