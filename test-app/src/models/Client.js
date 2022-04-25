class Client {
	constructor({
		id,
		firstName,
		lastName,
		isVolunteer,
		houseHoldId,
		nickname,
		city,
	}) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.isVolunteer = isVolunteer;
		this.houseHoldId = houseHoldId;
		this.nickname = nickname;
		this.city = city;
	}
	// age(){
	//     let date=new Date();
	//     let ageDate=new Date(this.birthDate)
	//     return (date.getFullYear() - ageDate.getFullYear());
	// }
}

let joeJunior = new Client({
	id: 1,
	firstName: 'JoeJunior',
	lastName: 'Bob',
	isVolunteer: false,
	houseHoldId: 100,
	city: 'North Bend',
});
let joeSenior = new Client({
	id: 2,
	firstName: 'JoeSenior',
	lastName: 'Bob',
	isVolunteer: true,
	houseHoldId: 100,
	nickname: 'Bobber',
	city: 'North Bend',
});
let jane = new Client({
	id: 3,
	firstName: 'Jane',
	lastName: 'Bob',
	isVolunteer: true,
	houseHoldId: 100,
	city: 'North Bend',
});

let daleFather = new Client({
	id: 4,
	firstName: 'DaleFather',
	lastName: 'Jones',
	isVolunteer: false,
	houseHoldId: 101,
    city:"Snoqualmie"
});
let daleMother = new Client({
	id: 5,
	firstName: 'DaleMother',
	lastName: 'Jones',
	isVolunteer: true,
	houseHoldId: 101,
    city:"Snoqualmie"
});
let sonJones = new Client({
	id: 6,
	firstName: 'Steve',
	lastName: 'Jones',
	isVolunteer: false,
	houseHoldId: 101,
    city:'Snoqualmie'
});
let daughterJones = new Client({
	id: 7,
	firstName: 'Sally',
	lastName: 'Jones',
	isVolunteer: false,
	houseHoldId: 101,
	nickname: 'sweetpea',
    city:'Snoqualmie'

});

let mikeThompson = new Client({
	id: 8,
	firstName: 'Mike',
	lastName: 'Thompson',
	isVolunteer: false,
	houseHoldId: 102,
	nickname: 'mic',
    city:'Preston'
});
let leanneThompson = new Client({
	id: 9,
	firstName: 'Leanne',
	lastName: 'Thompson',
	isVolunteer: true,
	houseHoldId: 102,
    city:'Preston'

});

export let clientList = [
	joeJunior,
	joeSenior,
	jane,
	daleFather,
	daleMother,
	sonJones,
	daughterJones,
	mikeThompson,
	leanneThompson,
];
