const bosAlanKategoriID = (req, res, next) => {
  const { KategoriId } = req.body;

  if (KategoriId) {
    return next();
  }

  return res.send("Boş değer olamaz");
};

const bosAlanKategoriAd = (req, res, next) => {
  const { KategoriAdi } = req.body;

  if (KategoriAdi) {
    return next();
  }

  return res.send("Boş değer olamaz");
};

const bosAlanUrun = (req, res, next) => {
  const {
    UrunId,
    UrunAdi,
    UrunAciklama,
    UrunResimUrl,
    UrunFiyat,
    UrunStokAdedi,
    UrunKategoriID,
    UrunDurumuID,
  } = req.body;

  if (
    UrunId ||
    UrunAdi ||
    UrunAciklama ||
    UrunResimUrl ||
    UrunFiyat ||
    UrunStokAdedi ||
    UrunKategoriID ||
    UrunDurumuID
  ) {
    return next();
  }
  return res.send("Boş değer olamaz.");
};

module.exports = { bosAlanKategoriID, bosAlanKategoriAd, bosAlanUrun };
