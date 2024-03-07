

const fs = require("fs")

const addPerson = (id , fname , lname , age , city) =>{
    const allData = loadData()

    const duplicatedData = allData.filter((obj) =>{
        return obj.id === id
    })

    if(duplicatedData.length == 0){
        allData.push({
            id : id ,
            fname : fname ,
            lname : lname ,
            age : age ,
            city : city
        })

        saveAllData(allData)
    } else{
        console.log(" Error Duplicated id ")
    }
}


///////////////////////////////////

const loadData = () =>{
    try{
        const loadDataJson = fs.readFileSync("data10.json").toString()

        return JSON.parse(loadDataJson)
    }
    catch{
        return []
    }
}

//////////////////////////////////

const saveAllData = (allData) =>{
    const saveAllDataJson = JSON.stringify(allData)

    fs.writeFileSync("data10.json" , saveAllDataJson)
}

///////////////////////////////////
// delete

const deleteData = (id) =>{
    const allData = loadData()

    const dataToKeep = allData.filter((obj) =>{
        if( (id % 2 == 0)&& (id < 10)){
            return obj.id  !== id
        } else {
            console.log(' It is not id  even number ')
            return obj.id
        }  
    })

    saveAllData(dataToKeep)
    console.log("you have delete item")
}
///////////////////////////////////////////////
// read data

const readData = (id) =>{
    const allData = loadData();

    const itemNeeded = allData.find((obj) =>{
        return obj.id == id
    })

    if(itemNeeded){
        console.log(itemNeeded.id , itemNeeded.fname , itemNeeded.lname , itemNeeded.age)
    } else{
        console.log(" id needed not found")
    }
}
/////////////////////////////////////////////
//list

const listData = () =>{
    const allData = loadData()

    allData.forEach((obj) =>{
        console.log(obj.fname , obj.age , obj.city)
    })
}

module.exports ={
    addPerson , 
    deleteData , 
    readData ,
    listData
}