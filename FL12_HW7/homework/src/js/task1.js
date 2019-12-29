const five = 5;
const six = 6;

let users = {
    'user@gmail.com': 'UserPass',
    'admin@gmail.com': 'AdminPass'
}
let loggedIn;
let email = prompt('Please enter your email', '');
let password;


if (!email) {
    alert('Canceled');
} else if (email.length < five) {
    alert("I don't know any emails having name length less than 5 symbols");
} else if (email in users) {

    password = prompt('Please enter your password', '');
    if (!password) {
        alert('Canceled');
    } else if (users[email] !== password) {
        alert('Wrong password');
    } else {
        loggedIn = true;
    }

} else {
    alert('I don’t know you');
}

if (loggedIn) {
    let changePassword = confirm('Do you want to change your password');

    if (!changePassword) {
        alert('You have failed the change.');
    } else {

       password = prompt('Please enter your current password', '');
        if (!password) {
            alert('Canceled');
        } else if (users[email] !== password) {
            alert('Wrong password');
        } else {

            password = prompt('Please enter new password');
            if (!password) {
                alert('Canceled');
            } else if (password.length < six) {
                alert('It’s too short password. Sorry.');
            } else {

                let confirmPassword = prompt('Please enter new password again');
                if (confirmPassword !== password) { 
                    alert('You wrote the wrong password.'); 
                } else {
                    alert('You have successfully changed your password.');
                    users[email] = password;
                }

            }

        }
        
    }
}