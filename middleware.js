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
    UrunID,
    UrunAdi,
    UrunAciklama,
    UrunResimUrl,
    UrunFiyat,
    UrunStokAdedi,
    UrunKategoriID,
    UrunDurumuID,
  } = req.body;

  if (
    UrunID &&
    UrunAdi &&
    UrunAciklama &&
    UrunResimUrl &&
    UrunFiyat &&
    UrunStokAdedi &&
    UrunKategoriID &&
    UrunDurumuID
  ) {
    return next();
  }
  return res.send("Boş değer olamaz.");
};

module.exports = { bosAlanKategoriID, bosAlanKategoriAd };
