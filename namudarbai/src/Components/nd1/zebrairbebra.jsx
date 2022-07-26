//sukuriam component
function Zebra({spalva}){
      //propsai skliausteliuose
    return(  //skliaustelis tam kad rasyti saraso budu jei butu daug kodo
        
        <h1 style={{ color: spalva === 1 ? 'blue' : 'red'}}>Zebrai ir Bebrai</h1>
        
        );
    }
    
    export default Zebra;