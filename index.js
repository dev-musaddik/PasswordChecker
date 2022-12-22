console.log('random.com');
let full_time = 0;
let seconds = 30;
let timeout = false;
var count = parseInt(document.getElementById('count').innerHTML);
let generate_password = false;
var random;
var random = Math.floor(Math.random() * 10000 + 1);
document.getElementById('generate').addEventListener('click', function () {
    generate_password = true;
    let upper_value = 10000;
    let lower_value = 1000;

    random = Math.floor(Math.random() * (upper_value - lower_value) + lower_value);
    // var random =  Math.ceil(Math.random()*(upper_value-lower_value)+1);
    document.getElementById('show-result').innerHTML = random;

});

let in_value = document.getElementById('result_value').value;
let buttons = document.querySelectorAll('.item');
// console.log(buttons);
for (item of buttons) {
    item.addEventListener("click", (e) => {
        let buttonText = e.target.innerHTML;

        document.getElementById('result_value').value += buttonText;
        let string = document.getElementById('result_value').value;
        if (string.length > 4) {
            alert('passwords longer than 4 digits are not acceptable');
        }
    });
}
let operator = document.querySelectorAll('.operator');

for (item of operator) {
    item.addEventListener('click', (e) => {
        let operator_case = e.target.innerHTML;
        if (operator_case == 'AC') {
            document.getElementById('result_value').value = "";

        }
        else if (operator_case == 'C') {
            // document.body.style.background = "";
            // let number= parseInt(document.getElementById('result_value').value);
            // console.log( number);
            let string = document.getElementById('result_value').value;
            string = string.substring(0, string.length - 1);
            document.getElementById('result_value').value = string;

        }
        else if (operator_case = 'Submit') {
            console.log('submit');
            if (generate_password == true) {
                submit();
            }
            else {
                alert('at first generate password');
            }

        }
    });
}

/////////////////////////////////////////submit/////////////
function submit() {
    let checker = document.getElementById('result_value').value;

    if (checker.length < 5 && checker.length > 3) {

        let number = parseInt(document.getElementById('result_value').value);

        if (random == number) {
            console.log('ok boss');
            document.getElementById('error').style.display = 'none';
            document.getElementById('match').style.display = 'block';
            count = 3;
            document.getElementById('count').innerHTML = count;
            generate_password=false;
            document.getElementById('show-result').innerHTML=" ";
            document.getElementById('result_value').value=" ";

        }
        else {
            console.log('sorry boss');
            alert('password error')
            document.getElementById('error').style.display = 'block';
            document.getElementById('match').style.display = 'none';

            count -= 1;
            document.getElementById('count').innerHTML = count;
            count = parseInt(document.getElementById('count').innerHTML);
            console.log(typeof count);
            console.log(count);
            // stopwatch();

            if (count < 1) {
              
                ifcase();
                stopwatch();
            }
            else {
                timeout = false;
                document.querySelector('#second_count').style.display = "none";
            }

        }
    }
    else {
        document.getElementById('error').style.display = 'block';
        document.getElementById('match').style.display = 'none';
        alert('Please input only 4 digits password');
        count -= 1;
        document.getElementById('count').innerHTML = count;
        if (count < 1) {
            ifcase();
            stopwatch();
        }
        else {
            timeout = false;
            document.querySelector('#second_count').style.display = "none";
        }

        // stopwatch();

    }
}
 


/////////////////////////////////////////////////////////time count///
function stopwatch() {

    if (timeout == true) {

        full_time++;
        if (full_time == 100) {
            full_time = 0;
            seconds -= 1;
            document.getElementById('wait').innerHTML = seconds;
            console.log(timeout)
            if (seconds == 0) {
                document.querySelector('#time_count').style.display = "block";
                document.getElementById('game_over').disabled = false;
                document.getElementById('count').innerHTML = 3;
                document.querySelector('#second_count').style.display = "none";
                // const e= parseInt(document.getElementById('count').innerHTML);
                // document.getElementById('count').innerHTML =e;
                // console.log( typeof e);
                timeout == false;
                // console.log(e);
                seconds = 30;
            }

            // 
        }
        setTimeout('stopwatch()', 10);


    }
}

/////////////////////////////////case_1/////////////////
function ifcase() {
    console.log(count);
    timeout = true;
    document.querySelector('#time_count').style.display = "none";
    document.querySelector('#second_count').style.display = "block";
    document.getElementById('game_over').disabled = true;
    count = 3;
    seconds = 31;
}