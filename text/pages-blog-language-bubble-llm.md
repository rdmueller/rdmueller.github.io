# Your LLM Holds a Whole Library. You Are Shown One Shelf.
Page: https://rdmueller.github.io/pages/blog/language-bubble-llm.html

EN
 5 July 2026
 

 

# Your LLM Holds a Whole Library. You Are Shown One Shelf.

 

 
 
 

 
 A modern LLM has read a large share of everything humanity ever wrote, in hundreds of languages, and it understands them all equally well. Its knowledge is language-agnostic in a real sense: the thought a Japanese developer wrote down in Japanese sits in the same model that answers you in English. And yet, when you ask a question, it quietly hands you back a world that matches your own language and culture. The whole library is there. What you are shown is one shelf.

 

## Your language skews the answer in two places, not only in search

 The easy mistake is to assume the model does not "know" the other cultures. It knows them. The bottleneck is not comprehension, it is the question. You write in English, so it thinks inside the frame that comes with English, and that frame acts in two places at once. It shapes the search queries the model builds for the web. And, less visibly, it already shapes the answer the model generates from itself. The bias enters not only through search, it also sits in the weights. That sounds like a claim, so we measured it.

 Picture a multilingual librarian who reads every language but, unasked, only ever brings you books from the shelf in your own. The other shelves are not locked. He simply does not reach for them until you ask.

 

## The evidence: one question, five languages, five canons

 We asked the same model the same question in five languages, English, German, Chinese, Japanese, Russian, each phrased natively and with no web search at all, so the answer comes purely from the weights. Two questions, to isolate the effect: once for the "ten most important writers of all time" (a deeply culturally rooted field) and once for the "ten most important pioneers of computer science" (a globally standardized field, as a control).

 The result splits cleanly. For the writers, every language pulls in its own tradition, names that are simply absent from the other answers. The Chinese answer names 曹雪芹, 鲁迅 and 李白; the Japanese one 夏目漱石 and 川端康成; the Russian one six Russians from Pushkin to Turgenev. The English list, by contrast, contains not a single German and not a single East Asian. For the computing pioneers the effect nearly vanishes: all five languages name Turing and von Neumann, and the lists overlap by about ninety percent.

 
 
 
 LanguageWriters (culturally rooted)Computing pioneers (global)

 
 
 en5 / 10 anglophone~9 / 10 (the global canon is anglophone)

 de4 / 10 German1 / 10 (only Zuse)

 zh3 / 10 Chinese1 / 10 (only Yao Qizhi)

 ja4 / 10 Japanese0 / 10

 ru6 / 10 Russian1 / 10 (only Lebedev)

 
 
 Home share: how many of the ten named are the language's own compatriots. Same question, asked natively in five languages, no web search, purely from the model weights. n=1 per cell; the effect is consistent across four independent languages.
 

 Two things follow. First: the bias really does sit in generation, not only in search, the same question produces five different canons before anything is looked up. Second, and this is the subtle part: how strong it is depends on the topic. Where each culture keeps its own tradition, it is large; where a global canon exists, close to zero. The frame distorts most where there is most to lose.

 

## A single sentence opens the first filter

 The good news: the layer you can open directly, search, yields to one instruction. Tell the model to leave your language bubble, and it does, because the cross-cultural training data it needs is already inside it. You are not unlocking anything, you are only activating what was already there.

 Do not search in English only. Research the topic natively in
Chinese, Japanese, Russian, Spanish and Portuguese as well. Name the
concepts the way they are actually called in each language, not as a
translation. At the end, state which languages you covered and which
remain structurally under-represented.

 

## Translation is not enough, the concepts do not line up

 The subtle part is that this is not about translation. If the model merely rendered your English query into Chinese, you would get the Chinese word for your English term, and miss exactly what the Chinese-speaking world actually means by it. The model knows the difference. It knows that "Docs-as-Code" lives in Chinese as 文档即代码 with its own tool culture (VuePress, docsify, dedicated CJK typesetting linters), in Japanese as the world of Re:VIEW and 技術書典, in Russian around Foliant and Habr, ecosystems that are not translations of the English discourse but parallel worlds with their own vocabulary.

 We ran our own field study of the thought leaders in the Docs-as-Code field, and the gap was stark. A purely German-English search returned 38 names, of which a good four fifths (84%) came from the USA, the UK and Germany. A follow-up native search in eight further languages found 24 additional names (+63%), most of them in East Asian ecosystems the English frame was simply blind to. It is the same blindness we just saw in pure generation: search and model memory distort in the same direction and reinforce each other.

 

## But you do not know what is really in the data

 Here the second wall begins, and this one cannot be waved away. You do not know what is actually in the training data, and you do not know what is in the index of the search the model uses. Both are a black box. The model can only show what it learned or what its search brings back, and an entire language can be thin in the training data or poorly covered in the index without your ever seeing the gap. Because you cannot see what was never retrieved. The honest answer is therefore not to claim completeness, but to declare the frame: which languages you covered, and which consequently stay under-represented.

 

## And the last wall no one can remove: walled gardens

 Even a perfect, bias-free search would still run into a wall. A large part of the world's knowledge lives in walled gardens that open search engines never enter, Chinese content in WeChat 公众号 and Zhihu, Korean content in Naver, discussions locked inside Discord, Slack or private forums. A native query in the right language still comes back empty there, and that emptiness looks exactly like real absence. It is not.

 One thing breaks the wall: deliberate localization. When a project puts an official translation on the open web, the Chinese arc42 site docs.arc42.cn is the model case, it becomes visible even in a walled-garden market, because it stepped in front of the wall on purpose. But that is the exception that proves the rule: what reaches you is what someone chose to expose.

 

## The bubble is not the model, it is your question

 Lay the walls on top of one another and the lesson is clear. The first filter, your language, acts twice: in search, which you break open with one sentence, and in generation, which you have to know about and name. The second, the unknown contents of data and index, cannot be removed, only honestly declared. The third, the walled gardens, cannot be broken through at all; you can only name it, so that your result reads as "the searchable world" and not as "the world".

 Breaking the bubble is therefore not a switch you flip. It is a discipline: to instruct the model, from inside your own language, to search for concepts the way they are natively named, and to say out loud what you did not reach. The library is enormous. Whether you see one shelf or many is decided by the question you ask.

 To close, a confession. I first wrote this article in German. Then the irony caught up with me: a piece about leaving your language bubble, stuck inside one, reachable only by readers who already share my tongue. So here it is in English. Take the switch as the first move it recommends.

 

 
 

## LinkedWild
