let users = [
    { userName: 'user1', password: '12345', name: 'Elgun' },
    { userName: 'user2', password: '12345', name: 'Mehdi' },
    { userName: 'user3', password: '12345', name: 'Subhan' },
];

document.getElementById('btn').addEventListener('click', function() {
    let enteredUsername = document.getElementById('text').value;
    let enteredPassword = document.getElementById('password').value;

    let user = users.find(user => user.userName === enteredUsername && user.password === enteredPassword);

    if (user) {
        document.getElementById('box').classList.add('hidden');
        document.getElementById('box-2').classList.remove('hidden');
        document.getElementById('welcome-text').textContent = `Welcome, ${user.name}!`;
    } else {
        alert('Invalid username or password');
    }
});

document.getElementById('logout').addEventListener('click', function() {
    document.getElementById('box-2').classList.add('hidden');
    document.getElementById('box').classList.remove('hidden');
    document.getElementById('text').value = '';
    document.getElementById('password').value = '';
});
