---
layout: post
title: "AsciiDoc Image Size"
tags: [asciidoc]
---

When you write integration tests for your web application, you certainly need an http client.
But there are many on the market - too many and all with different approaches.

I recently learned to love [HttpBuilder-NG](https://http-builder-ng.github.io/http-builder-ng/).
I already was used to the old HttpBuilder which was often used with groovy, so I was quite eager to give the next generation a try.

The approach it implements is totally different to what I was used to.
I just wanted to get a result back and then crawl over the given structure to find the properties I need. But HttpBuilder-NG comes with its own DSL which is very felxible but also has a learning curve.

To make things easier for me, I came up with a generic template for my test approaches:

{% highlight groovy %}

    @Grab('io.github.http-builder-ng:http-builder-ng-core:1.0.3')

    import static groovyx.net.http.HttpBuilder.configure

    def (statusCode, headers, body)
    
    (statusCode, headers, body) = configure {
        request.uri = "http://example.com"
        request.headers = headers
    }.get(List) { 
        response.success { FromServer resp, Object body -> 
            [
                resp.statusCode,
                resp.headers,
                body.toString()
            ]
        }
    }   
    
{% endhighlight %}
    
Wrapped in a function, this lets you execute various get requests with a given `uri` and a set of `headers`and will retrieve the http `statusCode`, response `headers` and the `body`.

This template is a good starting point for further kind of requests and refinements where you, for instance, do not need all headers but only the location-header of redirects.

As I already mentioned, there are many http clients available. And that is another strenght of HttpBuilder-NG: it is "just" a builder with the most common http clients under the hood.

When you change the dependency from

    @Grab('io.github.http-builder-ng:http-builder-ng-okhttp:1.0.3')

to

    @Grab('io.github.http-builder-ng:http-builder-ng-core:1.0.3')

or

    @Grab('io.github.http-builder-ng:http-builder-ng-apache:1.0.3')

you switch the underlying http client from [OkHttp](http://square.github.io/okhttp/) to the java core implementation or [Apache HttpComponents](http://hc.apache.org/httpcomponents-client-ga/)

Another solution I would like to share is how to disable the client following redirects. 
It seems that many people have the problem that they want to modify how the http client behaves in terms of redirects. 
When it comes to testing, I always want to follow the redirects manually.
Bit all clients did it automatically.

I googled a lot and was already at a point where I said "I will use the first http client where I manage to disable to follow redirects". 
Many hints you find on the web are for older versions or simply seem not to work.

The code which finally worked for me is the following:

{% highlight groovy %}

    ...
    
    (statusCode, headers, body) = configure {
        request.uri = "http://example.com"
        request.headers = headers
        client.clientCustomizer { builder ->
            builder.followRedirects = false
            builder.followSslRedirects = false
        }
    }.get(List) {
    
    ... 
{% endhighlight %}

 