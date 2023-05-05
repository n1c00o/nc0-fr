export const Book = ({
  authors,
  isbn,
  releaseDate,
  tags,
}: {
  authors: string[];
  isbn: string;
  releaseDate: string;
  tags: string[];
}) => {
  return (
    <>
      {authors.map((author) => (
        <meta property="book:author" content={author} />
      ))}
      <meta property="book:isbn" content={isbn} />
      <meta property="book:release_date" content={releaseDate} />
      {tags.map((tag) => (
        <meta property="book:tag" content={tag} />
      ))}
    </>
  );
};
