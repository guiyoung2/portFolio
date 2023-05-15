$(function () {
  let water_box = $(".water_box");
  let water = $(".water");
  let flower = $(".flower_box");
  let num = 1;
  let water_txt = $(".water_txt");
  let about_txt = $(".txt_box");

  water_box.on("click", function () {
    num++;
    if (num >= 6) {
      num = 6;
      water_txt.css({ display: "none" });
      about_txt.addClass("about_block");
    }
    setTimeout(function () {
      water.removeClass("water_move");
    }, 50);
    setTimeout(function () {
      water.addClass("water_move");
    }, 100);
    flower.css({
      background:
        "url(./main/images/flower" + num + ".png) no-repeat center center",
      "background-size": "contain",
    });
  });
});
