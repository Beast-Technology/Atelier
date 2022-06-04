import React, { useState } from 'react';
import PhotoUploader from './PhotoUploader.jsx';
import { StarRatingSelect } from '../Stars.jsx';

const axios = require('axios');

export default function AddReviewModal({ productID, productName }) {
  // const product_id = 40333;

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('/reviews', { body, name, email, product_id: productID })
      .then(() => { console.log('success!') })
      .then(() => { document.getElementById('modal').style.display = 'none'; })
      .catch((err) => { alert(err) });
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

  return (
    <div className="modal-box modal-review">
      <header>
        <h3 className="heading heading-tertiary">Review</h3>
        <span className="subheading">on the {productName}</span>
      </header>

      <main>
        <form className="modal-form" onSubmit={handleSubmit}>
          <label>Overall Rating *
            <StarRatingSelect totalStars={5} />
          </label>

          <label>Do you recommend this product? *
            <div className="recommendContainer">
              <label className="container">Yes
                <input type="radio" name="recommend" />
                <span className="checkmark"></span>
              </label>
              <label className="container">No
                <input type="radio" name="recommend" />
                <span className="checkmark"></span>
              </label>
            </div>
          </label>

          <label>Characteristics *

            <label>
              <div className="charCategory">Size</div>
              <div className="charContainer">
                <div className="charNums">
                  <div>
                    <label className="container">1
                      <input type="radio" name="size" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>A size too small</span>
                </div>
                <div className="charNums">
                  <div>
                    <label className="container">2
                      <input type="radio" name="size" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Half a size too small</span>
                </div>
                <div className="charNums">
                  <div>
                    <label className="container">3
                      <input type="radio" name="size" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Perfect</span>
                </div>
                <div className="charNums">
                  <div>
                    <label className="container">4
                      <input type="radio" name="size" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>1/2 a size too big</span>
                </div>
                <div className="charNums">
                  <div>
                    <label className="container">5
                      <input type="radio" name="size" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>A size too wide</span>
                </div>
              </div>
            </label>

            <label>
              <div className="charCategory">Width</div>
              <div className="charContainer">
                <div className="charNums">
                  <div>
                    <label className="container">1
                      <input type="radio" name="width" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Too narrow</span>
                </div>
                <div className="charNums">
                  <div>
                    <label className="container">2
                      <input type="radio" name="width" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Slightly narrow</span>
                </div>
                <div className="charNums">
                  <div>
                    <label className="container">3
                      <input type="radio" name="width" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Perfect</span>
                </div>
                <div className="charNums">
                  <div>
                    <label className="container">4
                      <input type="radio" name="width" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Slightly wide</span>
                </div>
                <div className="charNums">
                  <div>
                    <label className="container">5
                      <input type="radio" name="width" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Too wide</span>
                </div>
              </div>
            </label>

            <label>
              <div className="charCategory">Comfort</div>
              <div className="charContainer">
                <div className="charNums">
                  <div>
                    <label className="container">1
                      <input type="radio" name="comfort" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Uncomfortable</span>
                </div>
                <div className="charNums">
                  <div>
                    <label className="container">2
                      <input type="radio" name="comfort" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Slightly uncomfortable</span>
                </div>
                <div className="charNums">
                  <div>
                    <label className="container">3
                      <input type="radio" name="comfort" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Ok</span>
                </div>
                <div className="charNums">
                  <div>
                    <label className="container">4
                      <input type="radio" name="comfort" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Comfortable</span>
                </div>
                <div className="charNums">
                  <div>
                    <label className="container">5
                      <input type="radio" name="comfort" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Perfect</span>
                </div>
              </div>
            </label>

            <label>
              <div className="charCategory">Quality</div>
              <div className="charContainer">
                <div className="charNums">
                  <div>
                    <label className="container">1
                      <input type="radio" name="quality" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Poor</span>
                </div>
                <div className="charNums">
                  <div>
                    <label className="container">2
                      <input type="radio" name="quality" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Below average</span>
                </div>
                <div className="charNums">
                  <div>
                    <label className="container">3
                      <input type="radio" name="quality" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>What I expected</span>
                </div>
                <div className="charNums">
                  <div>
                    <label className="container">4
                      <input type="radio" name="quality" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Pretty great</span>
                </div>
                <div className="charNums">
                  <div>
                    <label className="container">5
                      <input type="radio" name="quality" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Perfect</span>
                </div>
              </div>
            </label>

            <label>
              <div className="charCategory">Length</div>
              <div className="charContainer">
                <div className="charNums">
                  <div>
                    <label className="container">1
                      <input type="radio" name="length" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Runs short</span>
                </div>
                <div className="charNums">
                  <div>
                    <label className="container">2
                      <input type="radio" name="length" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Runs slightly short</span>
                </div>
                <div className="charNums">
                  <div>
                    <label className="container">3
                      <input type="radio" name="length" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Perfect</span>
                </div>
                <div className="charNums">
                  <div>
                    <label className="container">4
                      <input type="radio" name="length" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Runs slightly long</span>
                </div>
                <div className="charNums">
                  <div>
                    <label className="container">5
                      <input type="radio" name="length" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Runs long</span>
                </div>
              </div>
            </label>

            <label>
              <div className="charCategory">Fit</div>
              <div className="charContainer">
                <div className="charNums">
                  <div>
                    <label className="container">1
                      <input type="radio" name="fit" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Runs tight</span>
                </div>
                <div className="charNums">
                  <div>
                    <label className="container">2
                      <input type="radio" name="fit" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Runs slightly tight</span>
                </div>
                <div className="charNums">
                  <div>
                    <label className="container">3
                      <input type="radio" name="fit" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Perfect</span>
                </div>
                <div className="charNums">
                  <div>
                    <label className="container">4
                      <input type="radio" name="fit" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Runs slightly long</span>
                </div>
                <div className="charNums">
                  <div>
                    <label className="container">5
                      <input type="radio" name="fit" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span>Runs long</span>
                </div>
              </div>
            </label>

          </label>

          <label>Review Summary *
            <input  name="asker_name" type="text" placeholder="Write your summary here..." />
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