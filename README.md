# DB Ensurer

[![Build Status](https://travis-ci.org/zephinzer/db-ensurer.svg?branch=master)](https://travis-ci.org/zephinzer/db-ensurer)

Job for running to create a new database with [the `db-maker` service](https://github.com/zephinzer/db-maker). Run this job to create the required database and database user.

## Usage

See the [docker-compose.yml](./docker-compose.yml) for a simple setup.


## Job Configuration

| Environment Variable | Type | Description |
| --- | --- | --- |
| `DB_MAKER_URL` | String | Specifies the base URL of the `db-maker` service. Eg. `http://db-maker:8080` |
| `DB_HOST` | String | Specifies the hostname of the database. Eg. `mysql` (port defaults to 3306) |
| `DB_NAME` | String | Specifies the name of the new schema you wish to create. Eg. `my_schema` |
| `DB_USER` | String | Specifies the user which will be granted access to the new schema. Eg. `schema_user` |
| `DB_PASSWORD` | String | Specifies the password of the user specified in `DB_USER` |
| `DB_ROOT_PASSWORD` | String | Specifies the root password so that the user can be created |
| `MAX_RETRY` | String | Specifies the maximum number of retries of the job before it exits with 1 |
| `INTERVAL_RETRY` | String | Specifies the duration in milliseconds between connection retries |

## License
This project is licensed under [the MIT license](./LICENSE).

# Cheers
