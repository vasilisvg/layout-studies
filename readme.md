# Layout studies

In this project I am investigating *all* the different ways we can layout items on the web. I am doing this because there is a lot of research about laying things out on paper, but not so much about laying things out on the web. Not all paper layout theory translates very well to the flexible web, hence this study.

For now I study two different types: laying out a *known* amount of items and laying out an *unknown* amount. I look at relations between text items, between image items, and between combinations. Yes, this is an insane undertaking, but with a little help I think we might come a long way.

## Measure
Most layouts are based on *ideal measure theory* that I found in the books <cite>The Elements of Typographic Style</cite> by Robert Bringhurst and <cite>Grid Systems</cite> by Josef Müller-Brockmann. I mix these theories in order to be more flexible, when necessary. When used separately, they are not always flexible enough for fluid layouts on the web.

Simply said, these theories consider an ideal measure to be between
- 45 and 75 characters (Bringhurst)
- 7 and 10 words (Müller-Brockmann)

There's no way to simple way to convert characters or words into usable web-units. There are some things we can use though: Bringhurst gives us a rather simple way to define a measure by saying that the measure is usually around 30 times the size of the type. This would mean that 30em is an ideal measure for 100% body text. In CSS this would easily translate to something like

```css
body {
	font-size: 100%;
	max-width: 30em;
}
```

But if we want to be more accurate and base our measure on the font we use or the language we work in, we might want to use a tool to calculate the ideal measure. [The International Measure Slider](http://nerd.vasilis.nl/code/measure-help/) lets you choose a font and a language and it returns the amount of characters and the amount of words per line. This tool needs updating so you can add your own text, and use other fonts. It's on Github, [feel free to contribute](https://github.com/vasilisvg/International-measure-slider).

According to this measure slider the ideal measure for English text set in Georgia (this project) is something like this:

```css
/* Bringhurst measure */
body {
	font: 100%/1.5 georgia, serif;
	min-width: 20em;
	max-width: 33em;
}

/* Müller-Brockmann measure */
body {
	font: 100%/1.5 georgia, serif;
	min-width: 14em;
	max-width: 23.5em;
}
```

So if we look at things liberally, *any text between 14em and 33em* is easy to read. These are the extremes I use in these layout studies. I'll mostly use a measure of around 24em.

### A note on grids
This study is not about grids, it's just about how items can be laid out. It's up to you, if you feel the need, to align these items to a logical, or beautiful grid that fits your design.

## Todo
There are always things to do for this project. 

### More layouts
I want examples from live sites. So if you know a site that uses a set of layouts that's not in this project, please make an issue with a link, and I'll create a version of it (or send a pull request with a working version).

### Naming schemes
I'd like to give names to certain types of layouts/grids, so it's easier to refer to them, and explain them. I have no idea about this at all. If you have a good idea, please let me know.

### Technical architecture
Right now, I write everything by hand. I'm not sure if I need anything more dynamic than plain HTML, CSS and a bit of JavaScript, but I can imagine that a more flexible approach could be handy in the future. Ideas and discussions are more than welcome. Feel free to open an issue.

