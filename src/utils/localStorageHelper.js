export const getScore = () => {
    score =  JSON.parse(localStorage.getItem("score"));
    console.log(score)
    if(score == NaN){
        score = 0;
    }
    console.log(score)
    return score;
}

export const setScore = (score) => {
    localStorage.setItem("score", score);    
}