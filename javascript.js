const allproductbox = document.getElementById("allproductbox");
const topbox = document.getElementById("topbox");
const bottomsbox = document.getElementById("bottomsbox");
const footwear = document.getElementById("footwear");
const accessoriesbox = document.getElementById("accessoriesbox");
const menu = document.getElementById("menu");
const products = document.getElementById("products");
const slide = document.getElementById("slide");
const container = document.getElementById("container");
const sidemenu = document.getElementById("sidemenu");
const boxL = document.getElementById("boxL");
const boxM = document.getElementById("boxM");
const slideTwo = document.getElementById("slideTwo");
const slideThree = document.getElementById("slideThree");
const sizeText = document.getElementById("sizeText");
const slideFour = document.getElementById("slideFour");
const slideFive = document.getElementById("slideFive");
const secondSizeM = document.getElementById("secondSizeM");
const secondSizeL = document.getElementById("secondSizeL");
const secondSizeXL = document.getElementById("secondSizeXL");
const secondSizeXXL = document.getElementById("secondSizeXXL");
const secondSizeXXXL = document.getElementById("secondSizeXXXL");
const slideSix = document.getElementById("slideSix");
const slideSeven = document.getElementById("slideSeven");
const slideEight = document.getElementById("slideEight");
const slideNine = document.getElementById("slideNine");
const slideTen = document.getElementById("slideTen");
const slideEleven = document.getElementById("slideEleven");
const slideTwelve = document.getElementById("slideTwelve");
const signupbox = document.getElementById("signupbox");
const opacitybox = document.getElementById("opacitybox");
const centerbox = document.getElementById("centerbox");




const images = ["https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755705438%2Furban-authentic%2Fproducts%2Fixyg5c6k3voqswba2v95.png&w=640&q=75", "https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755705836%2Furban-authentic%2Fproducts%2Fkialopsbrvlpd4owkhnv.png&w=640&q=75", "https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755705856%2Furban-authentic%2Fproducts%2Fcyzgzsiie5ezou7hp3ng.png&w=640&q=75"];
let index = 0;

function showImage() {
document.getElementById("slide").src =images[index];
}

function next() {
  index = (index + 1) % images.length;
  showImage()
}
function prev() {
  index = (index - 1 + images.length) % images.length;
  showImage()
}

 const imagesTwo = [
  "https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755563592%2Furban-authentic%2Fproducts%2Fulnx9ayog9aq9ggcyjod.png&w=640&q=75",
  "https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755563603%2Furban-authentic%2Fproducts%2Frgotebpyvhvoos3564hh.png&w=640&q=75"
 ]
 let indexTwo = 0;
function showImageTwo() {
  document.getElementById("slideTwo").src = imagesTwo[indexTwo];
}
function nextImageTwo() {
  indexTwo = (indexTwo + 1) % imagesTwo.length;
  showImageTwo()
}
function prevImageTwo() {
  indexTwo = (indexTwo - 1 + imagesTwo.length) % imagesTwo.length;
  showImageTwo()
}

const imagesThree = [
  "https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755414710%2Furban-authentic%2Fproducts%2Ff0liz6mg3mco9wwjwvmt.png&w=640&q=75",
  "https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755430322%2Furban-authentic%2Fproducts%2Fxm5ba659kuoxhkvdjyqy.png&w=640&q=75"
 ]
 let indexThree = 0;
function showImageThree() {
  document.getElementById("slideThree").src = imagesThree[indexThree];
}
function nextImageThree() {
  indexThree = (indexThree + 1) % imagesThree.length;
  showImageThree()
}
function prevImageThree() {
  indexThree = (indexThree - 1 + imagesThree.length) % imagesThree.length;
  showImageThree()
}

const imagesFour = [
  "https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755359628%2Furban-authentic%2Fproducts%2Fyzewspqa0o2uxcuhxvfv.png&w=640&q=75",
  "https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755430467%2Furban-authentic%2Fproducts%2Fq2hmh7zkh1szgwc2va3e.png&w=640&q=75"
]
let indexFour = 0;
function showImageFour() {
  document.getElementById("slideFour").src = imagesFour[indexFour];
}
function nextImageFour() {
  indexFour = (indexFour + 1) % imagesFour.length;
  showImageFour()
}
function prevImageFour() {
  indexFour = (indexFour - 1 + imagesFour.length) % imagesFour.length;
  showImageFour()
};

