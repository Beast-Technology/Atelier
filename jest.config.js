module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    // insert test here if you wish to ignore them when running 'npm run test script'
    // '/node_modules/',

    // ProductOverview
    '<rootDir>/client/src/ProductOverview',

    // QuestionsAndAnswers
    '<rootDir>/client/src/QuestionsAndAnswers',

    // ReatingAndReviews
    '<rootDir>/client/src/RatingsAndReviews',

    // RelatedItems
    '<rootDir>/client/src/RelatedItems',

  ],
};
