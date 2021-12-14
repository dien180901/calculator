let number="0"
let ans=0
let is_first=true
let operator=""
rerender()
$("#btn-0").click(()=>{
    number+="0"
    rerender()
})
$("#btn-1").click(()=>{
    number+="1"
    rerender()
})
$("#btn-2").click(()=>{
    number+="2"
    rerender()
})
$("#btn-3").click(()=>{
    number+="3"
    rerender()
})
$("#btn-4").click(()=>{
    number+="4"
    rerender()
})
$("#btn-5").click(()=>{
    number+="5"
    rerender()
})
$("#btn-6").click(()=>{
    number+="6"
    rerender()
})
$("#btn-7").click(()=>{
    number+="7"
    rerender()
})
$("#btn-8").click(()=>{
    number+="8"
    rerender()
})
$("#btn-9").click(()=>{
    number+="9"
    rerender()
})
$("#btn-point").click(()=>{
    number+='.'
    rerender()
})
$("#btn-ac").click(()=>{
    if (number){
        number="0"
    }
    
    rerender()
})
$("#btn-plus").click(()=>{
    if (operator){
        cal(operator)
        
        rerender()
        number="0"
    }else{
        ans=parseFloat(number)
        number="0"
        operator='+'
        rerender()
    }
})
$("#btn-dec").click(()=>{
    if (operator){
        cal(operator)
        rerender()
        number="0"
    }else{
        ans=parseFloat(number)
        number="0"
        operator='-'
        rerender()
    }
})
$("#btn-div").click(()=>{
    if (operator){
        cal(operator)
        rerender()
        number="0"
        
    }else{
        ans=parseFloat(number)
        number="0"
        operator='/'
        rerender()
    }
})
$("#btn-mul").click(()=>{
    if (operator){
        cal(operator)
        rerender()
        number="0"
     
    }else{
        ans=parseFloat(number)
        number="0"
        operator='*'
        rerender()

    }
})
$("#btn-del").click(()=>{
    if (operator){
        number="0"
    }
   
   rerender()
})
$("#btn-equal").click(()=>{
    cal(operator)
    operator=''
})
function cal(s){
    console.log(parseFloat(number))
    
    if (s=='+'){
        ans=ans+parseFloat(number)
        
    } else if (s=='-'){
        ans=ans-parseFloat(number)
        
    } else if (s=='*'){
        ans=ans*parseFloat(number)
      
    } else{
        ans=ans/parseFloat(number)
        
    }
    number=(ans).toString()
    console.log(ans,typeof(ans))
    ans=parseFloat(ans)
    console.log('2',ans,typeof(ans))
    rerender()
}
function rerender(){
    while (number[0]=="0" && number.length>1){
        number=number.substring(1)
    }
    temp=parseFloat(number)
    temp.toString()
    document.getElementById('output').innerText = temp
}
