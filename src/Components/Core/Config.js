const dev = {
  cognito: {
    REGION: "",
    USER_POOL_ID: "",
    APP_CLIENT_ID: "",
    IDENTITY_POOL_ID: ""
  },
  apiGateway: {
    Example: {
      NAME: "",
      REGION: "",
      URL: ""
    },
  },
  s3: {
    REGION: '',
    BUCKET: ''
  }
};

const prod = {
  cognito: {
    REGION: "",
    USER_POOL_ID: "",
    APP_CLIENT_ID: "",
    IDENTITY_POOL_ID: ""
  },
  apiGateway: {
    Example: {
      NAME: "",
      REGION: "",
      URL: ""
    },
  },
  s3: {
    REGION: '',
    BUCKET: ''
  }
};

const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
