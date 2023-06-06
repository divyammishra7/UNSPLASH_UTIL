import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useGlobalContext } from './context';



export default function Gallery() {
  const {searchTerm}=useGlobalContext();
  const url=`https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`;

  const response=useQuery({
    queryKey:['images',searchTerm],
    queryFn:async()=>{
      const res=await axios.get(`${url}&query=${searchTerm}`);
      return res.data;
    },
  });
if(response.isLoading){
  return(
    <section className='image-container'>
      <h4>Loading...</h4>


    </section>
  );
}
if(response.isError){
  <section className='image-container'>
      <h4>There was an error ...</h4>


    </section>

}
const results=response.data.results;
if(results.length<1){
  <section className='image-container'>
  <h4>No Results found</h4>


</section>

}
  return (
    <section className='image-container'>
 {results.map((item)=>{
  const url=item?.urls?.regular;
  return <img key={item.id} src={url} alt={item.alt_description} className='img'></img>
 })}
  
  
  </section>
  )
}
