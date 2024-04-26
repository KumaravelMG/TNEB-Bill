function out(){
    document.getElementById("output").style.display="inline-block"

    
   
}
function cout(){
    document.getElementById("output").style.display="none"

    
   
}
// Button functions:-

function one(){
    document.getElementById("screen").value+="1"
}
function two(){
    document.getElementById("screen").value+="2"
}
function three(){
    document.getElementById("screen").value+="3"
}
function four(){
    document.getElementById("screen").value+="4"
}
function five(){
    document.getElementById("screen").value+="5"
}
function six(){
    document.getElementById("screen").value+="6"
}
function seven(){
    document.getElementById("screen").value+="7"
}
function eight(){
    document.getElementById("screen").value+="8"
}
function nine(){
    document.getElementById("screen").value+="9"
    
}
function dot(){
    document.getElementById("screen").value+="."
}
function zero(){
    document.getElementById("screen").value+="0"
}

//clear input box values
function c(){
    document.getElementById("screen").value=""
}

// Result 





function amt() {

    // let input=document.getElementById("screen").value
    // document.getElementById("result").innerHTML=input


    function one() {
        document.getElementById("screen").innerText = 1
    }


    let input = document.getElementById("screen").value
    let amount
    let added
    let total

    // Less than 500 units


    if (input <= 100) {
        amount = "0", 100 * 0
        // document.getElementById("entered").innerHTML=input
        document.getElementById("units").innerHTML = "0-"
        document.getElementById("units").innerHTML += input
        added = document.getElementById("evalue").innerHTML = amount

        total = document.getElementById("result")



    }
    else
        if (input > 100 && input <= 200) {
            amount = (100 * 0) + (input - 100) * 2.25
            document.getElementById("units").innerHTML = "0-100"
            document.getElementById("evalue").innerHTML = "0"

            document.getElementById("3entered").innerHTML += input

            // final result
            document.getElementById("3evalue").innerHTML = amount




        }
        else
            if (input > 200 && input <= 400) {
                amount = (100 * 0) + (100 * 2.25) + (input - 200) * 4.50

                document.getElementById("units").innerHTML = "0-100"
                document.getElementById("evalue").innerHTML = "0"
                // document.getElementById("2units").innerHTML="101-200"
                // document.getElementById("2evalue").innerHTML="225"
                // last line result
                document.getElementById("3entered").innerHTML += input
                document.getElementById("3evalue").innerHTML = amount





            }
            else
                if (input > 400 && input <= 500) {
                    amount = (100 * 0) + (100 * 2.25) + (200 * 4.50) + (input - 400) * 6.00

                    document.getElementById("units").innerHTML = "0-100"
                    document.getElementById("evalue").innerHTML = "0"
                    document.getElementById("3entered").innerHTML += input
                    document.getElementById("3evalue").innerHTML = amount

                    // let added=document.getElementById("result").innerHTML = "200 to 300 = 225 <br>"
                }

                // else
                // if (input > 500 && input <= 600) {
                //     amount = (100 * 0) + (100 * 2.25) + (200 * 4.50) + (100*6)+(input - 500) * 8.00
                //     // let added=document.getElementById("result").innerHTML = "200 to 300 = 225"
                // }

                // greater than 500 units

                else

                    if (input > 500) {
                        if (input <= 100) {
                            amount = 100 * 0, "No Billed amount 'Free'"
                        }
                        else
                            if (input > 100 && input <= 400) {
                                amount = (100 * 0) + (input - 300) * 4.5

                                document.getElementById("units").innerHTML = "0-100"
                                document.getElementById("evalue").innerHTML = "0"
                                document.getElementById("3entered").innerHTML += input
                                document.getElementById("3evalue").innerHTML = amount
                            }
                            else
                                if (input > 400 && input <= 500) {
                                    amount = (100 * 0) + (300 * 4.5) + (input - 400) * 6

                                    document.getElementById("units").innerHTML = "0-100"
                                    document.getElementById("evalue").innerHTML = "0"
                                    document.getElementById("3entered").innerHTML += input
                                    document.getElementById("3evalue").innerHTML = amount
                                }

                                else
                                    if (input > 500 && input <= 600) {
                                        amount = (100 * 0) + (300 * 4.5) + (100 * 6) + (input - 500) * 8

                                        document.getElementById("units").innerHTML = "0-100"
                                        document.getElementById("evalue").innerHTML = "0"
                                        document.getElementById("3entered").innerHTML += input
                                        document.getElementById("3evalue").innerHTML = amount
                                    }
                                    else
                                        if (input > 600 && input <= 800) {
                                            amount = (100 * 0) + (300 * 4.5) + (100 * 6) + (100 * 8) + (input - 600) * 9

                                            document.getElementById("units").innerHTML = "0-100"
                                            document.getElementById("evalue").innerHTML = "0"
                                            document.getElementById("3entered").innerHTML += input
                                            document.getElementById("3evalue").innerHTML = amount
                                        }
                                        else
                                            if (input > 800 && input <= 1000) {
                                                amount = (100 * 0) + (300 * 4.5) + (100 * 6) + (100 * 8) + (200 * 9) + (input - 800) * 10

                                                document.getElementById("units").innerHTML = "0-100"
                                                document.getElementById("evalue").innerHTML = "0"
                                                document.getElementById("3entered").innerHTML += input
                                                document.getElementById("3evalue").innerHTML = amount
                                            }
                                            else {
                                                amount = (100 * 0) + (300 * 4.5) + (100 * 6) + (100 * 8) + (200 * 9) + (200 * 10) + (input - 1000) * 11

                                                document.getElementById("units").innerHTML = "0-100"
                                                document.getElementById("evalue").innerHTML = "0"
                                                document.getElementById("3entered").innerHTML += input
                                                document.getElementById("3evalue").innerHTML = amount
                                            }

                    }
    document.getElementById("screen").value = amount
    // document.getElementById("result").innerHTML += "///"
    document.getElementById("result").innerHTML = amount

}


