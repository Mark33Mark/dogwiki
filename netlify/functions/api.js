const doggyDb = require( "./utils/doggyDb.json" );

exports.handler = (event, context, callback) => {

  const breeds = doggyDb.map((dogs)=>dogs.name)

  context.callbackWaitsForEmptyEventLoop = false;

          callback( null, {
              statusCode: 200,
              headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(breeds)
            })
        }
