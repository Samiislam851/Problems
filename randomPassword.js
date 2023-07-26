//Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const randomPassword = (len) => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numeric = '0123456789';
    const special = '+[]{}<>?!@#$%^&*()-_=;';

    const allChars = uppercase + lowercase + numeric + special;

    let password = '';

    for (let i = 0; i < len; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
}


const password = randomPassword(2);
console.log(password);
