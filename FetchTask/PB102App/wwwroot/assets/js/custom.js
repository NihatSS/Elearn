let showMoreBtn = document.querySelector(".show-more");
const workList = document.querySelector(".work-list");
showMoreBtn.addEventListener("click", async function () {
    let skip = document.querySelectorAll(".work").length;
    let response = await getDataAsync(skip);
    console.log(response);

    if (response == "Empty") {
        showMoreBtn.classList.add("d-none");
    }else {
        workList.insertAdjacentHTML('beforeend', response);
    }
})


async function getDataAsync(skip) {
    let response = await fetch(`work/showmore?skip=${skip}`);
    let result = await response.text();
    return result;
}