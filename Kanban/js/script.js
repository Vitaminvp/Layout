$(document).ready(function () {
    let color = "#2196F3";
    colorBorder();

    // Render bottom border for input field
    function colorBorder() {
        $("input[type=text]").css("border", "2px solid" + color + "");
    }

    // форматировать дату, с учетом того, что месяцы начинаются с 0
    function formatDate() {
        let date = new Date();
        let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
        let sec = Math.floor(date / 1000); // округлить  до секунд
        let min = Math.floor(date / 60000); // округлить  до минут


        var d = date;
        d = [
		'0' + d.getDate(),
		'0' + (d.getMonth() + 1),
		'' + d.getFullYear(),
		'0' + d.getHours(),
		'0' + d.getMinutes()
	  ];

        for (var i = 0; i < d.length; i++) {
            d[i] = d[i].slice(-2);
        }

        return d.slice(0, 3).join('.') + ' ' + days[date.getDay()] + ' ' + d.slice(3).join(':');
    }

    // Define card
    function card(color, text) {
        return (

            `<div class="kanban-card" style="background-color:` +
            color +
            `">
            <div>
            <p>
            ` + formatDate() + `
            <p/>
            <button>
                <span class="close">&times;</span>
            </button>
            </div>
            <textarea class="text" contenteditable="true">` +
            text +
            `</textarea> 
            <ul class="pickers">
                <li id="" class="picker red" title="#F44336"></li>
                <li  id="" class="picker blue" title="#2196F3"></li>
                <li id="" class="picker green" title="#4CAF50"></li>
                <li  id="" class="picker yellow" title="#FFEB3B"></li>
            </ul>
        </div>`
        );
    }

    
    $('textarea').on( 'change keyup keydown paste cut click load', function (){
                
        var scroll_height = $(this).get(0).scrollHeight;
        $(this).css('height', scroll_height + 'px');
    });

    $("#sortable1 div div button, #sortable2 div div button").hide();

        $( ".text" ).dblclick(function() {
            var value = $(this).attr('contenteditable');
    
            if (value == 'false') {
                $(this).attr('contenteditable','true').css("backgroundColor", "white");
                    
            }
            else {
                $(this).attr('contenteditable','false').css("backgroundColor", color);;
            }
        });

    // Add new card
    $("input[type=text]").keypress(function (event) {
        if (event.which === 13) {
            let text = $(this).val();
            if (text !== "") {
                $(this).val("");
                $(this)
                    .parent().next(".list-body")
                    .append(card(color, text));
            }
            $("#sortable1 div div button, #sortable2 div div button").hide();
        }
    });

    $("input[type=text]+button").click(function (event) {
        let input = $('input[type=text]');
        if (input.val() !== "") {
            let text = input.val();
            input.val("");
            input
                .parent().next(".list-body")
                .append(card(color, text));
        }
        $("#sortable1 div div button, #sortable2 div div button").hide();
    });

    // Delete card
    $(document).on("click", ".kanban-card > div > button", function () {
        $(this).parent().parent()
            .fadeOut(250, function () {
                $(this).remove();
            });
    });

    // Toggle input field
    $("header").on("click", "button", function () {
        $(this)
            .children()
            .toggleClass("chevron-top chevron-bottom");
        $("input[type=text]").parent().slideToggle();
    });


    //    $('.kanban-card').on("click", function(){
    //        alert('ok');
    //    });

    // Toggle chosen color
    $(".picker").on("click", function () {
        //alert("ok");
        col = $(this).attr('title');
        //alert(color);
        $(this).siblings().removeClass("selected");
        $(this).addClass("selected");
        $(this).parents(".kanban-card").css("backgroundColor", col);
    });

    $(".color").on("click", function () {
        color = $(this).val();
        $(".check").removeClass("check");
        colorBorder();
        $(this)
            .children()
            .addClass("check");
    });

    $(function () {
        $("#sortable1, #sortable2, #sortable4")
            .sortable({
                connectWith: "#sortable2, #sortable4",
                tolerance: "pointer",
                revert: true,
                update: function () {
                    $("#sortable1 div div button, #sortable2 div div button").hide();
                    $("#sortable3 div div button, #sortable4 div div button").show();
                }
            })
            .disableSelection();
    });

    $(function () {
        $("#sortable3, #sortable2")
            .sortable({
                connectWith: "#sortable3",
                cancel:'.text'
            })
            .disableSelection();
    });

    $(function () {
        $("#sortable2")
            .sortable({
                connectWith: "#sortable3, #sortable4",
            })
            .disableSelection();
    });


});
