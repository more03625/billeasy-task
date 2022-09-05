-- CLONE THE PROJECT
-- Create .env file using the .env.example given
-- Then run `npm i`
-- run all the migrations `npx knex migrate:latest`
--  INSERT the data into tables using commands given below
		-- INSERT INTO departments (name, employee_count) VALUES ('IT', 0);
		-- INSERT INTO departments (name, employee_count) VALUES ('Finance', 0);
		-- INSERT INTO departments (name, employee_count) VALUES ('Media', 0);

		-- -- INSERT DATA TO `employees` Table
		-- INSERT INTO employees (first_name, department_id, doj) VALUES ('Paul', 3,'1998-08-31');
		-- INSERT INTO employees (first_name, department_id, doj) VALUES ('ROHIT', 3,'1998-08-31');

-- Run the Trigger commands & Function Given Below.

-- Create Function Which will be called when triggerd
CREATE OR REPLACE FUNCTION update_employee_count()
	RETURNS trigger AS 
$$
BEGIN 
	UPDATE departments
	SET employee_count = employee_count + 1
	WHERE departments.id = NEW.department_id;
	RETURN NEW;
END;

$$
LANGUAGE 'plpgsql'

-- Crate Trigger
CREATE TRIGGER update_employee_count_trg
	AFTER INSERT ON employees
	FOR EACH ROW
	EXECUTE PROCEDURE update_employee_count()

-- INSERT DATE TO `departments` Table


-- A function to return all the employees from the table.
CREATE OR REPLACE FUNCTION getAllEmployees(dateTo date, dateFrom date, departmentId int) 
  returns table (document json) 
as
$body$
  SELECT row_to_json(employees) 
  FROM employees
	WHERE doj between dateTo and dateFrom AND department_id = departmentId
$body$
language sql;

-- Call the function
SELECT * 
FROM getAllEmployees('1998-08-31','2022-10-30', 3);


-- START USING API's using postman.




-- USE THIS ONLY IF YOU NEEDED.
-- DROP TRIGGER
DROP TRIGGER update_employee_count_trg ON employee;