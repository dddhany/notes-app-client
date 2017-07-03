export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  apiGateway: {
    URL: 'https://xtywsd30bh.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    USER_POOL_ID : 'us-east-1_y3TW6m8XP',
    APP_CLIENT_ID : '2hg423861c2gu9geo9kse3b7mc',
    REGION: 'us-east-1',
    IDENTITY_POOL_ID: 'us-east-1:16f1d3ff-d3ef-4a10-9120-a24f04b22969',
  },
  s3: {
    BUCKET: 'tutorial-notes-app-upload',
  }
}