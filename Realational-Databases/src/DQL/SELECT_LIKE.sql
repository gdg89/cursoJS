-- LIKE (similar).
-- %  = anything
-- _  = a single character
SELECT * FROM users
WHERE  first_name LIKE "%a"; -- Select all elements that end with a.

SELECT * FROM users
WHERE  first_name LIKE "r%"; -- Select all elements that start with r.

SELECT * FROM users
WHERE  first_name LIKE "ro%n"; -- Select all elements that start with ro and end with n.

SELECT * FROM users
WHERE  first_name LIKE "%mo%"; -- Select all elements that have 'mo' in the middle.

SELECT * FROM users
WHERE first_name LIKE 'j_co_'; -- Underline serves as a wildcard character in SQL's LIKE clause.