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

