$(document).ready(function () {
    let color = "#2196F3";
    colorBorder();

    // Render bottom border for input field
    function colorBorder() {
        $("input[type=text]").css("border-bottom", "2px solid" + color + "");
    }

function formatDate() {
  let date = new Date(); 
  let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  let sec = Math.floor(date / 1000); // округлить  до секунд
  let min = Math.floor(date / 60000); // округлить  до минут


  // форматировать дату, с учетом того, что месяцы начинаются с 0
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
            ` + formatDate() +`
            <p/>
            <button>
                <span class="close">&times;</span>
            </button>
            </div>
            <p>` +
            text +
            `</p>            
        </div>`
        );
    }

    // Add new card
    $("input[type=text]").keypress(function (event) {
        if (event.which === 13) {
            let text = $(this).val();
            $(this).val("");
            $(this)
                .next(".list-body")
                .append(card(color, text));
        }
    });

    // Delete card
    $(document).on("click", ".kanban-card > div > button", function () {
        $(this)
            .parent().parent()
            .fadeOut(250, function () {
                $(this).remove();
            });
    });

    // Toggle input field
    $("header").on("click", "button", function () {
        $(this)
            .children()
            .toggleClass("chevron-top chevron-bottom");
        $("input[type=text]").slideToggle();
    });

    // Toggle chosen color
    $(".color").on("click", function () {
        color = $(this).val();
        $(".check").removeClass("check");
        colorBorder();
        $(this)
            .children()
            .addClass("check");
    });

    $(function () {
        $("#sortable1, #sortable2, #sortable3")
            .sortable({
                connectWith: ".list-body"
            })
            .disableSelection();
    });
});
