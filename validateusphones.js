
function submitStr() {



    function telephoneCheck(str) {
        let originalString = document.getElementById("newNumber").value;
        console.log(originalString);
        let format7=/^(?=1)\d{1}\s\d{3}\s\d{3}\s\d{4}$/;

        /* ^ meanshas to start with the next value; $ means it has to end with the preceding value */
        let trueValues = [
            { format: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/ },//555-555-5555
            { format: /^[0-9]{10}$/ },//5555555555
            { format: /^(?=1)\d{1}\s\d{3}-\d{3}-\d{4}$/ },//1 555-555-5555
            { format: /^(?=1)\d{1}\s\(\d{3}\)\s\d{3}-\d{4}$/ },//1 (555) 555-5555
            { format: /^\(\d{3}\)\d{3}-\d{4}$/ },//(555)555-5555
            { format: /^(?=1)\d{1}\(\d{3}\)\d{3}-\d{4}$/ }, //1(555)555-5555
            { format: format7 } //1 456 789 4444
        ];
        console.log(trueValues);
        let compare = trueValues.map(function (formatRe) {
            if (formatRe.format.test(originalString)) {
                console.log(formatRe.format);
                console.log(originalString);
                return true;
            } else {
                console.log(formatRe.format);
                console.log(originalString);
                return false
            };
        }).filter(item=>item==true);
        console.log("compare:",compare);

        /*same thing using arrow function
        let compare1 = trueValues.map(formatRe=> {
            if (formatRe.format.test(originalString)) {
                console.log(formatRe.format);
                console.log(originalString);
                return true;
            } else {
                console.log(formatRe.format);
                console.log(originalString);
                return false
            };
        });
        console.log(compare1);

        */

      /* same things accesing direct value in array
        if (trueValues[1].format.test(originalString)) {
            console.log(originalString);
            console.log(trueValues[1].format);

            return true;
        }
        else {
            return false;
        }
        */
       if (compare[0]==true) {
           return true;
       }
       else {
          return false;
       }
    };
    
    document.getElementById("result").innerHTML = telephoneCheck();

};