const randomMusicLink = document.querySelector(".randomMusicLink");
const randomBG = document.querySelector("#randomBG");
const bg = [
  {
    ashes: {
      src: "assets/img/ashes.jpg",
      color: "240, 63, 3",
    },
    awake: {
      src: "assets/img/awake.jpg",
      color: "161, 97, 87",
    },
    ascend: {
      src: "assets/img/ascend.jpg",
      color: "190, 124, 115",
    },
    fallen_embers: {
      src: "assets/img/fallenembers.jpg",
      color: "252, 252, 252",
    },
    illenium: {
      src: "assets/img/illenium.jpg",
      color: "41, 54, 61",
    },
  },
];

const album = bg[0];
const albumKeys = Object.keys(album);
const randomAlbum = albumKeys[Math.floor(Math.random() * albumKeys.length)];
randomBG.src = album[randomAlbum].src;
randomMusicLink.classList.add(randomAlbum);

const music = [
  "https://youtu.be/AcwyvOkS9BA?si=JGRiT3Xvr76rw53x",
  "https://youtu.be/7gF-05RYizs?si=wZAd37qHCYCr_F_p",
  "https://youtu.be/im8UW6qPZfo?si=k9Dox4SQ72JAdmUX",
  "https://youtu.be/lhVykHuCpyo?si=Um1ufJudtA_tzm52",
  "https://youtu.be/ikND0ib2Eew?si=qNcKuj5MwIOIsrb9",
  "https://youtu.be/acseyuGgfOU?si=3pcxGPFlWVkNe89G",
  "https://youtu.be/0k_iD-BrVrA?si=xjJCIYbzVS7jVKsr",
  "https://youtu.be/m7WS5V_Quwc?si=4mYwPfnpmlUk6i52",
  "https://youtu.be/1UTREei-00w?si=PPXAJtRk5eWonGPZ",
  "https://youtu.be/2N2B7-tRWtg?si=j5nRNESri0CMVx5W",
  "https://youtu.be/reAKz6YK_RQ?si=DB0hIJY4AI2UADvd",
  "https://youtu.be/HZ0uEhlzgDc?si=lwPTAxL1n1_2W45x",
  "https://youtu.be/T8BXr2POzLI?si=vrOiseIVM33Mdoqv",
  "https://youtu.be/Xie0QHQUCEI?si=GLRVdFntIsxobQLM",
  "https://youtu.be/3no252J8-VA?si=5vJq3cZuak4bAhSx",
  "https://youtu.be/BeqGW6QmL6w?si=5_7Dw5Vd1R2T-Cag",
  "https://youtu.be/qPOAIT_g3nM?si=TJA0pL6rDRh7z3vU",
  "https://youtu.be/JCd4KENZyj4?si=dG0rgTA_F1vcv-M0",
  "https://youtu.be/gKCmTOZoLy4?si=61vY7n5-1HlGcDy2",
  "https://youtu.be/ZC28k_xfLrw?si=-vsNZb3R6ZLkcJMw",
  "https://youtu.be/hIhhQLvvUm4?si=Vaoqi-4ezocwqnvJ",
  "https://youtu.be/v11o2z-tsN0?si=tf7YsRy-vtWwLdSy",
  "https://youtu.be/FPfKVL6OIfs?si=SFNZ0nFuo_YgRA4y",
  "https://youtu.be/yqu2BcD4-ow?si=ZjjJjkPWOVrNDo_W",
  "https://youtu.be/XpmeVNxZ-Ks?si=q8ChnD3uXntwbVfk",
  "https://youtu.be/qG6E4r1gumk?si=brATmcCmo519EZoi",
  "https://youtu.be/E4jggmGSoOk?si=aVS8vDOS6Nwybyiq",
  "https://youtu.be/SL_-RqReveA?si=et-QLR77SEfFT0P1",
  "https://youtu.be/zvbDiwV1LWU?si=7PUjKsaHiPkVzo-z",
  "https://youtu.be/Q6jnXN_nTlY?si=K_AFnKWp8LmZo3ts",
  "https://youtu.be/wZv1fTFYGSQ?si=BmoY2lyLo2MpVxXX",
  "https://youtu.be/k6IY8yAkr2o?si=xDPBaWdfUPx9RmYC",
  "https://youtu.be/lzkKzZmRZk8?si=teSQJ9e8O4RVVQEP",
  "https://youtu.be/d1h07IzKsms?si=Ommd7BwD4vbb-85U",
  "https://youtu.be/i4njyKs6bMs?si=Hhi726hT2cbFXiXX",
  "https://youtu.be/mt1mXwBLsSE?si=pCLGQ4vZlzu2m4Oa",
  "https://youtu.be/sw70hBAYA44?si=xP51MSq5uE_fU2tW",
  "https://youtu.be/OcZ4RZZEj7k?si=uhyQ2btjioKSEptX",
  "https://youtu.be/BWorPV9036o?si=CJrmBrW3bnlKkZCx",
  "https://youtu.be/jwyxb1kR_vM?si=BuyjCqSX_5ocu9HW",
  "https://youtu.be/eXERkR0F9eg?si=MfPBkdSjoj_7tAOR",
  "https://youtu.be/NS1hRiUxeeM?si=wBTFPfaqRXAQW_xg",
  "https://youtu.be/jblr8L93FMY?si=aD2fKvzZPA0DkUiC",
  "https://youtu.be/Z2-N8NOGRgs?si=_e6WQrZcvRIUPcPE",
  "https://youtu.be/1P9H6DjxDWw?si=QN4wn7X7ILM1iY0d",
  "https://youtu.be/i04lZVyJwlk?si=PIjFQkXav4lrfsCC",
  "https://youtu.be/YuPkW1re9rQ?si=02BvhgC4kxx5vZFm",
  "https://youtu.be/zD2mi1TAj5s?si=5dIAUS2Hz3nMp8De",
  "https://youtu.be/_EC7Y4wmTiM?si=zuzDuyQ9YHEJQw4H",
  "https://youtu.be/T3Dka3g09cM?si=vbmEVJxdEYYX9lGA",
  "https://youtu.be/KCt5s-Jt1Hs?si=vjdsLykn9NlUlaTt",
  "https://youtu.be/MNDHyBMPxpY?si=Yxa3XcjlWxe9Cmmm",
  "https://youtu.be/_iHo0gHjSkw?si=IWWRgWn1JPDl2h8b",
  "https://youtu.be/Kel7yX-4TYQ?si=tIL54pzkh8SIwZrQ",
  "https://youtu.be/Ap1A1MRc8CY?si=Tc2SDK0F8k32iA5B",
  "https://youtu.be/o-ZmDp8w1cQ?si=u6tiYzF4fdqRkQxs",
  "https://youtu.be/oMwObG9PCys?si=jAsKMSWNEWFmPL4P",
  "https://youtu.be/RKbgkEQQCQY?si=gqC2JFsmPG5AFlf2",
  "https://youtu.be/fG_TXsA2yjk?si=BqfGilecubc6AHxP",
  "https://youtu.be/cYbM4XblhDY?si=l4hC5ba18azx5NrK",
  "https://youtu.be/zEYfunFdIH4?si=FV_MzYp-rdjJU3bX",
  "https://youtu.be/0iLe3alW2j4?si=KND4Ssjgt_cVrM6f",
  "https://youtu.be/_HVUefyskaU?si=9dqhKJJtnHSp1bzJ",
  "https://youtu.be/Ij8D40sG_PY?si=d8VU8f7ZBJiR21VF",
  "https://youtu.be/Dtbj6LTB2HM?si=r4KTY1uFBtbhC_w-",
  "https://youtu.be/tM0dp5gt_tE?si=kJJDAwWK1GNmz6tW",
  "https://youtu.be/MO7d7X79Ycw?si=5xD1UZijb0OSyKSs",
  "https://youtu.be/RiAc6oOhIS0?si=3fD6bwHDmknE3hVE",
  "https://youtu.be/JlwDS2OJT50?si=UpfiyAbSdIwV6py2",
];

function randomMusic() {
  const randomMusic = music[Math.floor(Math.random() * music.length)];
  randomMusicLink.href = randomMusic;
}
