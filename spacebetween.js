//function to put spaces between each char of a string
let spaceBetween = (s) => {
    let stringArr = new Array();
    for (let i = 0; i < s.length; i++) {
        stringArr.push(s[i]);
    }
    console.log(stringArr.join(" "));
}

spaceBetween("interview");
spaceBetween("fiscalnote");
spaceBetween("Star Wars");