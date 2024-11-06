let currentByte = '';
let currentParity = '';

function generateRandomBinary() {
    let binary = '';
    for (let i = 0; i < 8; i++) {
      binary += Math.floor(Math.random() * 2); 
    }
    return binary;
}

function generateByte() {
    const byteStore = document.getElementById('byte-span');
    const parityP = document.getElementById('parity-type');

    const byte = generateRandomBinary();
    const parity = byte[0]; // first bit is parity

    currentByte = byte;
    currentParity = parity;

    console.log(currentParity);

    byteStore.innerHTML = byte;
    parityP.innerHTML = 'Use ' + (parity == '0' ? 'Odd Parity' : 'Even Parity'); 
}

function checkCorrect(prediction, btn) {
    const count = currentByte.split('1').length - 1;
    const status = document.getElementById('status');

    // even parity check
    if (currentParity == '1') {
        if (count % 2 == 0) {
            if (prediction == true) {
                status.innerHTML = 'Correct!';
                party.confetti(btn, {
                    count: party.variation.range(20, 40),
                })
            } else {
                status.innerHTML = 'Incorrect.';
            }
        } else {
            if (prediction == true) {
                console.log('incorrect');
            } else {
                status.innerHTML = 'Correct!';
                party.confetti(btn, {
                    count: party.variation.range(20, 40),
                })
            }
        }
    } else if (currentParity == '0') /* odd parity check */ {
        if (count % 2 == 1) {
            if (prediction == false) {
                status.innerHTML = 'Incorrect.';
            } else {
                status.innerHTML = 'Correct!';
                party.confetti(btn, {
                    count: party.variation.range(20, 40),
                })
            }
        } else {
            if (prediction == false) {
                status.innerHTML = 'Correct!';
                party.confetti(btn, {
                    count: party.variation.range(20, 40),
                })
            } else {
                status.innerHTML = 'Incorrect.';
            }
        }
    }
}