const imagesFive = [
  "https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755357912%2Furban-authentic%2Fproducts%2Fkid00swwekncmz1u1vfp.png&w=640&q=75",
  "https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755357912%2Furban-authentic%2Fproducts%2Fla2erva5yajt1fzdjefr.png&w=640&q=75",
  "https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755358899%2Furban-authentic%2Fproducts%2Fz8g7uv7vsh6jqwafbidz.jpg&w=640&q=75",
  "https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755358898%2Furban-authentic%2Fproducts%2Fztsvdpxcscqrjvzabyb7.jpg&w=640&q=75"
]
let indexFive = 0;
function showImageFive() {
  document.getElementById("slideFive").src = imagesFive[indexFive];
}
function nextImageFive() {
  indexFive = (indexFive + 1) % imagesFive.length;
  showImageFive()
}
function prevImageFive() {
  indexFive = (indexFive - 1 + imagesFive) % imagesFive.length;
  showImageFive()
}

const imagesSix = [
  "https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755357294%2Furban-authentic%2Fproducts%2Fkeso2dtq9lzauqea9bqd.png&w=640&q=75",
  "https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755357294%2Furban-authentic%2Fproducts%2Fqsjylqpu2pkq721g7tao.png&w=640&q=75"
]
let indexSix = 0;
function showImageSix() {
  document.getElementById("slideSix").src = imagesSix[indexSix];
} 
function nextImageSix() {
  indexSix = (indexSix + 1) % imagesSix.length;
  showImageSix()
}
function prevImageSix() {
  indexSix = (indexSix - 1 + imagesSix.length) % imagesSix.length;
  showImageSix()
}

const imagesSeven = [
"https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755259616%2Furban-authentic%2Fproducts%2Fduxlxswxuqzyrjcwbhrd.png&w=640&q=75",
"https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755357044%2Furban-authentic%2Fproducts%2Fsm7erqeq5lakkp7x2ibj.png&w=640&q=75"
]
let indexSeven = 0;

function showImageSeven() {
  document.getElementById("slideSeven").src = imagesSeven[indexSeven];
}
function nextImageSeven() {
  indexSeven = (indexSeven + 1) % imagesSeven.length;
  showImageSeven()
}
function prevImageSeven() {
  indexSeven = (indexSeven - 1 + imagesSeven) % imagesSeven.length
}

const imagesEight = [
"https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755717620%2Furban-authentic%2Fproducts%2Fhdopwshcudckoox7nlkw.png&w=640&q=75",
"https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755717621%2Furban-authentic%2Fproducts%2Fp3ziu24zreaizw5xkjah.png&w=640&q=75"
]
let indexEight = 0;
function showImageEight() {
  document.getElementById("slideEight").src = imagesEight[indexEight];
} 
function nextImageEight() {
  indexEight = (indexEight + 1) % imagesEight.length;
  showImageEight()
} 
function prevImageEight() { 
  indexEight = (indexEight - 1 + imagesEight.length) % imagesEight.length;
  showImageEight()
}

const imagesNine = [
  "https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755251860%2Furban-authentic%2Fproducts%2Fhv1ve3dj6nofu4r8cbjl.png&w=640&q=75",
  "https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755251860%2Furban-authentic%2Fproducts%2Fofbhgw7cfo639fva5bvb.png&w=640&q=75"
]
let indexNine = 0;
function showImageNine() {
  document.getElementById("slideNine").src = imagesNine[indexNine];
}
function nextImageNine() {
  indexNine = (indexNine + 1) % imagesNine.length;
  showImageNine()
}
function prevImageNine() {
  indexNine = (indexNine - 1 + imagesNine.length) % imagesNine.length;
  showImageNine()
}

const imagesTen = [
  "https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755252840%2Furban-authentic%2Fproducts%2Fofhm87trzakvqdzsslig.png&w=640&q=75",
  "https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755252840%2Furban-authentic%2Fproducts%2Fvg0w7kthvvhnvtz0robj.png&w=640&q=75"
]
let indexTen = 0;
function showImageTen() {
  document.getElementById("slideTen").src = imagesTen[indexTen];
}
function nextImageTen() {
  indexTen = (indexTen + 1) % imagesTen.length;
  showImageTen()
}
function prevImageTen() {
  indexTen = (indexTen - 1 + imagesTen.length) % imagesTen.length;
  showImageTen()
}

