import "./App.css";
import { useState } from "react";
import img1 from "./images/code1.jpeg";
const App = () => {
  const [jobs, setJobs] = useState([
    { role: "junior developer", type: "temporary" },
    { role: "scrum master", type: "permanent" },
    { role: "software developer", type: "permanent" },
  ]);
  const [selected, setSelected] = useState(false);
  return (
    <div>
      <h1>welcome to my sight</h1>
      <div>
        {jobs.map((job, index) => {
          return <Card job={job} key={index} />;
        })}
      </div>
      <button onClick={() => setSelected(true)}>add CV</button>
      {selected && <AddCv />}
      <div>
        <img src={img1} />
      </div>
    </div>
  );
};

const Card = ({ job }) => {
  return (
    <div>
      <h2>{job.role}</h2>
      <h3>{job.type}</h3>
      <button>apply</button>
    </div>
  );
};

const AddCv = () => {
  return <p>you have submitted your CV</p>;
};

export default App;
