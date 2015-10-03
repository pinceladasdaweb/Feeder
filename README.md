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

    Feeder({
        url: 'http://feeds2.feedburner.com/pinceladasdaweb',
        size: 3,
        callback: render
    });
</script>
```

Loading Feeder via AMD (require.js):

```html
<script>
require(["path/to/feeder.min.js"], function(Feeder) {
    Feeder({
        url: 'http://feeds2.feedburner.com/pinceladasdaweb',
        size: 3,
        callback: render
    });
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

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png)
--- | --- | --- | --- | --- |
IE 9+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Contributing

Check [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## History

Check [Releases](https://github.com/pinceladasdaweb/Feeder/releases) for detailed changelog.

## License

[MIT](LICENSE)