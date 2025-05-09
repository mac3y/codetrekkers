const apiKey = "28498904bce6769134e2c0bd";
      const currencySelectFrom = document.getElementById("from-currency-select");
      const currencySelectTo = document.getElementById("to-currency-select");
      const resultText = document.getElementById("result");
      const convertButton = document.getElementById("convert-button");

      const currencyNames = {
        USD: "United States Dollar",
        AED: "United Arab Emirates Dirham",
        AFN: "Afghan Afghani",
        ALL: "Albanian Lek",
        AMD: "Armenian Dram",
        ANG: "Netherlands Antillean Guilder",
        AOA: "Angolan Kwanza",
        ARS: "Argentine Peso",
        AUD: "Australian Dollar",
        AWG: "Aruban Florin",
        AZN: "Azerbaijani Manat",
        BAM: "Bosnia-Herzegovina Convertible Mark",
        BBD: "Barbadian Dollar",
        BDT: "Bangladeshi Taka",
        BGN: "Bulgarian Lev",
        BHD: "Bahraini Dinar",
        BIF: "Burundian Franc",
        BMD: "Bermudian Dollar",
        BND: "Brunei Dollar",
        BOB: "Bolivian Boliviano",
        BRL: "Brazilian Real",
        BSD: "Bahamian Dollar",
        BTN: "Bhutanese Ngultrum",
        BWP: "Botswanan Pula",
        BYN: "Belarusian Ruble",
        BZD: "Belize Dollar",
        CAD: "Canadian Dollar",
        CDF: "Congolese Franc",
        CHF: "Swiss Franc",
        CLP: "Chilean Peso",
        CNY: "Chinese Yuan",
        COP: "Colombian Peso",
        CRC: "Costa Rican Colón",
        CUP: "Cuban Peso",
        CVE: "Cape Verdean Escudo",
        CZK: "Czech Koruna",
        DJF: "Djiboutian Franc",
        DKK: "Danish Krone",
        DOP: "Dominican Peso",
        DZD: "Algerian Dinar",
        EGP: "Egyptian Pound",
        ERN: "Eritrean Nakfa",
        ETB: "Ethiopian Birr",
        EUR: "Euro",
        FJD: "Fijian Dollar",
        FKP: "Falkland Islands Pound",
        FOK: "Faroese Króna",
        GBP: "British Pound Sterling",
        GEL: "Georgian Lari",
        GGP: "Guernsey Pound",
        GHS: "Ghanaian Cedi",
        GIP: "Gibraltar Pound",
        GMD: "Gambian Dalasi",
        GNF: "Guinean Franc",
        GTQ: "Guatemalan Quetzal",
        GYD: "Guyanaese Dollar",
        HKD: "Hong Kong Dollar",
        HNL: "Honduran Lempira",
        HRK: "Croatian Kuna",
        HTG: "Haitian Gourde",
        HUF: "Hungarian Forint",
        IDR: "Indonesian Rupiah",
        ILS: "Israeli New Shekel",
        IMP: "Isle of Man Pound",
        INR: "Indian Rupee",
        IQD: "Iraqi Dinar",
        IRR: "Iranian Rial",
        ISK: "Icelandic Króna",
        JEP: "Jersey Pound",
        JMD: "Jamaican Dollar",
        JOD: "Jordanian Dinar",
        JPY: "Japanese Yen",
        KES: "Kenyan Shilling",
        KGS: "Kyrgyzstani Som",
        KHR: "Cambodian Riel",
        KID: "Kiribati Dollar",
        KMF: "Comorian Franc",
        KRW: "South Korean Won",
        KWD: "Kuwaiti Dinar",
        KYD: "Cayman Islands Dollar",
        KZT: "Kazakhstani Tenge",
        LAK: "Laotian Kip",
        LBP: "Lebanese Pound",
        LKR: "Sri Lankan Rupee",
        LRD: "Liberian Dollar",
        LSL: "Lesotho Loti",
        LYD: "Libyan Dinar",
        MAD: "Moroccan Dirham",
        MDL: "Moldovan Leu",
        MGA: "Malagasy Ariary",
        MKD: "Macedonian Denar",
        MMK: "Myanmar Kyat",
        MNT: "Mongolian Tögrög",
        MOP: "Macanese Pataca",
        MRU: "Mauritanian Ouguiya",
        MUR: "Mauritian Rupee",
        MVR: "Maldivian Rufiyaa",
        MWK: "Malawian Kwacha",
        MXN: "Mexican Peso",
        MYR: "Malaysian Ringgit",
        MZN: "Mozambican Metical",
        NAD: "Namibian Dollar",
        NGN: "Nigerian Naira",
        NIO: "Nicaraguan Córdoba",
        NOK: "Norwegian Krone",
        NPR: "Nepalese Rupee",
        NZD: "New Zealand Dollar",
        OMR: "Omani Rial",
        PAB: "Panamanian Balboa",
        PEN: "Peruvian Sol",
        PGK: "Papua New Guinean Kina",
        PHP: "Philippine Peso",
        PKR: "Pakistani Rupee",
        PLN: "Polish Zloty",
        PYG: "Paraguayan Guarani",
        QAR: "Qatari Rial",
        RON: "Romanian Leu",
        RSD: "Serbian Dinar",
        RUB: "Russian Ruble",
        RWF: "Rwandan Franc",
        SAR: "Saudi Riyal",
        SBD: "Solomon Islands Dollar",
        SCR: "Seychellois Rupee",
        SDG: "Sudanese Pound",
        SEK: "Swedish Krona",
        SGD: "Singapore Dollar",
        SHP: "Saint Helena Pound",
        SLE: "Sierra Leonean Leone",
        SLL: "Sierra Leonean Leone (Old)",
        SOS: "Somali Shilling",
        SRD: "Surinamese Dollar",
        SSP: "South Sudanese Pound",
        STN: "São Tomé and Príncipe Dobra",
        SYP: "Syrian Pound",
        SZL: "Swazi Lilangeni",
        THB: "Thai Baht",
        TJS: "Tajikistani Somoni",
        TMT: "Turkmenistani Manat",
        TND: "Tunisian Dinar",
        TOP: "Tongan Paʻanga",
        TRY: "Turkish Lira",
        TTD: "Trinidad and Tobago Dollar",
        TVD: "Tuvaluan Dollar",
        TWD: "New Taiwan Dollar",
        TZS: "Tanzanian Shilling",
        UAH: "Ukrainian Hryvnia",
        UGX: "Ugandan Shilling",
        UYU: "Uruguayan Peso",
        UZS: "Uzbekistani Som",
        VES: "Venezuelan Bolívar Soberano",
        VND: "Vietnamese Dong",
        VUV: "Vanuatu Vatu",
        WST: "Samoan Tala",
        XAF: "Central African CFA Franc",
        XCD: "East Caribbean Dollar",
        XCG: "Crypto Gold",
        XDR: "Special Drawing Rights",
        XOF: "West African CFA Franc",
        XPF: "CFP Franc",
        YER: "Yemeni Rial",
        ZAR: "South African Rand",
        ZMW: "Zambian Kwacha",
        ZWL: "Zimbabwean Dollar"
        // Add more if needed
      };

      async function loadCurrencyOptions() {
        try {
          const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);
          const data = await res.json();

          const currencies = Object.keys(data.conversion_rates);
          currencies.forEach((code) => {
            const name = currencyNames[code] || code;
            const option = `<option value="${code}">${code} - ${name}</option>`;
            currencySelectFrom.innerHTML += option;
            currencySelectTo.innerHTML += option;
          });

          currencySelectFrom.value = "USD";
          currencySelectTo.value = "TTD";
          
        } catch (error) {
          resultText.innerText = "Could not load currencies.";
        }
      }

      async function convertCurrency() {
        const amount = parseFloat(document.getElementById("amount").value);
        const from = currencySelectFrom.value;
        const to = currencySelectTo.value;

        if (isNaN(amount) || amount <= 0) {
          resultText.innerText = "Enter a valid amount.";
          return;
        }

        try {
          const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`);
          const data = await res.json();
          const rate = data.conversion_rates[to];
          const converted = amount * rate;

          resultText.innerText = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
        } catch (error) {
          resultText.innerText = "Conversion failed.";
        }
      }

      loadCurrencyOptions();
      convertButton.addEventListener("click", convertCurrency);

      const loginBtn = document.getElementById('loginBtn');
      const logoutBtn = document.getElementById('logoutBtn');

      function updateAuthButtons() {
        const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';

        if (isAuthenticated) {
          loginBtn.style.display = 'none';
          logoutBtn.style.display = 'block';
        } else {
          loginBtn.style.display = 'block';
          logoutBtn.style.display = 'none';
        }
      }

      loginBtn.addEventListener('click', () => {
        sessionStorage.setItem('redirectAfterLogin', 'currency-converter.html');
        window.location.href = 'login.html';
      });

      logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem('isAuthenticated');
        sessionStorage.removeItem('redirectAfterLogin');
        updateAuthButtons(); 
        alert('You have been logged out.');
      });

      updateAuthButtons();