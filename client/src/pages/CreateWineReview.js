import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export const CreateWineReview = () =>{
    const[wine,setWine] = useState({
        name:"",
        type:"",
        region:"",
        grapeVarieties:[],
        description:"",
        imageUrl:"",
        contributor:""
    });
    const [grapeType,setNewGrapeType] = useState();
    const [grapesList,setGrapeList] = useState();
    const handleChange = (event) =>{
        const {name,value} = event.target;
        setWine({...wine,[name]:value});
    }
    
    const addGrapeVariety = (event) =>{
        if(grapeType.trim() !==''){
            setWine({...wine,grapeVarieties:[...wine.grapeVarieties,grapeType]});
            console.log(grapeType,wine)
            setGrapeList(wine.grapeVarieties);
            setNewGrapeType('');
        }
        
    }

    return(
        <>
        <div className='createWine' style={{padding:"20px", display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
            <h2>Create Wine</h2>
            <Form>
      <Form.Group className="mb-3"  style={{display:"flex",flexDirection:"row"}}>
        <div>
        <Form.Label>Name</Form.Label>
        <Form.Control name="name"  id="name" onChange={handleChange} placeholder="Enter name" style={{width:"300px",margin:"5px"}}/>
        </div>
        <div>
        <Form.Label>Type of Wine</Form.Label>
        <Form.Control name="type" type="text" id="type" onChange={handleChange} placeholder="Type" style={{width:"300px",margin:"5px"}}/>
        </div> 
      </Form.Group>
      <Form.Group className="mb-3"  style={{display:"flex",flexDirection:"row"}}>
        <div>
        <Form.Label>Region</Form.Label>
        <Form.Control name="region"  type="text" id="region" onChange={handleChange} placeholder="Region" style={{width:"300px",margin:"5px"}}/>
       </div>
        <div>
        <Form.Label>Image URL</Form.Label>
        <Form.Control name="imageUrl" type="text" id="imageUrl" onChange={handleChange} placeholder="Image URL" style={{width:"300px",margin:"5px"}}/>
        </div> 
      </Form.Group>
      <Form.Group className="mb-3"  style={{display:"flex",flexDirection:"row"}}>
        <div>
        <Form.Label>Description</Form.Label>
        <Form.Control name="description" type="text" as="textarea" id="description" onChange={handleChange} placeholder="Description" style={{width:"300px",height:"90px",margin:"5px"}}/>
        </div>
        <div>
        <Form.Label>Grape Varieties</Form.Label>
        <Form.Control name="grapeVarieties" type="text" id="grapeVarieties" onChange={(event) => setNewGrapeType(event.target.value)} placeholder="Add Grape Variety" style={{width:"300px",margin:"5px"}}/>
        <Button variant="primary" name="addGrape" onClick={addGrapeVariety} type="button" style={{margin:"10px"}}>
        Add Grape Variety
        </Button>
        </div> 
      </Form.Group>
      {/*<Form.Group>
         <ul>
        {grapesList?grapesList.map((item, index) => (<li key={index}>{item}</li>)):null}
      </ul>
      </Form.Group>*/}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
        </>

    );
}