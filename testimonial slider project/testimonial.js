const testimonials = [
    {
        name:"Charlie J", 
        photoUrl:"https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcwfHx1c2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
        text: "apple is a game-changer. Instead of drowning in an endless chain of emails, there is clear and easy accountability meaning tasks actually get done!"
    },

    {
        name:"Sara", 
        photoUrl:"https://media.istockphoto.com/id/2052635887/photo/portrait-of-indian-young-woman-wearing-casual-clothing-isolated-on-white-background-stock.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q5EOJp1cF8EfuK9SFmjZDj7WCxaxucBIrvQWTM4j2J4=",
        text: "I would recommend apple for anyone trying to get the word out about their business. It has saved me so much time!"
    },

    {
        name:"Jack", 
        photoUrl:"https://images.unsplash.com/photo-1482961674540-0b0e8363a005?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
        text: "apple has helped my team and I stay on the same page. Previously, we were all over the board. Using apple has definitely saved us time and money."  
    }
]

const imgEl = document.querySelector("img");
const textEl =document.querySelector(".text");
const usernameEl = document.querySelector(".username");


let idx = 0;

updateTestimonial()

function updateTestimonial(){
    const{name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++

    if (idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial()
    } , 2000);

}