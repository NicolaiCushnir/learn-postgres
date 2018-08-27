# learn postgres
![JavaScript](img/postgres.png)

the besst way to work with PostgreSQL. It must be instaled with scoop, don't worry!. However, be careful better to use `powershell` for work with t

1. install postgres: `scoop install postgres`

2. Start server: `pg_ctl start`

3. Stop server: `pg_ctl stop`

3. connect database `psql -U postgres`

4. see all db: `\l`

5. select db: `\c name_db`

6. see tables: `\dt`

7. describe table: `\d name`

8. leave db: `\q`

9. rename table: `alter table old_name rename to new_name;`

10. clear postgres console:`\! cls;`

11. see content the table: `select * from name_table`

12. Put something inside to the table: `insert into users values(2, 'Vasea, 'a123c', 'pupkin@gmail.com');`

13. see just a field from the table like:
`select * from users where id=5;`

14. Change just a field at the table or a
`???`

15. add a new field in empty column, doar ce e in tabel ca(1, ‘sasha grey, 31’)
`UPDATE name_table SET column= 34 WHERE id = 1;`

16. Adauga new coloana ca: id, name, age, email, author etc.
`alter table name_table add column views_new_column  int; `

17. Poti sa schimbi numele coloanei intr-un tabel.
`???`

18. Change name at the column:
`alter table name_table rename column_name to new_column;`