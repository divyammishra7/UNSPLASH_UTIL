import React from 'react'
import { useGlobalContext } from './context';
//api key : KMCqow6OvwmD2sYaRraq7M4Yrzi_czUqppUROqgr5sA
export default function SearchForm() {
  const {setSearchTerm}=useGlobalContext();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const searchValue=e.target.elements.search.value;
    if(!searchValue){
      return;
    }
    console.log(searchValue);
    setSearchTerm(searchValue);


  };
  return (
 <section>
  <h1 className='title'>unsplash images</h1>
  <form className='search-form' onSubmit={handleSubmit}>
    <input type='text' className='form-input search-input' name='search' placeholder='dog'/>
    <button type='submit' className='btn'>Search</button>
    
  </form>
 </section>
  )
}
