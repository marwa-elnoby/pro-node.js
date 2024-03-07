const data10 = require('./data10')
const yargs = require("yargs")
// add
yargs.command({
    command: "add",
    describe: "Add  a new task to your list",
    builder :{
        fname:{
            describe:"First Name in add command",
            demandOption: true,
            type : "string"
        },
        lname:{
            describe:"this is Last Name in add command",
            demandOption: true,
            type : "string"
        },
    },
    handler:(x) =>{
        data10.addPerson(x.id , x.fname  , x.lname , x.age , x.city);
    }
    
})
////////////////////////////////////
// delete
yargs.command({
    command :'delete',
    describe:'Delete a person',
    handler :(x) =>{
        data10.deleteData(x.id)
    }
})
//////////////////////////////////////////////////
// read 
yargs.command({
    command: 'read',
    describe :" Read all tasks on the list",
    builder :{
        id : {
            describe : "Enter the ID of the person",
            demandOption : true ,
            type : "string" 
        }
    },
    handler : (x)=>{
        data10.readData(x.id)
    }
})
////////////////////////////////////////////////
//list
yargs.command({
    command : 'list',
    describe : 'Show All people in the list',
    handler: () =>{
        data10.listData()
    }
})
yargs.parse()