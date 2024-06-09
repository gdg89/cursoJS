-- The IN selects elemens among the passsed values.
SELECT * FROM users
WHERE id IN (110, 120, 135)  AND first_name IN ('Merrill', 'Katelyn');
