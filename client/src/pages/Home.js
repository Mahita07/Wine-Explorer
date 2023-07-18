import {useState,useEffect} from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
export const Home = () => {
  const [wines,setWines] = useState();
  useEffect(() =>{
    const fetchWineData = async() =>{
      try{
        const response = await axios.get("http://localhost:3001/wines");
        if(response){
          console.log(response.data);
          setWines(response.data);
        }
      }
      catch(err){
        console.error(err);
      }
    };
    fetchWineData();
  },[])
  if (!wines) {
    return <div>Loading...</div>; // You can customize the loading state as needed
  }
  return (
    <>
    <div>
      <h1>Welcome to Wine Explorer</h1>
      <div className="d-flex flex-wrap">
        {wines.map((wine) => (
          <Card key={wine._id} style={{width:"300px",height:"auto",margin:"10px"}}>
            <div className="d-flex justify-content-center">
            <Card.Img variant="top" src={wine.imageUrl} style={{height:"200px"}}/>
            </div>
            <Card.Body>
              <Card.Title style={{fontSize:"16px",textAlign:"center"}}>{wine.name}</Card.Title>
              <Card.Text style={{fontSize:"12px"}}>Type:{wine.type}</Card.Text>
              <Card.Text style={{fontSize:"12px"}}>Region:{wine.region}</Card.Text>
              <Card.Text style={{fontSize:"12px"}}>Grape Varieties:{wine.grapeVarieties.join(", ")}</Card.Text>
              {wine.tastingNotes && <Card.Text style={{textAlign:"justify",fontSize:"12px"}}>Tasting Notes: {wine.tastingNotes}</Card.Text>}
            </Card.Body>
          </Card>
        ))}
        </div>
    </div>
    </>
  );
}
