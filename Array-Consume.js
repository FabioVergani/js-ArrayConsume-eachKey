
//#
(function(e,f){
 e.Consume=f.bind({p:'pop'});
 e.ConsumeTopDown=f.bind({p:'shift'});
})(Array,function(o,f){var e,p=this.p,m=[];while(e=o[p]()){f(e);m.push(e)};return m});
//+
function eachKey(o,f){return Array.Consume(Object.keys(o),f)};

------------------------

//147
(function(e,f){
 e.Consume=f.bind({p:'pop'});
 e.ConsumeTopDown=f.bind({p:'shift'});
})(Array,function(o,f){var e,p=this.p;while(e=o[p]()){f(e)}});


//152
(function(i,e,f){
 e[i]=f.bind({p:'pop'});
 e[i+'TopDown']=f.bind({p:'shift'});
})('Consume',Array,function(o,f){var e,p=this.p;while(e=o[p]()){f(e)}});
//152
(function(e,p,f){
 e.Consume=f[p]({p:'pop'});
 e.ConsumeTopDown=f[p]({p:'shift'});
})(Array,'bind',function(o,f){var e,p=this.p;while(e=o[p]()){f(e)}});

//157
(function(i,e,p,f){
 e[i]=f[p]({p:'pop'});
 e[i+'TopDown']=f[p]({p:'shift'});
})('Consume',Array,'bind',function(o,f){var e,p=this.p;while(e=o[p]()){f(e)}});


/*
function Test(x){console.log(x)};
Array.Consume(['a','b','c'],Test);//c-b-a
Array.ConsumeTopDown(['a','b','c'],Test);//a-b-c
*/
