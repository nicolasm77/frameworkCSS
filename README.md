<!-- TOC -->

- [Getting started](#getting-started)
	- [Sources](#sources)
	- [Starter template](#starter-template)
- [Layout](#layout)
	- [Breakpoints](#breakpoints)
	- [Container](#container)
	- [Grid](#grid)
	- [Mixins](#mixins)
- [Content](#content)
	- [Heading](#heading)
	- [Paragraph](#paragraph)
	- [Lists](#lists)
	- [Images](#images)
	- [Tables](#tables)
- [Components](#components)
	- [AddThis](#addthis)
	- [Alerts](#alerts)
	- [Breadcrumb](#breadcrumb)
	- [Buttons](#buttons)
	- [Carousel](#carousel)
	- [Collapse](#collapse)
	- [Form](#form)
	- [Modal](#modal)
	- [Nav](#nav)
	- [Pagination](#pagination)
- [Utilities](#utilities)
	- [Clearfix](#clearfix)
	- [Backgrounds colors](#backgrounds-colors)
	- [Colors](#colors)
	- [Display](#display)
	- [Embed](#embed)
	- [Float](#float)
	- [Fonts](#fonts)
	- [Font size](#font-size)
	- [Icons](#icons)
	- [Margin](#margin)
	- [Padding](#padding)
	- [Text align](#text-align)
	- [Text transform](#text-transform)
	- [Vertical align](#vertical-align)

<!-- /TOC -->

# Getting started

## Sources

```html
<!-- /CSS -->
<link rel="stylesheet" href="dist/css/framework.min.css">

<!-- /JavaScript -->
<script type="text/javascript" src="dist/js/framework.min.js"></script>
```

---

## Starter template

```html
<!doctype html>
<html lang="fr">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<!-- CSS -->
		<link rel="stylesheet" href="/content/static/bcom/framework/css/framework.min.css">
		<title>...</title>
		<script type="javascript/text" src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	</head>
	<body>

		...

		<!-- JavaScript -->
		<script type="text/javascript" src="/content/static/bcom/framework/js/framework.min.js"></script>
	</body>
</html>
```

# Layout

## Breakpoints

```bash
// XS (portrait phones)
@media (max-width: 575.99px) { ... }

// SM (landscape phones)
@media (min-width: 576px) and (max-width: 767.99px) { ... }

// MD (tablets)
@media (min-width: 768px) and (max-width: 991.99px) { ... }

// LG (desktops)
@media (min-width: 992px) { ... }
```

---

## Container

La classe `.hub-container` permet de bloquer un élément à 1000px de large maximum et de le centrer automatiquement.

```html
<div class="hub-container">...</div>
```

---

## Grid

| Breakpoints | Classes               |
| ----------- | --------------------- |
| Défaut      | `.hub-col-{value}`    |
| XS          | `.hub-col-{value}-xs` |
| SM          | `.hub-col-{value}-sm` |
| MD          | `.hub-col-{value}-md` |
| LG          | `.hub-col-{value}-lg` |

_Values : {1 ~ 12}_

```html
<div class="hub-row">
	<div class="hub-col-6">...</div>
	<div class="hub-col-6">...</div>
</div>
```

> **Offset**

| Breakpoints | Classes                      |
| ----------- | ---------------------------- |
| Défaut      | `.hub-col-offset-{value}`    |
| XS          | `.hub-col-offset-{value}-xs` |
| SM          | `.hub-col-offset-{value}-sm` |
| MD          | `.hub-col-offset-{value}-md` |
| LG          | `.hub-col-offset-{value}-lg` |

_Values : {1 ~ 12}_

```html
<div class="hub-row">
	<div class="hub-col-4">...</div>
	<div class="hub-col-4 hub-col-offset-4">...</div>
</div>
```

> **Align items**

| Breakpoints | Classes                       |
| ----------- | ----------------------------- |
| Défaut      | `.hub-align-items-{value}`    |
| XS          | `.hub-align-items-{value}-xs` |
| SM          | `.hub-align-items-{value}-sm` |
| MD          | `.hub-align-items-{value}-md` |
| LG          | `.hub-align-items-{value}-lg` |

_Values : {start | center | end}_

> **Align self**

| Breakpoints | Classes                      |
| ----------- | ---------------------------- |
| Défaut      | `.hub-align-self-{value}`    |
| XS          | `.hub-align-self-{value}-xs` |
| SM          | `.hub-align-self-{value}-sm` |
| MD          | `.hub-align-self-{value}-md` |
| LG          | `.hub-align-self-{value}-lg` |

_Values : {start | center | end}_

> **Flex direction**

| Breakpoints | Classes               |
| ----------- | --------------------- |
| Défaut      | `.hub-flex-column`    |
| XS          | `.hub-flex-column-xs` |
| SM          | `.hub-flex-column-sm` |
| MD          | `.hub-flex-column-md` |
| LG          | `.hub-flex-column-lg` |

| Breakpoints | Classes               |
| ----------- | --------------------- |
| Défaut      | `.hub-row-reverse`    |
| XS          | `.hub-row-reverse-xs` |
| SM          | `.hub-row-reverse-sm` |
| MD          | `.hub-row-reverse-md` |
| LG          | `.hub-row-reverse-lg` |

> **Justify content**

| Breakpoints | Classes                           |
| ----------- | --------------------------------- |
| Défaut      | `.hub-justify-content-{value}`    |
| XS          | `.hub-justify-content-{value}-xs` |
| SM          | `.hub-justify-content-{value}-sm` |
| MD          | `.hub-justify-content-{value}-md` |
| LG          | `.hub-justify-content-{value}-lg` |

_Values : {start | center | end | around | between}_

[Demo](https://basjerome.github.io/framework/grid.html)

---

## Mixins

> **Border radius**

```bash
@include border-radius($radius);
```

> **Breakpoints**

```bash
@include breakpoints($media) {
	...
}

// Exemple
@include breakpoints($sm) {
	...
}
```

_$media : {xs | sm | md | lg}_

> **Box shadow**

```bash
@include box-shadow($x, $y, $blur, $spread, $color);
```

> **Opacity**

```bash
@include opacity($opacity, $alpha);
```

> **Translate**

```bash
@include translate($y, $x);
```

> **Transition**

```bash
@include transition($property, $timing, $delay);
```

---

# Content

## Heading

```bash
class="hub-h1"
class="hub-h2"
class="hub-h3"
class="hub-h4"
class="hub-h5"
class="hub-h6"
```

[Demo](https://basjerome.github.io/framework/heading.html)

---

## Paragraph

```html
<p class="hub-p">...</p>
```

[Demo](https://basjerome.github.io/framework/paragraph.html)

---

## Lists

> **Default**

```html
<ul class="hub-list">
	<li>...</li>
</ul>
```

> **Decimal**

```html
<ol class="hub-list-decimal">
	<li>...</li>
</ol>
```

> **Unstyled**

```html
<ul class="hub-list-unstyled">
	<li>...</li>
</ul>
```

> **Inline**

```html
<ul class="hub-list-inline">
	<li>...</li>
</ul>
```

> **Description**

```html
<dl class="hub-list-description">
	<dt>...</dt>
	<dd>...</dd>
</dl>
```

[Demo](https://basjerome.github.io/framework/list.html)

---

## Images

```html
<img src="..." alt="..." class="hub-img" />
```

---

## Tables

```html
<table class="hub-table">
	<thead>
		<tr>
			<td></td>
			<th>...</th>
			<th>...</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>...</th>
			<td>...</td>
			<td>...</td>
		</tr>
	</tbody>
</table>
```

[Demo](https://basjerome.github.io/framework/table.html)

---

# Components

## AddThis

```html
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-58a6bcdfe07cd736"></script>
<div class="addthis_inline_share_toolbox"></div>
```

[Demo](https://basjerome.github.io/framework/addthis.html)

---

## Alerts

```bash
...
```

---

## Breadcrumb

```html
<nav class="hub-breadcrumb" aria-label="breadcrumb">
	<ol itemscope itemtype="http://schema.org/BreadcrumbList">
		<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
			<a href="#" title="..." itemprop="item">
				<span itemprop="name">Home</span>
			</a>
			<meta itemprop="position" content="1" />
		</li>
		<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
			<a href="#" title="..." itemprop="item">
				<span itemprop="name">Parent</span>.
			</a>
			<meta itemprop="position" content="2" />
		</li>
		<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem" aria-current="page">
			<span itemprop="name">Current</span>
			<meta itemprop="position" content="3" />
		</li>
	</ol>
</nav>
```

---

## Buttons

```html
<a href="#" class="hub-btn hub-btn-orange" title="...">...</button>
<button class="hub-btn hub-btn-orange" type="button">...</button>
```

[Demo](https://basjerome.github.io/framework/buttons.html)

---

## Carousel

```html
<!-- Slider main container -->
<div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        ...
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
</div>

<script type="text/javascript">
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
</script>
```

---

## Collapse

```bash
...
```

---

## Form

```html
<form class="hub-form">
  <div class="hub-form-group">
    <label for="inputEmail">Label</label>
    <input type="email" id="inputEmail" aria-describedby="emailHelp" placeholder="Placeholder">
  </div>
  <div class="hub-form-group">
    <label for="inputPassword">Label</label>
    <input type="password" id="inputPassword" placeholder="Placeholder">
  </div>
  <div class="hub-form-group">
    <input type="checkbox" id="inputCheck">
    <label for="inputCheck">Label</label>
  </div>
  <button type="submit" class="hub-btn hub-btn-orange">...</button>
</form>
```

---

## Modal

```bash
...
```

---

## Nav

```html
<nav class="hub-nav">
	<ul>
		<li><a href="#" title="...">...</a></li>
		<li><a href="#" title="...">...</a></li>
		<li><a href="#" title="...">...</a></li>
	</ul>
</nav>
```

---

## Pagination

```html
<nav class="hub-pagination" aria-label="Pagination">
	<ul>
		<li class="hub-pagination__prev disabled"></li>
		<li class="active">
			1
		</li>
		<li>
			<a href="#">2</a>
		</li>
		<li>
			<a href="#">3</a>
		</li>
		<li>
			<a href="#">...</a>
		</li>
		<li>
			<a href="#">17</a>
		</li>
		<li class="hub-pagination__next">
			<a href="#"></a>
		</li>
	</ul>
</nav>
```

[Demo](https://basjerome.github.io/framework/pagination.html)

---

# Utilities

## Clearfix

La classe `.hub-clearfix` permet de contenir des éléments en _float_.

```html
<div class="hub-clearfix">...</div>
```

---

## Backgrounds colors

| Breakpoints | Classes                    |
| ----------- | -------------------------- |
| Défaut      | `.hub-bg-color-{value}`    |
| XS          | `.hub-bg-color-{value}-xs` |
| SM          | `.hub-bg-color-{value}-sm` |
| MD          | `.hub-bg-color-{value}-md` |
| LG          | `.hub-bg-color-{value}-lg` |

_Values : {black | blue | dark-grey | orange | white}_

[Demo](https://basjerome.github.io/framework/colors.html)

---

## Colors

_Values : {black | blue | dark-grey | orange | white}_

| Breakpoints | Classes                 |
| ----------- | ----------------------- |
| Défaut      | `.hub-color-{value}`    |
| XS          | `.hub-color-{value}-xs` |
| SM          | `.hub-color-{value}-sm` |
| MD          | `.hub-color-{value}-md` |
| LG          | `.hub-color-{value}-lg` |

[Demo](https://basjerome.github.io/framework/colors.html)

---

## Display

| Breakpoints | Classes           |
| ----------- | ----------------- |
| Défaut      | `.hub-{value}`    |
| XS          | `.hub-{value}-xs` |
| SM          | `.hub-{value}-sm` |
| MD          | `.hub-{value}-md` |
| LG          | `.hub-{value}-lg` |

_Values : {block | flex | inline-flex | inline | inline-block | none | table | table-cell}_

---

## Embed

```html
<div class="hub-embed">
	{embed | iframe | object | video}
</div>
```

_Format 16/9_

---

## Float

| Breakpoints | Classes                 |
| ----------- | ----------------------- |
| Défaut      | `.hub-float-{value}`    |
| XS          | `.hub-float-{value}-xs` |
| SM          | `.hub-float-{value}-sm` |
| MD          | `.hub-float-{value}-md` |
| LG          | `.hub-float-{value}-lg` |

_Values : {left | righ | none}_

---

## Fonts

| Classes                            | Weight | Style  |
| ---------------------------------- | ------ | ------ |
| `.hub-ars-light`                   | 300    | normal |
| `.hub-ars-light-italic`            | 300    | italic |
| `.hub-ars-regular`                 | 400    | normal |
| `.hub-ars-italic`                  | 400    | italic |
| `.hub-ars-medium`                  | 600    | normal |
| `.hub-ars-medium-italic`           | 600    | italic |
| `.hub-ars-bold`                    | 700    | normal |
| `.hub-ars-bold-italic`             | 700    | italic |
| `.hub-ars-black`                   | 800    | normal |
| `.hub-ars-black-italic`            | 800    | italic |
|                                    |        |        |
| `.hub-open-sans-light`             | 300    | normal |
| `.hub-open-sans-light-italic`      | 300    | italic |
| `.hub-open-sans`                   | 400    | normal |
| `.hub-open-sans-italic`            | 400    | italic |
| `.hub-open-sans-semi-bold`         | 600    | normal |
| `.hub-open-sans-semi-bold-italic`  | 600    | italic |
| `.hub-open-sans-bold`              | 700    | normal |
| `.hub-open-sans-bold-italic`       | 700    | italic |
| `.hub-open-sans-extra-bold`        | 800    | normal |
| `.hub-open-sans-extra-bold-italic` | 800    | italic |

---

## Font size

| Breakpoints | Classes              |
| ----------- | -------------------- |
| Défaut      | `.hub-fs-{value}`    |
| XS          | `.hub-fs-{value}-xs` |
| SM          | `.hub-fs-{value}-sm` |
| MD          | `.hub-fs-{value}-md` |
| LG          | `.hub-fs-{value}-lg` |

_Values : {8 ~ 30 | 35 | 40 | 45 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90 | 95 | 100}_

---

## Icons

`.hub-icon-{value}`

[Demo](https://basjerome.github.io/framework/icons.html)

---

## Margin

| Breakpoints | Classes              |
| ----------- | -------------------- |
| Défaut      | `.hub-mg-{value}`    |
|             | `.hub-mt-{value}`    |
|             | `.hub-mr-{value}`    |
|             | `.hub-mb-{value}`    |
|             | `.hub-ml-{value}`    |
| XS          | `.hub-mg-{value}-xs` |
|             | `.hub-mt-{value}-xs` |
|             | `.hub-mr-{value}-xs` |
|             | `.hub-mb-{value}-xs` |
|             | `.hub-ml-{value}-xs` |
| SM          | `.hub-mg-{value}-sm` |
|             | `.hub-mt-{value}-sm` |
|             | `.hub-mr-{value}-sm` |
|             | `.hub-mb-{value}-sm` |
|             | `.hub-ml-{value}-sm` |
| MD          | `.hub-mg-{value}-md` |
|             | `.hub-mt-{value}-md` |
|             | `.hub-mr-{value}-md` |
|             | `.hub-mb-{value}-md` |
|             | `.hub-ml-{value}-md` |
| LG          | `.hub-mg-{value}-lg` |
|             | `.hub-mt-{value}-lg` |
|             | `.hub-mr-{value}-lg` |
|             | `.hub-mb-{value}-lg` |
|             | `.hub-ml-{value}-lg` |

_Definitions : {mg = margin | mt = margin-top | mr = margin-right | mb = margin-bottom | ml = margin-left}_

_Values : {0 | 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90 | 95 | 100}_

---

## Padding

| Breakpoints | Classes              |
| ----------- | -------------------- |
| Défaut      | `.hub-pd-{value}`    |
|             | `.hub-pt-{value}`    |
|             | `.hub-pr-{value}`    |
|             | `.hub-pb-{value}`    |
|             | `.hub-pl-{value}`    |
| XS          | `.hub-pd-{value}-xs` |
|             | `.hub-pt-{value}-xs` |
|             | `.hub-pr-{value}-xs` |
|             | `.hub-pb-{value}-xs` |
|             | `.hub-pl-{value}-xs` |
| SM          | `.hub-pd-{value}-sm` |
|             | `.hub-pt-{value}-sm` |
|             | `.hub-pr-{value}-sm` |
|             | `.hub-pb-{value}-sm` |
|             | `.hub-pl-{value}-sm` |
| MD          | `.hub-pd-{value}-md` |
|             | `.hub-pt-{value}-md` |
|             | `.hub-pr-{value}-md` |
|             | `.hub-pb-{value}-md` |
|             | `.hub-pl-{value}-md` |
| LG          | `.hub-pd-{value}-lg` |
|             | `.hub-pt-{value}-lg` |
|             | `.hub-pr-{value}-lg` |
|             | `.hub-pb-{value}-lg` |
|             | `.hub-pl-{value}-lg` |

_Definitions : {pd = padding | pt = padding-top | pr = padding-right | pb = padding-bottom | pl = padding-left}_

_Values : {0 | 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90 | 95 | 100}_

---

## Text align

| Breakpoints | Classes                |
| ----------- | ---------------------- |
| Défaut      | `.hub-text-{value}`    |
| XS          | `.hub-text-{value}-xs` |
| SM          | `.hub-text-{value}-sm` |
| MD          | `.hub-text-{value}-md` |
| LG          | `.hub-text-{value}-lg` |

_Values : {left | center | right | justify | nowrap}_

---

## Text transform

| Breakpoints | Classes                |
| ----------- | ---------------------- |
| Défaut      | `.hub-text-{value}`    |
| XS          | `.hub-text-{value}-xs` |
| SM          | `.hub-text-{value}-sm` |
| MD          | `.hub-text-{value}-md` |
| LG          | `.hub-text-{value}-lg` |

_Values : {lowercase | uppercase | capitalize}_

---

## Vertical align

| Breakpoints | Classes                 |
| ----------- | ----------------------- |
| Défaut      | `.hub-align-{value}`    |
| XS          | `.hub-align-{value}-xs` |
| SM          | `.hub-align-{value}-sm` |
| MD          | `.hub-align-{value}-md` |
| LG          | `.hub-align-{value}-lg` |

_Values : {baseline | top | middle | bottom | text-top | text-bottom}_