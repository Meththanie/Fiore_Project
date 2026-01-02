


/**
 *  GET /
 * homepage
 */
exports.homepage = async(req, res) => {
  res.render('index');
}


/**
 *  GET /
 * weddingspage
 */
exports.weddingspage = async(req, res) => {
  res.render('weddings');
}


/**
 *  GET /
 * birthday-partiespage
 */
exports.birthdaypartiespage = async(req, res) => {
  res.render('birthday-parties');
}


/**
 *  GET /
 * other-gatheringspage
 */
exports.othergatheringspage = async(req, res) => {
  res.render('other-gatherings');
}
