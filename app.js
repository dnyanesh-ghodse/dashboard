const list = document.getElementById("list");
const searchQuery = document.getElementById("search_input");
const searchBtn = document.getElementById("search")

const project_name  = document.getElementById("project_name");
const project_status = document.getElementById("status");
const date = document.getElementById("date");
const progress = document.getElementById("progress");
const modalClose = document.getElementById("close");
const add = document.getElementById("add");
const addbtn = document.getElementById("addbtn");

const total = document.getElementById("total");
const active = document.getElementById("active");
const inactive = document.getElementById("inactive");

const url = "https://gorest.co.in/public/v1/users"

fetch(url).then(res => res.json()).then(data => {
   const html =  data.data.map(item => `
    <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.status}</td>
        <td>${item.email}</td>
        <td>${item.gender}
        </td>
        <td>
            <div class="action_btn">
                <span class="edit">&#128394</span>
                <span class="delete">&#128465</span>
            </div>
        </td>
    </tr>
`)
    let active = data.data.filter(item => item.status === "active").length;
    total.innerHTML = html.length;
    active.innerHTML = active
    inactive.innerHTML = html.length - active;

    list.insertAdjacentHTML("afterend",html);

})

function closeModal() {
    const modal =  document.getElementById("form_modal");
    modal.style.display = "none";
}
modalClose.addEventListener('click', closeModal);

addbtn.addEventListener('click',() => {
    const modal =  document.getElementById("form_modal");
    modal.style.display = "flex";
})

add.addEventListener("click",(e) => {

})
