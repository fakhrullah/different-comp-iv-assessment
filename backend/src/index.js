require('dotenv').config();
const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');
const {
  petIndex, createPet, getPetById, updatePet, deletePet,
} = require('./pets');
const {
  peopleIndex, createPerson, getPersonById, updatePerson, deletePerson,
} = require('./people');

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(async (ctx, next) => {
  // console.log('API: accessed');
  next();
});

// People
router.get('/people', peopleIndex);
router.post('/people', createPerson);
router.get('/people/:personId', getPersonById);
router.put('/people/:personId', updatePerson);
router.delete('/people/:personId', deletePerson);

// Pets
router.get('/pets', petIndex);
router.post('/pets', createPet);
router.get('/pets/:petId', getPetById);
router.put('/pets/:petId', updatePet);
router.delete('/pets/:petId', deletePet);

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx, next) => {
  // console.log('End');
  next();
});

app.listen(process.env.PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log(`Server start at PORT ${process.env.PORT || 3000}`);
});
