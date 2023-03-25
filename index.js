const SteamUser = require('steam-user');
const user = new SteamUser();

const logOnOptions = {
	accountName: 'login',  // Enter here your account login
	password: 'password'		 // Enter here your password
}

user.logOn(logOnOptions);
user.on('loggedOn', () => {
	console.log(logOnOptions.accountName + ' - Successfully logged on');
	user.setPersona(7);                 //1 - online, 7 - invisible
	user.gamesPlayed([730]);    //List app IDs
});

setInterval(() => {
  console.log("+1 Hour");
}, 60 * 60 * 1000);
