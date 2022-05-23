import React from 'react';




function YourOutfitcard() {
  // const [count, setCount] = useState(0);



  // if (isLoggedIn) {
  //   button = <LogoutButton onClick={this.handleLogoutClick} />;
  // } else {
  //   button = <LoginButton onClick={this.handleLoginClick} />;
  // }





  return (
    <div id="YourOutfitcard"
    style={{
      position:"relative",
      margin: 10,
      height: 260, width: 200,
      minWidth: 200,
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      padding: 8,
      backgroundColor: "#f1f1f1",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
    >
    <div style={{fontSize: 80, display: "block", padding: "0 0 5px"}}>+</div>
    <button style={{fontSize: 18,height: "100%", width: "100%", borderRadius: 15}}>Add to Outfit</button>
    </div>
    );
  }


  // RelatedItemsContainer.propTypes = propTypes;
  // RelatedItemsContainer.defaultProps = defaultProps;

  export default YourOutfitcard;

