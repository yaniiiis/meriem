const users = [
  {
    id: 'egzeg',
    username: 'yanis',
    email: 'test@gmail.com',
    password: '12345',
    createdAt: '17/05/2019 9:30 AM',
    isLoggedIn: true,
  },
  {
    id: 'gsme',
    username: 'yanis',
    email: 'test@gmail.com',
    password: '12345',
    createdAt: '17/05/2019 9:30 AM',
    isLoggedIn: true,
  },
  {
    id: 'apsm',
    username: 'yanis',
    email: 'test2@gmail.com',
    password: '12345',
    createdAt: '17/05/2019 9:30 AM',
    isLoggedIn: true,
  },
];

const products = [
  {
    id: 'eddf',
    name: 'mobile phone',
    description: 'macro pro',
    price: 2500,
    rating: [
      { userID: 'efef', rate: 5 },
      { userID: 'efef', rate: 7 },
    ],
    like: ['fsdgs'],
  },
  {
    id: 'sfs',
    name: 'pc ',
    description: 'dell pro',
    price: 2500,
    rating: [{ userID: 'efef', rate: 5 }],
    like: ['fsdgs'],
  },
  {
    id: 'kopkop',
    name: 'car',
    description: 'bmw pro',
    price: 2500,
    rating: [{ userID: 'efef', rate: 5 }],
    like: ['fsdgs'],
  },
];

function addUser(user) {
  const userExist = users.find((u) => u.id == user.id);
  if (userExist) {
    console.log('User already has an account');
  } else {
    users.push({
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      createdAt: user.createdAt,
      isLoggedIn: user.isLoggedIn,
    });
    console.log(users);
  }
}

// addUser({
//   id: 'freaps',
//   username: 'test',
//   email: 'test@gmail.com',
//   password: '12345',
//   createdAt: '17/05/2019 9:30 AM',
//   isLoggedIn: true,
// });

function signIn(email, password) {
  const userExist = users.find(
    (u) => u.email == email && u.password == password
  );
  if (userExist) {
    console.log(userExist);
  } else {
    console.log('user does not exist');
  }
}

// signIn('test2@gmail.com', '12345');

function rateProduct(productId, userId, rate) {
  const index = products.findIndex((p) => p.id == productId);
  products[index].rating.push({ userID: userId, rate: rate });
  console.log(products[index].rating);
}
// rateProduct('kopkop', 'egzeg', 14);

function averageRatin(productId) {
  const product = products.find((p) => p.id == productId);
  if (!product) {
    return console.log('product not exist');
  }
  let sum = 0;
  product.rating.forEach((element) => {
    sum = sum + element.rate;
  });
  const average = sum / product.rating.length;

  return console.log(
    'average rating for this product is : ' + average.toString()
  );
}

// averageRatin('eddf');

function likeProduct(productId, userId) {
  const index = products.findIndex((p) => p.id == productId);
  if (index == -1) {
    return console.log('product not exist');
  }
  if (!products[index].like.includes(userId)) {
    products[index].like.push(userId);
  } else {
    const indexOfLike = products[index].like.indexOf(userId);
    products[index].like.splice([indexOfLike], 1);
  }
  console.log(products[index]);
}

likeProduct('kopkop', 'sdfs');
