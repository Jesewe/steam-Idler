const SteamUser = require('steam-user');

const accounts = [
    { accountName: 'account1_username', password: 'account1_password' },
    { accountName: 'account2_username', password: 'account2_password' },
    // Add more accounts as needed
];

function login(index) {
    if (index < accounts.length) {
        const account = accounts[index];
        const user = new SteamUser();

        user.on('loggedOn', () => {
            console.log(account.accountName + ' - Successful entry');
            user.setPersona(7);  // 1 - online, 7 - invisible
            user.gamesPlayed([730]);  // List app IDs

            // Move on to the next account
            login(index + 1);
        });

        user.logOn({
            accountName: account.accountName,
            password: account.password,
        });
    }
}

// Start the login process with the first account
login(0);
