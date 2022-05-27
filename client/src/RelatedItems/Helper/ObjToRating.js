// --EVERYTHING UP TO RETURN - // // TODO: Remove and place into APP


function metaToRating(meta) {
  // console.log('meta', meta);
  const rating = 5;
  let totalStars;
  let divideTotalStars;


  const totalStarsFunction = (obj) => {
    const array = Object.values(obj);
    let result = 0;
    for (let i = 0; i < array.length; i += 1) {
      result += Number(array[i]) * (i + 1);
    }
    return result;
  };

  const divideTotalStarsFunction = (obj) => {
    const array = Object.values(obj);
    let result = 0;
    for (let i = 0; i < array.length; i += 1) {
      result += Number(array[i]) * 5;
    }
    return result;
  };

  if (meta.ratings) {
    const values = Object.values(meta.ratings);
    const total = values.reduce((a, b) => {
      a += Number(b);
      return a;
    }, 0);
    const result = [];

    for (const value of values) {
      result.push((value / total) * 100);
    }

    totalStars = totalStarsFunction(meta.ratings);
    divideTotalStars = divideTotalStarsFunction(meta.ratings);
  }

  //   const [totalStars, setTotalStars] = useState(0);
  //   const [divideTotalStars, setDivideTotalStars] = useState(0);
  //   const [recommended, setRecommended] = useState(0);
  //   const [starRatings, setStarRatings] = useState([]);




  // console.log((totalStars / divideTotalStars) * 5);

  return (totalStars / divideTotalStars) * 5;
}

export default metaToRating;
