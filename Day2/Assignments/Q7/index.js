// 1. Calculate Final Grade:
// • Each student's final grade is determined by the average of their scores. Round the average to the nearest integer.
// • Use the formula: finalGrade = Math.round(sumOfScores / number0fScores), where sumOfScores is the sum of all scores and numberofScores is the count of scores.
// 2. Filtering Criteria:
// • Include only students who have scored an average of 70 or higher in their final grade.
// 3. Output Format:
// • Return a new array of objects containing only the name, id, and finalGrade of students who meet the filtering criteria.



// Input
const students = [
    { id: 1, name: "Alice", scores: [85, 90, 92] },
    { id: 2, name: "Bob", scores: [70, 68, 72] },
    { id: 3, name: "Charlie", scores: [60, 65, 58] },
    { id: 4, name: "David", scores: [75, 80, 78] },
];

// Output
// Output should be:
// [
//   { id: 1, name: "Alice", finalGrade: 89 },
//   { id: 2, name: "Bob", finalGrade: 70 },
//   { id: 4, name: "David", finalGrade: 78 }
// ]
let sum=0
function calculateFinalGrades(students){
    let stu = students.map((el)=>{
        sum  = el.scores;
        let grade = sum.reduce((acc,el)=>{
            return acc+el
        },0)

        return [el, { finalGrade: Math.round((grade)/sum.length)} ];

    });

    let final= stu.map((el,i)=>{
        let [{id, name},{finalGrade}]= el
            return { id, name, finalGrade }
        }).filter((el)=> el.finalGrade>=70)

        return final;
}


const passedStudents = calculateFinalGrades(students);
console.log(passedStudents);