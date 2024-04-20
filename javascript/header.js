const headerHTML = `<header class="section-navbar">
<section class="top-txt">
  <div class="head container">
    <div class="head_txt">
      <p>Free Shipping, 30-day return or refund gurantee.</p>
    </div>
    <div class="sign_in_up">
      <a href="#">SIGN IN</a>
      <a href="#">SIGN UP</a>
    </div>
  </div>
</section>

     <div class="container">
      <div class="navbar-brand">
        <a href="./index.html">
          <img src="./public/images/log2.png" 
          alt="Tushar Ecommerce Website"
          class="logo"
          width="80%"
          height="auto"
          >
        </a>
      </div>

     <i class="fas fa-bars" id="toggleIcon" onclick="showMenuBar()"></i>

      <div class="navbar">
        <ul>
          <li class="nav-item">
            <a href="./index.html" class="nav-link">Home</a>
          </li>
        
          <li class="nav-item">
            <a href="./about.html" class="nav-link">About</a>
          </li>
          
          <li class="nav-item">
            <a href="./products.html" class="nav-link">Products</a>
          </li>

          <li class="nav-item">
            <a href="./contact.html" class="nav-link">Contact</a>
          </li>

           <li class="nav-item">
              <a href="./addToCart.html" class="nav-lin add-to-cart-button" id="cartValue">
              <i class="fas fa-shopping-cart"></i>
              </a>
           </li>

        </ul>
      </div>
     </div>

     <div class="menu">
      <ul>
        <li class="nav-item">
          <a href="./index.html" class="nav-link" onclick="showMenuBar()">Home</a>
        </li>
      
        <li class="nav-item">
          <a href="./about.html" class="nav-link" onclick="showMenuBar()">About</a>
        </li>
        
        <li class="nav-item">
          <a href="./products.html" class="nav-link" onclick="showMenuBar()">Products</a>
        </li>

        <li class="nav-item">
          <a href="./contact.html" class="nav-link" onclick="showMenuBar()">Contact</a>
        </li>

         <li class="nav-item">
            <a href="./addToCart.html" class="nav-lin add-to-cart-button" id="cartValue" onclick="showMenuBar()">
                <i class="fas fa-shopping-cart"></i>
                <span>Cart</span>
            </a>
         </li>

      </ul>
    </div>

</header>`;

const headerElem = document.querySelector(".section-navbar");
headerElem.insertAdjacentHTML("afterbegin", headerHTML);