const imagesEleven = [
  "https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755263506%2Furban-authentic%2Fproducts%2Fmadnhnrn1m0ppsbopivc.png&w=640&q=75",
  "https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755263506%2Furban-authentic%2Fproducts%2Fhspc0188n83gl6njiacr.png&w=640&q=75"
]
let indexEleven = 0;
function showImageEleven() {
  document.getElementById("slideEleven").src = imagesEleven[indexEleven];
}
function nextImageEleven() {
  indexEleven = (indexEleven + 1) % imagesEleven.length;
  showImageEleven()
}
function prevImageEleven() {
  indexEleven = (indexEleven - 1 + imagesEleven.length) % imagesEleven.length;
  showImageEleven()
}

const imagesTwelve = [
  "https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755330844%2Furban-authentic%2Fproducts%2Fxx36qyhxjidjn1njeujx.png&w=640&q=75",
  "https://www.urbanauthentic.store/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspviunw5%2Fimage%2Fupload%2Fv1755330845%2Furban-authentic%2Fproducts%2Fvan9yowplyquwzr0cbo5.png&w=640&q=75"
]
let indexTwelve = 0;
function showImageTwelve() {
  document.getElementById("slideTwelve").src = imagesTwelve[indexTwelve];
}
function nextImageTwelve() {
  indexTwelve = (indexTwelve + 1) % imagesTwelve.length;
  showImageTwelve()
}
function prevImageTwelve() {
  indexTwelve = (indexTwelve - 1 + imagesTwelve.length) % imagesTwelve.length;
  showImageTwelve()
}


function allProducts() {
   document.getElementById("allproductbox").style.display = "grid";
   document.getElementById("topbox").style.display = "none";
   document.getElementById("footwear").style.display = "none";
   document.getElementById("bottomsbox").style.display = "none";
   document.getElementById("accessoriesbox").style.display = "none";
   document.getElementById("sidemenu").style.display = "none";
};

function tops() {
  document.getElementById("allproductbox").style.display = "none";
  document.getElementById("topbox").style.display = "grid";
   document.getElementById("footwear").style.display = "none";
   document.getElementById("bottomsbox").style.display = "none";
   document.getElementById("accessoriesbox").style.display = "none";
  document.getElementById("sidemenu").style.display = "none"; 
    document.body.style.overflow = "scroll";
};

function bottoms() {
 document.getElementById("allproductbox").style.display = "none";
   document.getElementById("topbox").style.display = "none";
   document.getElementById("footwear").style.display = "none";
   document.getElementById("bottomsbox").style.display = "grid";
   document.getElementById("accessoriesbox").style.display = "none";
  document.getElementById("sidemenu").style.display = "none";
    document.body.style.overflow = "scroll";
};

function footWear() {
 document.getElementById("allproductbox").style.display = "none";
   document.getElementById("topbox").style.display = "none";
   document.getElementById("footwear").style.display = "grid";
   document.getElementById("bottomsbox").style.display = "none";
   document.getElementById("accessoriesbox").style.display = "none";
  document.getElementById("sidemenu").style.display = "none"; 
    document.body.style.overflow = "scroll";
};

function accessories() {
 document.getElementById("allproductbox").style.display = "none";
   document.getElementById("topbox").style.display = "none";
   document.getElementById("footwear").style.display = "none";
   document.getElementById("bottomsbox").style.display = "none";
   document.getElementById("accessoriesbox").style.display = "grid";
  document.getElementById("sidemenu").style.display = "none"; 
   document.body.style.overflow = "scroll";
};

