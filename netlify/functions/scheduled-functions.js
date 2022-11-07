exports.handler = (event, context) => {
    console.log('Cron is running in ROOT dir!!!', event)
    //do something
    return { statusCode: 200 }
  }