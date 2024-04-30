let isBold = false;
let isItalic = false;
let isunderline= false;

document.getElementById("bld").addEventListener("click", function() {
    const value = document.getElementById("inputfld");
    if (!isBold) {
        value.style.fontWeight = "bold";
        bgcolor("bld","red")

    } else {
        value.style.fontWeight = "normal";
        defaultclor("bld")
    }
    isBold = !isBold;
});

document.getElementById("itlc").addEventListener("click", function() {

    const value = document.getElementById("inputfld");
    if (!isItalic) {
        value.style.fontStyle = "italic";
        bgcolor("itlc","red")
    } else {
        value.style.fontStyle = "normal";
        defaultclor("itlc")
    }
    isItalic = !isItalic;
});

document.getElementById("undl").addEventListener("click",function(){
    const value = document.getElementById("inputfld");
    if(!isunderline){
        value.style.textDecoration="underline";
        bgcolor("undl","red")
    }
    else{
        value.style.textDecoration ="none";
        defaultclor("undl")
    }
    isunderline=!isunderline;
});



document.getElementById("left").addEventListener("click",function(){
    const value = document.getElementById("inputfld");
    value.style.textAlign='left';
})
document.getElementById("center").addEventListener("click",function(){
    const value = document.getElementById("inputfld");
    value.style.textAlign='center';
})
document.getElementById("right").addEventListener("click",function(){
    const value = document.getElementById("inputfld");
    value.style.textAlign='right';
})





// document.getElementById("fontsize").addEventListener("click", function(event){
//     const values = event.target.value;
//     console.log(values)

// })

let isupercase = false;
document.getElementById("upper").addEventListener("click",function(){
    const value = document.getElementById("inputfld");
    if(!isupercase){
        value.style.textTransform='uppercase';
        bgcolor("upper","red")
    }
    else{
        value.style.textTransform='none'
        defaultclor("upper");
    }
    isupercase = !isupercase

})



document.getElementById("textcolor").addEventListener('click', function () {
    const colorPicker = document.getElementById('textcolor');
    const targetElement = document.getElementById('inputfld');

    // Event listener for changes in the color picker value
    colorPicker.addEventListener('input', function () {
        const selectedColor = colorPicker.value;
        targetElement.style.color = selectedColor;
    });
});




document.getElementById("fonts").addEventListener("click",function(){
   
    const fsize = document.getElementById("fonts");
    
    fsize.addEventListener("input",function(){
        const result = fsize.value
        const resultint = parseFloat(result);
        const targetElement = document.getElementById('inputfld');
        if(resultint>15){
            targetElement.style.fontSize=result+"px";
        }
    })
})



