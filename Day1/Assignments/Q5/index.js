const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
        math: { teachers: 5, students: 150 },
        science: { teachers: 4, students: 120 },
        history: { teachers: 3, students: 100 },
        english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
        {
            name: "Alice",
            className: "Grade 5",
            scores: { math: 95, science: 88, history: 85, english: 92 },
        },
        {
            name: "Bob",
            className: "Grade 4",
            scores: { math: 80, science: 78, history: 92, english: 85 },
        },
        {
            name: "Charlie",
            className: "Grade 5",
            scores: { math: 88, science: 90, history: 78, english: 88 },
        },
        {
            name: "Diana",
            className: "Grade 4",
            scores: { math: 92, science: 85, history: 88, english: 90 },
        },
    ],
};


//10

// Output: {
//     mathTeachersCount: 5,
//     historyTeachersCount: 3,
//     mathStudentsCount: 150,
//     historyStudentsCount: 100
// }

function countCalculation(school){

    let { math: { teachers: mathTeachersCount,students:mathStudentsCount}}= school.departments;
    let { history: { teachers: historyTeachersCount, students: historyStudentsCount } } = school.departments;


    return ({ mathTeachersCount, historyTeachersCount, mathStudentsCount, historyStudentsCount })

}

// console.log(countCalculation(school))


//11
// {
//     name: 'Alice',
//     className: 'Grade 5',
//     scores: { math: 95, science: 88, history: 85, english: 92 }
// }

function findTopStudent(school, sub){

    let max=0
    let arr=[]
    let stu= school.students.map((el)=>{
        let marks=el.scores.math;
        if( marks > max){
            max=marks
            arr.push(el)
        }
        return el
    })
    return arr;

}

// console.log(findTopStudent(school, 'math'))



//12

// Output = {
//     name: 'XYZ School',
//     establishYear: 1990,
//     departments: {
//         math: { teachers: 5, students: 150 },
//         science: { teachers: 4, students: 120 },
//         history: { teachers: 3, students: 100 },
//         english: { teachers: 4, students: 130 },
//         art: { teachers: 2, students: 50 }
//     },
//     courses: ['math', 'science', 'history', 'english'],
//     students: [
//         { name: 'Alice', className: 'Grade 5', scores: [Object] },
//         { name: 'Bob', className: 'Grade 4', scores: [Object] },
//         { name: 'Charlie', className: 'Grade 5', scores: [Object] },
//         { name: 'Diana', className: 'Grade 4', scores: [Object] }
//     ]
// }

function addNewDept(school,newDepartment){
    let x={...newDepartment}
    console.log(x);

    let {departments}=school
    // return departments
    school={...departments,newDepartment}
    return school
}


    
console.log(addNewDept(school, {art: {
    teachers: 2,
    students: 50
}}))




