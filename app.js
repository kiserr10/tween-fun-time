$(document).ready(function() {

	$(".box-3").click(function(){
		$(".box-3").addClass("box-4");
	});

	const boxOne = document.querySelector(".box-1");
	const boxTwo = document.querySelector(".box-2");
	const boxThree = document.querySelector(".box-3");
	const boxFour = document.querySelector(".box-4");


	boxTwo.addEventListener("click", function(){
		boxFour.classList.add("red");
	});

	boxFour.addEventListener("click", function(){
		boxFour.classList.remove("red");
	});


	TweenMax.from(".box-1", 2.5, {opacity: 0, y: 200, rotation: 45});
	TweenMax.staggerFrom(".box-2", 4, {opacity: 0, y: 200, delay: 0.2, rotation: 45}, 0.5);
	TweenMax.from(".box-3", 3, {opacity: 0, y: 200, x: 300, delay: 0.4});
	TweenMax.from(".box-4", 3.1, {opacity: 0, y: 100, x: -500, delay: 0.6});
	Draggable.create(".box-4");
	Draggable.create(".box-1", {
		throwprops: true,
		type: 'rotation'
	});
});
