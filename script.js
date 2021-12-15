function getPilihanKomputer() {
    let comp = Math.round(Math.random() * 2) + 1;

    switch (comp) {
        case 1:
            return "gajah";
        case 2:
            return "orang";
        default:
            return "semut";
    }
}

let getHasil = (comp, player) => {
    if (player == comp) return "SERI!";
    if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
    if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
    if (player == "semut") return comp == "orang" ? "KALAH!" : "MENANG!";
};

function acakGambar() {
    const imgComputer = document.querySelector(".img-komputer");
    const gambar = ["gajah", "semut", "orang"];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(() => {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute("src", `img/${gambar[i++]}.png`);
        if (i == gambar.length) i = 0;
    }, 100);
}

let menang = 0;
let kalah = 0;

const pilihan = document.querySelectorAll("li img");
pilihan.forEach((e) => {
    e.addEventListener("click", () => {
        const pKomputer = getPilihanKomputer();
        const pPlayer = e.className;
        const hasil = getHasil(pKomputer, pPlayer);
        const info = document.querySelector(".info");
        const imgKomputer = document.querySelector(".img-komputer");
        const winScore = document.querySelector(".win-score");
        const loseScore = document.querySelector(".lose-score");

        acakGambar();

        setTimeout(() => {
            info.innerHTML = hasil;
            if (hasil == "MENANG!") {
                menang++;
                winScore.innerHTML = menang;
            } else if (hasil == "KALAH!") {
                kalah++;
                loseScore.innerHTML = kalah;
            }
            imgKomputer.setAttribute("src", `img/${pKomputer}.png`);
        }, 1000);
    });
});
