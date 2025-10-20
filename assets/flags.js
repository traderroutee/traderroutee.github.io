// assets/flags.js
// Trader Route – Universal Flag Helper (tek merkez)
(function(){
  // Ülke → kod haritası (örnekler; siz zamanla genişletebilirsiniz)
  window.countryCodeMap = {
    "Afghanistan":"af","Albania":"al","Algeria":"dz","Andorra":"ad","Angola":"ao",
    "Argentina":"ar","Armenia":"am","Australia":"au","Austria":"at","Azerbaijan":"az",
    "Bangladesh":"bd","Belgium":"be","Benin":"bj","Bhutan":"bt","Bolivia":"bo",
    "Bosnia and Herzegovina":"ba","Botswana":"bw","Brazil":"br","Bulgaria":"bg","Burkina Faso":"bf",
    "Cameroon":"cm","Canada":"ca","Chile":"cl","China":"cn","Colombia":"co","Congo":"cg",
    "Costa Rica":"cr","Cote d'Ivoire":"ci","Croatia":"hr","Cyprus":"cy","Czechia":"cz",
    "Denmark":"dk","Dominican Republic":"do","Ecuador":"ec","Egypt":"eg","Estonia":"ee",
    "Finland":"fi","France":"fr","Gabon":"ga","Georgia":"ge","Germany":"de","Ghana":"gh",
    "Greece":"gr","Guatemala":"gt","Honduras":"hn","Hungary":"hu","Iceland":"is",
    "India":"in","Indonesia":"id","Iran":"ir","Iraq":"iq","Ireland":"ie","Israel":"il",
    "Italy":"it","Japan":"jp","Jordan":"jo","Kazakhstan":"kz","Kenya":"ke","Kuwait":"kw",
    "Kyrgyzstan":"kg","Laos":"la","Latvia":"lv","Lebanon":"lb","Lithuania":"lt",
    "Luxembourg":"lu","Malaysia":"my","Maldives":"mv","Mali":"ml","Malta":"mt",
    "Mexico":"mx","Moldova":"md","Morocco":"ma","Netherlands":"nl","New Zealand":"nz",
    "Nigeria":"ng","North Macedonia":"mk","Norway":"no","Oman":"om","Pakistan":"pk",
    "Panama":"pa","Paraguay":"py","Peru":"pe","Philippines":"ph","Poland":"pl",
    "Portugal":"pt","Qatar":"qa","Romania":"ro","Russia":"ru","Saudi Arabia":"sa",
    "Serbia":"rs","Singapore":"sg","Slovakia":"sk","Slovenia":"si","South Africa":"za",
    "South Korea":"kr","Spain":"es","Sri Lanka":"lk","Sweden":"se","Switzerland":"ch",
    "Syria":"sy","Taiwan":"tw","Tanzania":"tz","Thailand":"th","Tunisia":"tn",
    "Turkey":"tr","Turkiye":"tr","UAE":"ae","United Arab Emirates":"ae",
    "Uganda":"ug","Ukraine":"ua","United Kingdom":"gb","United States":"us","USA":"us",
    "Uzbekistan":"uz","Venezuela":"ve","Vietnam":"vn"
  };

  // Ülke adını koda çevir
  window.getFlagCode = function(country){
    if(!country) return "unknown";
    const byKey = countryCodeMap[country];
    if (byKey) return byKey;
    // örn. "Czech Republic" → "cz" tipinde basit fallback
    return (country.slice(0,2) || "unknown").toLowerCase();
  };

  // Bayrak URL (klasör: assets/flag/  → tekil)
  window.getFlagURL = function(country, size){
    const code = getFlagCode(country);
    return `assets/flag/${code}.png`;
  };
})();
