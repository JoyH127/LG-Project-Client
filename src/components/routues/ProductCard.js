import { Navigate, useNavigate } from "react-router-dom";
export default function ProductCard({
  model_code,
  model_name,
  user_friendly_name,
  model_desc,
  msrp,
}) {
  let navigate = useNavigate();
  
  return (
    <div className="box" onClick={()=> navigate(`Product/${model_code}`)}>
      <h6>{model_code}</h6>
      <h4>{user_friendly_name}</h4>
      <p>{model_desc}</p>
      <p>{msrp}</p>
    </div>
  );
}

// mistype the user friendly name as user friednly name
