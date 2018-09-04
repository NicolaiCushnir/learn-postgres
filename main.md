1. how to install PostgresSQL? `scoop install postgres`

2. Start server: `pg_ctl start`

3. Connect database: `psql -U postgres`

4. Stop server: `pg_ctl stop`

5. restart server: `pg_ctl restart`

5. see all db: `\l`

6. create databse: `CREATE DATABASE name_db;`

7. select a database: `\c name_db`

8. create a table:
   `CREATE TABLE name_table (id INT PRIMARY KEY, name text, age INT);`

9. see tables: `\dt`

10. shimba denumirea la database: `ALTER DATABASE name_db rename to new_db;`

11. delete database:
    `drop database name_database;`

12. enter main menu:
    `???`

13. Shimba denumirea la tabel
   `alter table old_name_table rename to new_name_table;`

14. s