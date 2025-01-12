const departure_date = document.querySelector("#departure_date");
const return_date = document.querySelector("#return_date");
const today = new Date();
const travel_cabin_class=document.querySelector("#travel_cabin_class");
const travel_selection_box = document.querySelector("#travel_selection_box");
const done_btn = document.querySelector("#done_btn");
const show_class=document.querySelector("#show-class");
const classes=document.querySelectorAll("input[name='classes']");
const num_adults=document.querySelector("#num_adults");
const num_children=document.querySelector("#num_children");
const num_infants=document.querySelector("#num_infants");
const dec_adults=document.querySelector("#dec_adults");
const inc_adults=document.querySelector("#inc_adults");
const dec_children=document.querySelector("#dec_children");
const inc_children=document.querySelector("#inc_children");
const dec_infants=document.querySelector("#dec_infants");
const inc_infants=document.querySelector("#inc_infants");
const total_travellers=document.querySelector("#total_travellers");
const feedback_opener=document.querySelectorAll(".feedback_opener");

//Navbar responsiveness
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


// Nav elements mousemovein appearance

const navelements=document.querySelectorAll(".navelements");
navelements.forEach((navele)=>{
    navele.addEventListener("mouseenter",()=>{
        navele.children[1].classList.remove("hidden");
    })
})
navelements.forEach((navele)=>{
    navele.addEventListener("mouseleave",()=>{
        navele.children[1].classList.add("hidden");
    })
})


departure_date.min = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
return_date.min = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

travel_cabin_class.addEventListener("click",()=>{
    if(travel_selection_box.className.includes("hidden")){
        travel_selection_box.classList.remove("hidden");
    }
})
done_btn.addEventListener("click",()=>{
    setTimeout(() => {
        travel_selection_box.classList.add("hidden");
    }, 1);
})

//      update classes
classes.forEach((ele)=>{
    ele.addEventListener("change",(e)=>{
        show_class.textContent=e.target.value;
    })
})

//      update number of passengers
dec_adults.addEventListener("click",()=>{
    if(parseInt(num_adults.textContent)-1<=1){
        num_adults.innerHTML=1;
        dec_adults.classList.add("border-gray-300");
        dec_adults.classList.remove("border-blue-400");
    }
    else{
        num_adults.textContent=parseInt(num_adults.innerHTML)-1;
    }
    total_travellers.textContent=parseInt(num_adults.innerHTML)+parseInt(num_children.innerHTML)+parseInt(num_infants.innerHTML);
})
inc_adults.addEventListener("click",()=>{
    num_adults.textContent=parseInt(num_adults.innerHTML)+1;
    if(parseInt(num_adults.textContent)>1){
        dec_adults.classList.remove("border-gray-300");
        dec_adults.classList.add("border-blue-400");
    }
    total_travellers.textContent=parseInt(num_adults.innerHTML)+parseInt(num_children.innerHTML)+parseInt(num_infants.innerHTML);
})
dec_children.addEventListener("click",()=>{
    if(parseInt(num_children.textContent)-1<=0){
        num_children.innerHTML=0;
        dec_children.classList.add("border-gray-300");
        dec_children.classList.remove("border-blue-400");
    }
    else{
        num_children.textContent=parseInt(num_children.innerHTML)-1;
    }
    total_travellers.textContent=parseInt(num_adults.innerHTML)+parseInt(num_children.innerHTML)+parseInt(num_infants.innerHTML);
})
inc_children.addEventListener("click",()=>{
    num_children.textContent=parseInt(num_children.innerHTML)+1;
    if(parseInt(num_children.textContent)>=1){
        dec_children.classList.remove("border-gray-300");
        dec_children.classList.add("border-blue-400");
    }
    total_travellers.textContent=parseInt(num_adults.innerHTML)+parseInt(num_children.innerHTML)+parseInt(num_infants.innerHTML);
})
dec_infants.addEventListener("click",()=>{
    if(parseInt(num_infants.textContent)-1<=0){
        num_infants.innerHTML=0;
        dec_infants.classList.add("border-gray-300");
        dec_infants.classList.remove("border-blue-400");
    }
    else{
        num_infants.textContent=parseInt(num_infants.innerHTML)-1;
    }
    total_travellers.textContent=parseInt(num_adults.innerHTML)+parseInt(num_children.innerHTML)+parseInt(num_infants.innerHTML);
})
inc_infants.addEventListener("click",()=>{
    num_infants.textContent=parseInt(num_infants.innerHTML)+1;
    if(parseInt(num_infants.textContent)>=1){
        dec_infants.classList.remove("border-gray-300");
        dec_infants.classList.add("border-blue-400");
    }
    total_travellers.textContent=parseInt(num_adults.innerHTML)+parseInt(num_children.innerHTML)+parseInt(num_infants.innerHTML);
})


let currentIndex = 0;
const carouselItems = document.querySelectorAll('#carousel .flex-shrink-0');
const dots = document.querySelectorAll('[data-slide]');

// Show the current image based on index
const updateCarousel = (index) => {
    const offset = -index * 100;
    document.querySelector('#carousel').style.transform = `translateX(${offset}%)`;
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('bg-blue-500'));
    dots[index].classList.add('bg-blue-500');
};

// Next button click event
document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel(currentIndex);
});

// Previous button click event
document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel(currentIndex);
});

// Dot click event
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel(currentIndex);
    });
});

// Initialize the carousel
updateCarousel(currentIndex);


//Feedback opening and closing

feedback_opener.forEach((feed) => {
    feed.addEventListener("click",()=>{
        feed.parentElement.children[1].classList.toggle("hidden");
        feed.parentElement.children[0].children[1].classList.toggle("rotate-45")
    })
});