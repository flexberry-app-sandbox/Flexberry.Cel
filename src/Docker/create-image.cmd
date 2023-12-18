docker build --no-cache -f SQL\Dockerfile.PostgreSql -t cel/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t cel/app ../..
