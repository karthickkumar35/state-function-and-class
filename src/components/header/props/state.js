import React from 'react'

const state = () => {
    let product=[
        {
            name:"moblie",
            price:10000,
        },
        {
            name:"bag",
            price:600,
        },
        {
            name:"book",
            price:100,
        },
        {
            name:"sliper",
            price:300,
        },
        {
            name:"apple",
            price:200,
        },
        {
            name:"chocolate",
            price:150,
        },
    ];
    let ltoh = (pro)=>{
        pro.map((element)=> {
            let a = element.name;
            console.log(a.sort())
        });
    }
  return (
    <div>
        {product.map((value)=>{
            return(
            <div className='values'>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
            </div>
            )
        })}
        <button onClick={()=>ltoh(product)}>alpa</button>
    </div>
  )
}

export default state
