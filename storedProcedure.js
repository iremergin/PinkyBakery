//#region KATEGORİ
const spKategoriList = async () => {
  return await sqlConRes.request().execute("usp_KategoriList");
};

const spKategoriEkle = async (spInput, spDataType, KategoriAdi) => {
  return await sqlConRes
    .request()
    .input(spInput, spDataType, KategoriAdi)
    .execute("usp_KategoriEkle");
};

const spKategoriGuncelle = async (
  spInput,
  spInput2,
  spDataType,
  spDataType2,
  KategoriId,
  KategoriAdi
) => {
  return await sqlConRes
    .request()
    .input(spInput, spDataType, KategoriId)
    .input(spInput2, spDataType2, KategoriAdi)
    .execute("usp_KategoriGuncelle");
};

const spKategoriSil = async (spInput, spDataType, KategoriId) => {
  return await sqlConRes
    .request()
    .input(spInput, spDataType, KategoriId)
    .execute("usp_KategoriSil");
};

//#endregion

//#region ÜRÜN
const spUrunList = async () => {
  return await sqlConRes.request().execute("usp_UrunList");
};

const spUrunEkle = async (
  ad,
  aciklama,
  resimUrl,
  fiyat,
  stokAdedi,
  kategoriId,
  urunDurumuId,
  adDataType,
  aciklamaDataType,
  resimUrlDataType,
  fiyatDataType,
  stokAdediDataType,
  kategoriIdDataType,
  urunDurumuIdDataType,
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
    .input(ad, adDataType, urunAdi)
    .input(aciklama, aciklamaDataType, urunAciklama)
    .input(resimUrl, resimUrlDataType, urunResimUrl)
    .input(fiyat, fiyatDataType, urunFiyat)
    .input(stokAdedi, stokAdediDataType, urunStokAdedi)
    .input(kategoriId, kategoriIdDataType, urunKategoriID)
    .input(urunDurumuId, urunDurumuIdDataType, urunDurumuID)
    .execute("usp_UrunEkle");
};

const spUrunGuncelle = async (
  id,
  ad,
  aciklama,
  resimUrl,
  fiyat,
  stokAdedi,
  kategoriId,
  urunDurumuId,
  idDataType,
  adDataType,
  aciklamaDataType,
  resimUrlDataType,
  fiyatDataType,
  stokAdediDataType,
  kategoriIdDataType,
  urunDurumuIdDataType,
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
    .input(id, idDataType, urunId)
    .input(ad, adDataType, urunAdi)
    .input(aciklama, aciklamaDataType, urunAciklama)
    .input(resimUrl, resimUrlDataType, urunResimUrl)
    .input(fiyat, fiyatDataType, urunFiyat)
    .input(stokAdedi, stokAdediDataType, urunStokAdedi)
    .input(kategoriId, kategoriIdDataType, urunKategoriID)
    .input(urunDurumuId, urunDurumuIdDataType, urunDurumuID)
    .execute("usp_UrunGuncelle");
};

const spUrunSil = async (spInput, spDataType, UrunId) => {
  return await sqlConRes
    .request()
    .input(spInput, spDataType, UrunId)
    .execute("usp_UrunSil");
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
  spUrunSil
};
