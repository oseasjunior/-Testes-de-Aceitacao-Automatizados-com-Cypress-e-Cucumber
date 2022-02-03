var faker = require('faker');


export default {
    buyer: function () {
       

        var data = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
             postalCode: '04438500'
            

        }
        return data;

    }
    
}

