
$task.fetch($request).then($response => {
    if( $response.headers['Transfer-Encoding'] === 'chunked' ) {
        delete $response.headers['Transfer-Encoding']
    }
    if( $response.headers['Content-Encoding'] === 'gzip' ) {
        delete $response.headers['Content-Encoding']
    }
    delete $response.headers['Content-Length']
    console.log($response.body)
    if( $request.url.indexOf('/profile') > -1 ) {        
        $done($response.body.replace('09-13 20:00:', '09-13 13:00:').replace('"status":3', '"status":2'))
    } else {
        $done($response)
    }
})
