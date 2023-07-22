import {useState,useEffect} from "react";
import { Card,Button } from "react-bootstrap";
import axios from "axios";
export const Home = () => {
  const [wines,setWines] = useState();
  const [savedWine,setthisWine] = useState();
  const savethisWine = async(wineID) => {
        try{
          console.log(wineID,window.localStorage.getItem("userID"))
          const response = await axios.put("http://localhost:3001/wines",{wineId:wineID,userId:window.localStorage.getItem("userID")})
          console.log(response);
        }
        catch(err){
          console.error(err);
        }
  };
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
              <div style={{position:"absolute",bottom:"10px",right:"10px"}}>
              <Button className="btn btn-dark" type="button" onClick={() => savethisWine(wine._id)} style={{height:"30px",width:"40px",padding:"0px",borderRadius:"10px",fontSize:"12px",fontWeight:"600"}}>Save</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
        </div>
    </div>
    </>
  );
}
