/*Home and Auto Slider Section*/
let autoSlideIndex = 0;
showAutoSlides();

function showAutoSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides_auto");
  let dots = document.getElementsByClassName("auto_dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  autoSlideIndex++;
  if (autoSlideIndex > slides.length) {autoSlideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[autoSlideIndex-1].style.display = "block";  
  dots[autoSlideIndex-1].className += " active";
  setTimeout(showAutoSlides, 5000); // Change image every 2 seconds
}

var slideIndex = 1;
        var Description = [

            "<span class='km'> Name: Kim Minji (김민지) <br> Birthday: May 7, 2004 <br> Height: 169 cm (5’6.5”) <br> Nationality: Korean Color: Blue <br> Emoji: 🐻 <br> </span>",
            "<span class= 'dm'> Name: Danielle June Marsh (모지혜) <br> Birthday: April 11, 2005 <br> Height: 165 cm (5’5”) <br> Nationality: Korean-Australian <br> Color: Yellow <br> Emoji: 🐶 <br> </span>",
            "<span class='hr'> Name: Haerin (해린) <br> Birthday: May 15, 2006 <br> Height: 164.5 cm (5’5”) <br> Nationality: Korean <br> Color: Green <br> Emoji: 🐱 <br> </span>",
            "<span class='hy'> Name: Hyein (혜인) <br> Birthday: April 21, 2008 <br> Height: 170 cm (5’7”) <br> Nationality: Korean <br> Color: Purple <br> Emoji: 🐣 <br> </span>",
            "<span class='hn'> Name: Hanni (하니) <br> Birthday: October 6, 2004 <br> Height: 161.7 cm (5’3.5”) <br> Nationality: Vietnamese-Australian <br> Color: Pink <br> Emoji: 🐰 <br> ",
        ];

        function showDivs(n) {
            var i;
            var x = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("demo");
            var descText = document.getElementById("image_description");
            
            if (n > x.length) {slideIndex = 1;}
            if (n < 1) {slideIndex = x.length;}
            
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].classList.remove("w3-white");
            }
            
            x[slideIndex-1].style.display = "block";
            dots[slideIndex-1].classList.add("w3-white");
            descText.innerHTML = Description[slideIndex - 1];
        }

        function plusDivs(n) { showDivs(slideIndex += n); }
        function currentDiv(n) { showDivs(slideIndex = n); }
        
        document.addEventListener("DOMContentLoaded", function() { showDivs(slideIndex); });