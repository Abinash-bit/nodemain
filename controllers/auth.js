exports.getLogin = (req, res, next) => {
  // Check if the 'Cookie' header is present in the request
  if (req.get('Cookie')) {
    const cookies = req
    .get('Cookie')
    .split(';')
    .trim()
    .split('=')[1];
    if (cookies.length >= 2) {
      const isLoggedIn = cookies[1].trim().split('=')[1];
      console.log(isLoggedIn);
    }
  }

  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: isLoggedIn
  });
};

exports.postLogin = (req, res, next) => {
  res.setHeader('Set-Cookie', 'loggedIn=true');
  res.redirect('/');
};
