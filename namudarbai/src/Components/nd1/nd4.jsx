function Nd4({spalva, fonas}){
    //propsai skliausteliuose
  return(  //skliaustelis tam kad rasyti saraso budu jei butu daug kodo
      <>
      <h1 style={{ background: fonas ='pink'}}>Random text border</h1>
      <h2 style={{ color: spalva === 1 ? 'blue' : 'red'}}>Random text color</h2> 
      </>
      );
  }
  
  export default Nd4;