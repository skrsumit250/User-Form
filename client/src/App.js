import React,{useState} from 'react'
import './App.css';

function App() {
  const [doctor,setDoctor]=useState("");
  const [patient,setPatinet]=useState("");
  const [age,setAge]=useState("");
  const [date,setDate]=useState("");
  const [audio,setAudio]=useState("");
  const [audioFile,setAudioFile]=useState(null);

  const [formData, setFormData] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [clear,setClear]=useState(false);
  const collectData=async(e)=>{
    e.preventDefault();
    try{
      const PORT=4000;
      const response=await fetch('http://localhost:'+PORT,{
        method:'post',
        body:JSON.stringify({doctor,patient,age,date,audio}),
        headers:{
          'Content-Type':'application/json'
        },
      });
      const result=await response.json();
      console.log(result);

      setFormData([...formData, { doctor, patient, age, date, audioFile }]);
      setFormSubmitted(true);
      setClear(true);
    }catch(error){
      console.error(error);
    }
    
  }
  const newForm=()=>{
    window.location.reload();
  }
  return (
    <>
      <div className="box">
        <form onSubmit={collectData}>
          <h1>Form</h1>
          <label>Doctor's Name</label>
          <input type="text" 
          value={doctor}
          onChange={(e)=>setDoctor(e.target.value)}/>

          <label>Patient's Name</label>
          <input type="text" 
          value={patient}
          onChange={(e)=>setPatinet(e.target.value)}/>

          <label>Patient's Age</label>
          <input type="number" 
          value={age}
          onChange={(e)=>setAge(e.target.value)}/>

          <label>Date</label>
          <input type="date" 
          value={date}
          onChange={(e)=>setDate(e.target.value)}/>

          <label>Upload Sound File</label>
          <input type="file" accept="audio/*" 
          onChange={(e)=>{setAudio(e.target.value);setAudioFile(e.target.files[0])}}/>

          <input type="submit" />
      </form>
    </div>
    {formSubmitted && (
        <table className='table-container'>
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Patient</th>
              <th>Age</th>
              <th>Date</th>
              <th>Audio</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index) => (
              <tr key={index}>
                <td>{data.doctor}</td>
                <td>{data.patient}</td>
                <td>{data.age}</td>
                <td>{data.date}</td>
                <td>
                  {data.audioFile && (
                    <audio controls>
                      <source src={URL.createObjectURL(data.audioFile)} />
                    </audio>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          {clear && (<button className='clear' onClick={newForm}>Submit New Form</button>)}
        </table>
      )}
    </>
  );
}

export default App;
