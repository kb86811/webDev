// check off specific todos by clicking
$("li").click(function(){
    // ##############hard way###################
    //if li is gray 
    // console.log($(this).css("color"))
//     if($(this).css("color")==="rgb(128, 128, 128)"){
//         //turn it black
//         // console.log("it is curretnyl gray")
//         $(this).css({
//             color:"black",
//             textDecoration:"none"

//         });
//     }
//     // else, turn it gray 
//     else{
//         $(this).css({
//             color:"gray",
//             textDecoration: "line-through" 
//     });
// }

//    ###### easy way ###########################
$(this).toggleClass("completed");
});
//click on X to delte Todo
