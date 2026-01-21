let StudentList = [
    {Name:"Ivan",Age:20,Grade:95},
    {Name:"Olya",Age:19,Grade:88},
    {Name:"Max",Age:21,Grade:75}
]

function ShowList(){
    for (let i=0;i<StudentList.length;i++){
        alert("Name: " + StudentList[i].Name + ", Age: " + StudentList[i].Age + ", Grade: " + StudentList[i].Grade);
    }
}

function biggestGrade(){
    let maxGrade = StudentList[0].Grade;
    let topStudent = StudentList[0].Name;
    for (let i=1;i<StudentList.length;i++){
        if (StudentList[i].Grade > maxGrade){
            maxGrade = StudentList[i].Grade;
            topStudent = StudentList[i].Name;
        }
    }
    alert("Top student: " + topStudent + " with grade: " + maxGrade);
}

function AverageGrade(){
    let GradeList = []
    let TotalSum = 0     
    for (let i=0;i<StudentList.length;i++){
        GradeList.push(StudentList[i].Grade)
    }
    for (let i=0; i<GradeList.length; i++){
        TotalSum += GradeList[i];  
    }
    let avg = TotalSum / GradeList.length
    alert("Avarage Grade "+ avg)
}

ShowList();
biggestGrade();
AverageGrade();

