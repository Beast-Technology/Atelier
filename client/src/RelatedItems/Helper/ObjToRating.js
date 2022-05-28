

function metaToRating(meta) {
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
    const total = values.reduce((a, b) => a + Number(b), 0);
    const result = [];
    values.forEach((value) => {
      result.push((value / total) * 100);
    });

    totalStars = totalStarsFunction(meta.ratings);
    divideTotalStars = divideTotalStarsFunction(meta.ratings);
  }
  return (totalStars / divideTotalStars) * 5;
}

export default metaToRating;
