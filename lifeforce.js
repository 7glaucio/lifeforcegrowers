alert('Welcome to Life Force Growers Helpdesk System!');
let turnOn = true;

while (turnOn === true) {
    let option = parseInt(prompt('Pick an option to move forward:\n1. Soaking Legumes 2. Soaking Seed 3. Quit'));

    switch (option) {
        case 1: // Soaking Legumes
            let legumesAmount = parseFloat(prompt('Type in the total of legumes you\'re needing: '));

            if (legumesAmount >= 200) { // Formula for more than 200 pounds
                let peas = (0.1818181818181818 * legumesAmount) * 0.88;
                let mungs = (0.1272727272727273 * legumesAmount) * 0.88;
                if (peas > 32.5) {
                    alert(`You need to soak: 4 buckets of ${(peas / 4).toFixed(2)}, 4 buckets of ${(peas / 4).toFixed(2)} and 4 buckets of ${(mungs / 4).toFixed(2)}`);
                } else if (peas > 21.5 < 32.5) {
                    alert(`You need to soak: 3 buckets of ${(peas / 3).toFixed(2)}, 3 buckets of ${(peas / 3).toFixed(2)} and 3 buckets of ${(mungs / 3).toFixed(2)}`);
                } else if (peas > 11 < 21.5) {
                    alert(`You need to soak: 2 buckets of ${(peas / 2).toFixed(2)}, 2 buckets of ${(peas / 2).toFixed(2)} and 2 buckets of ${(mungs / 2).toFixed(2)}`);
                } else {
                    alert(`You need to soak: ${peas.toFixed(2)} lbs, ${peas.toFixed(2)} lbs and ${mung.toFixed(2)} lbs`);
                }
            } else { // Formula for less than 200 pounds
                let peas = (0.1818181818181818 * legumesAmount) * 0.90;
                let mungs = (0.1272727272727273 * legumesAmount) * 0.90;
                if (peas > 32.5) {
                    alert(`You need to soak: 4 buckets of ${(peas / 4).toFixed(2)}, 4 buckets of ${(peas / 4).toFixed(2)} and 4 buckets of ${(mungs / 4).toFixed(2)}`);
                } else if (peas > 21.5 < 32.5) {
                    alert(`You need to soak: 3 buckets of ${(peas / 3).toFixed(2)}, 3 buckets of ${(peas / 3).toFixed(2)} and 3 buckets of ${(mungs / 3).toFixed(2)}`);
                } else if (peas > 11 < 21.5) {
                    alert(`You need to soak: 2 buckets of ${(peas / 2).toFixed(2)}, 2 buckets of ${(peas / 2).toFixed(2)} and 2 buckets of ${(mungs / 2).toFixed(2)}`);
                } else {
                    alert(`You need to soak: ${peas.toFixed(2)} lbs, ${peas.toFixed(2)} lbs and ${mung.toFixed(2)} lbs`);
                }
            } break;

        case 2: // Soaking Seed
            let restartPlant = 'YES';
            while (restartPlant === 'YES') {
                let plantType = parseInt(prompt('Pick a Plant: 1. Wheat 2. Sunflower 3. Pea Sprout'));

                switch (plantType) {
                    case 1: // Wheat Grass Formula
                        wgBlack = parseFloat(prompt('How many black trays? '));
                        wgWhite = parseFloat(prompt('How many white trays? '));
                        alert(`${wgBlack} trays + ${wgWhite} trays = ${((wgBlack * 0.091666) + (wgWhite * 0.3301369)).toFixed(1)} heaping bowls`);
                        restartPlant = prompt('Would you like to calculate another plant? Type Yes or No:').toUpperCase();
                        break;

                    case 2: // Sunflower Formula
                        sfBlack = parseFloat(prompt('How many black trays? '));
                        alert(`${sfBlack} black trays = ${((sfBlack * 0.35)).toFixed(1)} bowls filled up to the black line`);
                        restartPlant = prompt('Would you like to calculate another plant? Type Yes or No:').toUpperCase();
                        break;

                    case 3: // Pea Shoots Formula
                        peaWhite = parseFloat(prompt('How many white trays? '));
                        alert(`${peaWhite} white trays = ${peaWhite} bowls filled up to the first line of the green cup`);
                        restartPlant = prompt('Would you like to calculate another plant? Type Yes or No:').toUpperCase();
                        break;

                    default: // Pea Shoots Formula
                        alert(`Please type a valid option!`);
                        restartPlant = 'yes'.toUpperCase();
                }
            }
            break;

        case 3: // Quit 
            turnOn = false;
            break;

        default: // Error Message (Main Menu)
            alert("Please pick a valid option!");
    }
}

alert('Thanks! See you later!');

