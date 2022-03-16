class student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        lerningPaths =[],
    }) 
    {
        this.email =email;
        this.name =name;
        this.username =username;
        this.socialMedia ={
            twitter, //se puede poner directamente el nombre sin igualar como el los siguientes
            instagram,
            facebook,
        };
        
        this.approvedCourses =approvedCourses;
        this.lerningPaths =lerningPaths;
    }

}

class schools {
    constructor({
        name,
        coutCourses,
    }){
        this.name = name;
        this.coutCourses = coutCourses;
    }
}
const schoolWebDesigner = new schools ({
    name: "escuela de diseñadores web",
    coutCourses: 15,
})
const schoolWebDesigner2 = new schools ({
    name: "escuela de diseñadores grafico",
    coutCourses: 13,
})
const schoolWebDesigner3 = new schools ({
    name: "escuela de javascript",
    coutCourses: 58,
})




const juan = new student({
    name:"Julian",
    username: "El macho",
    email:"julianmartinez@hotmail.com",
    socialMedia:{
        twitter:"elmacjho193",
        facebook:"chandito7843"
    },
    approvedCourses:["principios del ego", "somos muchos en este mundo", "la felicidad y como manejarla"],
    lerningPaths:[schoolWebDesigner2, schoolWebDesigner3],

})

console.log(juan)