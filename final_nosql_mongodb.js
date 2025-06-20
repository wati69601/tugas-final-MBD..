// =======================
// SOAL 1 & 2: Model Key-Value
// =======================

use keyValueDB;

db.keyValueCollection.insertMany([
  { _id: "user:001", value: "Andi" },
  { _id: "user:002", value: "Budi" },
  { _id: "user:003", value: "Cici" },
  { _id: "user:004", value: "Dedi" },
  { _id: "user:005", value: "Eka" }
]);

// Menampilkan data key-value
db.keyValueCollection.find().pretty();


// =======================
// SOAL 3 & 4: Model Wide-Column
// =======================

use wideColumnDB;

db.wideColumnCollection.insertMany([
  { id: 1, nama: "Andi", nilai_math: 85, nilai_english: 90 },
  { id: 2, nama: "Budi", nilai_math: 78, nilai_science: 88 },
  { id: 3, nama: "Cici", nilai_english: 92, nilai_science: 89 },
  { id: 4, nama: "Dedi", nilai_math: 70 },
  { id: 5, nama: "Eka", nilai_english: 95, nilai_math: 88, nilai_science: 91 }
]);

// Menampilkan data wide-column
db.wideColumnCollection.find().pretty();
