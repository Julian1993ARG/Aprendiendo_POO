const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados:[
    "Curso definitivo de HTML y CSS ",
    "Curso practico de HTML y CSS ",
    ],

    aprovarCurso(cursoAprobado){
        this.cursosAprobados.push(cursoAprobado);
    },
};


// hacer que natalia apruebe otro curso

function student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

    /*this.aprovarCurso = function(cursitoaprobado){
        this.cursosAprobados.push(cursitoaprobado)
    }*/

}
student.prototype.aprovarCurso = function(cursitoaprobado){
    this.cursosAprobados.push(cursitoaprobado)
}

const juanita = new student("Juanita Alejandra", 15,["Curso de la produccion de los videojuegos","Curso de manupulacion de personas para que hagan lo que quieras"])

juanita.aprovarCurso("Casa de la chota")
console.log(juanita.cursosAprobados)