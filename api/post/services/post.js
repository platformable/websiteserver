'use strict';
/* const axios = require('axios') */
/* EXAMPLE FOR DIGITALOCEAN */
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */


/* const token = process.env.POSTS_BUILD_TOKEN
const appId = process.env.APP_ID

const triggerBuild = (token,appId)=>{
    axios({
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        url: `https://api.digitalocean.com/v2/apps/${appId}/deployments`,
       body:{
           "force_build":true
        }
      });
}

module.exports =  {

    lifecycles: {

    async afterUpdate()  {
   triggerBuild(token,appId)  
      },

      async afterCreate()  {
        
        triggerBuild(token,appId)  
      },
      async afterDestroy()  {
        triggerBuild(token,appId)  
      },
    }
}; */