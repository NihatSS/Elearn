let showMoreBtn = document.querySelector(".show-more");

showMoreBtn.addEventListener("click", async function () {
    let skip = parseInt(this.previousElementSibling.children.length);
    let respone = await getDataAsync(skip);
})


async function getDataAsync(skip) {
    let response = await fetch(`work/showmore?skip=${skip}`);
    let result = await response.text();
    return result;
}