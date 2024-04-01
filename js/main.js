
let selectSlid = 1;
let allSlides = 4;

function slides(sliderIndex){
  const sliderImgs = document.getElementById('sliderImg');
  if (sliderIndex < 1 ){
    sliderIndex = allSlides;
  }

  if (sliderIndex > allSlides){
      sliderIndex = 1;
    }
  
  sliderImgs.src = '../images/img' + sliderIndex + '.jpg';
  selectSlid = sliderIndex;
  buttonsPlusOne();
}

function nextSlid() {
  slides(selectSlid + 1);
}

function prevSlid() {
  slides(selectSlid - 1);
}

function buttonsPlusOne() {
  if (selectSlid == 1){
    back.style.display = 'none';
  }
  else {
    back.style.display = 'block';
  }

  if (selectSlid == allSlides){
    forw.style.display = 'none';
  }
  else {
    forw.style.display = 'block';
  }
}

slides(selectSlid);
