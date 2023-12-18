docker build --no-cache -f SQL\Dockerfile.PostgreSql -t cel-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t cel-java/app ../../..