function openMenu() {
document.getElementById("sidemenu").style.display = "grid";
document.body.style.overflow = "hidden";
}
function closeMenu() {
  document.getElementById("sidemenu").style.display = "none";
  document.body.style.overflow = "scroll";
}
function sizeL() {
document.getElementById("boxL").style.border = "1px solid red";
document.getElementById("boxM").style.border = "1px solid grey";
}
function sizeM() {
document.getElementById("boxM").style.border = "1px solid red";
document.getElementById("boxL").style.border = "1px solid grey";
}
function oneSize() {
  document.getElementById("boxM").style.border = "1px solid red";
  document.getElementById("sizeText").style.color = "red";
}
function showM() {
  document.getElementById("secondSizeM").style.border = "1px solid red";
    document.getElementById("secondSizeM").style.color = "red";
    document.getElementById("secondSizeL").style.border = "1px solid grey";
       document.getElementById("secondSizeL").style.color = "white";
        document.getElementById("secondSizeXL").style.border = "1px solid grey";
  document.getElementById("secondSizeXL").style.color = "white";
   document.getElementById("secondSizeXXL").style.border = "1px solid grey";
  document.getElementById("secondSizeXXL").style.color = "white";
    document.getElementById("secondSizeXXXL").style.border = "1px solid grey";
  document.getElementById("secondSizeXXXL").style.color = "white";
}
function showL() {
    document.getElementById("secondSizeL").style.border = "1px solid red";
    document.getElementById("secondSizeL").style.color = "red";
    document.getElementById("secondSizeM").style.border = "1px solid grey";
    document.getElementById("secondSizeM").style.color = "white";
           document.getElementById("secondSizeXL").style.border = "1px solid grey";
  document.getElementById("secondSizeXL").style.color = "white";
    document.getElementById("secondSizeXXL").style.border = "1px solid grey";
  document.getElementById("secondSizeXXL").style.color = "white";
    document.getElementById("secondSizeXXXL").style.border = "1px solid grey";
  document.getElementById("secondSizeXXXL").style.color = "white";
}
function showXL() {
  document.getElementById("secondSizeXL").style.border = "1px solid red";
  document.getElementById("secondSizeXL").style.color = "red";
    document.getElementById("secondSizeL").style.border = "1px solid grey";
    document.getElementById("secondSizeL").style.color = "white";
       document.getElementById("secondSizeM").style.border = "1px solid grey";
    document.getElementById("secondSizeM").style.color = "white";
      document.getElementById("secondSizeXXL").style.border = "1px solid grey";
  document.getElementById("secondSizeXXL").style.color = "white";
    document.getElementById("secondSizeXXXL").style.border = "1px solid grey";
  document.getElementById("secondSizeXXXL").style.color = "white";
}
function showXXL() {
  document.getElementById("secondSizeXXL").style.border = "1px solid red";
  document.getElementById("secondSizeXXL").style.color = "red";
   document.getElementById("secondSizeL").style.border = "1px solid grey";
    document.getElementById("secondSizeL").style.color = "white";
       document.getElementById("secondSizeM").style.border = "1px solid grey";
    document.getElementById("secondSizeM").style.color = "white";
     document.getElementById("secondSizeXL").style.border = "1px solid grey";
  document.getElementById("secondSizeXL").style.color = "white";
   document.getElementById("secondSizeXXXL").style.border = "1px solid grey";
  document.getElementById("secondSizeXXXL").style.color = "white";
}
function showXXXL() {
  document.getElementById("secondSizeXXXL").style.border = "1px solid red";
  document.getElementById("secondSizeXXXL").style.color = "red";
  document.getElementById("secondSizeXXL").style.border = "1px solid grey";
  document.getElementById("secondSizeXXL").style.color = "white";
  document.getElementById("secondSizeXL").style.border = "1px solid grey";
  document.getElementById("secondSizeXL").style.color = "white";
  document.getElementById("secondSizeL").style.border = "1px solid grey";
  document.getElementById("secondSizeL").style.color = "white";
  document.getElementById("secondSizeM").style.border = "1px solid grey";
  document.getElementById("secondSizeM").style.color = "white";
}

const allBackButtons = document.querySelectorAll('.back-button');


for(button of allBackButtons) {
  button.addEventListener('click', () => {
    window.history.back()
  });
}
function openSignin() {
  document.getElementById("signin").style.display = "block";
  document.getElementById("signup").style.display = "none";
    

}
function openSignup() {
  document.getElementById("signup").style.display = "block";
  document.getElementById("signin").style.display = "none"; 
}
function closeSignBox() {
 document.getElementById("signupbox").style.display = "none";
 document.getElementById("opacitybox").style.display = "none";
    document.getElementById("centerbox").style.display = "none";
      document.body.style.overflow = "scroll";
}
function openSignBox() {
   document.getElementById("signupbox").style.display = "block";
   document.getElementById("opacitybox").style.display = "block";
   document.getElementById("centerbox").style.display = "flex";
     document.getElementById("sidemenu").style.display = "none"; 
    document.body.style.overflow = "hidden";
}
