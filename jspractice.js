const posts = [{ title : ' post one',body :'this is post one'},
    { title : 'post two',body :'this is post two'},
    { title : 'post three',body :'this is post three'}
]

function getpost(){

    setTimeout(()=>{
        let output = '';
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`;
        })

        document.body.innerHTML = output;
    },1000)
    
}
/*
function createpost(post,callback){

    setTimeout(()=>{


        posts.push(post)
        callback();
    },2000);
    


}
    */


function createpost(post){
    return new Promise((resolve,reject)=>{



        setTimeout(()=>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject('Error broo');
            }
        
        
    },2000);
    })

    
    


}
 

//getpost();
//createpost({title:'post four',body:'this is post four'},getpost);
//createpost({title:'post four',body:'this is post four'}).then(getpost);

/*
const promise1 = Promise.resolve('hello broo');
const promise2 = 10;
const promise3 =  new Promise((resolve,reject)=>{
   
    setTimeout(resolve,2000,"goodbye")
})
const promise4 =  fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1,promise2,promise3,promise4]).then(value => {console.log(value)});
*/

/*
async function init(){
    await createpost({title:'post five',body:'this is post five'})


    getpost();
}

init();

*/
/*
async function init(){
   const res =  await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
        console.log(data);

}

init();
*/


//js oops 

const s1 = "divya"
console.log(typeof s1);
const s2 = new String('divya');
console.log(typeof s2);

console.log(window);
alert(1);