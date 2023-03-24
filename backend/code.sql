
--add client
CREATE OR REPLACE PROCEDURE add_client(p_id INTEGER, p_name VARCHAR(255), p_email VARCHAR(255), p_password VARCHAR(255))
LANGUAGE plpgsql
AS $$
BEGIN
  INSERT INTO users(id, name, email, password) VALUES(p_id, p_name, p_email, p_password);
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
