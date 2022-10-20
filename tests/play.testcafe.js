// next line is optional, just for IDEs autocomplete :
/// <reference types="@applitools/eyes-testcafe" />

import Eyes from '@applitools/eyes-testcafe';

const alteryxUrl = "https://render-wus.applitools.com/renderid/a9b94d2c-aa72-4974-a2f6-dd954d6c0e29/eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBQ1lzM3FiMExrS0VqVmk0RmMyLUNRfn4iLCJpYXQiOjE2NjYyODQ5OTAsImV4cCI6MTY2NjMwNjU5MCwiaXNzIjoiZXllc2FwaS5hcHBsaXRvb2xzLmNvbSxleWVzcHVibGljd3VzaTAuYmxvYi5jb3JlLndpbmRvd3MubmV0IiwidmdzZXJ2aWNldXJsIjoiaHR0cHM6Ly9yZW5kZXItd3VzLmFwcGxpdG9vbHMuY29tIiwicHJ2IjoiMiJ9.nCSTxMElQYdUInsASlEc2Cuivnpt1yLIyfEocgncbgU3TEIO8Sz96UNdqKQJoO52G3J5yfqbiJQWESUw8aeBUwj1dw-QIIpyZLOpYVxH7okBT67efxtLDjRPrT9aXNQ_azJkxGxtiDhVPN4uv0uatydK4QQIH2I4j6NpxYGUEa0/?rg_namespace-override=q35BGHNTkU6lteQ4DZaBxQ~~";

const eyes = new Eyes();

fixture`Testcafe Demo App`.page`${alteryxUrl}`
    .afterEach(async () => eyes.close())
    .after(async () => {
        let allTestResults = await eyes.waitForResults(false)
        console.log(allTestResults)
    });

test('ultraFastTest', async t => {
    await eyes.open({
        t, 
        appName: 'alteryx stitching',
        testName: 'alteryx stitching',
    });
    await eyes.checkWindow({
        tag: "Full page",
        target: 'window',
        fully: true
    });
});
