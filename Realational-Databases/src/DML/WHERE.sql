-- WHERE filters records
-- Comparation operators "= < <= > >= <> !="
-- Logic operators "AND" and "OR"

SELECT * FROM users
WHERE email="alice.smith@email.com";

SELECT * FROM users WHERE id>=5 AND id<=18;

SELECT * FROM users WHERE created_at < '2024-06-01 08:44:12';

SELECT * FROM users WHERE id<15 OR first_name="Mir";