CREATE TABLE IF NOT EXISTS student (
  student_id UUID PRIMARY KEY NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  gender VARCHAR(6) NOT NULL
      CHECK (
          gender = 'MALE' or
          gender = 'male' or
          gender = 'FEMALE' or
          gender = 'female'
        )
);