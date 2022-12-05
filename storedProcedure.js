const sql = require("mssql");
//#region KATEGORİ
const spKategoriList = async () => {
  return await sqlConRes.request().execute("usp_KategoriList");
};

const spKategoriEkle = async (kategoriAdi) => {
  return await sqlConRes
    .request()
    .input("Ad", sql.VarChar(100), kategoriAdi)
    .execute("usp_KategoriEkle");
};

const spKategoriGuncelle = async (kategoriId, kategoriAdi) => {
  return await sqlConRes
    .request()
    .input("ID", sql.Int, kategoriId)
    .input("Ad", sql.VarChar(100), kategoriAdi)
    .execute("usp_KategoriGuncelle");
};

const spKategoriSil = async (kategoriId) => {
  return await sqlConRes
    .request()
    .input("ID", sql.Int, kategoriId)
    .execute("usp_KategoriSil");
};

//#endregion

//#region ÜRÜN
const spUrunList = async () => {
  return await sqlConRes.request().execute("usp_UrunList");
};

const spUrunEkle = async (
  urunAdi,
  urunAciklama,
  urunResimUrl,
  urunFiyat,
  urunStokAdedi,
  urunKategoriID,
  urunDurumuID
) => {
  return await sqlConRes
    .request()
    .input("Ad", sql.VarChar(100), urunAdi)
    .input("Aciklama", sql.VarChar(250), urunAciklama)
    .input("ResimUrl", sql.VarChar(200), urunResimUrl)
    .input("Fiyat", sql.Money, urunFiyat)
    .input("StokAdedi", sql.Int, urunStokAdedi)
    .input("KategoriID", sql.Int, urunKategoriID)
    .input("UrunDurumuID", sql.Int, urunDurumuID)
    .execute("usp_UrunEkle");
};

const spUrunGuncelle = async (
  urunId,
  urunAdi,
  urunAciklama,
  urunResimUrl,
  urunFiyat,
  urunStokAdedi,
  urunKategoriID,
  urunDurumuID
) => {
  return await sqlConRes
    .request()
    .input("ID", sql.Int, urunId)
    .input("Ad", sql.VarChar(100), urunAdi)
    .input("Aciklama", sql.VarChar(250), urunAciklama)
    .input("ResimUrl", sql.VarChar(200), urunResimUrl)
    .input("Fiyat", sql.Money, urunFiyat)
    .input("StokAdedi", sql.Int, urunStokAdedi)
    .input("KategoriID", sql.Int, urunKategoriID)
    .input("UrunDurumuID", sql.Int, urunDurumuID)
    .execute("usp_UrunGuncelle");
};

const spUrunSil = async (urunId) => {
  return await sqlConRes
    .request()
    .input("ID", sql.Int, urunId)
    .execute("usp_UrunSil");
};

//#endregion

//#region SİPARİS
const spsiparisList = async () => {
  return await sqlConRes.request().execute("usp_SiparisList");
};

const spSiparisEkle = async (
  siparisId,
  urunId,
  urunFiyati,
  siparisAdedi
) => {
  return await sqlConRes
    .request()
    .input("SiparisID", sql.Int, siparisId)
    .input("UrunID", sql.Int, urunId)
    .input("UrunFiyati", sql.Money, urunFiyati)
    .input("SiparisAdedi", sql.Int, siparisAdedi)
    .execute("usp_SiparisEkle");
};

const spSiparisGuncelle = async (
  id,
  siparisId,
  urunId,
  urunFiyati,
  siparisAdedi
) => {
  return await sqlConRes
    .request()
    .input("ID", sql.Int, id)
    .input("SiparisID", sql.Int, siparisId)
    .input("UrunID", sql.Int, urunId)
    .input("UrunFiyati", sql.Money, urunFiyati)
    .input("SiparisAdedi", sql.Int, siparisAdedi)
    .execute("usp_SiparisGuncelle");
};
//#endregion

//#region URUNDETAY
const spUrunDetayList = async (id) => {
  return await sqlConRes
    .request()
    .input("ID", sql.Int, id)
    .execute("usp_UrunDetayList");
};
//#endregion

module.exports = {
  spUrunList,
  spKategoriList,
  spKategoriEkle,
  spKategoriGuncelle,
  spKategoriSil,
  spUrunEkle,
  spUrunGuncelle,
  spUrunSil,
  spsiparisList,
  spSiparisEkle,
  spSiparisGuncelle,
  spUrunDetayList,
};
