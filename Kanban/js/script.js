$(document).ready(function () {
	let color = "#2196F3";
	colorBorder();

	// Render bottom border for input field
	function colorBorder() {
		$("input[type=text]").css({
			border: "2px solid" + color + "",
			borderRadius: "5px",
			color: color
		});
	}

	// Define card
	function card(color, text) {
		return (
			`<div class="kanban-card d-flex flex-column" style="background-color:` +
			color +
			`">
            <p>` +
			text +
			`</p>
            <button>
                <span class="close">&times</span>
            </button>
        </div>`
		);
	}

	// Add new card
	$("input[type=text]").keypress(function (event) {
		if (event.which === 13) {
			let text = $(this).val();
			if(text != ""){
				$(this).val("");
				$(this)
					.next(".list-body")
					.append(card(color, text));
			}else alert("test");
		}
	});

	// Delete card
	$(document).on("click", ".kanban-card > button", function () {
		$(this)
			.parent()
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
