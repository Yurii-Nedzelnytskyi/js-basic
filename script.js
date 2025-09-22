function sayName() {

  let name = prompt('What is your name?');

  if (name === " " || name.length === 0) {
    alert('Please, enter your name');
    sayName();
  } else if (!isNaN(name) || name.includes(",") || name.includes(".") || name.includes(":") || name.includes(";") || name.includes("'") || name.includes('"') || name.includes("(") || name.includes(")") || name.includes("-") || name.includes("_") || name.includes("+") || name.includes("=") || name.includes("`") || name.includes("@") || name.includes("#") || name.includes("$") || name.includes("%") || name.includes("^") || name.includes("&") || name.includes("*") || name.includes("!") || name.includes("?") || name.includes("/") || name.includes("|")) {
    alert('Please use leters only');
    sayName();
  } else {
    let check = confirm('Is ' + name + ' your name?');
    if (!check) {
      sayName();
    } else {
      alert('Hy ' + name + ' !!!');
    }
  }
}

sayName();

function age() {
  let yearOfBirth = prompt('What year were you born?');
  if (yearOfBirth === " " || yearOfBirth.length === 0) {
    alert('Please enter year of your birth');
    age()
  } else if (isNaN(yearOfBirth) || yearOfBirth.includes(",") || yearOfBirth.includes(".") || yearOfBirth.includes(":") || yearOfBirth.includes(";") || yearOfBirth.includes("'") || yearOfBirth.includes('"') || yearOfBirth.includes("(") || yearOfBirth.includes(")") || yearOfBirth.includes("-") || yearOfBirth.includes("_") || yearOfBirth.includes("+") || yearOfBirth.includes("=") || yearOfBirth.includes("`") || yearOfBirth.includes("@") || yearOfBirth.includes("#") || yearOfBirth.includes("$") || yearOfBirth.includes("%") || yearOfBirth.includes("^") || yearOfBirth.includes("&") || yearOfBirth.includes("*") || yearOfBirth.includes("!") || yearOfBirth.includes("?") || yearOfBirth.includes("/") || yearOfBirth.includes("|")) {
    alert('Please use numbers only');
    age();
  } else {
    let check = confirm('Were you born in ' + yearOfBirth + ' ?');
    if (!check) {
      age();
    } else {
      const currentYear = 2025;
      let ageNow = currentYear - yearOfBirth;
      if (ageNow === 0 && ageNow === 1) {
        alert('You are a baby');
      } else if(ageNow < 0) {
        alert ('You are not yet borh');
        age();
      } else if (ageNow > 1 && ageNow <= 9){
        alert ('You are a child');
      } else if (ageNow > 10  && ageNow <= 18) {
        alert('You are a teenager');
      }else if (ageNow >18 && ageNow < 100) {
        alert('You are adult');
      } else {
        alert('You are Duncan Macleod')
      }

      alert('You are '+ageNow+ ' years old!!!') ;
    }
  }
}

age();
