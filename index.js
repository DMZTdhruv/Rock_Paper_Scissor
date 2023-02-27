let a = document.getElementById("ai");
console.log(a);
let b = document.getElementById("user");


let btn = document.querySelector(".false");
console.log(btn);


const get_value = (value) =>{
    value = prompt('Enter the value : ');
    return value;
}

let winner = document.getElementById("winner");
let value_user;
let counter = 0;

const match = (user,cpu) =>{
    if(user == cpu){
        return "Draw";
    }
    if(user == "R" && cpu == "S"){
        return "User won"
    } else if(user == "R" && cpu == "P"){
        return "User lost"
    }

    if( user == "P" && cpu == "R"){
        return "User won"
    } else if(user == "P" && cpu == "S"){
        return "User lost"
    }

    if(user == "S" && cpu == "R"){
        return "User lost";
    } else if( user == "S" && cpu == "P"){
        return "User won"
    }
}
let ai_score = 0;
let user_score = 0;
let score = document.getElementById("score");
var wow = btn.addEventListener('click', ()=>{
    const visibilty = btn.getAttribute("active");
        if(visibilty === "true"){
            let cpu = Math.floor(Math.random() * 3);
            let func = ["R","P","S"][cpu];
            a.innerText = a.innerText = `THE AI VALUE : ${func}`;
            value_user = get_value();
            b.innerText = b.innerText = `THE USER VALUE : ${value_user}`;
            winner.innerText = winner.innerText = `THE RESULT ARE :  ${match(value_user,func)}`;
            let result = match(value_user,func);
            console.log(result);
            if(result == "User won"){
                user_score++;
            } else if(result == "User lost"){
                ai_score++;
            }
            score.innerText = score.innerText = `The AI : ${ai_score}
            The user : ${user_score}`;
            if(ai_score == 5){
                alert('Ai won with the score of 5');

                location.reload();
            } else if(user_score == 5){
                alert('User won with the score of 5');
                location.reload();
            }
            visibilty = btn.setAttribute("active",false);
        } else {
            visibilty = btn.setAttribute("active",true);
        }
})
