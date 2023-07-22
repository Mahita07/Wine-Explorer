import {useState,useEffect} from "react";
import { Card,Button } from "react-bootstrap";
import axios from "axios";
export const Favourites = () =>{
    const [wines,setWines] = useState();
    useEffect(() =>{
        const fetchWineData = async() =>{
          try{
            const response = await axios.get("http://localhost:3001/wines/savedWines", {
            params: {
                    userId: window.localStorage.getItem("userID"),
                    },
            });
            if(response){
                console.log(response.data.savedWines)
                setWines(response.data.savedWines);
                alert("Wine saved to Favourites")
            }
          }
          catch(err){
            console.error(err);
          }
        };
        fetchWineData();
      },[])
      if (!wines) {
        return <div>Loading...</div>; 
      }
      else{
          console.log(wines)
      }
    return(
        <>
        <p>Favs</p>
        <div style={{/*backgroundColor: "#d19592", backgroundImage: "linear-gradient(to right, #B279A7 0%, #a5a4cb 74%)*/ backgroundColor: "#B279A7"}}>
      <h1>Welcome to Wine Savvy</h1>
      <div className="d-flex flex-wrap" style={{padding:"20px",justifyContent:"center" }}>
        {wines.map((wine) => (
          <Card key={wine._id} style={{width:"300px",height:"auto",margin:"20px",backgroundColor: "#BAA6D1"}}>
            <div className="d-flex justify-content-center">
            <Card.Img variant="top" src={wine.imageUrl} style={{width:"100%",height:"200px",objectFit:"contain"}}/>
            </div>
            <Card.Body>
              <Card.Title style={{fontSize:"22px",textAlign:"center",fontWeight:"bold",fontFamily:"'Vollkorn SC', serif"}}>{wine.name}</Card.Title>
              <Card.Text style={{fontSize:"16px"}}>{wine.type}</Card.Text>
              <Card.Text style={{fontSize:"16px",lineHeight:"1"}}>{wine.region}</Card.Text>
              <Card.Text style={{fontSize:"16px"}}>{wine.grapeVarieties.join(", ")}</Card.Text>
              {wine.tastingNotes && <Card.Text style={{textAlign:"justify",fontSize:"16px"}}><p style={{fontWeight:"600",lineHeight:"1"}}>Tasting Notes</p> {wine.tastingNotes}</Card.Text>}
            </Card.Body>
          </Card>
        ))}
        </div>
    </div>
        </>
    )
}