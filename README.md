# learn postgres
![JavaScript](img/postgres.png)

### First Steps : Notes
**Warning 1** Be careful after you downloaded the postgreSQL and puted your `password` and default `port` (5432). You must open `pgAdmin 4`. At windows 10 he is in left part of the search. Poti numi cum vrei dedavneie prilojenie, vse prilojenie sau chiar In other words, where you turn off the computer.

**Warning 2** if can't install PostgreSQL, see at video "How to Install PostgreSQL & pgAdmin 4 on Windows 10" [YouTube](https://www.youtube.com/watch?v=e1MwsT5FJRQ&list=PLQqEY2kzSbZ5m0FyWH0BuOiCne05mwecW&index=6&ab_channel=ProgrammingKnowledge)

**Warning 3!** Dacă vrei să creezi o bază de date în Postgres numaidecît trebuie să te conectez la `pgAdmin 4`. Scrie parola care ai scris-o de la psotgres. (Indiciu pentru mine, fondatorul de la Node.js.) Apoi dute la SQL Shell și fă ceia ce știi.

**DROP DATABASE linux_db;**

### Second Step : Install Postgres

1. You can install PostgreSQ with `scoop` => `scoop install postgresql` or you can go [official site](https://www.postgresql.org/download/). 

2. Memoreaza port and password

3. check `postgres --version` in powershell.

4. Add Path: Переменые оружение

5. Pentru a face primele cereri trebuie sa folosesti SQL Shell (PSQL). Se afla in meniul search acolo unde este aplasata si pgAdmin 4. sau din console/termianl scrie `psql -U postgres` 

6. fa asa cum vezi pe desenenul mai jos.

![PSQL](img/SQL_Shell_PSQL.PNG) 

### Work with PostgreSQL

1. install postgres: `scoop install postgresql`
2. start server: `pg_ctl start`  (Additionally)
3. stop server: `pg_ctl stop` (Additionally)
4. connect at Postgres from console or terminal. (But be careful this command you must not use from SQL Shell PSQL) `psql -U postgres`
5. see all db: `\l`
6. select db: `\c name_db`
7. create database: `CREATE DATABASE name_db`
8. rename database `ALTER DATABASE "old_name_db" RENAME TO "new_name_db";`
9. create a new table: `CREATE TABLE name_table(id INT PRIMARY KEY, name text, age INT);`
10. see tables: `\dt` or `\d`
11. rename table: `alter table old_name rename to new_name;`
12. clear postgres console:`\! cls;`
13. see content the table: `select * from name_table;`
14. put inside to the table: `insert into users values(2, 'Vasea', 21);`
15. see container table: `select * from name_table where id=5;`
16. see container table: `select * from name_table where id=5`;
17. add a column; schimba coloana; <!>
`UPDATE name_table SET name_column= 34 WHERE id = 1;`

18. adauga new coloana ca: id, name, age. <!>
`ALTER TABLE name_table ADD COLUMN new_column  INT; `

19. poti sa schimbi numele coloanei intr-un tabel.
`???`

20. change name at the column:
`alter table name_table rename column_name to new_column;`

21. describe table: `\d name`

22. leave db: `\q`

23. delete databse `DROP DATABASE "the_name_to_db"`

24. postgres=# CREATE USER nicolai with PASSWORD '123';

25. **Exemle with VARCHAR(250) Probably 250 or 255 is max, min is 1** CREATE TABLE acrtreses(id INT PRIMARY KEY, name VARCHAR(30), age INT, country VARCHAR(30), hair VARCHAR(20), tatoo VARCHAR(10));

27. Schimbă de la o bază de date la alta.. `\c "tutorial-online"`, dacă vrei la alta fă aceisași comandă și numele la "db_name";

### lessons

* `id INT PRIMARY KEY` or `id BIGSERIAL`
* Type of data {boolean,number INT, date, email}

```Terminal
sudo -u postgres psql
postgres=# create database mydb;
postgres=# create user myuser with encrypted password 'mypass';
postgres=# grant all privileges on database mydb to myuser;
```
