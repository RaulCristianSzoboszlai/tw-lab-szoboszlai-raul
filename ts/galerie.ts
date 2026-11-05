const images: string[] = [
  "../media/g1.jpg",
  "../media/g2.jpg",
  "../media/g3.jpg",
  "../media/g4.jpg",
];


const mainImage = document.getElementById("carousel-image") as HTMLImageElement;

if (!mainImage) throw new Error("Elementul #carousel-image nu a fost gasit!");

let currentIndex = 0;


function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  mainImage.src = images[currentIndex]!;

  mainImage.animate(
    [
      { opacity: 0, transform: "scale(1.05)" },
      { opacity: 1, transform: "scale(1)" },
    ],
    { duration: 500, easing: "ease" }
  );
}

setInterval(showNextImage, 3000);
