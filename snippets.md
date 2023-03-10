# snippets

## album
```jsx
<section className="section--dark">
  <div className="panel panel-flex">
    <div className="panel__image" style={albumCoverStyle}>
      <Image
        src={wtsmCover}
        alt="Wrong to save me single cover by Wasting Paper"
      />
    </div>
    <div className="panel-flex--content-main">
      <p className="paragraph-focus">
        Single <strong>Wrong to Save Me</strong> out now!
      </p>
      <div className="music-locations" style={{ marginTop: "32px" }}>
        <a
          href="https://music.apple.com/us/album/wrong-to-save-me/1671198941?i=1671198942"
          target="_blank"
          rel="noreferrer"
        >
          <div className="icon-social music__small">
            <Image src={appleMusicIcon} alt="Listen on Apple Music" />
          </div>
        </a>
        <a
          href="https://open.spotify.com/track/04pTnjhboOZHsbyJFBjlNn?si=zqcTX_o0R-aCKt2eCnER6w"
          target="_blank"
          rel="noreferrer"
        >
          <div className="icon-social music__small">
            <Image src={spotifyIcon} alt="Listen on Spotify" />
          </div>
        </a>
        <a
          href="https://www.youtube.com/watch?v=5SD1NsUKHVA"
          target="_blank"
          rel="noreferrer"
        >
          <div className="icon-social music__small">
            <Image src={youtubeIcon} alt="Listen on YouTube" />
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

```


## album no links
```jsx
<section className="section--dark-translucent">
  <div className="panel panel-flex">
    <div className="panel-flex--content-main">
      <div className="section__content translucent-content">
        <p className="paragraph-focus">
          New album <strong>Bits &amp; Parts</strong> out now!
        </p>
        <p>Listen wherever you stream</p>
      </div>
    </div>
    <div className="panel__image" style={albumCoverStyle}>
      <Image
        src={bitsAndPartsCover}
        alt="Bits and Parts album cover by Wasting Paper"
      />
    </div>
  </div>
</section>
```

## video
```jsx
<div className="video-embed">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/At2T6yh2afc"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  />
</div>
```