fetch(' https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayName(data));

        const displayName= countries=> {
            const countreisdiv=document.getElementById("countries");

            countries.forEach(country => {
                
                const countrydiv=document.createElement("div");
                 const name=document.createElement("h3");
                 name.innerText=country.name;
                 const capital=document.createElement("p");
                 capital.innerText=country.capital;
                 countrydiv.appendChild(name);
                 countrydiv.appendChild(capital);
                countrydiv.className="countrydiv";
                
             const countryInfo=`
            <h1 class="countryName">${country.name}</h1>
            <p> ${country.capital}</p>
            <button onclick="displaycountrydetails('${country.name}')"> Details </button>
             `;
            countrydiv.innerHTML=countryInfo;
            countreisdiv.appendChild(countrydiv);
                
            });     
            }

            const displaycountrydetails=name=>{
               fetch(`https://restcountries.com/v2/name/${name}`)
               .then(res=>res.json())
               .then(data=> rendercountry(data[0]));
            }

            const rendercountry=country=>{
                
                const countryDIV=document.getElementById('countryDtails');
                countryDIV.innerHTML=`
                <h1>${country.name}</h1>
                <p>Population: ${country.population}</p>
                <p>Area: ${country.area}</p>
                <img  src="${country.flag}">
                `;
            }
        