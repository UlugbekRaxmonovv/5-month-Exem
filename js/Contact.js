const navbar = document.querySelector(".nav-list")
const Menu = document.querySelector(".menu")

Menu.addEventListener("click", ()=>{
    navbar.classList.toggle('show')
})
const Api_Url = 'https://dummyjson.com/products';
const hammasi =document.querySelector('.hammasi-nav')
async function fitDate(api){
 let path = new URLSearchParams(window.location.search)
    let  id = path.get('id')
    let gitDate = await fetch(`${api}/${id}`)
    gitDate
    .json()
    .then(ris  => creadtData(ris))
    .catch(arr =>console.log( arr))

}
fitDate(Api_Url)


function creadtData(data){
    hammasi.innerHTML =`
    <div class="container">
<div class="hammasi-nav-link">
    <div class="hammasi-nav-itim">
        <div class="img">
            <img src="../img/img.png" alt="">
        </div>
        <div class="img">
            <img src="../img/img.png" alt="">
        </div>

        <div class="img">
            <img src="../img/img.png" alt="">
        </div>
        <div class="img">
            <img src="../img/img.png" alt="">
        </div>
    </div>

    <div class="imgi">
        <img src="${data.thumbnail}" alt="">
    </div>
   <div class="column">
    <div class="imgagi">
        <h1>Havic HV G-92 Gamepad</h1>
        <div class="all">
         <div class="all1">
             <img src="../img/yuluz.png" alt="">
         </div>
        
         <div class="all1">
             <p>(150 Reviews)</p>
          </div>
          <div class="all1">
             <p class="box">In Stock</p>
          </div>
 
        </div>
        <p>$192.00</p>
        <div class="pr-1">
            <p>
            ${data.description}
            </p>
        </div>
        <div class="oni">

        </div>

        <div class="logo">
            <div class="logo-itim">
                <p>Colours:</p>
            </div>
            <div class="logo-itim">
               <img src="../img/oira.png" alt="">
            </div>
            <div class="logo-itim">
                <img src="../img/oira1.png" alt="">
            </div>
        </div>
        <img src="../img/sizi.png" alt="">
        

        <div class="kontainir">
            <div class="kontainir-all">
                <img src="../img/kon.png" alt="">
            </div>
            <div class="kontainir-all">
                <div class="pr-2">
                   <p>Buy Now</p>
                </div>
               </div>
               <div class="kontainir-all">
                <div class="pr-3">
                  <img src="../img/yurak.png" alt="">
                </div>
               </div>
        </div>
        <div class="hiro">
            <div class="hiro-nav">
                <div class="hiro-list">
                    <img src="../img/mashina.png" alt="">
                </div>
                <div class="hiro-list">
                    <h1>Free Delivery</h1>
                    <p>Enter your postal code for Delivery Availability</p>
                </div>
                
               </div>
           <div class="two"></div>

           <div class="hiro-nav">
            <div class="hiro-list">
                <img src="../img/ayla.png" alt="">
            </div>
            <div class="hiro-list">
                <h1>Return Delivery</h1>
                <p>Enter your postal code for Delivery Availability</p>
            </div>
            
           </div>

        </div>
     </div>
   </div>
</div>
</div>
    `
}
