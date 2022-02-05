function rot13(str) {
  const alpha1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alpha2 = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    let index = alpha1.indexOf(str[i]);

    if (/[a-z]/i.test(str[i])) {
      newString += alpha2[index];
    } else {
      newString += str[i];
    }

  }
  return newString;
}
