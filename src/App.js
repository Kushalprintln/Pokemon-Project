import { getByPlaceholderText } from '@testing-library/react';
import { useState,useEffect } from 'react';
import Appstyles from'./App.module.css';
import LoadMore from './LoadMore';
import Container from './Container';
import FireHeading from './FireHeading';
import BallMainHeading from './BallMainHeading';
import Modal from './Modal';

function App() {
  // THEME UPDATE;
  const bgImage = {
    1:'https://images.unsplash.com/photo-1634156541649-f418858f5b62?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    2:'https://images.unsplash.com/photo-1507908708918-778587c9e563?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
  const bgNo = Math.floor(Math.random() * (3 - 1) + 1);

  // FETCHING DATA API;
  const initialAPI = 'https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1';
  const [endPoint,setEndPoint] = useState(initialAPI);
  const [data,setData] = useState([]);
  const [showModal,setShowModal]=useState(false);
  const [detailData,setDetail] = useState();

  // ASYNC FUNCTION THAT IS FETCHING DATA;
  async function getPokemonData(endPoint){
    const res = await fetch(endPoint);
    const pokedata = await res.json();

    // SETTING NEW ENDPOINT URL AS WE ARE GETTING UPDATED URL ON EVERY FETCH;
    setEndPoint(pokedata[0].next);

    // MAKING PROMISE ARRAY OF ALL THE URL's FROM THE POKEDATA
    const pokePromisArr = pokedata[0].results.map((poke)=>{
      return fetch(poke.url);
    })
    // console.log(pokePromisArr);
    let indiPokeRespArr = await Promise.all(pokePromisArr);
    let respArryForJsn = indiPokeRespArr.map((indiResp)=>{
      return indiResp.json();
    })
    let indiPokeData = await Promise.all(respArryForJsn);
    // console.log(indiPokeData);
    // UPDATING DATA FOR CREAITNG CARD'S;
    setData([...data,...indiPokeData]);
  }
  useEffect(() => {
    getPokemonData(endPoint);
  }, []);

function handelLoadMore(){
  getPokemonData(endPoint);
}
function ShowModal(personal){
  setShowModal(true);
  setDetail(personal);
}
function CloseModal(){
  setShowModal(false);
}
  return (
    <div className={Appstyles.App} style={{backgroundImage:`url(${bgImage[bgNo]})`}} >
      {showModal && <Modal dd={detailData} fun={CloseModal}/>}
        {bgNo===1? <FireHeading content={'PokeMon KingDom'} /> : <BallMainHeading content={'PokeMon KingDom'}/>}
        <Container pokiDataArr={data} fun={ShowModal}/>
        {endPoint && <LoadMore bg={bgNo} fun={handelLoadMore}/>}
    </div>
  );
}

export default App;
         



