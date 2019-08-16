const cognito_dev = {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_rYwdZk5iD",
    APP_CLIENT_ID: "2gkqjvlvsldtq1dcinra9jmnpo",
    IDENTITY_POOL_ID: "eu-west-1:e403d2d3-b7b2-4dab-9e50-2b9b898c5244"
  }
  
  const cognito_qa = {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_fxepkCpag",
    APP_CLIENT_ID: "7aq3jkphtidf4ca6aapb3dtk8q",
    IDENTITY_POOL_ID: "eu-west-1:150f2b87-decc-4a8d-bf03-f3e0217aeb17"
  }
  
  const cognito_staging = {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_OfCfigMFi",
    APP_CLIENT_ID: "1bu1t02dich9v7ndaqsv6h6l9t",
    IDENTITY_POOL_ID: "eu-west-1:7b12d720-70fb-466b-84fb-53fe8cb31f20"
  }
  
  const cognito_prod = {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_3koJBvd5X",
    APP_CLIENT_ID: "3a80p4pnn4i367bkj623deib2k",
    IDENTITY_POOL_ID: "eu-west-1:353867ce-15a2-4799-b350-7998b0f6fa91"
  }
  
  const api_dev = {
    endpoint: "https://4z86wgimul.execute-api.eu-west-1.amazonaws.com/v1",
    region: "eu-west-1"
  }
  
  const api_qa = {
    endpoint: "https://jnoa7q1cy2.execute-api.eu-west-1.amazonaws.com/v1",
    region: "eu-west-1"
  }
  
  const api_staging = {
    endpoint: "https://jtovrzgzqd.execute-api.eu-west-1.amazonaws.com/v1",
    region: "eu-west-1"
  }
  
  const api_prod = {
    endpoint: "https://47ypm89mlk.execute-api.eu-west-1.amazonaws.com/v1",
    region: "eu-west-1"
  }
  
  export default {
    env: process.env.REACT_APP_ENV,
    cognito: 
      process.env.REACT_APP_ENV === "qa" ? cognito_qa
      : process.env.REACT_APP_ENV === "staging" ? cognito_staging
      : process.env.REACT_APP_ENV === "prod" ? cognito_prod
      : cognito_dev,
    api: process.env.REACT_APP_ENV === "qa" ? api_qa
      : process.env.REACT_APP_ENV === "staging" ? api_staging
      : process.env.REACT_APP_ENV === "prod" ? api_prod
      : api_dev,
    mixPanelToken: "92f3ea9995e7cc99c7c504943cb4cffa",
  };
  