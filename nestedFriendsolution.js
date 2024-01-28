let myScore = 80;
let friendScore = 45;

if(myScore >= 80){
    if(friendScore >= 80){
        console.log("go for lunch");
    }else if(friendScore <=79 && friendScore >=60){
        console.log("good luck next time");
    }else if (friendScore <=59 && friendScore >=40){
        console.log("keep your friend's message unseen");
    }
    else{
        console.log("block your friend");
    }
}else{
    console.log("go to home and sleep and act sad");
}