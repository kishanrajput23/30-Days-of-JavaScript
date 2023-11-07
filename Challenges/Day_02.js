function uppercaseLetter(str) {
    str = str.split(" ");
    for (var i=0; i<str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}

let str1 = "the quick brown fox";
console.log("Previous String:", str1);

let str2 = uppercaseLetter(str1);
console.log("New String:", str2);
