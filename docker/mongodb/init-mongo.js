db = db.getSiblingDB('smp_mongo');

db.createUser({
  user: 'admin',
  pwd: 'smp_show_banners',
  roles: [{ role: 'readWrite', db: 'smp_mongo' }],
});

db.createCollection('smp_show_banners');
db.smp_show_banners.insertOne({
  teste: { company: 5, unity: 2, role: 23 },
});
