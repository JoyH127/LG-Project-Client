import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import apiUrl from "../../apiConfig";
import React from "react";

export default function Product() {
  const [products,setProducts] = useState([]);
  const [spec, setSpec] = useState([]);
  let { code } = useParams();
  const fetchSpec = async () => {
    const response = await axios(`${apiUrl}/spec`);
    setSpec(response.data);
  }

  console.log("spec",spec);
  const render = ()=> {
    return products.map((product,index)=>{
      const {fk_category_code,
      fk_spec_code, model_code, model_desc, model_name,
    msrp, user_friednly_name} = product;
        console.log("code",code);
        return (<div>
          {code == model_code ?(<div className="product_container">
            <div className="tem_img"></div>
            <div className="product_info">
              <p>{model_name}</p>
              <h4>{fk_category_code}</h4>
              <h3>{user_friednly_name}</h3>
              <p>{model_desc}</p> 
              </div>
          </div>):(<></>) }
        </div>)
    })
  }

  const fetchData = async () => {
    try {
      const response = await axios(`${apiUrl}/product`);
    setProducts(response.data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchData();
    fetchSpec();
  },[]);
 
  return <>
  <section>
    <div>{render()}</div>
    </section>
    <section>
      <div className="spec_container">
      {spec.map((sp, index)=> {
        const {spec_label} = sp;
        return(<h5>{spec_label}</h5>)
      })}
      </div>
      </section></>;
}
