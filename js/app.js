import sublinks from "./data.js";

// This js file display submenu items
const subMenu = document.querySelector(".submenu");
const hero = document.querySelector(".hero");
const linkBtns = [...document.querySelectorAll(".link-btn")];

linkBtns.forEach((btn) => {
  btn.addEventListener("mouseover", function (e) {
    const text = e.currentTarget.textContent;
    //get top left right bottom position
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const bottom = tempBtn.bottom + 20;
    const center = (tempBtn.left + tempBtn.right) / 2;

    // check if {page} property in data.js == current mouse hover item
    const tempPage = sublinks.find(({ page }) => page === text);

    if (tempPage) {
      const { page, links } = tempPage;
      subMenu.classList.add("show");
      subMenu.style.left = `${center}px`;
      subMenu.style.top = `${bottom}px`;

      subMenu.innerHTML = `
      <section> 
      <h4>${page}</h4>
      <div class="submenu-center col-2">
      ${links
        .map((link) => {
          return `<a href="${link.url}"><i class="${link.icon}"></i>
          ${link.label}</a>`;
        })
        .join("")}
      </div>
      </section>
      `;
    }
  });
});

// hover other places submenu cannot display
hero.addEventListener("mouseover", function () {
  subMenu.classList.remove("show");
});
