--seleciona DB
USE db;
-- Mostra tabelas da DB
SHOW TABLES;
-- descrebe tabelas
DESCRIBE users;
-- Insere registros
INSERT INTO users (first_name, last_name, email, password_hash) VALUES ('Alice', 'Smith', 'alice.smith@email.com', 'hashpassword1'),
('Bob', 'Johnson', 'bob.johnson@email.com', 'hashpassword2'),
('Charlie', 'Williams', 'charlie.williams@email.com', 'hashpassword3'),
('David', 'Brown', 'david.brown@email.com', 'hashpassword4'),
('Emily', 'Jones', 'emily.jones@email.com', 'hashpassword5'),
('Frank', 'Miller', 'frank.miller@email.com', 'hashpassword6'),
('Grace', 'Davis', 'grace.davis@email.com', 'hashpassword7'),
('Hannah', 'Garcia', 'hannah.garcia@email.com', 'hashpassword8'),
('Ian', 'Martinez', 'ian.martinez@email.com', 'hashpassword9'),
('Judy', 'Rodriguez', 'judy.rodriguez@email.com', 'hashpassword10');
