console.log("browser Js ishga tushdi");
const createField=document.getElementById("create-field")
function itemTemplate(item){
    return `<li
              class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
            >
            <span class="item-text">${item.reja}</span>
            <div>
              <button class="edit-me btn btn-secondary btn-sm mr-1" data-id="${item._id}">
                O'zgartirish
              </button>
              <button class="delete-me btn btn-danger btn-sm" data-id="${item._id}">O'chirish</button>
             
            </div>
            
            </li>`
}

document.getElementById("create-form")
.addEventListener("submit",function(e){
    e.preventDefault();

    axios
    .post("/create_item",{reja:createField.value})
    .then(response=>{
        document.getElementById("item-list")
        .insertAdjacentHTML("beforeend",itemTemplate(response.data));
        createField.value="";
        createField.focus();
        

    }).catch(err=>{
        console.log("Iltimos qaytadan urinib ko'ring!")

    })
    
})

document.addEventListener("click",function(e){
    console.log(e.target);
    if(e.target.classList.contains("delete-me")){
        if(confirm("Aniq o'chirmoqchimisiz?")){
            axios
            .post("/delete-item",{ id: e.target.getAttribute("data-id")})
            .then(response=>{
                console.log(response.data);
                e.target.parentElement.parentElement.remove();

            }).catch(err=>{
                console.log("Iltimos qaytadan xarakat qiling!")

            })
        }
    }
})
