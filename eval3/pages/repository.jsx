import React from 'react';

const Repository = ({data}) => {
    console.log(data)
    return (
        <div>
            
        </div>
    );
}
export async function getStaticProps(context){
    let username = "Vedprakas987"
    let r = await fetch(`https://api.github.com/search/repositories?q=user:+fork:true&sort=updated&per_page=10&type=Repositories`)
    let d = await r.json()
    return{
        props:{
            data:d
        }
    }
    }
export default Repository;
