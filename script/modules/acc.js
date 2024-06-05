const acc = document.querySelector('#acc');
const items = acc.querySelectorAll(".item");
const itemTitles = acc.querySelectorAll(".item__title");
const itemTextWrappers = acc.querySelectorAll(".item__text-wrapper");

let heightWrapper = 0;

itemTextWrappers.forEach(elem => {
    if (heightWrapper < elem.scrollHeight) {
        heightWrapper = elem.scrollHeight;
    }
});

itemTitles.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        for (let i = 0; i < items.length; i++) {
            if (index === i) {
                itemTextWrappers[i].style.height = 
                    items[i].classList.contains('item_active') ?
                    '' : 
                    `${heightWrapper}px`;
                items[i].classList.toggle('item_active');
            } else {
                items[i].classList.remove('item_active');
                itemTextWrappers[i].style.height = '';
            }
        }
    });
});
