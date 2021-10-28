### Goals:

1. Produce a fully working proof of concpet API server and accompanying NoSQL database layer
2. Use open-source modules to quickly build new product
3. create maintainable and extendable code
4. explain code decisions & architecture of choices at time of code review

### Tech restriction 

1. Must use Koa.JS or express.js
2. Must enforce your NoSQL using data model/schemas JOI
3. Must enforce your NoSQL database (ArangoDB prefered)

### Task outline

1. Create a simple CRUD
2. Develop and create Database layer with two models (People & Pet)
   1) People
      - any properties for person object
      - properties should be indetifiable and searchable through API
   2) Pets
      - any properties
      - properties SHOULD be identifiable & searchable throuhg API
   3) Relationship between pets & person
      1) Pets belong to a single person (Pet ---> Person)
      2) Person can own multiple pets (Person ---> [Pet, Pet, Pet])
      3) Any person can have several ohter friends ([Person, Person, Person] <---> [Person, Person, Person])
3. API 
   1) CREATE - create PETS and PEOPLE (create one? or create bulk?)
   2) READ
      - PETS should searchable by their ID or by their PERSON
        * GET `/pets/:id`
        * GET `/pets?search={owner=personID}`
      - PEOPLE shoudl be searchable by their ID or by a friend's ID
        * GET `/people/:id`
        * GET `/people/search={friends=[personID]}`
   3) UPDATE
      - PETS can be assigned to PEOPLE
        * PUT `/pets` data: `{action: ["assign", "remove"], owner: personID}`
      - other PET properties can be editted (unless should be protected)
        * PUT `/pets` data: `{propA: 'nyaa', weight: 4, category: 'cat'}`
        * PUT `/pets` data: `{id: '0ufuew98fuew9'}` filter out `id` using JOI
      - PEOPLE can be assigned/unassigned as friends
        * PUT `/people` data: `{action: enum["assign", "remove"], friends=[personID]}`
      - other PERSON properties
        * PUT `/people` data: `{...props}` also filter with JOI
   4) DELETE
      - PETS can be deleted from DB
        * DELETE `/PETS/:id` - sometimes we do not want to permanent delete but use soft-delete & purge for hard delete
      - PEOPLE can be deleted from the DB
        - DELETE `PEOPLE/:id`
4. Tests
   1. Using Mocha/Chai or simple http calling package, write a suite of tests to call and test your API endpoints
5. Save and Submit Project
   ~~1. Save project on gitlab (private)~~
   > In interview, I already ask do they want it the assessment in private or public. They said, public is OK.
   > So, I will ignore the note here

6. Bonuses
   1. Use ArangoDB 
   2. Use docker & docker-compose 
   3. Document project (API, DB UML diagram, README.md, etc...)
   4. Extend or improve the project functionality, design, saftey or efficiency and explain why
