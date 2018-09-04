# learn postgres
![JavaScript](img/postgres.png)

the besst way to work with PostgreSQL. It must be instaled with scoop, don't worry!. However, be careful better to use `powershell` for work with t

1. install postgres: `scoop install postgres`

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

15. add column like; schimba coloana
`UPDATE name_table SET column= 34 WHERE id = 1;`

16. Adauga new coloana ca: id, name, age, email, author etc.
`alter table name_table add column views_new_column  int; `

17. Poti sa schimbi numele coloanei intr-un tabel.
`???`

18. Change name at the column:
`alter table name_table rename column_name to new_column;`

18. describe table: `\d name`
19. leave db: `\q`