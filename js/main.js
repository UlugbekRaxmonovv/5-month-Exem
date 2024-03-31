//////////// Menu /////////////
const navbar = document.querySelector(".nav-list")
const Menu = document.querySelector(".menu")

Menu.addEventListener("click", ()=>{
    navbar.classList.toggle('show')
})


/////////////Api ///////////////
const Creat =document.querySelector('.all')
const loading =document.querySelector('.all1')
const Api_Url = 'https://dummyjson.com/products'

async function good(api){
    let data = await fetch(api)
    data
    .json()
    .then(ris=> card(ris))
    .catch(arr => console.log(arr))
    .finally(()=>{
        loader.style.display = "none"  
    })
}
good(Api_Url)


function card(son){
    let fragmit = document.createDocumentFragment()
    son.products.slice(0,8).forEach(el =>{
        // console.log(el);
        const card = document.createElement('div')
        card.classList.add('all-list')
        card.innerHTML = 
        `
        <div  data-id=${el.id}>
        <div class="all-list" >
                <div class="Creatcard">
                    <div class="Creatcard-all">
                        <img name="product-image" class="img" src="${el.thumbnail}" alt="">
                       </div>
                       <div class="Creatcard-all">
                        <div class="all">
                            <img src="./img/Fill Heart.png" alt="">
                            
                           </div>
                           <div class="all">
                            <img src="./img/Fill Eye.png" alt="">
                            
                           </div>
                    </div>
    
                </div>
                <div class="btn" style="padding: 10px 10px ; background-color: black; color: white; display: flex; justify-content: center; align-items: center; font-size: 16px; margin-top: -35px; border-radius: 8px;">
                <p>Add To Cart</p>
            </div>
                <div class="Creatlist">
                    <h1>Breed Dry Dog Food</h1>
                  <div class="Creatlist-all">
                    <div class="Creat-all">
                        <p class="teg">${el.rating}</p>
                    </div>
                    <div class="Creat-all">
                        <img src="./img/yul.png" alt="">
                    </div>
                    <div class="Creat-all">
                        <img src="./img/yul.png" alt="">
                    </div>
                    <div class="Creat-all">
                        <img src="./img/yul.png" alt="">
                    </div>
                    <div class="Creat-all">
                        <img src="./img/yul1.png" alt="">
                    </div>
                    <div class="Creat-all">
                      <img src="./img/yul1.png" alt="">
                    </div>
                    <div class="Creat-all">
                        <p>(${el.stock})</p>
                  </div>
             
                </div>
              </div>
            </div>
            </div>
        
        `
        fragmit.appendChild(card)
    })
    Creat.appendChild(fragmit)

}

const CreatAll=(id)=>{
 window.open(`/pages/Contact.html?id=${id}`, "_self")

}

Creat.addEventListener('click', (e) =>{
    if(e.target.name = 'product-image'){
        let id = e.target.closest("[data-id]").dataset.id
        CreatAll(id)
    };
})