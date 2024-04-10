const buttonCard = document.querySelectorAll(".button-card");
buttonCard.forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    const elRect = el.getBoundingClientRect();
    const x = e.clientX - elRect.x;
    const y = e.clientY - elRect.y;
    const midCardWidth = elRect.width / 2;
    const midCardHeight = elRect.height / 2;
    const angleY = -(x - midCardWidth) / 3;
    const angleX = (y - midCardHeight) / 3;
    const glowX = (x / elRect.width) * 100;
    const glowY = (y / elRect.height) * 100;

    el.children[0].style.transform = `rotateY(${angleY}deg) rotateX(${angleX}deg) scale(1.2)`;
    el.children[1].style.transform = `rotateY(${angleY}deg) rotateX(${angleX}deg) scale(1.2)`;
    el.children[1].style.background = `radial-gradient(circle at ${glowY}% ${glowX}%, rgb(184, 196, 211), transparent);`;
  });
  el.addEventListener("mouseenter", () => {
    const siblings = [...el.parentNode.children].filter((node) => node !== el);
    siblings.forEach((sibling) => (sibling.style.opacity = 0.75));
  });
  el.addEventListener("mouseleave", () => {
    el.children[0].style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
    el.children[1].style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
    const siblings = [...el.parentNode.children].filter((node) => node !== el);
    siblings.forEach((sibling) => (sibling.style.opacity = 1));
  });
});
