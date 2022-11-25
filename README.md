# AssignmentNode
npm init

npm install express, sequelize, dotenv, mysql2, sequelize-cli  --save

npx sequqlize init

npx sequelize db:create

Answer of QuesNo 3 is in that branch and Ques4 and are below mentioned. I have mostly used sequelize though I tried to write mysql raw query for 2nd Ques.

Q2) Select SubjectStudentMapping.CustomerID, Customer.Customername, Subjects.SubjectName
WHERE Customers.CustomerID= SubjectStudentMapping.CustomerID, Subjects.SubjectID= SubjectStudentMapping.SubjectID AND Customers.CustomerName='Around the Horn'
OORDER BY Subjects






Q4) const person = {
    id : 2 ,
    gender : 'male'
    };
    const student = {
    name : "ravi" ,
    email :"ravi11@yopmail.com"
    };
   
    const ans= {...person, ...student};
    console.log(ans)
    
    
  Q6.)  function MissingNo(arr){
 let n= arr.length;
 arr.sort(function(a,b){return a-b});
 for(let i=0; i<=n; i++){
    if(arr[i]!== i+1){
        console.log(i+1);
        break;
    }
 }
}
arr= [1,2,6,5,7,4,9,3];
MissingNo(arr);
