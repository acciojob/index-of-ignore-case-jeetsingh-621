function indexOfIgnoreCase(s1, s2) {
    const Str = s1.toLowerCase();
    const Str2 = s2.toLowerCase();

    return Str.indexOf(Str2);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
