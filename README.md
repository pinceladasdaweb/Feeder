# Feeder
> A VanillaJS plugin that work like a Feed Reader. It's used Google's Feed API internally to convert RSS feeds to JSON.

## Getting Started

```bash
# Get the latest snapshot
$ git clone git@github.com:pinceladasdaweb/Feeder.git
```

Add the following javascript before your ```</body>``` tag:

```html
<script src="path/to/feeder.min.js"></script>
```

And start it:
```html
<script>
    const render = function (posts) {
        posts.responseData.feed.entries.forEach((post, index) => {
            console.log(post.title);
            console.log(post.content);
            console.log(post.link);
        });
    };

    new Feeder({
        url: 'http://feeds2.feedburner.com/pinceladasdaweb',
        size: 3,
        callback: render
    });
</script>
```

The script expect the following values:

| Value                              | Description                                                 |
| ---------------------------------- |:-----------------------------------------------------------:|
| **url**                            | The feed url.                                               |
| **size**                           | The number of posts to display. Default is 10.              |
| **callback**                       | Calllback to run after the fetch feed                       |

## Browser support

![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 9+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Contributing

Check [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## History

Check [Releases](https://github.com/pinceladasdaweb/Feeder/releases) for detailed changelog.

## License

[MIT](LICENSE)