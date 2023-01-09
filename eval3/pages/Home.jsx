import React from 'react';

const Home = ({data}) => {
    console.log(data)
    return (
        <>
        <div>
          <img src={data.avatar_url} alt="prof" />
          <h4>{data.bio}</h4>
          <h3>follower:{data.followers}</h3>
          <h3>following:{data.following}</h3>
          <h3>location:{data.location}</h3>
          <h3></h3>

        </div>
</>
    );
}
export async function getStaticProps(context){
    let username = "Vedprakas987"
    let r = await fetch(`https://api.github.com/users/${username}`)
    let d = await r.json()
    return{
        props:{
            data:d
        }
    }
    }
export default Home;
