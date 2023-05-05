export const Basic = ({
  title,
  type,
  url,
  imageUrl,
  imageSecureUrl,
  imageType,
  imageWidth,
  imageHeight,
  imageAlt,
  audioUrl,
  audioSecureUrl,
  audioType,
  description,
  determiner,
  locale,
  localeAlternates,
  siteName,
  videoUrl,
  videoSecureUrl,
  videoType,
  videoWidth,
  videoHeight,
  videoAlt,
}: {
  title: string;
  type: string;
  imageUrl: string;
  imageSecureUrl?: string;
  imageType?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  url: string;
  audioUrl?: string;
  audioSecureUrl?: string;
  audioType?: string;
  description?: string;
  determiner?: "a" | "an" | "the" | "" | "auto";
  locale?: string;
  localeAlternates?: string[];
  siteName?: string;
  videoUrl?: string;
  videoSecureUrl?: string;
  videoType?: string;
  videoWidth?: number;
  videoHeight?: number;
  videoAlt?: string;
}): JSX.Element => {
  return (
    <>
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="url" content={url} />
      <meta property="og:image" content={imageUrl} />
      {imageSecureUrl && (
        <meta property="og:image:secure_url" content={imageSecureUrl} />
      )}
      {imageType && <meta property="og:image:type" content={imageType} />}
      {imageWidth && (
        <meta property="og:image:width" content={imageWidth.toString()} />
      )}
      {imageHeight && (
        <meta property="og:image:height" content={imageHeight.toString()} />
      )}
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
      {audioUrl && <meta property="og:audio" content={audioUrl} />}
      {audioSecureUrl && (
        <meta property="og:audio:secure_url" content={audioSecureUrl} />
      )}
      {audioType && <meta property="og:audio:type" content={audioType} />}
      {description && <meta property="og:description" content={description} />}
      {determiner && <meta property="og:determiner" content={determiner} />}
      {locale && <meta property="og:locale" content={locale} />}
      {localeAlternates?.map((localeAlternate) => (
        <meta property="og:locale:alternate" content={localeAlternate} />
      ))}
      {siteName && <meta property="og:site_name" content={siteName} />}
      {videoUrl && <meta property="og:video" content={videoUrl} />}
      {videoSecureUrl && (
        <meta property="og:video:secure_url" content={videoSecureUrl} />
      )}
      {videoType && <meta property="og:video:type" content={videoType} />}
      {videoWidth && (
        <meta property="og:video:width" content={videoWidth.toString()} />
      )}
      {videoHeight && (
        <meta property="og:video:height" content={videoHeight.toString()} />
      )}
      {videoAlt && <meta property="og:video:alt" content={videoAlt} />}
    </>
  );
};
