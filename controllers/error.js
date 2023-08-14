exports.get404 = (req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
};

// mongodb://abinash-bit:Abinash@ac-xuw2vgs-shard-00-00.orm6zuo.mongodb.net:27017,ac-xuw2vgs-shard-00-01.orm6zuo.mongodb.net:27017,ac-xuw2vgs-shard-00-02.orm6zuo.mongodb.net:27017/?ssl=true&replicaSet=atlas-rfsxph-shard-0&authSource=admin&retryWrites=true&w=majority
// 64da49ce4a5473868b4b014e