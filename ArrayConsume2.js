Object.refill=function(o,p,e){o[p]=p in o ?o[p]:e||null};

//#2
(function(e,r,s,f){r(e,s,f.bind({p:'pop'}));r(e,s+'TopDown',f.bind({p:'shift'}))})(Array,Object.refill,'Consume',function(o,f){var e,p=this.p,m=[];while(e=o[p]()){f(e);m.push(e)};return m});



function Test(x){console.log(x)};
Array.Consume(['a','b','c'],Test);//c-b-a
Array.ConsumeTopDown(['a','b','c'],Test);//a-b-c
