import React, { useState, useEffect } from 'react';
import PhotoUploader from './PhotoUploader.jsx';
import { StarRatingSelect } from '../Stars.jsx';

const axios = require('axios');

export default function AddReviewModal({ productID, productName }) {
  // const product_id = 40333;

  const [metaAdd, setMetaAdd] = useState([]);

  const [recommend, setRecommend] = useState('');
  const [characteristic, setCharacteristic] = useState({ Comfort: null, Size: null, Width: null, Quality: null, Length: null, Fit: null });
  const [characteristicId, setCharacteristicId] = useState({'135221': null, '135219': null, '135220': null, '135222': null });
  const [starsRating, setStarsRating] = useState(0);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('/reviews/meta', {
      params: {
        product_id: 40344,
      },
    })
      .then((res) => {
        setMetaAdd(res.data);
      })
      .catch((err) => { console.log(err); });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('/reviews', { recommend, characteristic, starsRating, summary, body, name, email, photos, product_id: productID })
      .then(() => { console.log('success!') })
      .then(() => { document.getElementById('modal').style.display = 'none'; })
      .catch((err) => { alert(err) });
  }

  function handleCharacteristicChange({ charac, num }) {
    const newCharacteristics = { ...characteristic };
    newCharacteristics[charac] = num;
    setCharacteristic(newCharacteristics);
  }

  function handleRecommendChange(e) {
    setRecommend(e.target.value);
  }

  function handleSummaryChange(e) {
    setSummary(e.target.value);
  }

  function handleBodyChange(e) {
    setBody(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  const ratingStrings = {
    'Size-1': 'A size too small',
    'Size-2': 'Half a size too small',
    'Size-3': 'Perfect',
    'Size-4': '1/2 a size too long',
    'Size-5': 'A size too wide',
    'Width-1': 'Too narrow',
    'Width-2': 'Slightly narrow',
    'Width-3': 'Perfect',
    'Width-4': 'Slightly Wide',
    'Width-5': 'Too wide',
    'Comfort-1': 'Uncomfortable',
    'Comfort-2': 'Slightly uncomfortable',
    'Comfort-3': 'Ok',
    'Comfort-4': 'Comfortable',
    'Comfort-5': 'Perfect',
    'Quality-1': 'Poor',
    'Quality-2': 'Below average',
    'Quality-3': 'What I expected',
    'Quality-4': 'Pretty great',
    'Quality-5': 'Perfect',
    'Length-1': 'Runs short',
    'Length-2': 'Runs slightly short',
    'Length-3': 'Perfect',
    'Length-4': 'Runs slightly long',
    'Length-5': 'Runs long',
    'Fit-1': 'Runs tight',
    'Fit-2': 'Runs slightly tight',
    'Fit-3': 'Perfect',
    'Fit-4': 'Runs slightly long',
    'Fit-5': 'Runs long',
  };

  return (
    <div className="modal-box modal-review">
      <header>
        <h3 className="heading heading-tertiary">Review</h3>
        <span className="subheading">on the {productName}</span>
      </header>

      <main>
        <form className="modal-form" onSubmit={handleSubmit}>
          <label>Overall Rating *
            <StarRatingSelect totalStars={5} starsRating={starsRating} setStarsRating={setStarsRating} />
          </label>

          <label>Do you recommend this product? *
            <div className="recommendContainer">
              <label className="container">Yes
                <input type="radio" name="recommend" value="true" onClick={handleRecommendChange} />
                <span className="checkmark"></span>
              </label>
              <label className="container">No
                <input type="radio" name="recommend" value="false" onClick={handleRecommendChange} />
                <span className="checkmark"></span>
              </label>
            </div>
          </label>

          <label>Characteristics *
              {console.log(metaAdd)}
              {(Object.keys(metaAdd.characteristics || {})).map((charac) => (
                <label key={metaAdd.characteristics.id}>
                  <div className="charCategory">{charac}</div>
                  <div className="charContainer">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <div>
                        <div className="charNums">
                          <label className="container">{num}
                            <input type="radio" name={charac} onClick={() => handleCharacteristicChange({charac, num})}/>
                            <span className="checkmark"></span>
                          </label>
                        </div>
                        <span>{ratingStrings[`${charac}-${num}`]}</span>
                      </div>
                    ))}
                  </div>
                </label>
              ))}

          </label>

          <label>Review Summary *
            <input  name="asker_name" type="text" placeholder="Write your summary here..." onChange={handleSummaryChange} />
          </label>

          <label>Review Body *
            <textarea  onChange={handleBodyChange} name="question_body" maxLength="1000" placeholder="Write your body here..." required></textarea>
          </label>

          <label>Upload Photos *
            <PhotoUploader photos={photos} setPhotos={setPhotos} />
          </label>

          <label>Nickname *
            <input onChange={handleNameChange} name="asker_name" type="text" placeholder="Example: jackson11!" maxLength="60" required />
            <span className="input-description">For privacy reasons, do not use your full name or email address</span>
          </label>

          <label>Email *
            <input onChange={handleEmailChange} type="email" maxLength="60" placeholder="example@gmail.com" required />
            <span className="input-description">For authentication reasons, you will not be emailed</span>
          </label>

          <input className="btn btn-primary" type="submit" value="Submit Your Review" />
        </form>
      </main>
    </div>
  )
}