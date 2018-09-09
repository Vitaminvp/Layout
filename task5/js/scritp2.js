//$(function () {

function isVisible(tag) {
    var t = $(tag);
    var w = $(window);
    var wt = w.scrollTop();
    var tt = t.offset().top;
    var tb = tt + t.height();
    return ((tb <= wt + w.height() - 60) && (tt >= wt));
}

function showAnimateElem(number) {
    var id = $('#elem' + number);
    id.prop("shown", true);
    id.animate({
        opacity: 1
    }, 1200);
}


var count_animate = 1;


function animate_show_process() {

    if (count_animate <= 3) {
        $('.animate_process' + count_animate).addClass('process-start-animate');
        $('.animate_process' + count_animate).find('.show-animate-img').addClass('fadeIn');
        $('.animate_process_text' + count_animate).addClass('text-blue-animate');
        $('#svg-animate' + count_animate).animate({
            opacity: 1
        }, 1000);
        timerId = setTimeout(animate_show_process, 1000);

        if (count_animate == 2 || 3) {
            var prev_count_animate = count_animate - 1;
            $('.animate_process' + prev_count_animate).addClass('end-animate');

        }
        count_animate = count_animate + 1;
    } else {
        clearTimeout(timerId);
    }
}



var flag = true;
var flag11 = true;
var flag_process = true;

var a = $("#elem");

var a2 = $("#elem2");
var a3 = $("#elem3");
var a4 = $("#elem4");

var a5 = $("#elem5");
var a6 = $("#elem6");
var a7 = $("#elem7");
var a8 = $("#elem8");
var a9 = $("#elem9");

var b11 = $("#elem11");
var bp = $("#process")

$(window).scroll(function () {

    if (flag && !a.prop("shown") && isVisible(a)) {
        a.prop("shown", true);
        a.next().animate({
            opacity: 1
        }, 2000);
        flag = false;
    }
    if (!a2.prop("shown") && isVisible(a2)) {
        a2.prop("shown", true);
        a2.next().animate({
            opacity: 1
        }, 2000);
    }
    if (!a3.prop("shown") && isVisible(a3)) {
        a3.prop("shown", true);
        a3.next().animate({
            opacity: 1
        }, 2000);
    }
    if (!a4.prop("shown") && isVisible(a4)) {
        a4.prop("shown", true);
        a4.next().animate({
            opacity: 1
        }, 2000);
    }
    if (flag11 && !b11.prop("shown") && isVisible(b11)) {
        b11.animate({
            "margin-left": "0"
        }, 800);
        flag11 = false;
    }

    if (!a5.prop("shown") && isVisible(a5)) {
        a5.prop("shown", true);
        a5.next().addClass('fadeIn');
    }
    if (!a6.prop("shown") && isVisible(a6)) {
        a6.prop("shown", true);
        a6.next().addClass('fadeIn');
    }
    if (!a7.prop("shown") && isVisible(a7)) {
        a7.prop("shown", true);
        a7.next().addClass('fadeIn');
    }
    if (!a8.prop("shown") && isVisible(a8)) {
        a8.prop("shown", true);
        a8.next().addClass('fadeIn');
    }
    if (!a9.prop("shown") && isVisible(a9)) {
        a9.prop("shown", true);
        a9.next().addClass('fadeIn');
    }

    if (flag_process && !bp.prop("shown") && isVisible(bp)) {
        console.log('script work');
        animate_show_process();


        flag_process = false;
    }
});
//});

