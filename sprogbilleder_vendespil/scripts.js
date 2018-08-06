			var flippingTime = 1200;
			var card1 = 0;
			var card2 = 0;
			var flipable = 1;
			$(document).ready(function() {
				$(".card").click(function() {
					if (flipable == 1 && $(this).hasClass('clickable')) {
						if (card1 == 0) {
							card1 = $(this).attr('name');
							flip($(this));
						} else {
							if (card1 == $(this).attr('name')) {
								return;
							} else {
								card2 = $(this).attr('name');
								flip($(this));
								if (card1 == card2 + "x" || card1 + "x" == card2) {
									$("[name='" + card1 + "']").removeClass('clickable');
									$("[name='" + card2 + "']").removeClass('clickable');
									$("[name='" + card1 + "']").animate({
										opacity: .2

									}, 300, function() {
										$( this ).animate({
											opacity: 1

										}, 400);
									});

									$("[name='" + card2 + "']").animate({
										opacity: .2

									}, 300, function() {
										$( this ).animate({
											opacity: 1

										}, 400);
									});

									if (document.getElementsByClassName("clickable").length == 0){
										setTimeout(function() {
											alertBox("Flot, du er færdig med vendespillet.", "Se på tekster og billeder. Giver det mening?<br />I de næste moduler kommer du til at lære mere om:<br />metaforer, sammenligninger og andre typer billedsprog");
										}, 1500);
									}

								} else {

									backflip($("[name='" + card1 + "']"));
									backflip($("[name='" + card2 + "']"));
									resetFlipable();
								};
								card1 = 0;
								card2 = 0;
							}
						}
					}
				});
				$(".btn_help").click(function() {
					alertBox("Hjælp til vendespil", "Du skal matche et lysegrønt kort med et mørkegrønt kort.<br />Bag de lysegrønne brikker er billeder, der illustrerer et sprogligt billede.<br />Bag de mørkegrønne brikker er tekster, der beskriver hvilken type billedsprog, der bruges.")
				});
			});

			function flip(card) {
				$("div.front", card)[0].style.width = "0%"; // Ny måde at kalde kortet der klikkes på på. (Den gamle måde [bedre, men virker ikke i IE], er kommenterert ud.)
				//				document.getElementsByName(card)[0].childNodes[1].childNodes[1].style.width = "0%"
				setTimeout(function() {
					$("div.back", card)[0].style.width = "100%";
					//				document.getElementsByName(card)[0].childNodes[1].childNodes[3].style.width = "100%"
				}, 100);
			};

			function backflip(card) {
				setTimeout(function() {
					$("div.front", card)[0].style.width = "100%";
					//				document.getElementsByName(card)[0].childNodes[1].childNodes[1].style.width = "100%"
				}, flippingTime + 100);
				setTimeout(function() {
					$("div.back", card)[0].style.width = "0%";
					//				document.getElementsByName(card)[0].childNodes[1].childNodes[3].style.width = "0%"
				}, flippingTime);
			};

			function resetFlipable() {
				flipable = 0;
				setTimeout(function() {
					flipable = 1;
				}, flippingTime);
			};
