-- 1. Create the database
CREATE DATABASE IF NOT EXISTS movie_review_system;
USE movie_review_system;

-- 2. Create the independent tables
CREATE TABLE users
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    mobile VARCHAR(15) UNIQUE NOT NULL,
    birth DATE NOT NULL
);

CREATE TABLE movies
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL, 
    `release` DATE NOT NULL
);

-- 3. Insert initial movie data
INSERT INTO movies (title, `release`) VALUES
('The Great Escape', '1963-07-04'),
('Inception', '2010-07-16'),
('Forrest Gump', '1994-07-06'),
('The Matrix', '1999-03-31'),
('Pulp Fiction', '1994-10-14'),
('Spirited Away', '2001-07-20'),
('The Shawshank Redemption', '1994-09-23'),
('Interstellar', '2014-11-07'),
('Parasite', '2019-05-30'),
('Eternal Sunshine of the Spotless Mind', '2004-03-19');


-- 4. Create dependent tables with correct foreign key references

CREATE TABLE reviews
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    movie_id INT NOT NULL,
    review TEXT NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 10),
    user_id INT NOT NULL,
    modified TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
    
    CONSTRAINT fk_reviews_user
        FOREIGN KEY (user_id)
        REFERENCES users(id) -- Reference the 'id' column in the users table
        ON DELETE CASCADE
        ON UPDATE RESTRICT,
        
    CONSTRAINT fk_reviews_movie
        FOREIGN KEY (movie_id)
        REFERENCES movies(id) -- Reference the 'id' column in the movies table
        ON DELETE CASCADE
        ON UPDATE RESTRICT
);

CREATE TABLE shares (
    user_id INT NOT NULL,
    review_id INT NOT NULL,
    PRIMARY KEY (user_id, review_id), 

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (review_id) REFERENCES reviews(id) ON DELETE CASCADE
);
