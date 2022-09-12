class House {
  street;

  constructor (n) {
    this.street = n;
  }

  showAddress () {
    console.log('Address: ' + this.street);
  }
}
  
const house = new House('Middle-earth');

house.showAddress();
console.log('house:', house);

const newHouse = {showAddress: house.showAddress}
console.log('newHouse:', newHouse);

newHouse.showAddress('Ukraine');