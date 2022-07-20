import random from "../../Funcions/rand";

//sukuriam component
function Kosmosas({spalva, krastas,manoStlius}){ //propsai skliausteliuose
return(  //skliaustelis tam kad rasyti saraso budu jei butu daug kodo
    
    <>
    <div style={
        {
            color: spalva, 
            backgroundColor: 'skyblue',
            fontSize: random(20, 50)+'px',
            padding: krastas,
            borderRadius:'20px',
            }
            }
            >MAR-SAS</div>
    
    <div style={manoStlius}>KOS-MOS</div>
    </>
    )
}

export default Kosmosas;