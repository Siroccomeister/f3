---
glightbox: true
---

# Conventions

This website is largely based on the great MKDOCS theme MATERIAL. On this page, you'll find some conventions applied on the backend. Some content is also a reminder for GIT or specific plugin syntaxing such as TABULATOR.

## Navigation

Navigation structure is quite important.
Especially if you plan to use embedded images, as links tend to be relative.
Keep it as simple and user friendly as possible.
Test it from Mobile devices and browswers.

## For images

Activated GlightBox plugin in Mkdocs/Material theme.
More details can be looked-up [here](https://blueswen.github.io/mkdocs-glightbox/).

Some options are defined in the mkdocs.yml file to facilitate working with captions.

### The simplest form

The text in "[text]" will be used as caption in lighbox mode (when you click on the picture). 

```yaml
![Image test](assets/images/MarocSelfie.jpg)
```
![Image test](assets/images/MarocSelfie.jpeg)

In general, I'd like to keep images in one folder : **docs/assets**.  So that folder should be accessible with an absolute path that I can use from whatever markdown file. However for *blog posts*, it is easier to copy selected photos to a dedicated folder. Then add a specific blog entry to reads from that folder with relative links. In both cases, images will be handled via GlightBox Plugin.

### Enhanced Image display

In addition, Image display can be somewhat enhanced. This requires some html injection. 
Enhancement may apply to :

 - image size
 - mixing Lightbox Caption and Image title

``` markdown title="examples of image sizing"
<figure markdown>

![My proud OpenUP](assets/images/openup.jpeg){ width="400" }
<figcaption markdown>Image displayed with a width of "400"</figcaption>

![My proud OpenUP](assets/images/openup.jpeg){ width=400px }
<figcaption markdown>Image displayed with a width of 400px</figcaption>

![Morocco Atlas](assets/images/MarocSelfie.jpeg){ width=50px }
<figcaption markdown>Width is set at 50px</figcaption>

![Morocco Atlas](assets/images/MarocSelfie.jpeg){ width=50% }
<figcaption markdown>Width is set at 50% and can scale</figcaption>

</figure>
```

<figure markdown>

![My proud OpenUP](assets/images/openup.jpeg){ width="400" }
<figcaption markdown>Image displayed with a width of "400"</figcaption>

![My proud OpenUP](assets/images/openup.jpeg){ width=400px }
<figcaption markdown>Image displayed with a width of 400px</figcaption>

![Morocco Atlas](assets/images/MarocSelfie.jpeg){ width=50px }
<figcaption markdown>Width is set at 50px</figcaption>

![Morocco Atlas](assets/images/MarocSelfie.jpeg){ width=50% }
<figcaption markdown>Width is set at 50% and can scale</figcaption>

</figure>


## Cross-referencing

Markdown/MkDocs only converts **/** to **/docs** location for .md files. All other files will default to relative path. So when moving .md files around, you need to keep the cross-referencing in mind.


## For hyperlinks

```yaml
[Displayed Link](https://squidfunk.github.io/mkdocs-material/)
```
[Displayed Link](https://squidfunk.github.io/mkdocs-material/)

## For cards

There's a nice plugin called neoteroi cards which allows to display cards which combined with images can be similar to a photo gallery. In the end I decided not to use it, but it is still good to keep the option open. The url feature is sort of being prevented when glightbox is active though - both functionalities seem mutually exclusive (despite the skip_lightbox option).

::cards::

- title: Day 1
  content: Example of **neoteroi** card plugin
  image: assets/images/openup.jpeg

- title: Day 2
  content: Cards can help display photos as a **gallery**
  image: assets/images/Garmin_messenger.png

- title: Tour Divide
  url: https://bikepacking.com/routes/great-divide-mountain-bike-route-gdmbr/
  content: Cards might be combined with a url as well, but only with Glightbox disabled or without image in the card.

::/cards::

## Using content tabs

This is quite a neat feature. And may also allow a storytelling across different illustrations.

!!! example "Morocco inspiration as header"
    Morocco was a cornerstone in my decision making for the Great Divide!

    === "let's do it"
    <figure markdown>
    ![My Proud OpenUP is simply the best](assets/images/openup.jpeg){ width="300px" }
    <figcaption>The journey actually started beginning 2023 when I purchased my Gravel from Open Cycle, kudos to Andy Kessler and Gerard Vroomen for their vision.</figcaption>
    </figure>

=== "let's do it without header"
    Image has a size of 300px.
    <figure markdown>
    ![My Proud OpenUP is simply the best](assets/images/openup.jpeg){ width="300px" }
    </figure>

=== "without defined image size"
    <figure markdown>
    ![My Proud OpenUP is simply the best](assets/images/openup.jpeg)
    </figure>

!!! notes ""
    We can remove the header, and only show images.
    <figure markdown>
    ![My Proud OpenUP is simply the best](assets/images/openup.jpeg){ width=300px }
    ![My Proud OpenUP is simply the best](assets/images/MarocSelfie.jpeg){ width=300px }
    </figure>

<!-- more -->
The simplest form :
![Image test](assets/images/MarocSelfie.jpeg)

Image with Glightbox caption title and comments.
![My Proud OpenUP](assets/images/openup.jpeg){ data-title="My Proud OpenUP." data-description="It started beginning 2023 when I purchased my Gravel from Open Cycle, kudos to Andy Kessler and Gerard Vroomen for their vision." }

Image leveraging the figure meta-data (title is removed).
![My Proud OpenUP](assets/images//openup.jpeg){ data-description="It started beginning 2023 when I purchased my Gravel from Open Cycle, kudos to Andy Kessler and Gerard Vroomen for their vision." }


# OSX Terminal

This is a useful instruction to replace recursively in one folder some text :

```yaml
perl -pi -w -e 's{TOFIND}{TOREPLACE}' *.md
```

Sometimes it is tricky to upload large a/o many files from local to remote git repository. Tweaking the git buffer size seems to do the trick.

``` yaml
git config http.postBuffer 524288000
```
