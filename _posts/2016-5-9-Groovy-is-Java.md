---
layout: post
redirect: http://fiveandahalfstars.ninja/blog/2016/2016-5-9-Groovy-is-Java.html
title: Groovy is Java is Groovy...
tags: [groovy]
---

There still seem to be some Java-Developers who are afraid of
mixing their Java codebase with the power of Groovy.

Some time ago, it was a valid argument that the dependency
to the groovy-all.jar would blow up the generated application,
but today many frameworks like Jasper-Reports, Apache-Camel and others might already add the
groovy-all.jar to the class path of your application. So there is no reason anymore
not to use Groovy in your project. 

The following snippets will show you how easy it is to combine Java und Groovy, because Groovy is Java and Java is Groovy...

This example assumes that you have Groovy and Java installed and `groovy-all-2.4.6.jar` is available in your work directory.

Create a simple Java class which just greets Groovy: 

**HelloGroovy.java**

``` java 
public class HelloGroovy {
	public static void main(String[] args) {
		System.out.println("Hello Groovy. This is java!");
	}
}
```

...and compile it...

`javac -cp . HelloGroovy.java`

Now create a Groovy-Script which greets Java and calls the Java class from above

**HelloJava.groovy**

``` groovy 
println "Hello Java, this is Groovy!"
HelloGroovy.main(); //call the first java-snippet
```

...and compile it...

`groovyc -cp . HelloJava.groovy`

Now create a third file which contains a Java class which calls the class created by the Groovy-Script

**Test.java**

``` java 
class Test {
	public static void main(String[] args) {
		System.out.println("Java & Groovy = Dream-Team!");
		HelloJava.main();
	}
}
```

...and compile it. This time, we need the `groovy-all.jar` in the classpath:

`javac -cp ".;groovy-all-2.4.6.jar" Test.java`

That's it. Now let's execute the test class:

```bash
$ java -cp ".;groovy-all-2.4.6.jar" Test
Java & Groovy = Dream-Team!
Hello Java, this is Groovy!
Hello Groovy. This is java!
```

Wasn't that easy?

PS: yes, this is very old knowledge, but sometimes the good things have to be repeated over and over again...
