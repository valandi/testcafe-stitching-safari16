module.exports = {
    apiKey: process.env.APPLITOOLS_API_KEY || 'your APPLITOOLS_API_KEY',
    //
    browser: [
        // Add browsers with different viewports
        {width: 1280, height: 720, name: 'chrome'},
        {width: 1280, height: 720, name: 'safari'},
        {width: 1920, height: 1080, name: 'safari'},
        {width: 1280, height: 720, name: 'safari'},
        {width: 1024, height: 768, name: 'safari'},
        {width: 1440, height: 2560, name: 'safari'},
        {width: 1280, height: 720, name: 'safari-one-version-back'}
    ],
    // set batch name to the configuration
    batchName: 'Ultrafast Batch',
    // specify Eyes concurrency level
    testConcurrency: 25,
}
