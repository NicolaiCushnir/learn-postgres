# learn postgres
![JavaScript](img/postgres.png)

first work with PostgreSQL must be instaled, don't worry!

1. open your favorite terminal and install with scoop:
`scoop install postgres`

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
