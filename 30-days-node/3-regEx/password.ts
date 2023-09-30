let str = 'Aa#1aaabcde'
let pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;;

let res: RegExpMatchArray | null = str.match(pattern);
if (res) {
    console.log("Valid password");
} else {
    console.log("Not a valid password");
}

export { }