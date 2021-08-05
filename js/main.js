var navbarSearchbar, productGrid;

function activeProductGrid() {
    productGrid = new Glide(".product-grid", {
        type: "carousel",
        perView: 4,
        breakpoints: {
            1080: {
                perView: 3
            },

            840: {
                perView: 2
            },
            440: {
                perView: 1
            }
        }
    });
    productGrid.mount();
}

navbarSearchbar = document.querySelector("#navbar-searchbar");

function pageSearch(e) {
    if (navbarSearchbar.classList.contains("d-none")) {
        navbarSearchbar.classList.add("d-block");
        navbarSearchbar.classList.remove("d-none");
    }
}
function closeSearch(e) {
    if (navbarSearchbar.classList.contains("d-block")) {
        navbarSearchbar.classList.remove("d-block");
        navbarSearchbar.classList.add("d-none");
    }
}
