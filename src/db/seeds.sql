INSERT INTO movies (movie_name)
VALUES 
("Toy Story 3"),
("Alien"),
("Jurassic Park 2");

INSERT INTO reviews (movie_id, review)
VALUES 
(1, "Review for Toy Story 3"),
(2, "Review for Alien"),
(3, "Review for Jurassic Park 2"),
(1, "Review for Toy Story 3"),
(2, "Review for Alien"),
(3, "Review for Jurassic Park 2"),
(3, "Review for Jurassic Park 2"),
(3, "Review for Jurassic Park 2");

SELECT * FROM movies;
SELECT * FROM reviews;