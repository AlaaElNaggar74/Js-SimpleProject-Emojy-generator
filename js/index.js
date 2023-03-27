let butt = document.getElementById("butt");
let repall = document.getElementById("repall");
let icon = document.getElementById("icon");
let paroara = document.getElementById("paroara");
let arrofemji = [];
async function getdata() {
  let connec = await fetch(
    "https://emoji-api.com/emojis?access_key=77f3d06a4eef4ebd3095fe40117d00f685db9f38"
  );
  let arr = await connec.json();

  for (let i = 0; i < 1000; i++) {
    arrofemji.push({
      emjiface: arr[i].character,
      emjiname: arr[i].unicodeName,
    });
  }
}
getdata();
async function replacce() {
  let i = Math.floor(Math.random() * arrofemji.length);
  butt.innerHTML = arrofemji[i].emjiface;
  butt.style.cssText = "font-size:8rem";
  paroara.innerHTML = arrofemji[i].emjiname;

  console.log();
}
butt.addEventListener("click", replacce);
