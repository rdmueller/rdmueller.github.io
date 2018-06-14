---
layout: post
title: "Colorful Gradle"
tags: [gradle]
---

Did you ever whished to change the color of your gradle log output? Maybe to highlight something?

AFAIK, Gradle has no support for colors out of the box, but you can solve this easily - even without an additional library.

The key to success are [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code) (which are supported by most terminals) and a little trick.

The excape squences are initiated with the ESC-character 27. 
To print this character from within Java or Groovy, you need to cast it a little bit like this `new String((char) 27)`.
And that's already all of the magic, because the rest of the escape sequences are standard ASCII characters.

So, `print new String((char) 27) + "[33m"` turns the rest of your text yellow and `print new String((char) 27) + "[0m"` returns to the default color of the console.

Now, let's turn this knowledge into a small closure

{% highlight groovy %}
def color = { color, text ->
    def colors = [black: 30, red: 31, green: 32, yellow: 33, blue: 34, magenta: 35, cyan: 36, white: 37]
    return new String((char) 27) + "[${colors[color]}m${text}" + new String((char) 27) + "[0m"
}
{% endhighlight %}

With this closure, you can now spice up your text with color like this:

{% highlight groovy %}
println "this is ${color 'green', 'some'} ${color 'red', 'colorful'} ${color 'white', 'text'}"
{% endhighlight %}

The result looks something like this:

<div style="text-align: center;">
<img src="../images/console.png" style="max-width:100%;" />
</div>
