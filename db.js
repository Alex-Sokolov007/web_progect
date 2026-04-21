import  sqlite3  from  'sqlite3' 

const db = new sqlite3.Database("shop.db")

function createTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      sure_name TEXT NOT NULL,
      phone INTEGER
    );
  `

  db.run(sql, function (err) {
    if (err) {
      console.error("Ошибка создания таблицы:", err.message);
    } else {
      console.log("Таблица создана / уже существует");
    }
  })
}

function createTable2() {
  const sql = `
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT(100) NOT NULL,
      prise REAL NOT NULL,
      image TEXT(100)
    );
  `

  db.run(sql, function (err) {
    if (err) {
      console.error("Ошибка создания таблицы:", err.message);
    } else {
      console.log("Таблица создана / уже существует");
    }
  })
}

function addQwery(name, sure_name, phone) {
  const sql = `
    INSERT INTO users (name, sure_name, phone)
    VALUES (?, ?, ?)
  `;

  db.run(sql, [name, sure_name, phone], function (err) {
    if (err) {
      console.error("Ошибка при добавлении:", err.message);
    } else {
      console.log(`Пользователь добавлен, ID: ${this.lastID}`);
    }
  });
}

function addQwery2(name, prise, image) {
  const sql = `
    INSERT INTO products (name, prise, image)
    VALUES (?, ?, ?)
  `;

  db.run(sql, [name, prise, image], function (err) {
    if (err) {
      console.error("Ошибка при добавлении:", err.message);
    } else {
      console.log(`Товар добавлен, ID: ${this.lastID}`);
    }
  });
}

async function getAll(table_name = 'users') {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM ${table_name}`;
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.error("Ошибка выборки:", err.message);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

// createTable2()
// addQwery('Иван', "Золо", 88005553535)
// addQwery2('Сумашедшая рыба', 100, 'https://c.tenor.com/Uo3_qflEe1sAAAAC/tenor.gif')
// addQwery2('рыба', 100.0, 'картинка')

// console.log(getAll('products'))

export default getAll