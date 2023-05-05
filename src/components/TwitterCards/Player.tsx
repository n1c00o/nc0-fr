export const Player = ({
  site,
  title,
  description,
  image,
  imageAlt,
  player,
  playerWidth,
  playerHeight,
  playerStream,
}: {
  site: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  player?: string;
  playerWidth?: number;
  playerHeight?: number;
  playerStream?: string;
}) => {
  return (
    <>
      <meta name="twitter:card" content="player" />
      <meta name="twitter:site" content={site} />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
      {imageAlt && <meta name="twitter:image:alt" content={imageAlt} />}
      {player && <meta name="twitter:player" content={player} />}
      {playerWidth && (
        <meta name="twitter:player:width" content={playerWidth.toString()} />
      )}
      {playerHeight && (
        <meta name="twitter:player:height" content={playerHeight.toString()} />
      )}
      {playerStream && (
        <meta name="twitter:player:stream" content={playerStream} />
      )}
    </>
  );
};
