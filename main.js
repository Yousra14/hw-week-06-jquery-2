// $(document).ready(function (){
//     $("#secret").hide();
//     $("#clicker2").hide();
//     $("#clicker2").hide();
//     $("p").hide();
//     $("img").hide();
// })

//Exercise 1

// $("#clicker").click(function (){
//     $("#clicker").hide();
//     $("#secret").fadeIn("slow",function (){
// })

// })

// $("#clicker").click(function (){
//         $("#secret").slideDown("slow");
// })


$("#clicker").click(function (){
    $("#secret").fadeToggle("")
    $("#clicker").text("Click me to toggle a hidden secret!")
    
})

//Exercise 2

$("#clicker2").click(function (){
    $(".secret").slideUp("slow");
    $("p").last().css("color" , " red") // I just like to add one more action
})


//Exercise 3
$("#clicker3").click(function(){
    $('img').attr("src","gif.gif")

})