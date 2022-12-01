const express = require("express");
const app = express();
const spFunction = require("./storedProcedure");
const middleware = require("./middleware");
const sql = require("mssql");

//#region KATEGORİ
const kategoriList = app.get("/kategoriList", async (req, res) => {
  try {
    const spKategoriListRes = await spFunction.spKategoriList();
    res.send(spKategoriListRes.recordset);
  } catch (error) {
    res.send(error.message);
  }
});

const kategoriEkle = app.post(
  "/kategoriEkle",
  middleware.bosAlanKategoriAd,
  async (req, res) => {
    const { KategoriAdi } = req.body;

    try {
      const spKategoriEkleRes = await spFunction.spKategoriEkle(KategoriAdi);
      res.send({ responseCode: 100, message: "Kategori Eklendi" });
    } catch (err) {
      res.send(err.message);
    }
  }
);

const kategoriGuncelle = app.put(
  "/kategoriGuncelle",
  middleware.bosAlanKategoriID,
  middleware.bosAlanKategoriAd,
  async (req, res) => {
    const { KategoriId, KategoriAdi } = req.body;

    try {
      const spKategoriGuncelleRes = await spFunction.spKategoriGuncelle(
        KategoriId,
        KategoriAdi
        // "ID", sql.Int, KategoriId,
        // "Ad", sql.VarChar(100), KategoriAdi
      );

      res.send({ responseCode: 100, message: "Kategori Güncellendi" });
    } catch (error) {
      res.send(error.message);
    }
  }
);

const kategoriSil = app.delete(
  "/kategoriSil",
  middleware.bosAlanKategoriID,
  async (req, res) => {
    const { KategoriId } = req.body;

    try {
      const spKategoriSilRes = await spFunction.spKategoriSil(KategoriId);
      res.send({ responseCode: 100, message: "Kategori Silindi" });
    } catch (error) {
      res.send(error.message);
    }
  }
);

//#endregion

//#region ÜRÜN
const urunList = app.get("/urunList", async (req, res) => {
  try {
    const spUrunListRes = await spFunction.spUrunList();
    res.send(spUrunListRes.recordset);
  } catch (error) {
    res.send(error.message);
  }
});

const urunEkle = app.post(
  "/urunEkle",
  middleware.bosAlanUrun,
  async (req, res) => {
    const {
      UrunAdi,
      UrunAciklama,
      UrunResimUrl,
      UrunFiyat,
      UrunStokAdedi,
      UrunKategoriID,
      UrunDurumuID,
    } = req.body;
    try {
      const spUrunEkleRes = await spFunction.spUrunEkle(
        UrunAdi,
        UrunAciklama,
        UrunResimUrl,
        UrunFiyat,
        UrunStokAdedi,
        UrunKategoriID,
        UrunDurumuID
      );
      res.send({ responseCode: 100, message: "Ürün Eklendi" });
    } catch (error) {
      res.send(error.message);
    }
  }
);

const urunGuncelle = app.put(
  "/urunGuncelle",
  middleware.bosAlanUrun,
  async (req, res) => {
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

    try {
      const spUrunGuncelleRes = await spFunction.spUrunGuncelle(
        UrunID,
        UrunAdi,
        UrunAciklama,
        UrunResimUrl,
        UrunFiyat,
        UrunStokAdedi,
        UrunKategoriID,
        UrunDurumuID
      );

      res.send({ responseCode: 100, message: "Ürün Güncellendi" });
    } catch (error) {
      res.send(error.message);
    }
  }
);

const urunSil = app.delete(
  "/urunSil",
  middleware.bosAlanUrun,
  async (req, res) => {
    const { UrunID } = req.body;

    try {
      const spUrunSilRes = await spFunction.spUrunSil(UrunID);
      res.send({ responseCode: 100, message: "Ürün Silindi" });
    } catch (error) {
      res.send(error.message);
    }
  }
);

//#endregion

//#region SİPARİS

const siparisList = app.get("/siparisList", async (req, res) => {
  try {
    const spSiparisListRes = await spFunction.spsiparisList();
    res.send(spSiparisListRes.recordset);
  } catch (error) {
    res.send(error.message);
  }
});

const siparisEkle = app.post("/siparisEkle", middleware.bosAlanSiparis, async (req, res) => {
  const {
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
    ToplamFiyat,
  } = req.body;
  try {
    const spSiparisEkleRes = await spFunction.spSiparisEkle(
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
    );
    res.send({ responseCode: 100, message: "Siparis Eklendi" });
  } catch (error) {
    res.send(error.message);
  }
});

const siparisGuncelle = app.put(
  "/siparisGuncelle",
  middleware.bosAlanSiparis,
  async (req, res) => {
    const {
      SiparisId,
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
      ToplamFiyat,
    } = req.body;

    try {
      const spUrunGuncelleRes = await spFunction.spSiparisGuncelle(
        SiparisId,
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
        ToplamFiyat,
      );

      res.send({ responseCode: 100, message: "Siparis Güncellendi" });
    } catch (error) {
      res.send(error.message);
    }
  }
);
//#endregion

module.exports = app;
