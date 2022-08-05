function myname() {
    let zakatCamal = document.getElementById('camal').value;
    let result;
    if (zakatCamal >= 150) {
        result = "3Hiqqay"
    } else if (zakatCamal >= 145) {
        result = "2Hiqqay + 1 Bent makhaz"
    }
     else if (zakatCamal >= 140) {
        result = "2Hiqqay + 4bakri"
    } else if (zakatCamal >= 135) {
        result = "2Hiqqay + 3bakri"
    } 
    else if (zakatCamal >= 130) {
        result = "2Hiqqay + 2bakri"
    } else if (zakatCamal >= 125) {
        result = "2Hiqqay + 1 Bent makhaz"
    }
    else if (zakatCamal >= 120) {
        result = "2Hiqqay"
    } else if (zakatCamal >= 91) {
        result = "2bent e labun"
    } 
     else if (zakatCamal >= 76) {
        result = "1 bent e labun"
    } else if (zakatCamal >= 61) {
        result = "1jiza"
    }
     else if (zakatCamal >= 46) {
        result = "1 Hiqqay"
    } else if (zakatCamal >= 36) {
        result = "2bent e makhaz"
    } 
     else if (zakatCamal >= 26) {
        result = "2 bent makhaz"
    } else if (zakatCamal >= 20) {
        result = "4 bakri"
    }
     else if (zakatCamal >= 15) {
        result = "3 bakri"
    } else if (zakatCamal >= 10) {
        result = "2 bakri"
    } 
    else if (zakatCamal >= 5) {
        result = "1 bakri"
    } else if (zakatCamal >=4 ) {
        result = "no zakat"
}
document.getElementById('head').innerText = result;
}
