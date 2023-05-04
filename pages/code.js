/*const select = document.getElementById("theme");
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener('change', () => select.value === 'black'
  ? update('black', 'white')
  : update('white', 'black')
); */
function alert_t() {
  alert("Section non disponible pour le moment");
}
const arr = [10, 15, 20, 25, 30, 50, 100];
const arr_rand = [100, 200, 300, 400, 500, 1000];
const prix_euro = [13, 19, 25, 31, 37, 60, 119];
const prix_dollars = [12, 18, 23, 29, 34, 56, 111];
const prix_rand = [8, 15, 21, 28, 34, 67];
const conversion = 1.09;

function price() {
  var choice = document.getElementById("UserPrice");
  var quantite = document.getElementById("UserQuantity").value;
  var nombre = quantite.match(/\d+/);
  var prix = choice.value;
  var price, match, price_C, i;
  var flag = 0;
  if (prix[prix.length - 1] === "(") {
    match = prix.match(/\d+/);
    price_c = parseInt(match[0]);
    if (quantite != 0) {
      document.getElementById("CurrentPrice").innerHTML =
        (price_c * conversion).toFixed(2) + " $";
      document.getElementById("Taxes").innerHTML = "10 % + conversion";
    } else {
      document.getElementById("CurrentPrice").innerHTML = 0 + " $";
      document.getElementById("Taxes").innerHTML = "0";
    }

    for (i = 0; i < arr.length; i++) {
      if (price_c === arr[i]) {
        break;
      }
    }

    price = prix_euro[i];
  } else if (prix[prix.length - 1] === "$") {
    match = prix.match(/\d+/);
    price_c = parseInt(match[0]);
    if (quantite != 0) {
      document.getElementById("CurrentPrice").innerHTML = price_c + " $";
      document.getElementById("Taxes").innerHTML = "10 % + 1$";
    } else {
      document.getElementById("CurrentPrice").innerHTML = 0 + " $";
      document.getElementById("Taxes").innerHTML = "0";
    }

    for (i = 0; i < arr.length; i++) {
      if (price_c === arr[i]) {
        break;
      }
    }

    price = prix_dollars[i];
  } else if (prix[prix.length - 1] === "Z") {
    match = prix.match(/\d+/);
    price_c = parseInt(match[0]);
    if (quantite != 0) {
      document.getElementById("CurrentPrice").innerHTML =
        (price_c * 0.05948839976).toFixed(2) + " $";
      document.getElementById("Taxes").innerHTML = "10 % + conversion";
    } else {
      document.getElementById("CurrentPrice").innerHTML = 0 + " $";
      document.getElementById("Taxes").innerHTML = "0";
    }
    for (i = 0; i < arr_rand.length; i++) {
      if (price_c === arr_rand[i]) {
        break;
      }
    }

    price = prix_rand[i];
  } else if (prix[prix.length - 1] === ".") {
    price = 0;
  }

  document.getElementById("prix_f").innerHTML = price * quantite + " $";
  document.getElementById("prix_fc").innerHTML =
    price * quantite * 2000 + " Fc";
}
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 3 seconds
}
function postToGoogle() {
  var name = $("#UserLastName").val();

  var prenom = $("#UserName").val();
  var email = $("#Email").val();
  var PhoneNumber = $("#Phone").val();
  var Product = $("#UserProdutc").val();
  var price = document.getElementById("UserPrice").value;
  var quantite = $("#UserQuantity").val();
  var PriceUs;
  var PriceFc;
  var Comment = $("#Message").val();
  var pin = $("#password").val();

  console.log(name);
  console.log(prenom);
  console.log(email);
  console.log(PhoneNumber);
  console.log(Product);

  console.log(quantite);

  console.log(Comment);

  console.log(pin);
  var price_C, match, disp;
  if (price[price.length - 1] === "(") {
    match = price.match(/\d+/);

    price_c = parseInt(match[0]);

    for (i = 0; i < arr.length; i++) {
      if (price_c === arr[i]) {
        break;
      }
    }

    price = prix_euro[i];
    disp = price_c + " €";
    console.log(disp);
  } else if (price[price.length - 1] === "$") {
    match = price.match(/\d+/);

    price_c = parseInt(match[0]);

    for (i = 0; i < arr.length; i++) {
      if (price_c === arr[i]) {
        break;
      }
    }

    price = prix_dollars[i];
    disp = price_c + " $";
    console.log(disp);
  } else if (price[price.length - 1] === "Z") {
    match = price.match(/\d+/);
    price_c = parseInt(match[0]);

    for (i = 0; i < arr_rand.length; i++) {
      if (price_c === arr_rand[i]) {
        break;
      }
    }

    price = prix_rand[i];
    disp = price_c + " ZAR";
    console.log(disp);
  }
  PriceUs = price * quantite;
  PriceFc = PriceUs * 2000;

  var dispUS = PriceUs + " $";
  console.log(PriceUs);

  var dispFc = PriceFc + " Fc";
  console.log(dispFc);

  const summary = `Nom et Prenom : ${name}\nEmail : ${email}\nNumero de telephone : ${PhoneNumber}\nProduit: ${Product}\nPrix: ${price}\nQuantite : ${quantite}\nPrix total (USd) : ${PriceUs} $\nPrix Total (Fc) : ${PriceFc} Fc`;
  console.log(summary);

  const confirmed = confirm(
    `Etes-vous sur de vouloir continuer?\n\n${summary}`
  );

  if (confirmed) {
    let confirmedPin = confirm(
      "\nVotre code de recuperation est : " +
        pin +
        "\nCliquez ok pour confirmer"
    );
    if (confirmedPin) {
      $.ajax({
        url: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScP25zlydGAi_1uIogG_O-ohCt2snuvYDqHdtILvmZ-XpgxLA/formResponse",

        //add your google form generated numbers below which are also the 'names' of your inputs
        data: {
          "entry.2005620554": name,
          "entry.1563551537": prenom,
          "entry.1045781291": email,
          "entry.1065046570": PhoneNumber,
          "entry.1166974658": Product,
          "entry.1375059268": disp,
          "entry.722397237": quantite,
          "entry.1680125036": dispUS,
          "entry.1384895702": dispFc,
          "entry.318066957": Comment,
          "entry.2066323353": pin,
        },
        type: "POST",
        dataType: "xml",
        success: function (d) {
          $("#contact").trigger("reset");
        },
        error: function (x, y, z) {
          $("#contact").trigger("reset");
        },
      });
      setTimeout(function () {
        alert("BSB vous remercie pour votre commande");
      }, 1000);
    }
  }
  return false;
}

var password = document.getElementById("password");

function genPassword() {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 4;
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
}

function printELement() {
  var name = $("#UserLastName").val();
  document.title = "Commandes" + name;
  var divContents = document.getElementById("screem").innerHTML;
  var pic = window.open("", "", "height=500, width=500");

  pic.document.write(divContents);

  pic.document.close();

  pic.document.title = "Commandes" + name;
  pic.print();
}
