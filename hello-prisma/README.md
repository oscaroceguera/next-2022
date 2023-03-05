# PRISMA

## 1. Create TypeScript project and set up Prisma

As a first step, create a project directory and navigate into it:

```shell
  mkdir hello-prisma
  cd hello-prisma
```

Next, initialize a TypeScript project using npm:

```shell
  npm init -y
  npm install typescript ts-node @types/node --save-dev
```

Now, initialize TypeScript:

```shell
  npx tsc --init
```

Then, install the Prisma CLI as a development dependency in the project:

```shell
  npm install prisma --save-dev
```

Finally, set up Prisma with the init command of the Prisma CLI:

```shell
  npx prisma init --datasource-provider sqlite
```

## 2. Model your data in the Prisma schema

The Prisma schema provides an intuitive way to model data. Add the following models to your schema.prisma file

## 3. Run a migration to create your database tables with Prisma Migrate

At this point, you have a Prisma schema but no database yet. Run the following command in your terminal to create the SQLite database and the User and Post tables represented by your models:

```shell
  npx prisma migrate dev --name init
```

This command did two things:

It creates a new SQL migration file for this migration in the prisma/migrations directory.
It runs the SQL migration file against the database.
Because the SQLite database file didn't exist before, the command also created it inside the prisma directory with the name dev.db as defined via the environment variable in the .env file.

Congratulations, you now have your database and tables ready. Let's go and learn how you can send some queries to read and write data!

## 4. Explore how to send queries to your database with Prisma Client

To send queries to the database, you will need a TypeScript file to execute your Prisma Client queries. Create a new file called script.ts for this purpose:

```shell
  touch script.ts
```

## 4.1. Create a new User record

Let's start with a small query to create a new User record in the database and log the resulting object to the console. Add the following code to your script.ts file

Next, execute the script with the following command:

```shell
  npx ts-node script.ts

  // output
  { id: 1, email: 'alice@prisma.io', name: 'Alice' }

```

## 4.2. Retrieve all User records

Prisma Client offers various queries to read data from your database. In this section, you'll use the findMany query that returns all the records in the database for a given model.

Delete the previous Prisma Client query and add the new findMany query instead:

## 4.3. Explore relation queries with Prisma

One of the main features of Prisma Client is the ease of working with relations. In this section, you'll learn how to create a User and a Post record in a nested write query. Afterwards, you'll see how you can retrieve the relation from the database using the include option.

```shell
npx ts-node script.ts
```

## 5. Next steps

In this Quickstart guide, you have learned how to get started with Prisma in a plain TypeScript project. Feel free to explore the Prisma Client API a bit more on your own, e.g. by including filtering, sorting, and pagination options in the findMany query or exploring more operations like update and delete queries.

### Explore the data in Prisma Studio

Prisma comes with a built-in GUI to view and edit the data in your database. You can open it using the following command:

```shell
  npx prisma studio
```
