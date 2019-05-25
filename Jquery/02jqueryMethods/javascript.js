console.log("the width of the image is " + $("img").css("width"));
//change the width /
var size={
    width:"200px",
    height:"100px"
};
// $("img").css("width","200px");
$("img").css(size);
console.log("the source of the image is" + $("img").attr("src"));
// change all the image to the new image in the src tag
// $("img").attr("src", "https://images.unsplash.com/photo-1548558253-78f140ed2f36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=656&q=80");
///////////////////////////////////////
//changes only the first image
$("img:first-of-type").attr("src", "https://images.unsplash.com/photo-1548558253-78f140ed2f36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=656&q=80");
//changes the last image element
$("img:last").attr("src", "https://images.unsplash.com/photo-1548558253-78f140ed2f36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=656&q=80");
console.log("the source of the image now chnaged to hence the image is different now" + $("img").attr("src"));
//why this did not work
console.log($("input").val());

$("h1").addClass("correct");

$("li").addClass("wrong");
$("li").toggleClass("done");
