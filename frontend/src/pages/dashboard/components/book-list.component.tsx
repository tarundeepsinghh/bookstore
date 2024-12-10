import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { BookResponse, searchBooks } from "@/service/book-service";
import { AppSelectors } from "@/store/appSlice";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BookListSkeleton } from "./book-list.skeleton";

export function BookList() {
  const query = useSelector(AppSelectors.selectQuery);

  const [books, setBooks] = useState<BookResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await searchBooks(query);
        setBooks(res?.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [query]);

  return (
    <Box sx={{ paddingX: { xs: "10px", sm: "20px", md: "30px" } }}>
      {loading ? (
        <BookListSkeleton />
      ) : (
        <BentoGrid>
          {books.map((books, index) => (
            <BentoCard
              key={index}
              name={books.title}
              author={books.author}
              background={
                <>
                  <img
                    src={`/assets/books/book-${
                      index > 11
                        ? Math.floor(index / 11) === 0
                          ? 11
                          : Math.floor(index / 11)
                        : index + 1
                    }.png`}
                    alt={`${books.title}`}
                    style={{ alignContent: "center" }}
                  />
                </>
              }
              index={
                index > 11
                  ? Math.floor(index / 11) === 0
                    ? 11
                    : Math.floor(index / 11)
                  : index + 1
              }
              category={books.category}
              description={books.description}
              href={`book-detail/${books._id}`}
              cta='Purchase Book'
            />
          ))}
        </BentoGrid>
      )}
    </Box>
  );
}
