/* eslint-disable max-len */
module.exports = {


  // --------------------- using Products API ------------------- //


  // List Products //

  listProductsResponse1: [
    {
      id: 1,
      name: 'Camo Onesie',
      slogan: 'Blend in to your crowd',
      description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
      category: 'Jackets',
      default_price: '140',
    },
    {
      id: 2,
      name: 'Bright Future Sunglasses',
      slogan: "You've got to wear shades",
      description: "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
      category: 'Accessories',
      default_price: '69',
    },
    {
      id: 3,
      name: 'Morning Joggers',
      slogan: 'Make yourself a morning person',
      description: "Whether you're a morning person or not. Whether you're gym bound or not. Everyone looks good in joggers.",
      category: 'Pants',
      default_price: '40',
    },
  ],

  // Product Information //


  productInformationResponse1: {
    campus: 'hr-rfp',
    category: 'Jackets',
    created_at: '2021-08-13T14:38:44.509Z',
    default_price: '140.00',
    description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    features: [
      { feature: 'Sole', value: 'Rubber' },
      { feature: 'Material', value: 'FullControlSkin' },
      { feature: 'Mid-Sole', value: 'ControlSupport Arch Bridge' },
      { feature: 'Stitching', value: 'Double Stitch' },
    ],
    id: 40344,
    name: 'Camo Onesie',
    slogan: 'Blend in to your crowd',
    style: {
      'default?': true,
      name: 'Black',
      original_price: '40.00',
      photos: [{ thumbnail_url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' }],
      sale_price: null,
    },
    updated_at: '2021-08-13T14:38:44.509Z',
  },

  productInformationResponse2: {
    campus: 'hr-rfp',
    category: 'Jackets',
    created_at: '2021-08-13T14:38:44.509Z',
    default_price: '140.00',
    description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    features: [
      { feature: 'Sole', value: 'Non-Rubber' },
      { feature: 'Material', value: 'Cotton' },
      { feature: 'Mid-Sole', value: 'and Thats It' },
      { feature: 'Stitching', value: 'Double Stitch' },
    ],
    id: 40344,
    name: 'Heir Jordans',
    slogan: 'Blend in to your crowd',
    style: {
      'default?': true,
      name: 'Black',
      original_price: '40.00',
      photos: [{ thumbnail_url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' }],
      sale_price: null,
    },
    updated_at: '2021-08-13T14:38:44.509Z',
  },



  // Product Styles //

  productStyleResponse1: {
    product_id: '1',
    results: [
      {
        style_id: 1,
        name: 'Forest Green & Black',
        original_price: '140',
        sale_price: '0',
        'default?': true,
        photos: [
          {
            thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
            url: 'urlplaceholder/style_1_photo_number.jpg',
          },
          {
            thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
            url: 'urlplaceholder/style_1_photo_number.jpg',
          },
          // ...
        ],
        skus: {
          37: {
            quantity: 8,
            size: 'XS',
          },
          38: {
            quantity: 16,
            size: 'S',
          },
          39: {
            quantity: 17,
            size: 'M',
          },
        },
      },
      {
        style_id: 2,
        name: 'Desert Brown & Tan',
        original_price: '140',
        sale_price: '0',
        'default?': false,
        photos: [
          {
            thumbnail_url: 'urlplaceholder/style_2_photo_number_thumbnail.jpg',
            url: 'urlplaceholder/style_2_photo_number.jpg',
          },
          // ...
        ],
        skus: {
          37: {
            quantity: 8,
            size: 'XS',
          },
          38: {
            quantity: 16,
            size: 'S',
          },
          39: {
            quantity: 17,
            size: 'M',
          },
          // ...
        },
      },
    ],
    // ...
  },


  // Related Products //

  relatedProductsAPI: [
    40349,
    40351,
    40352,
    40344,
    40346,
  ],

  // --------------------- using Reviews API ------------------- //

  // List Reviews //

  listReviewsResponce1: {
    product: '2',
    page: 0,
    count: 5,
    results: [
      {
        review_id: 5,
        rating: 3,
        summary: "I'm enjoying wearing these shades",
        recommend: false,
        response: null,
        body: 'Comfortable and practical.',
        date: '2019-04-14T00:00:00.000Z',
        reviewer_name: 'shortandsweeet',
        helpfulness: 5,
        photos: [{
          id: 1,
          url: 'urlplaceholder/review_5_photo_number_1.jpg',
        },
        {
          id: 2,
          url: 'urlplaceholder/review_5_photo_number_2.jpg',
        },
        // ...
        ],
      },
      {
        review_id: 3,
        rating: 4,
        summary: 'I am liking these glasses',
        recommend: false,
        response: "Glad you're enjoying the product!",
        body: "They are very dark. But that's good because I'm in very sunny spots",
        date: '2019-06-23T00:00:00.000Z',
        reviewer_name: 'bigbrotherbenjamin',
        helpfulness: 5,
        photos: [],
      },
    // ...
    ],
  },

  // Get Review Metadata //

  getReviewMetadataResponse1: {
    product_id: '2',
    ratings: {
      2: 1,
      3: 1,
      4: 2,
    // ...
    },
    recommended: {
      0: 5,
    // ...
    },
    characteristics: {
      Size: {
        id: 14,
        value: '4.0000',
      },
      Width: {
        id: 15,
        value: '3.5000',
      },
      Comfort: {
        id: 16,
        value: '4.0000',
      },
    // ...
    },

    // --------------------- using Questions and Answers API ------------------- //

    // List Questions //

    listQuestionsResponse1: {
      product_id: '5',
      results: [{
        question_id: 37,
        question_body: 'Why is this product cheaper here than other sites?',
        question_date: '2018-10-18T00:00:00.000Z',
        asker_name: 'williamsmith',
        question_helpfulness: 4,
        reported: false,
        answers: {
          68: {
            id: 68,
            body: 'We are selling it here without any markup from the middleman!',
            date: '2018-08-18T00:00:00.000Z',
            answerer_name: 'Seller',
            helpfulness: 4,
            photos: [],
          // ...
          },
        },
      },
      {
        question_id: 38,
        question_body: 'How long does it last?',
        question_date: '2019-06-28T00:00:00.000Z',
        asker_name: 'funnygirl',
        question_helpfulness: 2,
        reported: false,
        answers: {
          70: {
            id: 70,
            body: 'Some of the seams started splitting the first time I wore it!',
            date: '2019-11-28T00:00:00.000Z',
            answerer_name: 'sillyguy',
            helpfulness: 6,
            photos: [],
          },
          78: {
            id: 78,
            body: '9 lives',
            date: '2019-11-12T00:00:00.000Z',
            answerer_name: 'iluvdogz',
            helpfulness: 31,
            photos: [],
          },
        },
      },
        // ...
      ],
    },


    // Answers List //

    answersListResponse1: {
      question: '1',
      page: 0,
      count: 5,
      results: [
        {
          answer_id: 8,
          body: 'What a great question!',
          date: '2018-01-04T00:00:00.000Z',
          answerer_name: 'metslover',
          helpfulness: 8,
          photos: [],
        },
        {
          answer_id: 5,
          body: "Something pretty durable but I can't be sure",
          date: '2018-01-04T00:00:00.000Z',
          answerer_name: 'metslover',
          helpfulness: 5,
          photos: [{
            id: 1,
            url: 'urlplaceholder/answer_5_photo_number_1.jpg',
          },
          {
            id: 2,
            url: 'urlplaceholder/answer_5_photo_number_2.jpg',
          },
            // ...
          ],
        },
        // ...
      ],
    },

    // --------------------- using Cart API ------------------- //

    // Get Cart
    getCartResponse1: [
      {
        sku_id: 1,
        count: 2,
      },
      {
        sku_id: 3,
        count: 1,
      },
      {
        sku_id: 5,
        count: 33,
      },
      // ...
    ],

  },

};
