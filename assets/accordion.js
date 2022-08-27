function initAccordion() {
    const accordion = document.getElementById('accordion');
    if (!accordion) {
        return
    }
    const titles = accordion.querySelectorAll('.accordion-title');
    if (!titles) {
        return;
    }
    titles.forEach(title => {
        title.addEventListener("click", (e) => {
            const item = title.closest(".accordion-item")
            console.log(item);
            if (item.classList.contains('expanded')) {
                item.classList.remove('expanded')
            } else {
                item.classList.add('expanded');
            }
        })
    })
}
document.addEventListener('DOMContentLoaded', initAccordion, false);
