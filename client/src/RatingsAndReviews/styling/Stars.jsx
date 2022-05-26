import * as React from "react"

const Star = ({ fillTo }) => {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.7 24.8L32.35 40L24.8 34.1852V16H40L27.7 24.8Z"
        fill={fillTo >= .25 ? "goldenrod" : "gray"}
      />
      <path d="M20 0L24.8 16V34.168L20 30.6V0Z" fill={fillTo >= .5 ? "goldenrod" : "gray"} />
      <path d="M20 0L15.2 16V34.168L20 30.6V0Z" fill={fillTo >= .75 ? "goldenrod" : "gray"} />
      <path d="M12.3 24.8L7.65 40L15.2 34.1852V16H0L12.3 24.8Z" fill={fillTo >= 1 ? "goldenrod" : "gray"} />
    </svg>
  )
};

const Stars = ({ rating }) => {
  return (
    <div style={{display: "flex", flexFlow: "row nowrap", gap: "4px"}}>
      <Star fillTo={Math.min(rating, 1)} />
      <Star fillTo={rating - 1 > 0 ? Math.min(rating - 1, 1) : 0}/>
      <Star fillTo={rating - 2 > 0 ? Math.min(rating - 2, 1) : 0}/>
      <Star fillTo={rating - 3 > 0 ? Math.min(rating - 3, 1) : 0}/>
      <Star fillTo={rating - 4 > 0 ? Math.min(rating - 4, 1) : 0}/>
    </div>
  )
}

export default Stars;
