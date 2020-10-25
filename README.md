# learn postgres
![JavaScript](img/postgres.png)

### First Steps:

**Warning** Be careful after you downloaded the postgreSQL and puted your `password` and `port` (5432). You must open `pgAdmin 4`. At windows 10 he is in left part of the search.Poti numi cum vrei dedavneie prilojenie, vse prilojenie sau chiar In other words, where you turn off the computer.

1. You can install PostgreSQ with `scoop` or you can go [official site](https://www.postgresql.org/download/). 

2. Memoreaza port and password

3. Add Path: Переменые оружение

### Work with PostgreSQL

1. install postgres: `scoop install postgresql`

2. Start server: `pg_ctl start`

3. Stop server: `pg_ctl stop`

3. connect database `psql -U postgres`

4. see all db: `\l`

5. create databse: `CREATE DATABASE name_db`

6. select db: `\c name_db`

7. create a new table:
`CREATE TABLE name_table(id INT PRIMARY KEY, name text, age INT);`

8. see tables: `\dt`

9. rename table: `alter table old_name rename to new_name;`

10. clear postgres console:`\! cls;`

11. see content the table: `select * from name_table;`

12. Put inside to the table: 
`insert into users values(2, 'Vasea', 21);`

13. see container table:
`select * from name_table where id=5;`

14. see container table: `select * from name_table where id=5`;

15. add a column; schimba coloana; <!>
`UPDATE name_table SET name_column= 34 WHERE id = 1;`

16. Adauga new coloana ca: id, name, age. <!>
`ALTER TABLE name_table ADD COLUMN new_column  INT; `

17. Poti sa schimbi numele coloanei intr-un tabel.
`???`

18. Change name at the column:
`alter table name_table rename column_name to new_column;`
19. describe table: `\d name`

20. leave db: `\q`

21. delete/drop databse `DROP DATABASE the_name_to_db`