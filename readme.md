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