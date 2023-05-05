export const SummaryLargeImage = ({
  site,
  creator,
  title,
  description,
  image,
  imageAlt,
}: {
  site: string;
  creator?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}) => {
  return (
    <>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={site} />
      {creator && <meta name="twitter:creator" content={creator} />}
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
      {imageAlt && <meta name="twitter:image:alt" content={imageAlt} />}
    </>
  );
};
