
--add client
CREATE OR REPLACE PROCEDURE add_client(p_id INTEGER, p_name VARCHAR(255), p_email VARCHAR(255), p_password VARCHAR(255))
LANGUAGE plpgsql
AS $$
BEGIN
  INSERT INTO users(id, name, email, password) VALUES(p_id, p_name, p_email, p_password);
END;
$$;

--add client auto ID (current)
CREATE OR REPLACE PROCEDURE add_user(
  p_email VARCHAR(100),
  p_password VARCHAR(100),
  p_role text,
	p_name VARCHAR(50)
)
LANGUAGE plpgsql
AS $$
BEGIN
  INSERT INTO гsers(email, password, role, name)
  VALUES(p_email, p_password, p_role, p_name);
END;
$$;



--finder
CREATE FUNCTION finder(p_name VARCHAR(255))
RETURNS TABLE(id INT, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255))
AS $$
BEGIN
   RETURN QUERY SELECT * FROM users WHERE LOWER(users.name) = p_name;
END;
$$ LANGUAGE plpgsql;

--table companies
CREATE TABLE companies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  post_number VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(50)
);

--table agents
CREATE TABLE agents (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  surname VARCHAR(50),
  email VARCHAR(255),
  phone VARCHAR(50),
  company_id INTEGER REFERENCES companies (id)
);

--table real_estate
CREATE TABLE real_estate (
  id SERIAL PRIMARY KEY,
  agent_id INTEGER REFERENCES agents (id),
  type VARCHAR(50),
  adress VARCHAR(100),
  rooms_count INTEGER,
  square NUMERIC(10,2),
  price NUMERIC(10,2),
  about TEXT,
  photos BYTEA[]
);

-- Создаем роль администратора
CREATE ROLE administrator LOGIN PASSWORD 'admin777';
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO administrator;


-- Создаем роль агента
CREATE ROLE agent LOGIN PASSWORD '12agents';
GRANT SELECT, INSERT, UPDATE, DELETE ON real_estate TO agent;
GRANT SELECT, INSERT, UPDATE, DELETE ON agents TO agent;
GRANT SELECT, INSERT, UPDATE, DELETE ON companies TO agent;

-- Создаем роль client

CREATE ROLE client LOGIN;
GRANT SELECT ON real_estate TO client;
GRANT SELECT ON agents TO client;
GRANT SELECT ON companies TO client;

--добавить клиентскую заявку 

CREATE OR REPLACE FUNCTION add_client_request(
  p_name TEXT,
  p_email TEXT,
  p_phone TEXT,
  p_message TEXT,
  p_apartment_id INTEGER
) RETURNS INTEGER AS $$
DECLARE
  request_id INTEGER;
BEGIN
  INSERT INTO clients_requests (name, email, phone, message, apartment_id)
  VALUES (p_name, p_email, p_phone, p_message, p_apartment_id)
  RETURNING id INTO request_id;
  
  RETURN request_id;
END;
$$ LANGUAGE plpgsql;
