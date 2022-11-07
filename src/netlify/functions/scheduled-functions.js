exports.handler = (event, context) => {
    console.log('Cron is running !!!', event)
    //do something
    return { statusCode: 200 }
  }