-- The BETWEEN Operator selects a range of values within a specified range in SQL

-- DATE
SELECT * 
FROM users
WHERE created_at BETWEEN '2021-04-16 22:20:05' AND '2021-08-28 16:36:43';

-- DATE AND ID
SELECT * 
FROM users
WHERE created_at BETWEEN '2021-04-16 22:20:05' AND '2021-08-28 16:36:43'
AND id BETWEEN 5 and 30;