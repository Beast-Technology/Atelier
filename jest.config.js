module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    // comment out your component root folderstring when working on your module test

    // ProductOverview
    '<rootDir>/client/src/ProductOverview',

    // QuestionsAndAnswers
    '<rootDir>/client/src/QuestionsAndAnswers',

    // ReatingAndReviews
    '<rootDir>/client/src/RatingsAndReviews',

    // RelatedItems
    // '<rootDir>/client/src/RelatedItems',

  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
