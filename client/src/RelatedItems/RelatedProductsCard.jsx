import React from 'react';


function RelatedProductsCard({relatedItem}) {

  return (
    <div
    id="RelatedProductsCard"
    style={{
      position:"relative",
      margin: 10,
      height: 260, width: 200,
      minWidth: 200,
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      padding: 8,
      backgroundColor: "#f1f1f1",
      display: "grid",
      alignContent: "space-between",
    }}
    >
    <img style={{height: 150, width: "100%", padding: "0 0 5px"}} src={""} />
    <button style={{
      position:"absolute",
      right:15,
      top:9,
      width:25,
      height:25,
      border: "none",
      fontSize: 19,
      backgroundColor: "rgb(255 255 255 / 0%)",

      // borderRadius:50,
      // color: "black",
      // zIndex:1,
      // textAlign:"center",
      // verticalAlign: "baseline",
      // boxShadow: "rgb(0 0 0 / 15%) 2px 2px 3px",
      // TODO: add hover and click effect in CSS
    }}>☆</button>
    <div style={{fontSize: 12, display: "block", padding: "0 0 5px"}}>{relatedItem.category}</div>
    <div style={{fontSize: 18, fontWeight: "bold", display: "block", padding: "0 0 5px"}}>{relatedItem.name}</div>
    <div style={{fontSize: 14, display: "block", padding: "0 0 5px"}}>${parseInt(relatedItem.default_price)}</div>
    <div>★★★★★</div>

    </div>
    );
  }

  export default RelatedProductsCard;

