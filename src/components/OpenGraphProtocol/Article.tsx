export const Article = ({
  publishedTime,
  modifiedTime,
  expirationTime,
  authors,
  section,
  tags,
}: {
  publishedTime: string;
  modifiedTime?: string;
  expirationTime?: string;
  authors: string[];
  section: string;
  tags: string[];
}) => {
  return (
    <>
      <meta property="article:published_time" content={publishedTime} />
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {expirationTime && (
        <meta property="article:expiration_time" content={expirationTime} />
      )}
      {authors.map((author) => (
        <meta property="article:author" content={author} />
      ))}
      <meta property="article:section" content={section} />
      {tags.map((tag) => (
        <meta property="article:tag" content={tag} />
      ))}
    </>
  );
};
