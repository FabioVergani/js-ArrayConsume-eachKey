(function(e,p,f){
 e.Consume=f[p]({p:'pop'});
 e.ConsumeTopDown=f[p]({p:'shift'});
})(Array,'bind',function(o,f){var e,p=this.p;while(e=o[p]()){f(e)}});


//...


(function(e,f){
 e.Consume=f.bind({p:'pop'});
 e.ConsumeTopDown=f.bind({p:'shift'});
})(Array,function(o,f){var e,p=this.p;while(e=o[p]()){f(e)}});
//-------------------------------------------------------------------------------------------------------
/*
function Test(x){console.log(x)};
Array.Consume(['a','b','c'],Test);//c-b-a
Array.ConsumeTopDown(['a','b','c'],Test);//a-b-c
*/

