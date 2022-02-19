import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from 'react';
import axios from 'axios';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search';
const API_KEY = '89e56fe6421d4028bdf3a4ef713de1db'

export default function Drink() {
  const [name, setName] = useState('');
  const [glass, setGlass] = useState('');
  const [instr, setInstr] = useState('');

  const [mea1, setMea1] = useState('');
  const [mea2, setMea2] = useState('');
  const [mea3, setMea3] = useState('');
  const [mea4, setMea4] = useState('');
  const [mea5, setMea5] = useState('');

  const [inc1, setInc1] = useState('');
  const [inc2, setInc2] = useState('');
  const [inc3, setInc3] = useState('');
  const [inc4, setInc4] = useState('');
  const [inc5, setInc5] = useState('');

  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
}
useEffect(() => {
  console.log(search);
  const address = URL + '.php?s=' + search;
  console.log(address);
  

  axios.get(address)
  .then((response) => {
     console.log(response.data);
     setName(response.data.drinks[0].strDrink);
     setGlass(response.data.drinks[0].strGlass);
     setInstr(response.data.drinks[0].strInstructions);

     setMea1(response.data.drinks[0].strMeasure1);
     setMea2(response.data.drinks[0].strMeasure2);
     setMea3(response.data.drinks[0].strMeasure3);
     setMea4(response.data.drinks[0].strMeasure4);
     setMea5(response.data.drinks[0].strMeasure5);

     setInc1(response.data.drinks[0].strIngredient1);
     setInc2(response.data.drinks[0].strIngredient2);
     setInc3(response.data.drinks[0].strIngredient3);
     setInc4(response.data.drinks[0].strIngredient4);
     setInc5(response.data.drinks[0].strIngredient5);

  }).catch (error => {
    alert(error);
  });
  
}, [])

  return (
    <div>
      <h1>Drinks</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type={search}
        value={search}
        onChange={(e) => setSearch(e.target.value)}>
        </input>
        <button for="search">Search</button>
    </form>
        <h1>{name}</h1>
        <h2>Glass</h2>
        <p>{glass}</p>
        <h2>Measurements:</h2>
        <p>{mea1} {inc1}</p>
        <p>{mea2} {inc2}</p>
        <p>{mea3} {inc3}</p>
        <p>{mea4} {inc4}</p>
        <p>{mea5} {inc5}</p>
        <h2>Instructions:</h2>
        <p>{instr}</p>
      </div>
  )}
