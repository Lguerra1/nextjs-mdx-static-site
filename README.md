[MDX](https://mdxjs.com/) + [Next](https://nextjs.org/) = ❤
=========

Big thanks to the folks behind [MDX](https://mdxjs.com/) and [Next](https://nextjs.org/).

Also props to [messa](https://github.com/messa/nextjs-mdx-blog-example) & [johnlindquist](https://github.com/johnlindquist/next-mdx-blog) for doing this first.

We were evaluating new options for our company site at [Grow](https://grow.com). We were on WordPress and as a full stack JavaScript shop there weren't many of us who were down with the PHP.

Also I wanted to build a personal site where I could easily mix React components with text content.

Why not use [Gatsby](https://www.gatsbyjs.org/)?

Gatsby is brilliant at what it does! But, 1) I wanted to learn Next. 2) I wanted to use a technology that had broader application.

I'm using the following:
- [Emotion](https://emotion.sh/) for styling.
- [Typography.js](https://kyleamathews.github.io/typography.js/) for text styling.

## Content
There are multiple types of content.

#### Pages
These function like a typical Next.js site. To create a new one add a `.js` file to the `pages` dir. For more info check the Next docs.

### Custom Content Types
There are two custom content types, posts and landing pages. All the routes are set up by `exportPathMap` in `next.config.js` and they are also exported in `utils/exportPosts.js` where they are used in the app. If you want to create a new content type that should give you what you need.

#### Posts
Posts use `pages\posts.js` for their template.
To add a new post create an MDX file to the `posts` directory.

#### Landing Pages
Landing Pages use `pages\landingPages.js` for their template.
To add a new landing page create an MDX file to the `landingPages` directory.

There is still a lot left to do. Here's my list.
- [ ] Google Analytics
- [ ] Comments with Staticman
