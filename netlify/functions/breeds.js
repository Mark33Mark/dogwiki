const doggyDb = require( "./utils/doggyDb.json" );
const doggyNinjaDb = require( "./utils/api-ninjas-doggyDb.json" );

exports.handler = (event, context, callback) => {

  const selectedBreed = JSON.parse(event.body);
  console.log("selected breed = ", selectedBreed);

  const breeds = doggyDb[doggyDb.findIndex( item => item.name === selectedBreed.breed)];

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
