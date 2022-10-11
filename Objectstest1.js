/*   const obj = JSON.stringify(jsonData); to convert objects to json
/*   const obj = JSON.parse(jsonData); to convert json  to js object
All keys in an object are strings - true
*/
const obj1 = { property1: 'initial_data'};
        const obj2 = Object.freeze(obj1);
        obj2.property1 = 'new_data';
        console.log(obj2.property1)

        {
        const a = {};
const b = { key: 'b' };
console.log("1   "  ,a[b]);

const c = { key: 'c' };
console.log("2   ",a[b]);

a[b] = 123;
console.log("3   ",a[b]);

a[c] = 456;
console.log("4   ", a[b]);
        }
//Destructuring property for customised viewing 

const userActivity4 = { 
                name: "Rahul", 
                jobTitle: "JS Instructor@almabetter.com", 
                work: "rahul@microsoft.com", 
                region: "Hyderabad" 
              }
              
              const { name, jobTitle, work } = userActivity4;
              console.log(name, jobTitle, work);
              

              const userActivity3 = { 
                name: "Rahul", jobTitle: "JS Instructor@Almabetter.com", 
                work: "rahul@microsoft.com", region: "Hyderabad" };
            console.log(userActivity3.name, " ", userActivity3.jobTitle, " ", userActivity3.work);