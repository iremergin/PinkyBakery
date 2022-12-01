const bosAlanKategoriID = (req, res, next) => {
  const { KategoriId } = req.body;

  if (KategoriId) {
    return next();
  }

  return res.send({message: "Boş değer olamaz" });
};

const bosAlanKategoriAd = (req, res, next) => {
  const { KategoriAdi } = req.body;

  if (KategoriAdi) {
    return next();
  }

  return res.send({message: "Boş değer olamaz" });
};

const bosAlanUrun = (req, res, next) => {
  const {
    UrunAdi,
    UrunAciklama,
    UrunResimUrl,
    UrunFiyat,
    UrunStokAdedi,
    UrunKategoriID,
    UrunDurumuID,
  } = req.body;

  if (
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
  return res.send({message: "Boş değer olamaz" });
};

const bosAlanSiparis = (req, res, next) => {
  const {
    UrunAdi,
    SiparisTarihi,
    TeslimTarihi,
    SiparisDurumID,
    MusteriNotu,
    FirmaNotu,
    IlID,
    AcikAdres,
    Telefon,
    Ad,
    Soyad,
    ToplamFiyat
  } = req.body;

  if (
    SiparisTarihi &&
    TeslimTarihi &&
    SiparisDurumID &&
    MusteriNotu &&
    FirmaNotu &&
    IlID &&
    AcikAdres &&
    Telefon &&
    Ad &&
    Soyad &&
    ToplamFiyat
  ) {
    return next();
  }
  return res.send({message: "Boş değer olamaz" });
};

module.exports = { bosAlanKategoriID, bosAlanKategoriAd, bosAlanUrun, bosAlanSiparis };
