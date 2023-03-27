// import React from 'react'

// const Child = (props) => {
//        let a = props.Year;
//        console.log(a);
//     let myfun = (book) =>{
//         book.forEach((e)=>{
//             if(e.year <2014){
//                 console.log(e.name);
//             }
//         })
//     }
//     let myfun1 = (book) =>{
//         book.forEach(e =>{
//             if(e.year <= 2010){
//                 console.log(e.name);
//             }
//         })
//     }
//     let myfun2 = (book) =>{
//         book.forEach(e =>{
//             if(e.year <= 2000){
//                 console.log(e.name);
//             }
//         })
//     }
//     let myfun3 = (book) =>{
//         book.forEach(e =>{
//                 console.log(e.name);
//         })
//     }
//   return (
//     <div>

// <button onClick={() => myfun(a)}>Get below 2014 year Book</button>
// <button onClick={() => myfun1(a)}>Get below 2010 year Book</button>
// <button onClick={() => myfun2(a)}>Get below 2000 year Book</button>
// <button onClick={() => myfun3(a)}>Get below all year Book</button>
// {
//     a.map((value)=>{
//         return(
//             <div>
//                 <h1>{value.name}</h1>
//                 <p>{value.Year}</p>
//             </div> 
//         )
//     })
// }

//         {/* <button onClick={() => a.filter(function(b){
//         if(b.Year < 2014){
//             console.log(b.name);
//         }
//     })}>Click Here</button> */}
//     </div>
//   )
// }

// export default Child

 const Child = (props) =>{

    var a=props.details;
    // console.log('a',a);

    // props.hel('aravindh')

    return(
        
        <div>child
            <button onClick={()=>props.set('hello')}>change child name</button>
            <div></div>
        </div>
    )
 }

 export default Child