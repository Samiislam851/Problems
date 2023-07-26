// Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToInt = (romanStr) => {
    const romanVal = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < romanStr.length; i++) {
        const current = romanVal[romanStr[i]];
        const next = romanVal[romanStr[i + 1]];

        if (next > current) {

            result += next - current;
            i++;
        } else {
            result += current;
        }
    }

    return result;
}

