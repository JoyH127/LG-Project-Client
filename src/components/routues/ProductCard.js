export default function ProductCard({
  model_code,
  model_name,
  user_friendly_name,
  model_desc,
  msrp,
}) {
  return (
    <div className="box">
      <h5>{model_code}</h5>
      <h3>{user_friendly_name}</h3>
      <p>{model_desc}</p>
      <p>{msrp}</p>
    </div>
  );
}

// mistype the user friendly name as user friednly name
